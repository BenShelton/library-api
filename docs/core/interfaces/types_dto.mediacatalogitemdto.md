[Library Core](../README.md) / [types/dto](../modules/types_dto.md) / MediaCatalogItemDTO

# Interface: MediaCatalogItemDTO

[types/dto](../modules/types_dto.md).MediaCatalogItemDTO

## Table of contents

### Properties

- [doc](types_dto.mediacatalogitemdto.md#doc)
- [duration](types_dto.mediacatalogitemdto.md#duration)
- [format](types_dto.mediacatalogitemdto.md#format)
- [id](types_dto.mediacatalogitemdto.md#id)
- [image](types_dto.mediacatalogitemdto.md#image)
- [imageSqr](types_dto.mediacatalogitemdto.md#imagesqr)
- [issue](types_dto.mediacatalogitemdto.md#issue)
- [key](types_dto.mediacatalogitemdto.md#key)
- [languageAgnosticId](types_dto.mediacatalogitemdto.md#languageagnosticid)
- [title](types_dto.mediacatalogitemdto.md#title)
- [track](types_dto.mediacatalogitemdto.md#track)

## Properties

### doc

• **doc**: `string` \| `number`

Either the `docID` or `pubSymbol` depending on the kind of media.

#### Defined in

[types/dto.d.ts:135](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L135)

___

### duration

• **duration**: `number`

Duration in seconds. Also includes millisecond precision.

#### Defined in

[types/dto.d.ts:168](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L168)

___

### format

• **format**: ``"VIDEO"`` \| ``"AUDIO"``

Either `'VIDEO'` or `'AUDIO'`.

#### Defined in

[types/dto.d.ts:156](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L156)

___

### id

• **id**: `string`

A unique id for this item among all languages.

#### Defined in

[types/dto.d.ts:131](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L131)

___

### image

• **image**: `string`

A URL of the highest quality image for this media.

#### Defined in

[types/dto.d.ts:172](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L172)

___

### imageSqr

• **imageSqr**: `string`

A URL of the highest quality square image for this media.

#### Defined in

[types/dto.d.ts:176](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L176)

___

### issue

• `Optional` **issue**: `string`

An optional issue, this is a similar format to other instances of `issue` just shorter.

**`example`**
// equivalent
video.issue: 20210500
detail.issueDate: '202105'

// equivalent missing issue
video.issue: 0
detail.issueDate: undefined

#### Defined in

[types/dto.d.ts:152](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L152)

___

### key

• **key**: `string`

The `primaryCategory` which correlates to `key` in other areas.

#### Defined in

[types/dto.d.ts:160](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L160)

___

### languageAgnosticId

• **languageAgnosticId**: `string`

An id that can be used to identify the same item in a different language's media catalog.

#### Defined in

[types/dto.d.ts:127](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L127)

___

### title

• **title**: `string`

The displayed title for this media.

#### Defined in

[types/dto.d.ts:164](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L164)

___

### track

• **track**: `number`

The track number.

#### Defined in

[types/dto.d.ts:139](https://github.com/BenShelton/library-api/blob/master/packages/core/types/dto.d.ts#L139)
