---
sidebar_position: 5
---

# Working with jQuery

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b6324b5b-6cc8-4b3e-91bc-9ec3ae168d6b"/>
</head>

jQuery is *not* bundled with your Portal.

If you'd rather use jQuery than [work with native, modern JavaScript](Working_with_modern_java_script.md), you should load it using the [m$.loadJS() helper method](../LayoutandDesign/JavaScript_api.md) and run your jQuery-dependent code as a callback.

Log into the API Control Center, go to **Manage > Portal**, and click **Portal Settings**. Then add this under the **Body JavaScript** field under the **Inline JavaScript** section.

```xml
window.addEventListener('portalAfterRender', function () {
// Load jQuery
m$.loadJS('https://code.jquery.com/jquery-3.2.1.min.js', function () {
// Your code goes here...
});
}, false);
```
