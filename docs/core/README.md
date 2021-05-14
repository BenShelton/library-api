Library Core - v0.3.1

# Library Core - v0.3.1

## Table of contents

### Classes

- [CatalogDatabase](classes/catalogdatabase.md)
- [CatalogMapper](classes/catalogmapper.md)
- [Database](classes/database.md)
- [Publication](classes/publication.md)
- [PublicationMapper](classes/publicationmapper.md)

### Variables

- [CATALOG\_URL](README.md#catalog_url)
- [MEDIA\_URL](README.md#media_url)
- [PUBLICATION\_CLASSES](README.md#publication_classes)
- [PUBLICATION\_TYPES](README.md#publication_types)
- [PUBLICATION\_URL](README.md#publication_url)

### Functions

- [checkExists](README.md#checkexists)
- [createDir](README.md#createdir)
- [downloadCatalog](README.md#downloadcatalog)
- [downloadFile](README.md#downloadfile)
- [downloadPublication](README.md#downloadpublication)
- [downloadVideoStream](README.md#downloadvideostream)
- [emptyDir](README.md#emptydir)
- [getVideoStream](README.md#getvideostream)
- [isValidDate](README.md#isvaliddate)
- [updateCatalog](README.md#updatecatalog)

## Variables

### CATALOG\_URL

• `Const` **CATALOG\_URL**: ``"https://download-a.akamaihd.net/meps/jwl/current/catalogs/v3/catalog.db.gz"``

Defined in: [constants.ts:2](https://github.com/BenShelton/library-api/blob/master/packages/core/src/constants.ts#L2)

___

### MEDIA\_URL

• `Const` **MEDIA\_URL**: ``"https://api.hag27.com/GETPUBMEDIALINKS"``= 'https://api.hag27.com/GETPUBMEDIALINKS'

Defined in: [constants.ts:3](https://github.com/BenShelton/library-api/blob/master/packages/core/src/constants.ts#L3)

___

### PUBLICATION\_CLASSES

• `Const` **PUBLICATION\_CLASSES**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `OCLM_WEEK` | *number* |
| `WATCHTOWER_ARTICLE` | *number* |

Defined in: [constants.ts:10](https://github.com/BenShelton/library-api/blob/master/packages/core/src/constants.ts#L10)

___

### PUBLICATION\_TYPES

• `Const` **PUBLICATION\_TYPES**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `OCLM` | *number* |
| `WATCHTOWER` | *number* |

Defined in: [constants.ts:5](https://github.com/BenShelton/library-api/blob/master/packages/core/src/constants.ts#L5)

___

### PUBLICATION\_URL

• `Const` **PUBLICATION\_URL**: ``"https://download-a.akamaihd.net"``= 'https://download-a.akamaihd.net'

Defined in: [constants.ts:1](https://github.com/BenShelton/library-api/blob/master/packages/core/src/constants.ts#L1)

## Functions

### checkExists

▸ **checkExists**(`path`: *string*): *Promise*<boolean\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |

**Returns:** *Promise*<boolean\>

Defined in: [utils.ts:15](https://github.com/BenShelton/library-api/blob/master/packages/core/src/utils.ts#L15)

___

### createDir

▸ **createDir**(`dir`: *string*): *Promise*<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | *string* |

**Returns:** *Promise*<string\>

Defined in: [utils.ts:4](https://github.com/BenShelton/library-api/blob/master/packages/core/src/utils.ts#L4)

___

### downloadCatalog

▸ **downloadCatalog**(`path`: *string*): *Promise*<void\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |

**Returns:** *Promise*<void\>

Defined in: [download.ts:33](https://github.com/BenShelton/library-api/blob/master/packages/core/src/download.ts#L33)

___

### downloadFile

▸ **downloadFile**(`url`: *string*, `path`: *string*): *Promise*<void\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `path` | *string* |

**Returns:** *Promise*<void\>

Defined in: [download.ts:24](https://github.com/BenShelton/library-api/blob/master/packages/core/src/download.ts#L24)

___

### downloadPublication

▸ **downloadPublication**(`url`: *string*, `path`: *string*): *Promise*<void\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `path` | *string* |

**Returns:** *Promise*<void\>

Defined in: [download.ts:43](https://github.com/BenShelton/library-api/blob/master/packages/core/src/download.ts#L43)

___

### downloadVideoStream

▸ **downloadVideoStream**(`videoArgs`: *Parameters*<*typeof* [*getVideoStream*](README.md#getvideostream)\>[``0``], `path`: *string*): *Promise*<``true`` \| ``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `videoArgs` | *Parameters*<*typeof* [*getVideoStream*](README.md#getvideostream)\>[``0``] |
| `path` | *string* |

**Returns:** *Promise*<``true`` \| ``null``\>

Defined in: [download.ts:87](https://github.com/BenShelton/library-api/blob/master/packages/core/src/download.ts#L87)

___

### emptyDir

▸ **emptyDir**(`dir`: *string*): *Promise*<void\>

Removes the entire directory (similar to rm -rf)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | *string* |

**Returns:** *Promise*<void\>

Defined in: [utils.ts:11](https://github.com/BenShelton/library-api/blob/master/packages/core/src/utils.ts#L11)

___

### getVideoStream

▸ **getVideoStream**(`__namedParameters`: { `doc`: *string* \| *number* ; `issue`: *string* \| *number* ; `track`: *string* \| *number* ; `type`: VideoDTO[``"type"``]  }): *Promise*<NodeJS.ReadableStream \| ``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *object* |
| `__namedParameters.doc` | *string* \| *number* |
| `__namedParameters.issue` | *string* \| *number* |
| `__namedParameters.track` | *string* \| *number* |
| `__namedParameters.type` | VideoDTO[``"type"``] |

**Returns:** *Promise*<NodeJS.ReadableStream \| ``null``\>

Defined in: [download.ts:61](https://github.com/BenShelton/library-api/blob/master/packages/core/src/download.ts#L61)

___

### isValidDate

▸ **isValidDate**(`date`: *unknown*): date is string

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | *unknown* |

**Returns:** date is string

Defined in: [utils.ts:24](https://github.com/BenShelton/library-api/blob/master/packages/core/src/utils.ts#L24)

___

### updateCatalog

▸ **updateCatalog**(`path`: *string*): *Promise*<boolean\>

Checks whether the currently downloaded catalog is the latest version & updates it if not.

Returns `true` if the catalog was updated, `false` if it was already the latest version.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |

**Returns:** *Promise*<boolean\>

Defined in: [catalog.ts:9](https://github.com/BenShelton/library-api/blob/master/packages/core/src/catalog.ts#L9)
