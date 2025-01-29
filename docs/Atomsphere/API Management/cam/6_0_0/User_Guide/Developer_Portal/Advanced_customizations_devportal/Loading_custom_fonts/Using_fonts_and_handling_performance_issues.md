---
sidebar_position: 3
---

# Using Fonts and Handling Performance Issues

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-6e431555-14bd-4a55-8e26-5221a8c3508a"/>
</head>

In many browsers, if a custom typeface is declared but has not finished downloading and parsing yet, browsers leave space for the text but not render it until the file is ready. 

This is often called a Flash Of Invisible Text (or FOIT). On mobile devices and slower connections, it can leave content unusable for long periods of time (`HTTPS://WWW.IGVITA.COM/2015/04/10/FIXING-THE-BLANK-TEXT-PROBLEM/`). 

To ensure that users visiting your Developer Portal have the best possible experience, you should use a system font by default, and switch to your custom font after it has been loaded. 

## How to Detect when a Font is Loaded

To detect when a font is loaded, use the browser-native `FontFaceSet.load()` method. 

Pass in a 1em font size followed by the name of your typeface. When the font loads, append a `.fonts-loaded` class to the document: 

```xml
if ('fonts' in document) {
document.fonts.load('1em PT Serif').then(function () {
document.documentElement.className += ' fonts-loaded';
});
}
```

In your CSS, you load a system font by default, and switch to your custom font once the `.fonts-loaded` class is added. 

```
body {
font-family: Helvetica, Arial, sans-serif;
}
.fonts-loaded body {
font-family: "Open Sans", sans-serif;
}
```

## How to Get Better Performance on Subsequent Page Loads

If the font repository sets far future expires headers, the typeface is cached for subsequent page loads. Fonts hosted with Google Fonts do this. 

You can improve subsequent page load performance by setting a cookie when the typeface first loads, and then automatically adding the `.fonts-loaded` class if the cookie exists. 

```xml
var getCookie = function (name) {
var value = "; " + document.cookie;
var parts = value.split("; " + name + "=");
if (parts.length == 2) return parts.pop().split(";").shift();
};
if ('fonts' in document) {
if (getCookie('fontsLoaded')) {
document.documentElement.className += ' fonts-loaded';
} else {
document.fonts.load('1em PT Serif').then(function () {
var expires = new Date(+new Date() + (7 * 24 * 60 * 60 * 1000)).toUTCString();
document.cookie = 'fontsLoaded=true; expires=' + expires;
document.documentElement.className += ' fonts-loaded';
});
}
}
```
