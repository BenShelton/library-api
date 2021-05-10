# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.2.1](https://github.com/BenShelton/library-api/compare/v0.2.0...v0.2.1) (2021-05-10)

**Note:** Version bump only for package @library-api/express





# 0.2.0 (2021-05-10)


### Bug Fixes

* **express/download:** correct error message for /video ([e38bf49](https://github.com/BenShelton/library-api/commit/e38bf49098f9b9446698ba090b590cec0815b614))
* **packages/express:** use relative imports as we lack path mapping ([5c45e08](https://github.com/BenShelton/library-api/commit/5c45e0894830cc3f42fd3c2d4170e81d46b9a0f8))


### Features

* **core:** add id to images/videos, rename video id to doc ([2f83e9e](https://github.com/BenShelton/library-api/commit/2f83e9e901d841a27486daeab2b8b92761b2baae))
* **core:** add id to mediaDetails, allow passing a full video into getMediaDetails for convenience ([241cdbf](https://github.com/BenShelton/library-api/commit/241cdbf0d209ab8f963c84b2ce8e1d2cf9081a51))
* **core:** rename downloadVideoStream to getVideoStream, add downloadVideoStream which writes file ([160e9f5](https://github.com/BenShelton/library-api/commit/160e9f53fa936aeea96aa17160e51da031642c56))
* **express:** add /media/details endpoint ([876c1cc](https://github.com/BenShelton/library-api/commit/876c1ccc88c0cf63e458dedc1e9bd7fb56594686))
* add oclm publication class ([eab8b92](https://github.com/BenShelton/library-api/commit/eab8b926d2d0457890ffeaad5821a56dc27dc1cc))
* add parsing for different types of video, add 'doc' video type ([f53907d](https://github.com/BenShelton/library-api/commit/f53907d01eb7b234bf048696f2f9135e94580306))
* extract shared functionality into core package ([169ea29](https://github.com/BenShelton/library-api/commit/169ea29eacf0048d2de3e0b8101372531fdc24fe))
