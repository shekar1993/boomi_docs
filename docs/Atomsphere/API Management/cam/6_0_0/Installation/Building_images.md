---
sidebar_position: 3
---

# Building Images

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-956f2c8d-065f-47b8-9229-7d159e5e5024"/>
</head>

## Overview

To install Local Edition, you must first build images. To build Local Edition images by using a set of container files and podman or Docker, use the build-images.sh script available with the Local Edition bundle.

:::note

If you already have requested a tarball of a built adapter prior to the installation or upgrading of Local Edition 6.0.0, copy the tarball to the /assemblies folder.

:::

## Synopsis

```<extract-location> $ ./build-images.sh [options]```

## Description

`build-images.sh` script uses Docker or podman underneath to build Local Edition images. When using Podman, the script builds images in [Open Container Initiative](https://opencontainers.org/) (OCI) format. The script supplies the current directory as build context for the Docker or podman build command. When used without any parameters or options, `build-images.sh` uses default settings from the `PRODUCT_DEFAULTS` file. 

Even if the script instructs Podman to delete all intermediate images and containers, in some cases, it is possible that the intermediate images and containers are not deleted. You can delete such files by using `<extract-location>/scripts/cleanup-afterbuild.sh` script. The output of build-images.sh is logged to console and to specific image log file (`<image name>.log`) in the `<extract-location>/logs` directory. All container files for building the images are available locally on the build machine.

:::note

You can build images on any Docker or Podman-enabled environment such as your laptop or a server with the following minimum requirements: 

Number of CPU: 2

RAM: 6 GB.

:::

## Pre-build Image checks

- Ensure that you have logged into a machine that has proper access to podman or docker. 

:::note

Root user or having sudo access is not needed to run the commands. The settings vary between operating system. Check the OS docs.

:::

- You have permissions on local extract location and sufficient privileges to run the scripts. Typically home directories are safe to use.

- You have sufficient permissions on save location.

- If enabled, you are authenticated against the local registry.

- Verify Podman.

```xml

$ podman version
Client: Podman Engine
Version: 4.6.2
API Version: 4.6.2
Go Version: go1.21.0
Git Commit: 5db42e86862ef42c59304c38aa583732fd80f178
Built: Mon Aug 28 20:25:03 2023
OS/Arch: darwin/amd64
Server: Podman Engine
Version: 4.7.0
API Version: 4.7.0
Go Version: go1.20.8
Built: Wed Sep 27 23:54:38 2023
OS/Arch: linux/amd64

```

- Optional. Verify Docker

```xml

$ docker version
Client:
Cloud integration: v1.0.35+desktop.5
Version: 24.0.6
API version: 1.43
Go version: go1.20.7
Git commit: ed223bc
Built: Mon Sep 4 12:28:49 2023
OS/Arch: darwin/amd64
Context: default
Server: Docker Engine - Community
Engine:
Version: 24.0.7
API version: 1.43 (minimum version 1.12)
Go version: go1.20.10
Git commit: 311b9ff
Built: Thu Oct 26 09:07:41 2023
OS/Arch: linux/amd64
Experimental: false
containerd:
Version: 1.6.24
GitCommit: 61f9fd88f79f081d64d6fa3bb1a0dc71ec870523
runc:
Version: 1.1.9
GitCommit: v1.1.9-0-gccaecfc
docker-init:
Version: 0.19.0
GitCommit: de40ad0

```

## Running the script

When extracted, the `build-image.sh` script is located at `<extract-location>/`.

:::note

Run the build-image.sh script from the `<extract-location>` directory only.

:::

```
build-images.sh

build/containerfiles/
├ ── apim-jre-base.containerfile
├ ── apim-le-cache.containerfile
├ ── apim-le-cacheloader-cron.containerfile
├ ── apim-le-cacheloader.containerfile
├ ── apim-le-configui.containerfile
├ ── apim-le-legacy-cache.containerfile
├ ── apim-le-platformapi.containerfile
├ ── apim-le-toolkit.containerfile
└ ── apim-le-trafficmanager.containerfile

scripts/
├ ── INTERNAL_PRODUCT_VARS
├ ── PRODUCT_DEFAULTS
├ ── cleanup-afterbuild.sh
├ ── create-tm-image.sh
└ ── push-images.sh

```

## OPTIONS

- `-h`

  Displays usage and command options about the build-images.sh. Presents a very precise version of this document.

```
./build-images.sh -h

Boomi Cloud(TM) API Management-Local Edition 6.0.0
Usage: build-images.sh [-c arg0] [-p arg1] [-a arg2] [-s arg3] [-i argN] [-n] [-h]
-c arg0 = Image build tool to use. Options are docker(default) or podman
-p arg1 = Image location. Defaults to apim
-a arg2 = Target architecture. Defaults to linux/amd64
-s arg3 = Source image tag. Defaults to v6.0.0
-i argn = Optional param for creating specific images.
Can be used multiple times. For example -i image1 -i image2
Image names : apim-le-cache apim-le-cacheloader-cron
apim-le-toolkit apim-le-cacheloader
apim-le-trafficmanager apim-le-platformapi
apim-le-configui
Toolkit and jre base images will be built always.
This can be turned off using -n option
-n = Do not build base images. Resuse existing base images.
-h = this help message

Example: build-images.sh -c docker -i apim-le-configui -i apim-le-cache -s APIMLv6 -a
linux/amd64

If using regsitry/path as value for path param, users must authenticate (if required)
against the registry before calling create-images
Users must check permissions against the registry and repository

See more at https://docs.podman.io/en/latest/markdown/podman-build.1.html

```

- `-c`

  Mandatory argument. The supported values are podman and docker. The default value is docker.

- `-a`

  Specify a target architecture. Default value is linux/amd64.

- `-e`

  Include built adapters and SDK built adapters in traffic manager image.

- `-i <image name>`

  Specify images that you want to build. 

  Applicable image names are

  - apim-le-cache
  
  - apim-le-cacheloader-cron
  
  - apim-le-toolkit
  
  - apim-le-cacheloader
  
  - apim-le-trafficmanager
  
  - apim-le-platformapi
  
  - apim-le-configui

You can use this option multiple times. The following example shows building specific images by using podman: 

`$ ./build-images.sh -c podman -i apim-le-cache -i apim-le-platformapi`

Similarly, if you use Docker for building specific images: 

`$ ./build-images.sh -c docker -i apim-le-cache -i apim-le-platformapi`

By default, all images including base images are built. See -n flag for suppressing build of base images

- `-n`

  Option to suppress building apim-le-toolkit and apim-jre-base images. These are the two base images on which other images are either based on or used as a stage in a multi-stage build. By default, the script always builds `apim-le-toolkit` and `apim-jre-base` images.

- `-p`

  Path to save the images in local docker daemon or podman repository. The default value is apim

- `-s`

  Tag to be applied when building the `image.` Default value is v6.0.0

## Examples

Some of the examples of using options with `build-images.sh` are as follows:

To build all images with default values by using podman

`$ ./build-images.sh -c podman`

Similarly, to build all images with default values by using Docker: 

`$ ./build-images.sh -c docker`

To build images with specific tag

`$ ./build-images.sh -c podman -s apim-beta `

To build with SSL certificates

```
IF customer has TLS enabled database communication then place the following files to Local Edition deployment folder under samples/database and then build image. Same steps are applied for specific image(tool-kit) building.

```

```
db-client-key.pem

db-client-cert.pem

db-ca.pem

```

```

$ ./build-images.sh -c podman

```

To Build and save in specific location with specific tag

```

$ ./build-images.sh -c podman -s apim-beta -p apim-trial

```

## Enabling Adapters in Traffic Manager

### Include Boomi Build Adapters

1. Download Boomi Build Adapters from a specific location provided by Boomi support.

2. The Traffic Manager scans for the `apim-le-adapter.tar.gz` name only. If anything changes in the file name, the traffic manager can not enable adapters.

3. Copy `apim-le-adapter.tar.gz` inside the `<extract-location>/assemblies` directory.

### Include SDK Built Adapters

1. Custom Adapters are built by you using the Local Edition SDK.

2. Building using the SDK creates a zip file named `customer-extension.zip` in the SDK dist folder.

3. Copy the customer built adapter inside directory `<extract-location>/assemblies` and the file name must be `customer-extension.zip`.

:::note

You must make sure that the customer-extension zip contains custom-built adapter jar files with the dependent libraries. The adapter jar files must be present on the root folder. Nested folders are not allowed.

:::

## Including Portal customisation in configui

1. Place contents of customization (without a parent folder) in `<extract location>/assemblies/portal`

2. If you have customization in zip file, extract contents in `<extract location>/assemblies/portal`

```

Example

$ ls -l assemblies/portal/
total 36
drwr--r-- 3 johndoe svc_dev_mas_server_admins 5 Dec 17 2020 assets
-rwr--r-- 1 johndoe svc_dev_mas_server_admins 5457 Aug 6 2019 customizations.js
-rwr--r-- 1 johndoe svc_dev_mas_server_admins 15951 Aug 6 2019 translations.js

```

3.  Change permissions of file contents. These need execute permissions

```

$ chmod +x -R <extract location>/assemblies/portal

$ ls -l assemblies/portal/
total 36
drwr-xr-x 3 johndoe svc_dev_mas_server_admins 5 Dec 17 2020 assets
-rwr-xr-x1 johndoe svc_dev_mas_server_admins 5457 Aug 6 2019 customizations.js
-rwr-xr-x 1 johndoe svc_dev_mas_server_admins 15951 Aug 6 2019 translations.js
  
```

4. Build Image

## Files

- Container files- All container files using which images are built are located in `<extract location>/build/containerfiles`.

- Log files - Image build log files are located in `<extract location>/logs`. The log files in this directory are specific to each image.

## Troubleshooting

### APT Errors due to time sync issues after APT repository is updated

- **Error**

```

  Reading package lists...

  E: Release file for http://deb.debian.org/debian/dists/stable-updates/InRelease is not valid yet (invalid for another 3h 37min 34s). Updates for this repository will not be applied.

  Error: building at STEP "RUN apt-get update && apt-get install -y procps curl wget lsof netcat net-tools telnet jattach tcpdump openssh-client": while running runtime: exit status 100

```

- **Root cause**

  Local Edition uses debian slim 12 and Google distroless -12 as base images. Packages for these are available on the debian repository ([http://deb.debian.org](http://deb.debian.org/)) . Sometimes when the repository is updated with new versions of packages, the time sync fails; due to which it is assumed that the repository is still being updated and is not available for some duration.

- **Fix**

  Force NTP update against the NTP server or reboot the machine on which the images are being built if issue is not fixed after NTP update.

  Resetting time on Mac

  ```
  $ sntp -sS pool.ntp.org
  ```

- Force ntp update on Linux

```
# service ntpd stop

# ntpd -gq
# service ntpd start

```
## See also

- [Podman build](https://docs.podman.io/en/latest/markdown/podman-build.1.html)

- [Docker build](https://docs.docker.com/engine/reference/commandline/image_build/)

- Pushing Images to a Registry
