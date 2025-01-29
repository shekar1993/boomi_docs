---
sidebar_position: 4
---

# Forms

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-e27891be-4491-4fb7-a81f-5dfd3f2845c4"/>
</head>

Methods for setting, getting, and manipulating form fields.

- **removeFields()**

Removes one or more fields from a form.

**Syntax**

```
/**
* @param {String} id The form ID
* @param {String|Array} fields The field(s) to remove
*/
portal.removeFields(id, fields)
```

**Example**

```
// Remove the "comments" field from "myNewForm"
portal.removeFields('myNewForm', "comments");
// Remove the "comments" and "company" fields from
"anotherForm"
portal.removeFields('anotherForm' ['comments', 'company']);
```

- **getFields()**

Gets all of the fields in a form.

**Syntax**

```
/**
* @param {String} id The form ID
* @return {Array} The fields
*/
portal.getFields(id)
```

**Example**

```
// Get the fields for 'myNewForm'
var fields = portal.getFields
('myNewForm');
```

- **reorderFields()**

Changes the default order of fields in a form. Any form fields omitted from the array of fields are added to the end in their original order.

**Syntax**

```
/**
* @param {String} id The form ID
* @param {Array} fields The fields to reorder (ex. ['password', 'username'])
*/
portal.reorderFields(id, fields)
```

**Example**

```
// Show the "comments" field before "password"
// "username" is moved to the end since it was omitted
portal.reorderFields('myNewForm', ['comments', 'password']);
```
