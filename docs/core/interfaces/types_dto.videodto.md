[Library Core](../README.md) / [types/dto](../modules/types_dto.md) / VideoDTO

# Interface: VideoDTO

[types/dto](../modules/types_dto.md).VideoDTO

The returned information when mapping raw video data.

## Table of contents

### Properties

- [doc](types_dto.videodto.md#doc)
- [filename](types_dto.videodto.md#filename)
- [id](types_dto.videodto.md#id)
- [issue](types_dto.videodto.md#issue)
- [languageId](types_dto.videodto.md#languageid)
- [track](types_dto.videodto.md#track)
- [type](types_dto.videodto.md#type)

## Properties

### doc

• **doc**: `string` \| `number`

#### Defined in

[types/dto.d.ts:56](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L56)

___

### filename

• **filename**: `string`

A filename. Purely informational.

#### Defined in

[types/dto.d.ts:51](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L51)

___

### id

• **id**: `string`

A unique id not related to the database.

#### Defined in

[types/dto.d.ts:47](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L47)

___

### issue

• **issue**: `number`

Either an issue date stored as a number, or `0` if irrelevant.

**`example`**
20210500

#### Defined in

[types/dto.d.ts:64](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L64)

___

### languageId

• **languageId**: `number`

The Meps Language Id of this video.

#### Defined in

[types/dto.d.ts:68](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L68)

___

### track

• **track**: `number`

#### Defined in

[types/dto.d.ts:57](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L57)

___

### type

• **type**: ``"pub"`` \| ``"doc"``

Affects how information is retrieved about this video (for example in getting details or the video stream)

#### Defined in

[types/dto.d.ts:55](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L55)
