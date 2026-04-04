
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model UserStore
 * 
 */
export type UserStore = $Result.DefaultSelection<Prisma.$UserStorePayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model CompletedTask
 * 
 */
export type CompletedTask = $Result.DefaultSelection<Prisma.$CompletedTaskPayload>
/**
 * Model Deposit
 * 
 */
export type Deposit = $Result.DefaultSelection<Prisma.$DepositPayload>
/**
 * Model Withdrawal
 * 
 */
export type Withdrawal = $Result.DefaultSelection<Prisma.$WithdrawalPayload>
/**
 * Model ReferralReward
 * 
 */
export type ReferralReward = $Result.DefaultSelection<Prisma.$ReferralRewardPayload>
/**
 * Model AppSettings
 * 
 */
export type AppSettings = $Result.DefaultSelection<Prisma.$AppSettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs>;

  /**
   * `prisma.userStore`: Exposes CRUD operations for the **UserStore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStores
    * const userStores = await prisma.userStore.findMany()
    * ```
    */
  get userStore(): Prisma.UserStoreDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.completedTask`: Exposes CRUD operations for the **CompletedTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompletedTasks
    * const completedTasks = await prisma.completedTask.findMany()
    * ```
    */
  get completedTask(): Prisma.CompletedTaskDelegate<ExtArgs>;

  /**
   * `prisma.deposit`: Exposes CRUD operations for the **Deposit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deposits
    * const deposits = await prisma.deposit.findMany()
    * ```
    */
  get deposit(): Prisma.DepositDelegate<ExtArgs>;

  /**
   * `prisma.withdrawal`: Exposes CRUD operations for the **Withdrawal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Withdrawals
    * const withdrawals = await prisma.withdrawal.findMany()
    * ```
    */
  get withdrawal(): Prisma.WithdrawalDelegate<ExtArgs>;

  /**
   * `prisma.referralReward`: Exposes CRUD operations for the **ReferralReward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReferralRewards
    * const referralRewards = await prisma.referralReward.findMany()
    * ```
    */
  get referralReward(): Prisma.ReferralRewardDelegate<ExtArgs>;

  /**
   * `prisma.appSettings`: Exposes CRUD operations for the **AppSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppSettings
    * const appSettings = await prisma.appSettings.findMany()
    * ```
    */
  get appSettings(): Prisma.AppSettingsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.21.1
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Store: 'Store',
    UserStore: 'UserStore',
    Task: 'Task',
    CompletedTask: 'CompletedTask',
    Deposit: 'Deposit',
    Withdrawal: 'Withdrawal',
    ReferralReward: 'ReferralReward',
    AppSettings: 'AppSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "store" | "userStore" | "task" | "completedTask" | "deposit" | "withdrawal" | "referralReward" | "appSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      UserStore: {
        payload: Prisma.$UserStorePayload<ExtArgs>
        fields: Prisma.UserStoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStorePayload>
          }
          findFirst: {
            args: Prisma.UserStoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStorePayload>
          }
          findMany: {
            args: Prisma.UserStoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStorePayload>[]
          }
          create: {
            args: Prisma.UserStoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStorePayload>
          }
          createMany: {
            args: Prisma.UserStoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserStoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStorePayload>[]
          }
          delete: {
            args: Prisma.UserStoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStorePayload>
          }
          update: {
            args: Prisma.UserStoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStorePayload>
          }
          deleteMany: {
            args: Prisma.UserStoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserStoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStorePayload>
          }
          aggregate: {
            args: Prisma.UserStoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserStore>
          }
          groupBy: {
            args: Prisma.UserStoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStoreCountArgs<ExtArgs>
            result: $Utils.Optional<UserStoreCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      CompletedTask: {
        payload: Prisma.$CompletedTaskPayload<ExtArgs>
        fields: Prisma.CompletedTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompletedTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompletedTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload>
          }
          findFirst: {
            args: Prisma.CompletedTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompletedTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload>
          }
          findMany: {
            args: Prisma.CompletedTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload>[]
          }
          create: {
            args: Prisma.CompletedTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload>
          }
          createMany: {
            args: Prisma.CompletedTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompletedTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload>[]
          }
          delete: {
            args: Prisma.CompletedTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload>
          }
          update: {
            args: Prisma.CompletedTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload>
          }
          deleteMany: {
            args: Prisma.CompletedTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompletedTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompletedTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedTaskPayload>
          }
          aggregate: {
            args: Prisma.CompletedTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompletedTask>
          }
          groupBy: {
            args: Prisma.CompletedTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompletedTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompletedTaskCountArgs<ExtArgs>
            result: $Utils.Optional<CompletedTaskCountAggregateOutputType> | number
          }
        }
      }
      Deposit: {
        payload: Prisma.$DepositPayload<ExtArgs>
        fields: Prisma.DepositFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepositFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepositFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findFirst: {
            args: Prisma.DepositFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepositFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findMany: {
            args: Prisma.DepositFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          create: {
            args: Prisma.DepositCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          createMany: {
            args: Prisma.DepositCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepositCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          delete: {
            args: Prisma.DepositDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          update: {
            args: Prisma.DepositUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          deleteMany: {
            args: Prisma.DepositDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepositUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepositUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          aggregate: {
            args: Prisma.DepositAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeposit>
          }
          groupBy: {
            args: Prisma.DepositGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepositGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepositCountArgs<ExtArgs>
            result: $Utils.Optional<DepositCountAggregateOutputType> | number
          }
        }
      }
      Withdrawal: {
        payload: Prisma.$WithdrawalPayload<ExtArgs>
        fields: Prisma.WithdrawalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WithdrawalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WithdrawalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          findFirst: {
            args: Prisma.WithdrawalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WithdrawalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          findMany: {
            args: Prisma.WithdrawalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>[]
          }
          create: {
            args: Prisma.WithdrawalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          createMany: {
            args: Prisma.WithdrawalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WithdrawalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>[]
          }
          delete: {
            args: Prisma.WithdrawalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          update: {
            args: Prisma.WithdrawalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          deleteMany: {
            args: Prisma.WithdrawalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WithdrawalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WithdrawalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          aggregate: {
            args: Prisma.WithdrawalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawal>
          }
          groupBy: {
            args: Prisma.WithdrawalGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalGroupByOutputType>[]
          }
          count: {
            args: Prisma.WithdrawalCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalCountAggregateOutputType> | number
          }
        }
      }
      ReferralReward: {
        payload: Prisma.$ReferralRewardPayload<ExtArgs>
        fields: Prisma.ReferralRewardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralRewardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralRewardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload>
          }
          findFirst: {
            args: Prisma.ReferralRewardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralRewardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload>
          }
          findMany: {
            args: Prisma.ReferralRewardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload>[]
          }
          create: {
            args: Prisma.ReferralRewardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload>
          }
          createMany: {
            args: Prisma.ReferralRewardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferralRewardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload>[]
          }
          delete: {
            args: Prisma.ReferralRewardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload>
          }
          update: {
            args: Prisma.ReferralRewardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload>
          }
          deleteMany: {
            args: Prisma.ReferralRewardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralRewardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReferralRewardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload>
          }
          aggregate: {
            args: Prisma.ReferralRewardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferralReward>
          }
          groupBy: {
            args: Prisma.ReferralRewardGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralRewardGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralRewardCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralRewardCountAggregateOutputType> | number
          }
        }
      }
      AppSettings: {
        payload: Prisma.$AppSettingsPayload<ExtArgs>
        fields: Prisma.AppSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload>
          }
          findFirst: {
            args: Prisma.AppSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload>
          }
          findMany: {
            args: Prisma.AppSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload>[]
          }
          create: {
            args: Prisma.AppSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload>
          }
          createMany: {
            args: Prisma.AppSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload>[]
          }
          delete: {
            args: Prisma.AppSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload>
          }
          update: {
            args: Prisma.AppSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload>
          }
          deleteMany: {
            args: Prisma.AppSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingsPayload>
          }
          aggregate: {
            args: Prisma.AppSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppSettings>
          }
          groupBy: {
            args: Prisma.AppSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<AppSettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    referrals: number
    deposits: number
    withdrawals: number
    userStores: number
    completedTasks: number
    referralRewardsAsReferrer: number
    referralRewardsAsReferred: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrals?: boolean | UserCountOutputTypeCountReferralsArgs
    deposits?: boolean | UserCountOutputTypeCountDepositsArgs
    withdrawals?: boolean | UserCountOutputTypeCountWithdrawalsArgs
    userStores?: boolean | UserCountOutputTypeCountUserStoresArgs
    completedTasks?: boolean | UserCountOutputTypeCountCompletedTasksArgs
    referralRewardsAsReferrer?: boolean | UserCountOutputTypeCountReferralRewardsAsReferrerArgs
    referralRewardsAsReferred?: boolean | UserCountOutputTypeCountReferralRewardsAsReferredArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDepositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStoreWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompletedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedTaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferralRewardsAsReferrerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralRewardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferralRewardsAsReferredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralRewardWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    userStores: number
    tasks: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userStores?: boolean | StoreCountOutputTypeCountUserStoresArgs
    tasks?: boolean | StoreCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountUserStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStoreWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    completedTasks: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedTasks?: boolean | TaskCountOutputTypeCountCompletedTasksArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountCompletedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedTaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    balance: number | null
    activeStoreId: number | null
  }

  export type UserSumAggregateOutputType = {
    balance: number | null
    activeStoreId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    passwordHash: string | null
    name: string | null
    balance: number | null
    role: string | null
    referralCode: string | null
    referredByCode: string | null
    activeStoreId: number | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    passwordHash: string | null
    name: string | null
    balance: number | null
    role: string | null
    referralCode: string | null
    referredByCode: string | null
    activeStoreId: number | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phoneNumber: number
    passwordHash: number
    name: number
    balance: number
    role: number
    referralCode: number
    referredByCode: number
    activeStoreId: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    balance?: true
    activeStoreId?: true
  }

  export type UserSumAggregateInputType = {
    balance?: true
    activeStoreId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    phoneNumber?: true
    passwordHash?: true
    name?: true
    balance?: true
    role?: true
    referralCode?: true
    referredByCode?: true
    activeStoreId?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phoneNumber?: true
    passwordHash?: true
    name?: true
    balance?: true
    role?: true
    referralCode?: true
    referredByCode?: true
    activeStoreId?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phoneNumber?: true
    passwordHash?: true
    name?: true
    balance?: true
    role?: true
    referralCode?: true
    referredByCode?: true
    activeStoreId?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    phoneNumber: string
    passwordHash: string
    name: string | null
    balance: number
    role: string
    referralCode: string
    referredByCode: string | null
    activeStoreId: number | null
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    passwordHash?: boolean
    name?: boolean
    balance?: boolean
    role?: boolean
    referralCode?: boolean
    referredByCode?: boolean
    activeStoreId?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referredBy?: boolean | User$referredByArgs<ExtArgs>
    referrals?: boolean | User$referralsArgs<ExtArgs>
    deposits?: boolean | User$depositsArgs<ExtArgs>
    withdrawals?: boolean | User$withdrawalsArgs<ExtArgs>
    userStores?: boolean | User$userStoresArgs<ExtArgs>
    completedTasks?: boolean | User$completedTasksArgs<ExtArgs>
    referralRewardsAsReferrer?: boolean | User$referralRewardsAsReferrerArgs<ExtArgs>
    referralRewardsAsReferred?: boolean | User$referralRewardsAsReferredArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    passwordHash?: boolean
    name?: boolean
    balance?: boolean
    role?: boolean
    referralCode?: boolean
    referredByCode?: boolean
    activeStoreId?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referredBy?: boolean | User$referredByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    phoneNumber?: boolean
    passwordHash?: boolean
    name?: boolean
    balance?: boolean
    role?: boolean
    referralCode?: boolean
    referredByCode?: boolean
    activeStoreId?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredBy?: boolean | User$referredByArgs<ExtArgs>
    referrals?: boolean | User$referralsArgs<ExtArgs>
    deposits?: boolean | User$depositsArgs<ExtArgs>
    withdrawals?: boolean | User$withdrawalsArgs<ExtArgs>
    userStores?: boolean | User$userStoresArgs<ExtArgs>
    completedTasks?: boolean | User$completedTasksArgs<ExtArgs>
    referralRewardsAsReferrer?: boolean | User$referralRewardsAsReferrerArgs<ExtArgs>
    referralRewardsAsReferred?: boolean | User$referralRewardsAsReferredArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredBy?: boolean | User$referredByArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      referredBy: Prisma.$UserPayload<ExtArgs> | null
      referrals: Prisma.$UserPayload<ExtArgs>[]
      deposits: Prisma.$DepositPayload<ExtArgs>[]
      withdrawals: Prisma.$WithdrawalPayload<ExtArgs>[]
      userStores: Prisma.$UserStorePayload<ExtArgs>[]
      completedTasks: Prisma.$CompletedTaskPayload<ExtArgs>[]
      referralRewardsAsReferrer: Prisma.$ReferralRewardPayload<ExtArgs>[]
      referralRewardsAsReferred: Prisma.$ReferralRewardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phoneNumber: string
      passwordHash: string
      name: string | null
      balance: number
      role: string
      referralCode: string
      referredByCode: string | null
      activeStoreId: number | null
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referredBy<T extends User$referredByArgs<ExtArgs> = {}>(args?: Subset<T, User$referredByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    referrals<T extends User$referralsArgs<ExtArgs> = {}>(args?: Subset<T, User$referralsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    deposits<T extends User$depositsArgs<ExtArgs> = {}>(args?: Subset<T, User$depositsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findMany"> | Null>
    withdrawals<T extends User$withdrawalsArgs<ExtArgs> = {}>(args?: Subset<T, User$withdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findMany"> | Null>
    userStores<T extends User$userStoresArgs<ExtArgs> = {}>(args?: Subset<T, User$userStoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStorePayload<ExtArgs>, T, "findMany"> | Null>
    completedTasks<T extends User$completedTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$completedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "findMany"> | Null>
    referralRewardsAsReferrer<T extends User$referralRewardsAsReferrerArgs<ExtArgs> = {}>(args?: Subset<T, User$referralRewardsAsReferrerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "findMany"> | Null>
    referralRewardsAsReferred<T extends User$referralRewardsAsReferredArgs<ExtArgs> = {}>(args?: Subset<T, User$referralRewardsAsReferredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly balance: FieldRef<"User", 'Float'>
    readonly role: FieldRef<"User", 'String'>
    readonly referralCode: FieldRef<"User", 'String'>
    readonly referredByCode: FieldRef<"User", 'String'>
    readonly activeStoreId: FieldRef<"User", 'Int'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.referredBy
   */
  export type User$referredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.referrals
   */
  export type User$referralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.deposits
   */
  export type User$depositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    cursor?: DepositWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * User.withdrawals
   */
  export type User$withdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    where?: WithdrawalWhereInput
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    cursor?: WithdrawalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * User.userStores
   */
  export type User$userStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStore
     */
    select?: UserStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreInclude<ExtArgs> | null
    where?: UserStoreWhereInput
    orderBy?: UserStoreOrderByWithRelationInput | UserStoreOrderByWithRelationInput[]
    cursor?: UserStoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStoreScalarFieldEnum | UserStoreScalarFieldEnum[]
  }

  /**
   * User.completedTasks
   */
  export type User$completedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedTaskInclude<ExtArgs> | null
    where?: CompletedTaskWhereInput
    orderBy?: CompletedTaskOrderByWithRelationInput | CompletedTaskOrderByWithRelationInput[]
    cursor?: CompletedTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedTaskScalarFieldEnum | CompletedTaskScalarFieldEnum[]
  }

  /**
   * User.referralRewardsAsReferrer
   */
  export type User$referralRewardsAsReferrerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    where?: ReferralRewardWhereInput
    orderBy?: ReferralRewardOrderByWithRelationInput | ReferralRewardOrderByWithRelationInput[]
    cursor?: ReferralRewardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralRewardScalarFieldEnum | ReferralRewardScalarFieldEnum[]
  }

  /**
   * User.referralRewardsAsReferred
   */
  export type User$referralRewardsAsReferredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    where?: ReferralRewardWhereInput
    orderBy?: ReferralRewardOrderByWithRelationInput | ReferralRewardOrderByWithRelationInput[]
    cursor?: ReferralRewardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralRewardScalarFieldEnum | ReferralRewardScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    id: number | null
    price: number | null
    profitPerTask: number | null
    tasksAvailable: number | null
  }

  export type StoreSumAggregateOutputType = {
    id: number | null
    price: number | null
    profitPerTask: number | null
    tasksAvailable: number | null
  }

  export type StoreMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    profitPerTask: number | null
    tasksAvailable: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    profitPerTask: number | null
    tasksAvailable: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    name: number
    price: number
    profitPerTask: number
    tasksAvailable: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    id?: true
    price?: true
    profitPerTask?: true
    tasksAvailable?: true
  }

  export type StoreSumAggregateInputType = {
    id?: true
    price?: true
    profitPerTask?: true
    tasksAvailable?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    profitPerTask?: true
    tasksAvailable?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    profitPerTask?: true
    tasksAvailable?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    profitPerTask?: true
    tasksAvailable?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: number
    name: string
    price: number
    profitPerTask: number
    tasksAvailable: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    profitPerTask?: boolean
    tasksAvailable?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userStores?: boolean | Store$userStoresArgs<ExtArgs>
    tasks?: boolean | Store$tasksArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    profitPerTask?: boolean
    tasksAvailable?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    profitPerTask?: boolean
    tasksAvailable?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userStores?: boolean | Store$userStoresArgs<ExtArgs>
    tasks?: boolean | Store$tasksArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      userStores: Prisma.$UserStorePayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      profitPerTask: number
      tasksAvailable: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {StoreCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userStores<T extends Store$userStoresArgs<ExtArgs> = {}>(args?: Subset<T, Store$userStoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStorePayload<ExtArgs>, T, "findMany"> | Null>
    tasks<T extends Store$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Store$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Store model
   */ 
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'Int'>
    readonly name: FieldRef<"Store", 'String'>
    readonly price: FieldRef<"Store", 'Float'>
    readonly profitPerTask: FieldRef<"Store", 'Float'>
    readonly tasksAvailable: FieldRef<"Store", 'Int'>
    readonly isActive: FieldRef<"Store", 'Boolean'>
    readonly createdAt: FieldRef<"Store", 'DateTime'>
    readonly updatedAt: FieldRef<"Store", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
  }

  /**
   * Store createManyAndReturn
   */
  export type StoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
  }

  /**
   * Store.userStores
   */
  export type Store$userStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStore
     */
    select?: UserStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreInclude<ExtArgs> | null
    where?: UserStoreWhereInput
    orderBy?: UserStoreOrderByWithRelationInput | UserStoreOrderByWithRelationInput[]
    cursor?: UserStoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStoreScalarFieldEnum | UserStoreScalarFieldEnum[]
  }

  /**
   * Store.tasks
   */
  export type Store$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model UserStore
   */

  export type AggregateUserStore = {
    _count: UserStoreCountAggregateOutputType | null
    _avg: UserStoreAvgAggregateOutputType | null
    _sum: UserStoreSumAggregateOutputType | null
    _min: UserStoreMinAggregateOutputType | null
    _max: UserStoreMaxAggregateOutputType | null
  }

  export type UserStoreAvgAggregateOutputType = {
    storeId: number | null
  }

  export type UserStoreSumAggregateOutputType = {
    storeId: number | null
  }

  export type UserStoreMinAggregateOutputType = {
    id: string | null
    userId: string | null
    storeId: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserStoreMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    storeId: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserStoreCountAggregateOutputType = {
    id: number
    userId: number
    storeId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserStoreAvgAggregateInputType = {
    storeId?: true
  }

  export type UserStoreSumAggregateInputType = {
    storeId?: true
  }

  export type UserStoreMinAggregateInputType = {
    id?: true
    userId?: true
    storeId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserStoreMaxAggregateInputType = {
    id?: true
    userId?: true
    storeId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserStoreCountAggregateInputType = {
    id?: true
    userId?: true
    storeId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserStoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStore to aggregate.
     */
    where?: UserStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStores to fetch.
     */
    orderBy?: UserStoreOrderByWithRelationInput | UserStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStores
    **/
    _count?: true | UserStoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStoreMaxAggregateInputType
  }

  export type GetUserStoreAggregateType<T extends UserStoreAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStore[P]>
      : GetScalarType<T[P], AggregateUserStore[P]>
  }




  export type UserStoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStoreWhereInput
    orderBy?: UserStoreOrderByWithAggregationInput | UserStoreOrderByWithAggregationInput[]
    by: UserStoreScalarFieldEnum[] | UserStoreScalarFieldEnum
    having?: UserStoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStoreCountAggregateInputType | true
    _avg?: UserStoreAvgAggregateInputType
    _sum?: UserStoreSumAggregateInputType
    _min?: UserStoreMinAggregateInputType
    _max?: UserStoreMaxAggregateInputType
  }

  export type UserStoreGroupByOutputType = {
    id: string
    userId: string
    storeId: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserStoreCountAggregateOutputType | null
    _avg: UserStoreAvgAggregateOutputType | null
    _sum: UserStoreSumAggregateOutputType | null
    _min: UserStoreMinAggregateOutputType | null
    _max: UserStoreMaxAggregateOutputType | null
  }

  type GetUserStoreGroupByPayload<T extends UserStoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStoreGroupByOutputType[P]>
            : GetScalarType<T[P], UserStoreGroupByOutputType[P]>
        }
      >
    >


  export type UserStoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    storeId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStore"]>

  export type UserStoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    storeId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStore"]>

  export type UserStoreSelectScalar = {
    id?: boolean
    userId?: boolean
    storeId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserStoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type UserStoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $UserStorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStore"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      storeId: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userStore"]>
    composites: {}
  }

  type UserStoreGetPayload<S extends boolean | null | undefined | UserStoreDefaultArgs> = $Result.GetResult<Prisma.$UserStorePayload, S>

  type UserStoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserStoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserStoreCountAggregateInputType | true
    }

  export interface UserStoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStore'], meta: { name: 'UserStore' } }
    /**
     * Find zero or one UserStore that matches the filter.
     * @param {UserStoreFindUniqueArgs} args - Arguments to find a UserStore
     * @example
     * // Get one UserStore
     * const userStore = await prisma.userStore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStoreFindUniqueArgs>(args: SelectSubset<T, UserStoreFindUniqueArgs<ExtArgs>>): Prisma__UserStoreClient<$Result.GetResult<Prisma.$UserStorePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserStore that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserStoreFindUniqueOrThrowArgs} args - Arguments to find a UserStore
     * @example
     * // Get one UserStore
     * const userStore = await prisma.userStore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStoreFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStoreClient<$Result.GetResult<Prisma.$UserStorePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserStore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoreFindFirstArgs} args - Arguments to find a UserStore
     * @example
     * // Get one UserStore
     * const userStore = await prisma.userStore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStoreFindFirstArgs>(args?: SelectSubset<T, UserStoreFindFirstArgs<ExtArgs>>): Prisma__UserStoreClient<$Result.GetResult<Prisma.$UserStorePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserStore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoreFindFirstOrThrowArgs} args - Arguments to find a UserStore
     * @example
     * // Get one UserStore
     * const userStore = await prisma.userStore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStoreFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStoreClient<$Result.GetResult<Prisma.$UserStorePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserStores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStores
     * const userStores = await prisma.userStore.findMany()
     * 
     * // Get first 10 UserStores
     * const userStores = await prisma.userStore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStoreWithIdOnly = await prisma.userStore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserStoreFindManyArgs>(args?: SelectSubset<T, UserStoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStorePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserStore.
     * @param {UserStoreCreateArgs} args - Arguments to create a UserStore.
     * @example
     * // Create one UserStore
     * const UserStore = await prisma.userStore.create({
     *   data: {
     *     // ... data to create a UserStore
     *   }
     * })
     * 
     */
    create<T extends UserStoreCreateArgs>(args: SelectSubset<T, UserStoreCreateArgs<ExtArgs>>): Prisma__UserStoreClient<$Result.GetResult<Prisma.$UserStorePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserStores.
     * @param {UserStoreCreateManyArgs} args - Arguments to create many UserStores.
     * @example
     * // Create many UserStores
     * const userStore = await prisma.userStore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStoreCreateManyArgs>(args?: SelectSubset<T, UserStoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserStores and returns the data saved in the database.
     * @param {UserStoreCreateManyAndReturnArgs} args - Arguments to create many UserStores.
     * @example
     * // Create many UserStores
     * const userStore = await prisma.userStore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserStores and only return the `id`
     * const userStoreWithIdOnly = await prisma.userStore.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserStoreCreateManyAndReturnArgs>(args?: SelectSubset<T, UserStoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStorePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserStore.
     * @param {UserStoreDeleteArgs} args - Arguments to delete one UserStore.
     * @example
     * // Delete one UserStore
     * const UserStore = await prisma.userStore.delete({
     *   where: {
     *     // ... filter to delete one UserStore
     *   }
     * })
     * 
     */
    delete<T extends UserStoreDeleteArgs>(args: SelectSubset<T, UserStoreDeleteArgs<ExtArgs>>): Prisma__UserStoreClient<$Result.GetResult<Prisma.$UserStorePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserStore.
     * @param {UserStoreUpdateArgs} args - Arguments to update one UserStore.
     * @example
     * // Update one UserStore
     * const userStore = await prisma.userStore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStoreUpdateArgs>(args: SelectSubset<T, UserStoreUpdateArgs<ExtArgs>>): Prisma__UserStoreClient<$Result.GetResult<Prisma.$UserStorePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserStores.
     * @param {UserStoreDeleteManyArgs} args - Arguments to filter UserStores to delete.
     * @example
     * // Delete a few UserStores
     * const { count } = await prisma.userStore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStoreDeleteManyArgs>(args?: SelectSubset<T, UserStoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStores
     * const userStore = await prisma.userStore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStoreUpdateManyArgs>(args: SelectSubset<T, UserStoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserStore.
     * @param {UserStoreUpsertArgs} args - Arguments to update or create a UserStore.
     * @example
     * // Update or create a UserStore
     * const userStore = await prisma.userStore.upsert({
     *   create: {
     *     // ... data to create a UserStore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStore we want to update
     *   }
     * })
     */
    upsert<T extends UserStoreUpsertArgs>(args: SelectSubset<T, UserStoreUpsertArgs<ExtArgs>>): Prisma__UserStoreClient<$Result.GetResult<Prisma.$UserStorePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoreCountArgs} args - Arguments to filter UserStores to count.
     * @example
     * // Count the number of UserStores
     * const count = await prisma.userStore.count({
     *   where: {
     *     // ... the filter for the UserStores we want to count
     *   }
     * })
    **/
    count<T extends UserStoreCountArgs>(
      args?: Subset<T, UserStoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserStoreAggregateArgs>(args: Subset<T, UserStoreAggregateArgs>): Prisma.PrismaPromise<GetUserStoreAggregateType<T>>

    /**
     * Group by UserStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserStoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStoreGroupByArgs['orderBy'] }
        : { orderBy?: UserStoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserStoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStore model
   */
  readonly fields: UserStoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserStore model
   */ 
  interface UserStoreFieldRefs {
    readonly id: FieldRef<"UserStore", 'String'>
    readonly userId: FieldRef<"UserStore", 'String'>
    readonly storeId: FieldRef<"UserStore", 'Int'>
    readonly isActive: FieldRef<"UserStore", 'Boolean'>
    readonly createdAt: FieldRef<"UserStore", 'DateTime'>
    readonly updatedAt: FieldRef<"UserStore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserStore findUnique
   */
  export type UserStoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStore
     */
    select?: UserStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreInclude<ExtArgs> | null
    /**
     * Filter, which UserStore to fetch.
     */
    where: UserStoreWhereUniqueInput
  }

  /**
   * UserStore findUniqueOrThrow
   */
  export type UserStoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStore
     */
    select?: UserStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreInclude<ExtArgs> | null
    /**
     * Filter, which UserStore to fetch.
     */
    where: UserStoreWhereUniqueInput
  }

  /**
   * UserStore findFirst
   */
  export type UserStoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStore
     */
    select?: UserStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreInclude<ExtArgs> | null
    /**
     * Filter, which UserStore to fetch.
     */
    where?: UserStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStores to fetch.
     */
    orderBy?: UserStoreOrderByWithRelationInput | UserStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStores.
     */
    cursor?: UserStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStores.
     */
    distinct?: UserStoreScalarFieldEnum | UserStoreScalarFieldEnum[]
  }

  /**
   * UserStore findFirstOrThrow
   */
  export type UserStoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStore
     */
    select?: UserStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreInclude<ExtArgs> | null
    /**
     * Filter, which UserStore to fetch.
     */
    where?: UserStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStores to fetch.
     */
    orderBy?: UserStoreOrderByWithRelationInput | UserStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStores.
     */
    cursor?: UserStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStores.
     */
    distinct?: UserStoreScalarFieldEnum | UserStoreScalarFieldEnum[]
  }

  /**
   * UserStore findMany
   */
  export type UserStoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStore
     */
    select?: UserStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreInclude<ExtArgs> | null
    /**
     * Filter, which UserStores to fetch.
     */
    where?: UserStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStores to fetch.
     */
    orderBy?: UserStoreOrderByWithRelationInput | UserStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStores.
     */
    cursor?: UserStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStores.
     */
    skip?: number
    distinct?: UserStoreScalarFieldEnum | UserStoreScalarFieldEnum[]
  }

  /**
   * UserStore create
   */
  export type UserStoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStore
     */
    select?: UserStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreInclude<ExtArgs> | null
    /**
     * The data needed to create a UserStore.
     */
    data: XOR<UserStoreCreateInput, UserStoreUncheckedCreateInput>
  }

  /**
   * UserStore createMany
   */
  export type UserStoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStores.
     */
    data: UserStoreCreateManyInput | UserStoreCreateManyInput[]
  }

  /**
   * UserStore createManyAndReturn
   */
  export type UserStoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStore
     */
    select?: UserStoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserStores.
     */
    data: UserStoreCreateManyInput | UserStoreCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStore update
   */
  export type UserStoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStore
     */
    select?: UserStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreInclude<ExtArgs> | null
    /**
     * The data needed to update a UserStore.
     */
    data: XOR<UserStoreUpdateInput, UserStoreUncheckedUpdateInput>
    /**
     * Choose, which UserStore to update.
     */
    where: UserStoreWhereUniqueInput
  }

  /**
   * UserStore updateMany
   */
  export type UserStoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStores.
     */
    data: XOR<UserStoreUpdateManyMutationInput, UserStoreUncheckedUpdateManyInput>
    /**
     * Filter which UserStores to update
     */
    where?: UserStoreWhereInput
  }

  /**
   * UserStore upsert
   */
  export type UserStoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStore
     */
    select?: UserStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreInclude<ExtArgs> | null
    /**
     * The filter to search for the UserStore to update in case it exists.
     */
    where: UserStoreWhereUniqueInput
    /**
     * In case the UserStore found by the `where` argument doesn't exist, create a new UserStore with this data.
     */
    create: XOR<UserStoreCreateInput, UserStoreUncheckedCreateInput>
    /**
     * In case the UserStore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStoreUpdateInput, UserStoreUncheckedUpdateInput>
  }

  /**
   * UserStore delete
   */
  export type UserStoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStore
     */
    select?: UserStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreInclude<ExtArgs> | null
    /**
     * Filter which UserStore to delete.
     */
    where: UserStoreWhereUniqueInput
  }

  /**
   * UserStore deleteMany
   */
  export type UserStoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStores to delete
     */
    where?: UserStoreWhereInput
  }

  /**
   * UserStore without action
   */
  export type UserStoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStore
     */
    select?: UserStoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    storeId: number | null
    productPrice: number | null
    profitMargin: number | null
    sellingPrice: number | null
    earnings: number | null
  }

  export type TaskSumAggregateOutputType = {
    storeId: number | null
    productPrice: number | null
    profitMargin: number | null
    sellingPrice: number | null
    earnings: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    storeId: number | null
    title: string | null
    description: string | null
    imageUrl: string | null
    productPrice: number | null
    profitMargin: number | null
    sellingPrice: number | null
    earnings: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    storeId: number | null
    title: string | null
    description: string | null
    imageUrl: string | null
    productPrice: number | null
    profitMargin: number | null
    sellingPrice: number | null
    earnings: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    storeId: number
    title: number
    description: number
    imageUrl: number
    productPrice: number
    profitMargin: number
    sellingPrice: number
    earnings: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    storeId?: true
    productPrice?: true
    profitMargin?: true
    sellingPrice?: true
    earnings?: true
  }

  export type TaskSumAggregateInputType = {
    storeId?: true
    productPrice?: true
    profitMargin?: true
    sellingPrice?: true
    earnings?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    storeId?: true
    title?: true
    description?: true
    imageUrl?: true
    productPrice?: true
    profitMargin?: true
    sellingPrice?: true
    earnings?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    storeId?: true
    title?: true
    description?: true
    imageUrl?: true
    productPrice?: true
    profitMargin?: true
    sellingPrice?: true
    earnings?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    storeId?: true
    title?: true
    description?: true
    imageUrl?: true
    productPrice?: true
    profitMargin?: true
    sellingPrice?: true
    earnings?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    storeId: number
    title: string
    description: string
    imageUrl: string | null
    productPrice: number | null
    profitMargin: number | null
    sellingPrice: number | null
    earnings: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    productPrice?: boolean
    profitMargin?: boolean
    sellingPrice?: boolean
    earnings?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    completedTasks?: boolean | Task$completedTasksArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    productPrice?: boolean
    profitMargin?: boolean
    sellingPrice?: boolean
    earnings?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    storeId?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    productPrice?: boolean
    profitMargin?: boolean
    sellingPrice?: boolean
    earnings?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    completedTasks?: boolean | Task$completedTasksArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      completedTasks: Prisma.$CompletedTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: number
      title: string
      description: string
      imageUrl: string | null
      productPrice: number | null
      profitMargin: number | null
      sellingPrice: number | null
      earnings: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    completedTasks<T extends Task$completedTasksArgs<ExtArgs> = {}>(args?: Subset<T, Task$completedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly storeId: FieldRef<"Task", 'Int'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly imageUrl: FieldRef<"Task", 'String'>
    readonly productPrice: FieldRef<"Task", 'Float'>
    readonly profitMargin: FieldRef<"Task", 'Float'>
    readonly sellingPrice: FieldRef<"Task", 'Float'>
    readonly earnings: FieldRef<"Task", 'Float'>
    readonly isActive: FieldRef<"Task", 'Boolean'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }

  /**
   * Task.completedTasks
   */
  export type Task$completedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedTaskInclude<ExtArgs> | null
    where?: CompletedTaskWhereInput
    orderBy?: CompletedTaskOrderByWithRelationInput | CompletedTaskOrderByWithRelationInput[]
    cursor?: CompletedTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedTaskScalarFieldEnum | CompletedTaskScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model CompletedTask
   */

  export type AggregateCompletedTask = {
    _count: CompletedTaskCountAggregateOutputType | null
    _avg: CompletedTaskAvgAggregateOutputType | null
    _sum: CompletedTaskSumAggregateOutputType | null
    _min: CompletedTaskMinAggregateOutputType | null
    _max: CompletedTaskMaxAggregateOutputType | null
  }

  export type CompletedTaskAvgAggregateOutputType = {
    earnings: number | null
  }

  export type CompletedTaskSumAggregateOutputType = {
    earnings: number | null
  }

  export type CompletedTaskMinAggregateOutputType = {
    id: string | null
    userId: string | null
    taskId: string | null
    status: string | null
    earnings: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompletedTaskMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    taskId: string | null
    status: string | null
    earnings: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompletedTaskCountAggregateOutputType = {
    id: number
    userId: number
    taskId: number
    status: number
    earnings: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompletedTaskAvgAggregateInputType = {
    earnings?: true
  }

  export type CompletedTaskSumAggregateInputType = {
    earnings?: true
  }

  export type CompletedTaskMinAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    status?: true
    earnings?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompletedTaskMaxAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    status?: true
    earnings?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompletedTaskCountAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    status?: true
    earnings?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompletedTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedTask to aggregate.
     */
    where?: CompletedTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedTasks to fetch.
     */
    orderBy?: CompletedTaskOrderByWithRelationInput | CompletedTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompletedTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompletedTasks
    **/
    _count?: true | CompletedTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompletedTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompletedTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompletedTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompletedTaskMaxAggregateInputType
  }

  export type GetCompletedTaskAggregateType<T extends CompletedTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateCompletedTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompletedTask[P]>
      : GetScalarType<T[P], AggregateCompletedTask[P]>
  }




  export type CompletedTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedTaskWhereInput
    orderBy?: CompletedTaskOrderByWithAggregationInput | CompletedTaskOrderByWithAggregationInput[]
    by: CompletedTaskScalarFieldEnum[] | CompletedTaskScalarFieldEnum
    having?: CompletedTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompletedTaskCountAggregateInputType | true
    _avg?: CompletedTaskAvgAggregateInputType
    _sum?: CompletedTaskSumAggregateInputType
    _min?: CompletedTaskMinAggregateInputType
    _max?: CompletedTaskMaxAggregateInputType
  }

  export type CompletedTaskGroupByOutputType = {
    id: string
    userId: string
    taskId: string
    status: string
    earnings: number
    createdAt: Date
    updatedAt: Date
    _count: CompletedTaskCountAggregateOutputType | null
    _avg: CompletedTaskAvgAggregateOutputType | null
    _sum: CompletedTaskSumAggregateOutputType | null
    _min: CompletedTaskMinAggregateOutputType | null
    _max: CompletedTaskMaxAggregateOutputType | null
  }

  type GetCompletedTaskGroupByPayload<T extends CompletedTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompletedTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompletedTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompletedTaskGroupByOutputType[P]>
            : GetScalarType<T[P], CompletedTaskGroupByOutputType[P]>
        }
      >
    >


  export type CompletedTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taskId?: boolean
    status?: boolean
    earnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedTask"]>

  export type CompletedTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taskId?: boolean
    status?: boolean
    earnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedTask"]>

  export type CompletedTaskSelectScalar = {
    id?: boolean
    userId?: boolean
    taskId?: boolean
    status?: boolean
    earnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompletedTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type CompletedTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $CompletedTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompletedTask"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      taskId: string
      status: string
      earnings: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["completedTask"]>
    composites: {}
  }

  type CompletedTaskGetPayload<S extends boolean | null | undefined | CompletedTaskDefaultArgs> = $Result.GetResult<Prisma.$CompletedTaskPayload, S>

  type CompletedTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompletedTaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompletedTaskCountAggregateInputType | true
    }

  export interface CompletedTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompletedTask'], meta: { name: 'CompletedTask' } }
    /**
     * Find zero or one CompletedTask that matches the filter.
     * @param {CompletedTaskFindUniqueArgs} args - Arguments to find a CompletedTask
     * @example
     * // Get one CompletedTask
     * const completedTask = await prisma.completedTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompletedTaskFindUniqueArgs>(args: SelectSubset<T, CompletedTaskFindUniqueArgs<ExtArgs>>): Prisma__CompletedTaskClient<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CompletedTask that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompletedTaskFindUniqueOrThrowArgs} args - Arguments to find a CompletedTask
     * @example
     * // Get one CompletedTask
     * const completedTask = await prisma.completedTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompletedTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, CompletedTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompletedTaskClient<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CompletedTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedTaskFindFirstArgs} args - Arguments to find a CompletedTask
     * @example
     * // Get one CompletedTask
     * const completedTask = await prisma.completedTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompletedTaskFindFirstArgs>(args?: SelectSubset<T, CompletedTaskFindFirstArgs<ExtArgs>>): Prisma__CompletedTaskClient<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CompletedTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedTaskFindFirstOrThrowArgs} args - Arguments to find a CompletedTask
     * @example
     * // Get one CompletedTask
     * const completedTask = await prisma.completedTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompletedTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, CompletedTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompletedTaskClient<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CompletedTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompletedTasks
     * const completedTasks = await prisma.completedTask.findMany()
     * 
     * // Get first 10 CompletedTasks
     * const completedTasks = await prisma.completedTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const completedTaskWithIdOnly = await prisma.completedTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompletedTaskFindManyArgs>(args?: SelectSubset<T, CompletedTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CompletedTask.
     * @param {CompletedTaskCreateArgs} args - Arguments to create a CompletedTask.
     * @example
     * // Create one CompletedTask
     * const CompletedTask = await prisma.completedTask.create({
     *   data: {
     *     // ... data to create a CompletedTask
     *   }
     * })
     * 
     */
    create<T extends CompletedTaskCreateArgs>(args: SelectSubset<T, CompletedTaskCreateArgs<ExtArgs>>): Prisma__CompletedTaskClient<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CompletedTasks.
     * @param {CompletedTaskCreateManyArgs} args - Arguments to create many CompletedTasks.
     * @example
     * // Create many CompletedTasks
     * const completedTask = await prisma.completedTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompletedTaskCreateManyArgs>(args?: SelectSubset<T, CompletedTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompletedTasks and returns the data saved in the database.
     * @param {CompletedTaskCreateManyAndReturnArgs} args - Arguments to create many CompletedTasks.
     * @example
     * // Create many CompletedTasks
     * const completedTask = await prisma.completedTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompletedTasks and only return the `id`
     * const completedTaskWithIdOnly = await prisma.completedTask.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompletedTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, CompletedTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CompletedTask.
     * @param {CompletedTaskDeleteArgs} args - Arguments to delete one CompletedTask.
     * @example
     * // Delete one CompletedTask
     * const CompletedTask = await prisma.completedTask.delete({
     *   where: {
     *     // ... filter to delete one CompletedTask
     *   }
     * })
     * 
     */
    delete<T extends CompletedTaskDeleteArgs>(args: SelectSubset<T, CompletedTaskDeleteArgs<ExtArgs>>): Prisma__CompletedTaskClient<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CompletedTask.
     * @param {CompletedTaskUpdateArgs} args - Arguments to update one CompletedTask.
     * @example
     * // Update one CompletedTask
     * const completedTask = await prisma.completedTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompletedTaskUpdateArgs>(args: SelectSubset<T, CompletedTaskUpdateArgs<ExtArgs>>): Prisma__CompletedTaskClient<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CompletedTasks.
     * @param {CompletedTaskDeleteManyArgs} args - Arguments to filter CompletedTasks to delete.
     * @example
     * // Delete a few CompletedTasks
     * const { count } = await prisma.completedTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompletedTaskDeleteManyArgs>(args?: SelectSubset<T, CompletedTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompletedTasks
     * const completedTask = await prisma.completedTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompletedTaskUpdateManyArgs>(args: SelectSubset<T, CompletedTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompletedTask.
     * @param {CompletedTaskUpsertArgs} args - Arguments to update or create a CompletedTask.
     * @example
     * // Update or create a CompletedTask
     * const completedTask = await prisma.completedTask.upsert({
     *   create: {
     *     // ... data to create a CompletedTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompletedTask we want to update
     *   }
     * })
     */
    upsert<T extends CompletedTaskUpsertArgs>(args: SelectSubset<T, CompletedTaskUpsertArgs<ExtArgs>>): Prisma__CompletedTaskClient<$Result.GetResult<Prisma.$CompletedTaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CompletedTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedTaskCountArgs} args - Arguments to filter CompletedTasks to count.
     * @example
     * // Count the number of CompletedTasks
     * const count = await prisma.completedTask.count({
     *   where: {
     *     // ... the filter for the CompletedTasks we want to count
     *   }
     * })
    **/
    count<T extends CompletedTaskCountArgs>(
      args?: Subset<T, CompletedTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompletedTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompletedTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompletedTaskAggregateArgs>(args: Subset<T, CompletedTaskAggregateArgs>): Prisma.PrismaPromise<GetCompletedTaskAggregateType<T>>

    /**
     * Group by CompletedTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompletedTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompletedTaskGroupByArgs['orderBy'] }
        : { orderBy?: CompletedTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompletedTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompletedTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompletedTask model
   */
  readonly fields: CompletedTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompletedTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompletedTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompletedTask model
   */ 
  interface CompletedTaskFieldRefs {
    readonly id: FieldRef<"CompletedTask", 'String'>
    readonly userId: FieldRef<"CompletedTask", 'String'>
    readonly taskId: FieldRef<"CompletedTask", 'String'>
    readonly status: FieldRef<"CompletedTask", 'String'>
    readonly earnings: FieldRef<"CompletedTask", 'Float'>
    readonly createdAt: FieldRef<"CompletedTask", 'DateTime'>
    readonly updatedAt: FieldRef<"CompletedTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompletedTask findUnique
   */
  export type CompletedTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedTaskInclude<ExtArgs> | null
    /**
     * Filter, which CompletedTask to fetch.
     */
    where: CompletedTaskWhereUniqueInput
  }

  /**
   * CompletedTask findUniqueOrThrow
   */
  export type CompletedTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedTaskInclude<ExtArgs> | null
    /**
     * Filter, which CompletedTask to fetch.
     */
    where: CompletedTaskWhereUniqueInput
  }

  /**
   * CompletedTask findFirst
   */
  export type CompletedTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedTaskInclude<ExtArgs> | null
    /**
     * Filter, which CompletedTask to fetch.
     */
    where?: CompletedTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedTasks to fetch.
     */
    orderBy?: CompletedTaskOrderByWithRelationInput | CompletedTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedTasks.
     */
    cursor?: CompletedTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedTasks.
     */
    distinct?: CompletedTaskScalarFieldEnum | CompletedTaskScalarFieldEnum[]
  }

  /**
   * CompletedTask findFirstOrThrow
   */
  export type CompletedTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedTaskInclude<ExtArgs> | null
    /**
     * Filter, which CompletedTask to fetch.
     */
    where?: CompletedTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedTasks to fetch.
     */
    orderBy?: CompletedTaskOrderByWithRelationInput | CompletedTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedTasks.
     */
    cursor?: CompletedTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedTasks.
     */
    distinct?: CompletedTaskScalarFieldEnum | CompletedTaskScalarFieldEnum[]
  }

  /**
   * CompletedTask findMany
   */
  export type CompletedTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedTaskInclude<ExtArgs> | null
    /**
     * Filter, which CompletedTasks to fetch.
     */
    where?: CompletedTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedTasks to fetch.
     */
    orderBy?: CompletedTaskOrderByWithRelationInput | CompletedTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompletedTasks.
     */
    cursor?: CompletedTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedTasks.
     */
    skip?: number
    distinct?: CompletedTaskScalarFieldEnum | CompletedTaskScalarFieldEnum[]
  }

  /**
   * CompletedTask create
   */
  export type CompletedTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a CompletedTask.
     */
    data: XOR<CompletedTaskCreateInput, CompletedTaskUncheckedCreateInput>
  }

  /**
   * CompletedTask createMany
   */
  export type CompletedTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompletedTasks.
     */
    data: CompletedTaskCreateManyInput | CompletedTaskCreateManyInput[]
  }

  /**
   * CompletedTask createManyAndReturn
   */
  export type CompletedTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CompletedTasks.
     */
    data: CompletedTaskCreateManyInput | CompletedTaskCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedTask update
   */
  export type CompletedTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a CompletedTask.
     */
    data: XOR<CompletedTaskUpdateInput, CompletedTaskUncheckedUpdateInput>
    /**
     * Choose, which CompletedTask to update.
     */
    where: CompletedTaskWhereUniqueInput
  }

  /**
   * CompletedTask updateMany
   */
  export type CompletedTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompletedTasks.
     */
    data: XOR<CompletedTaskUpdateManyMutationInput, CompletedTaskUncheckedUpdateManyInput>
    /**
     * Filter which CompletedTasks to update
     */
    where?: CompletedTaskWhereInput
  }

  /**
   * CompletedTask upsert
   */
  export type CompletedTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the CompletedTask to update in case it exists.
     */
    where: CompletedTaskWhereUniqueInput
    /**
     * In case the CompletedTask found by the `where` argument doesn't exist, create a new CompletedTask with this data.
     */
    create: XOR<CompletedTaskCreateInput, CompletedTaskUncheckedCreateInput>
    /**
     * In case the CompletedTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompletedTaskUpdateInput, CompletedTaskUncheckedUpdateInput>
  }

  /**
   * CompletedTask delete
   */
  export type CompletedTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedTaskInclude<ExtArgs> | null
    /**
     * Filter which CompletedTask to delete.
     */
    where: CompletedTaskWhereUniqueInput
  }

  /**
   * CompletedTask deleteMany
   */
  export type CompletedTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedTasks to delete
     */
    where?: CompletedTaskWhereInput
  }

  /**
   * CompletedTask without action
   */
  export type CompletedTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedTask
     */
    select?: CompletedTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedTaskInclude<ExtArgs> | null
  }


  /**
   * Model Deposit
   */

  export type AggregateDeposit = {
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  export type DepositAvgAggregateOutputType = {
    amount: number | null
  }

  export type DepositSumAggregateOutputType = {
    amount: number | null
  }

  export type DepositMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    transferNumber: string | null
    proofImageUrl: string | null
    status: string | null
    adminNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepositMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    transferNumber: string | null
    proofImageUrl: string | null
    status: string | null
    adminNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepositCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    transferNumber: number
    proofImageUrl: number
    status: number
    adminNote: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepositAvgAggregateInputType = {
    amount?: true
  }

  export type DepositSumAggregateInputType = {
    amount?: true
  }

  export type DepositMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    transferNumber?: true
    proofImageUrl?: true
    status?: true
    adminNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepositMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    transferNumber?: true
    proofImageUrl?: true
    status?: true
    adminNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepositCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    transferNumber?: true
    proofImageUrl?: true
    status?: true
    adminNote?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepositAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposit to aggregate.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deposits
    **/
    _count?: true | DepositCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepositAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepositSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositMaxAggregateInputType
  }

  export type GetDepositAggregateType<T extends DepositAggregateArgs> = {
        [P in keyof T & keyof AggregateDeposit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeposit[P]>
      : GetScalarType<T[P], AggregateDeposit[P]>
  }




  export type DepositGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithAggregationInput | DepositOrderByWithAggregationInput[]
    by: DepositScalarFieldEnum[] | DepositScalarFieldEnum
    having?: DepositScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositCountAggregateInputType | true
    _avg?: DepositAvgAggregateInputType
    _sum?: DepositSumAggregateInputType
    _min?: DepositMinAggregateInputType
    _max?: DepositMaxAggregateInputType
  }

  export type DepositGroupByOutputType = {
    id: string
    userId: string
    amount: number
    transferNumber: string
    proofImageUrl: string | null
    status: string
    adminNote: string | null
    createdAt: Date
    updatedAt: Date
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  type GetDepositGroupByPayload<T extends DepositGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositGroupByOutputType[P]>
            : GetScalarType<T[P], DepositGroupByOutputType[P]>
        }
      >
    >


  export type DepositSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    transferNumber?: boolean
    proofImageUrl?: boolean
    status?: boolean
    adminNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    transferNumber?: boolean
    proofImageUrl?: boolean
    status?: boolean
    adminNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    transferNumber?: boolean
    proofImageUrl?: boolean
    status?: boolean
    adminNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepositInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DepositIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DepositPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deposit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      transferNumber: string
      proofImageUrl: string | null
      status: string
      adminNote: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deposit"]>
    composites: {}
  }

  type DepositGetPayload<S extends boolean | null | undefined | DepositDefaultArgs> = $Result.GetResult<Prisma.$DepositPayload, S>

  type DepositCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DepositFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DepositCountAggregateInputType | true
    }

  export interface DepositDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deposit'], meta: { name: 'Deposit' } }
    /**
     * Find zero or one Deposit that matches the filter.
     * @param {DepositFindUniqueArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepositFindUniqueArgs>(args: SelectSubset<T, DepositFindUniqueArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Deposit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DepositFindUniqueOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepositFindUniqueOrThrowArgs>(args: SelectSubset<T, DepositFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Deposit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepositFindFirstArgs>(args?: SelectSubset<T, DepositFindFirstArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Deposit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepositFindFirstOrThrowArgs>(args?: SelectSubset<T, DepositFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Deposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deposits
     * const deposits = await prisma.deposit.findMany()
     * 
     * // Get first 10 Deposits
     * const deposits = await prisma.deposit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositWithIdOnly = await prisma.deposit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepositFindManyArgs>(args?: SelectSubset<T, DepositFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Deposit.
     * @param {DepositCreateArgs} args - Arguments to create a Deposit.
     * @example
     * // Create one Deposit
     * const Deposit = await prisma.deposit.create({
     *   data: {
     *     // ... data to create a Deposit
     *   }
     * })
     * 
     */
    create<T extends DepositCreateArgs>(args: SelectSubset<T, DepositCreateArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Deposits.
     * @param {DepositCreateManyArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepositCreateManyArgs>(args?: SelectSubset<T, DepositCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deposits and returns the data saved in the database.
     * @param {DepositCreateManyAndReturnArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deposits and only return the `id`
     * const depositWithIdOnly = await prisma.deposit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepositCreateManyAndReturnArgs>(args?: SelectSubset<T, DepositCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Deposit.
     * @param {DepositDeleteArgs} args - Arguments to delete one Deposit.
     * @example
     * // Delete one Deposit
     * const Deposit = await prisma.deposit.delete({
     *   where: {
     *     // ... filter to delete one Deposit
     *   }
     * })
     * 
     */
    delete<T extends DepositDeleteArgs>(args: SelectSubset<T, DepositDeleteArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Deposit.
     * @param {DepositUpdateArgs} args - Arguments to update one Deposit.
     * @example
     * // Update one Deposit
     * const deposit = await prisma.deposit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepositUpdateArgs>(args: SelectSubset<T, DepositUpdateArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Deposits.
     * @param {DepositDeleteManyArgs} args - Arguments to filter Deposits to delete.
     * @example
     * // Delete a few Deposits
     * const { count } = await prisma.deposit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepositDeleteManyArgs>(args?: SelectSubset<T, DepositDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deposits
     * const deposit = await prisma.deposit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepositUpdateManyArgs>(args: SelectSubset<T, DepositUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Deposit.
     * @param {DepositUpsertArgs} args - Arguments to update or create a Deposit.
     * @example
     * // Update or create a Deposit
     * const deposit = await prisma.deposit.upsert({
     *   create: {
     *     // ... data to create a Deposit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deposit we want to update
     *   }
     * })
     */
    upsert<T extends DepositUpsertArgs>(args: SelectSubset<T, DepositUpsertArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositCountArgs} args - Arguments to filter Deposits to count.
     * @example
     * // Count the number of Deposits
     * const count = await prisma.deposit.count({
     *   where: {
     *     // ... the filter for the Deposits we want to count
     *   }
     * })
    **/
    count<T extends DepositCountArgs>(
      args?: Subset<T, DepositCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepositAggregateArgs>(args: Subset<T, DepositAggregateArgs>): Prisma.PrismaPromise<GetDepositAggregateType<T>>

    /**
     * Group by Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepositGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepositGroupByArgs['orderBy'] }
        : { orderBy?: DepositGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepositGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deposit model
   */
  readonly fields: DepositFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deposit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepositClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deposit model
   */ 
  interface DepositFieldRefs {
    readonly id: FieldRef<"Deposit", 'String'>
    readonly userId: FieldRef<"Deposit", 'String'>
    readonly amount: FieldRef<"Deposit", 'Float'>
    readonly transferNumber: FieldRef<"Deposit", 'String'>
    readonly proofImageUrl: FieldRef<"Deposit", 'String'>
    readonly status: FieldRef<"Deposit", 'String'>
    readonly adminNote: FieldRef<"Deposit", 'String'>
    readonly createdAt: FieldRef<"Deposit", 'DateTime'>
    readonly updatedAt: FieldRef<"Deposit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deposit findUnique
   */
  export type DepositFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findUniqueOrThrow
   */
  export type DepositFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findFirst
   */
  export type DepositFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit findFirstOrThrow
   */
  export type DepositFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit findMany
   */
  export type DepositFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposits to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit create
   */
  export type DepositCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The data needed to create a Deposit.
     */
    data: XOR<DepositCreateInput, DepositUncheckedCreateInput>
  }

  /**
   * Deposit createMany
   */
  export type DepositCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
  }

  /**
   * Deposit createManyAndReturn
   */
  export type DepositCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deposit update
   */
  export type DepositUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The data needed to update a Deposit.
     */
    data: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
    /**
     * Choose, which Deposit to update.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit updateMany
   */
  export type DepositUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deposits.
     */
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyInput>
    /**
     * Filter which Deposits to update
     */
    where?: DepositWhereInput
  }

  /**
   * Deposit upsert
   */
  export type DepositUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The filter to search for the Deposit to update in case it exists.
     */
    where: DepositWhereUniqueInput
    /**
     * In case the Deposit found by the `where` argument doesn't exist, create a new Deposit with this data.
     */
    create: XOR<DepositCreateInput, DepositUncheckedCreateInput>
    /**
     * In case the Deposit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
  }

  /**
   * Deposit delete
   */
  export type DepositDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter which Deposit to delete.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit deleteMany
   */
  export type DepositDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposits to delete
     */
    where?: DepositWhereInput
  }

  /**
   * Deposit without action
   */
  export type DepositDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
  }


  /**
   * Model Withdrawal
   */

  export type AggregateWithdrawal = {
    _count: WithdrawalCountAggregateOutputType | null
    _avg: WithdrawalAvgAggregateOutputType | null
    _sum: WithdrawalSumAggregateOutputType | null
    _min: WithdrawalMinAggregateOutputType | null
    _max: WithdrawalMaxAggregateOutputType | null
  }

  export type WithdrawalAvgAggregateOutputType = {
    amount: number | null
  }

  export type WithdrawalSumAggregateOutputType = {
    amount: number | null
  }

  export type WithdrawalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    transferToNumber: string | null
    status: string | null
    adminNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WithdrawalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    transferToNumber: string | null
    status: string | null
    adminNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WithdrawalCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    transferToNumber: number
    status: number
    adminNote: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WithdrawalAvgAggregateInputType = {
    amount?: true
  }

  export type WithdrawalSumAggregateInputType = {
    amount?: true
  }

  export type WithdrawalMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    transferToNumber?: true
    status?: true
    adminNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WithdrawalMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    transferToNumber?: true
    status?: true
    adminNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WithdrawalCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    transferToNumber?: true
    status?: true
    adminNote?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WithdrawalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Withdrawal to aggregate.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Withdrawals
    **/
    _count?: true | WithdrawalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawalMaxAggregateInputType
  }

  export type GetWithdrawalAggregateType<T extends WithdrawalAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawal[P]>
      : GetScalarType<T[P], AggregateWithdrawal[P]>
  }




  export type WithdrawalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawalWhereInput
    orderBy?: WithdrawalOrderByWithAggregationInput | WithdrawalOrderByWithAggregationInput[]
    by: WithdrawalScalarFieldEnum[] | WithdrawalScalarFieldEnum
    having?: WithdrawalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawalCountAggregateInputType | true
    _avg?: WithdrawalAvgAggregateInputType
    _sum?: WithdrawalSumAggregateInputType
    _min?: WithdrawalMinAggregateInputType
    _max?: WithdrawalMaxAggregateInputType
  }

  export type WithdrawalGroupByOutputType = {
    id: string
    userId: string
    amount: number
    transferToNumber: string
    status: string
    adminNote: string | null
    createdAt: Date
    updatedAt: Date
    _count: WithdrawalCountAggregateOutputType | null
    _avg: WithdrawalAvgAggregateOutputType | null
    _sum: WithdrawalSumAggregateOutputType | null
    _min: WithdrawalMinAggregateOutputType | null
    _max: WithdrawalMaxAggregateOutputType | null
  }

  type GetWithdrawalGroupByPayload<T extends WithdrawalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawalGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawalGroupByOutputType[P]>
        }
      >
    >


  export type WithdrawalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    transferToNumber?: boolean
    status?: boolean
    adminNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawal"]>

  export type WithdrawalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    transferToNumber?: boolean
    status?: boolean
    adminNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawal"]>

  export type WithdrawalSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    transferToNumber?: boolean
    status?: boolean
    adminNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WithdrawalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WithdrawalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WithdrawalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Withdrawal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      transferToNumber: string
      status: string
      adminNote: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["withdrawal"]>
    composites: {}
  }

  type WithdrawalGetPayload<S extends boolean | null | undefined | WithdrawalDefaultArgs> = $Result.GetResult<Prisma.$WithdrawalPayload, S>

  type WithdrawalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WithdrawalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WithdrawalCountAggregateInputType | true
    }

  export interface WithdrawalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Withdrawal'], meta: { name: 'Withdrawal' } }
    /**
     * Find zero or one Withdrawal that matches the filter.
     * @param {WithdrawalFindUniqueArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WithdrawalFindUniqueArgs>(args: SelectSubset<T, WithdrawalFindUniqueArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Withdrawal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WithdrawalFindUniqueOrThrowArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WithdrawalFindUniqueOrThrowArgs>(args: SelectSubset<T, WithdrawalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Withdrawal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindFirstArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WithdrawalFindFirstArgs>(args?: SelectSubset<T, WithdrawalFindFirstArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Withdrawal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindFirstOrThrowArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WithdrawalFindFirstOrThrowArgs>(args?: SelectSubset<T, WithdrawalFindFirstOrThrowArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Withdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Withdrawals
     * const withdrawals = await prisma.withdrawal.findMany()
     * 
     * // Get first 10 Withdrawals
     * const withdrawals = await prisma.withdrawal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawalWithIdOnly = await prisma.withdrawal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WithdrawalFindManyArgs>(args?: SelectSubset<T, WithdrawalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Withdrawal.
     * @param {WithdrawalCreateArgs} args - Arguments to create a Withdrawal.
     * @example
     * // Create one Withdrawal
     * const Withdrawal = await prisma.withdrawal.create({
     *   data: {
     *     // ... data to create a Withdrawal
     *   }
     * })
     * 
     */
    create<T extends WithdrawalCreateArgs>(args: SelectSubset<T, WithdrawalCreateArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Withdrawals.
     * @param {WithdrawalCreateManyArgs} args - Arguments to create many Withdrawals.
     * @example
     * // Create many Withdrawals
     * const withdrawal = await prisma.withdrawal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WithdrawalCreateManyArgs>(args?: SelectSubset<T, WithdrawalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Withdrawals and returns the data saved in the database.
     * @param {WithdrawalCreateManyAndReturnArgs} args - Arguments to create many Withdrawals.
     * @example
     * // Create many Withdrawals
     * const withdrawal = await prisma.withdrawal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Withdrawals and only return the `id`
     * const withdrawalWithIdOnly = await prisma.withdrawal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WithdrawalCreateManyAndReturnArgs>(args?: SelectSubset<T, WithdrawalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Withdrawal.
     * @param {WithdrawalDeleteArgs} args - Arguments to delete one Withdrawal.
     * @example
     * // Delete one Withdrawal
     * const Withdrawal = await prisma.withdrawal.delete({
     *   where: {
     *     // ... filter to delete one Withdrawal
     *   }
     * })
     * 
     */
    delete<T extends WithdrawalDeleteArgs>(args: SelectSubset<T, WithdrawalDeleteArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Withdrawal.
     * @param {WithdrawalUpdateArgs} args - Arguments to update one Withdrawal.
     * @example
     * // Update one Withdrawal
     * const withdrawal = await prisma.withdrawal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WithdrawalUpdateArgs>(args: SelectSubset<T, WithdrawalUpdateArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Withdrawals.
     * @param {WithdrawalDeleteManyArgs} args - Arguments to filter Withdrawals to delete.
     * @example
     * // Delete a few Withdrawals
     * const { count } = await prisma.withdrawal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WithdrawalDeleteManyArgs>(args?: SelectSubset<T, WithdrawalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Withdrawals
     * const withdrawal = await prisma.withdrawal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WithdrawalUpdateManyArgs>(args: SelectSubset<T, WithdrawalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Withdrawal.
     * @param {WithdrawalUpsertArgs} args - Arguments to update or create a Withdrawal.
     * @example
     * // Update or create a Withdrawal
     * const withdrawal = await prisma.withdrawal.upsert({
     *   create: {
     *     // ... data to create a Withdrawal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Withdrawal we want to update
     *   }
     * })
     */
    upsert<T extends WithdrawalUpsertArgs>(args: SelectSubset<T, WithdrawalUpsertArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalCountArgs} args - Arguments to filter Withdrawals to count.
     * @example
     * // Count the number of Withdrawals
     * const count = await prisma.withdrawal.count({
     *   where: {
     *     // ... the filter for the Withdrawals we want to count
     *   }
     * })
    **/
    count<T extends WithdrawalCountArgs>(
      args?: Subset<T, WithdrawalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Withdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WithdrawalAggregateArgs>(args: Subset<T, WithdrawalAggregateArgs>): Prisma.PrismaPromise<GetWithdrawalAggregateType<T>>

    /**
     * Group by Withdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WithdrawalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WithdrawalGroupByArgs['orderBy'] }
        : { orderBy?: WithdrawalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WithdrawalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Withdrawal model
   */
  readonly fields: WithdrawalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Withdrawal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WithdrawalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Withdrawal model
   */ 
  interface WithdrawalFieldRefs {
    readonly id: FieldRef<"Withdrawal", 'String'>
    readonly userId: FieldRef<"Withdrawal", 'String'>
    readonly amount: FieldRef<"Withdrawal", 'Float'>
    readonly transferToNumber: FieldRef<"Withdrawal", 'String'>
    readonly status: FieldRef<"Withdrawal", 'String'>
    readonly adminNote: FieldRef<"Withdrawal", 'String'>
    readonly createdAt: FieldRef<"Withdrawal", 'DateTime'>
    readonly updatedAt: FieldRef<"Withdrawal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Withdrawal findUnique
   */
  export type WithdrawalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal findUniqueOrThrow
   */
  export type WithdrawalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal findFirst
   */
  export type WithdrawalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Withdrawals.
     */
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Withdrawal findFirstOrThrow
   */
  export type WithdrawalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Withdrawals.
     */
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Withdrawal findMany
   */
  export type WithdrawalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawals to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Withdrawal create
   */
  export type WithdrawalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * The data needed to create a Withdrawal.
     */
    data: XOR<WithdrawalCreateInput, WithdrawalUncheckedCreateInput>
  }

  /**
   * Withdrawal createMany
   */
  export type WithdrawalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Withdrawals.
     */
    data: WithdrawalCreateManyInput | WithdrawalCreateManyInput[]
  }

  /**
   * Withdrawal createManyAndReturn
   */
  export type WithdrawalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Withdrawals.
     */
    data: WithdrawalCreateManyInput | WithdrawalCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Withdrawal update
   */
  export type WithdrawalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * The data needed to update a Withdrawal.
     */
    data: XOR<WithdrawalUpdateInput, WithdrawalUncheckedUpdateInput>
    /**
     * Choose, which Withdrawal to update.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal updateMany
   */
  export type WithdrawalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Withdrawals.
     */
    data: XOR<WithdrawalUpdateManyMutationInput, WithdrawalUncheckedUpdateManyInput>
    /**
     * Filter which Withdrawals to update
     */
    where?: WithdrawalWhereInput
  }

  /**
   * Withdrawal upsert
   */
  export type WithdrawalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * The filter to search for the Withdrawal to update in case it exists.
     */
    where: WithdrawalWhereUniqueInput
    /**
     * In case the Withdrawal found by the `where` argument doesn't exist, create a new Withdrawal with this data.
     */
    create: XOR<WithdrawalCreateInput, WithdrawalUncheckedCreateInput>
    /**
     * In case the Withdrawal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WithdrawalUpdateInput, WithdrawalUncheckedUpdateInput>
  }

  /**
   * Withdrawal delete
   */
  export type WithdrawalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter which Withdrawal to delete.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal deleteMany
   */
  export type WithdrawalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Withdrawals to delete
     */
    where?: WithdrawalWhereInput
  }

  /**
   * Withdrawal without action
   */
  export type WithdrawalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
  }


  /**
   * Model ReferralReward
   */

  export type AggregateReferralReward = {
    _count: ReferralRewardCountAggregateOutputType | null
    _avg: ReferralRewardAvgAggregateOutputType | null
    _sum: ReferralRewardSumAggregateOutputType | null
    _min: ReferralRewardMinAggregateOutputType | null
    _max: ReferralRewardMaxAggregateOutputType | null
  }

  export type ReferralRewardAvgAggregateOutputType = {
    amount: number | null
  }

  export type ReferralRewardSumAggregateOutputType = {
    amount: number | null
  }

  export type ReferralRewardMinAggregateOutputType = {
    id: string | null
    referrerId: string | null
    referredId: string | null
    amount: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReferralRewardMaxAggregateOutputType = {
    id: string | null
    referrerId: string | null
    referredId: string | null
    amount: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReferralRewardCountAggregateOutputType = {
    id: number
    referrerId: number
    referredId: number
    amount: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReferralRewardAvgAggregateInputType = {
    amount?: true
  }

  export type ReferralRewardSumAggregateInputType = {
    amount?: true
  }

  export type ReferralRewardMinAggregateInputType = {
    id?: true
    referrerId?: true
    referredId?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReferralRewardMaxAggregateInputType = {
    id?: true
    referrerId?: true
    referredId?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReferralRewardCountAggregateInputType = {
    id?: true
    referrerId?: true
    referredId?: true
    amount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReferralRewardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralReward to aggregate.
     */
    where?: ReferralRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralRewards to fetch.
     */
    orderBy?: ReferralRewardOrderByWithRelationInput | ReferralRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralRewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReferralRewards
    **/
    _count?: true | ReferralRewardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferralRewardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferralRewardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralRewardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralRewardMaxAggregateInputType
  }

  export type GetReferralRewardAggregateType<T extends ReferralRewardAggregateArgs> = {
        [P in keyof T & keyof AggregateReferralReward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferralReward[P]>
      : GetScalarType<T[P], AggregateReferralReward[P]>
  }




  export type ReferralRewardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralRewardWhereInput
    orderBy?: ReferralRewardOrderByWithAggregationInput | ReferralRewardOrderByWithAggregationInput[]
    by: ReferralRewardScalarFieldEnum[] | ReferralRewardScalarFieldEnum
    having?: ReferralRewardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralRewardCountAggregateInputType | true
    _avg?: ReferralRewardAvgAggregateInputType
    _sum?: ReferralRewardSumAggregateInputType
    _min?: ReferralRewardMinAggregateInputType
    _max?: ReferralRewardMaxAggregateInputType
  }

  export type ReferralRewardGroupByOutputType = {
    id: string
    referrerId: string
    referredId: string
    amount: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ReferralRewardCountAggregateOutputType | null
    _avg: ReferralRewardAvgAggregateOutputType | null
    _sum: ReferralRewardSumAggregateOutputType | null
    _min: ReferralRewardMinAggregateOutputType | null
    _max: ReferralRewardMaxAggregateOutputType | null
  }

  type GetReferralRewardGroupByPayload<T extends ReferralRewardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralRewardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralRewardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralRewardGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralRewardGroupByOutputType[P]>
        }
      >
    >


  export type ReferralRewardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referredId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referred?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralReward"]>

  export type ReferralRewardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referredId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referred?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralReward"]>

  export type ReferralRewardSelectScalar = {
    id?: boolean
    referrerId?: boolean
    referredId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReferralRewardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referred?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralRewardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referred?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReferralRewardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReferralReward"
    objects: {
      referrer: Prisma.$UserPayload<ExtArgs>
      referred: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referrerId: string
      referredId: string
      amount: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["referralReward"]>
    composites: {}
  }

  type ReferralRewardGetPayload<S extends boolean | null | undefined | ReferralRewardDefaultArgs> = $Result.GetResult<Prisma.$ReferralRewardPayload, S>

  type ReferralRewardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReferralRewardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReferralRewardCountAggregateInputType | true
    }

  export interface ReferralRewardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReferralReward'], meta: { name: 'ReferralReward' } }
    /**
     * Find zero or one ReferralReward that matches the filter.
     * @param {ReferralRewardFindUniqueArgs} args - Arguments to find a ReferralReward
     * @example
     * // Get one ReferralReward
     * const referralReward = await prisma.referralReward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralRewardFindUniqueArgs>(args: SelectSubset<T, ReferralRewardFindUniqueArgs<ExtArgs>>): Prisma__ReferralRewardClient<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReferralReward that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReferralRewardFindUniqueOrThrowArgs} args - Arguments to find a ReferralReward
     * @example
     * // Get one ReferralReward
     * const referralReward = await prisma.referralReward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralRewardFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralRewardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralRewardClient<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReferralReward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralRewardFindFirstArgs} args - Arguments to find a ReferralReward
     * @example
     * // Get one ReferralReward
     * const referralReward = await prisma.referralReward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralRewardFindFirstArgs>(args?: SelectSubset<T, ReferralRewardFindFirstArgs<ExtArgs>>): Prisma__ReferralRewardClient<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReferralReward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralRewardFindFirstOrThrowArgs} args - Arguments to find a ReferralReward
     * @example
     * // Get one ReferralReward
     * const referralReward = await prisma.referralReward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralRewardFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralRewardFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralRewardClient<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReferralRewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralRewardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReferralRewards
     * const referralRewards = await prisma.referralReward.findMany()
     * 
     * // Get first 10 ReferralRewards
     * const referralRewards = await prisma.referralReward.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralRewardWithIdOnly = await prisma.referralReward.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralRewardFindManyArgs>(args?: SelectSubset<T, ReferralRewardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReferralReward.
     * @param {ReferralRewardCreateArgs} args - Arguments to create a ReferralReward.
     * @example
     * // Create one ReferralReward
     * const ReferralReward = await prisma.referralReward.create({
     *   data: {
     *     // ... data to create a ReferralReward
     *   }
     * })
     * 
     */
    create<T extends ReferralRewardCreateArgs>(args: SelectSubset<T, ReferralRewardCreateArgs<ExtArgs>>): Prisma__ReferralRewardClient<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReferralRewards.
     * @param {ReferralRewardCreateManyArgs} args - Arguments to create many ReferralRewards.
     * @example
     * // Create many ReferralRewards
     * const referralReward = await prisma.referralReward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralRewardCreateManyArgs>(args?: SelectSubset<T, ReferralRewardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReferralRewards and returns the data saved in the database.
     * @param {ReferralRewardCreateManyAndReturnArgs} args - Arguments to create many ReferralRewards.
     * @example
     * // Create many ReferralRewards
     * const referralReward = await prisma.referralReward.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReferralRewards and only return the `id`
     * const referralRewardWithIdOnly = await prisma.referralReward.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferralRewardCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferralRewardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReferralReward.
     * @param {ReferralRewardDeleteArgs} args - Arguments to delete one ReferralReward.
     * @example
     * // Delete one ReferralReward
     * const ReferralReward = await prisma.referralReward.delete({
     *   where: {
     *     // ... filter to delete one ReferralReward
     *   }
     * })
     * 
     */
    delete<T extends ReferralRewardDeleteArgs>(args: SelectSubset<T, ReferralRewardDeleteArgs<ExtArgs>>): Prisma__ReferralRewardClient<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReferralReward.
     * @param {ReferralRewardUpdateArgs} args - Arguments to update one ReferralReward.
     * @example
     * // Update one ReferralReward
     * const referralReward = await prisma.referralReward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralRewardUpdateArgs>(args: SelectSubset<T, ReferralRewardUpdateArgs<ExtArgs>>): Prisma__ReferralRewardClient<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReferralRewards.
     * @param {ReferralRewardDeleteManyArgs} args - Arguments to filter ReferralRewards to delete.
     * @example
     * // Delete a few ReferralRewards
     * const { count } = await prisma.referralReward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralRewardDeleteManyArgs>(args?: SelectSubset<T, ReferralRewardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferralRewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralRewardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReferralRewards
     * const referralReward = await prisma.referralReward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralRewardUpdateManyArgs>(args: SelectSubset<T, ReferralRewardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReferralReward.
     * @param {ReferralRewardUpsertArgs} args - Arguments to update or create a ReferralReward.
     * @example
     * // Update or create a ReferralReward
     * const referralReward = await prisma.referralReward.upsert({
     *   create: {
     *     // ... data to create a ReferralReward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReferralReward we want to update
     *   }
     * })
     */
    upsert<T extends ReferralRewardUpsertArgs>(args: SelectSubset<T, ReferralRewardUpsertArgs<ExtArgs>>): Prisma__ReferralRewardClient<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReferralRewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralRewardCountArgs} args - Arguments to filter ReferralRewards to count.
     * @example
     * // Count the number of ReferralRewards
     * const count = await prisma.referralReward.count({
     *   where: {
     *     // ... the filter for the ReferralRewards we want to count
     *   }
     * })
    **/
    count<T extends ReferralRewardCountArgs>(
      args?: Subset<T, ReferralRewardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralRewardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReferralReward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralRewardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReferralRewardAggregateArgs>(args: Subset<T, ReferralRewardAggregateArgs>): Prisma.PrismaPromise<GetReferralRewardAggregateType<T>>

    /**
     * Group by ReferralReward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralRewardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReferralRewardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralRewardGroupByArgs['orderBy'] }
        : { orderBy?: ReferralRewardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReferralRewardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralRewardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReferralReward model
   */
  readonly fields: ReferralRewardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReferralReward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralRewardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referrer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    referred<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReferralReward model
   */ 
  interface ReferralRewardFieldRefs {
    readonly id: FieldRef<"ReferralReward", 'String'>
    readonly referrerId: FieldRef<"ReferralReward", 'String'>
    readonly referredId: FieldRef<"ReferralReward", 'String'>
    readonly amount: FieldRef<"ReferralReward", 'Float'>
    readonly status: FieldRef<"ReferralReward", 'String'>
    readonly createdAt: FieldRef<"ReferralReward", 'DateTime'>
    readonly updatedAt: FieldRef<"ReferralReward", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReferralReward findUnique
   */
  export type ReferralRewardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    /**
     * Filter, which ReferralReward to fetch.
     */
    where: ReferralRewardWhereUniqueInput
  }

  /**
   * ReferralReward findUniqueOrThrow
   */
  export type ReferralRewardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    /**
     * Filter, which ReferralReward to fetch.
     */
    where: ReferralRewardWhereUniqueInput
  }

  /**
   * ReferralReward findFirst
   */
  export type ReferralRewardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    /**
     * Filter, which ReferralReward to fetch.
     */
    where?: ReferralRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralRewards to fetch.
     */
    orderBy?: ReferralRewardOrderByWithRelationInput | ReferralRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralRewards.
     */
    cursor?: ReferralRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralRewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralRewards.
     */
    distinct?: ReferralRewardScalarFieldEnum | ReferralRewardScalarFieldEnum[]
  }

  /**
   * ReferralReward findFirstOrThrow
   */
  export type ReferralRewardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    /**
     * Filter, which ReferralReward to fetch.
     */
    where?: ReferralRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralRewards to fetch.
     */
    orderBy?: ReferralRewardOrderByWithRelationInput | ReferralRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralRewards.
     */
    cursor?: ReferralRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralRewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralRewards.
     */
    distinct?: ReferralRewardScalarFieldEnum | ReferralRewardScalarFieldEnum[]
  }

  /**
   * ReferralReward findMany
   */
  export type ReferralRewardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    /**
     * Filter, which ReferralRewards to fetch.
     */
    where?: ReferralRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralRewards to fetch.
     */
    orderBy?: ReferralRewardOrderByWithRelationInput | ReferralRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReferralRewards.
     */
    cursor?: ReferralRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralRewards.
     */
    skip?: number
    distinct?: ReferralRewardScalarFieldEnum | ReferralRewardScalarFieldEnum[]
  }

  /**
   * ReferralReward create
   */
  export type ReferralRewardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    /**
     * The data needed to create a ReferralReward.
     */
    data: XOR<ReferralRewardCreateInput, ReferralRewardUncheckedCreateInput>
  }

  /**
   * ReferralReward createMany
   */
  export type ReferralRewardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReferralRewards.
     */
    data: ReferralRewardCreateManyInput | ReferralRewardCreateManyInput[]
  }

  /**
   * ReferralReward createManyAndReturn
   */
  export type ReferralRewardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReferralRewards.
     */
    data: ReferralRewardCreateManyInput | ReferralRewardCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReferralReward update
   */
  export type ReferralRewardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    /**
     * The data needed to update a ReferralReward.
     */
    data: XOR<ReferralRewardUpdateInput, ReferralRewardUncheckedUpdateInput>
    /**
     * Choose, which ReferralReward to update.
     */
    where: ReferralRewardWhereUniqueInput
  }

  /**
   * ReferralReward updateMany
   */
  export type ReferralRewardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReferralRewards.
     */
    data: XOR<ReferralRewardUpdateManyMutationInput, ReferralRewardUncheckedUpdateManyInput>
    /**
     * Filter which ReferralRewards to update
     */
    where?: ReferralRewardWhereInput
  }

  /**
   * ReferralReward upsert
   */
  export type ReferralRewardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    /**
     * The filter to search for the ReferralReward to update in case it exists.
     */
    where: ReferralRewardWhereUniqueInput
    /**
     * In case the ReferralReward found by the `where` argument doesn't exist, create a new ReferralReward with this data.
     */
    create: XOR<ReferralRewardCreateInput, ReferralRewardUncheckedCreateInput>
    /**
     * In case the ReferralReward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralRewardUpdateInput, ReferralRewardUncheckedUpdateInput>
  }

  /**
   * ReferralReward delete
   */
  export type ReferralRewardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    /**
     * Filter which ReferralReward to delete.
     */
    where: ReferralRewardWhereUniqueInput
  }

  /**
   * ReferralReward deleteMany
   */
  export type ReferralRewardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralRewards to delete
     */
    where?: ReferralRewardWhereInput
  }

  /**
   * ReferralReward without action
   */
  export type ReferralRewardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
  }


  /**
   * Model AppSettings
   */

  export type AggregateAppSettings = {
    _count: AppSettingsCountAggregateOutputType | null
    _avg: AppSettingsAvgAggregateOutputType | null
    _sum: AppSettingsSumAggregateOutputType | null
    _min: AppSettingsMinAggregateOutputType | null
    _max: AppSettingsMaxAggregateOutputType | null
  }

  export type AppSettingsAvgAggregateOutputType = {
    id: number | null
  }

  export type AppSettingsSumAggregateOutputType = {
    id: number | null
  }

  export type AppSettingsMinAggregateOutputType = {
    id: number | null
    welcomeMessage: string | null
    welcomeMessageVisible: boolean | null
    adminDepositNumber: string | null
    depositInstructions: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppSettingsMaxAggregateOutputType = {
    id: number | null
    welcomeMessage: string | null
    welcomeMessageVisible: boolean | null
    adminDepositNumber: string | null
    depositInstructions: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppSettingsCountAggregateOutputType = {
    id: number
    welcomeMessage: number
    welcomeMessageVisible: number
    adminDepositNumber: number
    depositInstructions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppSettingsAvgAggregateInputType = {
    id?: true
  }

  export type AppSettingsSumAggregateInputType = {
    id?: true
  }

  export type AppSettingsMinAggregateInputType = {
    id?: true
    welcomeMessage?: true
    welcomeMessageVisible?: true
    adminDepositNumber?: true
    depositInstructions?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppSettingsMaxAggregateInputType = {
    id?: true
    welcomeMessage?: true
    welcomeMessageVisible?: true
    adminDepositNumber?: true
    depositInstructions?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppSettingsCountAggregateInputType = {
    id?: true
    welcomeMessage?: true
    welcomeMessageVisible?: true
    adminDepositNumber?: true
    depositInstructions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSettings to aggregate.
     */
    where?: AppSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingsOrderByWithRelationInput | AppSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppSettings
    **/
    _count?: true | AppSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppSettingsMaxAggregateInputType
  }

  export type GetAppSettingsAggregateType<T extends AppSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateAppSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppSettings[P]>
      : GetScalarType<T[P], AggregateAppSettings[P]>
  }




  export type AppSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppSettingsWhereInput
    orderBy?: AppSettingsOrderByWithAggregationInput | AppSettingsOrderByWithAggregationInput[]
    by: AppSettingsScalarFieldEnum[] | AppSettingsScalarFieldEnum
    having?: AppSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppSettingsCountAggregateInputType | true
    _avg?: AppSettingsAvgAggregateInputType
    _sum?: AppSettingsSumAggregateInputType
    _min?: AppSettingsMinAggregateInputType
    _max?: AppSettingsMaxAggregateInputType
  }

  export type AppSettingsGroupByOutputType = {
    id: number
    welcomeMessage: string | null
    welcomeMessageVisible: boolean
    adminDepositNumber: string | null
    depositInstructions: string | null
    createdAt: Date
    updatedAt: Date
    _count: AppSettingsCountAggregateOutputType | null
    _avg: AppSettingsAvgAggregateOutputType | null
    _sum: AppSettingsSumAggregateOutputType | null
    _min: AppSettingsMinAggregateOutputType | null
    _max: AppSettingsMaxAggregateOutputType | null
  }

  type GetAppSettingsGroupByPayload<T extends AppSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], AppSettingsGroupByOutputType[P]>
        }
      >
    >


  export type AppSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    welcomeMessage?: boolean
    welcomeMessageVisible?: boolean
    adminDepositNumber?: boolean
    depositInstructions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSettings"]>

  export type AppSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    welcomeMessage?: boolean
    welcomeMessageVisible?: boolean
    adminDepositNumber?: boolean
    depositInstructions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSettings"]>

  export type AppSettingsSelectScalar = {
    id?: boolean
    welcomeMessage?: boolean
    welcomeMessageVisible?: boolean
    adminDepositNumber?: boolean
    depositInstructions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AppSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      welcomeMessage: string | null
      welcomeMessageVisible: boolean
      adminDepositNumber: string | null
      depositInstructions: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appSettings"]>
    composites: {}
  }

  type AppSettingsGetPayload<S extends boolean | null | undefined | AppSettingsDefaultArgs> = $Result.GetResult<Prisma.$AppSettingsPayload, S>

  type AppSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppSettingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppSettingsCountAggregateInputType | true
    }

  export interface AppSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppSettings'], meta: { name: 'AppSettings' } }
    /**
     * Find zero or one AppSettings that matches the filter.
     * @param {AppSettingsFindUniqueArgs} args - Arguments to find a AppSettings
     * @example
     * // Get one AppSettings
     * const appSettings = await prisma.appSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppSettingsFindUniqueArgs>(args: SelectSubset<T, AppSettingsFindUniqueArgs<ExtArgs>>): Prisma__AppSettingsClient<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AppSettings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppSettingsFindUniqueOrThrowArgs} args - Arguments to find a AppSettings
     * @example
     * // Get one AppSettings
     * const appSettings = await prisma.appSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, AppSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppSettingsClient<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AppSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingsFindFirstArgs} args - Arguments to find a AppSettings
     * @example
     * // Get one AppSettings
     * const appSettings = await prisma.appSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppSettingsFindFirstArgs>(args?: SelectSubset<T, AppSettingsFindFirstArgs<ExtArgs>>): Prisma__AppSettingsClient<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AppSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingsFindFirstOrThrowArgs} args - Arguments to find a AppSettings
     * @example
     * // Get one AppSettings
     * const appSettings = await prisma.appSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, AppSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppSettingsClient<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AppSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppSettings
     * const appSettings = await prisma.appSettings.findMany()
     * 
     * // Get first 10 AppSettings
     * const appSettings = await prisma.appSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appSettingsWithIdOnly = await prisma.appSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppSettingsFindManyArgs>(args?: SelectSubset<T, AppSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AppSettings.
     * @param {AppSettingsCreateArgs} args - Arguments to create a AppSettings.
     * @example
     * // Create one AppSettings
     * const AppSettings = await prisma.appSettings.create({
     *   data: {
     *     // ... data to create a AppSettings
     *   }
     * })
     * 
     */
    create<T extends AppSettingsCreateArgs>(args: SelectSubset<T, AppSettingsCreateArgs<ExtArgs>>): Prisma__AppSettingsClient<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AppSettings.
     * @param {AppSettingsCreateManyArgs} args - Arguments to create many AppSettings.
     * @example
     * // Create many AppSettings
     * const appSettings = await prisma.appSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppSettingsCreateManyArgs>(args?: SelectSubset<T, AppSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppSettings and returns the data saved in the database.
     * @param {AppSettingsCreateManyAndReturnArgs} args - Arguments to create many AppSettings.
     * @example
     * // Create many AppSettings
     * const appSettings = await prisma.appSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppSettings and only return the `id`
     * const appSettingsWithIdOnly = await prisma.appSettings.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, AppSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AppSettings.
     * @param {AppSettingsDeleteArgs} args - Arguments to delete one AppSettings.
     * @example
     * // Delete one AppSettings
     * const AppSettings = await prisma.appSettings.delete({
     *   where: {
     *     // ... filter to delete one AppSettings
     *   }
     * })
     * 
     */
    delete<T extends AppSettingsDeleteArgs>(args: SelectSubset<T, AppSettingsDeleteArgs<ExtArgs>>): Prisma__AppSettingsClient<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AppSettings.
     * @param {AppSettingsUpdateArgs} args - Arguments to update one AppSettings.
     * @example
     * // Update one AppSettings
     * const appSettings = await prisma.appSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppSettingsUpdateArgs>(args: SelectSubset<T, AppSettingsUpdateArgs<ExtArgs>>): Prisma__AppSettingsClient<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AppSettings.
     * @param {AppSettingsDeleteManyArgs} args - Arguments to filter AppSettings to delete.
     * @example
     * // Delete a few AppSettings
     * const { count } = await prisma.appSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppSettingsDeleteManyArgs>(args?: SelectSubset<T, AppSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppSettings
     * const appSettings = await prisma.appSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppSettingsUpdateManyArgs>(args: SelectSubset<T, AppSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppSettings.
     * @param {AppSettingsUpsertArgs} args - Arguments to update or create a AppSettings.
     * @example
     * // Update or create a AppSettings
     * const appSettings = await prisma.appSettings.upsert({
     *   create: {
     *     // ... data to create a AppSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppSettings we want to update
     *   }
     * })
     */
    upsert<T extends AppSettingsUpsertArgs>(args: SelectSubset<T, AppSettingsUpsertArgs<ExtArgs>>): Prisma__AppSettingsClient<$Result.GetResult<Prisma.$AppSettingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingsCountArgs} args - Arguments to filter AppSettings to count.
     * @example
     * // Count the number of AppSettings
     * const count = await prisma.appSettings.count({
     *   where: {
     *     // ... the filter for the AppSettings we want to count
     *   }
     * })
    **/
    count<T extends AppSettingsCountArgs>(
      args?: Subset<T, AppSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppSettingsAggregateArgs>(args: Subset<T, AppSettingsAggregateArgs>): Prisma.PrismaPromise<GetAppSettingsAggregateType<T>>

    /**
     * Group by AppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppSettingsGroupByArgs['orderBy'] }
        : { orderBy?: AppSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppSettings model
   */
  readonly fields: AppSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppSettings model
   */ 
  interface AppSettingsFieldRefs {
    readonly id: FieldRef<"AppSettings", 'Int'>
    readonly welcomeMessage: FieldRef<"AppSettings", 'String'>
    readonly welcomeMessageVisible: FieldRef<"AppSettings", 'Boolean'>
    readonly adminDepositNumber: FieldRef<"AppSettings", 'String'>
    readonly depositInstructions: FieldRef<"AppSettings", 'String'>
    readonly createdAt: FieldRef<"AppSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"AppSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppSettings findUnique
   */
  export type AppSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * Filter, which AppSettings to fetch.
     */
    where: AppSettingsWhereUniqueInput
  }

  /**
   * AppSettings findUniqueOrThrow
   */
  export type AppSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * Filter, which AppSettings to fetch.
     */
    where: AppSettingsWhereUniqueInput
  }

  /**
   * AppSettings findFirst
   */
  export type AppSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * Filter, which AppSettings to fetch.
     */
    where?: AppSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingsOrderByWithRelationInput | AppSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSettings.
     */
    cursor?: AppSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSettings.
     */
    distinct?: AppSettingsScalarFieldEnum | AppSettingsScalarFieldEnum[]
  }

  /**
   * AppSettings findFirstOrThrow
   */
  export type AppSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * Filter, which AppSettings to fetch.
     */
    where?: AppSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingsOrderByWithRelationInput | AppSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSettings.
     */
    cursor?: AppSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSettings.
     */
    distinct?: AppSettingsScalarFieldEnum | AppSettingsScalarFieldEnum[]
  }

  /**
   * AppSettings findMany
   */
  export type AppSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * Filter, which AppSettings to fetch.
     */
    where?: AppSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingsOrderByWithRelationInput | AppSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppSettings.
     */
    cursor?: AppSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    distinct?: AppSettingsScalarFieldEnum | AppSettingsScalarFieldEnum[]
  }

  /**
   * AppSettings create
   */
  export type AppSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * The data needed to create a AppSettings.
     */
    data: XOR<AppSettingsCreateInput, AppSettingsUncheckedCreateInput>
  }

  /**
   * AppSettings createMany
   */
  export type AppSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppSettings.
     */
    data: AppSettingsCreateManyInput | AppSettingsCreateManyInput[]
  }

  /**
   * AppSettings createManyAndReturn
   */
  export type AppSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AppSettings.
     */
    data: AppSettingsCreateManyInput | AppSettingsCreateManyInput[]
  }

  /**
   * AppSettings update
   */
  export type AppSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * The data needed to update a AppSettings.
     */
    data: XOR<AppSettingsUpdateInput, AppSettingsUncheckedUpdateInput>
    /**
     * Choose, which AppSettings to update.
     */
    where: AppSettingsWhereUniqueInput
  }

  /**
   * AppSettings updateMany
   */
  export type AppSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppSettings.
     */
    data: XOR<AppSettingsUpdateManyMutationInput, AppSettingsUncheckedUpdateManyInput>
    /**
     * Filter which AppSettings to update
     */
    where?: AppSettingsWhereInput
  }

  /**
   * AppSettings upsert
   */
  export type AppSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * The filter to search for the AppSettings to update in case it exists.
     */
    where: AppSettingsWhereUniqueInput
    /**
     * In case the AppSettings found by the `where` argument doesn't exist, create a new AppSettings with this data.
     */
    create: XOR<AppSettingsCreateInput, AppSettingsUncheckedCreateInput>
    /**
     * In case the AppSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppSettingsUpdateInput, AppSettingsUncheckedUpdateInput>
  }

  /**
   * AppSettings delete
   */
  export type AppSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
    /**
     * Filter which AppSettings to delete.
     */
    where: AppSettingsWhereUniqueInput
  }

  /**
   * AppSettings deleteMany
   */
  export type AppSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSettings to delete
     */
    where?: AppSettingsWhereInput
  }

  /**
   * AppSettings without action
   */
  export type AppSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSettings
     */
    select?: AppSettingsSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    phoneNumber: 'phoneNumber',
    passwordHash: 'passwordHash',
    name: 'name',
    balance: 'balance',
    role: 'role',
    referralCode: 'referralCode',
    referredByCode: 'referredByCode',
    activeStoreId: 'activeStoreId',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    profitPerTask: 'profitPerTask',
    tasksAvailable: 'tasksAvailable',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const UserStoreScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    storeId: 'storeId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserStoreScalarFieldEnum = (typeof UserStoreScalarFieldEnum)[keyof typeof UserStoreScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    productPrice: 'productPrice',
    profitMargin: 'profitMargin',
    sellingPrice: 'sellingPrice',
    earnings: 'earnings',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const CompletedTaskScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    taskId: 'taskId',
    status: 'status',
    earnings: 'earnings',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompletedTaskScalarFieldEnum = (typeof CompletedTaskScalarFieldEnum)[keyof typeof CompletedTaskScalarFieldEnum]


  export const DepositScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    transferNumber: 'transferNumber',
    proofImageUrl: 'proofImageUrl',
    status: 'status',
    adminNote: 'adminNote',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepositScalarFieldEnum = (typeof DepositScalarFieldEnum)[keyof typeof DepositScalarFieldEnum]


  export const WithdrawalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    transferToNumber: 'transferToNumber',
    status: 'status',
    adminNote: 'adminNote',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WithdrawalScalarFieldEnum = (typeof WithdrawalScalarFieldEnum)[keyof typeof WithdrawalScalarFieldEnum]


  export const ReferralRewardScalarFieldEnum: {
    id: 'id',
    referrerId: 'referrerId',
    referredId: 'referredId',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReferralRewardScalarFieldEnum = (typeof ReferralRewardScalarFieldEnum)[keyof typeof ReferralRewardScalarFieldEnum]


  export const AppSettingsScalarFieldEnum: {
    id: 'id',
    welcomeMessage: 'welcomeMessage',
    welcomeMessageVisible: 'welcomeMessageVisible',
    adminDepositNumber: 'adminDepositNumber',
    depositInstructions: 'depositInstructions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppSettingsScalarFieldEnum = (typeof AppSettingsScalarFieldEnum)[keyof typeof AppSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    balance?: FloatFilter<"User"> | number
    role?: StringFilter<"User"> | string
    referralCode?: StringFilter<"User"> | string
    referredByCode?: StringNullableFilter<"User"> | string | null
    activeStoreId?: IntNullableFilter<"User"> | number | null
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    referredBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    referrals?: UserListRelationFilter
    deposits?: DepositListRelationFilter
    withdrawals?: WithdrawalListRelationFilter
    userStores?: UserStoreListRelationFilter
    completedTasks?: CompletedTaskListRelationFilter
    referralRewardsAsReferrer?: ReferralRewardListRelationFilter
    referralRewardsAsReferred?: ReferralRewardListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    balance?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredByCode?: SortOrderInput | SortOrder
    activeStoreId?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referredBy?: UserOrderByWithRelationInput
    referrals?: UserOrderByRelationAggregateInput
    deposits?: DepositOrderByRelationAggregateInput
    withdrawals?: WithdrawalOrderByRelationAggregateInput
    userStores?: UserStoreOrderByRelationAggregateInput
    completedTasks?: CompletedTaskOrderByRelationAggregateInput
    referralRewardsAsReferrer?: ReferralRewardOrderByRelationAggregateInput
    referralRewardsAsReferred?: ReferralRewardOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneNumber?: string
    referralCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    balance?: FloatFilter<"User"> | number
    role?: StringFilter<"User"> | string
    referredByCode?: StringNullableFilter<"User"> | string | null
    activeStoreId?: IntNullableFilter<"User"> | number | null
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    referredBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    referrals?: UserListRelationFilter
    deposits?: DepositListRelationFilter
    withdrawals?: WithdrawalListRelationFilter
    userStores?: UserStoreListRelationFilter
    completedTasks?: CompletedTaskListRelationFilter
    referralRewardsAsReferrer?: ReferralRewardListRelationFilter
    referralRewardsAsReferred?: ReferralRewardListRelationFilter
  }, "id" | "phoneNumber" | "referralCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    balance?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredByCode?: SortOrderInput | SortOrder
    activeStoreId?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    balance?: FloatWithAggregatesFilter<"User"> | number
    role?: StringWithAggregatesFilter<"User"> | string
    referralCode?: StringWithAggregatesFilter<"User"> | string
    referredByCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    activeStoreId?: IntNullableWithAggregatesFilter<"User"> | number | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: IntFilter<"Store"> | number
    name?: StringFilter<"Store"> | string
    price?: FloatFilter<"Store"> | number
    profitPerTask?: FloatFilter<"Store"> | number
    tasksAvailable?: IntFilter<"Store"> | number
    isActive?: BoolFilter<"Store"> | boolean
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    userStores?: UserStoreListRelationFilter
    tasks?: TaskListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    profitPerTask?: SortOrder
    tasksAvailable?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userStores?: UserStoreOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    name?: StringFilter<"Store"> | string
    price?: FloatFilter<"Store"> | number
    profitPerTask?: FloatFilter<"Store"> | number
    tasksAvailable?: IntFilter<"Store"> | number
    isActive?: BoolFilter<"Store"> | boolean
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    userStores?: UserStoreListRelationFilter
    tasks?: TaskListRelationFilter
  }, "id">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    profitPerTask?: SortOrder
    tasksAvailable?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Store"> | number
    name?: StringWithAggregatesFilter<"Store"> | string
    price?: FloatWithAggregatesFilter<"Store"> | number
    profitPerTask?: FloatWithAggregatesFilter<"Store"> | number
    tasksAvailable?: IntWithAggregatesFilter<"Store"> | number
    isActive?: BoolWithAggregatesFilter<"Store"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
  }

  export type UserStoreWhereInput = {
    AND?: UserStoreWhereInput | UserStoreWhereInput[]
    OR?: UserStoreWhereInput[]
    NOT?: UserStoreWhereInput | UserStoreWhereInput[]
    id?: StringFilter<"UserStore"> | string
    userId?: StringFilter<"UserStore"> | string
    storeId?: IntFilter<"UserStore"> | number
    isActive?: BoolFilter<"UserStore"> | boolean
    createdAt?: DateTimeFilter<"UserStore"> | Date | string
    updatedAt?: DateTimeFilter<"UserStore"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    store?: XOR<StoreRelationFilter, StoreWhereInput>
  }

  export type UserStoreOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    store?: StoreOrderByWithRelationInput
  }

  export type UserStoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_storeId?: UserStoreUserIdStoreIdCompoundUniqueInput
    AND?: UserStoreWhereInput | UserStoreWhereInput[]
    OR?: UserStoreWhereInput[]
    NOT?: UserStoreWhereInput | UserStoreWhereInput[]
    userId?: StringFilter<"UserStore"> | string
    storeId?: IntFilter<"UserStore"> | number
    isActive?: BoolFilter<"UserStore"> | boolean
    createdAt?: DateTimeFilter<"UserStore"> | Date | string
    updatedAt?: DateTimeFilter<"UserStore"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    store?: XOR<StoreRelationFilter, StoreWhereInput>
  }, "id" | "userId_storeId">

  export type UserStoreOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserStoreCountOrderByAggregateInput
    _avg?: UserStoreAvgOrderByAggregateInput
    _max?: UserStoreMaxOrderByAggregateInput
    _min?: UserStoreMinOrderByAggregateInput
    _sum?: UserStoreSumOrderByAggregateInput
  }

  export type UserStoreScalarWhereWithAggregatesInput = {
    AND?: UserStoreScalarWhereWithAggregatesInput | UserStoreScalarWhereWithAggregatesInput[]
    OR?: UserStoreScalarWhereWithAggregatesInput[]
    NOT?: UserStoreScalarWhereWithAggregatesInput | UserStoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserStore"> | string
    userId?: StringWithAggregatesFilter<"UserStore"> | string
    storeId?: IntWithAggregatesFilter<"UserStore"> | number
    isActive?: BoolWithAggregatesFilter<"UserStore"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserStore"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserStore"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    storeId?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    imageUrl?: StringNullableFilter<"Task"> | string | null
    productPrice?: FloatNullableFilter<"Task"> | number | null
    profitMargin?: FloatNullableFilter<"Task"> | number | null
    sellingPrice?: FloatNullableFilter<"Task"> | number | null
    earnings?: FloatFilter<"Task"> | number
    isActive?: BoolFilter<"Task"> | boolean
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    completedTasks?: CompletedTaskListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    productPrice?: SortOrderInput | SortOrder
    profitMargin?: SortOrderInput | SortOrder
    sellingPrice?: SortOrderInput | SortOrder
    earnings?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    completedTasks?: CompletedTaskOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    storeId?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    imageUrl?: StringNullableFilter<"Task"> | string | null
    productPrice?: FloatNullableFilter<"Task"> | number | null
    profitMargin?: FloatNullableFilter<"Task"> | number | null
    sellingPrice?: FloatNullableFilter<"Task"> | number | null
    earnings?: FloatFilter<"Task"> | number
    isActive?: BoolFilter<"Task"> | boolean
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    completedTasks?: CompletedTaskListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    productPrice?: SortOrderInput | SortOrder
    profitMargin?: SortOrderInput | SortOrder
    sellingPrice?: SortOrderInput | SortOrder
    earnings?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    storeId?: IntWithAggregatesFilter<"Task"> | number
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringWithAggregatesFilter<"Task"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Task"> | string | null
    productPrice?: FloatNullableWithAggregatesFilter<"Task"> | number | null
    profitMargin?: FloatNullableWithAggregatesFilter<"Task"> | number | null
    sellingPrice?: FloatNullableWithAggregatesFilter<"Task"> | number | null
    earnings?: FloatWithAggregatesFilter<"Task"> | number
    isActive?: BoolWithAggregatesFilter<"Task"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type CompletedTaskWhereInput = {
    AND?: CompletedTaskWhereInput | CompletedTaskWhereInput[]
    OR?: CompletedTaskWhereInput[]
    NOT?: CompletedTaskWhereInput | CompletedTaskWhereInput[]
    id?: StringFilter<"CompletedTask"> | string
    userId?: StringFilter<"CompletedTask"> | string
    taskId?: StringFilter<"CompletedTask"> | string
    status?: StringFilter<"CompletedTask"> | string
    earnings?: FloatFilter<"CompletedTask"> | number
    createdAt?: DateTimeFilter<"CompletedTask"> | Date | string
    updatedAt?: DateTimeFilter<"CompletedTask"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    task?: XOR<TaskRelationFilter, TaskWhereInput>
  }

  export type CompletedTaskOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    earnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    task?: TaskOrderByWithRelationInput
  }

  export type CompletedTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompletedTaskWhereInput | CompletedTaskWhereInput[]
    OR?: CompletedTaskWhereInput[]
    NOT?: CompletedTaskWhereInput | CompletedTaskWhereInput[]
    userId?: StringFilter<"CompletedTask"> | string
    taskId?: StringFilter<"CompletedTask"> | string
    status?: StringFilter<"CompletedTask"> | string
    earnings?: FloatFilter<"CompletedTask"> | number
    createdAt?: DateTimeFilter<"CompletedTask"> | Date | string
    updatedAt?: DateTimeFilter<"CompletedTask"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    task?: XOR<TaskRelationFilter, TaskWhereInput>
  }, "id">

  export type CompletedTaskOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    earnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompletedTaskCountOrderByAggregateInput
    _avg?: CompletedTaskAvgOrderByAggregateInput
    _max?: CompletedTaskMaxOrderByAggregateInput
    _min?: CompletedTaskMinOrderByAggregateInput
    _sum?: CompletedTaskSumOrderByAggregateInput
  }

  export type CompletedTaskScalarWhereWithAggregatesInput = {
    AND?: CompletedTaskScalarWhereWithAggregatesInput | CompletedTaskScalarWhereWithAggregatesInput[]
    OR?: CompletedTaskScalarWhereWithAggregatesInput[]
    NOT?: CompletedTaskScalarWhereWithAggregatesInput | CompletedTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompletedTask"> | string
    userId?: StringWithAggregatesFilter<"CompletedTask"> | string
    taskId?: StringWithAggregatesFilter<"CompletedTask"> | string
    status?: StringWithAggregatesFilter<"CompletedTask"> | string
    earnings?: FloatWithAggregatesFilter<"CompletedTask"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CompletedTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompletedTask"> | Date | string
  }

  export type DepositWhereInput = {
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    id?: StringFilter<"Deposit"> | string
    userId?: StringFilter<"Deposit"> | string
    amount?: FloatFilter<"Deposit"> | number
    transferNumber?: StringFilter<"Deposit"> | string
    proofImageUrl?: StringNullableFilter<"Deposit"> | string | null
    status?: StringFilter<"Deposit"> | string
    adminNote?: StringNullableFilter<"Deposit"> | string | null
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    updatedAt?: DateTimeFilter<"Deposit"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DepositOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    transferNumber?: SortOrder
    proofImageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    adminNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DepositWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    userId?: StringFilter<"Deposit"> | string
    amount?: FloatFilter<"Deposit"> | number
    transferNumber?: StringFilter<"Deposit"> | string
    proofImageUrl?: StringNullableFilter<"Deposit"> | string | null
    status?: StringFilter<"Deposit"> | string
    adminNote?: StringNullableFilter<"Deposit"> | string | null
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    updatedAt?: DateTimeFilter<"Deposit"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type DepositOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    transferNumber?: SortOrder
    proofImageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    adminNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepositCountOrderByAggregateInput
    _avg?: DepositAvgOrderByAggregateInput
    _max?: DepositMaxOrderByAggregateInput
    _min?: DepositMinOrderByAggregateInput
    _sum?: DepositSumOrderByAggregateInput
  }

  export type DepositScalarWhereWithAggregatesInput = {
    AND?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    OR?: DepositScalarWhereWithAggregatesInput[]
    NOT?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deposit"> | string
    userId?: StringWithAggregatesFilter<"Deposit"> | string
    amount?: FloatWithAggregatesFilter<"Deposit"> | number
    transferNumber?: StringWithAggregatesFilter<"Deposit"> | string
    proofImageUrl?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    status?: StringWithAggregatesFilter<"Deposit"> | string
    adminNote?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
  }

  export type WithdrawalWhereInput = {
    AND?: WithdrawalWhereInput | WithdrawalWhereInput[]
    OR?: WithdrawalWhereInput[]
    NOT?: WithdrawalWhereInput | WithdrawalWhereInput[]
    id?: StringFilter<"Withdrawal"> | string
    userId?: StringFilter<"Withdrawal"> | string
    amount?: FloatFilter<"Withdrawal"> | number
    transferToNumber?: StringFilter<"Withdrawal"> | string
    status?: StringFilter<"Withdrawal"> | string
    adminNote?: StringNullableFilter<"Withdrawal"> | string | null
    createdAt?: DateTimeFilter<"Withdrawal"> | Date | string
    updatedAt?: DateTimeFilter<"Withdrawal"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WithdrawalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    transferToNumber?: SortOrder
    status?: SortOrder
    adminNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WithdrawalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WithdrawalWhereInput | WithdrawalWhereInput[]
    OR?: WithdrawalWhereInput[]
    NOT?: WithdrawalWhereInput | WithdrawalWhereInput[]
    userId?: StringFilter<"Withdrawal"> | string
    amount?: FloatFilter<"Withdrawal"> | number
    transferToNumber?: StringFilter<"Withdrawal"> | string
    status?: StringFilter<"Withdrawal"> | string
    adminNote?: StringNullableFilter<"Withdrawal"> | string | null
    createdAt?: DateTimeFilter<"Withdrawal"> | Date | string
    updatedAt?: DateTimeFilter<"Withdrawal"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type WithdrawalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    transferToNumber?: SortOrder
    status?: SortOrder
    adminNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WithdrawalCountOrderByAggregateInput
    _avg?: WithdrawalAvgOrderByAggregateInput
    _max?: WithdrawalMaxOrderByAggregateInput
    _min?: WithdrawalMinOrderByAggregateInput
    _sum?: WithdrawalSumOrderByAggregateInput
  }

  export type WithdrawalScalarWhereWithAggregatesInput = {
    AND?: WithdrawalScalarWhereWithAggregatesInput | WithdrawalScalarWhereWithAggregatesInput[]
    OR?: WithdrawalScalarWhereWithAggregatesInput[]
    NOT?: WithdrawalScalarWhereWithAggregatesInput | WithdrawalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Withdrawal"> | string
    userId?: StringWithAggregatesFilter<"Withdrawal"> | string
    amount?: FloatWithAggregatesFilter<"Withdrawal"> | number
    transferToNumber?: StringWithAggregatesFilter<"Withdrawal"> | string
    status?: StringWithAggregatesFilter<"Withdrawal"> | string
    adminNote?: StringNullableWithAggregatesFilter<"Withdrawal"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Withdrawal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Withdrawal"> | Date | string
  }

  export type ReferralRewardWhereInput = {
    AND?: ReferralRewardWhereInput | ReferralRewardWhereInput[]
    OR?: ReferralRewardWhereInput[]
    NOT?: ReferralRewardWhereInput | ReferralRewardWhereInput[]
    id?: StringFilter<"ReferralReward"> | string
    referrerId?: StringFilter<"ReferralReward"> | string
    referredId?: StringFilter<"ReferralReward"> | string
    amount?: FloatFilter<"ReferralReward"> | number
    status?: StringFilter<"ReferralReward"> | string
    createdAt?: DateTimeFilter<"ReferralReward"> | Date | string
    updatedAt?: DateTimeFilter<"ReferralReward"> | Date | string
    referrer?: XOR<UserRelationFilter, UserWhereInput>
    referred?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ReferralRewardOrderByWithRelationInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referrer?: UserOrderByWithRelationInput
    referred?: UserOrderByWithRelationInput
  }

  export type ReferralRewardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    referrerId_referredId?: ReferralRewardReferrerIdReferredIdCompoundUniqueInput
    AND?: ReferralRewardWhereInput | ReferralRewardWhereInput[]
    OR?: ReferralRewardWhereInput[]
    NOT?: ReferralRewardWhereInput | ReferralRewardWhereInput[]
    referrerId?: StringFilter<"ReferralReward"> | string
    referredId?: StringFilter<"ReferralReward"> | string
    amount?: FloatFilter<"ReferralReward"> | number
    status?: StringFilter<"ReferralReward"> | string
    createdAt?: DateTimeFilter<"ReferralReward"> | Date | string
    updatedAt?: DateTimeFilter<"ReferralReward"> | Date | string
    referrer?: XOR<UserRelationFilter, UserWhereInput>
    referred?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "referrerId_referredId">

  export type ReferralRewardOrderByWithAggregationInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReferralRewardCountOrderByAggregateInput
    _avg?: ReferralRewardAvgOrderByAggregateInput
    _max?: ReferralRewardMaxOrderByAggregateInput
    _min?: ReferralRewardMinOrderByAggregateInput
    _sum?: ReferralRewardSumOrderByAggregateInput
  }

  export type ReferralRewardScalarWhereWithAggregatesInput = {
    AND?: ReferralRewardScalarWhereWithAggregatesInput | ReferralRewardScalarWhereWithAggregatesInput[]
    OR?: ReferralRewardScalarWhereWithAggregatesInput[]
    NOT?: ReferralRewardScalarWhereWithAggregatesInput | ReferralRewardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReferralReward"> | string
    referrerId?: StringWithAggregatesFilter<"ReferralReward"> | string
    referredId?: StringWithAggregatesFilter<"ReferralReward"> | string
    amount?: FloatWithAggregatesFilter<"ReferralReward"> | number
    status?: StringWithAggregatesFilter<"ReferralReward"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReferralReward"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReferralReward"> | Date | string
  }

  export type AppSettingsWhereInput = {
    AND?: AppSettingsWhereInput | AppSettingsWhereInput[]
    OR?: AppSettingsWhereInput[]
    NOT?: AppSettingsWhereInput | AppSettingsWhereInput[]
    id?: IntFilter<"AppSettings"> | number
    welcomeMessage?: StringNullableFilter<"AppSettings"> | string | null
    welcomeMessageVisible?: BoolFilter<"AppSettings"> | boolean
    adminDepositNumber?: StringNullableFilter<"AppSettings"> | string | null
    depositInstructions?: StringNullableFilter<"AppSettings"> | string | null
    createdAt?: DateTimeFilter<"AppSettings"> | Date | string
    updatedAt?: DateTimeFilter<"AppSettings"> | Date | string
  }

  export type AppSettingsOrderByWithRelationInput = {
    id?: SortOrder
    welcomeMessage?: SortOrderInput | SortOrder
    welcomeMessageVisible?: SortOrder
    adminDepositNumber?: SortOrderInput | SortOrder
    depositInstructions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppSettingsWhereInput | AppSettingsWhereInput[]
    OR?: AppSettingsWhereInput[]
    NOT?: AppSettingsWhereInput | AppSettingsWhereInput[]
    welcomeMessage?: StringNullableFilter<"AppSettings"> | string | null
    welcomeMessageVisible?: BoolFilter<"AppSettings"> | boolean
    adminDepositNumber?: StringNullableFilter<"AppSettings"> | string | null
    depositInstructions?: StringNullableFilter<"AppSettings"> | string | null
    createdAt?: DateTimeFilter<"AppSettings"> | Date | string
    updatedAt?: DateTimeFilter<"AppSettings"> | Date | string
  }, "id">

  export type AppSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    welcomeMessage?: SortOrderInput | SortOrder
    welcomeMessageVisible?: SortOrder
    adminDepositNumber?: SortOrderInput | SortOrder
    depositInstructions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppSettingsCountOrderByAggregateInput
    _avg?: AppSettingsAvgOrderByAggregateInput
    _max?: AppSettingsMaxOrderByAggregateInput
    _min?: AppSettingsMinOrderByAggregateInput
    _sum?: AppSettingsSumOrderByAggregateInput
  }

  export type AppSettingsScalarWhereWithAggregatesInput = {
    AND?: AppSettingsScalarWhereWithAggregatesInput | AppSettingsScalarWhereWithAggregatesInput[]
    OR?: AppSettingsScalarWhereWithAggregatesInput[]
    NOT?: AppSettingsScalarWhereWithAggregatesInput | AppSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AppSettings"> | number
    welcomeMessage?: StringNullableWithAggregatesFilter<"AppSettings"> | string | null
    welcomeMessageVisible?: BoolWithAggregatesFilter<"AppSettings"> | boolean
    adminDepositNumber?: StringNullableWithAggregatesFilter<"AppSettings"> | string | null
    depositInstructions?: StringNullableWithAggregatesFilter<"AppSettings"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AppSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AppSettings"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    deposits?: DepositCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    userStores?: UserStoreCreateNestedManyWithoutUserInput
    completedTasks?: CompletedTaskCreateNestedManyWithoutUserInput
    referralRewardsAsReferrer?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsAsReferred?: ReferralRewardCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    referredByCode?: string | null
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    userStores?: UserStoreUncheckedCreateNestedManyWithoutUserInput
    completedTasks?: CompletedTaskUncheckedCreateNestedManyWithoutUserInput
    referralRewardsAsReferrer?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsAsReferred?: ReferralRewardUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    userStores?: UserStoreUpdateManyWithoutUserNestedInput
    completedTasks?: CompletedTaskUpdateManyWithoutUserNestedInput
    referralRewardsAsReferrer?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsAsReferred?: ReferralRewardUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredByCode?: NullableStringFieldUpdateOperationsInput | string | null
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    userStores?: UserStoreUncheckedUpdateManyWithoutUserNestedInput
    completedTasks?: CompletedTaskUncheckedUpdateManyWithoutUserNestedInput
    referralRewardsAsReferrer?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsAsReferred?: ReferralRewardUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    referredByCode?: string | null
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredByCode?: NullableStringFieldUpdateOperationsInput | string | null
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreCreateInput = {
    name: string
    price: number
    profitPerTask: number
    tasksAvailable: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userStores?: UserStoreCreateNestedManyWithoutStoreInput
    tasks?: TaskCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    profitPerTask: number
    tasksAvailable: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userStores?: UserStoreUncheckedCreateNestedManyWithoutStoreInput
    tasks?: TaskUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    profitPerTask?: FloatFieldUpdateOperationsInput | number
    tasksAvailable?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userStores?: UserStoreUpdateManyWithoutStoreNestedInput
    tasks?: TaskUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    profitPerTask?: FloatFieldUpdateOperationsInput | number
    tasksAvailable?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userStores?: UserStoreUncheckedUpdateManyWithoutStoreNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: number
    name: string
    price: number
    profitPerTask: number
    tasksAvailable: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    profitPerTask?: FloatFieldUpdateOperationsInput | number
    tasksAvailable?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    profitPerTask?: FloatFieldUpdateOperationsInput | number
    tasksAvailable?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStoreCreateInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserStoresInput
    store: StoreCreateNestedOneWithoutUserStoresInput
  }

  export type UserStoreUncheckedCreateInput = {
    id?: string
    userId: string
    storeId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserStoresNestedInput
    store?: StoreUpdateOneRequiredWithoutUserStoresNestedInput
  }

  export type UserStoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStoreCreateManyInput = {
    id?: string
    userId: string
    storeId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    productPrice?: number | null
    profitMargin?: number | null
    sellingPrice?: number | null
    earnings: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutTasksInput
    completedTasks?: CompletedTaskCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    storeId: number
    title: string
    description: string
    imageUrl?: string | null
    productPrice?: number | null
    profitMargin?: number | null
    sellingPrice?: number | null
    earnings: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    completedTasks?: CompletedTaskUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profitMargin?: NullableFloatFieldUpdateOperationsInput | number | null
    sellingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    earnings?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutTasksNestedInput
    completedTasks?: CompletedTaskUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profitMargin?: NullableFloatFieldUpdateOperationsInput | number | null
    sellingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    earnings?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedTasks?: CompletedTaskUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    storeId: number
    title: string
    description: string
    imageUrl?: string | null
    productPrice?: number | null
    profitMargin?: number | null
    sellingPrice?: number | null
    earnings: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profitMargin?: NullableFloatFieldUpdateOperationsInput | number | null
    sellingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    earnings?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profitMargin?: NullableFloatFieldUpdateOperationsInput | number | null
    sellingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    earnings?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedTaskCreateInput = {
    id?: string
    status?: string
    earnings: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCompletedTasksInput
    task: TaskCreateNestedOneWithoutCompletedTasksInput
  }

  export type CompletedTaskUncheckedCreateInput = {
    id?: string
    userId: string
    taskId: string
    status?: string
    earnings: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletedTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompletedTasksNestedInput
    task?: TaskUpdateOneRequiredWithoutCompletedTasksNestedInput
  }

  export type CompletedTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedTaskCreateManyInput = {
    id?: string
    userId: string
    taskId: string
    status?: string
    earnings: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletedTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositCreateInput = {
    id?: string
    amount: number
    transferNumber: string
    proofImageUrl?: string | null
    status?: string
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDepositsInput
  }

  export type DepositUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    transferNumber: string
    proofImageUrl?: string | null
    status?: string
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transferNumber?: StringFieldUpdateOperationsInput | string
    proofImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDepositsNestedInput
  }

  export type DepositUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transferNumber?: StringFieldUpdateOperationsInput | string
    proofImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositCreateManyInput = {
    id?: string
    userId: string
    amount: number
    transferNumber: string
    proofImageUrl?: string | null
    status?: string
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transferNumber?: StringFieldUpdateOperationsInput | string
    proofImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transferNumber?: StringFieldUpdateOperationsInput | string
    proofImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalCreateInput = {
    id?: string
    amount: number
    transferToNumber: string
    status?: string
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWithdrawalsInput
  }

  export type WithdrawalUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    transferToNumber: string
    status?: string
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transferToNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWithdrawalsNestedInput
  }

  export type WithdrawalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transferToNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalCreateManyInput = {
    id?: string
    userId: string
    amount: number
    transferToNumber: string
    status?: string
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transferToNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transferToNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralRewardCreateInput = {
    id?: string
    amount?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    referrer: UserCreateNestedOneWithoutReferralRewardsAsReferrerInput
    referred: UserCreateNestedOneWithoutReferralRewardsAsReferredInput
  }

  export type ReferralRewardUncheckedCreateInput = {
    id?: string
    referrerId: string
    referredId: string
    amount?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralRewardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: UserUpdateOneRequiredWithoutReferralRewardsAsReferrerNestedInput
    referred?: UserUpdateOneRequiredWithoutReferralRewardsAsReferredNestedInput
  }

  export type ReferralRewardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralRewardCreateManyInput = {
    id?: string
    referrerId: string
    referredId: string
    amount?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralRewardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralRewardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingsCreateInput = {
    id?: number
    welcomeMessage?: string | null
    welcomeMessageVisible?: boolean
    adminDepositNumber?: string | null
    depositInstructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppSettingsUncheckedCreateInput = {
    id?: number
    welcomeMessage?: string | null
    welcomeMessageVisible?: boolean
    adminDepositNumber?: string | null
    depositInstructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppSettingsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessageVisible?: BoolFieldUpdateOperationsInput | boolean
    adminDepositNumber?: NullableStringFieldUpdateOperationsInput | string | null
    depositInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessageVisible?: BoolFieldUpdateOperationsInput | boolean
    adminDepositNumber?: NullableStringFieldUpdateOperationsInput | string | null
    depositInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingsCreateManyInput = {
    id?: number
    welcomeMessage?: string | null
    welcomeMessageVisible?: boolean
    adminDepositNumber?: string | null
    depositInstructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppSettingsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessageVisible?: BoolFieldUpdateOperationsInput | boolean
    adminDepositNumber?: NullableStringFieldUpdateOperationsInput | string | null
    depositInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessageVisible?: BoolFieldUpdateOperationsInput | boolean
    adminDepositNumber?: NullableStringFieldUpdateOperationsInput | string | null
    depositInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type DepositListRelationFilter = {
    every?: DepositWhereInput
    some?: DepositWhereInput
    none?: DepositWhereInput
  }

  export type WithdrawalListRelationFilter = {
    every?: WithdrawalWhereInput
    some?: WithdrawalWhereInput
    none?: WithdrawalWhereInput
  }

  export type UserStoreListRelationFilter = {
    every?: UserStoreWhereInput
    some?: UserStoreWhereInput
    none?: UserStoreWhereInput
  }

  export type CompletedTaskListRelationFilter = {
    every?: CompletedTaskWhereInput
    some?: CompletedTaskWhereInput
    none?: CompletedTaskWhereInput
  }

  export type ReferralRewardListRelationFilter = {
    every?: ReferralRewardWhereInput
    some?: ReferralRewardWhereInput
    none?: ReferralRewardWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepositOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WithdrawalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserStoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompletedTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferralRewardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredByCode?: SortOrder
    activeStoreId?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    balance?: SortOrder
    activeStoreId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredByCode?: SortOrder
    activeStoreId?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredByCode?: SortOrder
    activeStoreId?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    balance?: SortOrder
    activeStoreId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    profitPerTask?: SortOrder
    tasksAvailable?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    profitPerTask?: SortOrder
    tasksAvailable?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    profitPerTask?: SortOrder
    tasksAvailable?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    profitPerTask?: SortOrder
    tasksAvailable?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    profitPerTask?: SortOrder
    tasksAvailable?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StoreRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type UserStoreUserIdStoreIdCompoundUniqueInput = {
    userId: string
    storeId: number
  }

  export type UserStoreCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStoreAvgOrderByAggregateInput = {
    storeId?: SortOrder
  }

  export type UserStoreMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStoreMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStoreSumOrderByAggregateInput = {
    storeId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    productPrice?: SortOrder
    profitMargin?: SortOrder
    sellingPrice?: SortOrder
    earnings?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    storeId?: SortOrder
    productPrice?: SortOrder
    profitMargin?: SortOrder
    sellingPrice?: SortOrder
    earnings?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    productPrice?: SortOrder
    profitMargin?: SortOrder
    sellingPrice?: SortOrder
    earnings?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    productPrice?: SortOrder
    profitMargin?: SortOrder
    sellingPrice?: SortOrder
    earnings?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    storeId?: SortOrder
    productPrice?: SortOrder
    profitMargin?: SortOrder
    sellingPrice?: SortOrder
    earnings?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type TaskRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type CompletedTaskCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    earnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompletedTaskAvgOrderByAggregateInput = {
    earnings?: SortOrder
  }

  export type CompletedTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    earnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompletedTaskMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    earnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompletedTaskSumOrderByAggregateInput = {
    earnings?: SortOrder
  }

  export type DepositCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    transferNumber?: SortOrder
    proofImageUrl?: SortOrder
    status?: SortOrder
    adminNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepositAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DepositMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    transferNumber?: SortOrder
    proofImageUrl?: SortOrder
    status?: SortOrder
    adminNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepositMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    transferNumber?: SortOrder
    proofImageUrl?: SortOrder
    status?: SortOrder
    adminNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepositSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WithdrawalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    transferToNumber?: SortOrder
    status?: SortOrder
    adminNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawalAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WithdrawalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    transferToNumber?: SortOrder
    status?: SortOrder
    adminNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    transferToNumber?: SortOrder
    status?: SortOrder
    adminNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawalSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ReferralRewardReferrerIdReferredIdCompoundUniqueInput = {
    referrerId: string
    referredId: string
  }

  export type ReferralRewardCountOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferralRewardAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ReferralRewardMaxOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferralRewardMinOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferralRewardSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AppSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    welcomeMessage?: SortOrder
    welcomeMessageVisible?: SortOrder
    adminDepositNumber?: SortOrder
    depositInstructions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    welcomeMessage?: SortOrder
    welcomeMessageVisible?: SortOrder
    adminDepositNumber?: SortOrder
    depositInstructions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    welcomeMessage?: SortOrder
    welcomeMessageVisible?: SortOrder
    adminDepositNumber?: SortOrder
    depositInstructions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCreateNestedOneWithoutReferralsInput = {
    create?: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutReferredByInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DepositCreateNestedManyWithoutUserInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type WithdrawalCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
  }

  export type UserStoreCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStoreCreateWithoutUserInput, UserStoreUncheckedCreateWithoutUserInput> | UserStoreCreateWithoutUserInput[] | UserStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStoreCreateOrConnectWithoutUserInput | UserStoreCreateOrConnectWithoutUserInput[]
    createMany?: UserStoreCreateManyUserInputEnvelope
    connect?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
  }

  export type CompletedTaskCreateNestedManyWithoutUserInput = {
    create?: XOR<CompletedTaskCreateWithoutUserInput, CompletedTaskUncheckedCreateWithoutUserInput> | CompletedTaskCreateWithoutUserInput[] | CompletedTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedTaskCreateOrConnectWithoutUserInput | CompletedTaskCreateOrConnectWithoutUserInput[]
    createMany?: CompletedTaskCreateManyUserInputEnvelope
    connect?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
  }

  export type ReferralRewardCreateNestedManyWithoutReferrerInput = {
    create?: XOR<ReferralRewardCreateWithoutReferrerInput, ReferralRewardUncheckedCreateWithoutReferrerInput> | ReferralRewardCreateWithoutReferrerInput[] | ReferralRewardUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralRewardCreateOrConnectWithoutReferrerInput | ReferralRewardCreateOrConnectWithoutReferrerInput[]
    createMany?: ReferralRewardCreateManyReferrerInputEnvelope
    connect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
  }

  export type ReferralRewardCreateNestedManyWithoutReferredInput = {
    create?: XOR<ReferralRewardCreateWithoutReferredInput, ReferralRewardUncheckedCreateWithoutReferredInput> | ReferralRewardCreateWithoutReferredInput[] | ReferralRewardUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferralRewardCreateOrConnectWithoutReferredInput | ReferralRewardCreateOrConnectWithoutReferredInput[]
    createMany?: ReferralRewardCreateManyReferredInputEnvelope
    connect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutReferredByInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DepositUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type WithdrawalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
  }

  export type UserStoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStoreCreateWithoutUserInput, UserStoreUncheckedCreateWithoutUserInput> | UserStoreCreateWithoutUserInput[] | UserStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStoreCreateOrConnectWithoutUserInput | UserStoreCreateOrConnectWithoutUserInput[]
    createMany?: UserStoreCreateManyUserInputEnvelope
    connect?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
  }

  export type CompletedTaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CompletedTaskCreateWithoutUserInput, CompletedTaskUncheckedCreateWithoutUserInput> | CompletedTaskCreateWithoutUserInput[] | CompletedTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedTaskCreateOrConnectWithoutUserInput | CompletedTaskCreateOrConnectWithoutUserInput[]
    createMany?: CompletedTaskCreateManyUserInputEnvelope
    connect?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
  }

  export type ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput = {
    create?: XOR<ReferralRewardCreateWithoutReferrerInput, ReferralRewardUncheckedCreateWithoutReferrerInput> | ReferralRewardCreateWithoutReferrerInput[] | ReferralRewardUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralRewardCreateOrConnectWithoutReferrerInput | ReferralRewardCreateOrConnectWithoutReferrerInput[]
    createMany?: ReferralRewardCreateManyReferrerInputEnvelope
    connect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
  }

  export type ReferralRewardUncheckedCreateNestedManyWithoutReferredInput = {
    create?: XOR<ReferralRewardCreateWithoutReferredInput, ReferralRewardUncheckedCreateWithoutReferredInput> | ReferralRewardCreateWithoutReferredInput[] | ReferralRewardUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferralRewardCreateOrConnectWithoutReferredInput | ReferralRewardCreateOrConnectWithoutReferredInput[]
    createMany?: ReferralRewardCreateManyReferredInputEnvelope
    connect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutReferralsNestedInput = {
    create?: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsInput
    upsert?: UserUpsertWithoutReferralsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralsInput, UserUpdateWithoutReferralsInput>, UserUncheckedUpdateWithoutReferralsInput>
  }

  export type UserUpdateManyWithoutReferredByNestedInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferredByInput | UserUpsertWithWhereUniqueWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferredByInput | UserUpdateWithWhereUniqueWithoutReferredByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferredByInput | UserUpdateManyWithWhereWithoutReferredByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DepositUpdateManyWithoutUserNestedInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutUserInput | DepositUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutUserInput | DepositUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutUserInput | DepositUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type WithdrawalUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawalUpsertWithWhereUniqueWithoutUserInput | WithdrawalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    set?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    disconnect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    delete?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    update?: WithdrawalUpdateWithWhereUniqueWithoutUserInput | WithdrawalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawalUpdateManyWithWhereWithoutUserInput | WithdrawalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
  }

  export type UserStoreUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStoreCreateWithoutUserInput, UserStoreUncheckedCreateWithoutUserInput> | UserStoreCreateWithoutUserInput[] | UserStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStoreCreateOrConnectWithoutUserInput | UserStoreCreateOrConnectWithoutUserInput[]
    upsert?: UserStoreUpsertWithWhereUniqueWithoutUserInput | UserStoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStoreCreateManyUserInputEnvelope
    set?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
    disconnect?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
    delete?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
    connect?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
    update?: UserStoreUpdateWithWhereUniqueWithoutUserInput | UserStoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStoreUpdateManyWithWhereWithoutUserInput | UserStoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStoreScalarWhereInput | UserStoreScalarWhereInput[]
  }

  export type CompletedTaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompletedTaskCreateWithoutUserInput, CompletedTaskUncheckedCreateWithoutUserInput> | CompletedTaskCreateWithoutUserInput[] | CompletedTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedTaskCreateOrConnectWithoutUserInput | CompletedTaskCreateOrConnectWithoutUserInput[]
    upsert?: CompletedTaskUpsertWithWhereUniqueWithoutUserInput | CompletedTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompletedTaskCreateManyUserInputEnvelope
    set?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
    disconnect?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
    delete?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
    connect?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
    update?: CompletedTaskUpdateWithWhereUniqueWithoutUserInput | CompletedTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompletedTaskUpdateManyWithWhereWithoutUserInput | CompletedTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompletedTaskScalarWhereInput | CompletedTaskScalarWhereInput[]
  }

  export type ReferralRewardUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<ReferralRewardCreateWithoutReferrerInput, ReferralRewardUncheckedCreateWithoutReferrerInput> | ReferralRewardCreateWithoutReferrerInput[] | ReferralRewardUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralRewardCreateOrConnectWithoutReferrerInput | ReferralRewardCreateOrConnectWithoutReferrerInput[]
    upsert?: ReferralRewardUpsertWithWhereUniqueWithoutReferrerInput | ReferralRewardUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: ReferralRewardCreateManyReferrerInputEnvelope
    set?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    disconnect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    delete?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    connect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    update?: ReferralRewardUpdateWithWhereUniqueWithoutReferrerInput | ReferralRewardUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: ReferralRewardUpdateManyWithWhereWithoutReferrerInput | ReferralRewardUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: ReferralRewardScalarWhereInput | ReferralRewardScalarWhereInput[]
  }

  export type ReferralRewardUpdateManyWithoutReferredNestedInput = {
    create?: XOR<ReferralRewardCreateWithoutReferredInput, ReferralRewardUncheckedCreateWithoutReferredInput> | ReferralRewardCreateWithoutReferredInput[] | ReferralRewardUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferralRewardCreateOrConnectWithoutReferredInput | ReferralRewardCreateOrConnectWithoutReferredInput[]
    upsert?: ReferralRewardUpsertWithWhereUniqueWithoutReferredInput | ReferralRewardUpsertWithWhereUniqueWithoutReferredInput[]
    createMany?: ReferralRewardCreateManyReferredInputEnvelope
    set?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    disconnect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    delete?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    connect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    update?: ReferralRewardUpdateWithWhereUniqueWithoutReferredInput | ReferralRewardUpdateWithWhereUniqueWithoutReferredInput[]
    updateMany?: ReferralRewardUpdateManyWithWhereWithoutReferredInput | ReferralRewardUpdateManyWithWhereWithoutReferredInput[]
    deleteMany?: ReferralRewardScalarWhereInput | ReferralRewardScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutReferredByNestedInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferredByInput | UserUpsertWithWhereUniqueWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferredByInput | UserUpdateWithWhereUniqueWithoutReferredByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferredByInput | UserUpdateManyWithWhereWithoutReferredByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DepositUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutUserInput | DepositUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutUserInput | DepositUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutUserInput | DepositUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type WithdrawalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawalUpsertWithWhereUniqueWithoutUserInput | WithdrawalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    set?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    disconnect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    delete?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    update?: WithdrawalUpdateWithWhereUniqueWithoutUserInput | WithdrawalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawalUpdateManyWithWhereWithoutUserInput | WithdrawalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
  }

  export type UserStoreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStoreCreateWithoutUserInput, UserStoreUncheckedCreateWithoutUserInput> | UserStoreCreateWithoutUserInput[] | UserStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStoreCreateOrConnectWithoutUserInput | UserStoreCreateOrConnectWithoutUserInput[]
    upsert?: UserStoreUpsertWithWhereUniqueWithoutUserInput | UserStoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStoreCreateManyUserInputEnvelope
    set?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
    disconnect?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
    delete?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
    connect?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
    update?: UserStoreUpdateWithWhereUniqueWithoutUserInput | UserStoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStoreUpdateManyWithWhereWithoutUserInput | UserStoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStoreScalarWhereInput | UserStoreScalarWhereInput[]
  }

  export type CompletedTaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompletedTaskCreateWithoutUserInput, CompletedTaskUncheckedCreateWithoutUserInput> | CompletedTaskCreateWithoutUserInput[] | CompletedTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompletedTaskCreateOrConnectWithoutUserInput | CompletedTaskCreateOrConnectWithoutUserInput[]
    upsert?: CompletedTaskUpsertWithWhereUniqueWithoutUserInput | CompletedTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompletedTaskCreateManyUserInputEnvelope
    set?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
    disconnect?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
    delete?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
    connect?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
    update?: CompletedTaskUpdateWithWhereUniqueWithoutUserInput | CompletedTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompletedTaskUpdateManyWithWhereWithoutUserInput | CompletedTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompletedTaskScalarWhereInput | CompletedTaskScalarWhereInput[]
  }

  export type ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<ReferralRewardCreateWithoutReferrerInput, ReferralRewardUncheckedCreateWithoutReferrerInput> | ReferralRewardCreateWithoutReferrerInput[] | ReferralRewardUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralRewardCreateOrConnectWithoutReferrerInput | ReferralRewardCreateOrConnectWithoutReferrerInput[]
    upsert?: ReferralRewardUpsertWithWhereUniqueWithoutReferrerInput | ReferralRewardUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: ReferralRewardCreateManyReferrerInputEnvelope
    set?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    disconnect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    delete?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    connect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    update?: ReferralRewardUpdateWithWhereUniqueWithoutReferrerInput | ReferralRewardUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: ReferralRewardUpdateManyWithWhereWithoutReferrerInput | ReferralRewardUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: ReferralRewardScalarWhereInput | ReferralRewardScalarWhereInput[]
  }

  export type ReferralRewardUncheckedUpdateManyWithoutReferredNestedInput = {
    create?: XOR<ReferralRewardCreateWithoutReferredInput, ReferralRewardUncheckedCreateWithoutReferredInput> | ReferralRewardCreateWithoutReferredInput[] | ReferralRewardUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferralRewardCreateOrConnectWithoutReferredInput | ReferralRewardCreateOrConnectWithoutReferredInput[]
    upsert?: ReferralRewardUpsertWithWhereUniqueWithoutReferredInput | ReferralRewardUpsertWithWhereUniqueWithoutReferredInput[]
    createMany?: ReferralRewardCreateManyReferredInputEnvelope
    set?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    disconnect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    delete?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    connect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    update?: ReferralRewardUpdateWithWhereUniqueWithoutReferredInput | ReferralRewardUpdateWithWhereUniqueWithoutReferredInput[]
    updateMany?: ReferralRewardUpdateManyWithWhereWithoutReferredInput | ReferralRewardUpdateManyWithWhereWithoutReferredInput[]
    deleteMany?: ReferralRewardScalarWhereInput | ReferralRewardScalarWhereInput[]
  }

  export type UserStoreCreateNestedManyWithoutStoreInput = {
    create?: XOR<UserStoreCreateWithoutStoreInput, UserStoreUncheckedCreateWithoutStoreInput> | UserStoreCreateWithoutStoreInput[] | UserStoreUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: UserStoreCreateOrConnectWithoutStoreInput | UserStoreCreateOrConnectWithoutStoreInput[]
    createMany?: UserStoreCreateManyStoreInputEnvelope
    connect?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutStoreInput = {
    create?: XOR<TaskCreateWithoutStoreInput, TaskUncheckedCreateWithoutStoreInput> | TaskCreateWithoutStoreInput[] | TaskUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutStoreInput | TaskCreateOrConnectWithoutStoreInput[]
    createMany?: TaskCreateManyStoreInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserStoreUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<UserStoreCreateWithoutStoreInput, UserStoreUncheckedCreateWithoutStoreInput> | UserStoreCreateWithoutStoreInput[] | UserStoreUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: UserStoreCreateOrConnectWithoutStoreInput | UserStoreCreateOrConnectWithoutStoreInput[]
    createMany?: UserStoreCreateManyStoreInputEnvelope
    connect?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<TaskCreateWithoutStoreInput, TaskUncheckedCreateWithoutStoreInput> | TaskCreateWithoutStoreInput[] | TaskUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutStoreInput | TaskCreateOrConnectWithoutStoreInput[]
    createMany?: TaskCreateManyStoreInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserStoreUpdateManyWithoutStoreNestedInput = {
    create?: XOR<UserStoreCreateWithoutStoreInput, UserStoreUncheckedCreateWithoutStoreInput> | UserStoreCreateWithoutStoreInput[] | UserStoreUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: UserStoreCreateOrConnectWithoutStoreInput | UserStoreCreateOrConnectWithoutStoreInput[]
    upsert?: UserStoreUpsertWithWhereUniqueWithoutStoreInput | UserStoreUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: UserStoreCreateManyStoreInputEnvelope
    set?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
    disconnect?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
    delete?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
    connect?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
    update?: UserStoreUpdateWithWhereUniqueWithoutStoreInput | UserStoreUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: UserStoreUpdateManyWithWhereWithoutStoreInput | UserStoreUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: UserStoreScalarWhereInput | UserStoreScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutStoreNestedInput = {
    create?: XOR<TaskCreateWithoutStoreInput, TaskUncheckedCreateWithoutStoreInput> | TaskCreateWithoutStoreInput[] | TaskUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutStoreInput | TaskCreateOrConnectWithoutStoreInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutStoreInput | TaskUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: TaskCreateManyStoreInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutStoreInput | TaskUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutStoreInput | TaskUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserStoreUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<UserStoreCreateWithoutStoreInput, UserStoreUncheckedCreateWithoutStoreInput> | UserStoreCreateWithoutStoreInput[] | UserStoreUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: UserStoreCreateOrConnectWithoutStoreInput | UserStoreCreateOrConnectWithoutStoreInput[]
    upsert?: UserStoreUpsertWithWhereUniqueWithoutStoreInput | UserStoreUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: UserStoreCreateManyStoreInputEnvelope
    set?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
    disconnect?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
    delete?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
    connect?: UserStoreWhereUniqueInput | UserStoreWhereUniqueInput[]
    update?: UserStoreUpdateWithWhereUniqueWithoutStoreInput | UserStoreUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: UserStoreUpdateManyWithWhereWithoutStoreInput | UserStoreUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: UserStoreScalarWhereInput | UserStoreScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<TaskCreateWithoutStoreInput, TaskUncheckedCreateWithoutStoreInput> | TaskCreateWithoutStoreInput[] | TaskUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutStoreInput | TaskCreateOrConnectWithoutStoreInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutStoreInput | TaskUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: TaskCreateManyStoreInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutStoreInput | TaskUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutStoreInput | TaskUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserStoresInput = {
    create?: XOR<UserCreateWithoutUserStoresInput, UserUncheckedCreateWithoutUserStoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserStoresInput
    connect?: UserWhereUniqueInput
  }

  export type StoreCreateNestedOneWithoutUserStoresInput = {
    create?: XOR<StoreCreateWithoutUserStoresInput, StoreUncheckedCreateWithoutUserStoresInput>
    connectOrCreate?: StoreCreateOrConnectWithoutUserStoresInput
    connect?: StoreWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserStoresNestedInput = {
    create?: XOR<UserCreateWithoutUserStoresInput, UserUncheckedCreateWithoutUserStoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserStoresInput
    upsert?: UserUpsertWithoutUserStoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserStoresInput, UserUpdateWithoutUserStoresInput>, UserUncheckedUpdateWithoutUserStoresInput>
  }

  export type StoreUpdateOneRequiredWithoutUserStoresNestedInput = {
    create?: XOR<StoreCreateWithoutUserStoresInput, StoreUncheckedCreateWithoutUserStoresInput>
    connectOrCreate?: StoreCreateOrConnectWithoutUserStoresInput
    upsert?: StoreUpsertWithoutUserStoresInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutUserStoresInput, StoreUpdateWithoutUserStoresInput>, StoreUncheckedUpdateWithoutUserStoresInput>
  }

  export type StoreCreateNestedOneWithoutTasksInput = {
    create?: XOR<StoreCreateWithoutTasksInput, StoreUncheckedCreateWithoutTasksInput>
    connectOrCreate?: StoreCreateOrConnectWithoutTasksInput
    connect?: StoreWhereUniqueInput
  }

  export type CompletedTaskCreateNestedManyWithoutTaskInput = {
    create?: XOR<CompletedTaskCreateWithoutTaskInput, CompletedTaskUncheckedCreateWithoutTaskInput> | CompletedTaskCreateWithoutTaskInput[] | CompletedTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CompletedTaskCreateOrConnectWithoutTaskInput | CompletedTaskCreateOrConnectWithoutTaskInput[]
    createMany?: CompletedTaskCreateManyTaskInputEnvelope
    connect?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
  }

  export type CompletedTaskUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<CompletedTaskCreateWithoutTaskInput, CompletedTaskUncheckedCreateWithoutTaskInput> | CompletedTaskCreateWithoutTaskInput[] | CompletedTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CompletedTaskCreateOrConnectWithoutTaskInput | CompletedTaskCreateOrConnectWithoutTaskInput[]
    createMany?: CompletedTaskCreateManyTaskInputEnvelope
    connect?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StoreUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<StoreCreateWithoutTasksInput, StoreUncheckedCreateWithoutTasksInput>
    connectOrCreate?: StoreCreateOrConnectWithoutTasksInput
    upsert?: StoreUpsertWithoutTasksInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutTasksInput, StoreUpdateWithoutTasksInput>, StoreUncheckedUpdateWithoutTasksInput>
  }

  export type CompletedTaskUpdateManyWithoutTaskNestedInput = {
    create?: XOR<CompletedTaskCreateWithoutTaskInput, CompletedTaskUncheckedCreateWithoutTaskInput> | CompletedTaskCreateWithoutTaskInput[] | CompletedTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CompletedTaskCreateOrConnectWithoutTaskInput | CompletedTaskCreateOrConnectWithoutTaskInput[]
    upsert?: CompletedTaskUpsertWithWhereUniqueWithoutTaskInput | CompletedTaskUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: CompletedTaskCreateManyTaskInputEnvelope
    set?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
    disconnect?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
    delete?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
    connect?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
    update?: CompletedTaskUpdateWithWhereUniqueWithoutTaskInput | CompletedTaskUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: CompletedTaskUpdateManyWithWhereWithoutTaskInput | CompletedTaskUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: CompletedTaskScalarWhereInput | CompletedTaskScalarWhereInput[]
  }

  export type CompletedTaskUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<CompletedTaskCreateWithoutTaskInput, CompletedTaskUncheckedCreateWithoutTaskInput> | CompletedTaskCreateWithoutTaskInput[] | CompletedTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CompletedTaskCreateOrConnectWithoutTaskInput | CompletedTaskCreateOrConnectWithoutTaskInput[]
    upsert?: CompletedTaskUpsertWithWhereUniqueWithoutTaskInput | CompletedTaskUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: CompletedTaskCreateManyTaskInputEnvelope
    set?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
    disconnect?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
    delete?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
    connect?: CompletedTaskWhereUniqueInput | CompletedTaskWhereUniqueInput[]
    update?: CompletedTaskUpdateWithWhereUniqueWithoutTaskInput | CompletedTaskUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: CompletedTaskUpdateManyWithWhereWithoutTaskInput | CompletedTaskUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: CompletedTaskScalarWhereInput | CompletedTaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCompletedTasksInput = {
    create?: XOR<UserCreateWithoutCompletedTasksInput, UserUncheckedCreateWithoutCompletedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompletedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutCompletedTasksInput = {
    create?: XOR<TaskCreateWithoutCompletedTasksInput, TaskUncheckedCreateWithoutCompletedTasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutCompletedTasksInput
    connect?: TaskWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCompletedTasksNestedInput = {
    create?: XOR<UserCreateWithoutCompletedTasksInput, UserUncheckedCreateWithoutCompletedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompletedTasksInput
    upsert?: UserUpsertWithoutCompletedTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompletedTasksInput, UserUpdateWithoutCompletedTasksInput>, UserUncheckedUpdateWithoutCompletedTasksInput>
  }

  export type TaskUpdateOneRequiredWithoutCompletedTasksNestedInput = {
    create?: XOR<TaskCreateWithoutCompletedTasksInput, TaskUncheckedCreateWithoutCompletedTasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutCompletedTasksInput
    upsert?: TaskUpsertWithoutCompletedTasksInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutCompletedTasksInput, TaskUpdateWithoutCompletedTasksInput>, TaskUncheckedUpdateWithoutCompletedTasksInput>
  }

  export type UserCreateNestedOneWithoutDepositsInput = {
    create?: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepositsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDepositsNestedInput = {
    create?: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepositsInput
    upsert?: UserUpsertWithoutDepositsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDepositsInput, UserUpdateWithoutDepositsInput>, UserUncheckedUpdateWithoutDepositsInput>
  }

  export type UserCreateNestedOneWithoutWithdrawalsInput = {
    create?: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWithdrawalsNestedInput = {
    create?: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalsInput
    upsert?: UserUpsertWithoutWithdrawalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWithdrawalsInput, UserUpdateWithoutWithdrawalsInput>, UserUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type UserCreateNestedOneWithoutReferralRewardsAsReferrerInput = {
    create?: XOR<UserCreateWithoutReferralRewardsAsReferrerInput, UserUncheckedCreateWithoutReferralRewardsAsReferrerInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralRewardsAsReferrerInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReferralRewardsAsReferredInput = {
    create?: XOR<UserCreateWithoutReferralRewardsAsReferredInput, UserUncheckedCreateWithoutReferralRewardsAsReferredInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralRewardsAsReferredInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReferralRewardsAsReferrerNestedInput = {
    create?: XOR<UserCreateWithoutReferralRewardsAsReferrerInput, UserUncheckedCreateWithoutReferralRewardsAsReferrerInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralRewardsAsReferrerInput
    upsert?: UserUpsertWithoutReferralRewardsAsReferrerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralRewardsAsReferrerInput, UserUpdateWithoutReferralRewardsAsReferrerInput>, UserUncheckedUpdateWithoutReferralRewardsAsReferrerInput>
  }

  export type UserUpdateOneRequiredWithoutReferralRewardsAsReferredNestedInput = {
    create?: XOR<UserCreateWithoutReferralRewardsAsReferredInput, UserUncheckedCreateWithoutReferralRewardsAsReferredInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralRewardsAsReferredInput
    upsert?: UserUpsertWithoutReferralRewardsAsReferredInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralRewardsAsReferredInput, UserUpdateWithoutReferralRewardsAsReferredInput>, UserUncheckedUpdateWithoutReferralRewardsAsReferredInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutReferralsInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    deposits?: DepositCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    userStores?: UserStoreCreateNestedManyWithoutUserInput
    completedTasks?: CompletedTaskCreateNestedManyWithoutUserInput
    referralRewardsAsReferrer?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsAsReferred?: ReferralRewardCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutReferralsInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    referredByCode?: string | null
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    userStores?: UserStoreUncheckedCreateNestedManyWithoutUserInput
    completedTasks?: CompletedTaskUncheckedCreateNestedManyWithoutUserInput
    referralRewardsAsReferrer?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsAsReferred?: ReferralRewardUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutReferralsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
  }

  export type UserCreateWithoutReferredByInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: UserCreateNestedManyWithoutReferredByInput
    deposits?: DepositCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    userStores?: UserStoreCreateNestedManyWithoutUserInput
    completedTasks?: CompletedTaskCreateNestedManyWithoutUserInput
    referralRewardsAsReferrer?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsAsReferred?: ReferralRewardCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutReferredByInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    userStores?: UserStoreUncheckedCreateNestedManyWithoutUserInput
    completedTasks?: CompletedTaskUncheckedCreateNestedManyWithoutUserInput
    referralRewardsAsReferrer?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsAsReferred?: ReferralRewardUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutReferredByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput>
  }

  export type UserCreateManyReferredByInputEnvelope = {
    data: UserCreateManyReferredByInput | UserCreateManyReferredByInput[]
  }

  export type DepositCreateWithoutUserInput = {
    id?: string
    amount: number
    transferNumber: string
    proofImageUrl?: string | null
    status?: string
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    transferNumber: string
    proofImageUrl?: string | null
    status?: string
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositCreateOrConnectWithoutUserInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput>
  }

  export type DepositCreateManyUserInputEnvelope = {
    data: DepositCreateManyUserInput | DepositCreateManyUserInput[]
  }

  export type WithdrawalCreateWithoutUserInput = {
    id?: string
    amount: number
    transferToNumber: string
    status?: string
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    transferToNumber: string
    status?: string
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalCreateOrConnectWithoutUserInput = {
    where: WithdrawalWhereUniqueInput
    create: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput>
  }

  export type WithdrawalCreateManyUserInputEnvelope = {
    data: WithdrawalCreateManyUserInput | WithdrawalCreateManyUserInput[]
  }

  export type UserStoreCreateWithoutUserInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutUserStoresInput
  }

  export type UserStoreUncheckedCreateWithoutUserInput = {
    id?: string
    storeId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStoreCreateOrConnectWithoutUserInput = {
    where: UserStoreWhereUniqueInput
    create: XOR<UserStoreCreateWithoutUserInput, UserStoreUncheckedCreateWithoutUserInput>
  }

  export type UserStoreCreateManyUserInputEnvelope = {
    data: UserStoreCreateManyUserInput | UserStoreCreateManyUserInput[]
  }

  export type CompletedTaskCreateWithoutUserInput = {
    id?: string
    status?: string
    earnings: number
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutCompletedTasksInput
  }

  export type CompletedTaskUncheckedCreateWithoutUserInput = {
    id?: string
    taskId: string
    status?: string
    earnings: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletedTaskCreateOrConnectWithoutUserInput = {
    where: CompletedTaskWhereUniqueInput
    create: XOR<CompletedTaskCreateWithoutUserInput, CompletedTaskUncheckedCreateWithoutUserInput>
  }

  export type CompletedTaskCreateManyUserInputEnvelope = {
    data: CompletedTaskCreateManyUserInput | CompletedTaskCreateManyUserInput[]
  }

  export type ReferralRewardCreateWithoutReferrerInput = {
    id?: string
    amount?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    referred: UserCreateNestedOneWithoutReferralRewardsAsReferredInput
  }

  export type ReferralRewardUncheckedCreateWithoutReferrerInput = {
    id?: string
    referredId: string
    amount?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralRewardCreateOrConnectWithoutReferrerInput = {
    where: ReferralRewardWhereUniqueInput
    create: XOR<ReferralRewardCreateWithoutReferrerInput, ReferralRewardUncheckedCreateWithoutReferrerInput>
  }

  export type ReferralRewardCreateManyReferrerInputEnvelope = {
    data: ReferralRewardCreateManyReferrerInput | ReferralRewardCreateManyReferrerInput[]
  }

  export type ReferralRewardCreateWithoutReferredInput = {
    id?: string
    amount?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    referrer: UserCreateNestedOneWithoutReferralRewardsAsReferrerInput
  }

  export type ReferralRewardUncheckedCreateWithoutReferredInput = {
    id?: string
    referrerId: string
    amount?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralRewardCreateOrConnectWithoutReferredInput = {
    where: ReferralRewardWhereUniqueInput
    create: XOR<ReferralRewardCreateWithoutReferredInput, ReferralRewardUncheckedCreateWithoutReferredInput>
  }

  export type ReferralRewardCreateManyReferredInputEnvelope = {
    data: ReferralRewardCreateManyReferredInput | ReferralRewardCreateManyReferredInput[]
  }

  export type UserUpsertWithoutReferralsInput = {
    update: XOR<UserUpdateWithoutReferralsInput, UserUncheckedUpdateWithoutReferralsInput>
    create: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralsInput, UserUncheckedUpdateWithoutReferralsInput>
  }

  export type UserUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    userStores?: UserStoreUpdateManyWithoutUserNestedInput
    completedTasks?: CompletedTaskUpdateManyWithoutUserNestedInput
    referralRewardsAsReferrer?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsAsReferred?: ReferralRewardUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredByCode?: NullableStringFieldUpdateOperationsInput | string | null
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    userStores?: UserStoreUncheckedUpdateManyWithoutUserNestedInput
    completedTasks?: CompletedTaskUncheckedUpdateManyWithoutUserNestedInput
    referralRewardsAsReferrer?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsAsReferred?: ReferralRewardUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutReferredByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutReferredByInput, UserUncheckedUpdateWithoutReferredByInput>
    create: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutReferredByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutReferredByInput, UserUncheckedUpdateWithoutReferredByInput>
  }

  export type UserUpdateManyWithWhereWithoutReferredByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutReferredByInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    balance?: FloatFilter<"User"> | number
    role?: StringFilter<"User"> | string
    referralCode?: StringFilter<"User"> | string
    referredByCode?: StringNullableFilter<"User"> | string | null
    activeStoreId?: IntNullableFilter<"User"> | number | null
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type DepositUpsertWithWhereUniqueWithoutUserInput = {
    where: DepositWhereUniqueInput
    update: XOR<DepositUpdateWithoutUserInput, DepositUncheckedUpdateWithoutUserInput>
    create: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput>
  }

  export type DepositUpdateWithWhereUniqueWithoutUserInput = {
    where: DepositWhereUniqueInput
    data: XOR<DepositUpdateWithoutUserInput, DepositUncheckedUpdateWithoutUserInput>
  }

  export type DepositUpdateManyWithWhereWithoutUserInput = {
    where: DepositScalarWhereInput
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyWithoutUserInput>
  }

  export type DepositScalarWhereInput = {
    AND?: DepositScalarWhereInput | DepositScalarWhereInput[]
    OR?: DepositScalarWhereInput[]
    NOT?: DepositScalarWhereInput | DepositScalarWhereInput[]
    id?: StringFilter<"Deposit"> | string
    userId?: StringFilter<"Deposit"> | string
    amount?: FloatFilter<"Deposit"> | number
    transferNumber?: StringFilter<"Deposit"> | string
    proofImageUrl?: StringNullableFilter<"Deposit"> | string | null
    status?: StringFilter<"Deposit"> | string
    adminNote?: StringNullableFilter<"Deposit"> | string | null
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    updatedAt?: DateTimeFilter<"Deposit"> | Date | string
  }

  export type WithdrawalUpsertWithWhereUniqueWithoutUserInput = {
    where: WithdrawalWhereUniqueInput
    update: XOR<WithdrawalUpdateWithoutUserInput, WithdrawalUncheckedUpdateWithoutUserInput>
    create: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput>
  }

  export type WithdrawalUpdateWithWhereUniqueWithoutUserInput = {
    where: WithdrawalWhereUniqueInput
    data: XOR<WithdrawalUpdateWithoutUserInput, WithdrawalUncheckedUpdateWithoutUserInput>
  }

  export type WithdrawalUpdateManyWithWhereWithoutUserInput = {
    where: WithdrawalScalarWhereInput
    data: XOR<WithdrawalUpdateManyMutationInput, WithdrawalUncheckedUpdateManyWithoutUserInput>
  }

  export type WithdrawalScalarWhereInput = {
    AND?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
    OR?: WithdrawalScalarWhereInput[]
    NOT?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
    id?: StringFilter<"Withdrawal"> | string
    userId?: StringFilter<"Withdrawal"> | string
    amount?: FloatFilter<"Withdrawal"> | number
    transferToNumber?: StringFilter<"Withdrawal"> | string
    status?: StringFilter<"Withdrawal"> | string
    adminNote?: StringNullableFilter<"Withdrawal"> | string | null
    createdAt?: DateTimeFilter<"Withdrawal"> | Date | string
    updatedAt?: DateTimeFilter<"Withdrawal"> | Date | string
  }

  export type UserStoreUpsertWithWhereUniqueWithoutUserInput = {
    where: UserStoreWhereUniqueInput
    update: XOR<UserStoreUpdateWithoutUserInput, UserStoreUncheckedUpdateWithoutUserInput>
    create: XOR<UserStoreCreateWithoutUserInput, UserStoreUncheckedCreateWithoutUserInput>
  }

  export type UserStoreUpdateWithWhereUniqueWithoutUserInput = {
    where: UserStoreWhereUniqueInput
    data: XOR<UserStoreUpdateWithoutUserInput, UserStoreUncheckedUpdateWithoutUserInput>
  }

  export type UserStoreUpdateManyWithWhereWithoutUserInput = {
    where: UserStoreScalarWhereInput
    data: XOR<UserStoreUpdateManyMutationInput, UserStoreUncheckedUpdateManyWithoutUserInput>
  }

  export type UserStoreScalarWhereInput = {
    AND?: UserStoreScalarWhereInput | UserStoreScalarWhereInput[]
    OR?: UserStoreScalarWhereInput[]
    NOT?: UserStoreScalarWhereInput | UserStoreScalarWhereInput[]
    id?: StringFilter<"UserStore"> | string
    userId?: StringFilter<"UserStore"> | string
    storeId?: IntFilter<"UserStore"> | number
    isActive?: BoolFilter<"UserStore"> | boolean
    createdAt?: DateTimeFilter<"UserStore"> | Date | string
    updatedAt?: DateTimeFilter<"UserStore"> | Date | string
  }

  export type CompletedTaskUpsertWithWhereUniqueWithoutUserInput = {
    where: CompletedTaskWhereUniqueInput
    update: XOR<CompletedTaskUpdateWithoutUserInput, CompletedTaskUncheckedUpdateWithoutUserInput>
    create: XOR<CompletedTaskCreateWithoutUserInput, CompletedTaskUncheckedCreateWithoutUserInput>
  }

  export type CompletedTaskUpdateWithWhereUniqueWithoutUserInput = {
    where: CompletedTaskWhereUniqueInput
    data: XOR<CompletedTaskUpdateWithoutUserInput, CompletedTaskUncheckedUpdateWithoutUserInput>
  }

  export type CompletedTaskUpdateManyWithWhereWithoutUserInput = {
    where: CompletedTaskScalarWhereInput
    data: XOR<CompletedTaskUpdateManyMutationInput, CompletedTaskUncheckedUpdateManyWithoutUserInput>
  }

  export type CompletedTaskScalarWhereInput = {
    AND?: CompletedTaskScalarWhereInput | CompletedTaskScalarWhereInput[]
    OR?: CompletedTaskScalarWhereInput[]
    NOT?: CompletedTaskScalarWhereInput | CompletedTaskScalarWhereInput[]
    id?: StringFilter<"CompletedTask"> | string
    userId?: StringFilter<"CompletedTask"> | string
    taskId?: StringFilter<"CompletedTask"> | string
    status?: StringFilter<"CompletedTask"> | string
    earnings?: FloatFilter<"CompletedTask"> | number
    createdAt?: DateTimeFilter<"CompletedTask"> | Date | string
    updatedAt?: DateTimeFilter<"CompletedTask"> | Date | string
  }

  export type ReferralRewardUpsertWithWhereUniqueWithoutReferrerInput = {
    where: ReferralRewardWhereUniqueInput
    update: XOR<ReferralRewardUpdateWithoutReferrerInput, ReferralRewardUncheckedUpdateWithoutReferrerInput>
    create: XOR<ReferralRewardCreateWithoutReferrerInput, ReferralRewardUncheckedCreateWithoutReferrerInput>
  }

  export type ReferralRewardUpdateWithWhereUniqueWithoutReferrerInput = {
    where: ReferralRewardWhereUniqueInput
    data: XOR<ReferralRewardUpdateWithoutReferrerInput, ReferralRewardUncheckedUpdateWithoutReferrerInput>
  }

  export type ReferralRewardUpdateManyWithWhereWithoutReferrerInput = {
    where: ReferralRewardScalarWhereInput
    data: XOR<ReferralRewardUpdateManyMutationInput, ReferralRewardUncheckedUpdateManyWithoutReferrerInput>
  }

  export type ReferralRewardScalarWhereInput = {
    AND?: ReferralRewardScalarWhereInput | ReferralRewardScalarWhereInput[]
    OR?: ReferralRewardScalarWhereInput[]
    NOT?: ReferralRewardScalarWhereInput | ReferralRewardScalarWhereInput[]
    id?: StringFilter<"ReferralReward"> | string
    referrerId?: StringFilter<"ReferralReward"> | string
    referredId?: StringFilter<"ReferralReward"> | string
    amount?: FloatFilter<"ReferralReward"> | number
    status?: StringFilter<"ReferralReward"> | string
    createdAt?: DateTimeFilter<"ReferralReward"> | Date | string
    updatedAt?: DateTimeFilter<"ReferralReward"> | Date | string
  }

  export type ReferralRewardUpsertWithWhereUniqueWithoutReferredInput = {
    where: ReferralRewardWhereUniqueInput
    update: XOR<ReferralRewardUpdateWithoutReferredInput, ReferralRewardUncheckedUpdateWithoutReferredInput>
    create: XOR<ReferralRewardCreateWithoutReferredInput, ReferralRewardUncheckedCreateWithoutReferredInput>
  }

  export type ReferralRewardUpdateWithWhereUniqueWithoutReferredInput = {
    where: ReferralRewardWhereUniqueInput
    data: XOR<ReferralRewardUpdateWithoutReferredInput, ReferralRewardUncheckedUpdateWithoutReferredInput>
  }

  export type ReferralRewardUpdateManyWithWhereWithoutReferredInput = {
    where: ReferralRewardScalarWhereInput
    data: XOR<ReferralRewardUpdateManyMutationInput, ReferralRewardUncheckedUpdateManyWithoutReferredInput>
  }

  export type UserStoreCreateWithoutStoreInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserStoresInput
  }

  export type UserStoreUncheckedCreateWithoutStoreInput = {
    id?: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStoreCreateOrConnectWithoutStoreInput = {
    where: UserStoreWhereUniqueInput
    create: XOR<UserStoreCreateWithoutStoreInput, UserStoreUncheckedCreateWithoutStoreInput>
  }

  export type UserStoreCreateManyStoreInputEnvelope = {
    data: UserStoreCreateManyStoreInput | UserStoreCreateManyStoreInput[]
  }

  export type TaskCreateWithoutStoreInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    productPrice?: number | null
    profitMargin?: number | null
    sellingPrice?: number | null
    earnings: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    completedTasks?: CompletedTaskCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutStoreInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    productPrice?: number | null
    profitMargin?: number | null
    sellingPrice?: number | null
    earnings: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    completedTasks?: CompletedTaskUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutStoreInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutStoreInput, TaskUncheckedCreateWithoutStoreInput>
  }

  export type TaskCreateManyStoreInputEnvelope = {
    data: TaskCreateManyStoreInput | TaskCreateManyStoreInput[]
  }

  export type UserStoreUpsertWithWhereUniqueWithoutStoreInput = {
    where: UserStoreWhereUniqueInput
    update: XOR<UserStoreUpdateWithoutStoreInput, UserStoreUncheckedUpdateWithoutStoreInput>
    create: XOR<UserStoreCreateWithoutStoreInput, UserStoreUncheckedCreateWithoutStoreInput>
  }

  export type UserStoreUpdateWithWhereUniqueWithoutStoreInput = {
    where: UserStoreWhereUniqueInput
    data: XOR<UserStoreUpdateWithoutStoreInput, UserStoreUncheckedUpdateWithoutStoreInput>
  }

  export type UserStoreUpdateManyWithWhereWithoutStoreInput = {
    where: UserStoreScalarWhereInput
    data: XOR<UserStoreUpdateManyMutationInput, UserStoreUncheckedUpdateManyWithoutStoreInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutStoreInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutStoreInput, TaskUncheckedUpdateWithoutStoreInput>
    create: XOR<TaskCreateWithoutStoreInput, TaskUncheckedCreateWithoutStoreInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutStoreInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutStoreInput, TaskUncheckedUpdateWithoutStoreInput>
  }

  export type TaskUpdateManyWithWhereWithoutStoreInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutStoreInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    storeId?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    imageUrl?: StringNullableFilter<"Task"> | string | null
    productPrice?: FloatNullableFilter<"Task"> | number | null
    profitMargin?: FloatNullableFilter<"Task"> | number | null
    sellingPrice?: FloatNullableFilter<"Task"> | number | null
    earnings?: FloatFilter<"Task"> | number
    isActive?: BoolFilter<"Task"> | boolean
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type UserCreateWithoutUserStoresInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    deposits?: DepositCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    completedTasks?: CompletedTaskCreateNestedManyWithoutUserInput
    referralRewardsAsReferrer?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsAsReferred?: ReferralRewardCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutUserStoresInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    referredByCode?: string | null
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    completedTasks?: CompletedTaskUncheckedCreateNestedManyWithoutUserInput
    referralRewardsAsReferrer?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsAsReferred?: ReferralRewardUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutUserStoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserStoresInput, UserUncheckedCreateWithoutUserStoresInput>
  }

  export type StoreCreateWithoutUserStoresInput = {
    name: string
    price: number
    profitPerTask: number
    tasksAvailable: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutUserStoresInput = {
    id?: number
    name: string
    price: number
    profitPerTask: number
    tasksAvailable: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutUserStoresInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutUserStoresInput, StoreUncheckedCreateWithoutUserStoresInput>
  }

  export type UserUpsertWithoutUserStoresInput = {
    update: XOR<UserUpdateWithoutUserStoresInput, UserUncheckedUpdateWithoutUserStoresInput>
    create: XOR<UserCreateWithoutUserStoresInput, UserUncheckedCreateWithoutUserStoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserStoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserStoresInput, UserUncheckedUpdateWithoutUserStoresInput>
  }

  export type UserUpdateWithoutUserStoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    completedTasks?: CompletedTaskUpdateManyWithoutUserNestedInput
    referralRewardsAsReferrer?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsAsReferred?: ReferralRewardUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutUserStoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredByCode?: NullableStringFieldUpdateOperationsInput | string | null
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    completedTasks?: CompletedTaskUncheckedUpdateManyWithoutUserNestedInput
    referralRewardsAsReferrer?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsAsReferred?: ReferralRewardUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type StoreUpsertWithoutUserStoresInput = {
    update: XOR<StoreUpdateWithoutUserStoresInput, StoreUncheckedUpdateWithoutUserStoresInput>
    create: XOR<StoreCreateWithoutUserStoresInput, StoreUncheckedCreateWithoutUserStoresInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutUserStoresInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutUserStoresInput, StoreUncheckedUpdateWithoutUserStoresInput>
  }

  export type StoreUpdateWithoutUserStoresInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    profitPerTask?: FloatFieldUpdateOperationsInput | number
    tasksAvailable?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutUserStoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    profitPerTask?: FloatFieldUpdateOperationsInput | number
    tasksAvailable?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateWithoutTasksInput = {
    name: string
    price: number
    profitPerTask: number
    tasksAvailable: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userStores?: UserStoreCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    price: number
    profitPerTask: number
    tasksAvailable: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userStores?: UserStoreUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutTasksInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutTasksInput, StoreUncheckedCreateWithoutTasksInput>
  }

  export type CompletedTaskCreateWithoutTaskInput = {
    id?: string
    status?: string
    earnings: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCompletedTasksInput
  }

  export type CompletedTaskUncheckedCreateWithoutTaskInput = {
    id?: string
    userId: string
    status?: string
    earnings: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletedTaskCreateOrConnectWithoutTaskInput = {
    where: CompletedTaskWhereUniqueInput
    create: XOR<CompletedTaskCreateWithoutTaskInput, CompletedTaskUncheckedCreateWithoutTaskInput>
  }

  export type CompletedTaskCreateManyTaskInputEnvelope = {
    data: CompletedTaskCreateManyTaskInput | CompletedTaskCreateManyTaskInput[]
  }

  export type StoreUpsertWithoutTasksInput = {
    update: XOR<StoreUpdateWithoutTasksInput, StoreUncheckedUpdateWithoutTasksInput>
    create: XOR<StoreCreateWithoutTasksInput, StoreUncheckedCreateWithoutTasksInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutTasksInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutTasksInput, StoreUncheckedUpdateWithoutTasksInput>
  }

  export type StoreUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    profitPerTask?: FloatFieldUpdateOperationsInput | number
    tasksAvailable?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userStores?: UserStoreUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    profitPerTask?: FloatFieldUpdateOperationsInput | number
    tasksAvailable?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userStores?: UserStoreUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type CompletedTaskUpsertWithWhereUniqueWithoutTaskInput = {
    where: CompletedTaskWhereUniqueInput
    update: XOR<CompletedTaskUpdateWithoutTaskInput, CompletedTaskUncheckedUpdateWithoutTaskInput>
    create: XOR<CompletedTaskCreateWithoutTaskInput, CompletedTaskUncheckedCreateWithoutTaskInput>
  }

  export type CompletedTaskUpdateWithWhereUniqueWithoutTaskInput = {
    where: CompletedTaskWhereUniqueInput
    data: XOR<CompletedTaskUpdateWithoutTaskInput, CompletedTaskUncheckedUpdateWithoutTaskInput>
  }

  export type CompletedTaskUpdateManyWithWhereWithoutTaskInput = {
    where: CompletedTaskScalarWhereInput
    data: XOR<CompletedTaskUpdateManyMutationInput, CompletedTaskUncheckedUpdateManyWithoutTaskInput>
  }

  export type UserCreateWithoutCompletedTasksInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    deposits?: DepositCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    userStores?: UserStoreCreateNestedManyWithoutUserInput
    referralRewardsAsReferrer?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsAsReferred?: ReferralRewardCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutCompletedTasksInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    referredByCode?: string | null
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    userStores?: UserStoreUncheckedCreateNestedManyWithoutUserInput
    referralRewardsAsReferrer?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsAsReferred?: ReferralRewardUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutCompletedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompletedTasksInput, UserUncheckedCreateWithoutCompletedTasksInput>
  }

  export type TaskCreateWithoutCompletedTasksInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    productPrice?: number | null
    profitMargin?: number | null
    sellingPrice?: number | null
    earnings: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutCompletedTasksInput = {
    id?: string
    storeId: number
    title: string
    description: string
    imageUrl?: string | null
    productPrice?: number | null
    profitMargin?: number | null
    sellingPrice?: number | null
    earnings: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutCompletedTasksInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCompletedTasksInput, TaskUncheckedCreateWithoutCompletedTasksInput>
  }

  export type UserUpsertWithoutCompletedTasksInput = {
    update: XOR<UserUpdateWithoutCompletedTasksInput, UserUncheckedUpdateWithoutCompletedTasksInput>
    create: XOR<UserCreateWithoutCompletedTasksInput, UserUncheckedCreateWithoutCompletedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompletedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompletedTasksInput, UserUncheckedUpdateWithoutCompletedTasksInput>
  }

  export type UserUpdateWithoutCompletedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    userStores?: UserStoreUpdateManyWithoutUserNestedInput
    referralRewardsAsReferrer?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsAsReferred?: ReferralRewardUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutCompletedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredByCode?: NullableStringFieldUpdateOperationsInput | string | null
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    userStores?: UserStoreUncheckedUpdateManyWithoutUserNestedInput
    referralRewardsAsReferrer?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsAsReferred?: ReferralRewardUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type TaskUpsertWithoutCompletedTasksInput = {
    update: XOR<TaskUpdateWithoutCompletedTasksInput, TaskUncheckedUpdateWithoutCompletedTasksInput>
    create: XOR<TaskCreateWithoutCompletedTasksInput, TaskUncheckedCreateWithoutCompletedTasksInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutCompletedTasksInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutCompletedTasksInput, TaskUncheckedUpdateWithoutCompletedTasksInput>
  }

  export type TaskUpdateWithoutCompletedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profitMargin?: NullableFloatFieldUpdateOperationsInput | number | null
    sellingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    earnings?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutCompletedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profitMargin?: NullableFloatFieldUpdateOperationsInput | number | null
    sellingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    earnings?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutDepositsInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    userStores?: UserStoreCreateNestedManyWithoutUserInput
    completedTasks?: CompletedTaskCreateNestedManyWithoutUserInput
    referralRewardsAsReferrer?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsAsReferred?: ReferralRewardCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutDepositsInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    referredByCode?: string | null
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    userStores?: UserStoreUncheckedCreateNestedManyWithoutUserInput
    completedTasks?: CompletedTaskUncheckedCreateNestedManyWithoutUserInput
    referralRewardsAsReferrer?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsAsReferred?: ReferralRewardUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutDepositsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
  }

  export type UserUpsertWithoutDepositsInput = {
    update: XOR<UserUpdateWithoutDepositsInput, UserUncheckedUpdateWithoutDepositsInput>
    create: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDepositsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDepositsInput, UserUncheckedUpdateWithoutDepositsInput>
  }

  export type UserUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    userStores?: UserStoreUpdateManyWithoutUserNestedInput
    completedTasks?: CompletedTaskUpdateManyWithoutUserNestedInput
    referralRewardsAsReferrer?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsAsReferred?: ReferralRewardUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutDepositsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredByCode?: NullableStringFieldUpdateOperationsInput | string | null
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    userStores?: UserStoreUncheckedUpdateManyWithoutUserNestedInput
    completedTasks?: CompletedTaskUncheckedUpdateManyWithoutUserNestedInput
    referralRewardsAsReferrer?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsAsReferred?: ReferralRewardUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type UserCreateWithoutWithdrawalsInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    deposits?: DepositCreateNestedManyWithoutUserInput
    userStores?: UserStoreCreateNestedManyWithoutUserInput
    completedTasks?: CompletedTaskCreateNestedManyWithoutUserInput
    referralRewardsAsReferrer?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsAsReferred?: ReferralRewardCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutWithdrawalsInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    referredByCode?: string | null
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    userStores?: UserStoreUncheckedCreateNestedManyWithoutUserInput
    completedTasks?: CompletedTaskUncheckedCreateNestedManyWithoutUserInput
    referralRewardsAsReferrer?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsAsReferred?: ReferralRewardUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutWithdrawalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
  }

  export type UserUpsertWithoutWithdrawalsInput = {
    update: XOR<UserUpdateWithoutWithdrawalsInput, UserUncheckedUpdateWithoutWithdrawalsInput>
    create: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWithdrawalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWithdrawalsInput, UserUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type UserUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
    userStores?: UserStoreUpdateManyWithoutUserNestedInput
    completedTasks?: CompletedTaskUpdateManyWithoutUserNestedInput
    referralRewardsAsReferrer?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsAsReferred?: ReferralRewardUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredByCode?: NullableStringFieldUpdateOperationsInput | string | null
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    userStores?: UserStoreUncheckedUpdateManyWithoutUserNestedInput
    completedTasks?: CompletedTaskUncheckedUpdateManyWithoutUserNestedInput
    referralRewardsAsReferrer?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsAsReferred?: ReferralRewardUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type UserCreateWithoutReferralRewardsAsReferrerInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    deposits?: DepositCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    userStores?: UserStoreCreateNestedManyWithoutUserInput
    completedTasks?: CompletedTaskCreateNestedManyWithoutUserInput
    referralRewardsAsReferred?: ReferralRewardCreateNestedManyWithoutReferredInput
  }

  export type UserUncheckedCreateWithoutReferralRewardsAsReferrerInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    referredByCode?: string | null
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    userStores?: UserStoreUncheckedCreateNestedManyWithoutUserInput
    completedTasks?: CompletedTaskUncheckedCreateNestedManyWithoutUserInput
    referralRewardsAsReferred?: ReferralRewardUncheckedCreateNestedManyWithoutReferredInput
  }

  export type UserCreateOrConnectWithoutReferralRewardsAsReferrerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralRewardsAsReferrerInput, UserUncheckedCreateWithoutReferralRewardsAsReferrerInput>
  }

  export type UserCreateWithoutReferralRewardsAsReferredInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    deposits?: DepositCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    userStores?: UserStoreCreateNestedManyWithoutUserInput
    completedTasks?: CompletedTaskCreateNestedManyWithoutUserInput
    referralRewardsAsReferrer?: ReferralRewardCreateNestedManyWithoutReferrerInput
  }

  export type UserUncheckedCreateWithoutReferralRewardsAsReferredInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    referredByCode?: string | null
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    userStores?: UserStoreUncheckedCreateNestedManyWithoutUserInput
    completedTasks?: CompletedTaskUncheckedCreateNestedManyWithoutUserInput
    referralRewardsAsReferrer?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
  }

  export type UserCreateOrConnectWithoutReferralRewardsAsReferredInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralRewardsAsReferredInput, UserUncheckedCreateWithoutReferralRewardsAsReferredInput>
  }

  export type UserUpsertWithoutReferralRewardsAsReferrerInput = {
    update: XOR<UserUpdateWithoutReferralRewardsAsReferrerInput, UserUncheckedUpdateWithoutReferralRewardsAsReferrerInput>
    create: XOR<UserCreateWithoutReferralRewardsAsReferrerInput, UserUncheckedCreateWithoutReferralRewardsAsReferrerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralRewardsAsReferrerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralRewardsAsReferrerInput, UserUncheckedUpdateWithoutReferralRewardsAsReferrerInput>
  }

  export type UserUpdateWithoutReferralRewardsAsReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    userStores?: UserStoreUpdateManyWithoutUserNestedInput
    completedTasks?: CompletedTaskUpdateManyWithoutUserNestedInput
    referralRewardsAsReferred?: ReferralRewardUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralRewardsAsReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredByCode?: NullableStringFieldUpdateOperationsInput | string | null
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    userStores?: UserStoreUncheckedUpdateManyWithoutUserNestedInput
    completedTasks?: CompletedTaskUncheckedUpdateManyWithoutUserNestedInput
    referralRewardsAsReferred?: ReferralRewardUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type UserUpsertWithoutReferralRewardsAsReferredInput = {
    update: XOR<UserUpdateWithoutReferralRewardsAsReferredInput, UserUncheckedUpdateWithoutReferralRewardsAsReferredInput>
    create: XOR<UserCreateWithoutReferralRewardsAsReferredInput, UserUncheckedCreateWithoutReferralRewardsAsReferredInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralRewardsAsReferredInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralRewardsAsReferredInput, UserUncheckedUpdateWithoutReferralRewardsAsReferredInput>
  }

  export type UserUpdateWithoutReferralRewardsAsReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    userStores?: UserStoreUpdateManyWithoutUserNestedInput
    completedTasks?: CompletedTaskUpdateManyWithoutUserNestedInput
    referralRewardsAsReferrer?: ReferralRewardUpdateManyWithoutReferrerNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralRewardsAsReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredByCode?: NullableStringFieldUpdateOperationsInput | string | null
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    userStores?: UserStoreUncheckedUpdateManyWithoutUserNestedInput
    completedTasks?: CompletedTaskUncheckedUpdateManyWithoutUserNestedInput
    referralRewardsAsReferrer?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
  }

  export type UserCreateManyReferredByInput = {
    id?: string
    phoneNumber: string
    passwordHash: string
    name?: string | null
    balance?: number
    role?: string
    referralCode: string
    activeStoreId?: number | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositCreateManyUserInput = {
    id?: string
    amount: number
    transferNumber: string
    proofImageUrl?: string | null
    status?: string
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalCreateManyUserInput = {
    id?: string
    amount: number
    transferToNumber: string
    status?: string
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStoreCreateManyUserInput = {
    id?: string
    storeId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletedTaskCreateManyUserInput = {
    id?: string
    taskId: string
    status?: string
    earnings: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralRewardCreateManyReferrerInput = {
    id?: string
    referredId: string
    amount?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralRewardCreateManyReferredInput = {
    id?: string
    referrerId: string
    amount?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    userStores?: UserStoreUpdateManyWithoutUserNestedInput
    completedTasks?: CompletedTaskUpdateManyWithoutUserNestedInput
    referralRewardsAsReferrer?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsAsReferred?: ReferralRewardUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    userStores?: UserStoreUncheckedUpdateManyWithoutUserNestedInput
    completedTasks?: CompletedTaskUncheckedUpdateManyWithoutUserNestedInput
    referralRewardsAsReferrer?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsAsReferred?: ReferralRewardUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type UserUncheckedUpdateManyWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    activeStoreId?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transferNumber?: StringFieldUpdateOperationsInput | string
    proofImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transferNumber?: StringFieldUpdateOperationsInput | string
    proofImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transferNumber?: StringFieldUpdateOperationsInput | string
    proofImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transferToNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transferToNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transferToNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStoreUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutUserStoresNestedInput
  }

  export type UserStoreUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStoreUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedTaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutCompletedTasksNestedInput
  }

  export type CompletedTaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedTaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralRewardUpdateWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referred?: UserUpdateOneRequiredWithoutReferralRewardsAsReferredNestedInput
  }

  export type ReferralRewardUncheckedUpdateWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralRewardUncheckedUpdateManyWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralRewardUpdateWithoutReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: UserUpdateOneRequiredWithoutReferralRewardsAsReferrerNestedInput
  }

  export type ReferralRewardUncheckedUpdateWithoutReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralRewardUncheckedUpdateManyWithoutReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStoreCreateManyStoreInput = {
    id?: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateManyStoreInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    productPrice?: number | null
    profitMargin?: number | null
    sellingPrice?: number | null
    earnings: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStoreUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserStoresNestedInput
  }

  export type UserStoreUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStoreUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profitMargin?: NullableFloatFieldUpdateOperationsInput | number | null
    sellingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    earnings?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedTasks?: CompletedTaskUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profitMargin?: NullableFloatFieldUpdateOperationsInput | number | null
    sellingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    earnings?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedTasks?: CompletedTaskUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    productPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profitMargin?: NullableFloatFieldUpdateOperationsInput | number | null
    sellingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    earnings?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedTaskCreateManyTaskInput = {
    id?: string
    userId: string
    status?: string
    earnings: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletedTaskUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompletedTasksNestedInput
  }

  export type CompletedTaskUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedTaskUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    earnings?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreCountOutputTypeDefaultArgs instead
     */
    export type StoreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskCountOutputTypeDefaultArgs instead
     */
    export type TaskCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreDefaultArgs instead
     */
    export type StoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserStoreDefaultArgs instead
     */
    export type UserStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserStoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompletedTaskDefaultArgs instead
     */
    export type CompletedTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompletedTaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepositDefaultArgs instead
     */
    export type DepositArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepositDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WithdrawalDefaultArgs instead
     */
    export type WithdrawalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WithdrawalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReferralRewardDefaultArgs instead
     */
    export type ReferralRewardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReferralRewardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppSettingsDefaultArgs instead
     */
    export type AppSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppSettingsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}