---
sidebar_position: 3
---

# Minified Java Runtime

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-27fcdebd-0fac-45c4-a6e1-fe9fca7e5656"/>
</head>

The following Local Edition components require a Java runtime:

- Cache

- Cacheloader

- PlatformAPI

- TrafficManager

Instead of a full JRE or Java SDK, a minified version is created and used when you build an image. For more information, see "Building Images" in **Boomi Cloud API Management – Local Edition > Installation**. 

The minified JRE removes dependence on vulnerable libraries that are otherwise required by a Java SDK or full JRE.
