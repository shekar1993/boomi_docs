---
sidebar_position: 5
---

# General

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-4540f50c-7554-4a7c-800d-d137dd841b72"/>
</head>

Methods for configuring and extending the portal. 

- **trueTypeOf()**

Gets the accurate type for an object.

**Syntax**

```
/**
* @param {*} obj The object to get the
typeof
* @return {String} The type
*/
portal.trueType(obj)
```

**Example**

```
// returns "array"
var type = _portal.trueTypeOf([]);
```

- **extend()**

Extends the portal object with new methods and properties.

**Syntax**

```
/**
* @param {*} fn The function/object/etc. to add
*/
portal.extend(name, fn)
```

**Example**

```
// Add the sayHi() method
portal.extend('sayHi', function (name) {
alert('Hello, ' + name);
});
// alerts "Hello, Hal"
portal.sayHi('Hal');
```

- **warn()**

When in debug mode, logs a warning to the console. Otherwise, does nothing.

**Syntax**

```
/**
* @param {String} msg The warning to log
*/
portal.warn(msg)
```

**Example**

```
// If in debug mode, logs "Hey, you can't do that" to the console as a warning
portal.warn('Hey, you can\'t do that!');
```

- **err()**

When in debug mode, throws an error in the console. Otherwise, does nothing.

**Syntax**

```
/**
* @param {String} msg The error message
*/
portal.err(msg)
```

**Example**

```
// If in debug mode, throws the following error: "Uh oh, something went wrong!"
portal.err('Uh oh, something went wrong!');
```

