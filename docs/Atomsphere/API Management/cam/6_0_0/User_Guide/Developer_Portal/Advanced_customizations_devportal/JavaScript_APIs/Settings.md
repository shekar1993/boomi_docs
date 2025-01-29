---
sidebar_position: 12
---

# Settings

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c42c94a2-3338-46b0-8dfe-303b6b6fa55f"/>
</head>

Methods for configuring and managing portal settings. 

- **getSettings()**

Gets an immutable copy of the current portal settings, or a specific setting's value.

**Syntax**

```
/**
* @param {String} setting The key of a specific setting to get [optional]
* @return {*} The setting or settings
*/
portal.getSettings(setting)
```

**Example**

```
// Get all settings
var settings = portal.getSettings();
// Get the value of the "debug" setting
var debug = portal.getSettings('debug');
```

- **settings()**

Updates one or more portal settings.

**Syntax**

```
/**
* @param {Object} options User options to override
settings with
*/
portal.settings(options)
```

**Example**

```
// Set "debug" to true and disable floating labels
portal.settings({
debug: true,
floatingLabels: false
});
```

