[Library Core - v0.3.1](../README.md) / [src](../modules/src.md) / CatalogDatabase

# Class: CatalogDatabase

[src](../modules/src.md).CatalogDatabase

Provides extra methods for running preset queries against a catalog.

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

\+ **new CatalogDatabase**(`path`: *string*): [*CatalogDatabase*](src.catalogdatabase.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | *string* | The path to the database. |

**Returns:** [*CatalogDatabase*](src.catalogdatabase.md)

Overrides: [Database](src.database.md)

Defined in: [src/classes/Database.ts:79](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L79)

## Methods

### getMediaDetails

▸ **getMediaDetails**(`__namedParameters`: { `doc`: *string* \| *number* ; `issue`: *string* \| *number* ; `track`: *string* \| *number* ; `type`: ``"pub"`` \| ``"doc"``  }): *Promise*<``null`` \| [*MediaDetailsDTO*](../interfaces/types_dto.mediadetailsdto.md)\>

Retrieves information about a video from the main catalog.
The video details found within a publication's database contain limited information about the video itself.
Most of this information is contained within the main catalog but mapped completely differently.

This method allows passing in the video returned from the publication to get more details from the catalog.
The returned image will be of the highest quality available (biggest size).

**`example`**
```ts
const video = publication.getVideo(...)
const details = await db.getMediaDetails(video)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *object* |
| `__namedParameters.doc` | *string* \| *number* |
| `__namedParameters.issue` | *string* \| *number* |
| `__namedParameters.track` | *string* \| *number* |
| `__namedParameters.type` | ``"pub"`` \| ``"doc"`` |

**Returns:** *Promise*<``null`` \| [*MediaDetailsDTO*](../interfaces/types_dto.mediadetailsdto.md)\>

MediaDetails if they exist, `null` if they are not found.

Defined in: [src/classes/Database.ts:161](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L161)

___

### getMonthlyPublications

▸ **getMonthlyPublications**(): *Promise*<[*PublicationRow*](../interfaces/types_database.publicationrow.md)[]\>

**`deprecated`** This has a hardcoded date and returns unmapped data, use [getPublication](src.catalogdatabase.md#getpublication) instead.

**Returns:** *Promise*<[*PublicationRow*](../interfaces/types_database.publicationrow.md)[]\>

All the publications for the current month based on today.

Defined in: [src/classes/Database.ts:94](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L94)

___

### getPublication

▸ **getPublication**(`date`: *string*, `downloadDir`: *string*, `type`: [*PublicationType*](../modules/types_publication.md#publicationtype)): *Promise*<``null`` \| [*Publication*](src.publication.md)\>

Searches the database for the specified publication based on a date.
If that publication is not yet downloaded, will download it to the specified directory.

**`todo`** Validate date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | *string* | The date to search for, must be formatted as `yyyy-mm-dd`. |
| `downloadDir` | *string* | The directory to download the publication to if it does not exist. |
| `type` | [*PublicationType*](../modules/types_publication.md#publicationtype) | See [PublicationType](../modules/types_publication.md#publicationtype) |

**Returns:** *Promise*<``null`` \| [*Publication*](src.publication.md)\>

A [Publication](src.publication.md) class to help access the downloaded publication, or `null` if not found.

Defined in: [src/classes/Database.ts:114](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L114)

___

### getRow

▸ **getRow**<T\>(`query`: *string*, `params?`: *string* \| *string*[] \| *Record*<string, string\>): *Promise*<undefined \| T\>

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
| `query` | *string* | The SQL query to run. |
| `params?` | *string* \| *string*[] \| *Record*<string, string\> | Query params to use. |

**Returns:** *Promise*<undefined \| T\>

A single row if it exists, or `undefined` if not found.

Inherited from: [Database](src.database.md)

Defined in: [src/classes/Database.ts:49](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L49)

___

### getRows

▸ **getRows**<T\>(`query`: *string*, `params?`: *string* \| *string*[] \| *Record*<string, string\>): *Promise*<T[]\>

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
| `query` | *string* | The SQL query to run. |
| `params?` | *string* \| *string*[] \| *Record*<string, string\> | Query params to use. |

**Returns:** *Promise*<T[]\>

An array of matched rows. If none were found an empty array will be returned.

Inherited from: [Database](src.database.md)

Defined in: [src/classes/Database.ts:69](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Database.ts#L69)
