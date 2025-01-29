---
sidebar_position: 8
---

# Event Hooks

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-16e60e6a-a0f5-466e-b476-fb276f9465a6"/>
</head>

Blackbeard emits custom JavaScript events that you can hook into to run scripts and further customize your Portal.

Use addEventListener() on the window element to listen for Portal events.

```xml
window.addEventListener('portalAfterRender', function (event) {
alert('The Portal was rendered!');
}, false);
```

## Events

- portalLoaded runs after the Portal app is loaded but before it's been initialized.

- portalBeforeInit runs before the Portal is initialized.

- portalAfterInit runs after the Portal is initialized.

- portalBeforeRender runs before the Portal is rendered.

- portalAfterRender runs after the Portal is rendered.

- portalBeforeRenderAjax runs before an Ajax page load.

- portalAfterRenderAjax runs after an Ajax page load.

- portalIODocsShowMethod runs after an IO-Docs method is shown.

- portalIODocsHideMethod runs after an IO-Docs method is hidden.

- portalIODocsShowEndpoint runs after an IO-Docs endpoint is shown.

- portalIODocsHideEndpoint runs after an IO-Docs endpoint is hidden.

## Emitting your own custom events

Blackbeard also includes [a JavaScript API for emitting your own custom events](JavaScript_api.md).

```xml
// A simple event
m$.emitEvent('myCustomEvent');
// An event with Details
m$.emitEvent('anotherCustomEvent', {
details: {
something: 'a value',
another: true,
answer: 42
}
});
```
