---
sidebar_position: 6
---

# Adding Translation Strings

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d9b7c279-1b22-4b58-988d-9f5422d29b7e"/>
</head>

If you have enabled multi-language support on your portal, it is important that you maintain translation strings in any of the templates that you customize. If you hard-code text into your templates, it always shows up in that language and cannot be translated. 

For any text that should be translatable, pass the `viewID` and `stringID` into the `portal.translate()` method as arguments. 

For example, here is the default template for the `signin` view: 

```xml
portal.setTemplate('signin', function () {
var fields = portal.getFields('signin');
return `
<main class="main" id="main">
<h1>${portal.translate('signin', 'title')}</h1>
<form id="signin-form" data-mashery="signin-form" action="">
${fields.map(function (field) {
return portal.getPartial('createField', field, 'signin');
}).join('')}
<p class="form-actions">
<button class="btn btn-primary" id="signin-form-submit">${portal.translate('signin',
'submit')}</button>
</p>
</form>
<p id="signin-recover">${portal.translate('signin', 'recover')}</p>
<p id="signup-link">${portal.translate('signin', 'signup')}</p>
</main>`;
});
```

:::note

This example uses template literals, which do not work in older browsers. You should use string concatenation or run your templates through a tool, such as Babel, before adding to your portal. 

:::
