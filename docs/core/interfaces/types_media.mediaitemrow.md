[Library Core](../README.md) / [types/media](../modules/types_media.md) / MediaItemRow

# Interface: MediaItemRow

[types/media](../modules/types_media.md).MediaItemRow

## Table of contents

### Properties

- [o](types_media.mediaitemrow.md#o)
- [type](types_media.mediaitemrow.md#type)

## Properties

### o

• **o**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `checksums` | `string`[] | - |
| `duration` | `number` | Duration in seconds. Also includes millisecond precision. |
| `firstPublished` | `string` | ISO Date string. |
| `images` | `Object` | - |
| `images.lsr?` | [ImageSizes](types_media.imagesizes.md) | Widescreen (16:9) images. |
| `images.sqr?` | [ImageSizes](types_media.imagesizes.md) | Square images. You probably want `lsr` instead. |
| `keyParts` | { `formatCode`: ``"VIDEO"`` \| ``"AUDIO"`` ; `languageCode`: `string` ; `track`: `number`  } & { `docID`: `number`  } & { `formatCode`: ``"VIDEO"`` \| ``"AUDIO"`` ; `languageCode`: `string` ; `track`: `number`  } & { `issueDate?`: `string` ; `pubSymbol`: `string`  } | - |
| `languageAgnosticNaturalKey` | `string` | The same as `naturalKey` but without the language.  Possibly used to find the same media in a different language's Media Catalog. |
| `naturalKey` | `string` | An Id of sorts, used within category rows as a reference. |
| `primaryCategory` | `string` | Refers to the `key` of a [CategoryRowObj](../modules/types_media.md#categoryrowobj). |
| `title` | `string` | The displayed title. |

#### Defined in

[types/media.d.ts:117](https://github.com/BenShelton/library-api/blob/master/packages/core/types/media.d.ts#L117)

___

### type

• **type**: ``"media-item"``

#### Defined in

[types/media.d.ts:116](https://github.com/BenShelton/library-api/blob/master/packages/core/types/media.d.ts#L116)
