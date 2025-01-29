---
sidebar_position: 5
---

# Adding, Removing, and Reordering Fields

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-79472380-3bc7-4e73-a769-6dd9c24963f3"/>
</head>

## Setting fields

You can set fields form a form using the `portal.setFields()` method. 

Pass in two arguments: the id of the view the fields belong with, and an array of fields. Each field in the fields array is an object with key/value pairs for the various field properties. 

For example, here are the fields for the sign-in form: 

```xml
portal.setFields('signin', [
{
id: 'username',
type: 'input',
value: null,
required: true
},
{
    id: 'password',
type: 'password',
value: null,
required: true
}
]);
```

## Adding fields to an existing form

To add fields to an existing form, you first need to use the `portal.getFields()` method to get the existing fields array. 

```
// Get the existing fields
var fields = portal.getFields('signin');
```

Next, you use the JavaScript `Array.concat()` method to add your new field items to the default fields. 

```
// Merge new fields into the existing ones
var updatedFields = fields.concat([{
id: 'email',
type: 'email',
value: null,
required: false
}]);
```

Finally, you use the `portal.setFields()` method to update the fields. 

```
// Update with additional fields
portal.setFields('signin', updatedFields);
```

## Reordering fields

You can change the order of fields in a form using the `portal.reorderFields()` method. Pass in two arguments: the `id` of the view, and an array of field IDs in the order you want them to appear. 

In the last section, we added an *email* field to the *signin* view. That field was added to the end of the fields array, after *password*. 

If you wanted email to appear between `username` and `password`, you would do this: 

```
// Reorder signin fields
portal.reorderFields('signin', ['username', 'email', 'password']);
```

## Removing fields

You can use the `portal.removeFields()` method to remove a field from a form, as long as it is not required. Pass in the form id and an array of field IDs as arguments. 

For example, if you wanted to remove two fields from the sign-in form: *username* and *email*, you would do this: 

```
// Remove fields from the signin view
portal.removeFields('signin', ['username', 'email']);
```

In this case, *email* would be successfully removed, but username would not, since it is a required field. 
