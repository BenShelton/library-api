[@library-api/core](../README.md) / CatalogDatabase

# Class: CatalogDatabase

## Hierarchy

- [*Database*](database.md)

  ↳ **CatalogDatabase**

## Table of contents

### Constructors

- [constructor](catalogdatabase.md#constructor)

### Methods

- [getMediaDetails](catalogdatabase.md#getmediadetails)
- [getMonthlyPublications](catalogdatabase.md#getmonthlypublications)
- [getPublication](catalogdatabase.md#getpublication)
- [getRow](catalogdatabase.md#getrow)
- [getRows](catalogdatabase.md#getrows)

## Constructors

### constructor

\+ **new CatalogDatabase**(`filename`: *string*): [*CatalogDatabase*](catalogdatabase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | *string* |

**Returns:** [*CatalogDatabase*](catalogdatabase.md)

Overrides: [Database](database.md)

Defined in: [classes/Database.ts:38](https://github.com/BenShelton/library-api/blob/ba93c4c/packages/core/src/classes/Database.ts#L38)

## Methods

### getMediaDetails

▸ **getMediaDetails**(`__namedParameters`: { `doc`: *string* \| *number* ; `issue`: *string* \| *number* ; `track`: *string* \| *number* ; `type`: ``"pub"`` \| ``"doc"``  }): *Promise*<``null`` \| MediaDetailsDTO\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *object* |
| `__namedParameters.doc` | *string* \| *number* |
| `__namedParameters.issue` | *string* \| *number* |
| `__namedParameters.track` | *string* \| *number* |
| `__namedParameters.type` | ``"pub"`` \| ``"doc"`` |

**Returns:** *Promise*<``null`` \| MediaDetailsDTO\>

Defined in: [classes/Database.ts:82](https://github.com/BenShelton/library-api/blob/ba93c4c/packages/core/src/classes/Database.ts#L82)

___

### getMonthlyPublications

▸ **getMonthlyPublications**(): *Promise*<PublicationRow[]\>

**Returns:** *Promise*<PublicationRow[]\>

Defined in: [classes/Database.ts:45](https://github.com/BenShelton/library-api/blob/ba93c4c/packages/core/src/classes/Database.ts#L45)

___

### getPublication

▸ **getPublication**(`date`: *string*, `downloadDir`: *string*, `type`: PublicationType): *Promise*<``null`` \| [*Publication*](publication.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | *string* |
| `downloadDir` | *string* |
| `type` | PublicationType |

**Returns:** *Promise*<``null`` \| [*Publication*](publication.md)\>

Defined in: [classes/Database.ts:53](https://github.com/BenShelton/library-api/blob/ba93c4c/packages/core/src/classes/Database.ts#L53)

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

Inherited from: [Database](database.md)

Defined in: [classes/Database.ts:26](https://github.com/BenShelton/library-api/blob/ba93c4c/packages/core/src/classes/Database.ts#L26)

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

Inherited from: [Database](database.md)

Defined in: [classes/Database.ts:31](https://github.com/BenShelton/library-api/blob/ba93c4c/packages/core/src/classes/Database.ts#L31)
