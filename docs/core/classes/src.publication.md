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
- [path](src.publication.md#path)
- [type](src.publication.md#type)

### Methods

- [getArticles](src.publication.md#getarticles)
- [getImages](src.publication.md#getimages)
- [getVideos](src.publication.md#getvideos)

## Constructors

### constructor

\+ **new Publication**(`__namedParameters`: [*PublicationCtor*](../interfaces/types_publication.publicationctor.md)): [*Publication*](src.publication.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [*PublicationCtor*](../interfaces/types_publication.publicationctor.md) |

**Returns:** [*Publication*](src.publication.md)

Defined in: [src/classes/Publication.ts:22](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L22)

## Properties

### contentsPath

• **contentsPath**: *string*

Defined in: [src/classes/Publication.ts:21](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L21)

___

### filename

• **filename**: *string*

Defined in: [src/classes/Publication.ts:19](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L19)

___

### path

• **path**: *string*

Defined in: [src/classes/Publication.ts:20](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L20)

___

### type

• **type**: [*PublicationType*](../modules/types_publication.md#publicationtype)

Defined in: [src/classes/Publication.ts:22](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L22)

## Methods

### getArticles

▸ **getArticles**(): *Promise*<[*ArticleRow*](../interfaces/types_database.articlerow.md)[]\>

**`deprecated`** This is not tested and may no longer work.

Returns raw database rows for all the articles in this publication.

**Returns:** *Promise*<[*ArticleRow*](../interfaces/types_database.articlerow.md)[]\>

Defined in: [src/classes/Publication.ts:106](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L106)

___

### getImages

▸ **getImages**(`date`: *string*): *Promise*<[*ImageDTO*](../interfaces/types_dto.imagedto.md)[]\>

Retrieves all the images for a particular date from the publication.
As a publication includes multiple articles this chooses the one for that day and only returns the relevant images.

**`todo`** Validate date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | *string* | The date to search for, must be formatted as `yyyy-mm-dd`. |

**Returns:** *Promise*<[*ImageDTO*](../interfaces/types_dto.imagedto.md)[]\>

An array of mapped images, the array will be empty if no images were found.

Defined in: [src/classes/Publication.ts:47](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L47)

___

### getVideos

▸ **getVideos**(`date`: *string*): *Promise*<[*VideoDTO*](../interfaces/types_dto.videodto.md)[]\>

Retrieves all the videos for a particular date from the publication.
As a publication includes multiple articles this chooses the one for that day and only returns the relevant videos.

**`todo`** Validate date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | *string* | The date to search for, must be formatted as `yyyy-mm-dd`. |

**Returns:** *Promise*<[*VideoDTO*](../interfaces/types_dto.videodto.md)[]\>

An array of mapped videos, the array will be empty if no videos were found.

Defined in: [src/classes/Publication.ts:82](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L82)
