[Library Core](../README.md) / [types/dto](../modules/types_dto.md) / LanguageDTO

# Interface: LanguageDTO

[types/dto](../modules/types_dto.md).LanguageDTO

Information returned when requesting a language.

## Table of contents

### Properties

- [englishName](types_dto.languagedto.md#englishname)
- [id](types_dto.languagedto.md#id)
- [signLanguage](types_dto.languagedto.md#signlanguage)
- [symbol](types_dto.languagedto.md#symbol)
- [vernacularName](types_dto.languagedto.md#vernacularname)

## Properties

### englishName

• **englishName**: `string`

The English name for the language, e.g. `Spanish` for Spanish.

#### Defined in

[types/dto.d.ts:111](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L111)

___

### id

• **id**: `number`

The Meps Language Id.

#### Defined in

[types/dto.d.ts:103](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L103)

___

### signLanguage

• **signLanguage**: `boolean`

Indicates whether this is a sign language.
Sign languages do not use publications so are generally unsupported.

#### Defined in

[types/dto.d.ts:120](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L120)

___

### symbol

• **symbol**: `string`

The unique language Symbol.

#### Defined in

[types/dto.d.ts:107](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L107)

___

### vernacularName

• **vernacularName**: `string`

The language name as displayed in that language, e.g. `español` for Spanish.

#### Defined in

[types/dto.d.ts:115](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L115)
