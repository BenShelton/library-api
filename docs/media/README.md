# Library Media

Welcome to Library Media. This application is meant to be used during a meeting to show media to an audience.

## Table of contents

- [Installation](#installation)
  - [Mac](#mac)
  - [Other Platforms](#other-platforms)
- [Getting Started](#getting-started)
- [The Display Window](#the-display-window)
  - [Resizing](#resizing)
  - [Moving](#moving)
  - [Showing/Hiding Text](#showing/hiding-text)
  - [Video Controls](#video-controls)
- [The Control Panel](#the-control-panel)
  - [Initial Setup](#initial-setup)
  - [Control Bar](#control-bar)
  - [Pages](#pages)
    - [Publication Media](#publication-media)
    - [Song](#song)
    - [File Picker](#file-picker)
    - [Settings](#settings)
- [Support](#support)

## Installation

### Mac

You can download the latest version of the application by:

- Going to the [latest releases page](https://github.com/BenShelton/library-api/releases/latest)
- Downloading the `Library-Media-x.y.z.dmg` file under Assets (the x.y.z numbers will depend on the version)
  - Note this is not the one ending `.blockmap`
- Open the downloaded installer
- Drag and drop Library Media onto the Applications icon

Library Media will now be installed, you can close the installer window. You can open Library Media wherever you normally view other Applications (Launchpad, Finder, Spotlight etc.)

**Security Message**

The first time you open Library Media you may get a message confirming you want to open this program because it was downloaded from the internet and not from the App Store. This is normal, simply click `Open` to approve the application.

### Other Platforms

Other platforms are not officially supported and no release is available to download. You will need to build the application yourself.

## Getting Started

When you first open Library Media you will be greeted with 2 windows:

- Control Panel
  - This is where you will be choosing which media to display, this is what only you can see
- Display
  - This is an almost blank window that can be screen shared on your device, this is what the audience will see

The purpose of this 2 window layout is so that the audience are only ever viewing the Display and do not need to see you controlling the media. Be sure that when you are screen sharing you selected the Display window, not the Control Panel.

Before you are able to show media you will need to install some files. See the [control panel instructions](#initial-setup) for more information.

## The Display Window

This window is purely for displaying content and has very few controls:

### Resizing

Simply drag from the sides or the corners to resize. The window will stay in a 16:9 size as that is what will show best on most devices.

### Moving

Click and drag from anywhere within the window to move it around your screen. When you reopen the app the window will try and restore to the position you last kept it.

### Showing/Hiding Text

To show or hide the text within the window, simply Right Click anywhere within the window. On some devices this can be done with a 2-finger click. This can be helpful to display a blank screen so that the audience does not see the helper text on the display when no media is being shown.

### Video Controls

Whilst a video is playing you can use the controls at the bottom of the video to control it.

## The Control Panel

This window is where you will control what is being displayed on the Display window.

### Initial Setup

When you first open Library Media you will be prompted to install the Catalog. This file is what is used by JW Library and other publications as a database of all the media available. It is a large file but is required in order to figure out what media needs to be shown.

Whenever you load a new publication that file will be downloaded in the background automatically.

### Control Bar

The Control Bar is at the bottom of the Control Panel and allows you to control the media that is currently being displayed no matter what page you are on.

If no media is being displayed, the Control Bar will simply state that nothing is being displayed.

When media is being displayed, a Hide button will appear. Clicking this will remove the media from the Display Window.

### Pages

Using the navigation bar at the top of the Control Panel will allow you to visit different pages of the application.

#### **Publication Media**

<img src="https://raw.githubusercontent.com/BenShelton/library-api/master/packages/media/app/renderer/src/assets/media.svg" alt="Publication Media" width="24">

This page allows you to select a publication and automatically load all the media for the specified meeting.

By default this will load the publication for the current week, either the Watchtower if it is a weekend, or the OCLM (Our Christian Life & Ministry) Workbook if it is a weekday.

If you would like to show media from a different publication, simply use the dropdowns to select the publication you would like.

The media for that publication will be loaded automatically and displayed in Video and Image sections.

Videos need to be downloaded before they are displayed. Videos that are not yet downloaded are indicated by the following download icon:

<img src="https://raw.githubusercontent.com/BenShelton/library-api/master/packages/media/app/renderer/src/assets/download.svg" alt="Download" width="24">

When you want to display an image or video on the Display Window, simply click it.

#### **Song**

<img src="https://raw.githubusercontent.com/BenShelton/library-api/master/packages/media/app/renderer/src/assets/song.svg" alt="Song" width="24">

This window allows you to choose any song from the songbook to be played. This is useful for weekend meetings for example where the Public Talk Speaker chooses an opening song or for other times where a different song may be played, such as a Circuit Overseer visit.

Select the song from the dropdown, download the song if necessary, then click to play it.

#### **File Picker**

<img src="https://raw.githubusercontent.com/BenShelton/library-api/master/packages/media/app/renderer/src/assets/picker.svg" alt="File Picker" width="24">

This page allows you to choose a file from your computer to be displayed on the Display Window.

There may be occasions when you need to display an image or video that is not included in the publication for that meeting. For example, a Public Talk Speaker might ask for extra images to be shown.

Click the button to choose a file, once chosen it will be displayed. If you need to show multiple files then click the button again to choose the next one. The Display Window will keep the previous media shown until a new one is selected.

#### **Settings**

<img src="https://raw.githubusercontent.com/BenShelton/library-api/master/packages/media/app/renderer/src/assets/settings.svg" alt="Settings" width="24">

This page allows you to adjust some settings to meet your circumstances.

If you experience any problems there are also options here that can reset the application back to the default state which should hopefully resolve any problems.


## Support

If you experience a bug or would like to request a feature, please do so on [our issues page](https://github.com/BenShelton/library-api/issues). Please check that your bug or feature request has not already been added to the list, if not click New Issue and submit your request.
