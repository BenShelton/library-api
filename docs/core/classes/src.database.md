[Library Core - v0.3.1](../README.md) / [src](../modules/src.md) / Database

# Class: Database

[src](../modules/src.md).Database

## Hierarchy

- **Database**

  ↳ [*CatalogDatabase*](src.catalogdatabase.md)

## Table of contents

### Constructors

- [constructor](src.database.md#constructor)

### Methods

- [getRow](src.database.md#getrow)
- [getRows](src.database.md#getrows)

## Constructors

### constructor

\+ **new Database**(`filename`: *string*): [*Database*](src.database.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | *string* |

**Returns:** [*Database*](src.database.md)

Defined in: [src/classes/Database.ts:16](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L16)

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

Defined in: [src/classes/Database.ts:26](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L26)

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

Defined in: [src/classes/Database.ts:31](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L31)
