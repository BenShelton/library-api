[Library Core - v0.3.1](../README.md) / Database

# Class: Database

## Hierarchy

- **Database**

  ↳ [*CatalogDatabase*](catalogdatabase.md)

## Table of contents

### Constructors

- [constructor](database.md#constructor)

### Methods

- [getRow](database.md#getrow)
- [getRows](database.md#getrows)

## Constructors

### constructor

\+ **new Database**(`filename`: *string*): [*Database*](database.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | *string* |

**Returns:** [*Database*](database.md)

Defined in: [classes/Database.ts:16](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L16)

## Methods

### getRow

▸ **getRow**<T\>(`query`: *string*, `params?`: *string* \| *string*[] \| *Record*<string, string\>): *Promise*<undefined \| T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | *string* |
| `params?` | *string* \| *string*[] \| *Record*<string, string\> |

**Returns:** *Promise*<undefined \| T\>

Defined in: [classes/Database.ts:26](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L26)

___

### getRows

▸ **getRows**<T\>(`query`: *string*, `params?`: *string* \| *string*[] \| *Record*<string, string\>): *Promise*<T[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | *string* |
| `params?` | *string* \| *string*[] \| *Record*<string, string\> |

**Returns:** *Promise*<T[]\>

Defined in: [classes/Database.ts:31](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L31)
