import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "./prisma"
import bcrypt from "bcryptjs"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        phoneNumber: { label: "Phone Number", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          if (!credentials?.phoneNumber || !credentials?.password) {
            return null
          }

          const user = await prisma.user.findUnique({
            where: { phoneNumber: credentials.phoneNumber }
          })

          if (!user) {
            return null
          }

          const passwordValid = bcrypt.compareSync(
            credentials.password,
            user.passwordHash
          )

          if (!passwordValid) {
            return null
          }

          return {
            id: user.id,
            phoneNumber: user.phoneNumber,
            role: user.role || "USER",
            name: user.name || "مستخدم"
          }
        } catch (error) {
          console.error("Auth error:", error)
          return null
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback-secret-key",
  pages: {
    signIn: "/login"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.phoneNumber = user.phoneNumber
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
        session.user.phoneNumber = token.phoneNumber as string
        session.user.role = token.role as string
      }
      return session
    }
  }
}

export default NextAuth(authOptions)