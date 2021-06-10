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

• **doc**: *string* \| *number*

Defined in: [types/dto.d.ts:47](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L47)

___

### filename

• **filename**: *string*

Defined in: [types/dto.d.ts:42](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L42)

___

### id

• **id**: *string*

A unique id not related to the database.

Defined in: [types/dto.d.ts:41](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L41)

___

### issue

• **issue**: *number*

Defined in: [types/dto.d.ts:49](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L49)

___

### languageId

• **languageId**: *number*

The Meps Language Id of this video.

Defined in: [types/dto.d.ts:53](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L53)

___

### track

• **track**: *number*

Defined in: [types/dto.d.ts:48](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L48)

___

### type

• **type**: ``"pub"`` \| ``"doc"``

Affects how information is retrieved about this video (for example in getting details or the video stream)

Defined in: [types/dto.d.ts:46](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L46)
