import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "./prisma"
import bcrypt from "bcryptjs"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        identifier: { label: "Username or Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.identifier || !credentials?.password) {
          return null
        }

        const identifier = credentials.identifier.trim()
        const isEmail = identifier.includes('@')

        const user = isEmail
          ? await prisma.user.findUnique({ where: { email: identifier.toLowerCase() } })
          : await prisma.user.findFirst({ where: { name: identifier } })

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
          name: user.name || "",
          email: user.email || "",
          phoneNumber: user.phoneNumber || "",
          role: user.role || "USER",
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
        token.name = user.name
        token.email = user.email
        token.phoneNumber = user.phoneNumber
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
        session.user.name = (token.name as string) || ""
        session.user.email = (token.email as string) || ""
        session.user.phoneNumber = (token.phoneNumber as string) || ""
        session.user.role = (token.role as string) || "USER"
      }
      return session
    }
  }
}

export default NextAuth(authOptions)