# Reordering Fields

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2727f6f3-fda1-4efe-aed7-72d043cbdd26"/>
</head>

To set fields to a form using theportal.reorderFields() method complete the following steps.

## Before you begin

Pass the following two arguments. 

- First argument: form ID 

- Second argument: field 

:::note

- The first argument is a string and the second argument is an array.

- Any form fields omitted from the array of fields are added at the end in their original order in the form. 

:::

```
/**
* @param {String} id The form ID
* @param {Array} fields The fields to reorder (ex. ['password', 'username'])
*/
portal.reorderFields(id, fields);
```

## *portal.setFields()* Example

In the following example, myNewForm is the first argument and the comments field is the second argument. 

```
// Show the "comments" field before "password" in a form with form Id myNewForm which contains
three fields username, comments, password
// "username" is moved to the end since it was omitted
portal.reorderFields('myNewForm', ['comments', 'password']);
```

:::note

You can change the order of the fields as required. 

:::

## Updating a logo

### Before you begin

This method works on key value pair. The key specifies where the change has to be applied and the value specifies the new value. 

:::note

The logo can be text, an img element, or an inline SVG. 

:::

For an img element, 

```xml
portal.settings({logo: '<img alt="Acme Developer Portal" href="/path/to/our/logo.jpg">'});
```

For a svg element, 

```xml
portal.settings({logo: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
viewBox="0 0 16 16" aria-describedby="logo-title"><title id="
logo-title">Acme Developer Portal</title><path fill="#272727" d="M15.781 12.953l-4.712-
4.712a.752.752 0 0 0-1.061 0l-.354.354L6.779 5.72 11.499 1h5l-2.22 2.22-.22-.22H2.998v1.061l.22.22-3.22 3.22 2.5 2.5 3.22-3.22 2.875
2.875-.354.354a.752.752 0 0 0 0 1.061l4.712 4.712a.752.752 0 0 0 1.061
0l1.768-1.768a.752.752 0 0 0 0-1.061z"/></svg>'});
```