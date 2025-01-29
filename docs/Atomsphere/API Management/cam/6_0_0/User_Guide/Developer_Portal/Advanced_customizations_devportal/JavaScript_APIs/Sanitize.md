---
sidebar_position: 10
---

# Sanitize

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-a9aec8ec-e144-42c1-9d6b-51e6d9b44595"/>
</head>

Methods for sanitizing HTML template strings before rendering them into the UI. 

- **sanitize()**

Sanitizes an HTML string by removing malicious and unallowed properties, attributes, and elements.

**Syntax**

```
/**
* @param {String} html The raw HTML string
* @return {String} The sanitized HTML string
*/
portal.sanitize(html)
```

**Example**

```xml
// Sanitize a string
// Returns '<img src="x">'
var sanitized = portal.sanitize('<img onerror="alert(\'xss attack\')" src="x">');
```

- **sanitizeNoHTML()**

Removes all HTML from a template string.

**Syntax**

```
/**
* @param {String} str The raw string
* @return {String} The sanitized string
*/
portal.sanitizeNoHTML(str)
```

**Example**

```xml
// Remove all HTML from a string
// Returns "Hello world"
var sanitized = portal.sanitize('<h1>Hello
world</h1>');
```
