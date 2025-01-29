---
sidebar_position: 1
---

# Localize your Developer Portal

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-8b95d22f-fe8a-4f0f-b455-94c92a0f3f4e"/>
</head>

Your Developer Portal can be easily internationalized, either by Mashery or with client-provided translations. 

1. All hard-coded strings should be passed through the `translate()` method. Pass in the ID for the current view, and a unique ID (within the view) for the string itself. 

```
// templates.js
portal.setDefault('mypage', function (data) {
return `
<h1>${portal.translate('mypage', 'title')}</h1>
<p>${portal.translate('mypage', 'greeting')}</p>`;
});
```

2. Pass an object of default values into the `addTranslations()` method for that view. 

```
portal.addTranslations('default', {
'mypage': {
title: 'Hello, world!',
greeting: 'How are you today?'
}
});
```
