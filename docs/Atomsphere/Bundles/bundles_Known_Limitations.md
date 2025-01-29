
# Known Limitations

<head>
  <meta name="guidename" content="Bundles"/>
  <meta name="context" content="ad8d7533-6b85-46d8-bae0-58a21ec4f129"/>
</head>

Bundles User Interface:

* While adding Flow assets to a Bundle, you must ensure that your Flow account uses the same email address as the AtomSphere Platform account that  you are using to create the Bundle. Otherwise, you will receive the following message:<br/>
`Unable to connect to flow. Please ensure your credentials are valid for an active Flow account`

* In case you are trying to add a Flow asset that has never been Run or Published, you will see the following error: <br/>
`No Flow snapshot could be found for Flow`. <br/>  If this happens, you need to Run or Publish the Flow before adding it to your Bundle.  This limitation will be fixed in a future release.

* Bundle Service users are not allowed to install a Bundle containing Packaged Components that contain API assets if they don’t have the APIM or APIC account feature.  If attempted to do so, the server will return a 400 Bad Request from Bundle service.