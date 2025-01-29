---
sidebar_position: 1
---

# Loading Scripts

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ccb21190-01b4-491b-b7d1-c061ab7cc99d"/>
</head>

You can load custom scripts into your Developer Portal using the `portal.loadJS()` method. Pass in the path of the JavaScript file as an argument: 

```
// Load a custom CSS file
portal.loadJS('/path/to/your/file.js');
```

If a Callback should run after the script loads, pass that in as the second argument: 

```
// Load a custom CSS file
portal.loadJS('/path/to/your/file.js', function () {
console.log('the file loaded!');
});
```

By default, the portal.loadJS() method loads the JavaScript files asynchronously and does not maintain loading order. If they should be loaded in order, pass in a third argument as true (this can be the second argument if there is no Callback function): 

```
/**
* Maintain File Load Order
*/
portal.loadJS('/path/to/your/load-first.js', function () {
console.log('the file loaded!');
}, true);
portal.loadJS('/path/to/your/load-second.js', true);
portal.loadJS('/path/to/your/load-third.js', true);
```
