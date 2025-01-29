---
sidebar_position: 6
---

# IO-Docs Tricks

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-8780a613-d02d-4f25-92ee-0ed79c063bd2"/>
</head>

You can style an IO-Docs method differently when it's expanded than when it's collapsed.

To make it work, you need to use a [JavaScript Event Hook](../LayoutandDesign/JavaScript_api.md) to add a class to the expanded or collapsed method, and some CSS to change the style.

## JavaScript

```
// Add active class to method
document.addEventListener('portalIODocsShowMethod', function (event) {
event.target.closest('.method').classList.add('method-active');
}, false);
// Remove active class from method
document.addEventListener('portalIODocsHideMethod', function (event) {
event.target.closest('.method').classList.remove('method-active');
}, false);
```

## CSS

```xml
method {
/* Base styles */
}
.method.method-active {
/* Modified styles */
}
```
