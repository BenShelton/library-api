# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.9.0](https://github.com/BenShelton/library-api/compare/v0.8.0...v0.9.0) (2021-06-10)


### Features

* **core:** add language support to existing methods & classes, add language methods ([c473ffe](https://github.com/BenShelton/library-api/commit/c473ffe1b5d3d09a23655793151875053c8327bf)), closes [#12](https://github.com/BenShelton/library-api/issues/12)





# [0.8.0](https://github.com/BenShelton/library-api/compare/v0.7.0...v0.8.0) (2021-06-08)


### Features

* **core:** add categoryType to images ([997bf40](https://github.com/BenShelton/library-api/commit/997bf40f9e47092bf7c09add899811c0e891352b))





# [0.7.0](https://github.com/BenShelton/library-api/compare/v0.6.2...v0.7.0) (2021-06-01)

**Note:** Version bump only for package @library-api/core





# [0.6.0](https://github.com/BenShelton/library-api/compare/v0.5.0...v0.6.0) (2021-05-30)

**Note:** Version bump only for package @library-api/core





# [0.5.0](https://github.com/BenShelton/library-api/compare/v0.4.0...v0.5.0) (2021-05-21)


### Features

* **core:** add new helper methods for getting song details & streams ([9d1b504](https://github.com/BenShelton/library-api/commit/9d1b504f18f150af63a98d7a210c290f7afdf47c))





# [0.4.0](https://github.com/BenShelton/library-api/compare/v0.3.1...v0.4.0) (2021-05-15)

**Note:** Version bump only for package @library-api/core





## [0.3.1](https://github.com/BenShelton/library-api/compare/v0.3.0...v0.3.1) (2021-05-12)


### Bug Fixes

* **core:** remove dependency on tslib ([b22815b](https://github.com/BenShelton/library-api/commit/b22815bd43137cecad5583fa3311144bf65c8fac))





# 0.3.0 (2021-05-11)


### Bug Fixes

* **core/mapper:** also include the language fragment in url construction ([65dbd4a](https://github.com/BenShelton/library-api/commit/65dbd4a06dd00ceb8d61cd30a7b304827b68dd46))


### Features

* **core:** add ability to extract a caption and image url for specified media ([05fc722](https://github.com/BenShelton/library-api/commit/05fc7226203f6a17b3b5786f872c5a8eb0dda77c))
* **core:** add emptyDir utility function ([de0eed8](https://github.com/BenShelton/library-api/commit/de0eed89d4e4c24666449f6a41def42ae8c757e6))
* **core:** add id to images/videos, rename video id to doc ([9ec9e8b](https://github.com/BenShelton/library-api/commit/9ec9e8ba6608a4234aab6183b81e87a7c0b0950d))
* **core:** add id to mediaDetails, allow passing a full video into getMediaDetails for convenience ([2cb6afb](https://github.com/BenShelton/library-api/commit/2cb6afb4e34b46127ccd53a74d588e27258b5495))
* **core:** rename downloadVideoStream to getVideoStream, add downloadVideoStream which writes file ([cddd05d](https://github.com/BenShelton/library-api/commit/cddd05df59e6595cc446bdf590ae1643ae09ee99))
* **core/download:** add utility function to download a file ([2751358](https://github.com/BenShelton/library-api/commit/2751358359e25aafd477d7e1534f4a4b0680416d))
* **core/publication:** add OCLM getVideos query ([5fd27e5](https://github.com/BenShelton/library-api/commit/5fd27e597272a7b747e457c7c6a6c6ff6d0c5e2f))
* **core/publication:** include the contents path of the publication ([53e9341](https://github.com/BenShelton/library-api/commit/53e934134f0c2955e962b781c92d549522c5617b))
* **core/publication:** update OCLM image query ([4be81ff](https://github.com/BenShelton/library-api/commit/4be81ff7fc41bfb216e8259522cab697d34f8820))
* add oclm publication class ([eab8b92](https://github.com/BenShelton/library-api/commit/eab8b926d2d0457890ffeaad5821a56dc27dc1cc))
* add parsing for different types of video, add 'doc' video type ([f53907d](https://github.com/BenShelton/library-api/commit/f53907d01eb7b234bf048696f2f9135e94580306))
* extract shared functionality into core package ([169ea29](https://github.com/BenShelton/library-api/commit/169ea29eacf0048d2de3e0b8101372531fdc24fe))
