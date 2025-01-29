---
sidebar_position: 5
---

# Updating Your Logo

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-7ac49972-7f8a-42b9-a683-ce23ce5b095e"/>
</head>

Your logo can be text, an img element, or an inline SVG. 

```xml
// An image element
portal.settings({
logo: '<img alt="Acme Developer Portal" src="/path/to/our/logo.jpg">'
});
// An SVG
portal.settings({
logo: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"
aria-describedby="logo-title"><title id="logo-title">Acme Developer Portal</title><path
fill="#272727" d="M15.781 12.953l-4.712-4.712a.752.752 0 0 0-1.061 0l-.354.354L6.779 5.72
11.499 1h-5l-2.22 2.22-.22-.22H2.998v1.061l.22.22-3.22 3.22 2.5 2.5 3.22-3.22 2.875
2.875-.354.354a.752.752 0 0 0 0 1.061l4.712 4.712a.752.752 0 0 0 1.061 0l1.768-1.768a.752.752
0 0 0 0-1.061z"/></svg>'
});
```
