[Library Core - v0.3.1](../README.md) / [src](../modules/src.md) / Publication

# Class: Publication

[src](../modules/src.md).Publication

Provides methods for interacting with a downloaded publication.

## Table of contents

### Constructors

- [constructor](src.publication.md#constructor)

### Properties

- [contentsPath](src.publication.md#contentspath)
- [database](src.publication.md#database)
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

Defined in: [src/classes/Publication.ts:20](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L20)

___

### database

• **database**: [*Database*](src.database.md)

Defined in: [src/classes/Publication.ts:22](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L22)

___

### filename

• **filename**: *string*

Defined in: [src/classes/Publication.ts:18](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L18)

___

### path

• **path**: *string*

Defined in: [src/classes/Publication.ts:19](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L19)

___

### type

• **type**: [*PublicationType*](../modules/types_publication.md#publicationtype)

Defined in: [src/classes/Publication.ts:21](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L21)

## Methods

### getArticles

▸ **getArticles**(): *Promise*<[*ArticleRow*](../interfaces/types_database.articlerow.md)[]\>

**Returns:** *Promise*<[*ArticleRow*](../interfaces/types_database.articlerow.md)[]\>

Defined in: [src/classes/Publication.ts:82](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L82)

___

### getImages

▸ **getImages**(`date`: *string*): *Promise*<[*ImageDTO*](../interfaces/types_dto.imagedto.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | *string* |

**Returns:** *Promise*<[*ImageDTO*](../interfaces/types_dto.imagedto.md)[]\>

Defined in: [src/classes/Publication.ts:38](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L38)

___

### getVideos

▸ **getVideos**(`date`: *string*): *Promise*<[*VideoDTO*](../interfaces/types_dto.videodto.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | *string* |

**Returns:** *Promise*<[*VideoDTO*](../interfaces/types_dto.videodto.md)[]\>

Defined in: [src/classes/Publication.ts:63](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L63)
