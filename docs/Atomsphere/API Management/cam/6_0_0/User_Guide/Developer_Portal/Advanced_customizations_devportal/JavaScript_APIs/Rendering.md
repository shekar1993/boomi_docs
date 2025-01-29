---
sidebar_position: 9
---

# Rendering

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0aefcb36-6493-470d-b441-8e4d168b22dc"/>
</head>

Methods for rendering content into the UI. 

- **getData()**

Gets an immutable copy of the data for the current page.

**Syntax**

```
/**
* @return {Object} The data
*/
portal.getData()
```

**Example**

```
// Get a copy of the data for the current page
var data = portal.getData();
```

- **sanitizeData()**

Sanitizes data from third-party sources before rendering it into the UI.

**Syntax**

```
/**
* @param {*} data The data to sanitize
* @param {Boolean} allowHTML If true, allow HTML in the data properties
[optional]
* @return {*} The sanitized data
*/
portal.sanitizeData(data, allowHTML)
```

**Example**

```
// Sanitize third-party data
// Returns "&lt;h1&gt;Hello worlds&lt;/h1&gt;"
var sanitized = portal.sanitizeData({name: '<h1>Hello world</h1>'});
// Sanitize third-party data with HTML allowed
// Returns "<h1>Hello world</h1>"
var sanitized = portal.sanitizeData({name: '<h1>Hello world</h1>'}, true);
```

- **stringToHTML()**

Converts a template string into HTML DOM nodes.

**Syntax**

```
/**
* Convert a template string into HTML DOM nodes
* @param {String} str The template string
* @return {Node} The template HTML
*/
portal.stringToHTML(str)
```

**Example**

```
// Convert a string to HTML
// Returns <h1>Hello world</h1><p>How are you?</p>
portal.stringToHTML('<h1>Hello world</h1><p>How are
you?</p>');
```

- **render()**

Renders the portal UI into the DOM. This is run automatically when the portal opens, but you can call it manually if you need the UI to re-render for some reason.

**Syntax**

```
portal.render()
```

**Example**

```
// Render/re-render the UI
portal.render();
```

