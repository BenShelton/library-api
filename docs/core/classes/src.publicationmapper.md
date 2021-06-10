[Library Core](../README.md) / [src](../modules/src.md) / PublicationMapper

# Class: PublicationMapper

[src](../modules/src.md).PublicationMapper

Maps raw Publication database rows to more accessible DTOs.

## Table of contents

### Constructors

- [constructor](src.publicationmapper.md#constructor)

### Properties

- [filename](src.publicationmapper.md#filename)
- [languageId](src.publicationmapper.md#languageid)

### Methods

- [MapImage](src.publicationmapper.md#mapimage)
- [MapImages](src.publicationmapper.md#mapimages)
- [MapVideo](src.publicationmapper.md#mapvideo)
- [MapVideos](src.publicationmapper.md#mapvideos)

## Constructors

### constructor

\+ **new PublicationMapper**(`__namedParameters`: PublicationMapperCtor): [*PublicationMapper*](src.publicationmapper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | PublicationMapperCtor |

**Returns:** [*PublicationMapper*](src.publicationmapper.md)

Defined in: [src/classes/Mapper.ts:14](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L14)

## Properties

### filename

• **filename**: *string*

Defined in: [src/classes/Mapper.ts:13](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L13)

___

### languageId

• **languageId**: *number*

Defined in: [src/classes/Mapper.ts:14](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L14)

## Methods

### MapImage

▸ **MapImage**(`image`: [*ImageRow*](../interfaces/types_database.imagerow.md)): [*ImageDTO*](../interfaces/types_dto.imagedto.md)

Maps a raw Image database row to a Image DTO.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `image` | [*ImageRow*](../interfaces/types_database.imagerow.md) | The database row. |

**Returns:** [*ImageDTO*](../interfaces/types_dto.imagedto.md)

Defined in: [src/classes/Mapper.ts:29](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L29)

___

### MapImages

▸ **MapImages**(`images`: [*ImageRow*](../interfaces/types_database.imagerow.md)[]): [*ImageDTO*](../interfaces/types_dto.imagedto.md)[]

Maps multiple Image database rows using [MapImage](src.publicationmapper.md#mapimage) and returns the mapped array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `images` | [*ImageRow*](../interfaces/types_database.imagerow.md)[] | The database rows. |

**Returns:** [*ImageDTO*](../interfaces/types_dto.imagedto.md)[]

Defined in: [src/classes/Mapper.ts:45](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L45)

___

### MapVideo

▸ **MapVideo**(`video`: [*VideoRow*](../modules/types_database.md#videorow)): [*VideoDTO*](../interfaces/types_dto.videodto.md)

Maps a raw Video database row to a Video DTO.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `video` | [*VideoRow*](../modules/types_database.md#videorow) | The database row. |

**Returns:** [*VideoDTO*](../interfaces/types_dto.videodto.md)

Defined in: [src/classes/Mapper.ts:68](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L68)

___

### MapVideos

▸ **MapVideos**(`videos`: [*VideoRow*](../modules/types_database.md#videorow)[]): [*VideoDTO*](../interfaces/types_dto.videodto.md)[]

Maps multiple Video database rows using [MapVideo](src.publicationmapper.md#mapvideo) and returns the mapped array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `videos` | [*VideoRow*](../modules/types_database.md#videorow)[] | The database rows. |

**Returns:** [*VideoDTO*](../interfaces/types_dto.videodto.md)[]

Defined in: [src/classes/Mapper.ts:86](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L86)
