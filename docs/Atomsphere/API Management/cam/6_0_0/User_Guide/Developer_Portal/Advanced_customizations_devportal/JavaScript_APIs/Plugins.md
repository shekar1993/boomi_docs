---
sidebar_position: 8
---

# Plugins

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-fcffee61-2a0c-49e2-b093-8e0d23f10111"/>
</head>

Methods to register, de-register, activate, and disable portal plugins. Portal plugins are optional components that can be selectively enabled or disabled. Customers can also add their own. 

- **plugins.add()**

Registers a new plugin.

**Syntax**

```
/**
* @param {String} name The plugin name
* @param {Object} options The plugin
options
*/
portal.plugins.add(name, options)
```

**Example**

```
// Register a plugin
portal.plugins.add('togglePassword', {
setup: function () {
// Load the plugin
portal.loadJS('/assets/js/passwordvisibility.js');
}
});
// Register a plugin but disable it by default
portal.plugins.add('togglePassword', {
on: false,
setup: function () {
// Load the plugin
portal.loadJS('/assets/js/passwordvisibility.js');
}
});
```

- **plugins.remove()**

Removes a registered plugin.

**Syntax**

```
/**
* @param {String} name The name of the plugin to
remove
*/
portal.plugins.remove(name)
```

**Example**

```
// Remove the "togglePassword" plugin
portals.plugins.remove('togglePassword');
```

- **plugins.on()**

Activates a deactivated plugin.

**Syntax**

```
/**
* @param {String} name The name of the plugin to
activate
*/
portal.plugins.on(name)
```

**Example**

```
// Activate the "togglePassword" plugin
portals.plugins.on('togglePassword');
```

- **plugins.off()**

Deactivates an activated plugin.

**Syntax**

```
/**
* @param {String} name The name of the plugin to
deactivate
*/
portal.plugins.off(name)
```

**Example**

```
// Deactivate the "togglePassword" plugin
portals.plugins.off('togglePassword');
```

- **plugins.setup()**

Runs a plugin's setup function. This happens automatically after the page renders, but if
you manually activate a plugin after that happens, you can use this method to run it.

**Syntax**

```
/**
* @param {String} name The name of the plugin to setup
*/
portal.plugins.setup(name)
```

**Example**

```
// Activate the "togglePassword" plugin
portals.plugins.on('togglePassword');
// Setup the "togglePassword" plugin
portals.plugins.setup('togglePassword');
```

- **plugins.get()**

Gets a plugin or an object of all plugins.

**Syntax**

```
/**
* @param {String} name The name of a specific plugin
[optional]
* @return {Object|Function} The plugin or list of plugins
*/
portal.plugins.setup(name)
```

**Example**

```
// Get the "togglePassword" plugin
portals.plugins.get('togglePassword');
// Get all plugins
portals.plugins.get();
```

