[Library Core](../README.md) / types/media

# Module: types/media

## Table of contents

### Interfaces

- [CatalogSchemaVersionRow](../interfaces/types_media.catalogschemaversionrow.md)
- [CategoryRow](../interfaces/types_media.categoryrow.md)
- [CategoryRowObjContainer](../interfaces/types_media.categoryrowobjcontainer.md)
- [CategoryRowObjOnDemand](../interfaces/types_media.categoryrowobjondemand.md)
- [ImageSizes](../interfaces/types_media.imagesizes.md)
- [LanguageRow](../interfaces/types_media.languagerow.md)
- [MediaCatalogCtor](../interfaces/types_media.mediacatalogctor.md)
- [MediaItemRow](../interfaces/types_media.mediaitemrow.md)
- [SignatureRow](../interfaces/types_media.signaturerow.md)

### Type aliases

- [CategoryRowObj](types_media.md#categoryrowobj)
- [MediaCatalogRow](types_media.md#mediacatalogrow)

## Type aliases

### CategoryRowObj

Ƭ **CategoryRowObj**: [CategoryRowObjOnDemand](../interfaces/types_media.categoryrowobjondemand.md) \| [CategoryRowObjContainer](../interfaces/types_media.categoryrowobjcontainer.md)

#### Defined in

types/media.d.ts:108

___

### MediaCatalogRow

Ƭ **MediaCatalogRow**: [CatalogSchemaVersionRow](../interfaces/types_media.catalogschemaversionrow.md) \| [LanguageRow](../interfaces/types_media.languagerow.md) \| [CategoryRow](../interfaces/types_media.categoryrow.md) \| [MediaItemRow](../interfaces/types_media.mediaitemrow.md) \| [SignatureRow](../interfaces/types_media.signaturerow.md)

A row of the Media Catalog NDJSON file.

Rows can have different structures and are identified using `type`.

#### Defined in

types/media.d.ts:197
