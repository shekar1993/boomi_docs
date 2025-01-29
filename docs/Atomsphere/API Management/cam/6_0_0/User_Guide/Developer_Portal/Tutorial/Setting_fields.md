# Setting Fields

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-6ac30a81-6a95-4de2-91b0-448a4e800d01"/>
</head>

To set fields to a form using the setFields method, complete the following steps.

## Before you begin

Pass the following two arguments. 

- First argument: form ID 

- Second argument: field 

:::note

The first argument is a string and the second argument can be either an array or a string. 

:::

1. For the `setFields()` method, use the following syntax. 

```
/**
* @param {String} id The form ID
* @param {String|Array} fields The field(s) to remove
*/
portal.setFields(id, fields)
```

### *portal.setFields()* Example

In the following example, register is the first argument where ‘Register’ is form Id. Email field is the second argument, here the user adds the email field. 

Both form ID and fields are mandatory fields for this method. 

```
// Add the "email" field for a registration form with ID "Register"
portal.setFields('Register', [ { id: 'email', type: 'input', value: null, required: true } ]);
```

## Adding Fields to an Existing Form

To add fields to an existing form complete the following steps. 

1. To add fields to an existing form in the developer portal, use the `portal.getFields()` method to get the existing fields array, as below. 

```
// Get the existing fields
var fields = portal.getFields('signin');
```

2. Add new field items to the existing fields using the `JavaScript Array.concat()` method. 

```
// Merge new fields into the existing ones
var updatedFields = fields.concat([{id: 'email',type: 'email',value: null, required: false}]);
```

3. Merge new fields into existing fields on the form using the `portal.getFields()` method. 

```
portal.setFields('signin', updatedFields)
```

## Removing Fields from an Existing Form

### Before you begin

Pass the following two arguments. 

- First argument: form ID 
- Second argument: field 

:::note

The first argument is a string and the second argument can be either an array or a string. 

:::

```
/**
* @param {String} id The form ID
* @param {String|Array} fields The field(s) to remove
*/
portal.removeFields(id, fields)
```

### *portal.removeFields()* Example

In the following example, myNewForm is the first argument and the comments field is the second argument. 

```
// Remove the "comments" field from a form with ID "myNewForm"
portal.removeFields('myNewForm', "comments");
// Remove the "comments" and "company" fields from a form with ID "anotherForm"
portal.removeFields('anotherForm' ['comments', 'company']);
```
