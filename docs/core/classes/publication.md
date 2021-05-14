[Library Core - v0.3.1](../README.md) / Publication

# Class: Publication

Provides methods for interacting with a downloaded publication

## Table of contents

### Constructors

- [constructor](publication.md#constructor)

### Properties

- [\_mapper](publication.md#_mapper)
- [contentsPath](publication.md#contentspath)
- [database](publication.md#database)
- [filename](publication.md#filename)
- [path](publication.md#path)
- [type](publication.md#type)

### Methods

- [getArticles](publication.md#getarticles)
- [getImages](publication.md#getimages)
- [getVideos](publication.md#getvideos)

## Constructors

### constructor

\+ **new Publication**(`__namedParameters`: PublicationCtor): [*Publication*](publication.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | PublicationCtor |

**Returns:** [*Publication*](publication.md)

Defined in: [classes/Publication.ts:21](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L21)

## Properties

### \_mapper

• **\_mapper**: [*PublicationMapper*](publicationmapper.md)

Defined in: [classes/Publication.ts:21](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L21)

___

### contentsPath

• **contentsPath**: *string*

Defined in: [classes/Publication.ts:18](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L18)

___

### database

• **database**: [*Database*](database.md)

Defined in: [classes/Publication.ts:20](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L20)

___

### filename

• **filename**: *string*

Defined in: [classes/Publication.ts:16](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L16)

___

### path

• **path**: *string*

Defined in: [classes/Publication.ts:17](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L17)

___

### type

• **type**: PublicationType

Defined in: [classes/Publication.ts:19](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L19)

## Methods

### getArticles

▸ **getArticles**(): *Promise*<ArticleRow[]\>

**Returns:** *Promise*<ArticleRow[]\>

Defined in: [classes/Publication.ts:77](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L77)

___

### getImages

▸ **getImages**(`date`: *string*): *Promise*<ImageDTO[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | *string* |

**Returns:** *Promise*<ImageDTO[]\>

Defined in: [classes/Publication.ts:33](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L33)

___

### getVideos

▸ **getVideos**(`date`: *string*): *Promise*<VideoDTO[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | *string* |

**Returns:** *Promise*<VideoDTO[]\>

Defined in: [classes/Publication.ts:58](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Publication.ts#L58)
