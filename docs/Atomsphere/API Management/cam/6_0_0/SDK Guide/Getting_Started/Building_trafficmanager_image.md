---
sidebar_position: 5
---

# Building the TrafficManager image

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d5f19057-fe1d-4075-a185-4d41a2674b9c"/>
</head>

This section describes how to build the Local Edition-TM Docker image with adapters built by a customer.

The following example shows building traffic manager image by using podman: 

`$ ./build-images.sh -c podman -i apim-le-trafficmanager`

Similarly, if you use Docker for building specific images: 

`$ ./build-images.sh -c docker -i apim-le-trafficmanager`

Once you are done with building images, you must push the images.

```
$ cd scripts/
$./push-images.sh -i apim-le-trafficmanager
```
