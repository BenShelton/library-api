[Library Core](../README.md) / [src](../modules/src.md) / MediaCatalogMapper

# Class: MediaCatalogMapper

[src](../modules/src.md).MediaCatalogMapper

Maps Media Catalog database details to more accessible DTOs.

## Table of contents

### Constructors

- [constructor](src.mediacatalogmapper.md#constructor)

### Methods

- [MapMediaDetails](src.mediacatalogmapper.md#mapmediadetails)

## Constructors

### constructor

• **new MediaCatalogMapper**()

## Methods

### MapMediaDetails

▸ **MapMediaDetails**(`details`): [MediaDetailsDTO](../interfaces/types_dto.mediadetailsdto.md)

Maps a Media Catalog media details row to a Media Details DTO.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `details` | [MediaCatalogItemDTO](../interfaces/types_dto.mediacatalogitemdto.md) | The database row. |

#### Returns

[MediaDetailsDTO](../interfaces/types_dto.mediadetailsdto.md)

#### Defined in

[src/classes/Mapper.ts:176](https://github.com/BenShelton/library-api/blob/master/packages/core/src/classes/Mapper.ts#L176)
