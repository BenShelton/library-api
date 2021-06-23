[Library Core](../README.md) / [types/dto](../modules/types_dto.md) / ImageDTO

# Interface: ImageDTO

[types/dto](../modules/types_dto.md).ImageDTO

The returned information when mapping raw image data.

## Table of contents

### Properties

- [caption](types_dto.imagedto.md#caption)
- [categoryType](types_dto.imagedto.md#categorytype)
- [filePath](types_dto.imagedto.md#filepath)
- [filename](types_dto.imagedto.md#filename)
- [id](types_dto.imagedto.md#id)
- [languageId](types_dto.imagedto.md#languageid)

## Properties

### caption

• **caption**: `string`

The description in the database for this image.

#### Defined in

[types/dto.d.ts:18](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L18)

___

### categoryType

• **categoryType**: `number`

The internal category type. Known types are:
- 8 = Article image (Normally displayed)
- 9 = Article cover image (Not normally displayed)
- 15 = Publication cover image (Not normally displayed)

#### Defined in

[types/dto.d.ts:29](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L29)

___

### filePath

• **filePath**: `string`

The path to access the image within the downloaded publication.

#### Defined in

[types/dto.d.ts:22](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L22)

___

### filename

• **filename**: `string`

The filename of the image.

#### Defined in

[types/dto.d.ts:14](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L14)

___

### id

• **id**: `string`

A unique id not related to the database.

#### Defined in

[types/dto.d.ts:10](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L10)

___

### languageId

• **languageId**: `number`

The Meps Language Id of this image.

#### Defined in

[types/dto.d.ts:33](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L33)
