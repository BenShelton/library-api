[Library Core](../README.md) / types/database

# Module: types/database

## Table of contents

### Interfaces

- [ArticleRow](../interfaces/types_database.articlerow.md)
- [ImageRow](../interfaces/types_database.imagerow.md)
- [LanguageRow](../interfaces/types_database.languagerow.md)
- [MediaDetailsRow](../interfaces/types_database.mediadetailsrow.md)
- [PublicationRow](../interfaces/types_database.publicationrow.md)
- [RelatedPublicationRow](../interfaces/types_database.relatedpublicationrow.md)
- [VideoRowBase](../interfaces/types_database.videorowbase.md)
- [VideoRowDoc](../interfaces/types_database.videorowdoc.md)
- [VideoRowPub](../interfaces/types_database.videorowpub.md)

### Type aliases

- [DocumentMediaRow](types_database.md#documentmediarow)
- [VideoRow](types_database.md#videorow)

## Type aliases

### DocumentMediaRow

Ƭ **DocumentMediaRow**: [ImageRow](../interfaces/types_database.imagerow.md) & { `DataType`: ``0``  } \| [VideoRow](types_database.md#videorow) & { `DataType`: ``2`` \| ``3``  }

Either an image or video row based on `DataType`.

#### Defined in

[types/database.d.ts:71](https://github.com/BenShelton/library-api/blob/master/packages/core/types/database.d.ts#L71)

___

### VideoRow

Ƭ **VideoRow**: [VideoRowPub](../interfaces/types_database.videorowpub.md) \| [VideoRowDoc](../interfaces/types_database.videorowdoc.md)

A union of the raw database columns when using a video query that returns any type video.

#### Defined in

[types/database.d.ts:66](https://github.com/BenShelton/library-api/blob/master/packages/core/types/database.d.ts#L66)
