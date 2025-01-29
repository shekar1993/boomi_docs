---
sidebar_position: 2
---

# Getting Started - Including Boomi Cloud API Management Plugins

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d45064e9-ae4a-4417-8136-8bfa425e2cf9"/>
</head>

To activate a plug-in, use the `portal.plugins.on()` method, and pass in the ID of the plug-in as an argument. For example, to activate the "toggle password visibility" plug-in: 

```portal.plugins.on('togglePassword');```

To deactivate a plug-in, pass the plug-in ID into the `portal.plugins.off()` method: 

```portal.plugins.off('togglePassword');```

To get a list of all available plug-ins, use the `portal.plugins.get()` method: 

```var plugins = portal.plugins.get();```


