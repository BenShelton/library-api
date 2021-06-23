[Library Core](../README.md) / [src](../modules/src.md) / Database

# Class: Database

[src](../modules/src.md).Database

Wraps a `sqlite3` database and provides abstracted methods to access database information.

## Hierarchy

- **Database**

  ↳ [CatalogDatabase](src.catalogdatabase.md)

## Table of contents

### Constructors

- [constructor](src.database.md#constructor)

### Methods

- [getRow](src.database.md#getrow)
- [getRows](src.database.md#getrows)

## Constructors

### constructor

• **new Database**(`path`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to the database. |

#### Defined in

[src/classes/Database.ts:21](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L21)

## Methods

### getRow

▸ **getRow**<T\>(`query`, `params?`): `Promise`<undefined \| T\>

Returns the first matched row of the provided query.
The return type must be provided in TS as the row structure is unknown.

**`example`**
```ts
const db = new Database(path)
const row = await db.getRow<PublicationRow>(query)
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | The SQL query to run. |
| `params?` | `QueryParams` | Query params to use. |

#### Returns

`Promise`<undefined \| T\>

A single row if it exists, or `undefined` if not found.

#### Defined in

[src/classes/Database.ts:49](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L49)

___

### getRows

▸ **getRows**<T\>(`query`, `params?`): `Promise`<T[]\>

Returns all matched rows of the provided query.
The return type of a single row must be provided in TS as the row structure is unknown.

**`example`**
```ts
const db = new Database(path)
const rows = await db.getRows<PublicationRow>(query)
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | The SQL query to run. |
| `params?` | `QueryParams` | Query params to use. |

#### Returns

`Promise`<T[]\>

An array of matched rows. If none were found an empty array will be returned.

#### Defined in

[src/classes/Database.ts:69](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L69)
