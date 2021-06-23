[Library Core](../README.md) / [types/media](../modules/types_media.md) / CategoryRowObjOnDemand

# Interface: CategoryRowObjOnDemand

[types/media](../modules/types_media.md).CategoryRowObjOnDemand

## Table of contents

### Properties

- [key](types_media.categoryrowobjondemand.md#key)
- [name](types_media.categoryrowobjondemand.md#name)
- [subcategories](types_media.categoryrowobjondemand.md#subcategories)
- [type](types_media.categoryrowobjondemand.md#type)

## Properties

### key

• **key**: `string`

#### Defined in

[types/media.d.ts:79](https://github.com/BenShelton/library-api/blob/master/packages/core/types/media.d.ts#L79)

___

### name

• **name**: `string`

#### Defined in

[types/media.d.ts:80](https://github.com/BenShelton/library-api/blob/master/packages/core/types/media.d.ts#L80)

___

### subcategories

• **subcategories**: [CategoryRowObj](../modules/types_media.md#categoryrowobj)[]

Nested "pages" of categories.

#### Defined in

[types/media.d.ts:84](https://github.com/BenShelton/library-api/blob/master/packages/core/types/media.d.ts#L84)

___

### type

• **type**: ``"container"``

Signifies this "page" of categories is a list of more categories.

The nested categories are under `subcategories`.

#### Defined in

[types/media.d.ts:78](https://github.com/BenShelton/library-api/blob/master/packages/core/types/media.d.ts#L78)
