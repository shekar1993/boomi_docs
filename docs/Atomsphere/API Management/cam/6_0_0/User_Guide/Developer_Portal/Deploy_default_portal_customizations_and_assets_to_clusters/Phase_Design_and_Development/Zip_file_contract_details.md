---
sidebar_position: 2
---

# Zip File Contract Details

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-33162052-3c2b-4bee-9486-11fc71bf704a"/>
</head>

You can port any content or files that you want to expose in your Developer Portal, which could typically include js, css and image files. As a Boomi Cloud API Management - Local Edition Administrator, you can transport local customization files into all relevant (tml-cm) containers across any deployment, regardless of topology. The API Management - Local Edition Administrator is able to reference these ingested files in Developer Portal markup.

The .zip file must contain at its root: 

- `customizations.js`

- `translations.js` (case insensitive) 

Any other assets must be under a directory named *assets* (also case insensitive). The destination directory (`/opt/mashery/portal`) is cleared before decompression is attempted and upon failure to pass validations. 

customizations.js MUST be at the root (if present). 

translations.js MUST be at the root (if present). 

Anything else MUST be under a single folder, *assets*. It can contain anything (js, css, mpegs, jpegs, pngs, txt, html), but it has to be under this folder (subfolders under there are also allowed). 
