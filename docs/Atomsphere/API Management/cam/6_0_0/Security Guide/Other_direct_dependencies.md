---
sidebar_position: 4
---

# Other Direct Dependencies

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-782ceb56-b8fa-416f-a970-845336a8f694"/>
</head>

Local edition has the following dependencies other than minified java runtime:

## cURL

This is present only in the the K8s cron Jobs of Local Edition; they employ curl to invoke loaders. The version of curl and its dependencies are picked from debian-slim (debian12) image during multi-staged build.

## libgcc\_s.so.1

libgcc is required for components to invoke the dynamically linked native library for Local Edition cryptography. This is applicable to all types of pods except for K8s cron job.
