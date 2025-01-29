---
sidebar_position: 2
---

# Shell-less Containers

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-4cf4ac0b-e12e-4852-b6f1-1783754a551d"/>
</head>

API Management - Local Edition uses Google distroless images, that is, `gcr.io/distroless/base-debain12:nonroot` as the base images and employ multi-staged build to create the different images. Non-root images restrict containers to be spun up with root user. The toolkit image is necessary for troubleshooting Local Edition. Although called distroless, the distroless base image is based on debian but is stripped off entirely to bare essentials required to run a process. These essentials differ between components. 
