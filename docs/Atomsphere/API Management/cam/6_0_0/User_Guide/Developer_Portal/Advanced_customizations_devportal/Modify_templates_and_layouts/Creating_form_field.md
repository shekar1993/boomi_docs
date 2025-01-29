---
sidebar_position: 4
---

# Creating Form Field HTML

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f79f7d52-6f3a-47dc-a059-ab8e10ebe217"/>
</head>

If the view you are customizing includes a form, you do not have to hand-code the fields into your new layout. 

The `portal.getFields()` method returns an array of field data for the form. Pass in the view ID as an argument. 

For example, this would store an array of field data for the sign-in page to the field's variable: 

```
// Get the field data for this view
var fields = portal.getFields('signin');
```

The `portal.getPartial('createField', field, view)` method provides a way to automatically generate markup for each of the fields. 

To create the field markup, you can loop through the array of fields and pass each on into the method. Replace the view with the actual view ID. 

Here are examples using the `JavaScript Array.map()` method to create an array of field markup, and `Array.join()` to combine them into a single string: 

```
// Get the field data for this view
var fields = portal.getFields('signin');
```

```
// Create the field markup
var fieldsHTML = fields.map(function (field) {
return portal.getPartial('createField', field, 'signin');
}).join('');
```
