---
sidebar_position: 6
---

# Navigation

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0f153c60-0cce-4bca-b6e9-d426cd56b633"/>
</head>

Methods for setting, getting, and manipulating navigation menu items. 

- **addNavItems()**

Adds navigation items to an existing menu. Uses the allowed and disallowed properties to restrict access to a navigation item to a specific role.

**Syntax**

```
/**
* @param {String} id The navigation ID
* @param {Array} items The navigation items
*/
portal.addNavItems(id, items)
```

**Example**

```
portal.addNaviItems('navNew', [
{
id: 'about',
url: '/about-us'
},
{
id: 'topSecret',
url: '/top-secret',
allowed: ['123', '456'],
disallowed: ['abc']
}
]);
```

- **removeNavItems()**

Removes navigation items from an existing menu.

**Syntax**

```
/**
* @param {String} id The nav ID
* @param {String|Array} items The item(s) to remove
*/
portal.removeNavItems(id, items)
```

**Example**

```
// Remove the "about" item
portal.removeNavItems('navNew', 'about');
// Remove the "topSecret" and "home" items
portal.removeNavItems('navNew', ['home',
'topSecret']);
```

- **getNavItems()**

Gets the nav items for a navigation menu.

**Syntax**

```
/**
* @param {String} id The nav ID
* @return {Array} The items
*/
portal.getNavItems(id)
```

**Example**

```
// Get the nav items for the "navNew" menu
var navItems = portal.getNavItems
('navNew');
```

- **reorderNavItems()**

Gets the nav items for a navigation menu. Reorders the items in a navigation menu.
Items omitted from the items array are added to the end in their original order.

**Syntax**

```
/**
* @param {String} id The navigation menu ID
* @param {Array} items The items to reorder (ex. ['register', 'signin'])
*/
portal.reorderNavItems(id, items)
```

**Example**

```
// Reorder the "navNew" menu. "home" shows up last because it was omitted from the list
portal.reorderNavItems('navNew', ['topSecret', 'about', 'docs']);
```


