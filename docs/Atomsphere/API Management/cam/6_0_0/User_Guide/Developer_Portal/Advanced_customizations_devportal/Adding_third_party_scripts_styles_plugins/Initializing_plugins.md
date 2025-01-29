---
sidebar_position: 3
---

# Initializing Plug-Ins

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-cd5be6dc-ebf9-4233-805a-a8d8f6a817e0"/>
</head>

Many third-party plug-ins require initialization, or they fail if they load before the DOM (Document Object Model) is rendered. The Developer Portal emits two custom events that you can listen for, before initializing, or loading your scripts. 

|**Event** |**When it runs** |
| ---- | --- |
|`prerender`|After all core files and API calls have completed, but before rendering the UI. |
|`render`|After the UI has finished rendering. |

For example, if you had a plug-in call `createTableOfContents()` that required the DOM to be fully loaded before running, you would do this: 

```
// After the UI renders
portal.on('render', '#app', function () {
// Load the JS file
portal.loadJS('/path/to/createTableOfContent.js', function () {
// One it loads, run it
createTableOfContents();
});
});
```
