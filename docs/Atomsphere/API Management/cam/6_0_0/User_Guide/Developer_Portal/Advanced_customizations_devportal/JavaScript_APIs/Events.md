---
sidebar_position: 3
---

# Events

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2e695bb8-ac82-4d45-9f59-014880d83c97"/>
</head>

Methods for adding and removing event listeners for various DOM events. 

- **on()**

Adds an event listener.

**Syntax**

```
/**
* @param {String} types The event type or types (space
separated)
* @param {String} selector The selector to run the event on
* @param {Function} callback The function to run when the
event fires
* @param {Boolean} protect If true, event cannot be removed
*/
portal.on(types, selector, callback, protect)
```

**Example**

```
// Listen for click events on the #app element
portal.on('click', '#app', function (event) {
console.log('it was clicked');
});

// Listen for scroll and resize events on the document
portal.on('click scroll', document, function (event) {
console.log('An ' + event.type + ' event happened');
});

// Protect a click event so it can't be removed
portal.on('click', '#my-element', function (event) {
console.log('You cannot remove this.');
}, true);
```

- **off()**

Removes an event listener from an element. The arguments must exactly match the ones used to set up the event.

**Syntax**

```
/**
* @param {String} types The event type or types (space separated)
* @param {String} selector The selector to remove the event from
* @param {Function} callback The function to remove
*/
portal.on(types, selector, callback)
```

**Example**

```
// Remove click events on the #app element
portal.off('click', '#app', function (event) {
console.log('it was clicked');
});

// Remove scroll and resize events on the document
portal.off('click scroll', document, function (event) {
console.log('An ' + event.type + ' event happened');
});

// Does not remove this event, since it was protected
portal.off('click', '#my-element', function (event) {
console.log('You cannot remove this.');
});
```

- **once()**

Adds an event listener, and automatically removes it after it runs once.

**Syntax**

```
/**
* @param {String} types The event type or types (space separated)
* @param {String} selector The selector to run the event on
* @param {Function} callback The function to run when the event fires
*/
portal.once(types, selector, callback)
```

**Example**

```
// Listen for a click event on the #app element just once
portal.once('click', '#app', function (event) {
console.log('it was clicked');
});
```

- **emit()**

Emits a custom event that you can listen for with one the on() and once() methods.

**Syntax**

```
/**
* @param {String} type The event type
* @param {Node} elem The element to attach the event to
* @param {Object} detail Any details to pass along with the event [optional]
*/
portal.emit(type, elem, detail)
```

**Example**

```
// Emit a custom event on the document
portal.emit('myEvent', document);
// Emit a custom event with details
portal.emit('myOtherEvent', document, {
id: 123
});
// Listen for a custom event
portal.on('myEvent', document, function (event) {
console.log('The event ran');
});
// Get the details from a custom event
portal.on('myOtherEvent', document, function (event) {
console.log('id:', event.detail.id);
});
```

- **getEvents()**

Returns an immutable list of all current event listeners.

**Syntax**

```
/**
* @return {Object} Active event listeners
*/
portal.getEvents()
```

**Example**

```
// Get an object of current events
var events = portal.getEvents();
```


