# Assets technical reference

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-98b38258-3328-45f9-9d71-3c6d0ac7bd9d"/>
</head>


This topic provides technical details for using assets in Boomi Flow.

## Overview

The asset library feature is based on Amazon Web Services \(AWS\) S3 cloud storage, and is provided to help with flow development, by allowing you to upload only images, CSS and JavaScript files used during development.

does not provide a Service Level Agreement \(SLA\) for this service, and it is not intended for production use.

## Encryption and security

Assets are not encrypted, and should **not** be considered a secure endpoint. If you would like to upload and display sensitive data \(such as diagnostic images in electronic medical records for example\), use an external file storage service instead.

## File size

Although files that are uploaded to the asset library have an individual maximum file size limit of 5GB \(for a single upload\), we strongly recommend using an external file storage service if you wish to store anything other than flow custom components, images and CSS files for use with your flows; the asset library is not designed to be used as a large file storage system.

## Supported file types

Only image formats, CSS, and JavaScript can be uploaded to the asset library for use in your flows.

For example:

-   Image formats: .GIF, .JPEG/JPG, .PNG, .SVG

-   CSS: .CSS

-   Javascript: .JS