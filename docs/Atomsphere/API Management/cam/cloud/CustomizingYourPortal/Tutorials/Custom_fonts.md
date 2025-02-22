﻿---
sidebar_position: 2
---

# Custom Fonts

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-34015075-ecc0-461f-9062-0e4583d34715"/>
</head>

Most browsers do a bad job of loading web fonts.

They will often display nothing while the font is downloading and parsing, leaving your users with a flash of invisible text, or in some cases, a page that never displays.

This is particularly pronounced on certain mobile browsers that have no timeout for when fonts fail to load.

As a best practice, you should display a system font by default and switch over to your custom font only after it has completed loading. While there is a spec for a native API to let us do this, it's not standard yet. Fortunately, [fontFaceObserver.js by Bram Stein](https://github.com/bramstein/fontfaceobserver) helps us do just that.

## Using fontFaceObserver.js

First, upload [fontFaceObserver.js](https://github.com/bramstein/fontfaceobserver) to your Portal via the File Manager under *Manage > Content*.

Then, add this in Control Center under Manage > Portal > Portal Settings under one of the inline JavaScript sections. Change the font file and font name to whatever typeface you're using.

```xml
** * Load custom typeface */ window.addEventListener('portalAfterInit', function () { m$.loadJS
('/files/fontfaceobserver.js', function () { m$.loadCSS('path/to/your/fonts.css'); var font = new FontFaceObserver
('Your Typeface Name'); font.load().then(function () { document.documentElement.classList.add('fonts-loaded'); });
}); }, false);
```

Finally, in your CSS file, make the font that you use conditional on the *.fonts-loaded* class.

```xml
body { font-family: Helvetica Neue, Arial, sans-serif; } .fonts-loaded body { font-family: 'Your Typeface Name', sansserif; }
```

