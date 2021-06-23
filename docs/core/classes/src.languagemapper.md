[Library Core](../README.md) / [src](../modules/src.md) / LanguageMapper

# Class: LanguageMapper

[src](../modules/src.md).LanguageMapper

Maps raw language data to more accessible DTOs.

## Table of contents

### Constructors

- [constructor](src.languagemapper.md#constructor)

### Methods

- [MapLanguage](src.languagemapper.md#maplanguage)
- [MapLanguages](src.languagemapper.md#maplanguages)

## Constructors

### constructor

• **new LanguageMapper**()

## Methods

### MapLanguage

▸ **MapLanguage**(`language`): [LanguageDTO](../interfaces/types_dto.languagedto.md)

Maps a raw Language data row to a Language DTO.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `language` | [LanguageRow](../interfaces/types_database.languagerow.md) | The data row. |

#### Returns

[LanguageDTO](../interfaces/types_dto.languagedto.md)

#### Defined in

[src/classes/Mapper.ts:147](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L147)

___

### MapLanguages

▸ **MapLanguages**(`languages`): [LanguageDTO](../interfaces/types_dto.languagedto.md)[]

Maps multiple Language data rows using [MapLanguage](src.languagemapper.md#maplanguage) and returns the mapped array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `languages` | [LanguageRow](../interfaces/types_database.languagerow.md)[] | The data rows. |

#### Returns

[LanguageDTO](../interfaces/types_dto.languagedto.md)[]

#### Defined in

[src/classes/Mapper.ts:162](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L162)
