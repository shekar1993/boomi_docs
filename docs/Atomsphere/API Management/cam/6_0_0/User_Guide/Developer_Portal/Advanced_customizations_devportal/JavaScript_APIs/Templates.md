---
sidebar_position: 14
---

# Templates

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-6b744d6b-39c2-42eb-b001-13109a14ef7f"/>
</head>

Methods for setting, updating, and managing UI templates. 

- **setTemplate()**

Replaces a default template for a view. If there's an endpoint associated with the view, the API data is automatically passed into the template function as an argument. The template can be a simple string, or a function that returns a string.

**Syntax**

```
/**
* @param {String} id The template ID
* @param {Function|String} template The template
*/
portal.setTemplate(id, template)
```

**Example**

```xml
// Set the template for the "newPage" page
portal.setTemplate('newPage', function (data) {
return `
<h1>${data.title}</h1>
${data.pubdate}
${data.content}`;
});
```