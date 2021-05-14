[Library Core - v0.3.1](../README.md) / [src](../modules/src.md) / CatalogDatabase

# Class: CatalogDatabase

[src](../modules/src.md).CatalogDatabase

## Hierarchy

- [*Database*](src.database.md)

  ↳ **CatalogDatabase**

## Table of contents

### Constructors

- [constructor](src.catalogdatabase.md#constructor)

### Methods

- [getMediaDetails](src.catalogdatabase.md#getmediadetails)
- [getMonthlyPublications](src.catalogdatabase.md#getmonthlypublications)
- [getPublication](src.catalogdatabase.md#getpublication)
- [getRow](src.catalogdatabase.md#getrow)
- [getRows](src.catalogdatabase.md#getrows)

## Constructors

### constructor

\+ **new CatalogDatabase**(`filename`: *string*): [*CatalogDatabase*](src.catalogdatabase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | *string* |

**Returns:** [*CatalogDatabase*](src.catalogdatabase.md)

Overrides: [Database](src.database.md)

Defined in: [src/classes/Database.ts:38](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L38)

## Methods

### getMediaDetails

▸ **getMediaDetails**(`__namedParameters`: { `doc`: *string* \| *number* ; `issue`: *string* \| *number* ; `track`: *string* \| *number* ; `type`: ``"pub"`` \| ``"doc"``  }): *Promise*<``null`` \| [*MediaDetailsDTO*](../interfaces/types_dto.mediadetailsdto.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *object* |
| `__namedParameters.doc` | *string* \| *number* |
| `__namedParameters.issue` | *string* \| *number* |
| `__namedParameters.track` | *string* \| *number* |
| `__namedParameters.type` | ``"pub"`` \| ``"doc"`` |

**Returns:** *Promise*<``null`` \| [*MediaDetailsDTO*](../interfaces/types_dto.mediadetailsdto.md)\>

Defined in: [src/classes/Database.ts:82](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L82)

___

### getMonthlyPublications

▸ **getMonthlyPublications**(): *Promise*<[*PublicationRow*](../interfaces/types_database.publicationrow.md)[]\>

**Returns:** *Promise*<[*PublicationRow*](../interfaces/types_database.publicationrow.md)[]\>

Defined in: [src/classes/Database.ts:45](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L45)

___

### getPublication

▸ **getPublication**(`date`: *string*, `downloadDir`: *string*, `type`: [*PublicationType*](../modules/types_publication.md#publicationtype)): *Promise*<``null`` \| [*Publication*](src.publication.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | *string* |
| `downloadDir` | *string* |
| `type` | [*PublicationType*](../modules/types_publication.md#publicationtype) |

**Returns:** *Promise*<``null`` \| [*Publication*](src.publication.md)\>

Defined in: [src/classes/Database.ts:53](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L53)

___

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

Inherited from: [Database](src.database.md)

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

Inherited from: [Database](src.database.md)

Defined in: [src/classes/Database.ts:31](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L31)
