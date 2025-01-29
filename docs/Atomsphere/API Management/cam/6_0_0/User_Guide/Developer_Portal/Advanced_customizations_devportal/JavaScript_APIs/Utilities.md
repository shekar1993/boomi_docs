---
sidebar_position: 16
---

# Utilities

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-1e0d7e51-9757-4a8e-88a8-1d305eeba1ed"/>
</head>

Helper methods to make working with the portal a bit easier. 

- **getCountries()**

Gets an array of supported country IDs and names.

**Syntax**

```
getCountries()
/**
* @return {Array} Country IDs and names
*/
portal.getCountries()
```

**Example**

```
// Get countries
var countries = portal.getCountries();
// Returns "US"
countries[0].id;
// Returns "United States"
countries[0].name;
```

- **getPageID()**

Gets the ID for the current view.

**Syntax**

```
/**
* @return {String} The ID
*/
portal.getPageID();
```

**Example**

```
// Get the current page ID
var id = portal.getPageID();
```

- **formatDate()**

Formats a timestamp into a date string.

**Syntax**

```
/**
* @param {Integer} dateStr Date string
* @return {String} A formatted date
string
*/
portal.formatDate(dateStr)
```

**Example**

```
// Get the date from a timestamp
// Returns "January 1, 2020"
var date = portal.formatDate
(1577854800000);
```

- **serialize()**

Serializes all of the data in a form into an object.

**Syntax**

```
/**
* @param {Node} form The form to serialize
* @param {Boolean} rawHTML If true, do not strip HTML from the
values
* @return {Object} The serialized form data
*/
portal.serialize(form, rawHTML)
```

**Example**

```
// Get a form
var form = document.querySelector('form');
// Get all of the data in a form
var formData = portal.serialize(form);
// Get all of the form data with HTML allowed
var formHTML = portal.serialize(form, true);
```

- **buildQuery()**

Builds a query string from an object of key/value pairs.

**Syntax**

```
/**
* @param {Object} data The data to turn into a query string
* @return {String} The query string
*/
portal.buildQuery(data)
```

**Example**

```
// An object of key value pairs
var data = {
name: 'Dee Developer',
favoritePet: 'Dog'
};
// Build a query string
// Returns "name=Dee%20Developer&favoritePet=Dog"
var query = portal.buildQuery(data);
```

- **getParams()**

Gets the query string parameters from a URL as an object of key/value pairs.

**Syntax**

```
/**
* @param {String} url The URL [optional, defaults to window.location]
* @return {Object} The URL parameters
*/
portal.getParams(url)
```

**Example**

```
// Get the query string parameters from a URL
var url = 'https://myportal.com?name=Dee%20Developer&favoritePet=Dog';
var params = portal.getParams(url);
// Returns "Dee Developer"
params.name;
// Returns "Dog"
params.favoritePet;
```

- **loadCSS()**

Loads an external CSS file into the DOM.

**Syntax**

```
/**
* @param {String} url The file to load
*/
portal.loadCSS(url)
```

**Example**

```
// Load a CSS file
portal.loadCSS('/path/to/my/styles.css');
```

- **inlineCSS()**

Adds inline CSS to the head element.

**Syntax**

```
/**
* @param {String} css The CSS to
inline
*/
portal.loadCSS(css)
```

**Example**

```
// Inject inline CSS into the DOM
portal.inlineCSS('.font-big { font-size:
4em; }');
```

- **loadJS()**

Loads an external JavaScript file into the DOM.

**Syntax**

```
/**
* @param {String} src The file to load
* @param {Function} cb A callback to run after the file loads
[optional]
* @param {Boolean} ordered If true, do NOT load async [optional]
*/
portal.loadJS(src, cb, ordered)
```

**Example**

```
// Load a JS file
portal.loadJS('/path/to/my/scripts.js');
// Load a JS file and run a callback after it loads
portal.loadJS('/path/to/my/scripts.js', function () {
myScripts.init();
});
// Load multiple files and preserve the source order
portal.loadJS('/path/to/my/script1.js', true);
portal.loadJS('/path/to/my/script2.js', true);
portal.loadJS('/path/to/my/script3.js', true);
portal.loadJS('/path/to/my/script4.js', true);
// Load multiple files and preserve the source order
// Run a callback after the last on eloads
portal.loadJS('/path/to/my/script1.js', true);
portal.loadJS('/path/to/my/script2.js', true);
portal.loadJS('/path/to/my/script3.js', true);
portal.loadJS('/path/to/my/script4.js', function () {
myScripts.init();
},true);
```

- **loadHead()**

Add an element into the head element.

**Syntax**

```
/**
* Inject HTML elements into the <head>
* @param {String} type The HTML element type
* @param {Object} atts The attributes and values for the element
*/
portal.loadHead(type, atts)
```

**Example**

```
// Add a viewport element
// <meta name="viewport" content="width=device-width, initialscale=1">
portal.loadHead('meta', [
name: 'viewport',
content: 'width=device-width, initial-scale=1'
]);
```

- **redirect()**

Redirects the user to another page.

**Syntax**

```
/**
* Redirect to a new URL
* @param {String} url The URL to
redirect to
*/
portal.redirect(url)
```

**Example**

```
// Redirect to the about page
portal.redirect('/about');
```

- **html()**

Sanitizes and renders an HTML string into the DOM.

**Syntax**

```
/**
* @param {String|Node} selector The selector or node to render into
* @param {String} html The HTML to render
* @param {Boolean} append If true, append to DOM instead of wiping
existing out
* @return {Array} An array of injected elements
*/
portal.html(selector, html, append)
```

**Example**

```
// Render <h1>Hello world</h1> into the #app element
portal.html('#app', '<h1>Hello world</h1>');
// Add <p>How are you today?</p> in the #app element after any existing
content
portal.html('#app', '<p>How are you today?</p>', true);
```



