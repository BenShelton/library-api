[Library Core](../README.md) / [src](../modules/src.md) / CatalogMapper

# Class: CatalogMapper

[src](../modules/src.md).CatalogMapper

Maps raw Catalog database rows to more accessible DTOs.

## Table of contents

### Constructors

- [constructor](src.catalogmapper.md#constructor)

### Methods

- [MapMediaDetails](src.catalogmapper.md#mapmediadetails)

## Constructors

### constructor

• **new CatalogMapper**()

## Methods

### MapMediaDetails

▸ **MapMediaDetails**(`details`): [MediaDetailsDTO](../interfaces/types_dto.mediadetailsdto.md)

Maps a raw Media Details database row to a Media Details DTO.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `details` | [MediaDetailsRow](../interfaces/types_database.mediadetailsrow.md) | The database row. |

#### Returns

[MediaDetailsDTO](../interfaces/types_dto.mediadetailsdto.md)

#### Defined in

[src/classes/Mapper.ts:150](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L150)
