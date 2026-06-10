
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model Tree
 * 
 */
export type Tree = $Result.DefaultSelection<Prisma.$TreePayload>
/**
 * Model TreeMember
 * 
 */
export type TreeMember = $Result.DefaultSelection<Prisma.$TreeMemberPayload>
/**
 * Model Node
 * 
 */
export type Node = $Result.DefaultSelection<Prisma.$NodePayload>
/**
 * Model CustomField
 * 
 */
export type CustomField = $Result.DefaultSelection<Prisma.$CustomFieldPayload>
/**
 * Model CustomFieldValue
 * 
 */
export type CustomFieldValue = $Result.DefaultSelection<Prisma.$CustomFieldValuePayload>
/**
 * Model CustomKinshipTerm
 * 
 */
export type CustomKinshipTerm = $Result.DefaultSelection<Prisma.$CustomKinshipTermPayload>
/**
 * Model Edge
 * 
 */
export type Edge = $Result.DefaultSelection<Prisma.$EdgePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tree`: Exposes CRUD operations for the **Tree** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trees
    * const trees = await prisma.tree.findMany()
    * ```
    */
  get tree(): Prisma.TreeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treeMember`: Exposes CRUD operations for the **TreeMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TreeMembers
    * const treeMembers = await prisma.treeMember.findMany()
    * ```
    */
  get treeMember(): Prisma.TreeMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.node`: Exposes CRUD operations for the **Node** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nodes
    * const nodes = await prisma.node.findMany()
    * ```
    */
  get node(): Prisma.NodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customField`: Exposes CRUD operations for the **CustomField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomFields
    * const customFields = await prisma.customField.findMany()
    * ```
    */
  get customField(): Prisma.CustomFieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customFieldValue`: Exposes CRUD operations for the **CustomFieldValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomFieldValues
    * const customFieldValues = await prisma.customFieldValue.findMany()
    * ```
    */
  get customFieldValue(): Prisma.CustomFieldValueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customKinshipTerm`: Exposes CRUD operations for the **CustomKinshipTerm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomKinshipTerms
    * const customKinshipTerms = await prisma.customKinshipTerm.findMany()
    * ```
    */
  get customKinshipTerm(): Prisma.CustomKinshipTermDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.edge`: Exposes CRUD operations for the **Edge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Edges
    * const edges = await prisma.edge.findMany()
    * ```
    */
  get edge(): Prisma.EdgeDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Tree: 'Tree',
    TreeMember: 'TreeMember',
    Node: 'Node',
    CustomField: 'CustomField',
    CustomFieldValue: 'CustomFieldValue',
    CustomKinshipTerm: 'CustomKinshipTerm',
    Edge: 'Edge'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "account" | "verification" | "tree" | "treeMember" | "node" | "customField" | "customFieldValue" | "customKinshipTerm" | "edge"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      Tree: {
        payload: Prisma.$TreePayload<ExtArgs>
        fields: Prisma.TreeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>
          }
          findFirst: {
            args: Prisma.TreeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>
          }
          findMany: {
            args: Prisma.TreeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>[]
          }
          create: {
            args: Prisma.TreeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>
          }
          createMany: {
            args: Prisma.TreeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>[]
          }
          delete: {
            args: Prisma.TreeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>
          }
          update: {
            args: Prisma.TreeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>
          }
          deleteMany: {
            args: Prisma.TreeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TreeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>[]
          }
          upsert: {
            args: Prisma.TreeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>
          }
          aggregate: {
            args: Prisma.TreeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTree>
          }
          groupBy: {
            args: Prisma.TreeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreeCountArgs<ExtArgs>
            result: $Utils.Optional<TreeCountAggregateOutputType> | number
          }
        }
      }
      TreeMember: {
        payload: Prisma.$TreeMemberPayload<ExtArgs>
        fields: Prisma.TreeMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreeMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreeMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeMemberPayload>
          }
          findFirst: {
            args: Prisma.TreeMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreeMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeMemberPayload>
          }
          findMany: {
            args: Prisma.TreeMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeMemberPayload>[]
          }
          create: {
            args: Prisma.TreeMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeMemberPayload>
          }
          createMany: {
            args: Prisma.TreeMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreeMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeMemberPayload>[]
          }
          delete: {
            args: Prisma.TreeMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeMemberPayload>
          }
          update: {
            args: Prisma.TreeMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeMemberPayload>
          }
          deleteMany: {
            args: Prisma.TreeMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreeMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TreeMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeMemberPayload>[]
          }
          upsert: {
            args: Prisma.TreeMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeMemberPayload>
          }
          aggregate: {
            args: Prisma.TreeMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreeMember>
          }
          groupBy: {
            args: Prisma.TreeMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreeMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreeMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TreeMemberCountAggregateOutputType> | number
          }
        }
      }
      Node: {
        payload: Prisma.$NodePayload<ExtArgs>
        fields: Prisma.NodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          findFirst: {
            args: Prisma.NodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          findMany: {
            args: Prisma.NodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>[]
          }
          create: {
            args: Prisma.NodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          createMany: {
            args: Prisma.NodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>[]
          }
          delete: {
            args: Prisma.NodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          update: {
            args: Prisma.NodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          deleteMany: {
            args: Prisma.NodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>[]
          }
          upsert: {
            args: Prisma.NodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          aggregate: {
            args: Prisma.NodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNode>
          }
          groupBy: {
            args: Prisma.NodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NodeCountArgs<ExtArgs>
            result: $Utils.Optional<NodeCountAggregateOutputType> | number
          }
        }
      }
      CustomField: {
        payload: Prisma.$CustomFieldPayload<ExtArgs>
        fields: Prisma.CustomFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>
          }
          findFirst: {
            args: Prisma.CustomFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>
          }
          findMany: {
            args: Prisma.CustomFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>[]
          }
          create: {
            args: Prisma.CustomFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>
          }
          createMany: {
            args: Prisma.CustomFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>[]
          }
          delete: {
            args: Prisma.CustomFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>
          }
          update: {
            args: Prisma.CustomFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>
          }
          deleteMany: {
            args: Prisma.CustomFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomFieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>[]
          }
          upsert: {
            args: Prisma.CustomFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldPayload>
          }
          aggregate: {
            args: Prisma.CustomFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomField>
          }
          groupBy: {
            args: Prisma.CustomFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomFieldCountArgs<ExtArgs>
            result: $Utils.Optional<CustomFieldCountAggregateOutputType> | number
          }
        }
      }
      CustomFieldValue: {
        payload: Prisma.$CustomFieldValuePayload<ExtArgs>
        fields: Prisma.CustomFieldValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomFieldValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomFieldValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload>
          }
          findFirst: {
            args: Prisma.CustomFieldValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomFieldValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload>
          }
          findMany: {
            args: Prisma.CustomFieldValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload>[]
          }
          create: {
            args: Prisma.CustomFieldValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload>
          }
          createMany: {
            args: Prisma.CustomFieldValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomFieldValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload>[]
          }
          delete: {
            args: Prisma.CustomFieldValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload>
          }
          update: {
            args: Prisma.CustomFieldValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload>
          }
          deleteMany: {
            args: Prisma.CustomFieldValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomFieldValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomFieldValueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload>[]
          }
          upsert: {
            args: Prisma.CustomFieldValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomFieldValuePayload>
          }
          aggregate: {
            args: Prisma.CustomFieldValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomFieldValue>
          }
          groupBy: {
            args: Prisma.CustomFieldValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomFieldValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomFieldValueCountArgs<ExtArgs>
            result: $Utils.Optional<CustomFieldValueCountAggregateOutputType> | number
          }
        }
      }
      CustomKinshipTerm: {
        payload: Prisma.$CustomKinshipTermPayload<ExtArgs>
        fields: Prisma.CustomKinshipTermFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomKinshipTermFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomKinshipTermPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomKinshipTermFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomKinshipTermPayload>
          }
          findFirst: {
            args: Prisma.CustomKinshipTermFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomKinshipTermPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomKinshipTermFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomKinshipTermPayload>
          }
          findMany: {
            args: Prisma.CustomKinshipTermFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomKinshipTermPayload>[]
          }
          create: {
            args: Prisma.CustomKinshipTermCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomKinshipTermPayload>
          }
          createMany: {
            args: Prisma.CustomKinshipTermCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomKinshipTermCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomKinshipTermPayload>[]
          }
          delete: {
            args: Prisma.CustomKinshipTermDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomKinshipTermPayload>
          }
          update: {
            args: Prisma.CustomKinshipTermUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomKinshipTermPayload>
          }
          deleteMany: {
            args: Prisma.CustomKinshipTermDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomKinshipTermUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomKinshipTermUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomKinshipTermPayload>[]
          }
          upsert: {
            args: Prisma.CustomKinshipTermUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomKinshipTermPayload>
          }
          aggregate: {
            args: Prisma.CustomKinshipTermAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomKinshipTerm>
          }
          groupBy: {
            args: Prisma.CustomKinshipTermGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomKinshipTermGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomKinshipTermCountArgs<ExtArgs>
            result: $Utils.Optional<CustomKinshipTermCountAggregateOutputType> | number
          }
        }
      }
      Edge: {
        payload: Prisma.$EdgePayload<ExtArgs>
        fields: Prisma.EdgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EdgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EdgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload>
          }
          findFirst: {
            args: Prisma.EdgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EdgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload>
          }
          findMany: {
            args: Prisma.EdgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload>[]
          }
          create: {
            args: Prisma.EdgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload>
          }
          createMany: {
            args: Prisma.EdgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EdgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload>[]
          }
          delete: {
            args: Prisma.EdgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload>
          }
          update: {
            args: Prisma.EdgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload>
          }
          deleteMany: {
            args: Prisma.EdgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EdgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EdgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload>[]
          }
          upsert: {
            args: Prisma.EdgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload>
          }
          aggregate: {
            args: Prisma.EdgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEdge>
          }
          groupBy: {
            args: Prisma.EdgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EdgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EdgeCountArgs<ExtArgs>
            result: $Utils.Optional<EdgeCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    tree?: TreeOmit
    treeMember?: TreeMemberOmit
    node?: NodeOmit
    customField?: CustomFieldOmit
    customFieldValue?: CustomFieldValueOmit
    customKinshipTerm?: CustomKinshipTermOmit
    edge?: EdgeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
    sessions: number
    accounts: number
    trees: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    trees?: boolean | UserCountOutputTypeCountTreesArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTreesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreeMemberWhereInput
  }


  /**
   * Count Type TreeCountOutputType
   */

  export type TreeCountOutputType = {
    members: number
    nodes: number
    fields: number
    customTerms: number
  }

  export type TreeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TreeCountOutputTypeCountMembersArgs
    nodes?: boolean | TreeCountOutputTypeCountNodesArgs
    fields?: boolean | TreeCountOutputTypeCountFieldsArgs
    customTerms?: boolean | TreeCountOutputTypeCountCustomTermsArgs
  }

  // Custom InputTypes
  /**
   * TreeCountOutputType without action
   */
  export type TreeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeCountOutputType
     */
    select?: TreeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TreeCountOutputType without action
   */
  export type TreeCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreeMemberWhereInput
  }

  /**
   * TreeCountOutputType without action
   */
  export type TreeCountOutputTypeCountNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeWhereInput
  }

  /**
   * TreeCountOutputType without action
   */
  export type TreeCountOutputTypeCountFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomFieldWhereInput
  }

  /**
   * TreeCountOutputType without action
   */
  export type TreeCountOutputTypeCountCustomTermsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomKinshipTermWhereInput
  }


  /**
   * Count Type NodeCountOutputType
   */

  export type NodeCountOutputType = {
    customValues: number
    relationsAsSource: number
    relationsAsTarget: number
  }

  export type NodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customValues?: boolean | NodeCountOutputTypeCountCustomValuesArgs
    relationsAsSource?: boolean | NodeCountOutputTypeCountRelationsAsSourceArgs
    relationsAsTarget?: boolean | NodeCountOutputTypeCountRelationsAsTargetArgs
  }

  // Custom InputTypes
  /**
   * NodeCountOutputType without action
   */
  export type NodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeCountOutputType
     */
    select?: NodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NodeCountOutputType without action
   */
  export type NodeCountOutputTypeCountCustomValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomFieldValueWhereInput
  }

  /**
   * NodeCountOutputType without action
   */
  export type NodeCountOutputTypeCountRelationsAsSourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EdgeWhereInput
  }

  /**
   * NodeCountOutputType without action
   */
  export type NodeCountOutputTypeCountRelationsAsTargetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EdgeWhereInput
  }


  /**
   * Count Type CustomFieldCountOutputType
   */

  export type CustomFieldCountOutputType = {
    values: number
  }

  export type CustomFieldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    values?: boolean | CustomFieldCountOutputTypeCountValuesArgs
  }

  // Custom InputTypes
  /**
   * CustomFieldCountOutputType without action
   */
  export type CustomFieldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldCountOutputType
     */
    select?: CustomFieldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomFieldCountOutputType without action
   */
  export type CustomFieldCountOutputTypeCountValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomFieldValueWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
    isAnonymous: boolean | null
    username: string | null
    displayUsername: string | null
    lang: string | null
    phoneNumber: string | null
    phoneNumberVerified: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
    isAnonymous: boolean | null
    username: string | null
    displayUsername: string | null
    lang: string | null
    phoneNumber: string | null
    phoneNumberVerified: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    role: number
    banned: number
    banReason: number
    banExpires: number
    isAnonymous: number
    username: number
    displayUsername: number
    lang: number
    phoneNumber: number
    phoneNumberVerified: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
    isAnonymous?: true
    username?: true
    displayUsername?: true
    lang?: true
    phoneNumber?: true
    phoneNumberVerified?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
    isAnonymous?: true
    username?: true
    displayUsername?: true
    lang?: true
    phoneNumber?: true
    phoneNumberVerified?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
    isAnonymous?: true
    username?: true
    displayUsername?: true
    lang?: true
    phoneNumber?: true
    phoneNumberVerified?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
    isAnonymous: boolean | null
    username: string | null
    displayUsername: string | null
    lang: string | null
    phoneNumber: string | null
    phoneNumberVerified: boolean | null
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    isAnonymous?: boolean
    username?: boolean
    displayUsername?: boolean
    lang?: boolean
    phoneNumber?: boolean
    phoneNumberVerified?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    trees?: boolean | User$treesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    isAnonymous?: boolean
    username?: boolean
    displayUsername?: boolean
    lang?: boolean
    phoneNumber?: boolean
    phoneNumberVerified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    isAnonymous?: boolean
    username?: boolean
    displayUsername?: boolean
    lang?: boolean
    phoneNumber?: boolean
    phoneNumberVerified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    isAnonymous?: boolean
    username?: boolean
    displayUsername?: boolean
    lang?: boolean
    phoneNumber?: boolean
    phoneNumberVerified?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt" | "role" | "banned" | "banReason" | "banExpires" | "isAnonymous" | "username" | "displayUsername" | "lang" | "phoneNumber" | "phoneNumberVerified", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    trees?: boolean | User$treesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      trees: Prisma.$TreeMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
      role: string | null
      banned: boolean | null
      banReason: string | null
      banExpires: Date | null
      isAnonymous: boolean | null
      username: string | null
      displayUsername: string | null
      lang: string | null
      phoneNumber: string | null
      phoneNumberVerified: boolean | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trees<T extends User$treesArgs<ExtArgs> = {}>(args?: Subset<T, User$treesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreeMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'String'>
    readonly banned: FieldRef<"User", 'Boolean'>
    readonly banReason: FieldRef<"User", 'String'>
    readonly banExpires: FieldRef<"User", 'DateTime'>
    readonly isAnonymous: FieldRef<"User", 'Boolean'>
    readonly username: FieldRef<"User", 'String'>
    readonly displayUsername: FieldRef<"User", 'String'>
    readonly lang: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly phoneNumberVerified: FieldRef<"User", 'Boolean'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.trees
   */
  export type User$treesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeMember
     */
    select?: TreeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeMember
     */
    omit?: TreeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeMemberInclude<ExtArgs> | null
    where?: TreeMemberWhereInput
    orderBy?: TreeMemberOrderByWithRelationInput | TreeMemberOrderByWithRelationInput[]
    cursor?: TreeMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreeMemberScalarFieldEnum | TreeMemberScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    impersonatedBy: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    impersonatedBy: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    impersonatedBy: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    impersonatedBy: string | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId" | "impersonatedBy", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
      impersonatedBy: string | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly impersonatedBy: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model Tree
   */

  export type AggregateTree = {
    _count: TreeCountAggregateOutputType | null
    _min: TreeMinAggregateOutputType | null
    _max: TreeMaxAggregateOutputType | null
  }

  export type TreeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TreeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TreeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TreeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TreeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TreeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TreeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tree to aggregate.
     */
    where?: TreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trees to fetch.
     */
    orderBy?: TreeOrderByWithRelationInput | TreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trees
    **/
    _count?: true | TreeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreeMaxAggregateInputType
  }

  export type GetTreeAggregateType<T extends TreeAggregateArgs> = {
        [P in keyof T & keyof AggregateTree]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTree[P]>
      : GetScalarType<T[P], AggregateTree[P]>
  }




  export type TreeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreeWhereInput
    orderBy?: TreeOrderByWithAggregationInput | TreeOrderByWithAggregationInput[]
    by: TreeScalarFieldEnum[] | TreeScalarFieldEnum
    having?: TreeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreeCountAggregateInputType | true
    _min?: TreeMinAggregateInputType
    _max?: TreeMaxAggregateInputType
  }

  export type TreeGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: TreeCountAggregateOutputType | null
    _min: TreeMinAggregateOutputType | null
    _max: TreeMaxAggregateOutputType | null
  }

  type GetTreeGroupByPayload<T extends TreeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreeGroupByOutputType[P]>
            : GetScalarType<T[P], TreeGroupByOutputType[P]>
        }
      >
    >


  export type TreeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Tree$membersArgs<ExtArgs>
    nodes?: boolean | Tree$nodesArgs<ExtArgs>
    fields?: boolean | Tree$fieldsArgs<ExtArgs>
    customTerms?: boolean | Tree$customTermsArgs<ExtArgs>
    _count?: boolean | TreeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tree"]>

  export type TreeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tree"]>

  export type TreeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tree"]>

  export type TreeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TreeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["tree"]>
  export type TreeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Tree$membersArgs<ExtArgs>
    nodes?: boolean | Tree$nodesArgs<ExtArgs>
    fields?: boolean | Tree$fieldsArgs<ExtArgs>
    customTerms?: boolean | Tree$customTermsArgs<ExtArgs>
    _count?: boolean | TreeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TreeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TreeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TreePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tree"
    objects: {
      members: Prisma.$TreeMemberPayload<ExtArgs>[]
      nodes: Prisma.$NodePayload<ExtArgs>[]
      fields: Prisma.$CustomFieldPayload<ExtArgs>[]
      customTerms: Prisma.$CustomKinshipTermPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tree"]>
    composites: {}
  }

  type TreeGetPayload<S extends boolean | null | undefined | TreeDefaultArgs> = $Result.GetResult<Prisma.$TreePayload, S>

  type TreeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreeCountAggregateInputType | true
    }

  export interface TreeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tree'], meta: { name: 'Tree' } }
    /**
     * Find zero or one Tree that matches the filter.
     * @param {TreeFindUniqueArgs} args - Arguments to find a Tree
     * @example
     * // Get one Tree
     * const tree = await prisma.tree.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreeFindUniqueArgs>(args: SelectSubset<T, TreeFindUniqueArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tree that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreeFindUniqueOrThrowArgs} args - Arguments to find a Tree
     * @example
     * // Get one Tree
     * const tree = await prisma.tree.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreeFindUniqueOrThrowArgs>(args: SelectSubset<T, TreeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tree that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeFindFirstArgs} args - Arguments to find a Tree
     * @example
     * // Get one Tree
     * const tree = await prisma.tree.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreeFindFirstArgs>(args?: SelectSubset<T, TreeFindFirstArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tree that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeFindFirstOrThrowArgs} args - Arguments to find a Tree
     * @example
     * // Get one Tree
     * const tree = await prisma.tree.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreeFindFirstOrThrowArgs>(args?: SelectSubset<T, TreeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trees
     * const trees = await prisma.tree.findMany()
     * 
     * // Get first 10 Trees
     * const trees = await prisma.tree.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treeWithIdOnly = await prisma.tree.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreeFindManyArgs>(args?: SelectSubset<T, TreeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tree.
     * @param {TreeCreateArgs} args - Arguments to create a Tree.
     * @example
     * // Create one Tree
     * const Tree = await prisma.tree.create({
     *   data: {
     *     // ... data to create a Tree
     *   }
     * })
     * 
     */
    create<T extends TreeCreateArgs>(args: SelectSubset<T, TreeCreateArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trees.
     * @param {TreeCreateManyArgs} args - Arguments to create many Trees.
     * @example
     * // Create many Trees
     * const tree = await prisma.tree.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreeCreateManyArgs>(args?: SelectSubset<T, TreeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trees and returns the data saved in the database.
     * @param {TreeCreateManyAndReturnArgs} args - Arguments to create many Trees.
     * @example
     * // Create many Trees
     * const tree = await prisma.tree.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trees and only return the `id`
     * const treeWithIdOnly = await prisma.tree.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreeCreateManyAndReturnArgs>(args?: SelectSubset<T, TreeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tree.
     * @param {TreeDeleteArgs} args - Arguments to delete one Tree.
     * @example
     * // Delete one Tree
     * const Tree = await prisma.tree.delete({
     *   where: {
     *     // ... filter to delete one Tree
     *   }
     * })
     * 
     */
    delete<T extends TreeDeleteArgs>(args: SelectSubset<T, TreeDeleteArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tree.
     * @param {TreeUpdateArgs} args - Arguments to update one Tree.
     * @example
     * // Update one Tree
     * const tree = await prisma.tree.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreeUpdateArgs>(args: SelectSubset<T, TreeUpdateArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trees.
     * @param {TreeDeleteManyArgs} args - Arguments to filter Trees to delete.
     * @example
     * // Delete a few Trees
     * const { count } = await prisma.tree.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreeDeleteManyArgs>(args?: SelectSubset<T, TreeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trees
     * const tree = await prisma.tree.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreeUpdateManyArgs>(args: SelectSubset<T, TreeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trees and returns the data updated in the database.
     * @param {TreeUpdateManyAndReturnArgs} args - Arguments to update many Trees.
     * @example
     * // Update many Trees
     * const tree = await prisma.tree.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trees and only return the `id`
     * const treeWithIdOnly = await prisma.tree.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TreeUpdateManyAndReturnArgs>(args: SelectSubset<T, TreeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tree.
     * @param {TreeUpsertArgs} args - Arguments to update or create a Tree.
     * @example
     * // Update or create a Tree
     * const tree = await prisma.tree.upsert({
     *   create: {
     *     // ... data to create a Tree
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tree we want to update
     *   }
     * })
     */
    upsert<T extends TreeUpsertArgs>(args: SelectSubset<T, TreeUpsertArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeCountArgs} args - Arguments to filter Trees to count.
     * @example
     * // Count the number of Trees
     * const count = await prisma.tree.count({
     *   where: {
     *     // ... the filter for the Trees we want to count
     *   }
     * })
    **/
    count<T extends TreeCountArgs>(
      args?: Subset<T, TreeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tree.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TreeAggregateArgs>(args: Subset<T, TreeAggregateArgs>): Prisma.PrismaPromise<GetTreeAggregateType<T>>

    /**
     * Group by Tree.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeGroupByArgs} args - Group by arguments.
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
      T extends TreeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreeGroupByArgs['orderBy'] }
        : { orderBy?: TreeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TreeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tree model
   */
  readonly fields: TreeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tree.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Tree$membersArgs<ExtArgs> = {}>(args?: Subset<T, Tree$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreeMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nodes<T extends Tree$nodesArgs<ExtArgs> = {}>(args?: Subset<T, Tree$nodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fields<T extends Tree$fieldsArgs<ExtArgs> = {}>(args?: Subset<T, Tree$fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customTerms<T extends Tree$customTermsArgs<ExtArgs> = {}>(args?: Subset<T, Tree$customTermsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomKinshipTermPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tree model
   */
  interface TreeFieldRefs {
    readonly id: FieldRef<"Tree", 'String'>
    readonly name: FieldRef<"Tree", 'String'>
    readonly description: FieldRef<"Tree", 'String'>
    readonly createdAt: FieldRef<"Tree", 'DateTime'>
    readonly updatedAt: FieldRef<"Tree", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tree findUnique
   */
  export type TreeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * Filter, which Tree to fetch.
     */
    where: TreeWhereUniqueInput
  }

  /**
   * Tree findUniqueOrThrow
   */
  export type TreeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * Filter, which Tree to fetch.
     */
    where: TreeWhereUniqueInput
  }

  /**
   * Tree findFirst
   */
  export type TreeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * Filter, which Tree to fetch.
     */
    where?: TreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trees to fetch.
     */
    orderBy?: TreeOrderByWithRelationInput | TreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trees.
     */
    cursor?: TreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trees.
     */
    distinct?: TreeScalarFieldEnum | TreeScalarFieldEnum[]
  }

  /**
   * Tree findFirstOrThrow
   */
  export type TreeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * Filter, which Tree to fetch.
     */
    where?: TreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trees to fetch.
     */
    orderBy?: TreeOrderByWithRelationInput | TreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trees.
     */
    cursor?: TreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trees.
     */
    distinct?: TreeScalarFieldEnum | TreeScalarFieldEnum[]
  }

  /**
   * Tree findMany
   */
  export type TreeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * Filter, which Trees to fetch.
     */
    where?: TreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trees to fetch.
     */
    orderBy?: TreeOrderByWithRelationInput | TreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trees.
     */
    cursor?: TreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trees.
     */
    distinct?: TreeScalarFieldEnum | TreeScalarFieldEnum[]
  }

  /**
   * Tree create
   */
  export type TreeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * The data needed to create a Tree.
     */
    data: XOR<TreeCreateInput, TreeUncheckedCreateInput>
  }

  /**
   * Tree createMany
   */
  export type TreeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trees.
     */
    data: TreeCreateManyInput | TreeCreateManyInput[]
  }

  /**
   * Tree createManyAndReturn
   */
  export type TreeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * The data used to create many Trees.
     */
    data: TreeCreateManyInput | TreeCreateManyInput[]
  }

  /**
   * Tree update
   */
  export type TreeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * The data needed to update a Tree.
     */
    data: XOR<TreeUpdateInput, TreeUncheckedUpdateInput>
    /**
     * Choose, which Tree to update.
     */
    where: TreeWhereUniqueInput
  }

  /**
   * Tree updateMany
   */
  export type TreeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trees.
     */
    data: XOR<TreeUpdateManyMutationInput, TreeUncheckedUpdateManyInput>
    /**
     * Filter which Trees to update
     */
    where?: TreeWhereInput
    /**
     * Limit how many Trees to update.
     */
    limit?: number
  }

  /**
   * Tree updateManyAndReturn
   */
  export type TreeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * The data used to update Trees.
     */
    data: XOR<TreeUpdateManyMutationInput, TreeUncheckedUpdateManyInput>
    /**
     * Filter which Trees to update
     */
    where?: TreeWhereInput
    /**
     * Limit how many Trees to update.
     */
    limit?: number
  }

  /**
   * Tree upsert
   */
  export type TreeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * The filter to search for the Tree to update in case it exists.
     */
    where: TreeWhereUniqueInput
    /**
     * In case the Tree found by the `where` argument doesn't exist, create a new Tree with this data.
     */
    create: XOR<TreeCreateInput, TreeUncheckedCreateInput>
    /**
     * In case the Tree was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreeUpdateInput, TreeUncheckedUpdateInput>
  }

  /**
   * Tree delete
   */
  export type TreeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * Filter which Tree to delete.
     */
    where: TreeWhereUniqueInput
  }

  /**
   * Tree deleteMany
   */
  export type TreeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trees to delete
     */
    where?: TreeWhereInput
    /**
     * Limit how many Trees to delete.
     */
    limit?: number
  }

  /**
   * Tree.members
   */
  export type Tree$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeMember
     */
    select?: TreeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeMember
     */
    omit?: TreeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeMemberInclude<ExtArgs> | null
    where?: TreeMemberWhereInput
    orderBy?: TreeMemberOrderByWithRelationInput | TreeMemberOrderByWithRelationInput[]
    cursor?: TreeMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreeMemberScalarFieldEnum | TreeMemberScalarFieldEnum[]
  }

  /**
   * Tree.nodes
   */
  export type Tree$nodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    where?: NodeWhereInput
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    cursor?: NodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Tree.fields
   */
  export type Tree$fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    where?: CustomFieldWhereInput
    orderBy?: CustomFieldOrderByWithRelationInput | CustomFieldOrderByWithRelationInput[]
    cursor?: CustomFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomFieldScalarFieldEnum | CustomFieldScalarFieldEnum[]
  }

  /**
   * Tree.customTerms
   */
  export type Tree$customTermsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomKinshipTerm
     */
    select?: CustomKinshipTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomKinshipTerm
     */
    omit?: CustomKinshipTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomKinshipTermInclude<ExtArgs> | null
    where?: CustomKinshipTermWhereInput
    orderBy?: CustomKinshipTermOrderByWithRelationInput | CustomKinshipTermOrderByWithRelationInput[]
    cursor?: CustomKinshipTermWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomKinshipTermScalarFieldEnum | CustomKinshipTermScalarFieldEnum[]
  }

  /**
   * Tree without action
   */
  export type TreeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tree
     */
    omit?: TreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
  }


  /**
   * Model TreeMember
   */

  export type AggregateTreeMember = {
    _count: TreeMemberCountAggregateOutputType | null
    _min: TreeMemberMinAggregateOutputType | null
    _max: TreeMemberMaxAggregateOutputType | null
  }

  export type TreeMemberMinAggregateOutputType = {
    id: string | null
    treeId: string | null
    userId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type TreeMemberMaxAggregateOutputType = {
    id: string | null
    treeId: string | null
    userId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type TreeMemberCountAggregateOutputType = {
    id: number
    treeId: number
    userId: number
    role: number
    createdAt: number
    _all: number
  }


  export type TreeMemberMinAggregateInputType = {
    id?: true
    treeId?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type TreeMemberMaxAggregateInputType = {
    id?: true
    treeId?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type TreeMemberCountAggregateInputType = {
    id?: true
    treeId?: true
    userId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type TreeMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreeMember to aggregate.
     */
    where?: TreeMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreeMembers to fetch.
     */
    orderBy?: TreeMemberOrderByWithRelationInput | TreeMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreeMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreeMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreeMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TreeMembers
    **/
    _count?: true | TreeMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreeMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreeMemberMaxAggregateInputType
  }

  export type GetTreeMemberAggregateType<T extends TreeMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTreeMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreeMember[P]>
      : GetScalarType<T[P], AggregateTreeMember[P]>
  }




  export type TreeMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreeMemberWhereInput
    orderBy?: TreeMemberOrderByWithAggregationInput | TreeMemberOrderByWithAggregationInput[]
    by: TreeMemberScalarFieldEnum[] | TreeMemberScalarFieldEnum
    having?: TreeMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreeMemberCountAggregateInputType | true
    _min?: TreeMemberMinAggregateInputType
    _max?: TreeMemberMaxAggregateInputType
  }

  export type TreeMemberGroupByOutputType = {
    id: string
    treeId: string
    userId: string
    role: string
    createdAt: Date
    _count: TreeMemberCountAggregateOutputType | null
    _min: TreeMemberMinAggregateOutputType | null
    _max: TreeMemberMaxAggregateOutputType | null
  }

  type GetTreeMemberGroupByPayload<T extends TreeMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreeMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreeMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreeMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TreeMemberGroupByOutputType[P]>
        }
      >
    >


  export type TreeMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treeId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    tree?: boolean | TreeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treeMember"]>

  export type TreeMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treeId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    tree?: boolean | TreeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treeMember"]>

  export type TreeMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treeId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    tree?: boolean | TreeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treeMember"]>

  export type TreeMemberSelectScalar = {
    id?: boolean
    treeId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type TreeMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "treeId" | "userId" | "role" | "createdAt", ExtArgs["result"]["treeMember"]>
  export type TreeMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tree?: boolean | TreeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TreeMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tree?: boolean | TreeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TreeMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tree?: boolean | TreeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TreeMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TreeMember"
    objects: {
      tree: Prisma.$TreePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      treeId: string
      userId: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["treeMember"]>
    composites: {}
  }

  type TreeMemberGetPayload<S extends boolean | null | undefined | TreeMemberDefaultArgs> = $Result.GetResult<Prisma.$TreeMemberPayload, S>

  type TreeMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreeMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreeMemberCountAggregateInputType | true
    }

  export interface TreeMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TreeMember'], meta: { name: 'TreeMember' } }
    /**
     * Find zero or one TreeMember that matches the filter.
     * @param {TreeMemberFindUniqueArgs} args - Arguments to find a TreeMember
     * @example
     * // Get one TreeMember
     * const treeMember = await prisma.treeMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreeMemberFindUniqueArgs>(args: SelectSubset<T, TreeMemberFindUniqueArgs<ExtArgs>>): Prisma__TreeMemberClient<$Result.GetResult<Prisma.$TreeMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TreeMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreeMemberFindUniqueOrThrowArgs} args - Arguments to find a TreeMember
     * @example
     * // Get one TreeMember
     * const treeMember = await prisma.treeMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreeMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TreeMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreeMemberClient<$Result.GetResult<Prisma.$TreeMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreeMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeMemberFindFirstArgs} args - Arguments to find a TreeMember
     * @example
     * // Get one TreeMember
     * const treeMember = await prisma.treeMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreeMemberFindFirstArgs>(args?: SelectSubset<T, TreeMemberFindFirstArgs<ExtArgs>>): Prisma__TreeMemberClient<$Result.GetResult<Prisma.$TreeMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreeMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeMemberFindFirstOrThrowArgs} args - Arguments to find a TreeMember
     * @example
     * // Get one TreeMember
     * const treeMember = await prisma.treeMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreeMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TreeMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreeMemberClient<$Result.GetResult<Prisma.$TreeMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TreeMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TreeMembers
     * const treeMembers = await prisma.treeMember.findMany()
     * 
     * // Get first 10 TreeMembers
     * const treeMembers = await prisma.treeMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treeMemberWithIdOnly = await prisma.treeMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreeMemberFindManyArgs>(args?: SelectSubset<T, TreeMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreeMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TreeMember.
     * @param {TreeMemberCreateArgs} args - Arguments to create a TreeMember.
     * @example
     * // Create one TreeMember
     * const TreeMember = await prisma.treeMember.create({
     *   data: {
     *     // ... data to create a TreeMember
     *   }
     * })
     * 
     */
    create<T extends TreeMemberCreateArgs>(args: SelectSubset<T, TreeMemberCreateArgs<ExtArgs>>): Prisma__TreeMemberClient<$Result.GetResult<Prisma.$TreeMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TreeMembers.
     * @param {TreeMemberCreateManyArgs} args - Arguments to create many TreeMembers.
     * @example
     * // Create many TreeMembers
     * const treeMember = await prisma.treeMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreeMemberCreateManyArgs>(args?: SelectSubset<T, TreeMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TreeMembers and returns the data saved in the database.
     * @param {TreeMemberCreateManyAndReturnArgs} args - Arguments to create many TreeMembers.
     * @example
     * // Create many TreeMembers
     * const treeMember = await prisma.treeMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TreeMembers and only return the `id`
     * const treeMemberWithIdOnly = await prisma.treeMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreeMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, TreeMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreeMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TreeMember.
     * @param {TreeMemberDeleteArgs} args - Arguments to delete one TreeMember.
     * @example
     * // Delete one TreeMember
     * const TreeMember = await prisma.treeMember.delete({
     *   where: {
     *     // ... filter to delete one TreeMember
     *   }
     * })
     * 
     */
    delete<T extends TreeMemberDeleteArgs>(args: SelectSubset<T, TreeMemberDeleteArgs<ExtArgs>>): Prisma__TreeMemberClient<$Result.GetResult<Prisma.$TreeMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TreeMember.
     * @param {TreeMemberUpdateArgs} args - Arguments to update one TreeMember.
     * @example
     * // Update one TreeMember
     * const treeMember = await prisma.treeMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreeMemberUpdateArgs>(args: SelectSubset<T, TreeMemberUpdateArgs<ExtArgs>>): Prisma__TreeMemberClient<$Result.GetResult<Prisma.$TreeMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TreeMembers.
     * @param {TreeMemberDeleteManyArgs} args - Arguments to filter TreeMembers to delete.
     * @example
     * // Delete a few TreeMembers
     * const { count } = await prisma.treeMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreeMemberDeleteManyArgs>(args?: SelectSubset<T, TreeMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreeMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TreeMembers
     * const treeMember = await prisma.treeMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreeMemberUpdateManyArgs>(args: SelectSubset<T, TreeMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreeMembers and returns the data updated in the database.
     * @param {TreeMemberUpdateManyAndReturnArgs} args - Arguments to update many TreeMembers.
     * @example
     * // Update many TreeMembers
     * const treeMember = await prisma.treeMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TreeMembers and only return the `id`
     * const treeMemberWithIdOnly = await prisma.treeMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TreeMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, TreeMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreeMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TreeMember.
     * @param {TreeMemberUpsertArgs} args - Arguments to update or create a TreeMember.
     * @example
     * // Update or create a TreeMember
     * const treeMember = await prisma.treeMember.upsert({
     *   create: {
     *     // ... data to create a TreeMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TreeMember we want to update
     *   }
     * })
     */
    upsert<T extends TreeMemberUpsertArgs>(args: SelectSubset<T, TreeMemberUpsertArgs<ExtArgs>>): Prisma__TreeMemberClient<$Result.GetResult<Prisma.$TreeMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TreeMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeMemberCountArgs} args - Arguments to filter TreeMembers to count.
     * @example
     * // Count the number of TreeMembers
     * const count = await prisma.treeMember.count({
     *   where: {
     *     // ... the filter for the TreeMembers we want to count
     *   }
     * })
    **/
    count<T extends TreeMemberCountArgs>(
      args?: Subset<T, TreeMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreeMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TreeMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TreeMemberAggregateArgs>(args: Subset<T, TreeMemberAggregateArgs>): Prisma.PrismaPromise<GetTreeMemberAggregateType<T>>

    /**
     * Group by TreeMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeMemberGroupByArgs} args - Group by arguments.
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
      T extends TreeMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreeMemberGroupByArgs['orderBy'] }
        : { orderBy?: TreeMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TreeMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreeMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TreeMember model
   */
  readonly fields: TreeMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TreeMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreeMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tree<T extends TreeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TreeDefaultArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TreeMember model
   */
  interface TreeMemberFieldRefs {
    readonly id: FieldRef<"TreeMember", 'String'>
    readonly treeId: FieldRef<"TreeMember", 'String'>
    readonly userId: FieldRef<"TreeMember", 'String'>
    readonly role: FieldRef<"TreeMember", 'String'>
    readonly createdAt: FieldRef<"TreeMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TreeMember findUnique
   */
  export type TreeMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeMember
     */
    select?: TreeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeMember
     */
    omit?: TreeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeMemberInclude<ExtArgs> | null
    /**
     * Filter, which TreeMember to fetch.
     */
    where: TreeMemberWhereUniqueInput
  }

  /**
   * TreeMember findUniqueOrThrow
   */
  export type TreeMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeMember
     */
    select?: TreeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeMember
     */
    omit?: TreeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeMemberInclude<ExtArgs> | null
    /**
     * Filter, which TreeMember to fetch.
     */
    where: TreeMemberWhereUniqueInput
  }

  /**
   * TreeMember findFirst
   */
  export type TreeMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeMember
     */
    select?: TreeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeMember
     */
    omit?: TreeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeMemberInclude<ExtArgs> | null
    /**
     * Filter, which TreeMember to fetch.
     */
    where?: TreeMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreeMembers to fetch.
     */
    orderBy?: TreeMemberOrderByWithRelationInput | TreeMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreeMembers.
     */
    cursor?: TreeMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreeMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreeMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreeMembers.
     */
    distinct?: TreeMemberScalarFieldEnum | TreeMemberScalarFieldEnum[]
  }

  /**
   * TreeMember findFirstOrThrow
   */
  export type TreeMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeMember
     */
    select?: TreeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeMember
     */
    omit?: TreeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeMemberInclude<ExtArgs> | null
    /**
     * Filter, which TreeMember to fetch.
     */
    where?: TreeMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreeMembers to fetch.
     */
    orderBy?: TreeMemberOrderByWithRelationInput | TreeMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreeMembers.
     */
    cursor?: TreeMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreeMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreeMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreeMembers.
     */
    distinct?: TreeMemberScalarFieldEnum | TreeMemberScalarFieldEnum[]
  }

  /**
   * TreeMember findMany
   */
  export type TreeMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeMember
     */
    select?: TreeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeMember
     */
    omit?: TreeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeMemberInclude<ExtArgs> | null
    /**
     * Filter, which TreeMembers to fetch.
     */
    where?: TreeMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreeMembers to fetch.
     */
    orderBy?: TreeMemberOrderByWithRelationInput | TreeMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TreeMembers.
     */
    cursor?: TreeMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreeMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreeMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreeMembers.
     */
    distinct?: TreeMemberScalarFieldEnum | TreeMemberScalarFieldEnum[]
  }

  /**
   * TreeMember create
   */
  export type TreeMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeMember
     */
    select?: TreeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeMember
     */
    omit?: TreeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a TreeMember.
     */
    data: XOR<TreeMemberCreateInput, TreeMemberUncheckedCreateInput>
  }

  /**
   * TreeMember createMany
   */
  export type TreeMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TreeMembers.
     */
    data: TreeMemberCreateManyInput | TreeMemberCreateManyInput[]
  }

  /**
   * TreeMember createManyAndReturn
   */
  export type TreeMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeMember
     */
    select?: TreeMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TreeMember
     */
    omit?: TreeMemberOmit<ExtArgs> | null
    /**
     * The data used to create many TreeMembers.
     */
    data: TreeMemberCreateManyInput | TreeMemberCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TreeMember update
   */
  export type TreeMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeMember
     */
    select?: TreeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeMember
     */
    omit?: TreeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a TreeMember.
     */
    data: XOR<TreeMemberUpdateInput, TreeMemberUncheckedUpdateInput>
    /**
     * Choose, which TreeMember to update.
     */
    where: TreeMemberWhereUniqueInput
  }

  /**
   * TreeMember updateMany
   */
  export type TreeMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TreeMembers.
     */
    data: XOR<TreeMemberUpdateManyMutationInput, TreeMemberUncheckedUpdateManyInput>
    /**
     * Filter which TreeMembers to update
     */
    where?: TreeMemberWhereInput
    /**
     * Limit how many TreeMembers to update.
     */
    limit?: number
  }

  /**
   * TreeMember updateManyAndReturn
   */
  export type TreeMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeMember
     */
    select?: TreeMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TreeMember
     */
    omit?: TreeMemberOmit<ExtArgs> | null
    /**
     * The data used to update TreeMembers.
     */
    data: XOR<TreeMemberUpdateManyMutationInput, TreeMemberUncheckedUpdateManyInput>
    /**
     * Filter which TreeMembers to update
     */
    where?: TreeMemberWhereInput
    /**
     * Limit how many TreeMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TreeMember upsert
   */
  export type TreeMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeMember
     */
    select?: TreeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeMember
     */
    omit?: TreeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the TreeMember to update in case it exists.
     */
    where: TreeMemberWhereUniqueInput
    /**
     * In case the TreeMember found by the `where` argument doesn't exist, create a new TreeMember with this data.
     */
    create: XOR<TreeMemberCreateInput, TreeMemberUncheckedCreateInput>
    /**
     * In case the TreeMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreeMemberUpdateInput, TreeMemberUncheckedUpdateInput>
  }

  /**
   * TreeMember delete
   */
  export type TreeMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeMember
     */
    select?: TreeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeMember
     */
    omit?: TreeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeMemberInclude<ExtArgs> | null
    /**
     * Filter which TreeMember to delete.
     */
    where: TreeMemberWhereUniqueInput
  }

  /**
   * TreeMember deleteMany
   */
  export type TreeMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreeMembers to delete
     */
    where?: TreeMemberWhereInput
    /**
     * Limit how many TreeMembers to delete.
     */
    limit?: number
  }

  /**
   * TreeMember without action
   */
  export type TreeMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeMember
     */
    select?: TreeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeMember
     */
    omit?: TreeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeMemberInclude<ExtArgs> | null
  }


  /**
   * Model Node
   */

  export type AggregateNode = {
    _count: NodeCountAggregateOutputType | null
    _min: NodeMinAggregateOutputType | null
    _max: NodeMaxAggregateOutputType | null
  }

  export type NodeMinAggregateOutputType = {
    id: string | null
    treeId: string | null
    firstName: string | null
    lastName: string | null
    gender: string | null
    idCardNumber: string | null
    birthDate: Date | null
    deathDate: Date | null
    lunarBirthDate: string | null
    lunarDeathDate: string | null
    phone: string | null
    email: string | null
    major: string | null
    jobPosition: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NodeMaxAggregateOutputType = {
    id: string | null
    treeId: string | null
    firstName: string | null
    lastName: string | null
    gender: string | null
    idCardNumber: string | null
    birthDate: Date | null
    deathDate: Date | null
    lunarBirthDate: string | null
    lunarDeathDate: string | null
    phone: string | null
    email: string | null
    major: string | null
    jobPosition: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NodeCountAggregateOutputType = {
    id: number
    treeId: number
    firstName: number
    lastName: number
    gender: number
    idCardNumber: number
    birthDate: number
    deathDate: number
    lunarBirthDate: number
    lunarDeathDate: number
    phone: number
    email: number
    major: number
    jobPosition: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NodeMinAggregateInputType = {
    id?: true
    treeId?: true
    firstName?: true
    lastName?: true
    gender?: true
    idCardNumber?: true
    birthDate?: true
    deathDate?: true
    lunarBirthDate?: true
    lunarDeathDate?: true
    phone?: true
    email?: true
    major?: true
    jobPosition?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NodeMaxAggregateInputType = {
    id?: true
    treeId?: true
    firstName?: true
    lastName?: true
    gender?: true
    idCardNumber?: true
    birthDate?: true
    deathDate?: true
    lunarBirthDate?: true
    lunarDeathDate?: true
    phone?: true
    email?: true
    major?: true
    jobPosition?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NodeCountAggregateInputType = {
    id?: true
    treeId?: true
    firstName?: true
    lastName?: true
    gender?: true
    idCardNumber?: true
    birthDate?: true
    deathDate?: true
    lunarBirthDate?: true
    lunarDeathDate?: true
    phone?: true
    email?: true
    major?: true
    jobPosition?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Node to aggregate.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nodes
    **/
    _count?: true | NodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NodeMaxAggregateInputType
  }

  export type GetNodeAggregateType<T extends NodeAggregateArgs> = {
        [P in keyof T & keyof AggregateNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNode[P]>
      : GetScalarType<T[P], AggregateNode[P]>
  }




  export type NodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeWhereInput
    orderBy?: NodeOrderByWithAggregationInput | NodeOrderByWithAggregationInput[]
    by: NodeScalarFieldEnum[] | NodeScalarFieldEnum
    having?: NodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NodeCountAggregateInputType | true
    _min?: NodeMinAggregateInputType
    _max?: NodeMaxAggregateInputType
  }

  export type NodeGroupByOutputType = {
    id: string
    treeId: string
    firstName: string
    lastName: string | null
    gender: string
    idCardNumber: string | null
    birthDate: Date
    deathDate: Date | null
    lunarBirthDate: string | null
    lunarDeathDate: string | null
    phone: string | null
    email: string | null
    major: string | null
    jobPosition: string | null
    createdAt: Date
    updatedAt: Date
    _count: NodeCountAggregateOutputType | null
    _min: NodeMinAggregateOutputType | null
    _max: NodeMaxAggregateOutputType | null
  }

  type GetNodeGroupByPayload<T extends NodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NodeGroupByOutputType[P]>
            : GetScalarType<T[P], NodeGroupByOutputType[P]>
        }
      >
    >


  export type NodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treeId?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    idCardNumber?: boolean
    birthDate?: boolean
    deathDate?: boolean
    lunarBirthDate?: boolean
    lunarDeathDate?: boolean
    phone?: boolean
    email?: boolean
    major?: boolean
    jobPosition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tree?: boolean | TreeDefaultArgs<ExtArgs>
    customValues?: boolean | Node$customValuesArgs<ExtArgs>
    relationsAsSource?: boolean | Node$relationsAsSourceArgs<ExtArgs>
    relationsAsTarget?: boolean | Node$relationsAsTargetArgs<ExtArgs>
    _count?: boolean | NodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["node"]>

  export type NodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treeId?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    idCardNumber?: boolean
    birthDate?: boolean
    deathDate?: boolean
    lunarBirthDate?: boolean
    lunarDeathDate?: boolean
    phone?: boolean
    email?: boolean
    major?: boolean
    jobPosition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["node"]>

  export type NodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treeId?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    idCardNumber?: boolean
    birthDate?: boolean
    deathDate?: boolean
    lunarBirthDate?: boolean
    lunarDeathDate?: boolean
    phone?: boolean
    email?: boolean
    major?: boolean
    jobPosition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["node"]>

  export type NodeSelectScalar = {
    id?: boolean
    treeId?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    idCardNumber?: boolean
    birthDate?: boolean
    deathDate?: boolean
    lunarBirthDate?: boolean
    lunarDeathDate?: boolean
    phone?: boolean
    email?: boolean
    major?: boolean
    jobPosition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "treeId" | "firstName" | "lastName" | "gender" | "idCardNumber" | "birthDate" | "deathDate" | "lunarBirthDate" | "lunarDeathDate" | "phone" | "email" | "major" | "jobPosition" | "createdAt" | "updatedAt", ExtArgs["result"]["node"]>
  export type NodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tree?: boolean | TreeDefaultArgs<ExtArgs>
    customValues?: boolean | Node$customValuesArgs<ExtArgs>
    relationsAsSource?: boolean | Node$relationsAsSourceArgs<ExtArgs>
    relationsAsTarget?: boolean | Node$relationsAsTargetArgs<ExtArgs>
    _count?: boolean | NodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }
  export type NodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }

  export type $NodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Node"
    objects: {
      tree: Prisma.$TreePayload<ExtArgs>
      customValues: Prisma.$CustomFieldValuePayload<ExtArgs>[]
      relationsAsSource: Prisma.$EdgePayload<ExtArgs>[]
      relationsAsTarget: Prisma.$EdgePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      treeId: string
      firstName: string
      lastName: string | null
      gender: string
      idCardNumber: string | null
      birthDate: Date
      deathDate: Date | null
      lunarBirthDate: string | null
      lunarDeathDate: string | null
      phone: string | null
      email: string | null
      major: string | null
      jobPosition: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["node"]>
    composites: {}
  }

  type NodeGetPayload<S extends boolean | null | undefined | NodeDefaultArgs> = $Result.GetResult<Prisma.$NodePayload, S>

  type NodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NodeCountAggregateInputType | true
    }

  export interface NodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Node'], meta: { name: 'Node' } }
    /**
     * Find zero or one Node that matches the filter.
     * @param {NodeFindUniqueArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NodeFindUniqueArgs>(args: SelectSubset<T, NodeFindUniqueArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Node that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NodeFindUniqueOrThrowArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NodeFindUniqueOrThrowArgs>(args: SelectSubset<T, NodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Node that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindFirstArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NodeFindFirstArgs>(args?: SelectSubset<T, NodeFindFirstArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Node that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindFirstOrThrowArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NodeFindFirstOrThrowArgs>(args?: SelectSubset<T, NodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nodes
     * const nodes = await prisma.node.findMany()
     * 
     * // Get first 10 Nodes
     * const nodes = await prisma.node.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nodeWithIdOnly = await prisma.node.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NodeFindManyArgs>(args?: SelectSubset<T, NodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Node.
     * @param {NodeCreateArgs} args - Arguments to create a Node.
     * @example
     * // Create one Node
     * const Node = await prisma.node.create({
     *   data: {
     *     // ... data to create a Node
     *   }
     * })
     * 
     */
    create<T extends NodeCreateArgs>(args: SelectSubset<T, NodeCreateArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nodes.
     * @param {NodeCreateManyArgs} args - Arguments to create many Nodes.
     * @example
     * // Create many Nodes
     * const node = await prisma.node.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NodeCreateManyArgs>(args?: SelectSubset<T, NodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nodes and returns the data saved in the database.
     * @param {NodeCreateManyAndReturnArgs} args - Arguments to create many Nodes.
     * @example
     * // Create many Nodes
     * const node = await prisma.node.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nodes and only return the `id`
     * const nodeWithIdOnly = await prisma.node.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NodeCreateManyAndReturnArgs>(args?: SelectSubset<T, NodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Node.
     * @param {NodeDeleteArgs} args - Arguments to delete one Node.
     * @example
     * // Delete one Node
     * const Node = await prisma.node.delete({
     *   where: {
     *     // ... filter to delete one Node
     *   }
     * })
     * 
     */
    delete<T extends NodeDeleteArgs>(args: SelectSubset<T, NodeDeleteArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Node.
     * @param {NodeUpdateArgs} args - Arguments to update one Node.
     * @example
     * // Update one Node
     * const node = await prisma.node.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NodeUpdateArgs>(args: SelectSubset<T, NodeUpdateArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nodes.
     * @param {NodeDeleteManyArgs} args - Arguments to filter Nodes to delete.
     * @example
     * // Delete a few Nodes
     * const { count } = await prisma.node.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NodeDeleteManyArgs>(args?: SelectSubset<T, NodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nodes
     * const node = await prisma.node.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NodeUpdateManyArgs>(args: SelectSubset<T, NodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nodes and returns the data updated in the database.
     * @param {NodeUpdateManyAndReturnArgs} args - Arguments to update many Nodes.
     * @example
     * // Update many Nodes
     * const node = await prisma.node.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nodes and only return the `id`
     * const nodeWithIdOnly = await prisma.node.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NodeUpdateManyAndReturnArgs>(args: SelectSubset<T, NodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Node.
     * @param {NodeUpsertArgs} args - Arguments to update or create a Node.
     * @example
     * // Update or create a Node
     * const node = await prisma.node.upsert({
     *   create: {
     *     // ... data to create a Node
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Node we want to update
     *   }
     * })
     */
    upsert<T extends NodeUpsertArgs>(args: SelectSubset<T, NodeUpsertArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeCountArgs} args - Arguments to filter Nodes to count.
     * @example
     * // Count the number of Nodes
     * const count = await prisma.node.count({
     *   where: {
     *     // ... the filter for the Nodes we want to count
     *   }
     * })
    **/
    count<T extends NodeCountArgs>(
      args?: Subset<T, NodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Node.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NodeAggregateArgs>(args: Subset<T, NodeAggregateArgs>): Prisma.PrismaPromise<GetNodeAggregateType<T>>

    /**
     * Group by Node.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeGroupByArgs} args - Group by arguments.
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
      T extends NodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NodeGroupByArgs['orderBy'] }
        : { orderBy?: NodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Node model
   */
  readonly fields: NodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Node.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tree<T extends TreeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TreeDefaultArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customValues<T extends Node$customValuesArgs<ExtArgs> = {}>(args?: Subset<T, Node$customValuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relationsAsSource<T extends Node$relationsAsSourceArgs<ExtArgs> = {}>(args?: Subset<T, Node$relationsAsSourceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relationsAsTarget<T extends Node$relationsAsTargetArgs<ExtArgs> = {}>(args?: Subset<T, Node$relationsAsTargetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Node model
   */
  interface NodeFieldRefs {
    readonly id: FieldRef<"Node", 'String'>
    readonly treeId: FieldRef<"Node", 'String'>
    readonly firstName: FieldRef<"Node", 'String'>
    readonly lastName: FieldRef<"Node", 'String'>
    readonly gender: FieldRef<"Node", 'String'>
    readonly idCardNumber: FieldRef<"Node", 'String'>
    readonly birthDate: FieldRef<"Node", 'DateTime'>
    readonly deathDate: FieldRef<"Node", 'DateTime'>
    readonly lunarBirthDate: FieldRef<"Node", 'String'>
    readonly lunarDeathDate: FieldRef<"Node", 'String'>
    readonly phone: FieldRef<"Node", 'String'>
    readonly email: FieldRef<"Node", 'String'>
    readonly major: FieldRef<"Node", 'String'>
    readonly jobPosition: FieldRef<"Node", 'String'>
    readonly createdAt: FieldRef<"Node", 'DateTime'>
    readonly updatedAt: FieldRef<"Node", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Node findUnique
   */
  export type NodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node findUniqueOrThrow
   */
  export type NodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node findFirst
   */
  export type NodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nodes.
     */
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node findFirstOrThrow
   */
  export type NodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nodes.
     */
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node findMany
   */
  export type NodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Nodes to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nodes.
     */
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node create
   */
  export type NodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Node.
     */
    data: XOR<NodeCreateInput, NodeUncheckedCreateInput>
  }

  /**
   * Node createMany
   */
  export type NodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nodes.
     */
    data: NodeCreateManyInput | NodeCreateManyInput[]
  }

  /**
   * Node createManyAndReturn
   */
  export type NodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * The data used to create many Nodes.
     */
    data: NodeCreateManyInput | NodeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Node update
   */
  export type NodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Node.
     */
    data: XOR<NodeUpdateInput, NodeUncheckedUpdateInput>
    /**
     * Choose, which Node to update.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node updateMany
   */
  export type NodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nodes.
     */
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyInput>
    /**
     * Filter which Nodes to update
     */
    where?: NodeWhereInput
    /**
     * Limit how many Nodes to update.
     */
    limit?: number
  }

  /**
   * Node updateManyAndReturn
   */
  export type NodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * The data used to update Nodes.
     */
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyInput>
    /**
     * Filter which Nodes to update
     */
    where?: NodeWhereInput
    /**
     * Limit how many Nodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Node upsert
   */
  export type NodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Node to update in case it exists.
     */
    where: NodeWhereUniqueInput
    /**
     * In case the Node found by the `where` argument doesn't exist, create a new Node with this data.
     */
    create: XOR<NodeCreateInput, NodeUncheckedCreateInput>
    /**
     * In case the Node was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NodeUpdateInput, NodeUncheckedUpdateInput>
  }

  /**
   * Node delete
   */
  export type NodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter which Node to delete.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node deleteMany
   */
  export type NodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nodes to delete
     */
    where?: NodeWhereInput
    /**
     * Limit how many Nodes to delete.
     */
    limit?: number
  }

  /**
   * Node.customValues
   */
  export type Node$customValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    where?: CustomFieldValueWhereInput
    orderBy?: CustomFieldValueOrderByWithRelationInput | CustomFieldValueOrderByWithRelationInput[]
    cursor?: CustomFieldValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomFieldValueScalarFieldEnum | CustomFieldValueScalarFieldEnum[]
  }

  /**
   * Node.relationsAsSource
   */
  export type Node$relationsAsSourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    where?: EdgeWhereInput
    orderBy?: EdgeOrderByWithRelationInput | EdgeOrderByWithRelationInput[]
    cursor?: EdgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EdgeScalarFieldEnum | EdgeScalarFieldEnum[]
  }

  /**
   * Node.relationsAsTarget
   */
  export type Node$relationsAsTargetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    where?: EdgeWhereInput
    orderBy?: EdgeOrderByWithRelationInput | EdgeOrderByWithRelationInput[]
    cursor?: EdgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EdgeScalarFieldEnum | EdgeScalarFieldEnum[]
  }

  /**
   * Node without action
   */
  export type NodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
  }


  /**
   * Model CustomField
   */

  export type AggregateCustomField = {
    _count: CustomFieldCountAggregateOutputType | null
    _min: CustomFieldMinAggregateOutputType | null
    _max: CustomFieldMaxAggregateOutputType | null
  }

  export type CustomFieldMinAggregateOutputType = {
    id: string | null
    treeId: string | null
    name: string | null
    type: string | null
  }

  export type CustomFieldMaxAggregateOutputType = {
    id: string | null
    treeId: string | null
    name: string | null
    type: string | null
  }

  export type CustomFieldCountAggregateOutputType = {
    id: number
    treeId: number
    name: number
    type: number
    _all: number
  }


  export type CustomFieldMinAggregateInputType = {
    id?: true
    treeId?: true
    name?: true
    type?: true
  }

  export type CustomFieldMaxAggregateInputType = {
    id?: true
    treeId?: true
    name?: true
    type?: true
  }

  export type CustomFieldCountAggregateInputType = {
    id?: true
    treeId?: true
    name?: true
    type?: true
    _all?: true
  }

  export type CustomFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomField to aggregate.
     */
    where?: CustomFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFields to fetch.
     */
    orderBy?: CustomFieldOrderByWithRelationInput | CustomFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomFields
    **/
    _count?: true | CustomFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomFieldMaxAggregateInputType
  }

  export type GetCustomFieldAggregateType<T extends CustomFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomField[P]>
      : GetScalarType<T[P], AggregateCustomField[P]>
  }




  export type CustomFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomFieldWhereInput
    orderBy?: CustomFieldOrderByWithAggregationInput | CustomFieldOrderByWithAggregationInput[]
    by: CustomFieldScalarFieldEnum[] | CustomFieldScalarFieldEnum
    having?: CustomFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomFieldCountAggregateInputType | true
    _min?: CustomFieldMinAggregateInputType
    _max?: CustomFieldMaxAggregateInputType
  }

  export type CustomFieldGroupByOutputType = {
    id: string
    treeId: string
    name: string
    type: string
    _count: CustomFieldCountAggregateOutputType | null
    _min: CustomFieldMinAggregateOutputType | null
    _max: CustomFieldMaxAggregateOutputType | null
  }

  type GetCustomFieldGroupByPayload<T extends CustomFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomFieldGroupByOutputType[P]>
            : GetScalarType<T[P], CustomFieldGroupByOutputType[P]>
        }
      >
    >


  export type CustomFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treeId?: boolean
    name?: boolean
    type?: boolean
    tree?: boolean | TreeDefaultArgs<ExtArgs>
    values?: boolean | CustomField$valuesArgs<ExtArgs>
    _count?: boolean | CustomFieldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customField"]>

  export type CustomFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treeId?: boolean
    name?: boolean
    type?: boolean
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customField"]>

  export type CustomFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treeId?: boolean
    name?: boolean
    type?: boolean
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customField"]>

  export type CustomFieldSelectScalar = {
    id?: boolean
    treeId?: boolean
    name?: boolean
    type?: boolean
  }

  export type CustomFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "treeId" | "name" | "type", ExtArgs["result"]["customField"]>
  export type CustomFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tree?: boolean | TreeDefaultArgs<ExtArgs>
    values?: boolean | CustomField$valuesArgs<ExtArgs>
    _count?: boolean | CustomFieldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }
  export type CustomFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }

  export type $CustomFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomField"
    objects: {
      tree: Prisma.$TreePayload<ExtArgs>
      values: Prisma.$CustomFieldValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      treeId: string
      name: string
      type: string
    }, ExtArgs["result"]["customField"]>
    composites: {}
  }

  type CustomFieldGetPayload<S extends boolean | null | undefined | CustomFieldDefaultArgs> = $Result.GetResult<Prisma.$CustomFieldPayload, S>

  type CustomFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomFieldCountAggregateInputType | true
    }

  export interface CustomFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomField'], meta: { name: 'CustomField' } }
    /**
     * Find zero or one CustomField that matches the filter.
     * @param {CustomFieldFindUniqueArgs} args - Arguments to find a CustomField
     * @example
     * // Get one CustomField
     * const customField = await prisma.customField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomFieldFindUniqueArgs>(args: SelectSubset<T, CustomFieldFindUniqueArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomFieldFindUniqueOrThrowArgs} args - Arguments to find a CustomField
     * @example
     * // Get one CustomField
     * const customField = await prisma.customField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldFindFirstArgs} args - Arguments to find a CustomField
     * @example
     * // Get one CustomField
     * const customField = await prisma.customField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomFieldFindFirstArgs>(args?: SelectSubset<T, CustomFieldFindFirstArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldFindFirstOrThrowArgs} args - Arguments to find a CustomField
     * @example
     * // Get one CustomField
     * const customField = await prisma.customField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomFields
     * const customFields = await prisma.customField.findMany()
     * 
     * // Get first 10 CustomFields
     * const customFields = await prisma.customField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customFieldWithIdOnly = await prisma.customField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomFieldFindManyArgs>(args?: SelectSubset<T, CustomFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomField.
     * @param {CustomFieldCreateArgs} args - Arguments to create a CustomField.
     * @example
     * // Create one CustomField
     * const CustomField = await prisma.customField.create({
     *   data: {
     *     // ... data to create a CustomField
     *   }
     * })
     * 
     */
    create<T extends CustomFieldCreateArgs>(args: SelectSubset<T, CustomFieldCreateArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomFields.
     * @param {CustomFieldCreateManyArgs} args - Arguments to create many CustomFields.
     * @example
     * // Create many CustomFields
     * const customField = await prisma.customField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomFieldCreateManyArgs>(args?: SelectSubset<T, CustomFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomFields and returns the data saved in the database.
     * @param {CustomFieldCreateManyAndReturnArgs} args - Arguments to create many CustomFields.
     * @example
     * // Create many CustomFields
     * const customField = await prisma.customField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomFields and only return the `id`
     * const customFieldWithIdOnly = await prisma.customField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomField.
     * @param {CustomFieldDeleteArgs} args - Arguments to delete one CustomField.
     * @example
     * // Delete one CustomField
     * const CustomField = await prisma.customField.delete({
     *   where: {
     *     // ... filter to delete one CustomField
     *   }
     * })
     * 
     */
    delete<T extends CustomFieldDeleteArgs>(args: SelectSubset<T, CustomFieldDeleteArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomField.
     * @param {CustomFieldUpdateArgs} args - Arguments to update one CustomField.
     * @example
     * // Update one CustomField
     * const customField = await prisma.customField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomFieldUpdateArgs>(args: SelectSubset<T, CustomFieldUpdateArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomFields.
     * @param {CustomFieldDeleteManyArgs} args - Arguments to filter CustomFields to delete.
     * @example
     * // Delete a few CustomFields
     * const { count } = await prisma.customField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomFieldDeleteManyArgs>(args?: SelectSubset<T, CustomFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomFields
     * const customField = await prisma.customField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomFieldUpdateManyArgs>(args: SelectSubset<T, CustomFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomFields and returns the data updated in the database.
     * @param {CustomFieldUpdateManyAndReturnArgs} args - Arguments to update many CustomFields.
     * @example
     * // Update many CustomFields
     * const customField = await prisma.customField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomFields and only return the `id`
     * const customFieldWithIdOnly = await prisma.customField.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomFieldUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomField.
     * @param {CustomFieldUpsertArgs} args - Arguments to update or create a CustomField.
     * @example
     * // Update or create a CustomField
     * const customField = await prisma.customField.upsert({
     *   create: {
     *     // ... data to create a CustomField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomField we want to update
     *   }
     * })
     */
    upsert<T extends CustomFieldUpsertArgs>(args: SelectSubset<T, CustomFieldUpsertArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldCountArgs} args - Arguments to filter CustomFields to count.
     * @example
     * // Count the number of CustomFields
     * const count = await prisma.customField.count({
     *   where: {
     *     // ... the filter for the CustomFields we want to count
     *   }
     * })
    **/
    count<T extends CustomFieldCountArgs>(
      args?: Subset<T, CustomFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomFieldAggregateArgs>(args: Subset<T, CustomFieldAggregateArgs>): Prisma.PrismaPromise<GetCustomFieldAggregateType<T>>

    /**
     * Group by CustomField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldGroupByArgs} args - Group by arguments.
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
      T extends CustomFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomFieldGroupByArgs['orderBy'] }
        : { orderBy?: CustomFieldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomField model
   */
  readonly fields: CustomFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tree<T extends TreeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TreeDefaultArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    values<T extends CustomField$valuesArgs<ExtArgs> = {}>(args?: Subset<T, CustomField$valuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CustomField model
   */
  interface CustomFieldFieldRefs {
    readonly id: FieldRef<"CustomField", 'String'>
    readonly treeId: FieldRef<"CustomField", 'String'>
    readonly name: FieldRef<"CustomField", 'String'>
    readonly type: FieldRef<"CustomField", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CustomField findUnique
   */
  export type CustomFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which CustomField to fetch.
     */
    where: CustomFieldWhereUniqueInput
  }

  /**
   * CustomField findUniqueOrThrow
   */
  export type CustomFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which CustomField to fetch.
     */
    where: CustomFieldWhereUniqueInput
  }

  /**
   * CustomField findFirst
   */
  export type CustomFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which CustomField to fetch.
     */
    where?: CustomFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFields to fetch.
     */
    orderBy?: CustomFieldOrderByWithRelationInput | CustomFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomFields.
     */
    cursor?: CustomFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomFields.
     */
    distinct?: CustomFieldScalarFieldEnum | CustomFieldScalarFieldEnum[]
  }

  /**
   * CustomField findFirstOrThrow
   */
  export type CustomFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which CustomField to fetch.
     */
    where?: CustomFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFields to fetch.
     */
    orderBy?: CustomFieldOrderByWithRelationInput | CustomFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomFields.
     */
    cursor?: CustomFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomFields.
     */
    distinct?: CustomFieldScalarFieldEnum | CustomFieldScalarFieldEnum[]
  }

  /**
   * CustomField findMany
   */
  export type CustomFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * Filter, which CustomFields to fetch.
     */
    where?: CustomFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFields to fetch.
     */
    orderBy?: CustomFieldOrderByWithRelationInput | CustomFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomFields.
     */
    cursor?: CustomFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomFields.
     */
    distinct?: CustomFieldScalarFieldEnum | CustomFieldScalarFieldEnum[]
  }

  /**
   * CustomField create
   */
  export type CustomFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomField.
     */
    data: XOR<CustomFieldCreateInput, CustomFieldUncheckedCreateInput>
  }

  /**
   * CustomField createMany
   */
  export type CustomFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomFields.
     */
    data: CustomFieldCreateManyInput | CustomFieldCreateManyInput[]
  }

  /**
   * CustomField createManyAndReturn
   */
  export type CustomFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * The data used to create many CustomFields.
     */
    data: CustomFieldCreateManyInput | CustomFieldCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomField update
   */
  export type CustomFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomField.
     */
    data: XOR<CustomFieldUpdateInput, CustomFieldUncheckedUpdateInput>
    /**
     * Choose, which CustomField to update.
     */
    where: CustomFieldWhereUniqueInput
  }

  /**
   * CustomField updateMany
   */
  export type CustomFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomFields.
     */
    data: XOR<CustomFieldUpdateManyMutationInput, CustomFieldUncheckedUpdateManyInput>
    /**
     * Filter which CustomFields to update
     */
    where?: CustomFieldWhereInput
    /**
     * Limit how many CustomFields to update.
     */
    limit?: number
  }

  /**
   * CustomField updateManyAndReturn
   */
  export type CustomFieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * The data used to update CustomFields.
     */
    data: XOR<CustomFieldUpdateManyMutationInput, CustomFieldUncheckedUpdateManyInput>
    /**
     * Filter which CustomFields to update
     */
    where?: CustomFieldWhereInput
    /**
     * Limit how many CustomFields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomField upsert
   */
  export type CustomFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomField to update in case it exists.
     */
    where: CustomFieldWhereUniqueInput
    /**
     * In case the CustomField found by the `where` argument doesn't exist, create a new CustomField with this data.
     */
    create: XOR<CustomFieldCreateInput, CustomFieldUncheckedCreateInput>
    /**
     * In case the CustomField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomFieldUpdateInput, CustomFieldUncheckedUpdateInput>
  }

  /**
   * CustomField delete
   */
  export type CustomFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
    /**
     * Filter which CustomField to delete.
     */
    where: CustomFieldWhereUniqueInput
  }

  /**
   * CustomField deleteMany
   */
  export type CustomFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomFields to delete
     */
    where?: CustomFieldWhereInput
    /**
     * Limit how many CustomFields to delete.
     */
    limit?: number
  }

  /**
   * CustomField.values
   */
  export type CustomField$valuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    where?: CustomFieldValueWhereInput
    orderBy?: CustomFieldValueOrderByWithRelationInput | CustomFieldValueOrderByWithRelationInput[]
    cursor?: CustomFieldValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomFieldValueScalarFieldEnum | CustomFieldValueScalarFieldEnum[]
  }

  /**
   * CustomField without action
   */
  export type CustomFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomField
     */
    select?: CustomFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomField
     */
    omit?: CustomFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldInclude<ExtArgs> | null
  }


  /**
   * Model CustomFieldValue
   */

  export type AggregateCustomFieldValue = {
    _count: CustomFieldValueCountAggregateOutputType | null
    _min: CustomFieldValueMinAggregateOutputType | null
    _max: CustomFieldValueMaxAggregateOutputType | null
  }

  export type CustomFieldValueMinAggregateOutputType = {
    id: string | null
    nodeId: string | null
    fieldId: string | null
    value: string | null
  }

  export type CustomFieldValueMaxAggregateOutputType = {
    id: string | null
    nodeId: string | null
    fieldId: string | null
    value: string | null
  }

  export type CustomFieldValueCountAggregateOutputType = {
    id: number
    nodeId: number
    fieldId: number
    value: number
    _all: number
  }


  export type CustomFieldValueMinAggregateInputType = {
    id?: true
    nodeId?: true
    fieldId?: true
    value?: true
  }

  export type CustomFieldValueMaxAggregateInputType = {
    id?: true
    nodeId?: true
    fieldId?: true
    value?: true
  }

  export type CustomFieldValueCountAggregateInputType = {
    id?: true
    nodeId?: true
    fieldId?: true
    value?: true
    _all?: true
  }

  export type CustomFieldValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomFieldValue to aggregate.
     */
    where?: CustomFieldValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFieldValues to fetch.
     */
    orderBy?: CustomFieldValueOrderByWithRelationInput | CustomFieldValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomFieldValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFieldValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFieldValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomFieldValues
    **/
    _count?: true | CustomFieldValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomFieldValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomFieldValueMaxAggregateInputType
  }

  export type GetCustomFieldValueAggregateType<T extends CustomFieldValueAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomFieldValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomFieldValue[P]>
      : GetScalarType<T[P], AggregateCustomFieldValue[P]>
  }




  export type CustomFieldValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomFieldValueWhereInput
    orderBy?: CustomFieldValueOrderByWithAggregationInput | CustomFieldValueOrderByWithAggregationInput[]
    by: CustomFieldValueScalarFieldEnum[] | CustomFieldValueScalarFieldEnum
    having?: CustomFieldValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomFieldValueCountAggregateInputType | true
    _min?: CustomFieldValueMinAggregateInputType
    _max?: CustomFieldValueMaxAggregateInputType
  }

  export type CustomFieldValueGroupByOutputType = {
    id: string
    nodeId: string
    fieldId: string
    value: string
    _count: CustomFieldValueCountAggregateOutputType | null
    _min: CustomFieldValueMinAggregateOutputType | null
    _max: CustomFieldValueMaxAggregateOutputType | null
  }

  type GetCustomFieldValueGroupByPayload<T extends CustomFieldValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomFieldValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomFieldValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomFieldValueGroupByOutputType[P]>
            : GetScalarType<T[P], CustomFieldValueGroupByOutputType[P]>
        }
      >
    >


  export type CustomFieldValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nodeId?: boolean
    fieldId?: boolean
    value?: boolean
    node?: boolean | NodeDefaultArgs<ExtArgs>
    field?: boolean | CustomFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customFieldValue"]>

  export type CustomFieldValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nodeId?: boolean
    fieldId?: boolean
    value?: boolean
    node?: boolean | NodeDefaultArgs<ExtArgs>
    field?: boolean | CustomFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customFieldValue"]>

  export type CustomFieldValueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nodeId?: boolean
    fieldId?: boolean
    value?: boolean
    node?: boolean | NodeDefaultArgs<ExtArgs>
    field?: boolean | CustomFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customFieldValue"]>

  export type CustomFieldValueSelectScalar = {
    id?: boolean
    nodeId?: boolean
    fieldId?: boolean
    value?: boolean
  }

  export type CustomFieldValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nodeId" | "fieldId" | "value", ExtArgs["result"]["customFieldValue"]>
  export type CustomFieldValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    node?: boolean | NodeDefaultArgs<ExtArgs>
    field?: boolean | CustomFieldDefaultArgs<ExtArgs>
  }
  export type CustomFieldValueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    node?: boolean | NodeDefaultArgs<ExtArgs>
    field?: boolean | CustomFieldDefaultArgs<ExtArgs>
  }
  export type CustomFieldValueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    node?: boolean | NodeDefaultArgs<ExtArgs>
    field?: boolean | CustomFieldDefaultArgs<ExtArgs>
  }

  export type $CustomFieldValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomFieldValue"
    objects: {
      node: Prisma.$NodePayload<ExtArgs>
      field: Prisma.$CustomFieldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nodeId: string
      fieldId: string
      value: string
    }, ExtArgs["result"]["customFieldValue"]>
    composites: {}
  }

  type CustomFieldValueGetPayload<S extends boolean | null | undefined | CustomFieldValueDefaultArgs> = $Result.GetResult<Prisma.$CustomFieldValuePayload, S>

  type CustomFieldValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomFieldValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomFieldValueCountAggregateInputType | true
    }

  export interface CustomFieldValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomFieldValue'], meta: { name: 'CustomFieldValue' } }
    /**
     * Find zero or one CustomFieldValue that matches the filter.
     * @param {CustomFieldValueFindUniqueArgs} args - Arguments to find a CustomFieldValue
     * @example
     * // Get one CustomFieldValue
     * const customFieldValue = await prisma.customFieldValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomFieldValueFindUniqueArgs>(args: SelectSubset<T, CustomFieldValueFindUniqueArgs<ExtArgs>>): Prisma__CustomFieldValueClient<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomFieldValue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomFieldValueFindUniqueOrThrowArgs} args - Arguments to find a CustomFieldValue
     * @example
     * // Get one CustomFieldValue
     * const customFieldValue = await prisma.customFieldValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomFieldValueFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomFieldValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomFieldValueClient<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomFieldValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldValueFindFirstArgs} args - Arguments to find a CustomFieldValue
     * @example
     * // Get one CustomFieldValue
     * const customFieldValue = await prisma.customFieldValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomFieldValueFindFirstArgs>(args?: SelectSubset<T, CustomFieldValueFindFirstArgs<ExtArgs>>): Prisma__CustomFieldValueClient<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomFieldValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldValueFindFirstOrThrowArgs} args - Arguments to find a CustomFieldValue
     * @example
     * // Get one CustomFieldValue
     * const customFieldValue = await prisma.customFieldValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomFieldValueFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomFieldValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomFieldValueClient<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomFieldValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomFieldValues
     * const customFieldValues = await prisma.customFieldValue.findMany()
     * 
     * // Get first 10 CustomFieldValues
     * const customFieldValues = await prisma.customFieldValue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customFieldValueWithIdOnly = await prisma.customFieldValue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomFieldValueFindManyArgs>(args?: SelectSubset<T, CustomFieldValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomFieldValue.
     * @param {CustomFieldValueCreateArgs} args - Arguments to create a CustomFieldValue.
     * @example
     * // Create one CustomFieldValue
     * const CustomFieldValue = await prisma.customFieldValue.create({
     *   data: {
     *     // ... data to create a CustomFieldValue
     *   }
     * })
     * 
     */
    create<T extends CustomFieldValueCreateArgs>(args: SelectSubset<T, CustomFieldValueCreateArgs<ExtArgs>>): Prisma__CustomFieldValueClient<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomFieldValues.
     * @param {CustomFieldValueCreateManyArgs} args - Arguments to create many CustomFieldValues.
     * @example
     * // Create many CustomFieldValues
     * const customFieldValue = await prisma.customFieldValue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomFieldValueCreateManyArgs>(args?: SelectSubset<T, CustomFieldValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomFieldValues and returns the data saved in the database.
     * @param {CustomFieldValueCreateManyAndReturnArgs} args - Arguments to create many CustomFieldValues.
     * @example
     * // Create many CustomFieldValues
     * const customFieldValue = await prisma.customFieldValue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomFieldValues and only return the `id`
     * const customFieldValueWithIdOnly = await prisma.customFieldValue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomFieldValueCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomFieldValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomFieldValue.
     * @param {CustomFieldValueDeleteArgs} args - Arguments to delete one CustomFieldValue.
     * @example
     * // Delete one CustomFieldValue
     * const CustomFieldValue = await prisma.customFieldValue.delete({
     *   where: {
     *     // ... filter to delete one CustomFieldValue
     *   }
     * })
     * 
     */
    delete<T extends CustomFieldValueDeleteArgs>(args: SelectSubset<T, CustomFieldValueDeleteArgs<ExtArgs>>): Prisma__CustomFieldValueClient<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomFieldValue.
     * @param {CustomFieldValueUpdateArgs} args - Arguments to update one CustomFieldValue.
     * @example
     * // Update one CustomFieldValue
     * const customFieldValue = await prisma.customFieldValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomFieldValueUpdateArgs>(args: SelectSubset<T, CustomFieldValueUpdateArgs<ExtArgs>>): Prisma__CustomFieldValueClient<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomFieldValues.
     * @param {CustomFieldValueDeleteManyArgs} args - Arguments to filter CustomFieldValues to delete.
     * @example
     * // Delete a few CustomFieldValues
     * const { count } = await prisma.customFieldValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomFieldValueDeleteManyArgs>(args?: SelectSubset<T, CustomFieldValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomFieldValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomFieldValues
     * const customFieldValue = await prisma.customFieldValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomFieldValueUpdateManyArgs>(args: SelectSubset<T, CustomFieldValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomFieldValues and returns the data updated in the database.
     * @param {CustomFieldValueUpdateManyAndReturnArgs} args - Arguments to update many CustomFieldValues.
     * @example
     * // Update many CustomFieldValues
     * const customFieldValue = await prisma.customFieldValue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomFieldValues and only return the `id`
     * const customFieldValueWithIdOnly = await prisma.customFieldValue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomFieldValueUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomFieldValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomFieldValue.
     * @param {CustomFieldValueUpsertArgs} args - Arguments to update or create a CustomFieldValue.
     * @example
     * // Update or create a CustomFieldValue
     * const customFieldValue = await prisma.customFieldValue.upsert({
     *   create: {
     *     // ... data to create a CustomFieldValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomFieldValue we want to update
     *   }
     * })
     */
    upsert<T extends CustomFieldValueUpsertArgs>(args: SelectSubset<T, CustomFieldValueUpsertArgs<ExtArgs>>): Prisma__CustomFieldValueClient<$Result.GetResult<Prisma.$CustomFieldValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomFieldValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldValueCountArgs} args - Arguments to filter CustomFieldValues to count.
     * @example
     * // Count the number of CustomFieldValues
     * const count = await prisma.customFieldValue.count({
     *   where: {
     *     // ... the filter for the CustomFieldValues we want to count
     *   }
     * })
    **/
    count<T extends CustomFieldValueCountArgs>(
      args?: Subset<T, CustomFieldValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomFieldValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomFieldValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomFieldValueAggregateArgs>(args: Subset<T, CustomFieldValueAggregateArgs>): Prisma.PrismaPromise<GetCustomFieldValueAggregateType<T>>

    /**
     * Group by CustomFieldValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomFieldValueGroupByArgs} args - Group by arguments.
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
      T extends CustomFieldValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomFieldValueGroupByArgs['orderBy'] }
        : { orderBy?: CustomFieldValueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomFieldValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomFieldValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomFieldValue model
   */
  readonly fields: CustomFieldValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomFieldValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomFieldValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    node<T extends NodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NodeDefaultArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    field<T extends CustomFieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomFieldDefaultArgs<ExtArgs>>): Prisma__CustomFieldClient<$Result.GetResult<Prisma.$CustomFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CustomFieldValue model
   */
  interface CustomFieldValueFieldRefs {
    readonly id: FieldRef<"CustomFieldValue", 'String'>
    readonly nodeId: FieldRef<"CustomFieldValue", 'String'>
    readonly fieldId: FieldRef<"CustomFieldValue", 'String'>
    readonly value: FieldRef<"CustomFieldValue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CustomFieldValue findUnique
   */
  export type CustomFieldValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    /**
     * Filter, which CustomFieldValue to fetch.
     */
    where: CustomFieldValueWhereUniqueInput
  }

  /**
   * CustomFieldValue findUniqueOrThrow
   */
  export type CustomFieldValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    /**
     * Filter, which CustomFieldValue to fetch.
     */
    where: CustomFieldValueWhereUniqueInput
  }

  /**
   * CustomFieldValue findFirst
   */
  export type CustomFieldValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    /**
     * Filter, which CustomFieldValue to fetch.
     */
    where?: CustomFieldValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFieldValues to fetch.
     */
    orderBy?: CustomFieldValueOrderByWithRelationInput | CustomFieldValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomFieldValues.
     */
    cursor?: CustomFieldValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFieldValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFieldValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomFieldValues.
     */
    distinct?: CustomFieldValueScalarFieldEnum | CustomFieldValueScalarFieldEnum[]
  }

  /**
   * CustomFieldValue findFirstOrThrow
   */
  export type CustomFieldValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    /**
     * Filter, which CustomFieldValue to fetch.
     */
    where?: CustomFieldValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFieldValues to fetch.
     */
    orderBy?: CustomFieldValueOrderByWithRelationInput | CustomFieldValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomFieldValues.
     */
    cursor?: CustomFieldValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFieldValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFieldValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomFieldValues.
     */
    distinct?: CustomFieldValueScalarFieldEnum | CustomFieldValueScalarFieldEnum[]
  }

  /**
   * CustomFieldValue findMany
   */
  export type CustomFieldValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    /**
     * Filter, which CustomFieldValues to fetch.
     */
    where?: CustomFieldValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomFieldValues to fetch.
     */
    orderBy?: CustomFieldValueOrderByWithRelationInput | CustomFieldValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomFieldValues.
     */
    cursor?: CustomFieldValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomFieldValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomFieldValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomFieldValues.
     */
    distinct?: CustomFieldValueScalarFieldEnum | CustomFieldValueScalarFieldEnum[]
  }

  /**
   * CustomFieldValue create
   */
  export type CustomFieldValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomFieldValue.
     */
    data: XOR<CustomFieldValueCreateInput, CustomFieldValueUncheckedCreateInput>
  }

  /**
   * CustomFieldValue createMany
   */
  export type CustomFieldValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomFieldValues.
     */
    data: CustomFieldValueCreateManyInput | CustomFieldValueCreateManyInput[]
  }

  /**
   * CustomFieldValue createManyAndReturn
   */
  export type CustomFieldValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * The data used to create many CustomFieldValues.
     */
    data: CustomFieldValueCreateManyInput | CustomFieldValueCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomFieldValue update
   */
  export type CustomFieldValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomFieldValue.
     */
    data: XOR<CustomFieldValueUpdateInput, CustomFieldValueUncheckedUpdateInput>
    /**
     * Choose, which CustomFieldValue to update.
     */
    where: CustomFieldValueWhereUniqueInput
  }

  /**
   * CustomFieldValue updateMany
   */
  export type CustomFieldValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomFieldValues.
     */
    data: XOR<CustomFieldValueUpdateManyMutationInput, CustomFieldValueUncheckedUpdateManyInput>
    /**
     * Filter which CustomFieldValues to update
     */
    where?: CustomFieldValueWhereInput
    /**
     * Limit how many CustomFieldValues to update.
     */
    limit?: number
  }

  /**
   * CustomFieldValue updateManyAndReturn
   */
  export type CustomFieldValueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * The data used to update CustomFieldValues.
     */
    data: XOR<CustomFieldValueUpdateManyMutationInput, CustomFieldValueUncheckedUpdateManyInput>
    /**
     * Filter which CustomFieldValues to update
     */
    where?: CustomFieldValueWhereInput
    /**
     * Limit how many CustomFieldValues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomFieldValue upsert
   */
  export type CustomFieldValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomFieldValue to update in case it exists.
     */
    where: CustomFieldValueWhereUniqueInput
    /**
     * In case the CustomFieldValue found by the `where` argument doesn't exist, create a new CustomFieldValue with this data.
     */
    create: XOR<CustomFieldValueCreateInput, CustomFieldValueUncheckedCreateInput>
    /**
     * In case the CustomFieldValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomFieldValueUpdateInput, CustomFieldValueUncheckedUpdateInput>
  }

  /**
   * CustomFieldValue delete
   */
  export type CustomFieldValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
    /**
     * Filter which CustomFieldValue to delete.
     */
    where: CustomFieldValueWhereUniqueInput
  }

  /**
   * CustomFieldValue deleteMany
   */
  export type CustomFieldValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomFieldValues to delete
     */
    where?: CustomFieldValueWhereInput
    /**
     * Limit how many CustomFieldValues to delete.
     */
    limit?: number
  }

  /**
   * CustomFieldValue without action
   */
  export type CustomFieldValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomFieldValue
     */
    select?: CustomFieldValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomFieldValue
     */
    omit?: CustomFieldValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomFieldValueInclude<ExtArgs> | null
  }


  /**
   * Model CustomKinshipTerm
   */

  export type AggregateCustomKinshipTerm = {
    _count: CustomKinshipTermCountAggregateOutputType | null
    _min: CustomKinshipTermMinAggregateOutputType | null
    _max: CustomKinshipTermMaxAggregateOutputType | null
  }

  export type CustomKinshipTermMinAggregateOutputType = {
    id: string | null
    treeId: string | null
    pathKey: string | null
    term: string | null
  }

  export type CustomKinshipTermMaxAggregateOutputType = {
    id: string | null
    treeId: string | null
    pathKey: string | null
    term: string | null
  }

  export type CustomKinshipTermCountAggregateOutputType = {
    id: number
    treeId: number
    pathKey: number
    term: number
    _all: number
  }


  export type CustomKinshipTermMinAggregateInputType = {
    id?: true
    treeId?: true
    pathKey?: true
    term?: true
  }

  export type CustomKinshipTermMaxAggregateInputType = {
    id?: true
    treeId?: true
    pathKey?: true
    term?: true
  }

  export type CustomKinshipTermCountAggregateInputType = {
    id?: true
    treeId?: true
    pathKey?: true
    term?: true
    _all?: true
  }

  export type CustomKinshipTermAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomKinshipTerm to aggregate.
     */
    where?: CustomKinshipTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomKinshipTerms to fetch.
     */
    orderBy?: CustomKinshipTermOrderByWithRelationInput | CustomKinshipTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomKinshipTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomKinshipTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomKinshipTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomKinshipTerms
    **/
    _count?: true | CustomKinshipTermCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomKinshipTermMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomKinshipTermMaxAggregateInputType
  }

  export type GetCustomKinshipTermAggregateType<T extends CustomKinshipTermAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomKinshipTerm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomKinshipTerm[P]>
      : GetScalarType<T[P], AggregateCustomKinshipTerm[P]>
  }




  export type CustomKinshipTermGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomKinshipTermWhereInput
    orderBy?: CustomKinshipTermOrderByWithAggregationInput | CustomKinshipTermOrderByWithAggregationInput[]
    by: CustomKinshipTermScalarFieldEnum[] | CustomKinshipTermScalarFieldEnum
    having?: CustomKinshipTermScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomKinshipTermCountAggregateInputType | true
    _min?: CustomKinshipTermMinAggregateInputType
    _max?: CustomKinshipTermMaxAggregateInputType
  }

  export type CustomKinshipTermGroupByOutputType = {
    id: string
    treeId: string
    pathKey: string
    term: string
    _count: CustomKinshipTermCountAggregateOutputType | null
    _min: CustomKinshipTermMinAggregateOutputType | null
    _max: CustomKinshipTermMaxAggregateOutputType | null
  }

  type GetCustomKinshipTermGroupByPayload<T extends CustomKinshipTermGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomKinshipTermGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomKinshipTermGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomKinshipTermGroupByOutputType[P]>
            : GetScalarType<T[P], CustomKinshipTermGroupByOutputType[P]>
        }
      >
    >


  export type CustomKinshipTermSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treeId?: boolean
    pathKey?: boolean
    term?: boolean
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customKinshipTerm"]>

  export type CustomKinshipTermSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treeId?: boolean
    pathKey?: boolean
    term?: boolean
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customKinshipTerm"]>

  export type CustomKinshipTermSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treeId?: boolean
    pathKey?: boolean
    term?: boolean
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customKinshipTerm"]>

  export type CustomKinshipTermSelectScalar = {
    id?: boolean
    treeId?: boolean
    pathKey?: boolean
    term?: boolean
  }

  export type CustomKinshipTermOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "treeId" | "pathKey" | "term", ExtArgs["result"]["customKinshipTerm"]>
  export type CustomKinshipTermInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }
  export type CustomKinshipTermIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }
  export type CustomKinshipTermIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tree?: boolean | TreeDefaultArgs<ExtArgs>
  }

  export type $CustomKinshipTermPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomKinshipTerm"
    objects: {
      tree: Prisma.$TreePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      treeId: string
      pathKey: string
      term: string
    }, ExtArgs["result"]["customKinshipTerm"]>
    composites: {}
  }

  type CustomKinshipTermGetPayload<S extends boolean | null | undefined | CustomKinshipTermDefaultArgs> = $Result.GetResult<Prisma.$CustomKinshipTermPayload, S>

  type CustomKinshipTermCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomKinshipTermFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomKinshipTermCountAggregateInputType | true
    }

  export interface CustomKinshipTermDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomKinshipTerm'], meta: { name: 'CustomKinshipTerm' } }
    /**
     * Find zero or one CustomKinshipTerm that matches the filter.
     * @param {CustomKinshipTermFindUniqueArgs} args - Arguments to find a CustomKinshipTerm
     * @example
     * // Get one CustomKinshipTerm
     * const customKinshipTerm = await prisma.customKinshipTerm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomKinshipTermFindUniqueArgs>(args: SelectSubset<T, CustomKinshipTermFindUniqueArgs<ExtArgs>>): Prisma__CustomKinshipTermClient<$Result.GetResult<Prisma.$CustomKinshipTermPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomKinshipTerm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomKinshipTermFindUniqueOrThrowArgs} args - Arguments to find a CustomKinshipTerm
     * @example
     * // Get one CustomKinshipTerm
     * const customKinshipTerm = await prisma.customKinshipTerm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomKinshipTermFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomKinshipTermFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomKinshipTermClient<$Result.GetResult<Prisma.$CustomKinshipTermPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomKinshipTerm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomKinshipTermFindFirstArgs} args - Arguments to find a CustomKinshipTerm
     * @example
     * // Get one CustomKinshipTerm
     * const customKinshipTerm = await prisma.customKinshipTerm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomKinshipTermFindFirstArgs>(args?: SelectSubset<T, CustomKinshipTermFindFirstArgs<ExtArgs>>): Prisma__CustomKinshipTermClient<$Result.GetResult<Prisma.$CustomKinshipTermPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomKinshipTerm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomKinshipTermFindFirstOrThrowArgs} args - Arguments to find a CustomKinshipTerm
     * @example
     * // Get one CustomKinshipTerm
     * const customKinshipTerm = await prisma.customKinshipTerm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomKinshipTermFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomKinshipTermFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomKinshipTermClient<$Result.GetResult<Prisma.$CustomKinshipTermPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomKinshipTerms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomKinshipTermFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomKinshipTerms
     * const customKinshipTerms = await prisma.customKinshipTerm.findMany()
     * 
     * // Get first 10 CustomKinshipTerms
     * const customKinshipTerms = await prisma.customKinshipTerm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customKinshipTermWithIdOnly = await prisma.customKinshipTerm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomKinshipTermFindManyArgs>(args?: SelectSubset<T, CustomKinshipTermFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomKinshipTermPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomKinshipTerm.
     * @param {CustomKinshipTermCreateArgs} args - Arguments to create a CustomKinshipTerm.
     * @example
     * // Create one CustomKinshipTerm
     * const CustomKinshipTerm = await prisma.customKinshipTerm.create({
     *   data: {
     *     // ... data to create a CustomKinshipTerm
     *   }
     * })
     * 
     */
    create<T extends CustomKinshipTermCreateArgs>(args: SelectSubset<T, CustomKinshipTermCreateArgs<ExtArgs>>): Prisma__CustomKinshipTermClient<$Result.GetResult<Prisma.$CustomKinshipTermPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomKinshipTerms.
     * @param {CustomKinshipTermCreateManyArgs} args - Arguments to create many CustomKinshipTerms.
     * @example
     * // Create many CustomKinshipTerms
     * const customKinshipTerm = await prisma.customKinshipTerm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomKinshipTermCreateManyArgs>(args?: SelectSubset<T, CustomKinshipTermCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomKinshipTerms and returns the data saved in the database.
     * @param {CustomKinshipTermCreateManyAndReturnArgs} args - Arguments to create many CustomKinshipTerms.
     * @example
     * // Create many CustomKinshipTerms
     * const customKinshipTerm = await prisma.customKinshipTerm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomKinshipTerms and only return the `id`
     * const customKinshipTermWithIdOnly = await prisma.customKinshipTerm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomKinshipTermCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomKinshipTermCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomKinshipTermPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomKinshipTerm.
     * @param {CustomKinshipTermDeleteArgs} args - Arguments to delete one CustomKinshipTerm.
     * @example
     * // Delete one CustomKinshipTerm
     * const CustomKinshipTerm = await prisma.customKinshipTerm.delete({
     *   where: {
     *     // ... filter to delete one CustomKinshipTerm
     *   }
     * })
     * 
     */
    delete<T extends CustomKinshipTermDeleteArgs>(args: SelectSubset<T, CustomKinshipTermDeleteArgs<ExtArgs>>): Prisma__CustomKinshipTermClient<$Result.GetResult<Prisma.$CustomKinshipTermPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomKinshipTerm.
     * @param {CustomKinshipTermUpdateArgs} args - Arguments to update one CustomKinshipTerm.
     * @example
     * // Update one CustomKinshipTerm
     * const customKinshipTerm = await prisma.customKinshipTerm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomKinshipTermUpdateArgs>(args: SelectSubset<T, CustomKinshipTermUpdateArgs<ExtArgs>>): Prisma__CustomKinshipTermClient<$Result.GetResult<Prisma.$CustomKinshipTermPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomKinshipTerms.
     * @param {CustomKinshipTermDeleteManyArgs} args - Arguments to filter CustomKinshipTerms to delete.
     * @example
     * // Delete a few CustomKinshipTerms
     * const { count } = await prisma.customKinshipTerm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomKinshipTermDeleteManyArgs>(args?: SelectSubset<T, CustomKinshipTermDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomKinshipTerms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomKinshipTermUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomKinshipTerms
     * const customKinshipTerm = await prisma.customKinshipTerm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomKinshipTermUpdateManyArgs>(args: SelectSubset<T, CustomKinshipTermUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomKinshipTerms and returns the data updated in the database.
     * @param {CustomKinshipTermUpdateManyAndReturnArgs} args - Arguments to update many CustomKinshipTerms.
     * @example
     * // Update many CustomKinshipTerms
     * const customKinshipTerm = await prisma.customKinshipTerm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomKinshipTerms and only return the `id`
     * const customKinshipTermWithIdOnly = await prisma.customKinshipTerm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomKinshipTermUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomKinshipTermUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomKinshipTermPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomKinshipTerm.
     * @param {CustomKinshipTermUpsertArgs} args - Arguments to update or create a CustomKinshipTerm.
     * @example
     * // Update or create a CustomKinshipTerm
     * const customKinshipTerm = await prisma.customKinshipTerm.upsert({
     *   create: {
     *     // ... data to create a CustomKinshipTerm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomKinshipTerm we want to update
     *   }
     * })
     */
    upsert<T extends CustomKinshipTermUpsertArgs>(args: SelectSubset<T, CustomKinshipTermUpsertArgs<ExtArgs>>): Prisma__CustomKinshipTermClient<$Result.GetResult<Prisma.$CustomKinshipTermPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomKinshipTerms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomKinshipTermCountArgs} args - Arguments to filter CustomKinshipTerms to count.
     * @example
     * // Count the number of CustomKinshipTerms
     * const count = await prisma.customKinshipTerm.count({
     *   where: {
     *     // ... the filter for the CustomKinshipTerms we want to count
     *   }
     * })
    **/
    count<T extends CustomKinshipTermCountArgs>(
      args?: Subset<T, CustomKinshipTermCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomKinshipTermCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomKinshipTerm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomKinshipTermAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomKinshipTermAggregateArgs>(args: Subset<T, CustomKinshipTermAggregateArgs>): Prisma.PrismaPromise<GetCustomKinshipTermAggregateType<T>>

    /**
     * Group by CustomKinshipTerm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomKinshipTermGroupByArgs} args - Group by arguments.
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
      T extends CustomKinshipTermGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomKinshipTermGroupByArgs['orderBy'] }
        : { orderBy?: CustomKinshipTermGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomKinshipTermGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomKinshipTermGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomKinshipTerm model
   */
  readonly fields: CustomKinshipTermFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomKinshipTerm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomKinshipTermClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tree<T extends TreeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TreeDefaultArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CustomKinshipTerm model
   */
  interface CustomKinshipTermFieldRefs {
    readonly id: FieldRef<"CustomKinshipTerm", 'String'>
    readonly treeId: FieldRef<"CustomKinshipTerm", 'String'>
    readonly pathKey: FieldRef<"CustomKinshipTerm", 'String'>
    readonly term: FieldRef<"CustomKinshipTerm", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CustomKinshipTerm findUnique
   */
  export type CustomKinshipTermFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomKinshipTerm
     */
    select?: CustomKinshipTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomKinshipTerm
     */
    omit?: CustomKinshipTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomKinshipTermInclude<ExtArgs> | null
    /**
     * Filter, which CustomKinshipTerm to fetch.
     */
    where: CustomKinshipTermWhereUniqueInput
  }

  /**
   * CustomKinshipTerm findUniqueOrThrow
   */
  export type CustomKinshipTermFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomKinshipTerm
     */
    select?: CustomKinshipTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomKinshipTerm
     */
    omit?: CustomKinshipTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomKinshipTermInclude<ExtArgs> | null
    /**
     * Filter, which CustomKinshipTerm to fetch.
     */
    where: CustomKinshipTermWhereUniqueInput
  }

  /**
   * CustomKinshipTerm findFirst
   */
  export type CustomKinshipTermFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomKinshipTerm
     */
    select?: CustomKinshipTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomKinshipTerm
     */
    omit?: CustomKinshipTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomKinshipTermInclude<ExtArgs> | null
    /**
     * Filter, which CustomKinshipTerm to fetch.
     */
    where?: CustomKinshipTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomKinshipTerms to fetch.
     */
    orderBy?: CustomKinshipTermOrderByWithRelationInput | CustomKinshipTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomKinshipTerms.
     */
    cursor?: CustomKinshipTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomKinshipTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomKinshipTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomKinshipTerms.
     */
    distinct?: CustomKinshipTermScalarFieldEnum | CustomKinshipTermScalarFieldEnum[]
  }

  /**
   * CustomKinshipTerm findFirstOrThrow
   */
  export type CustomKinshipTermFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomKinshipTerm
     */
    select?: CustomKinshipTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomKinshipTerm
     */
    omit?: CustomKinshipTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomKinshipTermInclude<ExtArgs> | null
    /**
     * Filter, which CustomKinshipTerm to fetch.
     */
    where?: CustomKinshipTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomKinshipTerms to fetch.
     */
    orderBy?: CustomKinshipTermOrderByWithRelationInput | CustomKinshipTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomKinshipTerms.
     */
    cursor?: CustomKinshipTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomKinshipTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomKinshipTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomKinshipTerms.
     */
    distinct?: CustomKinshipTermScalarFieldEnum | CustomKinshipTermScalarFieldEnum[]
  }

  /**
   * CustomKinshipTerm findMany
   */
  export type CustomKinshipTermFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomKinshipTerm
     */
    select?: CustomKinshipTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomKinshipTerm
     */
    omit?: CustomKinshipTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomKinshipTermInclude<ExtArgs> | null
    /**
     * Filter, which CustomKinshipTerms to fetch.
     */
    where?: CustomKinshipTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomKinshipTerms to fetch.
     */
    orderBy?: CustomKinshipTermOrderByWithRelationInput | CustomKinshipTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomKinshipTerms.
     */
    cursor?: CustomKinshipTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomKinshipTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomKinshipTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomKinshipTerms.
     */
    distinct?: CustomKinshipTermScalarFieldEnum | CustomKinshipTermScalarFieldEnum[]
  }

  /**
   * CustomKinshipTerm create
   */
  export type CustomKinshipTermCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomKinshipTerm
     */
    select?: CustomKinshipTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomKinshipTerm
     */
    omit?: CustomKinshipTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomKinshipTermInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomKinshipTerm.
     */
    data: XOR<CustomKinshipTermCreateInput, CustomKinshipTermUncheckedCreateInput>
  }

  /**
   * CustomKinshipTerm createMany
   */
  export type CustomKinshipTermCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomKinshipTerms.
     */
    data: CustomKinshipTermCreateManyInput | CustomKinshipTermCreateManyInput[]
  }

  /**
   * CustomKinshipTerm createManyAndReturn
   */
  export type CustomKinshipTermCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomKinshipTerm
     */
    select?: CustomKinshipTermSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomKinshipTerm
     */
    omit?: CustomKinshipTermOmit<ExtArgs> | null
    /**
     * The data used to create many CustomKinshipTerms.
     */
    data: CustomKinshipTermCreateManyInput | CustomKinshipTermCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomKinshipTermIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomKinshipTerm update
   */
  export type CustomKinshipTermUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomKinshipTerm
     */
    select?: CustomKinshipTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomKinshipTerm
     */
    omit?: CustomKinshipTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomKinshipTermInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomKinshipTerm.
     */
    data: XOR<CustomKinshipTermUpdateInput, CustomKinshipTermUncheckedUpdateInput>
    /**
     * Choose, which CustomKinshipTerm to update.
     */
    where: CustomKinshipTermWhereUniqueInput
  }

  /**
   * CustomKinshipTerm updateMany
   */
  export type CustomKinshipTermUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomKinshipTerms.
     */
    data: XOR<CustomKinshipTermUpdateManyMutationInput, CustomKinshipTermUncheckedUpdateManyInput>
    /**
     * Filter which CustomKinshipTerms to update
     */
    where?: CustomKinshipTermWhereInput
    /**
     * Limit how many CustomKinshipTerms to update.
     */
    limit?: number
  }

  /**
   * CustomKinshipTerm updateManyAndReturn
   */
  export type CustomKinshipTermUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomKinshipTerm
     */
    select?: CustomKinshipTermSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomKinshipTerm
     */
    omit?: CustomKinshipTermOmit<ExtArgs> | null
    /**
     * The data used to update CustomKinshipTerms.
     */
    data: XOR<CustomKinshipTermUpdateManyMutationInput, CustomKinshipTermUncheckedUpdateManyInput>
    /**
     * Filter which CustomKinshipTerms to update
     */
    where?: CustomKinshipTermWhereInput
    /**
     * Limit how many CustomKinshipTerms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomKinshipTermIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomKinshipTerm upsert
   */
  export type CustomKinshipTermUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomKinshipTerm
     */
    select?: CustomKinshipTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomKinshipTerm
     */
    omit?: CustomKinshipTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomKinshipTermInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomKinshipTerm to update in case it exists.
     */
    where: CustomKinshipTermWhereUniqueInput
    /**
     * In case the CustomKinshipTerm found by the `where` argument doesn't exist, create a new CustomKinshipTerm with this data.
     */
    create: XOR<CustomKinshipTermCreateInput, CustomKinshipTermUncheckedCreateInput>
    /**
     * In case the CustomKinshipTerm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomKinshipTermUpdateInput, CustomKinshipTermUncheckedUpdateInput>
  }

  /**
   * CustomKinshipTerm delete
   */
  export type CustomKinshipTermDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomKinshipTerm
     */
    select?: CustomKinshipTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomKinshipTerm
     */
    omit?: CustomKinshipTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomKinshipTermInclude<ExtArgs> | null
    /**
     * Filter which CustomKinshipTerm to delete.
     */
    where: CustomKinshipTermWhereUniqueInput
  }

  /**
   * CustomKinshipTerm deleteMany
   */
  export type CustomKinshipTermDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomKinshipTerms to delete
     */
    where?: CustomKinshipTermWhereInput
    /**
     * Limit how many CustomKinshipTerms to delete.
     */
    limit?: number
  }

  /**
   * CustomKinshipTerm without action
   */
  export type CustomKinshipTermDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomKinshipTerm
     */
    select?: CustomKinshipTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomKinshipTerm
     */
    omit?: CustomKinshipTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomKinshipTermInclude<ExtArgs> | null
  }


  /**
   * Model Edge
   */

  export type AggregateEdge = {
    _count: EdgeCountAggregateOutputType | null
    _avg: EdgeAvgAggregateOutputType | null
    _sum: EdgeSumAggregateOutputType | null
    _min: EdgeMinAggregateOutputType | null
    _max: EdgeMaxAggregateOutputType | null
  }

  export type EdgeAvgAggregateOutputType = {
    order: number | null
  }

  export type EdgeSumAggregateOutputType = {
    order: number | null
  }

  export type EdgeMinAggregateOutputType = {
    id: string | null
    sourceId: string | null
    targetId: string | null
    type: string | null
    order: number | null
    metadata: string | null
  }

  export type EdgeMaxAggregateOutputType = {
    id: string | null
    sourceId: string | null
    targetId: string | null
    type: string | null
    order: number | null
    metadata: string | null
  }

  export type EdgeCountAggregateOutputType = {
    id: number
    sourceId: number
    targetId: number
    type: number
    order: number
    metadata: number
    _all: number
  }


  export type EdgeAvgAggregateInputType = {
    order?: true
  }

  export type EdgeSumAggregateInputType = {
    order?: true
  }

  export type EdgeMinAggregateInputType = {
    id?: true
    sourceId?: true
    targetId?: true
    type?: true
    order?: true
    metadata?: true
  }

  export type EdgeMaxAggregateInputType = {
    id?: true
    sourceId?: true
    targetId?: true
    type?: true
    order?: true
    metadata?: true
  }

  export type EdgeCountAggregateInputType = {
    id?: true
    sourceId?: true
    targetId?: true
    type?: true
    order?: true
    metadata?: true
    _all?: true
  }

  export type EdgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Edge to aggregate.
     */
    where?: EdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edges to fetch.
     */
    orderBy?: EdgeOrderByWithRelationInput | EdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Edges
    **/
    _count?: true | EdgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EdgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EdgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EdgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EdgeMaxAggregateInputType
  }

  export type GetEdgeAggregateType<T extends EdgeAggregateArgs> = {
        [P in keyof T & keyof AggregateEdge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEdge[P]>
      : GetScalarType<T[P], AggregateEdge[P]>
  }




  export type EdgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EdgeWhereInput
    orderBy?: EdgeOrderByWithAggregationInput | EdgeOrderByWithAggregationInput[]
    by: EdgeScalarFieldEnum[] | EdgeScalarFieldEnum
    having?: EdgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EdgeCountAggregateInputType | true
    _avg?: EdgeAvgAggregateInputType
    _sum?: EdgeSumAggregateInputType
    _min?: EdgeMinAggregateInputType
    _max?: EdgeMaxAggregateInputType
  }

  export type EdgeGroupByOutputType = {
    id: string
    sourceId: string
    targetId: string
    type: string
    order: number | null
    metadata: string | null
    _count: EdgeCountAggregateOutputType | null
    _avg: EdgeAvgAggregateOutputType | null
    _sum: EdgeSumAggregateOutputType | null
    _min: EdgeMinAggregateOutputType | null
    _max: EdgeMaxAggregateOutputType | null
  }

  type GetEdgeGroupByPayload<T extends EdgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EdgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EdgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EdgeGroupByOutputType[P]>
            : GetScalarType<T[P], EdgeGroupByOutputType[P]>
        }
      >
    >


  export type EdgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceId?: boolean
    targetId?: boolean
    type?: boolean
    order?: boolean
    metadata?: boolean
    source?: boolean | NodeDefaultArgs<ExtArgs>
    target?: boolean | NodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["edge"]>

  export type EdgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceId?: boolean
    targetId?: boolean
    type?: boolean
    order?: boolean
    metadata?: boolean
    source?: boolean | NodeDefaultArgs<ExtArgs>
    target?: boolean | NodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["edge"]>

  export type EdgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceId?: boolean
    targetId?: boolean
    type?: boolean
    order?: boolean
    metadata?: boolean
    source?: boolean | NodeDefaultArgs<ExtArgs>
    target?: boolean | NodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["edge"]>

  export type EdgeSelectScalar = {
    id?: boolean
    sourceId?: boolean
    targetId?: boolean
    type?: boolean
    order?: boolean
    metadata?: boolean
  }

  export type EdgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceId" | "targetId" | "type" | "order" | "metadata", ExtArgs["result"]["edge"]>
  export type EdgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    source?: boolean | NodeDefaultArgs<ExtArgs>
    target?: boolean | NodeDefaultArgs<ExtArgs>
  }
  export type EdgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    source?: boolean | NodeDefaultArgs<ExtArgs>
    target?: boolean | NodeDefaultArgs<ExtArgs>
  }
  export type EdgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    source?: boolean | NodeDefaultArgs<ExtArgs>
    target?: boolean | NodeDefaultArgs<ExtArgs>
  }

  export type $EdgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Edge"
    objects: {
      source: Prisma.$NodePayload<ExtArgs>
      target: Prisma.$NodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceId: string
      targetId: string
      type: string
      order: number | null
      metadata: string | null
    }, ExtArgs["result"]["edge"]>
    composites: {}
  }

  type EdgeGetPayload<S extends boolean | null | undefined | EdgeDefaultArgs> = $Result.GetResult<Prisma.$EdgePayload, S>

  type EdgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EdgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EdgeCountAggregateInputType | true
    }

  export interface EdgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Edge'], meta: { name: 'Edge' } }
    /**
     * Find zero or one Edge that matches the filter.
     * @param {EdgeFindUniqueArgs} args - Arguments to find a Edge
     * @example
     * // Get one Edge
     * const edge = await prisma.edge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EdgeFindUniqueArgs>(args: SelectSubset<T, EdgeFindUniqueArgs<ExtArgs>>): Prisma__EdgeClient<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Edge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EdgeFindUniqueOrThrowArgs} args - Arguments to find a Edge
     * @example
     * // Get one Edge
     * const edge = await prisma.edge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EdgeFindUniqueOrThrowArgs>(args: SelectSubset<T, EdgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EdgeClient<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Edge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeFindFirstArgs} args - Arguments to find a Edge
     * @example
     * // Get one Edge
     * const edge = await prisma.edge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EdgeFindFirstArgs>(args?: SelectSubset<T, EdgeFindFirstArgs<ExtArgs>>): Prisma__EdgeClient<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Edge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeFindFirstOrThrowArgs} args - Arguments to find a Edge
     * @example
     * // Get one Edge
     * const edge = await prisma.edge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EdgeFindFirstOrThrowArgs>(args?: SelectSubset<T, EdgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EdgeClient<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Edges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Edges
     * const edges = await prisma.edge.findMany()
     * 
     * // Get first 10 Edges
     * const edges = await prisma.edge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const edgeWithIdOnly = await prisma.edge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EdgeFindManyArgs>(args?: SelectSubset<T, EdgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Edge.
     * @param {EdgeCreateArgs} args - Arguments to create a Edge.
     * @example
     * // Create one Edge
     * const Edge = await prisma.edge.create({
     *   data: {
     *     // ... data to create a Edge
     *   }
     * })
     * 
     */
    create<T extends EdgeCreateArgs>(args: SelectSubset<T, EdgeCreateArgs<ExtArgs>>): Prisma__EdgeClient<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Edges.
     * @param {EdgeCreateManyArgs} args - Arguments to create many Edges.
     * @example
     * // Create many Edges
     * const edge = await prisma.edge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EdgeCreateManyArgs>(args?: SelectSubset<T, EdgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Edges and returns the data saved in the database.
     * @param {EdgeCreateManyAndReturnArgs} args - Arguments to create many Edges.
     * @example
     * // Create many Edges
     * const edge = await prisma.edge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Edges and only return the `id`
     * const edgeWithIdOnly = await prisma.edge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EdgeCreateManyAndReturnArgs>(args?: SelectSubset<T, EdgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Edge.
     * @param {EdgeDeleteArgs} args - Arguments to delete one Edge.
     * @example
     * // Delete one Edge
     * const Edge = await prisma.edge.delete({
     *   where: {
     *     // ... filter to delete one Edge
     *   }
     * })
     * 
     */
    delete<T extends EdgeDeleteArgs>(args: SelectSubset<T, EdgeDeleteArgs<ExtArgs>>): Prisma__EdgeClient<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Edge.
     * @param {EdgeUpdateArgs} args - Arguments to update one Edge.
     * @example
     * // Update one Edge
     * const edge = await prisma.edge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EdgeUpdateArgs>(args: SelectSubset<T, EdgeUpdateArgs<ExtArgs>>): Prisma__EdgeClient<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Edges.
     * @param {EdgeDeleteManyArgs} args - Arguments to filter Edges to delete.
     * @example
     * // Delete a few Edges
     * const { count } = await prisma.edge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EdgeDeleteManyArgs>(args?: SelectSubset<T, EdgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Edges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Edges
     * const edge = await prisma.edge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EdgeUpdateManyArgs>(args: SelectSubset<T, EdgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Edges and returns the data updated in the database.
     * @param {EdgeUpdateManyAndReturnArgs} args - Arguments to update many Edges.
     * @example
     * // Update many Edges
     * const edge = await prisma.edge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Edges and only return the `id`
     * const edgeWithIdOnly = await prisma.edge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EdgeUpdateManyAndReturnArgs>(args: SelectSubset<T, EdgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Edge.
     * @param {EdgeUpsertArgs} args - Arguments to update or create a Edge.
     * @example
     * // Update or create a Edge
     * const edge = await prisma.edge.upsert({
     *   create: {
     *     // ... data to create a Edge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Edge we want to update
     *   }
     * })
     */
    upsert<T extends EdgeUpsertArgs>(args: SelectSubset<T, EdgeUpsertArgs<ExtArgs>>): Prisma__EdgeClient<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Edges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeCountArgs} args - Arguments to filter Edges to count.
     * @example
     * // Count the number of Edges
     * const count = await prisma.edge.count({
     *   where: {
     *     // ... the filter for the Edges we want to count
     *   }
     * })
    **/
    count<T extends EdgeCountArgs>(
      args?: Subset<T, EdgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EdgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Edge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EdgeAggregateArgs>(args: Subset<T, EdgeAggregateArgs>): Prisma.PrismaPromise<GetEdgeAggregateType<T>>

    /**
     * Group by Edge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeGroupByArgs} args - Group by arguments.
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
      T extends EdgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EdgeGroupByArgs['orderBy'] }
        : { orderBy?: EdgeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EdgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEdgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Edge model
   */
  readonly fields: EdgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Edge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EdgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    source<T extends NodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NodeDefaultArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    target<T extends NodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NodeDefaultArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Edge model
   */
  interface EdgeFieldRefs {
    readonly id: FieldRef<"Edge", 'String'>
    readonly sourceId: FieldRef<"Edge", 'String'>
    readonly targetId: FieldRef<"Edge", 'String'>
    readonly type: FieldRef<"Edge", 'String'>
    readonly order: FieldRef<"Edge", 'Int'>
    readonly metadata: FieldRef<"Edge", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Edge findUnique
   */
  export type EdgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    /**
     * Filter, which Edge to fetch.
     */
    where: EdgeWhereUniqueInput
  }

  /**
   * Edge findUniqueOrThrow
   */
  export type EdgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    /**
     * Filter, which Edge to fetch.
     */
    where: EdgeWhereUniqueInput
  }

  /**
   * Edge findFirst
   */
  export type EdgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    /**
     * Filter, which Edge to fetch.
     */
    where?: EdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edges to fetch.
     */
    orderBy?: EdgeOrderByWithRelationInput | EdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Edges.
     */
    cursor?: EdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Edges.
     */
    distinct?: EdgeScalarFieldEnum | EdgeScalarFieldEnum[]
  }

  /**
   * Edge findFirstOrThrow
   */
  export type EdgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    /**
     * Filter, which Edge to fetch.
     */
    where?: EdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edges to fetch.
     */
    orderBy?: EdgeOrderByWithRelationInput | EdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Edges.
     */
    cursor?: EdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Edges.
     */
    distinct?: EdgeScalarFieldEnum | EdgeScalarFieldEnum[]
  }

  /**
   * Edge findMany
   */
  export type EdgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    /**
     * Filter, which Edges to fetch.
     */
    where?: EdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edges to fetch.
     */
    orderBy?: EdgeOrderByWithRelationInput | EdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Edges.
     */
    cursor?: EdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Edges.
     */
    distinct?: EdgeScalarFieldEnum | EdgeScalarFieldEnum[]
  }

  /**
   * Edge create
   */
  export type EdgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Edge.
     */
    data: XOR<EdgeCreateInput, EdgeUncheckedCreateInput>
  }

  /**
   * Edge createMany
   */
  export type EdgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Edges.
     */
    data: EdgeCreateManyInput | EdgeCreateManyInput[]
  }

  /**
   * Edge createManyAndReturn
   */
  export type EdgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * The data used to create many Edges.
     */
    data: EdgeCreateManyInput | EdgeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Edge update
   */
  export type EdgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Edge.
     */
    data: XOR<EdgeUpdateInput, EdgeUncheckedUpdateInput>
    /**
     * Choose, which Edge to update.
     */
    where: EdgeWhereUniqueInput
  }

  /**
   * Edge updateMany
   */
  export type EdgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Edges.
     */
    data: XOR<EdgeUpdateManyMutationInput, EdgeUncheckedUpdateManyInput>
    /**
     * Filter which Edges to update
     */
    where?: EdgeWhereInput
    /**
     * Limit how many Edges to update.
     */
    limit?: number
  }

  /**
   * Edge updateManyAndReturn
   */
  export type EdgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * The data used to update Edges.
     */
    data: XOR<EdgeUpdateManyMutationInput, EdgeUncheckedUpdateManyInput>
    /**
     * Filter which Edges to update
     */
    where?: EdgeWhereInput
    /**
     * Limit how many Edges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Edge upsert
   */
  export type EdgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Edge to update in case it exists.
     */
    where: EdgeWhereUniqueInput
    /**
     * In case the Edge found by the `where` argument doesn't exist, create a new Edge with this data.
     */
    create: XOR<EdgeCreateInput, EdgeUncheckedCreateInput>
    /**
     * In case the Edge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EdgeUpdateInput, EdgeUncheckedUpdateInput>
  }

  /**
   * Edge delete
   */
  export type EdgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    /**
     * Filter which Edge to delete.
     */
    where: EdgeWhereUniqueInput
  }

  /**
   * Edge deleteMany
   */
  export type EdgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Edges to delete
     */
    where?: EdgeWhereInput
    /**
     * Limit how many Edges to delete.
     */
    limit?: number
  }

  /**
   * Edge without action
   */
  export type EdgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    banned: 'banned',
    banReason: 'banReason',
    banExpires: 'banExpires',
    isAnonymous: 'isAnonymous',
    username: 'username',
    displayUsername: 'displayUsername',
    lang: 'lang',
    phoneNumber: 'phoneNumber',
    phoneNumberVerified: 'phoneNumberVerified'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId',
    impersonatedBy: 'impersonatedBy'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const TreeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TreeScalarFieldEnum = (typeof TreeScalarFieldEnum)[keyof typeof TreeScalarFieldEnum]


  export const TreeMemberScalarFieldEnum: {
    id: 'id',
    treeId: 'treeId',
    userId: 'userId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type TreeMemberScalarFieldEnum = (typeof TreeMemberScalarFieldEnum)[keyof typeof TreeMemberScalarFieldEnum]


  export const NodeScalarFieldEnum: {
    id: 'id',
    treeId: 'treeId',
    firstName: 'firstName',
    lastName: 'lastName',
    gender: 'gender',
    idCardNumber: 'idCardNumber',
    birthDate: 'birthDate',
    deathDate: 'deathDate',
    lunarBirthDate: 'lunarBirthDate',
    lunarDeathDate: 'lunarDeathDate',
    phone: 'phone',
    email: 'email',
    major: 'major',
    jobPosition: 'jobPosition',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NodeScalarFieldEnum = (typeof NodeScalarFieldEnum)[keyof typeof NodeScalarFieldEnum]


  export const CustomFieldScalarFieldEnum: {
    id: 'id',
    treeId: 'treeId',
    name: 'name',
    type: 'type'
  };

  export type CustomFieldScalarFieldEnum = (typeof CustomFieldScalarFieldEnum)[keyof typeof CustomFieldScalarFieldEnum]


  export const CustomFieldValueScalarFieldEnum: {
    id: 'id',
    nodeId: 'nodeId',
    fieldId: 'fieldId',
    value: 'value'
  };

  export type CustomFieldValueScalarFieldEnum = (typeof CustomFieldValueScalarFieldEnum)[keyof typeof CustomFieldValueScalarFieldEnum]


  export const CustomKinshipTermScalarFieldEnum: {
    id: 'id',
    treeId: 'treeId',
    pathKey: 'pathKey',
    term: 'term'
  };

  export type CustomKinshipTermScalarFieldEnum = (typeof CustomKinshipTermScalarFieldEnum)[keyof typeof CustomKinshipTermScalarFieldEnum]


  export const EdgeScalarFieldEnum: {
    id: 'id',
    sourceId: 'sourceId',
    targetId: 'targetId',
    type: 'type',
    order: 'order',
    metadata: 'metadata'
  };

  export type EdgeScalarFieldEnum = (typeof EdgeScalarFieldEnum)[keyof typeof EdgeScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: StringNullableFilter<"User"> | string | null
    banned?: BoolNullableFilter<"User"> | boolean | null
    banReason?: StringNullableFilter<"User"> | string | null
    banExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    isAnonymous?: BoolNullableFilter<"User"> | boolean | null
    username?: StringNullableFilter<"User"> | string | null
    displayUsername?: StringNullableFilter<"User"> | string | null
    lang?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    phoneNumberVerified?: BoolNullableFilter<"User"> | boolean | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    trees?: TreeMemberListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    isAnonymous?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    displayUsername?: SortOrderInput | SortOrder
    lang?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    phoneNumberVerified?: SortOrderInput | SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    trees?: TreeMemberOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    phoneNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: StringNullableFilter<"User"> | string | null
    banned?: BoolNullableFilter<"User"> | boolean | null
    banReason?: StringNullableFilter<"User"> | string | null
    banExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    isAnonymous?: BoolNullableFilter<"User"> | boolean | null
    displayUsername?: StringNullableFilter<"User"> | string | null
    lang?: StringNullableFilter<"User"> | string | null
    phoneNumberVerified?: BoolNullableFilter<"User"> | boolean | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    trees?: TreeMemberListRelationFilter
  }, "id" | "email" | "username" | "phoneNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    isAnonymous?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    displayUsername?: SortOrderInput | SortOrder
    lang?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    phoneNumberVerified?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
    banned?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    banReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    banExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isAnonymous?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    displayUsername?: StringNullableWithAggregatesFilter<"User"> | string | null
    lang?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumberVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
    impersonatedBy?: StringNullableWithAggregatesFilter<"Session"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type TreeWhereInput = {
    AND?: TreeWhereInput | TreeWhereInput[]
    OR?: TreeWhereInput[]
    NOT?: TreeWhereInput | TreeWhereInput[]
    id?: StringFilter<"Tree"> | string
    name?: StringFilter<"Tree"> | string
    description?: StringNullableFilter<"Tree"> | string | null
    createdAt?: DateTimeFilter<"Tree"> | Date | string
    updatedAt?: DateTimeFilter<"Tree"> | Date | string
    members?: TreeMemberListRelationFilter
    nodes?: NodeListRelationFilter
    fields?: CustomFieldListRelationFilter
    customTerms?: CustomKinshipTermListRelationFilter
  }

  export type TreeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: TreeMemberOrderByRelationAggregateInput
    nodes?: NodeOrderByRelationAggregateInput
    fields?: CustomFieldOrderByRelationAggregateInput
    customTerms?: CustomKinshipTermOrderByRelationAggregateInput
  }

  export type TreeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TreeWhereInput | TreeWhereInput[]
    OR?: TreeWhereInput[]
    NOT?: TreeWhereInput | TreeWhereInput[]
    name?: StringFilter<"Tree"> | string
    description?: StringNullableFilter<"Tree"> | string | null
    createdAt?: DateTimeFilter<"Tree"> | Date | string
    updatedAt?: DateTimeFilter<"Tree"> | Date | string
    members?: TreeMemberListRelationFilter
    nodes?: NodeListRelationFilter
    fields?: CustomFieldListRelationFilter
    customTerms?: CustomKinshipTermListRelationFilter
  }, "id">

  export type TreeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TreeCountOrderByAggregateInput
    _max?: TreeMaxOrderByAggregateInput
    _min?: TreeMinOrderByAggregateInput
  }

  export type TreeScalarWhereWithAggregatesInput = {
    AND?: TreeScalarWhereWithAggregatesInput | TreeScalarWhereWithAggregatesInput[]
    OR?: TreeScalarWhereWithAggregatesInput[]
    NOT?: TreeScalarWhereWithAggregatesInput | TreeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tree"> | string
    name?: StringWithAggregatesFilter<"Tree"> | string
    description?: StringNullableWithAggregatesFilter<"Tree"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tree"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tree"> | Date | string
  }

  export type TreeMemberWhereInput = {
    AND?: TreeMemberWhereInput | TreeMemberWhereInput[]
    OR?: TreeMemberWhereInput[]
    NOT?: TreeMemberWhereInput | TreeMemberWhereInput[]
    id?: StringFilter<"TreeMember"> | string
    treeId?: StringFilter<"TreeMember"> | string
    userId?: StringFilter<"TreeMember"> | string
    role?: StringFilter<"TreeMember"> | string
    createdAt?: DateTimeFilter<"TreeMember"> | Date | string
    tree?: XOR<TreeScalarRelationFilter, TreeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TreeMemberOrderByWithRelationInput = {
    id?: SortOrder
    treeId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    tree?: TreeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TreeMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    treeId_userId?: TreeMemberTreeIdUserIdCompoundUniqueInput
    AND?: TreeMemberWhereInput | TreeMemberWhereInput[]
    OR?: TreeMemberWhereInput[]
    NOT?: TreeMemberWhereInput | TreeMemberWhereInput[]
    treeId?: StringFilter<"TreeMember"> | string
    userId?: StringFilter<"TreeMember"> | string
    role?: StringFilter<"TreeMember"> | string
    createdAt?: DateTimeFilter<"TreeMember"> | Date | string
    tree?: XOR<TreeScalarRelationFilter, TreeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "treeId_userId">

  export type TreeMemberOrderByWithAggregationInput = {
    id?: SortOrder
    treeId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: TreeMemberCountOrderByAggregateInput
    _max?: TreeMemberMaxOrderByAggregateInput
    _min?: TreeMemberMinOrderByAggregateInput
  }

  export type TreeMemberScalarWhereWithAggregatesInput = {
    AND?: TreeMemberScalarWhereWithAggregatesInput | TreeMemberScalarWhereWithAggregatesInput[]
    OR?: TreeMemberScalarWhereWithAggregatesInput[]
    NOT?: TreeMemberScalarWhereWithAggregatesInput | TreeMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TreeMember"> | string
    treeId?: StringWithAggregatesFilter<"TreeMember"> | string
    userId?: StringWithAggregatesFilter<"TreeMember"> | string
    role?: StringWithAggregatesFilter<"TreeMember"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TreeMember"> | Date | string
  }

  export type NodeWhereInput = {
    AND?: NodeWhereInput | NodeWhereInput[]
    OR?: NodeWhereInput[]
    NOT?: NodeWhereInput | NodeWhereInput[]
    id?: StringFilter<"Node"> | string
    treeId?: StringFilter<"Node"> | string
    firstName?: StringFilter<"Node"> | string
    lastName?: StringNullableFilter<"Node"> | string | null
    gender?: StringFilter<"Node"> | string
    idCardNumber?: StringNullableFilter<"Node"> | string | null
    birthDate?: DateTimeFilter<"Node"> | Date | string
    deathDate?: DateTimeNullableFilter<"Node"> | Date | string | null
    lunarBirthDate?: StringNullableFilter<"Node"> | string | null
    lunarDeathDate?: StringNullableFilter<"Node"> | string | null
    phone?: StringNullableFilter<"Node"> | string | null
    email?: StringNullableFilter<"Node"> | string | null
    major?: StringNullableFilter<"Node"> | string | null
    jobPosition?: StringNullableFilter<"Node"> | string | null
    createdAt?: DateTimeFilter<"Node"> | Date | string
    updatedAt?: DateTimeFilter<"Node"> | Date | string
    tree?: XOR<TreeScalarRelationFilter, TreeWhereInput>
    customValues?: CustomFieldValueListRelationFilter
    relationsAsSource?: EdgeListRelationFilter
    relationsAsTarget?: EdgeListRelationFilter
  }

  export type NodeOrderByWithRelationInput = {
    id?: SortOrder
    treeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    gender?: SortOrder
    idCardNumber?: SortOrderInput | SortOrder
    birthDate?: SortOrder
    deathDate?: SortOrderInput | SortOrder
    lunarBirthDate?: SortOrderInput | SortOrder
    lunarDeathDate?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    major?: SortOrderInput | SortOrder
    jobPosition?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tree?: TreeOrderByWithRelationInput
    customValues?: CustomFieldValueOrderByRelationAggregateInput
    relationsAsSource?: EdgeOrderByRelationAggregateInput
    relationsAsTarget?: EdgeOrderByRelationAggregateInput
  }

  export type NodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NodeWhereInput | NodeWhereInput[]
    OR?: NodeWhereInput[]
    NOT?: NodeWhereInput | NodeWhereInput[]
    treeId?: StringFilter<"Node"> | string
    firstName?: StringFilter<"Node"> | string
    lastName?: StringNullableFilter<"Node"> | string | null
    gender?: StringFilter<"Node"> | string
    idCardNumber?: StringNullableFilter<"Node"> | string | null
    birthDate?: DateTimeFilter<"Node"> | Date | string
    deathDate?: DateTimeNullableFilter<"Node"> | Date | string | null
    lunarBirthDate?: StringNullableFilter<"Node"> | string | null
    lunarDeathDate?: StringNullableFilter<"Node"> | string | null
    phone?: StringNullableFilter<"Node"> | string | null
    email?: StringNullableFilter<"Node"> | string | null
    major?: StringNullableFilter<"Node"> | string | null
    jobPosition?: StringNullableFilter<"Node"> | string | null
    createdAt?: DateTimeFilter<"Node"> | Date | string
    updatedAt?: DateTimeFilter<"Node"> | Date | string
    tree?: XOR<TreeScalarRelationFilter, TreeWhereInput>
    customValues?: CustomFieldValueListRelationFilter
    relationsAsSource?: EdgeListRelationFilter
    relationsAsTarget?: EdgeListRelationFilter
  }, "id">

  export type NodeOrderByWithAggregationInput = {
    id?: SortOrder
    treeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    gender?: SortOrder
    idCardNumber?: SortOrderInput | SortOrder
    birthDate?: SortOrder
    deathDate?: SortOrderInput | SortOrder
    lunarBirthDate?: SortOrderInput | SortOrder
    lunarDeathDate?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    major?: SortOrderInput | SortOrder
    jobPosition?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NodeCountOrderByAggregateInput
    _max?: NodeMaxOrderByAggregateInput
    _min?: NodeMinOrderByAggregateInput
  }

  export type NodeScalarWhereWithAggregatesInput = {
    AND?: NodeScalarWhereWithAggregatesInput | NodeScalarWhereWithAggregatesInput[]
    OR?: NodeScalarWhereWithAggregatesInput[]
    NOT?: NodeScalarWhereWithAggregatesInput | NodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Node"> | string
    treeId?: StringWithAggregatesFilter<"Node"> | string
    firstName?: StringWithAggregatesFilter<"Node"> | string
    lastName?: StringNullableWithAggregatesFilter<"Node"> | string | null
    gender?: StringWithAggregatesFilter<"Node"> | string
    idCardNumber?: StringNullableWithAggregatesFilter<"Node"> | string | null
    birthDate?: DateTimeWithAggregatesFilter<"Node"> | Date | string
    deathDate?: DateTimeNullableWithAggregatesFilter<"Node"> | Date | string | null
    lunarBirthDate?: StringNullableWithAggregatesFilter<"Node"> | string | null
    lunarDeathDate?: StringNullableWithAggregatesFilter<"Node"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Node"> | string | null
    email?: StringNullableWithAggregatesFilter<"Node"> | string | null
    major?: StringNullableWithAggregatesFilter<"Node"> | string | null
    jobPosition?: StringNullableWithAggregatesFilter<"Node"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Node"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Node"> | Date | string
  }

  export type CustomFieldWhereInput = {
    AND?: CustomFieldWhereInput | CustomFieldWhereInput[]
    OR?: CustomFieldWhereInput[]
    NOT?: CustomFieldWhereInput | CustomFieldWhereInput[]
    id?: StringFilter<"CustomField"> | string
    treeId?: StringFilter<"CustomField"> | string
    name?: StringFilter<"CustomField"> | string
    type?: StringFilter<"CustomField"> | string
    tree?: XOR<TreeScalarRelationFilter, TreeWhereInput>
    values?: CustomFieldValueListRelationFilter
  }

  export type CustomFieldOrderByWithRelationInput = {
    id?: SortOrder
    treeId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    tree?: TreeOrderByWithRelationInput
    values?: CustomFieldValueOrderByRelationAggregateInput
  }

  export type CustomFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    treeId_name?: CustomFieldTreeIdNameCompoundUniqueInput
    AND?: CustomFieldWhereInput | CustomFieldWhereInput[]
    OR?: CustomFieldWhereInput[]
    NOT?: CustomFieldWhereInput | CustomFieldWhereInput[]
    treeId?: StringFilter<"CustomField"> | string
    name?: StringFilter<"CustomField"> | string
    type?: StringFilter<"CustomField"> | string
    tree?: XOR<TreeScalarRelationFilter, TreeWhereInput>
    values?: CustomFieldValueListRelationFilter
  }, "id" | "treeId_name">

  export type CustomFieldOrderByWithAggregationInput = {
    id?: SortOrder
    treeId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    _count?: CustomFieldCountOrderByAggregateInput
    _max?: CustomFieldMaxOrderByAggregateInput
    _min?: CustomFieldMinOrderByAggregateInput
  }

  export type CustomFieldScalarWhereWithAggregatesInput = {
    AND?: CustomFieldScalarWhereWithAggregatesInput | CustomFieldScalarWhereWithAggregatesInput[]
    OR?: CustomFieldScalarWhereWithAggregatesInput[]
    NOT?: CustomFieldScalarWhereWithAggregatesInput | CustomFieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomField"> | string
    treeId?: StringWithAggregatesFilter<"CustomField"> | string
    name?: StringWithAggregatesFilter<"CustomField"> | string
    type?: StringWithAggregatesFilter<"CustomField"> | string
  }

  export type CustomFieldValueWhereInput = {
    AND?: CustomFieldValueWhereInput | CustomFieldValueWhereInput[]
    OR?: CustomFieldValueWhereInput[]
    NOT?: CustomFieldValueWhereInput | CustomFieldValueWhereInput[]
    id?: StringFilter<"CustomFieldValue"> | string
    nodeId?: StringFilter<"CustomFieldValue"> | string
    fieldId?: StringFilter<"CustomFieldValue"> | string
    value?: StringFilter<"CustomFieldValue"> | string
    node?: XOR<NodeScalarRelationFilter, NodeWhereInput>
    field?: XOR<CustomFieldScalarRelationFilter, CustomFieldWhereInput>
  }

  export type CustomFieldValueOrderByWithRelationInput = {
    id?: SortOrder
    nodeId?: SortOrder
    fieldId?: SortOrder
    value?: SortOrder
    node?: NodeOrderByWithRelationInput
    field?: CustomFieldOrderByWithRelationInput
  }

  export type CustomFieldValueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nodeId_fieldId?: CustomFieldValueNodeIdFieldIdCompoundUniqueInput
    AND?: CustomFieldValueWhereInput | CustomFieldValueWhereInput[]
    OR?: CustomFieldValueWhereInput[]
    NOT?: CustomFieldValueWhereInput | CustomFieldValueWhereInput[]
    nodeId?: StringFilter<"CustomFieldValue"> | string
    fieldId?: StringFilter<"CustomFieldValue"> | string
    value?: StringFilter<"CustomFieldValue"> | string
    node?: XOR<NodeScalarRelationFilter, NodeWhereInput>
    field?: XOR<CustomFieldScalarRelationFilter, CustomFieldWhereInput>
  }, "id" | "nodeId_fieldId">

  export type CustomFieldValueOrderByWithAggregationInput = {
    id?: SortOrder
    nodeId?: SortOrder
    fieldId?: SortOrder
    value?: SortOrder
    _count?: CustomFieldValueCountOrderByAggregateInput
    _max?: CustomFieldValueMaxOrderByAggregateInput
    _min?: CustomFieldValueMinOrderByAggregateInput
  }

  export type CustomFieldValueScalarWhereWithAggregatesInput = {
    AND?: CustomFieldValueScalarWhereWithAggregatesInput | CustomFieldValueScalarWhereWithAggregatesInput[]
    OR?: CustomFieldValueScalarWhereWithAggregatesInput[]
    NOT?: CustomFieldValueScalarWhereWithAggregatesInput | CustomFieldValueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomFieldValue"> | string
    nodeId?: StringWithAggregatesFilter<"CustomFieldValue"> | string
    fieldId?: StringWithAggregatesFilter<"CustomFieldValue"> | string
    value?: StringWithAggregatesFilter<"CustomFieldValue"> | string
  }

  export type CustomKinshipTermWhereInput = {
    AND?: CustomKinshipTermWhereInput | CustomKinshipTermWhereInput[]
    OR?: CustomKinshipTermWhereInput[]
    NOT?: CustomKinshipTermWhereInput | CustomKinshipTermWhereInput[]
    id?: StringFilter<"CustomKinshipTerm"> | string
    treeId?: StringFilter<"CustomKinshipTerm"> | string
    pathKey?: StringFilter<"CustomKinshipTerm"> | string
    term?: StringFilter<"CustomKinshipTerm"> | string
    tree?: XOR<TreeScalarRelationFilter, TreeWhereInput>
  }

  export type CustomKinshipTermOrderByWithRelationInput = {
    id?: SortOrder
    treeId?: SortOrder
    pathKey?: SortOrder
    term?: SortOrder
    tree?: TreeOrderByWithRelationInput
  }

  export type CustomKinshipTermWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    treeId_pathKey?: CustomKinshipTermTreeIdPathKeyCompoundUniqueInput
    AND?: CustomKinshipTermWhereInput | CustomKinshipTermWhereInput[]
    OR?: CustomKinshipTermWhereInput[]
    NOT?: CustomKinshipTermWhereInput | CustomKinshipTermWhereInput[]
    treeId?: StringFilter<"CustomKinshipTerm"> | string
    pathKey?: StringFilter<"CustomKinshipTerm"> | string
    term?: StringFilter<"CustomKinshipTerm"> | string
    tree?: XOR<TreeScalarRelationFilter, TreeWhereInput>
  }, "id" | "treeId_pathKey">

  export type CustomKinshipTermOrderByWithAggregationInput = {
    id?: SortOrder
    treeId?: SortOrder
    pathKey?: SortOrder
    term?: SortOrder
    _count?: CustomKinshipTermCountOrderByAggregateInput
    _max?: CustomKinshipTermMaxOrderByAggregateInput
    _min?: CustomKinshipTermMinOrderByAggregateInput
  }

  export type CustomKinshipTermScalarWhereWithAggregatesInput = {
    AND?: CustomKinshipTermScalarWhereWithAggregatesInput | CustomKinshipTermScalarWhereWithAggregatesInput[]
    OR?: CustomKinshipTermScalarWhereWithAggregatesInput[]
    NOT?: CustomKinshipTermScalarWhereWithAggregatesInput | CustomKinshipTermScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomKinshipTerm"> | string
    treeId?: StringWithAggregatesFilter<"CustomKinshipTerm"> | string
    pathKey?: StringWithAggregatesFilter<"CustomKinshipTerm"> | string
    term?: StringWithAggregatesFilter<"CustomKinshipTerm"> | string
  }

  export type EdgeWhereInput = {
    AND?: EdgeWhereInput | EdgeWhereInput[]
    OR?: EdgeWhereInput[]
    NOT?: EdgeWhereInput | EdgeWhereInput[]
    id?: StringFilter<"Edge"> | string
    sourceId?: StringFilter<"Edge"> | string
    targetId?: StringFilter<"Edge"> | string
    type?: StringFilter<"Edge"> | string
    order?: IntNullableFilter<"Edge"> | number | null
    metadata?: StringNullableFilter<"Edge"> | string | null
    source?: XOR<NodeScalarRelationFilter, NodeWhereInput>
    target?: XOR<NodeScalarRelationFilter, NodeWhereInput>
  }

  export type EdgeOrderByWithRelationInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    type?: SortOrder
    order?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    source?: NodeOrderByWithRelationInput
    target?: NodeOrderByWithRelationInput
  }

  export type EdgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sourceId_targetId_type?: EdgeSourceIdTargetIdTypeCompoundUniqueInput
    AND?: EdgeWhereInput | EdgeWhereInput[]
    OR?: EdgeWhereInput[]
    NOT?: EdgeWhereInput | EdgeWhereInput[]
    sourceId?: StringFilter<"Edge"> | string
    targetId?: StringFilter<"Edge"> | string
    type?: StringFilter<"Edge"> | string
    order?: IntNullableFilter<"Edge"> | number | null
    metadata?: StringNullableFilter<"Edge"> | string | null
    source?: XOR<NodeScalarRelationFilter, NodeWhereInput>
    target?: XOR<NodeScalarRelationFilter, NodeWhereInput>
  }, "id" | "sourceId_targetId_type">

  export type EdgeOrderByWithAggregationInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    type?: SortOrder
    order?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: EdgeCountOrderByAggregateInput
    _avg?: EdgeAvgOrderByAggregateInput
    _max?: EdgeMaxOrderByAggregateInput
    _min?: EdgeMinOrderByAggregateInput
    _sum?: EdgeSumOrderByAggregateInput
  }

  export type EdgeScalarWhereWithAggregatesInput = {
    AND?: EdgeScalarWhereWithAggregatesInput | EdgeScalarWhereWithAggregatesInput[]
    OR?: EdgeScalarWhereWithAggregatesInput[]
    NOT?: EdgeScalarWhereWithAggregatesInput | EdgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Edge"> | string
    sourceId?: StringWithAggregatesFilter<"Edge"> | string
    targetId?: StringWithAggregatesFilter<"Edge"> | string
    type?: StringWithAggregatesFilter<"Edge"> | string
    order?: IntNullableWithAggregatesFilter<"Edge"> | number | null
    metadata?: StringNullableWithAggregatesFilter<"Edge"> | string | null
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    isAnonymous?: boolean | null
    username?: string | null
    displayUsername?: string | null
    lang?: string | null
    phoneNumber?: string | null
    phoneNumberVerified?: boolean | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    trees?: TreeMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    isAnonymous?: boolean | null
    username?: string | null
    displayUsername?: string | null
    lang?: string | null
    phoneNumber?: string | null
    phoneNumberVerified?: boolean | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    trees?: TreeMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    trees?: TreeMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    trees?: TreeMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    isAnonymous?: boolean | null
    username?: string | null
    displayUsername?: string | null
    lang?: string | null
    phoneNumber?: string | null
    phoneNumberVerified?: boolean | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    impersonatedBy?: string | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    impersonatedBy?: string | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreeCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TreeMemberCreateNestedManyWithoutTreeInput
    nodes?: NodeCreateNestedManyWithoutTreeInput
    fields?: CustomFieldCreateNestedManyWithoutTreeInput
    customTerms?: CustomKinshipTermCreateNestedManyWithoutTreeInput
  }

  export type TreeUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TreeMemberUncheckedCreateNestedManyWithoutTreeInput
    nodes?: NodeUncheckedCreateNestedManyWithoutTreeInput
    fields?: CustomFieldUncheckedCreateNestedManyWithoutTreeInput
    customTerms?: CustomKinshipTermUncheckedCreateNestedManyWithoutTreeInput
  }

  export type TreeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TreeMemberUpdateManyWithoutTreeNestedInput
    nodes?: NodeUpdateManyWithoutTreeNestedInput
    fields?: CustomFieldUpdateManyWithoutTreeNestedInput
    customTerms?: CustomKinshipTermUpdateManyWithoutTreeNestedInput
  }

  export type TreeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TreeMemberUncheckedUpdateManyWithoutTreeNestedInput
    nodes?: NodeUncheckedUpdateManyWithoutTreeNestedInput
    fields?: CustomFieldUncheckedUpdateManyWithoutTreeNestedInput
    customTerms?: CustomKinshipTermUncheckedUpdateManyWithoutTreeNestedInput
  }

  export type TreeCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreeMemberCreateInput = {
    id?: string
    role: string
    createdAt?: Date | string
    tree: TreeCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutTreesInput
  }

  export type TreeMemberUncheckedCreateInput = {
    id?: string
    treeId: string
    userId: string
    role: string
    createdAt?: Date | string
  }

  export type TreeMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tree?: TreeUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutTreesNestedInput
  }

  export type TreeMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreeMemberCreateManyInput = {
    id?: string
    treeId: string
    userId: string
    role: string
    createdAt?: Date | string
  }

  export type TreeMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreeMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeCreateInput = {
    id?: string
    firstName: string
    lastName?: string | null
    gender: string
    idCardNumber?: string | null
    birthDate: Date | string
    deathDate?: Date | string | null
    lunarBirthDate?: string | null
    lunarDeathDate?: string | null
    phone?: string | null
    email?: string | null
    major?: string | null
    jobPosition?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tree: TreeCreateNestedOneWithoutNodesInput
    customValues?: CustomFieldValueCreateNestedManyWithoutNodeInput
    relationsAsSource?: EdgeCreateNestedManyWithoutSourceInput
    relationsAsTarget?: EdgeCreateNestedManyWithoutTargetInput
  }

  export type NodeUncheckedCreateInput = {
    id?: string
    treeId: string
    firstName: string
    lastName?: string | null
    gender: string
    idCardNumber?: string | null
    birthDate: Date | string
    deathDate?: Date | string | null
    lunarBirthDate?: string | null
    lunarDeathDate?: string | null
    phone?: string | null
    email?: string | null
    major?: string | null
    jobPosition?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customValues?: CustomFieldValueUncheckedCreateNestedManyWithoutNodeInput
    relationsAsSource?: EdgeUncheckedCreateNestedManyWithoutSourceInput
    relationsAsTarget?: EdgeUncheckedCreateNestedManyWithoutTargetInput
  }

  export type NodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lunarBirthDate?: NullableStringFieldUpdateOperationsInput | string | null
    lunarDeathDate?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    jobPosition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tree?: TreeUpdateOneRequiredWithoutNodesNestedInput
    customValues?: CustomFieldValueUpdateManyWithoutNodeNestedInput
    relationsAsSource?: EdgeUpdateManyWithoutSourceNestedInput
    relationsAsTarget?: EdgeUpdateManyWithoutTargetNestedInput
  }

  export type NodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lunarBirthDate?: NullableStringFieldUpdateOperationsInput | string | null
    lunarDeathDate?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    jobPosition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customValues?: CustomFieldValueUncheckedUpdateManyWithoutNodeNestedInput
    relationsAsSource?: EdgeUncheckedUpdateManyWithoutSourceNestedInput
    relationsAsTarget?: EdgeUncheckedUpdateManyWithoutTargetNestedInput
  }

  export type NodeCreateManyInput = {
    id?: string
    treeId: string
    firstName: string
    lastName?: string | null
    gender: string
    idCardNumber?: string | null
    birthDate: Date | string
    deathDate?: Date | string | null
    lunarBirthDate?: string | null
    lunarDeathDate?: string | null
    phone?: string | null
    email?: string | null
    major?: string | null
    jobPosition?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lunarBirthDate?: NullableStringFieldUpdateOperationsInput | string | null
    lunarDeathDate?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    jobPosition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lunarBirthDate?: NullableStringFieldUpdateOperationsInput | string | null
    lunarDeathDate?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    jobPosition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomFieldCreateInput = {
    id?: string
    name: string
    type: string
    tree: TreeCreateNestedOneWithoutFieldsInput
    values?: CustomFieldValueCreateNestedManyWithoutFieldInput
  }

  export type CustomFieldUncheckedCreateInput = {
    id?: string
    treeId: string
    name: string
    type: string
    values?: CustomFieldValueUncheckedCreateNestedManyWithoutFieldInput
  }

  export type CustomFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    tree?: TreeUpdateOneRequiredWithoutFieldsNestedInput
    values?: CustomFieldValueUpdateManyWithoutFieldNestedInput
  }

  export type CustomFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    values?: CustomFieldValueUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type CustomFieldCreateManyInput = {
    id?: string
    treeId: string
    name: string
    type: string
  }

  export type CustomFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CustomFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CustomFieldValueCreateInput = {
    id?: string
    value: string
    node: NodeCreateNestedOneWithoutCustomValuesInput
    field: CustomFieldCreateNestedOneWithoutValuesInput
  }

  export type CustomFieldValueUncheckedCreateInput = {
    id?: string
    nodeId: string
    fieldId: string
    value: string
  }

  export type CustomFieldValueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    node?: NodeUpdateOneRequiredWithoutCustomValuesNestedInput
    field?: CustomFieldUpdateOneRequiredWithoutValuesNestedInput
  }

  export type CustomFieldValueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodeId?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CustomFieldValueCreateManyInput = {
    id?: string
    nodeId: string
    fieldId: string
    value: string
  }

  export type CustomFieldValueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CustomFieldValueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodeId?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CustomKinshipTermCreateInput = {
    id?: string
    pathKey: string
    term: string
    tree: TreeCreateNestedOneWithoutCustomTermsInput
  }

  export type CustomKinshipTermUncheckedCreateInput = {
    id?: string
    treeId: string
    pathKey: string
    term: string
  }

  export type CustomKinshipTermUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathKey?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    tree?: TreeUpdateOneRequiredWithoutCustomTermsNestedInput
  }

  export type CustomKinshipTermUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeId?: StringFieldUpdateOperationsInput | string
    pathKey?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
  }

  export type CustomKinshipTermCreateManyInput = {
    id?: string
    treeId: string
    pathKey: string
    term: string
  }

  export type CustomKinshipTermUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathKey?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
  }

  export type CustomKinshipTermUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeId?: StringFieldUpdateOperationsInput | string
    pathKey?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
  }

  export type EdgeCreateInput = {
    id?: string
    type: string
    order?: number | null
    metadata?: string | null
    source: NodeCreateNestedOneWithoutRelationsAsSourceInput
    target: NodeCreateNestedOneWithoutRelationsAsTargetInput
  }

  export type EdgeUncheckedCreateInput = {
    id?: string
    sourceId: string
    targetId: string
    type: string
    order?: number | null
    metadata?: string | null
  }

  export type EdgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NodeUpdateOneRequiredWithoutRelationsAsSourceNestedInput
    target?: NodeUpdateOneRequiredWithoutRelationsAsTargetNestedInput
  }

  export type EdgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EdgeCreateManyInput = {
    id?: string
    sourceId: string
    targetId: string
    type: string
    order?: number | null
    metadata?: string | null
  }

  export type EdgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EdgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type TreeMemberListRelationFilter = {
    every?: TreeMemberWhereInput
    some?: TreeMemberWhereInput
    none?: TreeMemberWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TreeMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    isAnonymous?: SortOrder
    username?: SortOrder
    displayUsername?: SortOrder
    lang?: SortOrder
    phoneNumber?: SortOrder
    phoneNumberVerified?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    isAnonymous?: SortOrder
    username?: SortOrder
    displayUsername?: SortOrder
    lang?: SortOrder
    phoneNumber?: SortOrder
    phoneNumberVerified?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    isAnonymous?: SortOrder
    username?: SortOrder
    displayUsername?: SortOrder
    lang?: SortOrder
    phoneNumber?: SortOrder
    phoneNumberVerified?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NodeListRelationFilter = {
    every?: NodeWhereInput
    some?: NodeWhereInput
    none?: NodeWhereInput
  }

  export type CustomFieldListRelationFilter = {
    every?: CustomFieldWhereInput
    some?: CustomFieldWhereInput
    none?: CustomFieldWhereInput
  }

  export type CustomKinshipTermListRelationFilter = {
    every?: CustomKinshipTermWhereInput
    some?: CustomKinshipTermWhereInput
    none?: CustomKinshipTermWhereInput
  }

  export type NodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomKinshipTermOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TreeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreeScalarRelationFilter = {
    is?: TreeWhereInput
    isNot?: TreeWhereInput
  }

  export type TreeMemberTreeIdUserIdCompoundUniqueInput = {
    treeId: string
    userId: string
  }

  export type TreeMemberCountOrderByAggregateInput = {
    id?: SortOrder
    treeId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type TreeMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    treeId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type TreeMemberMinOrderByAggregateInput = {
    id?: SortOrder
    treeId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomFieldValueListRelationFilter = {
    every?: CustomFieldValueWhereInput
    some?: CustomFieldValueWhereInput
    none?: CustomFieldValueWhereInput
  }

  export type EdgeListRelationFilter = {
    every?: EdgeWhereInput
    some?: EdgeWhereInput
    none?: EdgeWhereInput
  }

  export type CustomFieldValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EdgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NodeCountOrderByAggregateInput = {
    id?: SortOrder
    treeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    idCardNumber?: SortOrder
    birthDate?: SortOrder
    deathDate?: SortOrder
    lunarBirthDate?: SortOrder
    lunarDeathDate?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    major?: SortOrder
    jobPosition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NodeMaxOrderByAggregateInput = {
    id?: SortOrder
    treeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    idCardNumber?: SortOrder
    birthDate?: SortOrder
    deathDate?: SortOrder
    lunarBirthDate?: SortOrder
    lunarDeathDate?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    major?: SortOrder
    jobPosition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NodeMinOrderByAggregateInput = {
    id?: SortOrder
    treeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    idCardNumber?: SortOrder
    birthDate?: SortOrder
    deathDate?: SortOrder
    lunarBirthDate?: SortOrder
    lunarDeathDate?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    major?: SortOrder
    jobPosition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomFieldTreeIdNameCompoundUniqueInput = {
    treeId: string
    name: string
  }

  export type CustomFieldCountOrderByAggregateInput = {
    id?: SortOrder
    treeId?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type CustomFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    treeId?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type CustomFieldMinOrderByAggregateInput = {
    id?: SortOrder
    treeId?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type NodeScalarRelationFilter = {
    is?: NodeWhereInput
    isNot?: NodeWhereInput
  }

  export type CustomFieldScalarRelationFilter = {
    is?: CustomFieldWhereInput
    isNot?: CustomFieldWhereInput
  }

  export type CustomFieldValueNodeIdFieldIdCompoundUniqueInput = {
    nodeId: string
    fieldId: string
  }

  export type CustomFieldValueCountOrderByAggregateInput = {
    id?: SortOrder
    nodeId?: SortOrder
    fieldId?: SortOrder
    value?: SortOrder
  }

  export type CustomFieldValueMaxOrderByAggregateInput = {
    id?: SortOrder
    nodeId?: SortOrder
    fieldId?: SortOrder
    value?: SortOrder
  }

  export type CustomFieldValueMinOrderByAggregateInput = {
    id?: SortOrder
    nodeId?: SortOrder
    fieldId?: SortOrder
    value?: SortOrder
  }

  export type CustomKinshipTermTreeIdPathKeyCompoundUniqueInput = {
    treeId: string
    pathKey: string
  }

  export type CustomKinshipTermCountOrderByAggregateInput = {
    id?: SortOrder
    treeId?: SortOrder
    pathKey?: SortOrder
    term?: SortOrder
  }

  export type CustomKinshipTermMaxOrderByAggregateInput = {
    id?: SortOrder
    treeId?: SortOrder
    pathKey?: SortOrder
    term?: SortOrder
  }

  export type CustomKinshipTermMinOrderByAggregateInput = {
    id?: SortOrder
    treeId?: SortOrder
    pathKey?: SortOrder
    term?: SortOrder
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

  export type EdgeSourceIdTargetIdTypeCompoundUniqueInput = {
    sourceId: string
    targetId: string
    type: string
  }

  export type EdgeCountOrderByAggregateInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    type?: SortOrder
    order?: SortOrder
    metadata?: SortOrder
  }

  export type EdgeAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EdgeMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    type?: SortOrder
    order?: SortOrder
    metadata?: SortOrder
  }

  export type EdgeMinOrderByAggregateInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    type?: SortOrder
    order?: SortOrder
    metadata?: SortOrder
  }

  export type EdgeSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type TreeMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<TreeMemberCreateWithoutUserInput, TreeMemberUncheckedCreateWithoutUserInput> | TreeMemberCreateWithoutUserInput[] | TreeMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreeMemberCreateOrConnectWithoutUserInput | TreeMemberCreateOrConnectWithoutUserInput[]
    createMany?: TreeMemberCreateManyUserInputEnvelope
    connect?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type TreeMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TreeMemberCreateWithoutUserInput, TreeMemberUncheckedCreateWithoutUserInput> | TreeMemberCreateWithoutUserInput[] | TreeMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreeMemberCreateOrConnectWithoutUserInput | TreeMemberCreateOrConnectWithoutUserInput[]
    createMany?: TreeMemberCreateManyUserInputEnvelope
    connect?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type TreeMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<TreeMemberCreateWithoutUserInput, TreeMemberUncheckedCreateWithoutUserInput> | TreeMemberCreateWithoutUserInput[] | TreeMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreeMemberCreateOrConnectWithoutUserInput | TreeMemberCreateOrConnectWithoutUserInput[]
    upsert?: TreeMemberUpsertWithWhereUniqueWithoutUserInput | TreeMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TreeMemberCreateManyUserInputEnvelope
    set?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
    disconnect?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
    delete?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
    connect?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
    update?: TreeMemberUpdateWithWhereUniqueWithoutUserInput | TreeMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TreeMemberUpdateManyWithWhereWithoutUserInput | TreeMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TreeMemberScalarWhereInput | TreeMemberScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type TreeMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TreeMemberCreateWithoutUserInput, TreeMemberUncheckedCreateWithoutUserInput> | TreeMemberCreateWithoutUserInput[] | TreeMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreeMemberCreateOrConnectWithoutUserInput | TreeMemberCreateOrConnectWithoutUserInput[]
    upsert?: TreeMemberUpsertWithWhereUniqueWithoutUserInput | TreeMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TreeMemberCreateManyUserInputEnvelope
    set?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
    disconnect?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
    delete?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
    connect?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
    update?: TreeMemberUpdateWithWhereUniqueWithoutUserInput | TreeMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TreeMemberUpdateManyWithWhereWithoutUserInput | TreeMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TreeMemberScalarWhereInput | TreeMemberScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type TreeMemberCreateNestedManyWithoutTreeInput = {
    create?: XOR<TreeMemberCreateWithoutTreeInput, TreeMemberUncheckedCreateWithoutTreeInput> | TreeMemberCreateWithoutTreeInput[] | TreeMemberUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: TreeMemberCreateOrConnectWithoutTreeInput | TreeMemberCreateOrConnectWithoutTreeInput[]
    createMany?: TreeMemberCreateManyTreeInputEnvelope
    connect?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
  }

  export type NodeCreateNestedManyWithoutTreeInput = {
    create?: XOR<NodeCreateWithoutTreeInput, NodeUncheckedCreateWithoutTreeInput> | NodeCreateWithoutTreeInput[] | NodeUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutTreeInput | NodeCreateOrConnectWithoutTreeInput[]
    createMany?: NodeCreateManyTreeInputEnvelope
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
  }

  export type CustomFieldCreateNestedManyWithoutTreeInput = {
    create?: XOR<CustomFieldCreateWithoutTreeInput, CustomFieldUncheckedCreateWithoutTreeInput> | CustomFieldCreateWithoutTreeInput[] | CustomFieldUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: CustomFieldCreateOrConnectWithoutTreeInput | CustomFieldCreateOrConnectWithoutTreeInput[]
    createMany?: CustomFieldCreateManyTreeInputEnvelope
    connect?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
  }

  export type CustomKinshipTermCreateNestedManyWithoutTreeInput = {
    create?: XOR<CustomKinshipTermCreateWithoutTreeInput, CustomKinshipTermUncheckedCreateWithoutTreeInput> | CustomKinshipTermCreateWithoutTreeInput[] | CustomKinshipTermUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: CustomKinshipTermCreateOrConnectWithoutTreeInput | CustomKinshipTermCreateOrConnectWithoutTreeInput[]
    createMany?: CustomKinshipTermCreateManyTreeInputEnvelope
    connect?: CustomKinshipTermWhereUniqueInput | CustomKinshipTermWhereUniqueInput[]
  }

  export type TreeMemberUncheckedCreateNestedManyWithoutTreeInput = {
    create?: XOR<TreeMemberCreateWithoutTreeInput, TreeMemberUncheckedCreateWithoutTreeInput> | TreeMemberCreateWithoutTreeInput[] | TreeMemberUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: TreeMemberCreateOrConnectWithoutTreeInput | TreeMemberCreateOrConnectWithoutTreeInput[]
    createMany?: TreeMemberCreateManyTreeInputEnvelope
    connect?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
  }

  export type NodeUncheckedCreateNestedManyWithoutTreeInput = {
    create?: XOR<NodeCreateWithoutTreeInput, NodeUncheckedCreateWithoutTreeInput> | NodeCreateWithoutTreeInput[] | NodeUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutTreeInput | NodeCreateOrConnectWithoutTreeInput[]
    createMany?: NodeCreateManyTreeInputEnvelope
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
  }

  export type CustomFieldUncheckedCreateNestedManyWithoutTreeInput = {
    create?: XOR<CustomFieldCreateWithoutTreeInput, CustomFieldUncheckedCreateWithoutTreeInput> | CustomFieldCreateWithoutTreeInput[] | CustomFieldUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: CustomFieldCreateOrConnectWithoutTreeInput | CustomFieldCreateOrConnectWithoutTreeInput[]
    createMany?: CustomFieldCreateManyTreeInputEnvelope
    connect?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
  }

  export type CustomKinshipTermUncheckedCreateNestedManyWithoutTreeInput = {
    create?: XOR<CustomKinshipTermCreateWithoutTreeInput, CustomKinshipTermUncheckedCreateWithoutTreeInput> | CustomKinshipTermCreateWithoutTreeInput[] | CustomKinshipTermUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: CustomKinshipTermCreateOrConnectWithoutTreeInput | CustomKinshipTermCreateOrConnectWithoutTreeInput[]
    createMany?: CustomKinshipTermCreateManyTreeInputEnvelope
    connect?: CustomKinshipTermWhereUniqueInput | CustomKinshipTermWhereUniqueInput[]
  }

  export type TreeMemberUpdateManyWithoutTreeNestedInput = {
    create?: XOR<TreeMemberCreateWithoutTreeInput, TreeMemberUncheckedCreateWithoutTreeInput> | TreeMemberCreateWithoutTreeInput[] | TreeMemberUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: TreeMemberCreateOrConnectWithoutTreeInput | TreeMemberCreateOrConnectWithoutTreeInput[]
    upsert?: TreeMemberUpsertWithWhereUniqueWithoutTreeInput | TreeMemberUpsertWithWhereUniqueWithoutTreeInput[]
    createMany?: TreeMemberCreateManyTreeInputEnvelope
    set?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
    disconnect?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
    delete?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
    connect?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
    update?: TreeMemberUpdateWithWhereUniqueWithoutTreeInput | TreeMemberUpdateWithWhereUniqueWithoutTreeInput[]
    updateMany?: TreeMemberUpdateManyWithWhereWithoutTreeInput | TreeMemberUpdateManyWithWhereWithoutTreeInput[]
    deleteMany?: TreeMemberScalarWhereInput | TreeMemberScalarWhereInput[]
  }

  export type NodeUpdateManyWithoutTreeNestedInput = {
    create?: XOR<NodeCreateWithoutTreeInput, NodeUncheckedCreateWithoutTreeInput> | NodeCreateWithoutTreeInput[] | NodeUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutTreeInput | NodeCreateOrConnectWithoutTreeInput[]
    upsert?: NodeUpsertWithWhereUniqueWithoutTreeInput | NodeUpsertWithWhereUniqueWithoutTreeInput[]
    createMany?: NodeCreateManyTreeInputEnvelope
    set?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    disconnect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    delete?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    update?: NodeUpdateWithWhereUniqueWithoutTreeInput | NodeUpdateWithWhereUniqueWithoutTreeInput[]
    updateMany?: NodeUpdateManyWithWhereWithoutTreeInput | NodeUpdateManyWithWhereWithoutTreeInput[]
    deleteMany?: NodeScalarWhereInput | NodeScalarWhereInput[]
  }

  export type CustomFieldUpdateManyWithoutTreeNestedInput = {
    create?: XOR<CustomFieldCreateWithoutTreeInput, CustomFieldUncheckedCreateWithoutTreeInput> | CustomFieldCreateWithoutTreeInput[] | CustomFieldUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: CustomFieldCreateOrConnectWithoutTreeInput | CustomFieldCreateOrConnectWithoutTreeInput[]
    upsert?: CustomFieldUpsertWithWhereUniqueWithoutTreeInput | CustomFieldUpsertWithWhereUniqueWithoutTreeInput[]
    createMany?: CustomFieldCreateManyTreeInputEnvelope
    set?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    disconnect?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    delete?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    connect?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    update?: CustomFieldUpdateWithWhereUniqueWithoutTreeInput | CustomFieldUpdateWithWhereUniqueWithoutTreeInput[]
    updateMany?: CustomFieldUpdateManyWithWhereWithoutTreeInput | CustomFieldUpdateManyWithWhereWithoutTreeInput[]
    deleteMany?: CustomFieldScalarWhereInput | CustomFieldScalarWhereInput[]
  }

  export type CustomKinshipTermUpdateManyWithoutTreeNestedInput = {
    create?: XOR<CustomKinshipTermCreateWithoutTreeInput, CustomKinshipTermUncheckedCreateWithoutTreeInput> | CustomKinshipTermCreateWithoutTreeInput[] | CustomKinshipTermUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: CustomKinshipTermCreateOrConnectWithoutTreeInput | CustomKinshipTermCreateOrConnectWithoutTreeInput[]
    upsert?: CustomKinshipTermUpsertWithWhereUniqueWithoutTreeInput | CustomKinshipTermUpsertWithWhereUniqueWithoutTreeInput[]
    createMany?: CustomKinshipTermCreateManyTreeInputEnvelope
    set?: CustomKinshipTermWhereUniqueInput | CustomKinshipTermWhereUniqueInput[]
    disconnect?: CustomKinshipTermWhereUniqueInput | CustomKinshipTermWhereUniqueInput[]
    delete?: CustomKinshipTermWhereUniqueInput | CustomKinshipTermWhereUniqueInput[]
    connect?: CustomKinshipTermWhereUniqueInput | CustomKinshipTermWhereUniqueInput[]
    update?: CustomKinshipTermUpdateWithWhereUniqueWithoutTreeInput | CustomKinshipTermUpdateWithWhereUniqueWithoutTreeInput[]
    updateMany?: CustomKinshipTermUpdateManyWithWhereWithoutTreeInput | CustomKinshipTermUpdateManyWithWhereWithoutTreeInput[]
    deleteMany?: CustomKinshipTermScalarWhereInput | CustomKinshipTermScalarWhereInput[]
  }

  export type TreeMemberUncheckedUpdateManyWithoutTreeNestedInput = {
    create?: XOR<TreeMemberCreateWithoutTreeInput, TreeMemberUncheckedCreateWithoutTreeInput> | TreeMemberCreateWithoutTreeInput[] | TreeMemberUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: TreeMemberCreateOrConnectWithoutTreeInput | TreeMemberCreateOrConnectWithoutTreeInput[]
    upsert?: TreeMemberUpsertWithWhereUniqueWithoutTreeInput | TreeMemberUpsertWithWhereUniqueWithoutTreeInput[]
    createMany?: TreeMemberCreateManyTreeInputEnvelope
    set?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
    disconnect?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
    delete?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
    connect?: TreeMemberWhereUniqueInput | TreeMemberWhereUniqueInput[]
    update?: TreeMemberUpdateWithWhereUniqueWithoutTreeInput | TreeMemberUpdateWithWhereUniqueWithoutTreeInput[]
    updateMany?: TreeMemberUpdateManyWithWhereWithoutTreeInput | TreeMemberUpdateManyWithWhereWithoutTreeInput[]
    deleteMany?: TreeMemberScalarWhereInput | TreeMemberScalarWhereInput[]
  }

  export type NodeUncheckedUpdateManyWithoutTreeNestedInput = {
    create?: XOR<NodeCreateWithoutTreeInput, NodeUncheckedCreateWithoutTreeInput> | NodeCreateWithoutTreeInput[] | NodeUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutTreeInput | NodeCreateOrConnectWithoutTreeInput[]
    upsert?: NodeUpsertWithWhereUniqueWithoutTreeInput | NodeUpsertWithWhereUniqueWithoutTreeInput[]
    createMany?: NodeCreateManyTreeInputEnvelope
    set?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    disconnect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    delete?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    update?: NodeUpdateWithWhereUniqueWithoutTreeInput | NodeUpdateWithWhereUniqueWithoutTreeInput[]
    updateMany?: NodeUpdateManyWithWhereWithoutTreeInput | NodeUpdateManyWithWhereWithoutTreeInput[]
    deleteMany?: NodeScalarWhereInput | NodeScalarWhereInput[]
  }

  export type CustomFieldUncheckedUpdateManyWithoutTreeNestedInput = {
    create?: XOR<CustomFieldCreateWithoutTreeInput, CustomFieldUncheckedCreateWithoutTreeInput> | CustomFieldCreateWithoutTreeInput[] | CustomFieldUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: CustomFieldCreateOrConnectWithoutTreeInput | CustomFieldCreateOrConnectWithoutTreeInput[]
    upsert?: CustomFieldUpsertWithWhereUniqueWithoutTreeInput | CustomFieldUpsertWithWhereUniqueWithoutTreeInput[]
    createMany?: CustomFieldCreateManyTreeInputEnvelope
    set?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    disconnect?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    delete?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    connect?: CustomFieldWhereUniqueInput | CustomFieldWhereUniqueInput[]
    update?: CustomFieldUpdateWithWhereUniqueWithoutTreeInput | CustomFieldUpdateWithWhereUniqueWithoutTreeInput[]
    updateMany?: CustomFieldUpdateManyWithWhereWithoutTreeInput | CustomFieldUpdateManyWithWhereWithoutTreeInput[]
    deleteMany?: CustomFieldScalarWhereInput | CustomFieldScalarWhereInput[]
  }

  export type CustomKinshipTermUncheckedUpdateManyWithoutTreeNestedInput = {
    create?: XOR<CustomKinshipTermCreateWithoutTreeInput, CustomKinshipTermUncheckedCreateWithoutTreeInput> | CustomKinshipTermCreateWithoutTreeInput[] | CustomKinshipTermUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: CustomKinshipTermCreateOrConnectWithoutTreeInput | CustomKinshipTermCreateOrConnectWithoutTreeInput[]
    upsert?: CustomKinshipTermUpsertWithWhereUniqueWithoutTreeInput | CustomKinshipTermUpsertWithWhereUniqueWithoutTreeInput[]
    createMany?: CustomKinshipTermCreateManyTreeInputEnvelope
    set?: CustomKinshipTermWhereUniqueInput | CustomKinshipTermWhereUniqueInput[]
    disconnect?: CustomKinshipTermWhereUniqueInput | CustomKinshipTermWhereUniqueInput[]
    delete?: CustomKinshipTermWhereUniqueInput | CustomKinshipTermWhereUniqueInput[]
    connect?: CustomKinshipTermWhereUniqueInput | CustomKinshipTermWhereUniqueInput[]
    update?: CustomKinshipTermUpdateWithWhereUniqueWithoutTreeInput | CustomKinshipTermUpdateWithWhereUniqueWithoutTreeInput[]
    updateMany?: CustomKinshipTermUpdateManyWithWhereWithoutTreeInput | CustomKinshipTermUpdateManyWithWhereWithoutTreeInput[]
    deleteMany?: CustomKinshipTermScalarWhereInput | CustomKinshipTermScalarWhereInput[]
  }

  export type TreeCreateNestedOneWithoutMembersInput = {
    create?: XOR<TreeCreateWithoutMembersInput, TreeUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TreeCreateOrConnectWithoutMembersInput
    connect?: TreeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTreesInput = {
    create?: XOR<UserCreateWithoutTreesInput, UserUncheckedCreateWithoutTreesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTreesInput
    connect?: UserWhereUniqueInput
  }

  export type TreeUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TreeCreateWithoutMembersInput, TreeUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TreeCreateOrConnectWithoutMembersInput
    upsert?: TreeUpsertWithoutMembersInput
    connect?: TreeWhereUniqueInput
    update?: XOR<XOR<TreeUpdateToOneWithWhereWithoutMembersInput, TreeUpdateWithoutMembersInput>, TreeUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutTreesNestedInput = {
    create?: XOR<UserCreateWithoutTreesInput, UserUncheckedCreateWithoutTreesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTreesInput
    upsert?: UserUpsertWithoutTreesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTreesInput, UserUpdateWithoutTreesInput>, UserUncheckedUpdateWithoutTreesInput>
  }

  export type TreeCreateNestedOneWithoutNodesInput = {
    create?: XOR<TreeCreateWithoutNodesInput, TreeUncheckedCreateWithoutNodesInput>
    connectOrCreate?: TreeCreateOrConnectWithoutNodesInput
    connect?: TreeWhereUniqueInput
  }

  export type CustomFieldValueCreateNestedManyWithoutNodeInput = {
    create?: XOR<CustomFieldValueCreateWithoutNodeInput, CustomFieldValueUncheckedCreateWithoutNodeInput> | CustomFieldValueCreateWithoutNodeInput[] | CustomFieldValueUncheckedCreateWithoutNodeInput[]
    connectOrCreate?: CustomFieldValueCreateOrConnectWithoutNodeInput | CustomFieldValueCreateOrConnectWithoutNodeInput[]
    createMany?: CustomFieldValueCreateManyNodeInputEnvelope
    connect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
  }

  export type EdgeCreateNestedManyWithoutSourceInput = {
    create?: XOR<EdgeCreateWithoutSourceInput, EdgeUncheckedCreateWithoutSourceInput> | EdgeCreateWithoutSourceInput[] | EdgeUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: EdgeCreateOrConnectWithoutSourceInput | EdgeCreateOrConnectWithoutSourceInput[]
    createMany?: EdgeCreateManySourceInputEnvelope
    connect?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
  }

  export type EdgeCreateNestedManyWithoutTargetInput = {
    create?: XOR<EdgeCreateWithoutTargetInput, EdgeUncheckedCreateWithoutTargetInput> | EdgeCreateWithoutTargetInput[] | EdgeUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: EdgeCreateOrConnectWithoutTargetInput | EdgeCreateOrConnectWithoutTargetInput[]
    createMany?: EdgeCreateManyTargetInputEnvelope
    connect?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
  }

  export type CustomFieldValueUncheckedCreateNestedManyWithoutNodeInput = {
    create?: XOR<CustomFieldValueCreateWithoutNodeInput, CustomFieldValueUncheckedCreateWithoutNodeInput> | CustomFieldValueCreateWithoutNodeInput[] | CustomFieldValueUncheckedCreateWithoutNodeInput[]
    connectOrCreate?: CustomFieldValueCreateOrConnectWithoutNodeInput | CustomFieldValueCreateOrConnectWithoutNodeInput[]
    createMany?: CustomFieldValueCreateManyNodeInputEnvelope
    connect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
  }

  export type EdgeUncheckedCreateNestedManyWithoutSourceInput = {
    create?: XOR<EdgeCreateWithoutSourceInput, EdgeUncheckedCreateWithoutSourceInput> | EdgeCreateWithoutSourceInput[] | EdgeUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: EdgeCreateOrConnectWithoutSourceInput | EdgeCreateOrConnectWithoutSourceInput[]
    createMany?: EdgeCreateManySourceInputEnvelope
    connect?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
  }

  export type EdgeUncheckedCreateNestedManyWithoutTargetInput = {
    create?: XOR<EdgeCreateWithoutTargetInput, EdgeUncheckedCreateWithoutTargetInput> | EdgeCreateWithoutTargetInput[] | EdgeUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: EdgeCreateOrConnectWithoutTargetInput | EdgeCreateOrConnectWithoutTargetInput[]
    createMany?: EdgeCreateManyTargetInputEnvelope
    connect?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
  }

  export type TreeUpdateOneRequiredWithoutNodesNestedInput = {
    create?: XOR<TreeCreateWithoutNodesInput, TreeUncheckedCreateWithoutNodesInput>
    connectOrCreate?: TreeCreateOrConnectWithoutNodesInput
    upsert?: TreeUpsertWithoutNodesInput
    connect?: TreeWhereUniqueInput
    update?: XOR<XOR<TreeUpdateToOneWithWhereWithoutNodesInput, TreeUpdateWithoutNodesInput>, TreeUncheckedUpdateWithoutNodesInput>
  }

  export type CustomFieldValueUpdateManyWithoutNodeNestedInput = {
    create?: XOR<CustomFieldValueCreateWithoutNodeInput, CustomFieldValueUncheckedCreateWithoutNodeInput> | CustomFieldValueCreateWithoutNodeInput[] | CustomFieldValueUncheckedCreateWithoutNodeInput[]
    connectOrCreate?: CustomFieldValueCreateOrConnectWithoutNodeInput | CustomFieldValueCreateOrConnectWithoutNodeInput[]
    upsert?: CustomFieldValueUpsertWithWhereUniqueWithoutNodeInput | CustomFieldValueUpsertWithWhereUniqueWithoutNodeInput[]
    createMany?: CustomFieldValueCreateManyNodeInputEnvelope
    set?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    disconnect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    delete?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    connect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    update?: CustomFieldValueUpdateWithWhereUniqueWithoutNodeInput | CustomFieldValueUpdateWithWhereUniqueWithoutNodeInput[]
    updateMany?: CustomFieldValueUpdateManyWithWhereWithoutNodeInput | CustomFieldValueUpdateManyWithWhereWithoutNodeInput[]
    deleteMany?: CustomFieldValueScalarWhereInput | CustomFieldValueScalarWhereInput[]
  }

  export type EdgeUpdateManyWithoutSourceNestedInput = {
    create?: XOR<EdgeCreateWithoutSourceInput, EdgeUncheckedCreateWithoutSourceInput> | EdgeCreateWithoutSourceInput[] | EdgeUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: EdgeCreateOrConnectWithoutSourceInput | EdgeCreateOrConnectWithoutSourceInput[]
    upsert?: EdgeUpsertWithWhereUniqueWithoutSourceInput | EdgeUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: EdgeCreateManySourceInputEnvelope
    set?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    disconnect?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    delete?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    connect?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    update?: EdgeUpdateWithWhereUniqueWithoutSourceInput | EdgeUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: EdgeUpdateManyWithWhereWithoutSourceInput | EdgeUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: EdgeScalarWhereInput | EdgeScalarWhereInput[]
  }

  export type EdgeUpdateManyWithoutTargetNestedInput = {
    create?: XOR<EdgeCreateWithoutTargetInput, EdgeUncheckedCreateWithoutTargetInput> | EdgeCreateWithoutTargetInput[] | EdgeUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: EdgeCreateOrConnectWithoutTargetInput | EdgeCreateOrConnectWithoutTargetInput[]
    upsert?: EdgeUpsertWithWhereUniqueWithoutTargetInput | EdgeUpsertWithWhereUniqueWithoutTargetInput[]
    createMany?: EdgeCreateManyTargetInputEnvelope
    set?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    disconnect?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    delete?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    connect?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    update?: EdgeUpdateWithWhereUniqueWithoutTargetInput | EdgeUpdateWithWhereUniqueWithoutTargetInput[]
    updateMany?: EdgeUpdateManyWithWhereWithoutTargetInput | EdgeUpdateManyWithWhereWithoutTargetInput[]
    deleteMany?: EdgeScalarWhereInput | EdgeScalarWhereInput[]
  }

  export type CustomFieldValueUncheckedUpdateManyWithoutNodeNestedInput = {
    create?: XOR<CustomFieldValueCreateWithoutNodeInput, CustomFieldValueUncheckedCreateWithoutNodeInput> | CustomFieldValueCreateWithoutNodeInput[] | CustomFieldValueUncheckedCreateWithoutNodeInput[]
    connectOrCreate?: CustomFieldValueCreateOrConnectWithoutNodeInput | CustomFieldValueCreateOrConnectWithoutNodeInput[]
    upsert?: CustomFieldValueUpsertWithWhereUniqueWithoutNodeInput | CustomFieldValueUpsertWithWhereUniqueWithoutNodeInput[]
    createMany?: CustomFieldValueCreateManyNodeInputEnvelope
    set?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    disconnect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    delete?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    connect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    update?: CustomFieldValueUpdateWithWhereUniqueWithoutNodeInput | CustomFieldValueUpdateWithWhereUniqueWithoutNodeInput[]
    updateMany?: CustomFieldValueUpdateManyWithWhereWithoutNodeInput | CustomFieldValueUpdateManyWithWhereWithoutNodeInput[]
    deleteMany?: CustomFieldValueScalarWhereInput | CustomFieldValueScalarWhereInput[]
  }

  export type EdgeUncheckedUpdateManyWithoutSourceNestedInput = {
    create?: XOR<EdgeCreateWithoutSourceInput, EdgeUncheckedCreateWithoutSourceInput> | EdgeCreateWithoutSourceInput[] | EdgeUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: EdgeCreateOrConnectWithoutSourceInput | EdgeCreateOrConnectWithoutSourceInput[]
    upsert?: EdgeUpsertWithWhereUniqueWithoutSourceInput | EdgeUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: EdgeCreateManySourceInputEnvelope
    set?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    disconnect?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    delete?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    connect?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    update?: EdgeUpdateWithWhereUniqueWithoutSourceInput | EdgeUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: EdgeUpdateManyWithWhereWithoutSourceInput | EdgeUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: EdgeScalarWhereInput | EdgeScalarWhereInput[]
  }

  export type EdgeUncheckedUpdateManyWithoutTargetNestedInput = {
    create?: XOR<EdgeCreateWithoutTargetInput, EdgeUncheckedCreateWithoutTargetInput> | EdgeCreateWithoutTargetInput[] | EdgeUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: EdgeCreateOrConnectWithoutTargetInput | EdgeCreateOrConnectWithoutTargetInput[]
    upsert?: EdgeUpsertWithWhereUniqueWithoutTargetInput | EdgeUpsertWithWhereUniqueWithoutTargetInput[]
    createMany?: EdgeCreateManyTargetInputEnvelope
    set?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    disconnect?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    delete?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    connect?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    update?: EdgeUpdateWithWhereUniqueWithoutTargetInput | EdgeUpdateWithWhereUniqueWithoutTargetInput[]
    updateMany?: EdgeUpdateManyWithWhereWithoutTargetInput | EdgeUpdateManyWithWhereWithoutTargetInput[]
    deleteMany?: EdgeScalarWhereInput | EdgeScalarWhereInput[]
  }

  export type TreeCreateNestedOneWithoutFieldsInput = {
    create?: XOR<TreeCreateWithoutFieldsInput, TreeUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: TreeCreateOrConnectWithoutFieldsInput
    connect?: TreeWhereUniqueInput
  }

  export type CustomFieldValueCreateNestedManyWithoutFieldInput = {
    create?: XOR<CustomFieldValueCreateWithoutFieldInput, CustomFieldValueUncheckedCreateWithoutFieldInput> | CustomFieldValueCreateWithoutFieldInput[] | CustomFieldValueUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CustomFieldValueCreateOrConnectWithoutFieldInput | CustomFieldValueCreateOrConnectWithoutFieldInput[]
    createMany?: CustomFieldValueCreateManyFieldInputEnvelope
    connect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
  }

  export type CustomFieldValueUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<CustomFieldValueCreateWithoutFieldInput, CustomFieldValueUncheckedCreateWithoutFieldInput> | CustomFieldValueCreateWithoutFieldInput[] | CustomFieldValueUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CustomFieldValueCreateOrConnectWithoutFieldInput | CustomFieldValueCreateOrConnectWithoutFieldInput[]
    createMany?: CustomFieldValueCreateManyFieldInputEnvelope
    connect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
  }

  export type TreeUpdateOneRequiredWithoutFieldsNestedInput = {
    create?: XOR<TreeCreateWithoutFieldsInput, TreeUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: TreeCreateOrConnectWithoutFieldsInput
    upsert?: TreeUpsertWithoutFieldsInput
    connect?: TreeWhereUniqueInput
    update?: XOR<XOR<TreeUpdateToOneWithWhereWithoutFieldsInput, TreeUpdateWithoutFieldsInput>, TreeUncheckedUpdateWithoutFieldsInput>
  }

  export type CustomFieldValueUpdateManyWithoutFieldNestedInput = {
    create?: XOR<CustomFieldValueCreateWithoutFieldInput, CustomFieldValueUncheckedCreateWithoutFieldInput> | CustomFieldValueCreateWithoutFieldInput[] | CustomFieldValueUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CustomFieldValueCreateOrConnectWithoutFieldInput | CustomFieldValueCreateOrConnectWithoutFieldInput[]
    upsert?: CustomFieldValueUpsertWithWhereUniqueWithoutFieldInput | CustomFieldValueUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: CustomFieldValueCreateManyFieldInputEnvelope
    set?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    disconnect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    delete?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    connect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    update?: CustomFieldValueUpdateWithWhereUniqueWithoutFieldInput | CustomFieldValueUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: CustomFieldValueUpdateManyWithWhereWithoutFieldInput | CustomFieldValueUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: CustomFieldValueScalarWhereInput | CustomFieldValueScalarWhereInput[]
  }

  export type CustomFieldValueUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<CustomFieldValueCreateWithoutFieldInput, CustomFieldValueUncheckedCreateWithoutFieldInput> | CustomFieldValueCreateWithoutFieldInput[] | CustomFieldValueUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CustomFieldValueCreateOrConnectWithoutFieldInput | CustomFieldValueCreateOrConnectWithoutFieldInput[]
    upsert?: CustomFieldValueUpsertWithWhereUniqueWithoutFieldInput | CustomFieldValueUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: CustomFieldValueCreateManyFieldInputEnvelope
    set?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    disconnect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    delete?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    connect?: CustomFieldValueWhereUniqueInput | CustomFieldValueWhereUniqueInput[]
    update?: CustomFieldValueUpdateWithWhereUniqueWithoutFieldInput | CustomFieldValueUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: CustomFieldValueUpdateManyWithWhereWithoutFieldInput | CustomFieldValueUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: CustomFieldValueScalarWhereInput | CustomFieldValueScalarWhereInput[]
  }

  export type NodeCreateNestedOneWithoutCustomValuesInput = {
    create?: XOR<NodeCreateWithoutCustomValuesInput, NodeUncheckedCreateWithoutCustomValuesInput>
    connectOrCreate?: NodeCreateOrConnectWithoutCustomValuesInput
    connect?: NodeWhereUniqueInput
  }

  export type CustomFieldCreateNestedOneWithoutValuesInput = {
    create?: XOR<CustomFieldCreateWithoutValuesInput, CustomFieldUncheckedCreateWithoutValuesInput>
    connectOrCreate?: CustomFieldCreateOrConnectWithoutValuesInput
    connect?: CustomFieldWhereUniqueInput
  }

  export type NodeUpdateOneRequiredWithoutCustomValuesNestedInput = {
    create?: XOR<NodeCreateWithoutCustomValuesInput, NodeUncheckedCreateWithoutCustomValuesInput>
    connectOrCreate?: NodeCreateOrConnectWithoutCustomValuesInput
    upsert?: NodeUpsertWithoutCustomValuesInput
    connect?: NodeWhereUniqueInput
    update?: XOR<XOR<NodeUpdateToOneWithWhereWithoutCustomValuesInput, NodeUpdateWithoutCustomValuesInput>, NodeUncheckedUpdateWithoutCustomValuesInput>
  }

  export type CustomFieldUpdateOneRequiredWithoutValuesNestedInput = {
    create?: XOR<CustomFieldCreateWithoutValuesInput, CustomFieldUncheckedCreateWithoutValuesInput>
    connectOrCreate?: CustomFieldCreateOrConnectWithoutValuesInput
    upsert?: CustomFieldUpsertWithoutValuesInput
    connect?: CustomFieldWhereUniqueInput
    update?: XOR<XOR<CustomFieldUpdateToOneWithWhereWithoutValuesInput, CustomFieldUpdateWithoutValuesInput>, CustomFieldUncheckedUpdateWithoutValuesInput>
  }

  export type TreeCreateNestedOneWithoutCustomTermsInput = {
    create?: XOR<TreeCreateWithoutCustomTermsInput, TreeUncheckedCreateWithoutCustomTermsInput>
    connectOrCreate?: TreeCreateOrConnectWithoutCustomTermsInput
    connect?: TreeWhereUniqueInput
  }

  export type TreeUpdateOneRequiredWithoutCustomTermsNestedInput = {
    create?: XOR<TreeCreateWithoutCustomTermsInput, TreeUncheckedCreateWithoutCustomTermsInput>
    connectOrCreate?: TreeCreateOrConnectWithoutCustomTermsInput
    upsert?: TreeUpsertWithoutCustomTermsInput
    connect?: TreeWhereUniqueInput
    update?: XOR<XOR<TreeUpdateToOneWithWhereWithoutCustomTermsInput, TreeUpdateWithoutCustomTermsInput>, TreeUncheckedUpdateWithoutCustomTermsInput>
  }

  export type NodeCreateNestedOneWithoutRelationsAsSourceInput = {
    create?: XOR<NodeCreateWithoutRelationsAsSourceInput, NodeUncheckedCreateWithoutRelationsAsSourceInput>
    connectOrCreate?: NodeCreateOrConnectWithoutRelationsAsSourceInput
    connect?: NodeWhereUniqueInput
  }

  export type NodeCreateNestedOneWithoutRelationsAsTargetInput = {
    create?: XOR<NodeCreateWithoutRelationsAsTargetInput, NodeUncheckedCreateWithoutRelationsAsTargetInput>
    connectOrCreate?: NodeCreateOrConnectWithoutRelationsAsTargetInput
    connect?: NodeWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NodeUpdateOneRequiredWithoutRelationsAsSourceNestedInput = {
    create?: XOR<NodeCreateWithoutRelationsAsSourceInput, NodeUncheckedCreateWithoutRelationsAsSourceInput>
    connectOrCreate?: NodeCreateOrConnectWithoutRelationsAsSourceInput
    upsert?: NodeUpsertWithoutRelationsAsSourceInput
    connect?: NodeWhereUniqueInput
    update?: XOR<XOR<NodeUpdateToOneWithWhereWithoutRelationsAsSourceInput, NodeUpdateWithoutRelationsAsSourceInput>, NodeUncheckedUpdateWithoutRelationsAsSourceInput>
  }

  export type NodeUpdateOneRequiredWithoutRelationsAsTargetNestedInput = {
    create?: XOR<NodeCreateWithoutRelationsAsTargetInput, NodeUncheckedCreateWithoutRelationsAsTargetInput>
    connectOrCreate?: NodeCreateOrConnectWithoutRelationsAsTargetInput
    upsert?: NodeUpsertWithoutRelationsAsTargetInput
    connect?: NodeWhereUniqueInput
    update?: XOR<XOR<NodeUpdateToOneWithWhereWithoutRelationsAsTargetInput, NodeUpdateWithoutRelationsAsTargetInput>, NodeUncheckedUpdateWithoutRelationsAsTargetInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type TreeMemberCreateWithoutUserInput = {
    id?: string
    role: string
    createdAt?: Date | string
    tree: TreeCreateNestedOneWithoutMembersInput
  }

  export type TreeMemberUncheckedCreateWithoutUserInput = {
    id?: string
    treeId: string
    role: string
    createdAt?: Date | string
  }

  export type TreeMemberCreateOrConnectWithoutUserInput = {
    where: TreeMemberWhereUniqueInput
    create: XOR<TreeMemberCreateWithoutUserInput, TreeMemberUncheckedCreateWithoutUserInput>
  }

  export type TreeMemberCreateManyUserInputEnvelope = {
    data: TreeMemberCreateManyUserInput | TreeMemberCreateManyUserInput[]
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type TreeMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: TreeMemberWhereUniqueInput
    update: XOR<TreeMemberUpdateWithoutUserInput, TreeMemberUncheckedUpdateWithoutUserInput>
    create: XOR<TreeMemberCreateWithoutUserInput, TreeMemberUncheckedCreateWithoutUserInput>
  }

  export type TreeMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: TreeMemberWhereUniqueInput
    data: XOR<TreeMemberUpdateWithoutUserInput, TreeMemberUncheckedUpdateWithoutUserInput>
  }

  export type TreeMemberUpdateManyWithWhereWithoutUserInput = {
    where: TreeMemberScalarWhereInput
    data: XOR<TreeMemberUpdateManyMutationInput, TreeMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type TreeMemberScalarWhereInput = {
    AND?: TreeMemberScalarWhereInput | TreeMemberScalarWhereInput[]
    OR?: TreeMemberScalarWhereInput[]
    NOT?: TreeMemberScalarWhereInput | TreeMemberScalarWhereInput[]
    id?: StringFilter<"TreeMember"> | string
    treeId?: StringFilter<"TreeMember"> | string
    userId?: StringFilter<"TreeMember"> | string
    role?: StringFilter<"TreeMember"> | string
    createdAt?: DateTimeFilter<"TreeMember"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    isAnonymous?: boolean | null
    username?: string | null
    displayUsername?: string | null
    lang?: string | null
    phoneNumber?: string | null
    phoneNumberVerified?: boolean | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    trees?: TreeMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    isAnonymous?: boolean | null
    username?: string | null
    displayUsername?: string | null
    lang?: string | null
    phoneNumber?: string | null
    phoneNumberVerified?: boolean | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    trees?: TreeMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    trees?: TreeMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    trees?: TreeMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    isAnonymous?: boolean | null
    username?: string | null
    displayUsername?: string | null
    lang?: string | null
    phoneNumber?: string | null
    phoneNumberVerified?: boolean | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    trees?: TreeMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    isAnonymous?: boolean | null
    username?: string | null
    displayUsername?: string | null
    lang?: string | null
    phoneNumber?: string | null
    phoneNumberVerified?: boolean | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    trees?: TreeMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    trees?: TreeMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    trees?: TreeMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TreeMemberCreateWithoutTreeInput = {
    id?: string
    role: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTreesInput
  }

  export type TreeMemberUncheckedCreateWithoutTreeInput = {
    id?: string
    userId: string
    role: string
    createdAt?: Date | string
  }

  export type TreeMemberCreateOrConnectWithoutTreeInput = {
    where: TreeMemberWhereUniqueInput
    create: XOR<TreeMemberCreateWithoutTreeInput, TreeMemberUncheckedCreateWithoutTreeInput>
  }

  export type TreeMemberCreateManyTreeInputEnvelope = {
    data: TreeMemberCreateManyTreeInput | TreeMemberCreateManyTreeInput[]
  }

  export type NodeCreateWithoutTreeInput = {
    id?: string
    firstName: string
    lastName?: string | null
    gender: string
    idCardNumber?: string | null
    birthDate: Date | string
    deathDate?: Date | string | null
    lunarBirthDate?: string | null
    lunarDeathDate?: string | null
    phone?: string | null
    email?: string | null
    major?: string | null
    jobPosition?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customValues?: CustomFieldValueCreateNestedManyWithoutNodeInput
    relationsAsSource?: EdgeCreateNestedManyWithoutSourceInput
    relationsAsTarget?: EdgeCreateNestedManyWithoutTargetInput
  }

  export type NodeUncheckedCreateWithoutTreeInput = {
    id?: string
    firstName: string
    lastName?: string | null
    gender: string
    idCardNumber?: string | null
    birthDate: Date | string
    deathDate?: Date | string | null
    lunarBirthDate?: string | null
    lunarDeathDate?: string | null
    phone?: string | null
    email?: string | null
    major?: string | null
    jobPosition?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customValues?: CustomFieldValueUncheckedCreateNestedManyWithoutNodeInput
    relationsAsSource?: EdgeUncheckedCreateNestedManyWithoutSourceInput
    relationsAsTarget?: EdgeUncheckedCreateNestedManyWithoutTargetInput
  }

  export type NodeCreateOrConnectWithoutTreeInput = {
    where: NodeWhereUniqueInput
    create: XOR<NodeCreateWithoutTreeInput, NodeUncheckedCreateWithoutTreeInput>
  }

  export type NodeCreateManyTreeInputEnvelope = {
    data: NodeCreateManyTreeInput | NodeCreateManyTreeInput[]
  }

  export type CustomFieldCreateWithoutTreeInput = {
    id?: string
    name: string
    type: string
    values?: CustomFieldValueCreateNestedManyWithoutFieldInput
  }

  export type CustomFieldUncheckedCreateWithoutTreeInput = {
    id?: string
    name: string
    type: string
    values?: CustomFieldValueUncheckedCreateNestedManyWithoutFieldInput
  }

  export type CustomFieldCreateOrConnectWithoutTreeInput = {
    where: CustomFieldWhereUniqueInput
    create: XOR<CustomFieldCreateWithoutTreeInput, CustomFieldUncheckedCreateWithoutTreeInput>
  }

  export type CustomFieldCreateManyTreeInputEnvelope = {
    data: CustomFieldCreateManyTreeInput | CustomFieldCreateManyTreeInput[]
  }

  export type CustomKinshipTermCreateWithoutTreeInput = {
    id?: string
    pathKey: string
    term: string
  }

  export type CustomKinshipTermUncheckedCreateWithoutTreeInput = {
    id?: string
    pathKey: string
    term: string
  }

  export type CustomKinshipTermCreateOrConnectWithoutTreeInput = {
    where: CustomKinshipTermWhereUniqueInput
    create: XOR<CustomKinshipTermCreateWithoutTreeInput, CustomKinshipTermUncheckedCreateWithoutTreeInput>
  }

  export type CustomKinshipTermCreateManyTreeInputEnvelope = {
    data: CustomKinshipTermCreateManyTreeInput | CustomKinshipTermCreateManyTreeInput[]
  }

  export type TreeMemberUpsertWithWhereUniqueWithoutTreeInput = {
    where: TreeMemberWhereUniqueInput
    update: XOR<TreeMemberUpdateWithoutTreeInput, TreeMemberUncheckedUpdateWithoutTreeInput>
    create: XOR<TreeMemberCreateWithoutTreeInput, TreeMemberUncheckedCreateWithoutTreeInput>
  }

  export type TreeMemberUpdateWithWhereUniqueWithoutTreeInput = {
    where: TreeMemberWhereUniqueInput
    data: XOR<TreeMemberUpdateWithoutTreeInput, TreeMemberUncheckedUpdateWithoutTreeInput>
  }

  export type TreeMemberUpdateManyWithWhereWithoutTreeInput = {
    where: TreeMemberScalarWhereInput
    data: XOR<TreeMemberUpdateManyMutationInput, TreeMemberUncheckedUpdateManyWithoutTreeInput>
  }

  export type NodeUpsertWithWhereUniqueWithoutTreeInput = {
    where: NodeWhereUniqueInput
    update: XOR<NodeUpdateWithoutTreeInput, NodeUncheckedUpdateWithoutTreeInput>
    create: XOR<NodeCreateWithoutTreeInput, NodeUncheckedCreateWithoutTreeInput>
  }

  export type NodeUpdateWithWhereUniqueWithoutTreeInput = {
    where: NodeWhereUniqueInput
    data: XOR<NodeUpdateWithoutTreeInput, NodeUncheckedUpdateWithoutTreeInput>
  }

  export type NodeUpdateManyWithWhereWithoutTreeInput = {
    where: NodeScalarWhereInput
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyWithoutTreeInput>
  }

  export type NodeScalarWhereInput = {
    AND?: NodeScalarWhereInput | NodeScalarWhereInput[]
    OR?: NodeScalarWhereInput[]
    NOT?: NodeScalarWhereInput | NodeScalarWhereInput[]
    id?: StringFilter<"Node"> | string
    treeId?: StringFilter<"Node"> | string
    firstName?: StringFilter<"Node"> | string
    lastName?: StringNullableFilter<"Node"> | string | null
    gender?: StringFilter<"Node"> | string
    idCardNumber?: StringNullableFilter<"Node"> | string | null
    birthDate?: DateTimeFilter<"Node"> | Date | string
    deathDate?: DateTimeNullableFilter<"Node"> | Date | string | null
    lunarBirthDate?: StringNullableFilter<"Node"> | string | null
    lunarDeathDate?: StringNullableFilter<"Node"> | string | null
    phone?: StringNullableFilter<"Node"> | string | null
    email?: StringNullableFilter<"Node"> | string | null
    major?: StringNullableFilter<"Node"> | string | null
    jobPosition?: StringNullableFilter<"Node"> | string | null
    createdAt?: DateTimeFilter<"Node"> | Date | string
    updatedAt?: DateTimeFilter<"Node"> | Date | string
  }

  export type CustomFieldUpsertWithWhereUniqueWithoutTreeInput = {
    where: CustomFieldWhereUniqueInput
    update: XOR<CustomFieldUpdateWithoutTreeInput, CustomFieldUncheckedUpdateWithoutTreeInput>
    create: XOR<CustomFieldCreateWithoutTreeInput, CustomFieldUncheckedCreateWithoutTreeInput>
  }

  export type CustomFieldUpdateWithWhereUniqueWithoutTreeInput = {
    where: CustomFieldWhereUniqueInput
    data: XOR<CustomFieldUpdateWithoutTreeInput, CustomFieldUncheckedUpdateWithoutTreeInput>
  }

  export type CustomFieldUpdateManyWithWhereWithoutTreeInput = {
    where: CustomFieldScalarWhereInput
    data: XOR<CustomFieldUpdateManyMutationInput, CustomFieldUncheckedUpdateManyWithoutTreeInput>
  }

  export type CustomFieldScalarWhereInput = {
    AND?: CustomFieldScalarWhereInput | CustomFieldScalarWhereInput[]
    OR?: CustomFieldScalarWhereInput[]
    NOT?: CustomFieldScalarWhereInput | CustomFieldScalarWhereInput[]
    id?: StringFilter<"CustomField"> | string
    treeId?: StringFilter<"CustomField"> | string
    name?: StringFilter<"CustomField"> | string
    type?: StringFilter<"CustomField"> | string
  }

  export type CustomKinshipTermUpsertWithWhereUniqueWithoutTreeInput = {
    where: CustomKinshipTermWhereUniqueInput
    update: XOR<CustomKinshipTermUpdateWithoutTreeInput, CustomKinshipTermUncheckedUpdateWithoutTreeInput>
    create: XOR<CustomKinshipTermCreateWithoutTreeInput, CustomKinshipTermUncheckedCreateWithoutTreeInput>
  }

  export type CustomKinshipTermUpdateWithWhereUniqueWithoutTreeInput = {
    where: CustomKinshipTermWhereUniqueInput
    data: XOR<CustomKinshipTermUpdateWithoutTreeInput, CustomKinshipTermUncheckedUpdateWithoutTreeInput>
  }

  export type CustomKinshipTermUpdateManyWithWhereWithoutTreeInput = {
    where: CustomKinshipTermScalarWhereInput
    data: XOR<CustomKinshipTermUpdateManyMutationInput, CustomKinshipTermUncheckedUpdateManyWithoutTreeInput>
  }

  export type CustomKinshipTermScalarWhereInput = {
    AND?: CustomKinshipTermScalarWhereInput | CustomKinshipTermScalarWhereInput[]
    OR?: CustomKinshipTermScalarWhereInput[]
    NOT?: CustomKinshipTermScalarWhereInput | CustomKinshipTermScalarWhereInput[]
    id?: StringFilter<"CustomKinshipTerm"> | string
    treeId?: StringFilter<"CustomKinshipTerm"> | string
    pathKey?: StringFilter<"CustomKinshipTerm"> | string
    term?: StringFilter<"CustomKinshipTerm"> | string
  }

  export type TreeCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nodes?: NodeCreateNestedManyWithoutTreeInput
    fields?: CustomFieldCreateNestedManyWithoutTreeInput
    customTerms?: CustomKinshipTermCreateNestedManyWithoutTreeInput
  }

  export type TreeUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nodes?: NodeUncheckedCreateNestedManyWithoutTreeInput
    fields?: CustomFieldUncheckedCreateNestedManyWithoutTreeInput
    customTerms?: CustomKinshipTermUncheckedCreateNestedManyWithoutTreeInput
  }

  export type TreeCreateOrConnectWithoutMembersInput = {
    where: TreeWhereUniqueInput
    create: XOR<TreeCreateWithoutMembersInput, TreeUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutTreesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    isAnonymous?: boolean | null
    username?: string | null
    displayUsername?: string | null
    lang?: string | null
    phoneNumber?: string | null
    phoneNumberVerified?: boolean | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTreesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    isAnonymous?: boolean | null
    username?: string | null
    displayUsername?: string | null
    lang?: string | null
    phoneNumber?: string | null
    phoneNumberVerified?: boolean | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTreesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTreesInput, UserUncheckedCreateWithoutTreesInput>
  }

  export type TreeUpsertWithoutMembersInput = {
    update: XOR<TreeUpdateWithoutMembersInput, TreeUncheckedUpdateWithoutMembersInput>
    create: XOR<TreeCreateWithoutMembersInput, TreeUncheckedCreateWithoutMembersInput>
    where?: TreeWhereInput
  }

  export type TreeUpdateToOneWithWhereWithoutMembersInput = {
    where?: TreeWhereInput
    data: XOR<TreeUpdateWithoutMembersInput, TreeUncheckedUpdateWithoutMembersInput>
  }

  export type TreeUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUpdateManyWithoutTreeNestedInput
    fields?: CustomFieldUpdateManyWithoutTreeNestedInput
    customTerms?: CustomKinshipTermUpdateManyWithoutTreeNestedInput
  }

  export type TreeUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUncheckedUpdateManyWithoutTreeNestedInput
    fields?: CustomFieldUncheckedUpdateManyWithoutTreeNestedInput
    customTerms?: CustomKinshipTermUncheckedUpdateManyWithoutTreeNestedInput
  }

  export type UserUpsertWithoutTreesInput = {
    update: XOR<UserUpdateWithoutTreesInput, UserUncheckedUpdateWithoutTreesInput>
    create: XOR<UserCreateWithoutTreesInput, UserUncheckedCreateWithoutTreesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTreesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTreesInput, UserUncheckedUpdateWithoutTreesInput>
  }

  export type UserUpdateWithoutTreesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTreesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAnonymous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayUsername?: NullableStringFieldUpdateOperationsInput | string | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumberVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TreeCreateWithoutNodesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TreeMemberCreateNestedManyWithoutTreeInput
    fields?: CustomFieldCreateNestedManyWithoutTreeInput
    customTerms?: CustomKinshipTermCreateNestedManyWithoutTreeInput
  }

  export type TreeUncheckedCreateWithoutNodesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TreeMemberUncheckedCreateNestedManyWithoutTreeInput
    fields?: CustomFieldUncheckedCreateNestedManyWithoutTreeInput
    customTerms?: CustomKinshipTermUncheckedCreateNestedManyWithoutTreeInput
  }

  export type TreeCreateOrConnectWithoutNodesInput = {
    where: TreeWhereUniqueInput
    create: XOR<TreeCreateWithoutNodesInput, TreeUncheckedCreateWithoutNodesInput>
  }

  export type CustomFieldValueCreateWithoutNodeInput = {
    id?: string
    value: string
    field: CustomFieldCreateNestedOneWithoutValuesInput
  }

  export type CustomFieldValueUncheckedCreateWithoutNodeInput = {
    id?: string
    fieldId: string
    value: string
  }

  export type CustomFieldValueCreateOrConnectWithoutNodeInput = {
    where: CustomFieldValueWhereUniqueInput
    create: XOR<CustomFieldValueCreateWithoutNodeInput, CustomFieldValueUncheckedCreateWithoutNodeInput>
  }

  export type CustomFieldValueCreateManyNodeInputEnvelope = {
    data: CustomFieldValueCreateManyNodeInput | CustomFieldValueCreateManyNodeInput[]
  }

  export type EdgeCreateWithoutSourceInput = {
    id?: string
    type: string
    order?: number | null
    metadata?: string | null
    target: NodeCreateNestedOneWithoutRelationsAsTargetInput
  }

  export type EdgeUncheckedCreateWithoutSourceInput = {
    id?: string
    targetId: string
    type: string
    order?: number | null
    metadata?: string | null
  }

  export type EdgeCreateOrConnectWithoutSourceInput = {
    where: EdgeWhereUniqueInput
    create: XOR<EdgeCreateWithoutSourceInput, EdgeUncheckedCreateWithoutSourceInput>
  }

  export type EdgeCreateManySourceInputEnvelope = {
    data: EdgeCreateManySourceInput | EdgeCreateManySourceInput[]
  }

  export type EdgeCreateWithoutTargetInput = {
    id?: string
    type: string
    order?: number | null
    metadata?: string | null
    source: NodeCreateNestedOneWithoutRelationsAsSourceInput
  }

  export type EdgeUncheckedCreateWithoutTargetInput = {
    id?: string
    sourceId: string
    type: string
    order?: number | null
    metadata?: string | null
  }

  export type EdgeCreateOrConnectWithoutTargetInput = {
    where: EdgeWhereUniqueInput
    create: XOR<EdgeCreateWithoutTargetInput, EdgeUncheckedCreateWithoutTargetInput>
  }

  export type EdgeCreateManyTargetInputEnvelope = {
    data: EdgeCreateManyTargetInput | EdgeCreateManyTargetInput[]
  }

  export type TreeUpsertWithoutNodesInput = {
    update: XOR<TreeUpdateWithoutNodesInput, TreeUncheckedUpdateWithoutNodesInput>
    create: XOR<TreeCreateWithoutNodesInput, TreeUncheckedCreateWithoutNodesInput>
    where?: TreeWhereInput
  }

  export type TreeUpdateToOneWithWhereWithoutNodesInput = {
    where?: TreeWhereInput
    data: XOR<TreeUpdateWithoutNodesInput, TreeUncheckedUpdateWithoutNodesInput>
  }

  export type TreeUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TreeMemberUpdateManyWithoutTreeNestedInput
    fields?: CustomFieldUpdateManyWithoutTreeNestedInput
    customTerms?: CustomKinshipTermUpdateManyWithoutTreeNestedInput
  }

  export type TreeUncheckedUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TreeMemberUncheckedUpdateManyWithoutTreeNestedInput
    fields?: CustomFieldUncheckedUpdateManyWithoutTreeNestedInput
    customTerms?: CustomKinshipTermUncheckedUpdateManyWithoutTreeNestedInput
  }

  export type CustomFieldValueUpsertWithWhereUniqueWithoutNodeInput = {
    where: CustomFieldValueWhereUniqueInput
    update: XOR<CustomFieldValueUpdateWithoutNodeInput, CustomFieldValueUncheckedUpdateWithoutNodeInput>
    create: XOR<CustomFieldValueCreateWithoutNodeInput, CustomFieldValueUncheckedCreateWithoutNodeInput>
  }

  export type CustomFieldValueUpdateWithWhereUniqueWithoutNodeInput = {
    where: CustomFieldValueWhereUniqueInput
    data: XOR<CustomFieldValueUpdateWithoutNodeInput, CustomFieldValueUncheckedUpdateWithoutNodeInput>
  }

  export type CustomFieldValueUpdateManyWithWhereWithoutNodeInput = {
    where: CustomFieldValueScalarWhereInput
    data: XOR<CustomFieldValueUpdateManyMutationInput, CustomFieldValueUncheckedUpdateManyWithoutNodeInput>
  }

  export type CustomFieldValueScalarWhereInput = {
    AND?: CustomFieldValueScalarWhereInput | CustomFieldValueScalarWhereInput[]
    OR?: CustomFieldValueScalarWhereInput[]
    NOT?: CustomFieldValueScalarWhereInput | CustomFieldValueScalarWhereInput[]
    id?: StringFilter<"CustomFieldValue"> | string
    nodeId?: StringFilter<"CustomFieldValue"> | string
    fieldId?: StringFilter<"CustomFieldValue"> | string
    value?: StringFilter<"CustomFieldValue"> | string
  }

  export type EdgeUpsertWithWhereUniqueWithoutSourceInput = {
    where: EdgeWhereUniqueInput
    update: XOR<EdgeUpdateWithoutSourceInput, EdgeUncheckedUpdateWithoutSourceInput>
    create: XOR<EdgeCreateWithoutSourceInput, EdgeUncheckedCreateWithoutSourceInput>
  }

  export type EdgeUpdateWithWhereUniqueWithoutSourceInput = {
    where: EdgeWhereUniqueInput
    data: XOR<EdgeUpdateWithoutSourceInput, EdgeUncheckedUpdateWithoutSourceInput>
  }

  export type EdgeUpdateManyWithWhereWithoutSourceInput = {
    where: EdgeScalarWhereInput
    data: XOR<EdgeUpdateManyMutationInput, EdgeUncheckedUpdateManyWithoutSourceInput>
  }

  export type EdgeScalarWhereInput = {
    AND?: EdgeScalarWhereInput | EdgeScalarWhereInput[]
    OR?: EdgeScalarWhereInput[]
    NOT?: EdgeScalarWhereInput | EdgeScalarWhereInput[]
    id?: StringFilter<"Edge"> | string
    sourceId?: StringFilter<"Edge"> | string
    targetId?: StringFilter<"Edge"> | string
    type?: StringFilter<"Edge"> | string
    order?: IntNullableFilter<"Edge"> | number | null
    metadata?: StringNullableFilter<"Edge"> | string | null
  }

  export type EdgeUpsertWithWhereUniqueWithoutTargetInput = {
    where: EdgeWhereUniqueInput
    update: XOR<EdgeUpdateWithoutTargetInput, EdgeUncheckedUpdateWithoutTargetInput>
    create: XOR<EdgeCreateWithoutTargetInput, EdgeUncheckedCreateWithoutTargetInput>
  }

  export type EdgeUpdateWithWhereUniqueWithoutTargetInput = {
    where: EdgeWhereUniqueInput
    data: XOR<EdgeUpdateWithoutTargetInput, EdgeUncheckedUpdateWithoutTargetInput>
  }

  export type EdgeUpdateManyWithWhereWithoutTargetInput = {
    where: EdgeScalarWhereInput
    data: XOR<EdgeUpdateManyMutationInput, EdgeUncheckedUpdateManyWithoutTargetInput>
  }

  export type TreeCreateWithoutFieldsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TreeMemberCreateNestedManyWithoutTreeInput
    nodes?: NodeCreateNestedManyWithoutTreeInput
    customTerms?: CustomKinshipTermCreateNestedManyWithoutTreeInput
  }

  export type TreeUncheckedCreateWithoutFieldsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TreeMemberUncheckedCreateNestedManyWithoutTreeInput
    nodes?: NodeUncheckedCreateNestedManyWithoutTreeInput
    customTerms?: CustomKinshipTermUncheckedCreateNestedManyWithoutTreeInput
  }

  export type TreeCreateOrConnectWithoutFieldsInput = {
    where: TreeWhereUniqueInput
    create: XOR<TreeCreateWithoutFieldsInput, TreeUncheckedCreateWithoutFieldsInput>
  }

  export type CustomFieldValueCreateWithoutFieldInput = {
    id?: string
    value: string
    node: NodeCreateNestedOneWithoutCustomValuesInput
  }

  export type CustomFieldValueUncheckedCreateWithoutFieldInput = {
    id?: string
    nodeId: string
    value: string
  }

  export type CustomFieldValueCreateOrConnectWithoutFieldInput = {
    where: CustomFieldValueWhereUniqueInput
    create: XOR<CustomFieldValueCreateWithoutFieldInput, CustomFieldValueUncheckedCreateWithoutFieldInput>
  }

  export type CustomFieldValueCreateManyFieldInputEnvelope = {
    data: CustomFieldValueCreateManyFieldInput | CustomFieldValueCreateManyFieldInput[]
  }

  export type TreeUpsertWithoutFieldsInput = {
    update: XOR<TreeUpdateWithoutFieldsInput, TreeUncheckedUpdateWithoutFieldsInput>
    create: XOR<TreeCreateWithoutFieldsInput, TreeUncheckedCreateWithoutFieldsInput>
    where?: TreeWhereInput
  }

  export type TreeUpdateToOneWithWhereWithoutFieldsInput = {
    where?: TreeWhereInput
    data: XOR<TreeUpdateWithoutFieldsInput, TreeUncheckedUpdateWithoutFieldsInput>
  }

  export type TreeUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TreeMemberUpdateManyWithoutTreeNestedInput
    nodes?: NodeUpdateManyWithoutTreeNestedInput
    customTerms?: CustomKinshipTermUpdateManyWithoutTreeNestedInput
  }

  export type TreeUncheckedUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TreeMemberUncheckedUpdateManyWithoutTreeNestedInput
    nodes?: NodeUncheckedUpdateManyWithoutTreeNestedInput
    customTerms?: CustomKinshipTermUncheckedUpdateManyWithoutTreeNestedInput
  }

  export type CustomFieldValueUpsertWithWhereUniqueWithoutFieldInput = {
    where: CustomFieldValueWhereUniqueInput
    update: XOR<CustomFieldValueUpdateWithoutFieldInput, CustomFieldValueUncheckedUpdateWithoutFieldInput>
    create: XOR<CustomFieldValueCreateWithoutFieldInput, CustomFieldValueUncheckedCreateWithoutFieldInput>
  }

  export type CustomFieldValueUpdateWithWhereUniqueWithoutFieldInput = {
    where: CustomFieldValueWhereUniqueInput
    data: XOR<CustomFieldValueUpdateWithoutFieldInput, CustomFieldValueUncheckedUpdateWithoutFieldInput>
  }

  export type CustomFieldValueUpdateManyWithWhereWithoutFieldInput = {
    where: CustomFieldValueScalarWhereInput
    data: XOR<CustomFieldValueUpdateManyMutationInput, CustomFieldValueUncheckedUpdateManyWithoutFieldInput>
  }

  export type NodeCreateWithoutCustomValuesInput = {
    id?: string
    firstName: string
    lastName?: string | null
    gender: string
    idCardNumber?: string | null
    birthDate: Date | string
    deathDate?: Date | string | null
    lunarBirthDate?: string | null
    lunarDeathDate?: string | null
    phone?: string | null
    email?: string | null
    major?: string | null
    jobPosition?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tree: TreeCreateNestedOneWithoutNodesInput
    relationsAsSource?: EdgeCreateNestedManyWithoutSourceInput
    relationsAsTarget?: EdgeCreateNestedManyWithoutTargetInput
  }

  export type NodeUncheckedCreateWithoutCustomValuesInput = {
    id?: string
    treeId: string
    firstName: string
    lastName?: string | null
    gender: string
    idCardNumber?: string | null
    birthDate: Date | string
    deathDate?: Date | string | null
    lunarBirthDate?: string | null
    lunarDeathDate?: string | null
    phone?: string | null
    email?: string | null
    major?: string | null
    jobPosition?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    relationsAsSource?: EdgeUncheckedCreateNestedManyWithoutSourceInput
    relationsAsTarget?: EdgeUncheckedCreateNestedManyWithoutTargetInput
  }

  export type NodeCreateOrConnectWithoutCustomValuesInput = {
    where: NodeWhereUniqueInput
    create: XOR<NodeCreateWithoutCustomValuesInput, NodeUncheckedCreateWithoutCustomValuesInput>
  }

  export type CustomFieldCreateWithoutValuesInput = {
    id?: string
    name: string
    type: string
    tree: TreeCreateNestedOneWithoutFieldsInput
  }

  export type CustomFieldUncheckedCreateWithoutValuesInput = {
    id?: string
    treeId: string
    name: string
    type: string
  }

  export type CustomFieldCreateOrConnectWithoutValuesInput = {
    where: CustomFieldWhereUniqueInput
    create: XOR<CustomFieldCreateWithoutValuesInput, CustomFieldUncheckedCreateWithoutValuesInput>
  }

  export type NodeUpsertWithoutCustomValuesInput = {
    update: XOR<NodeUpdateWithoutCustomValuesInput, NodeUncheckedUpdateWithoutCustomValuesInput>
    create: XOR<NodeCreateWithoutCustomValuesInput, NodeUncheckedCreateWithoutCustomValuesInput>
    where?: NodeWhereInput
  }

  export type NodeUpdateToOneWithWhereWithoutCustomValuesInput = {
    where?: NodeWhereInput
    data: XOR<NodeUpdateWithoutCustomValuesInput, NodeUncheckedUpdateWithoutCustomValuesInput>
  }

  export type NodeUpdateWithoutCustomValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lunarBirthDate?: NullableStringFieldUpdateOperationsInput | string | null
    lunarDeathDate?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    jobPosition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tree?: TreeUpdateOneRequiredWithoutNodesNestedInput
    relationsAsSource?: EdgeUpdateManyWithoutSourceNestedInput
    relationsAsTarget?: EdgeUpdateManyWithoutTargetNestedInput
  }

  export type NodeUncheckedUpdateWithoutCustomValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lunarBirthDate?: NullableStringFieldUpdateOperationsInput | string | null
    lunarDeathDate?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    jobPosition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relationsAsSource?: EdgeUncheckedUpdateManyWithoutSourceNestedInput
    relationsAsTarget?: EdgeUncheckedUpdateManyWithoutTargetNestedInput
  }

  export type CustomFieldUpsertWithoutValuesInput = {
    update: XOR<CustomFieldUpdateWithoutValuesInput, CustomFieldUncheckedUpdateWithoutValuesInput>
    create: XOR<CustomFieldCreateWithoutValuesInput, CustomFieldUncheckedCreateWithoutValuesInput>
    where?: CustomFieldWhereInput
  }

  export type CustomFieldUpdateToOneWithWhereWithoutValuesInput = {
    where?: CustomFieldWhereInput
    data: XOR<CustomFieldUpdateWithoutValuesInput, CustomFieldUncheckedUpdateWithoutValuesInput>
  }

  export type CustomFieldUpdateWithoutValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    tree?: TreeUpdateOneRequiredWithoutFieldsNestedInput
  }

  export type CustomFieldUncheckedUpdateWithoutValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TreeCreateWithoutCustomTermsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TreeMemberCreateNestedManyWithoutTreeInput
    nodes?: NodeCreateNestedManyWithoutTreeInput
    fields?: CustomFieldCreateNestedManyWithoutTreeInput
  }

  export type TreeUncheckedCreateWithoutCustomTermsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TreeMemberUncheckedCreateNestedManyWithoutTreeInput
    nodes?: NodeUncheckedCreateNestedManyWithoutTreeInput
    fields?: CustomFieldUncheckedCreateNestedManyWithoutTreeInput
  }

  export type TreeCreateOrConnectWithoutCustomTermsInput = {
    where: TreeWhereUniqueInput
    create: XOR<TreeCreateWithoutCustomTermsInput, TreeUncheckedCreateWithoutCustomTermsInput>
  }

  export type TreeUpsertWithoutCustomTermsInput = {
    update: XOR<TreeUpdateWithoutCustomTermsInput, TreeUncheckedUpdateWithoutCustomTermsInput>
    create: XOR<TreeCreateWithoutCustomTermsInput, TreeUncheckedCreateWithoutCustomTermsInput>
    where?: TreeWhereInput
  }

  export type TreeUpdateToOneWithWhereWithoutCustomTermsInput = {
    where?: TreeWhereInput
    data: XOR<TreeUpdateWithoutCustomTermsInput, TreeUncheckedUpdateWithoutCustomTermsInput>
  }

  export type TreeUpdateWithoutCustomTermsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TreeMemberUpdateManyWithoutTreeNestedInput
    nodes?: NodeUpdateManyWithoutTreeNestedInput
    fields?: CustomFieldUpdateManyWithoutTreeNestedInput
  }

  export type TreeUncheckedUpdateWithoutCustomTermsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TreeMemberUncheckedUpdateManyWithoutTreeNestedInput
    nodes?: NodeUncheckedUpdateManyWithoutTreeNestedInput
    fields?: CustomFieldUncheckedUpdateManyWithoutTreeNestedInput
  }

  export type NodeCreateWithoutRelationsAsSourceInput = {
    id?: string
    firstName: string
    lastName?: string | null
    gender: string
    idCardNumber?: string | null
    birthDate: Date | string
    deathDate?: Date | string | null
    lunarBirthDate?: string | null
    lunarDeathDate?: string | null
    phone?: string | null
    email?: string | null
    major?: string | null
    jobPosition?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tree: TreeCreateNestedOneWithoutNodesInput
    customValues?: CustomFieldValueCreateNestedManyWithoutNodeInput
    relationsAsTarget?: EdgeCreateNestedManyWithoutTargetInput
  }

  export type NodeUncheckedCreateWithoutRelationsAsSourceInput = {
    id?: string
    treeId: string
    firstName: string
    lastName?: string | null
    gender: string
    idCardNumber?: string | null
    birthDate: Date | string
    deathDate?: Date | string | null
    lunarBirthDate?: string | null
    lunarDeathDate?: string | null
    phone?: string | null
    email?: string | null
    major?: string | null
    jobPosition?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customValues?: CustomFieldValueUncheckedCreateNestedManyWithoutNodeInput
    relationsAsTarget?: EdgeUncheckedCreateNestedManyWithoutTargetInput
  }

  export type NodeCreateOrConnectWithoutRelationsAsSourceInput = {
    where: NodeWhereUniqueInput
    create: XOR<NodeCreateWithoutRelationsAsSourceInput, NodeUncheckedCreateWithoutRelationsAsSourceInput>
  }

  export type NodeCreateWithoutRelationsAsTargetInput = {
    id?: string
    firstName: string
    lastName?: string | null
    gender: string
    idCardNumber?: string | null
    birthDate: Date | string
    deathDate?: Date | string | null
    lunarBirthDate?: string | null
    lunarDeathDate?: string | null
    phone?: string | null
    email?: string | null
    major?: string | null
    jobPosition?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tree: TreeCreateNestedOneWithoutNodesInput
    customValues?: CustomFieldValueCreateNestedManyWithoutNodeInput
    relationsAsSource?: EdgeCreateNestedManyWithoutSourceInput
  }

  export type NodeUncheckedCreateWithoutRelationsAsTargetInput = {
    id?: string
    treeId: string
    firstName: string
    lastName?: string | null
    gender: string
    idCardNumber?: string | null
    birthDate: Date | string
    deathDate?: Date | string | null
    lunarBirthDate?: string | null
    lunarDeathDate?: string | null
    phone?: string | null
    email?: string | null
    major?: string | null
    jobPosition?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customValues?: CustomFieldValueUncheckedCreateNestedManyWithoutNodeInput
    relationsAsSource?: EdgeUncheckedCreateNestedManyWithoutSourceInput
  }

  export type NodeCreateOrConnectWithoutRelationsAsTargetInput = {
    where: NodeWhereUniqueInput
    create: XOR<NodeCreateWithoutRelationsAsTargetInput, NodeUncheckedCreateWithoutRelationsAsTargetInput>
  }

  export type NodeUpsertWithoutRelationsAsSourceInput = {
    update: XOR<NodeUpdateWithoutRelationsAsSourceInput, NodeUncheckedUpdateWithoutRelationsAsSourceInput>
    create: XOR<NodeCreateWithoutRelationsAsSourceInput, NodeUncheckedCreateWithoutRelationsAsSourceInput>
    where?: NodeWhereInput
  }

  export type NodeUpdateToOneWithWhereWithoutRelationsAsSourceInput = {
    where?: NodeWhereInput
    data: XOR<NodeUpdateWithoutRelationsAsSourceInput, NodeUncheckedUpdateWithoutRelationsAsSourceInput>
  }

  export type NodeUpdateWithoutRelationsAsSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lunarBirthDate?: NullableStringFieldUpdateOperationsInput | string | null
    lunarDeathDate?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    jobPosition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tree?: TreeUpdateOneRequiredWithoutNodesNestedInput
    customValues?: CustomFieldValueUpdateManyWithoutNodeNestedInput
    relationsAsTarget?: EdgeUpdateManyWithoutTargetNestedInput
  }

  export type NodeUncheckedUpdateWithoutRelationsAsSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lunarBirthDate?: NullableStringFieldUpdateOperationsInput | string | null
    lunarDeathDate?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    jobPosition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customValues?: CustomFieldValueUncheckedUpdateManyWithoutNodeNestedInput
    relationsAsTarget?: EdgeUncheckedUpdateManyWithoutTargetNestedInput
  }

  export type NodeUpsertWithoutRelationsAsTargetInput = {
    update: XOR<NodeUpdateWithoutRelationsAsTargetInput, NodeUncheckedUpdateWithoutRelationsAsTargetInput>
    create: XOR<NodeCreateWithoutRelationsAsTargetInput, NodeUncheckedCreateWithoutRelationsAsTargetInput>
    where?: NodeWhereInput
  }

  export type NodeUpdateToOneWithWhereWithoutRelationsAsTargetInput = {
    where?: NodeWhereInput
    data: XOR<NodeUpdateWithoutRelationsAsTargetInput, NodeUncheckedUpdateWithoutRelationsAsTargetInput>
  }

  export type NodeUpdateWithoutRelationsAsTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lunarBirthDate?: NullableStringFieldUpdateOperationsInput | string | null
    lunarDeathDate?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    jobPosition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tree?: TreeUpdateOneRequiredWithoutNodesNestedInput
    customValues?: CustomFieldValueUpdateManyWithoutNodeNestedInput
    relationsAsSource?: EdgeUpdateManyWithoutSourceNestedInput
  }

  export type NodeUncheckedUpdateWithoutRelationsAsTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lunarBirthDate?: NullableStringFieldUpdateOperationsInput | string | null
    lunarDeathDate?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    jobPosition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customValues?: CustomFieldValueUncheckedUpdateManyWithoutNodeNestedInput
    relationsAsSource?: EdgeUncheckedUpdateManyWithoutSourceNestedInput
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreeMemberCreateManyUserInput = {
    id?: string
    treeId: string
    role: string
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreeMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tree?: TreeUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TreeMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreeMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    treeId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreeMemberCreateManyTreeInput = {
    id?: string
    userId: string
    role: string
    createdAt?: Date | string
  }

  export type NodeCreateManyTreeInput = {
    id?: string
    firstName: string
    lastName?: string | null
    gender: string
    idCardNumber?: string | null
    birthDate: Date | string
    deathDate?: Date | string | null
    lunarBirthDate?: string | null
    lunarDeathDate?: string | null
    phone?: string | null
    email?: string | null
    major?: string | null
    jobPosition?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomFieldCreateManyTreeInput = {
    id?: string
    name: string
    type: string
  }

  export type CustomKinshipTermCreateManyTreeInput = {
    id?: string
    pathKey: string
    term: string
  }

  export type TreeMemberUpdateWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTreesNestedInput
  }

  export type TreeMemberUncheckedUpdateWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreeMemberUncheckedUpdateManyWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeUpdateWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lunarBirthDate?: NullableStringFieldUpdateOperationsInput | string | null
    lunarDeathDate?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    jobPosition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customValues?: CustomFieldValueUpdateManyWithoutNodeNestedInput
    relationsAsSource?: EdgeUpdateManyWithoutSourceNestedInput
    relationsAsTarget?: EdgeUpdateManyWithoutTargetNestedInput
  }

  export type NodeUncheckedUpdateWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lunarBirthDate?: NullableStringFieldUpdateOperationsInput | string | null
    lunarDeathDate?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    jobPosition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customValues?: CustomFieldValueUncheckedUpdateManyWithoutNodeNestedInput
    relationsAsSource?: EdgeUncheckedUpdateManyWithoutSourceNestedInput
    relationsAsTarget?: EdgeUncheckedUpdateManyWithoutTargetNestedInput
  }

  export type NodeUncheckedUpdateManyWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lunarBirthDate?: NullableStringFieldUpdateOperationsInput | string | null
    lunarDeathDate?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    jobPosition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomFieldUpdateWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    values?: CustomFieldValueUpdateManyWithoutFieldNestedInput
  }

  export type CustomFieldUncheckedUpdateWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    values?: CustomFieldValueUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type CustomFieldUncheckedUpdateManyWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CustomKinshipTermUpdateWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathKey?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
  }

  export type CustomKinshipTermUncheckedUpdateWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathKey?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
  }

  export type CustomKinshipTermUncheckedUpdateManyWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathKey?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
  }

  export type CustomFieldValueCreateManyNodeInput = {
    id?: string
    fieldId: string
    value: string
  }

  export type EdgeCreateManySourceInput = {
    id?: string
    targetId: string
    type: string
    order?: number | null
    metadata?: string | null
  }

  export type EdgeCreateManyTargetInput = {
    id?: string
    sourceId: string
    type: string
    order?: number | null
    metadata?: string | null
  }

  export type CustomFieldValueUpdateWithoutNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    field?: CustomFieldUpdateOneRequiredWithoutValuesNestedInput
  }

  export type CustomFieldValueUncheckedUpdateWithoutNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CustomFieldValueUncheckedUpdateManyWithoutNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type EdgeUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    target?: NodeUpdateOneRequiredWithoutRelationsAsTargetNestedInput
  }

  export type EdgeUncheckedUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EdgeUncheckedUpdateManyWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EdgeUpdateWithoutTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NodeUpdateOneRequiredWithoutRelationsAsSourceNestedInput
  }

  export type EdgeUncheckedUpdateWithoutTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EdgeUncheckedUpdateManyWithoutTargetInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomFieldValueCreateManyFieldInput = {
    id?: string
    nodeId: string
    value: string
  }

  export type CustomFieldValueUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    node?: NodeUpdateOneRequiredWithoutCustomValuesNestedInput
  }

  export type CustomFieldValueUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodeId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CustomFieldValueUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodeId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }



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