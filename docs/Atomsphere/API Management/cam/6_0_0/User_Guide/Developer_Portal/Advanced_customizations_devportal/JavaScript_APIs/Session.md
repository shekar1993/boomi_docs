---
sidebar_position: 11
---

# Session

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-a9081603-5c86-472b-b3d3-1bb7502fd227"/>
</head>

Methods for managing the current user session. 

- **logout()**

Logs the current user out of the portal.

**Syntax**

```
portal.logout()
```

**Example**

```
// log the current user out
portal.logout();
```

- **getUser()**

Gets one or more properties about the current user from their token.

**Syntax**

```
/**
* @param {String} prop Get a specific property for the user [optional]
* @return {Object|String} The user object or value
*/
portal.getUser(prop)
```

**Example**

```
// Get all user details
portal.getUser();
// Get the current user's username
portal.getUser('handle');
```

- **getUserRoles()**

Gets the roles associated with the current user.

**Syntax**

```
/**
* @return {Array} The user's role IDs
*/
portal.getUserRoles()
```

**Example**

```
// get the user's roles
var roles = portal.getUserRoles();
```

- **userHasRole()**

Checks if the current user is the member of a specific role.

**Syntax**

```
/**
* @param {String} id The role ID to check
* @return {Boolean} If true, the user has the role ID
*/
portal.userHasRole(id)
```

**Example**

```
// Check if the user has the role with an ID of 1234
var hasAdmin = portal.userHasRole(1234);
```

- **getArea()**

Gets one or more area details.

**Syntax**

```
/**
* @param {String} prop Get a specific property for the area
[optional]
* @return {Object|String} The area object or value
*/
portal.getArea(prop)
```

**Example**

```
// get all area details
var area = portal.getArea();
```

- **getTimeToSessionEnd()**

Checks how much time is left (in milliseconds) before the current session ends.

**Syntax**

```
/**
* @return {Integer} The number of milliseconds left in the current session
*/
portal.getTimeToSessionEnd()
```

**Example**

```
// Get time to session end
var ends = portal.getTimeToSessionEnd();
```

- **isSignedIn()**

Checks if the current user is signed in.

**Syntax**

```
/**
* @return {Boolean} Returns true if the user is
signed in
*/
portal.isSignedIn()
```

**Example**

```
// Check if the current user is signed in
var signedin = portal.isSignedIn();
```

- **getUsername()**

Gets the current user's username.

**Syntax**

```
/**
* @return {String} The username
*/
portal.getUsername()
```

**Example**

```
// Get the username
var username =
portal.getUsername();
```

- **getUserDisplayName()**

Gets the current user's display name.

**Syntax**

```
/**
* @return {String} The display name
*/
portal.getUserDisplayName()
```

**Example**

```
// Get the display name
var displayName =
portal.getUserDisplayName();
```

- **getUserEmail()**

Gets the current user's email address.

**Syntax**

```
/**
* Get the current user's email
* @return {String} The email
*/
portal.getUserEmail()
```

**Example**

```
// Get the email address
var email = portal.getUserEmail();
```

