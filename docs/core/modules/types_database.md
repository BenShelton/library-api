[Library Core - v0.3.1](../README.md) / types/database

# Module: types/database

## Table of contents

### Interfaces

- [ArticleRow](../interfaces/types_database.articlerow.md)
- [ImageRow](../interfaces/types_database.imagerow.md)
- [MediaDetailsRow](../interfaces/types_database.mediadetailsrow.md)
- [PublicationRow](../interfaces/types_database.publicationrow.md)
- [VideoRowBase](../interfaces/types_database.videorowbase.md)
- [VideoRowDoc](../interfaces/types_database.videorowdoc.md)
- [VideoRowPub](../interfaces/types_database.videorowpub.md)

### Type aliases

- [VideoRow](types_database.md#videorow)

## Type aliases

### VideoRow

Ƭ **VideoRow**: [*VideoRowPub*](../interfaces/types_database.videorowpub.md) \| [*VideoRowDoc*](../interfaces/types_database.videorowdoc.md)

A union of the raw database columns when using a video query that returns any type video.

Defined in: [types/database.d.ts:62](https://github.com/BenShelton/library-api/blob/master/packages/core/types/database.d.ts#L62)
