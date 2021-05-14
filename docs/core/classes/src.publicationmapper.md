[Library Core - v0.3.1](../README.md) / [src](../modules/src.md) / PublicationMapper

# Class: PublicationMapper

[src](../modules/src.md).PublicationMapper

## Table of contents

### Constructors

- [constructor](src.publicationmapper.md#constructor)

### Properties

- [filename](src.publicationmapper.md#filename)

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

Defined in: [src/classes/Mapper.ts:9](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L9)

## Properties

### filename

• **filename**: *string*

Defined in: [src/classes/Mapper.ts:9](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L9)

## Methods

### MapImage

▸ **MapImage**(`image`: [*ImageRow*](../interfaces/types_database.imagerow.md)): [*ImageDTO*](../interfaces/types_dto.imagedto.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [*ImageRow*](../interfaces/types_database.imagerow.md) |

**Returns:** [*ImageDTO*](../interfaces/types_dto.imagedto.md)

Defined in: [src/classes/Mapper.ts:18](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L18)

___

### MapImages

▸ **MapImages**(`images`: [*ImageRow*](../interfaces/types_database.imagerow.md)[]): [*ImageDTO*](../interfaces/types_dto.imagedto.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `images` | [*ImageRow*](../interfaces/types_database.imagerow.md)[] |

**Returns:** [*ImageDTO*](../interfaces/types_dto.imagedto.md)[]

Defined in: [src/classes/Mapper.ts:27](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L27)

___

### MapVideo

▸ **MapVideo**(`video`: [*VideoRow*](../modules/types_database.md#videorow)): [*VideoDTO*](../interfaces/types_dto.videodto.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `video` | [*VideoRow*](../modules/types_database.md#videorow) |

**Returns:** [*VideoDTO*](../interfaces/types_dto.videodto.md)

Defined in: [src/classes/Mapper.ts:40](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L40)

___

### MapVideos

▸ **MapVideos**(`videos`: [*VideoRow*](../modules/types_database.md#videorow)[]): [*VideoDTO*](../interfaces/types_dto.videodto.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `videos` | [*VideoRow*](../modules/types_database.md#videorow)[] |

**Returns:** [*VideoDTO*](../interfaces/types_dto.videodto.md)[]

Defined in: [src/classes/Mapper.ts:52](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L52)
