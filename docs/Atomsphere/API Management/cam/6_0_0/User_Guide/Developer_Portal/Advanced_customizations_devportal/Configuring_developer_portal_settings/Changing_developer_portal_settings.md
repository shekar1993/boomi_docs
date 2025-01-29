---
sidebar_position: 3
---

# Changing Developer Portal Settings

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b2152085-883e-4865-8388-5ac108d4aba5"/>
</head>

You can change the default Developer Portal settings using the `portal.settings()` method. Pass in an object with the key/value pairs that you want to update. 

For example, to turn on debug mode and use the alternative set of *icons*, you would do this: 

```
portal.settings({
debug: true,
icons: 'alternate'
});
```
