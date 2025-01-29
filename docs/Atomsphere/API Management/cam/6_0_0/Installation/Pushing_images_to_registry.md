---
sidebar_position: 4
---


# Pushing Images to a Registry

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-84e1b452-9e22-45f6-b3ef-787023815040"/>
</head>

## Overview

To push Local Edition images by using Podman or Docker to an OCI registry, use the `push-images.sh` script.

## Synopsis

```
<extract-location>/scripts $ ./push-images.sh -r <repository uri>[/repository name without ending /]
```

## Description

The `push-images.sh` script uses Podman or Docker underneath to push Local Edition images to a remote registry. The script requires a registry URI and optionally a repository path. 

If you provide a repository path, the script adds specified tags to the repository. 

The script uses `PRODUCT_DEFAULTS` to use the default values for the different options. 

This is a reference script. You can modify it as per the needs. 

## Limitations

- You must log in to the registry prior to using the script. The login steps vary between providers and setup. For example, 

  ```
  podman login <location of harbor>
  ```

- Ensure that you have the necessary permissions to push images to the provided registry and repository.

- The `push-images.sh` cannot save images in a tarball, that is, some form of Linux archive file, or in any format other than OCI.

- The `push-images.sh` requires images to be present in a local repository. It does not pick images from locally saved tarball.

- If you modify the script, make sure that the images are accessible during Kubernetes image pull stage.

- Do not append a forward slash (`/`) at the end of the registry and optional repository name.

## Pre-push image checks

- Ensure that you have signed into a machine that has proper access to podman or docker. 

  :::note
  
  Root user or having sudo access is not needed to run the commands. The settings vary between operating system. Check the OS docs.

  :::

- You have permissions on local extract location and sufficient privileges to run the scripts. Typically home directories are safe to use.

- You have sufficient permissions on save location.

- If enabled, you are authenticated against the local registry.

## Location and Running the script

After extraction, the push-images.sh script is located at the `<extract-location>/scripts` directory. 

:::note

Run the push-images.sh script from the `<extract-location>/scripts` directory only.

:::

## OPTIONS

- `-r`

  Required. URI to remote registry and optional registry in the following form:

  ```
  gcr.io/company-name				
  gcr.io/accountname/apim-attempts
  mycompany.localregistry.com
  mycompany.localregistry.com/apim
  ```

- `-h`

  Displays usage and command options about the `push-images.sh`. Presents a very precise version of this document

- `-c`

  Specify the container tool to use. The supported values are podman and docker. The default value is docker.

- `-d`

  Value for image tag on destination, that is, the value provided with the `-r` option. It defaults to the value of the source image tag.

  The image tag must be 

  - Valid ASCII value

  - Can contain upper or lower case alphanumeric values 

  - Must not begin with a period or hyphen 

  - Must be at most 128 characters.

- `-i <image name>`

  Specify images that you want to push. 

  Applicable image names are:

  - apim-le-cache

  - apim-le-cacheloader-cron

  - apim-le-toolkit

  - apim-le-cacheloader

  - apim-le-trafficmanager
  
  - apim-le-platformapi

  - apim-le-configui

You can use this option multiple times. For example: 

```
$ ./push-images.sh -i apim-le-cache -i apim-le-platformapi
```

- `-p`

  Path where the source images are stored in a local registry. The default value is *apim*.

- `-s`

  Source image tag to identify an image that is to be pushed to a remote registry. Source tag must exist. 

  The default value is v6.0.0.

- `-t`

  Do not verify TLS. By default, TLS verification is set to true and the configuration for verification is present in the container registries configuration. The effect of using this option is that the flag `--tls-verify=false` is added to the Podman push command.

## Examples

Some of the examples of using options with `push-images.sh` are as follows:

Push with defaults and TLS verification turned off.

```
$ ./push-images.sh -r mylocalregistry.mycompany.com/apim-trial -t
```

Push specific images.

```
$ ./push-images -r mylocalregistry.mycompany.com/apim-trial -i apim-le-toolkit -i apim-le-cacheloader
```

Push specific images with a destination tag.

```
$ ./push-images -r mylocalregistry.mycompany.com/apim-trial -i apim-le-toolkit -i apim-le-cacheloader -d apim-trials
```

## Files

`push-images.sh` does not require any additional files. 

## Troubleshooting

- **Image not known**

  - Error

    ```
    Pushing image apim-le-platformapi				
    Error: apim/apim-le-platformapi:v6.0.0: image not known
    ```

  - Root cause

    The specified source image tag is incorrect. 

  - Fix

    Verify the source image by using podman images output, locate the image, and correct the tag.

- **Unknown Transport error**

  - Error

    ```
    Error: Invalid image name "na2devmashbr01.dev.tibco.com/experimental//apim-le-platformapi:vtest600", unknown transport "mycompany.dev.harbor.com//apim-le-platformapi"

    Error: Invalid image name "na2devmashbr01.dev.tibco.com/experimental//apim-le-platformapi:vtest600", unknown transport "mycompany.dev.harbor.com/apim-trials//apim-le-platformapi"	
    ```					

  - Fix

    Remove trailing `/` from the registry name and optionally from the repository name when used.

    ```
    $ ./push-images.sh -r na2devmashbr01.dev.tibco.com or ./push-images.sh -r na2devmashbr01.dev.tibco.com/apim-trials	
    ```					

- **Failed to verify TLS certificate**

  - Error

    ```
    Error: trying to reuse blob sha256:7a6477860277b792c1f80e6c1c390114d9591719c715a2a657ff7c2d9880fb1c at destination: pinging container registry na2devmashbr01.dev.tibco.com: Get "https://na2devmashbr01.dev.tibco.com/v2/": tls: failed to verify certificate: x509: certificate signed by unknown authority
    ```

    This is caused by using insecure registrie URIs. The default behaviour of podman is to always verify TLS connections.

  - Fix

    Pass the `-t` flag when using `push-images.sh`. This option adds the `--tls-verify=false` flag to podman push command. Check container registry, transports, and certs in the section "See also".

## See also

- [podman push](https://docs.podman.io/en/latest/markdown/podman-push.1.html)

- [podman login](https://docs.podman.io/en/latest/markdown/podman-login.1.html)

- [docker push](https://docs.docker.com/reference/cli/docker/image/push/)

- [docker login](https://docs.docker.com/reference/cli/docker/login/)
