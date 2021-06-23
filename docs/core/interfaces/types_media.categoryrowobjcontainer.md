[Library Core](../README.md) / [types/media](../modules/types_media.md) / CategoryRowObjContainer

# Interface: CategoryRowObjContainer

[types/media](../modules/types_media.md).CategoryRowObjContainer

## Table of contents

### Properties

- [images](types_media.categoryrowobjcontainer.md#images)
- [media](types_media.categoryrowobjcontainer.md#media)
- [type](types_media.categoryrowobjcontainer.md#type)

## Properties

### images

• **images**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pnr` | `Object` |
| `pnr.lg` | `string` |
| `pnr.md` | `string` |
| `pnr.sm` | `string` |
| `pnr.xs` | `string` |

#### Defined in

[types/media.d.ts:94](https://github.com/BenShelton/library-api/blob/master/packages/core/types/media.d.ts#L94)

___

### media

• **media**: `string`[]

A list of `naturalKey` values that can be used to link to a [MediaItemRow](types_media.mediaitemrow.md).

#### Defined in

[types/media.d.ts:105](https://github.com/BenShelton/library-api/blob/master/packages/core/types/media.d.ts#L105)

___

### type

• **type**: ``"ondemand"``

Signifies this page is a list of media.

The media available is under `media`.

#### Defined in

[types/media.d.ts:93](https://github.com/BenShelton/library-api/blob/master/packages/core/types/media.d.ts#L93)
