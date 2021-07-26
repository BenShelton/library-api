[Library Core](../README.md) / [src](../modules/src.md) / PublicationMapper

# Class: PublicationMapper

[src](../modules/src.md).PublicationMapper

Maps raw Publication database rows to more accessible DTOs.

## Table of contents

### Constructors

- [constructor](src.publicationmapper.md#constructor)

### Properties

- [contentsPath](src.publicationmapper.md#contentspath)
- [filename](src.publicationmapper.md#filename)
- [languageId](src.publicationmapper.md#languageid)

### Methods

- [MapImage](src.publicationmapper.md#mapimage)
- [MapImages](src.publicationmapper.md#mapimages)
- [MapRelatedPublication](src.publicationmapper.md#maprelatedpublication)
- [MapRelatedPublications](src.publicationmapper.md#maprelatedpublications)
- [MapVideo](src.publicationmapper.md#mapvideo)
- [MapVideos](src.publicationmapper.md#mapvideos)

## Constructors

### constructor

• **new PublicationMapper**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `PublicationMapperCtor` |

#### Defined in

[src/classes/Mapper.ts:16](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L16)

## Properties

### contentsPath

• **contentsPath**: `string`

#### Defined in

[src/classes/Mapper.ts:15](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L15)

___

### filename

• **filename**: `string`

#### Defined in

[src/classes/Mapper.ts:14](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L14)

___

### languageId

• **languageId**: `number`

#### Defined in

[src/classes/Mapper.ts:16](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L16)

## Methods

### MapImage

▸ **MapImage**(`image`): [ImageDTO](../interfaces/types_dto.imagedto.md)

Maps a raw Image database row to a Image DTO.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `image` | [ImageRow](../interfaces/types_database.imagerow.md) | The database row. |

#### Returns

[ImageDTO](../interfaces/types_dto.imagedto.md)

#### Defined in

[src/classes/Mapper.ts:32](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L32)

___

### MapImages

▸ **MapImages**(`images`): [ImageDTO](../interfaces/types_dto.imagedto.md)[]

Maps multiple Image database rows using [MapImage](src.publicationmapper.md#mapimage) and returns the mapped array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `images` | [ImageRow](../interfaces/types_database.imagerow.md)[] | The database rows. |

#### Returns

[ImageDTO](../interfaces/types_dto.imagedto.md)[]

#### Defined in

[src/classes/Mapper.ts:49](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L49)

___

### MapRelatedPublication

▸ **MapRelatedPublication**(`publication`): [RelatedPublicationDTO](../interfaces/types_dto.relatedpublicationdto.md)

Maps a raw Related Publication database row to a Related Publication DTO.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publication` | [RelatedPublicationRow](../interfaces/types_database.relatedpublicationrow.md) | The database row. |

#### Returns

[RelatedPublicationDTO](../interfaces/types_dto.relatedpublicationdto.md)

#### Defined in

[src/classes/Mapper.ts:99](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L99)

___

### MapRelatedPublications

▸ **MapRelatedPublications**(`publications`): [RelatedPublicationDTO](../interfaces/types_dto.relatedpublicationdto.md)[]

Maps multiple Related Publication database rows using [MapRelatedPublication](src.publicationmapper.md#maprelatedpublication) and returns the mapped array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publications` | [RelatedPublicationRow](../interfaces/types_database.relatedpublicationrow.md)[] | The database rows. |

#### Returns

[RelatedPublicationDTO](../interfaces/types_dto.relatedpublicationdto.md)[]

#### Defined in

[src/classes/Mapper.ts:112](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L112)

___

### MapVideo

▸ **MapVideo**(`video`): [VideoDTO](../interfaces/types_dto.videodto.md)

Maps a raw Video database row to a Video DTO.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `video` | [VideoRow](../modules/types_database.md#videorow) | The database row. |

#### Returns

[VideoDTO](../interfaces/types_dto.videodto.md)

#### Defined in

[src/classes/Mapper.ts:72](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L72)

___

### MapVideos

▸ **MapVideos**(`videos`): [VideoDTO](../interfaces/types_dto.videodto.md)[]

Maps multiple Video database rows using [MapVideo](src.publicationmapper.md#mapvideo) and returns the mapped array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `videos` | [VideoRow](../modules/types_database.md#videorow)[] | The database rows. |

#### Returns

[VideoDTO](../interfaces/types_dto.videodto.md)[]

#### Defined in

[src/classes/Mapper.ts:90](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L90)
