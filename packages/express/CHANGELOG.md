# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.11.0](https://github.com/BenShelton/library-api/compare/v0.10.1...v0.11.0) (2021-07-26)


### Features

* **express:** add endpoint for related publications ([fae1815](https://github.com/BenShelton/library-api/commit/fae18159a50f97f12dc12766820fe2e25ae86867))
* **express:** add endpoint for retrieving related media ([a790166](https://github.com/BenShelton/library-api/commit/a7901667d312eb0defd9f34b0bf0af1d8b8a3565))





# [0.10.0](https://github.com/BenShelton/library-api/compare/v0.9.1...v0.10.0) (2021-06-23)


### Features

* **express:** use new media catalog when getting media details ([2d21c24](https://github.com/BenShelton/library-api/commit/2d21c240c90085191cbfc9281213894b34009e2c)), closes [#55](https://github.com/BenShelton/library-api/issues/55)





# [0.9.0](https://github.com/BenShelton/library-api/compare/v0.8.0...v0.9.0) (2021-06-10)


### Features

* **express:** add optional language support on existing endpoints ([7426ec0](https://github.com/BenShelton/library-api/commit/7426ec05df594400b438d76cce2f139c9c13185d)), closes [#12](https://github.com/BenShelton/library-api/issues/12)





# [0.8.0](https://github.com/BenShelton/library-api/compare/v0.7.0...v0.8.0) (2021-06-08)

**Note:** Version bump only for package @library-api/express





# [0.7.0](https://github.com/BenShelton/library-api/compare/v0.6.2...v0.7.0) (2021-06-01)

**Note:** Version bump only for package @library-api/express





# [0.6.0](https://github.com/BenShelton/library-api/compare/v0.5.0...v0.6.0) (2021-05-30)

**Note:** Version bump only for package @library-api/express





# [0.5.0](https://github.com/BenShelton/library-api/compare/v0.4.0...v0.5.0) (2021-05-21)

**Note:** Version bump only for package @library-api/express





# [0.4.0](https://github.com/BenShelton/library-api/compare/v0.3.1...v0.4.0) (2021-05-15)

**Note:** Version bump only for package @library-api/express





## [0.3.1](https://github.com/BenShelton/library-api/compare/v0.3.0...v0.3.1) (2021-05-12)

**Note:** Version bump only for package @library-api/express





# 0.3.0 (2021-05-11)


### Bug Fixes

* **express/download:** correct error message for /video ([b634708](https://github.com/BenShelton/library-api/commit/b63470844fdd5e340ec5ab427df1339b9b00780b))
* **packages/express:** use relative imports as we lack path mapping ([5c45e08](https://github.com/BenShelton/library-api/commit/5c45e0894830cc3f42fd3c2d4170e81d46b9a0f8))


### Features

* **core:** add id to images/videos, rename video id to doc ([9ec9e8b](https://github.com/BenShelton/library-api/commit/9ec9e8ba6608a4234aab6183b81e87a7c0b0950d))
* **core:** add id to mediaDetails, allow passing a full video into getMediaDetails for convenience ([2cb6afb](https://github.com/BenShelton/library-api/commit/2cb6afb4e34b46127ccd53a74d588e27258b5495))
* **core:** rename downloadVideoStream to getVideoStream, add downloadVideoStream which writes file ([cddd05d](https://github.com/BenShelton/library-api/commit/cddd05df59e6595cc446bdf590ae1643ae09ee99))
* **express:** add /media/details endpoint ([d20ec3f](https://github.com/BenShelton/library-api/commit/d20ec3fb9ffd5affc894f618014a8a23eb3b973e))
* add oclm publication class ([eab8b92](https://github.com/BenShelton/library-api/commit/eab8b926d2d0457890ffeaad5821a56dc27dc1cc))
* add parsing for different types of video, add 'doc' video type ([f53907d](https://github.com/BenShelton/library-api/commit/f53907d01eb7b234bf048696f2f9135e94580306))
* extract shared functionality into core package ([169ea29](https://github.com/BenShelton/library-api/commit/169ea29eacf0048d2de3e0b8101372531fdc24fe))
