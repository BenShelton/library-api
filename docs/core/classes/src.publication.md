[Library Core](../README.md) / [src](../modules/src.md) / Publication

# Class: Publication

[src](../modules/src.md).Publication

Provides methods for interacting with a downloaded publication.

## Table of contents

### Constructors

- [constructor](src.publication.md#constructor)

### Properties

- [contentsPath](src.publication.md#contentspath)
- [filename](src.publication.md#filename)
- [languageId](src.publication.md#languageid)
- [path](src.publication.md#path)
- [type](src.publication.md#type)

### Methods

- [getArticles](src.publication.md#getarticles)
- [getImages](src.publication.md#getimages)
- [getMediaByDocumentId](src.publication.md#getmediabydocumentid)
- [getRelatedPublications](src.publication.md#getrelatedpublications)
- [getVideos](src.publication.md#getvideos)

## Constructors

### constructor

• **new Publication**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [PublicationCtor](../interfaces/types_publication.publicationctor.md) |

#### Defined in

[src/classes/Publication.ts:21](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L21)

## Properties

### contentsPath

• **contentsPath**: `string`

#### Defined in

[src/classes/Publication.ts:19](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L19)

___

### filename

• **filename**: `string`

#### Defined in

[src/classes/Publication.ts:17](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L17)

___

### languageId

• **languageId**: `number`

#### Defined in

[src/classes/Publication.ts:21](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L21)

___

### path

• **path**: `string`

#### Defined in

[src/classes/Publication.ts:18](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L18)

___

### type

• **type**: [PublicationType](../modules/types_publication.md#publicationtype)

#### Defined in

[src/classes/Publication.ts:20](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L20)

## Methods

### getArticles

▸ **getArticles**(): `Promise`<[ArticleRow](../interfaces/types_database.articlerow.md)[]\>

**`deprecated`** This is not tested and may no longer work.

Returns raw database rows for all the articles in this publication.

#### Returns

`Promise`<[ArticleRow](../interfaces/types_database.articlerow.md)[]\>

#### Defined in

[src/classes/Publication.ts:144](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L144)

___

### getImages

▸ **getImages**(`date`): `Promise`<[ImageDTO](../interfaces/types_dto.imagedto.md)[]\>

Retrieves all the images for a particular date stored within the publication itself.
As a publication includes multiple articles this chooses the one for that day and only returns the relevant images.

If you also want images from related articles use [getRelatedPublications](src.publication.md#getrelatedpublications).

**`todo`** Validate date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `string` | The date to search for, must be formatted as `yyyy-mm-dd`. |

#### Returns

`Promise`<[ImageDTO](../interfaces/types_dto.imagedto.md)[]\>

An array of mapped images, the array will be empty if no images were found.

#### Defined in

[src/classes/Publication.ts:106](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L106)

___

### getMediaByDocumentId

▸ **getMediaByDocumentId**(`__namedParameters`): `Promise`<`Object`\>

**`todo`** Also support begin and end paragraphs.

Retrieves all the media for specified document (article) within a publication.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.beginParagraph?` | ``null`` \| `number` |
| `__namedParameters.endParagraph?` | ``null`` \| `number` |
| `__namedParameters.id` | `number` |

#### Returns

`Promise`<`Object`\>

An array of mapped related publications, the array will be empty if none are found.

#### Defined in

[src/classes/Publication.ts:78](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L78)

___

### getRelatedPublications

▸ **getRelatedPublications**(`date`): `Promise`<[RelatedPublicationDTO](../interfaces/types_dto.relatedpublicationdto.md)[]\>

Retrieves all the related publications.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `string` | The date to search for, must be formatted as `yyyy-mm-dd`. |

#### Returns

`Promise`<[RelatedPublicationDTO](../interfaces/types_dto.relatedpublicationdto.md)[]\>

An array of mapped related publications, the array will be empty if none are found.

#### Defined in

[src/classes/Publication.ts:58](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L58)

___

### getVideos

▸ **getVideos**(`date`): `Promise`<[VideoDTO](../interfaces/types_dto.videodto.md)[]\>

Retrieves all the videos for a particular date from the publication.
As a publication includes multiple articles this chooses the one for that day and only returns the relevant videos.

**`todo`** Validate date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `string` | The date to search for, must be formatted as `yyyy-mm-dd`. |

#### Returns

`Promise`<[VideoDTO](../interfaces/types_dto.videodto.md)[]\>

An array of mapped videos, the array will be empty if no videos were found.

#### Defined in

[src/classes/Publication.ts:127](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L127)
