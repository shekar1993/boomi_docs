---
sidebar_position: 2
---

# Getting Started - Loading Custom Fonts

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-7b77fc36-b04f-480c-b350-681ddec5f482"/>
</head>

To use a custom typeface (a font that is not a standard system font) in your Developer Portal, you first need to load the custom style sheet for the typeface using the `portal.loadCSS()` method. 

For example, let us load the Open Sans typeface (HTTPS://FONTS.GOOGLE.COM/SPECIMEN/OPEN+SANS) from the Google Font Repository: 

```
// Load Open Sans
portal.loadCSS('https://fonts.googleapis.com/css?family=Open+Sans');
```

Then, in your CSS, add your custom typeface as the f`ont-family`. To use the same font everywhere, you can add it to the body. 

```
body {
font-family: "Open Sans", sans-serif;
}
```

:::note

When loading fonts from third-party repositories like Google Fonts, you may need to update your Developer Portal's security policies in the **Admin** area. 

:::
