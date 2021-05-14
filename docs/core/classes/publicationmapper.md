[Library Core - v0.3.1](../README.md) / PublicationMapper

# Class: PublicationMapper

## Table of contents

### Constructors

- [constructor](publicationmapper.md#constructor)

### Properties

- [filename](publicationmapper.md#filename)

### Methods

- [MapImage](publicationmapper.md#mapimage)
- [MapImages](publicationmapper.md#mapimages)
- [MapVideo](publicationmapper.md#mapvideo)
- [MapVideos](publicationmapper.md#mapvideos)

## Constructors

### constructor

\+ **new PublicationMapper**(`__namedParameters`: PublicationMapperCtor): [*PublicationMapper*](publicationmapper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | PublicationMapperCtor |

**Returns:** [*PublicationMapper*](publicationmapper.md)

Defined in: [classes/Mapper.ts:9](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L9)

## Properties

### filename

• **filename**: *string*

Defined in: [classes/Mapper.ts:9](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L9)

## Methods

### MapImage

▸ **MapImage**(`image`: ImageRow): ImageDTO

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | ImageRow |

**Returns:** ImageDTO

Defined in: [classes/Mapper.ts:18](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L18)

___

### MapImages

▸ **MapImages**(`images`: ImageRow[]): ImageDTO[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `images` | ImageRow[] |

**Returns:** ImageDTO[]

Defined in: [classes/Mapper.ts:27](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L27)

___

### MapVideo

▸ **MapVideo**(`video`: VideoRow): VideoDTO

#### Parameters

| Name | Type |
| :------ | :------ |
| `video` | VideoRow |

**Returns:** VideoDTO

Defined in: [classes/Mapper.ts:40](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L40)

___

### MapVideos

▸ **MapVideos**(`videos`: VideoRow[]): VideoDTO[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `videos` | VideoRow[] |

**Returns:** VideoDTO[]

Defined in: [classes/Mapper.ts:52](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L52)
