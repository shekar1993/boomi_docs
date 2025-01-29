---
sidebar_position: 13
---

# Storage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-23300a5c-7d8e-462a-9b7c-700d5258753d"/>
</head>

Methods for storing and accessing data locally in the browser. 

- **setStorage()**

Saves data to localStorage or sessionStorage. Automatically stringifies objects and arrays.

**Syntax**

```
/**
* @param {String} id The localStorage ID
* @param {*} data The data to save
* @param {Boolean} session If true, use sessionStorage instead of localStorage
*/
portal.setStorage(id, data, session)
```

**Example**

```
// Saves to localStorage
portal.setStorage('lunch', {
sandwich: 'Turkey',
drink: 'Water',
orderNumber: 123
});
// Saves to sessionStorage
portal.setStorage('dinner', {
sandwich: 'Chicken',
drink: 'Soda',
orderNumber: 456
}, true);
```

- **getStorage()**

Gets data from localStorage or sessionStorage. Automatically converts stringified arrays and objects back into their original format.

**Syntax**

```
/**
* @param {String} id The localStorage ID
* @param {*} fallback A fallback value to return if no data is found [optional]
* @param {Boolean} session If true, get data from sessionStorage instead of localStorage
* @return {*} The saved data
*/
portal.getData(id, fallback, session)
```

**Example**

```
// Get data from localStorage
var stored1 = portal.getData('lunch');

// Get data from localStorage with an empty object as a fallback
var stored2 = portal.getData('lunch', {});

// Get data from sessionStorage (with no fallback)
var stored3 = portal.getData('dinner', null, true);

// Get data from sessionStorage with an empty object as a fallback
var stored3 = portal.getData('dinner', {}, true);
```

- **removeStorage()**

Removes data from localStorage or sessionStorage.

**Syntax**

```
/**
* @param {String} id The localStorage ID
* @param {Boolean} session If true, remove data from sessionStorage instead of
localStorage
*/
portal.removeData(id, session)
```

**Example**

```
// Remove data from localStorage
portal.removeData('lunch');
// Remove data from sessionStorage
portal.removeData('dinner', true);
```

- **getCookie()**

Gets the value of a cookie.

**Syntax**

```
/**
* @param {String} id The cookie
ID
*/
portal.getCookie(id)
```

**Example**

```
// Get the value of a cookie named
"date"
var date = portal.getCookie('date');
```

