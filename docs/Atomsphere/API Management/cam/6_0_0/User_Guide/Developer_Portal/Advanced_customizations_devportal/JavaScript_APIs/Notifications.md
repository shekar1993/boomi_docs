---
sidebar_position: 7
---

# Notifications

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-68f935fe-2384-4a3c-bcc7-fbc86df7d84f"/>
</head>

Methods for displaying notifications to portal users. 

- **notifications.success()**

Creates a success notification.

**Syntax**

```
/**
* @param {String} msg The notification message
* @param {Object} options Notification options ({title: "The Title", inline: "#inline-target", deferred:
false}) [optional]
* @return {Node} The injected notification element
*/
portal.notifications.success(msg, options)
**
```

**Example**

```
// Display a notification that says "Hello"
portal.notifications.success('Hello');
// Display a notification on the next page load
portal.notifications.success('Hello', {
deferred: true
});
// Display a notification with a title
portal.notifications.success('Hello', {
title: 'Congrats!'
});
// Display a notification inline in the page instead of at the top of the document
portal.notifications.success('Hello', {
inline: '#some-form'
});
```

- **notifications.warning()**

Creates a warning notification.

**Syntax**

```
/**
* @param {String} msg The notification message
* @param {Object} options Notification options ({title: "The Title", inline: "#inline-target", deferred:
false}) [optional]
* @return {Node} The injected notification element
*/
portal.notifications.warning(msg, options)
```

**Example**

```
// Display a notification that says "Hello"
portal.notifications.warning('Hello');

// Display a notification on the next page load
portal.notifications.warning('Hello', {
deferred: true
});

// Display a notification with a title
portal.notifications.warning('Hello', {
title: 'Congrats!'
});

// Display a notification inline in the page instead of at the top of the document
portal.notifications.warning('Hello', {
inline: '#some-form'
});
```

- **notifications.error()**

Creates an error notification.

**Syntax**

```
/**
* @param {String} msg The notification message
* @param {Object} options Notification options ({title: "The Title", inline: "#inline-target", deferred:
false}) [optional]
* @return {Node} The injected notification element
*/
portal.notifications.error(msg, options)
```

**Example**

```
// Display a notification that says "Hello"
portal.notifications.error('Hello');

// Display a notification on the next page load
portal.notifications.error('Hello', {
deferred: true
});
// Display a notification with a title
portal.notifications.error('Hello', {
title: 'Congrats!'
});

// Display a notification inline in the page instead of at the top of the document
portal.notifications.error('Hello', {
inline: '#some-form'
});
```

- **notifications.info()**

Creates an informational notification.

**Syntax**

```
/**
* @param {String} msg The notification message
* @param {Object} options Notification options ({title: "The Title", inline: "#inline-target", deferred:
false}) [optional]
* @return {Node} The injected notification element
*/
portal.notifications.info(msg, options)
```

**Example**

```
// Display a notification that says "Hello"
portal.notifications.info('Hello');
// Display a notification on the next page load
portal.notifications.info('Hello', {
deferred: true
});
// Display a notification with a title
portal.notifications.info('Hello', {
title: 'Congrats!'
});
// Display a notification inline in the page instead of at the top of the document
portal.notifications.info('Hello', {
inline: '#some-form'
});
```


