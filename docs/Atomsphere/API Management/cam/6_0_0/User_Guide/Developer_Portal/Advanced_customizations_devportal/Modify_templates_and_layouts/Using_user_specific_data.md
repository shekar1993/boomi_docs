---
sidebar_position: 3
---

# Using User-Specific Data

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-e51b5b38-a4a9-4394-b2ba-6f3d31c39c36"/>
</head>

Some pages, like /applications, require data specific to the current user to render properly. 

For these views, you should use a function for the template, and provide data as an argument. The user-specific data can automatically be passed into the function when it runs. 

```xml
portal.setTemplate('apps', function (data) {
// Log the user-specific data to the console
console.log(data);
// Your template goes here...
var html =
'<main class="main has-apps" id="main">' +
'<h1>Hello, world!</ha>' +
'</main>';
// Return the html string
return html;
});
```
