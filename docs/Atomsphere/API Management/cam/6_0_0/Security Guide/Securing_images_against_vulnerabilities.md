---
sidebar_position: 11
---

# Securing Images Against Vulnerabilities

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-02aa7c6f-3af8-4334-a409-0efab3693cc6"/>
</head>

## Image Pull Secrets

Image pull secrets govern if images can be pulled from the repository by which namespaces and services accounts. Image pull secrets are required when using secure private registry and used in cloud environments if the user deploying the application does not have a role providing access to the cloud registry. Image pull secrets are provided as Helm values.

## Patching Images

The base image in Local Edition is distroless debian 12. The base image is updated periodically and sometime on demand based on upstream debian updates. Distroless base image is updated periodically with security patches. To use the latest updated base image, do the following steps:

1. When the base image is updated, you must:

   a. Build new version of the images (with a new tag).
   
   b. Push these new images to the repository.
   
   c. Update the image tag in values.yaml.
   
   d. Upgrade running Local Edition 6.0.0 cluster using helm upgrade `<release name> <deploy-context>` [`-f` over-rides file].

2. For more information on patching images and for updates on distroless images, contact support team.
