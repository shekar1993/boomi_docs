# x-flow-identity - basic authentication

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-ce31e006-b1a4-47e5-82a7-878a1d946abd"/>
</head>


This extension allows you to apply basic authentication using your OpenAPI document.

## Example A - using defaultUrl

```
1   basicAuth:
2      type: http
3      scheme: basic
4      x-flow-identity:
5        me:
6          defaultUrl: http://localhost:5010/api/crud/get-basic
```

There are two different ways to decorate a basic authentication security definition.

The simplest of these \(example A\) is to provide a `defaultUrl` within the `x-flow-identity` schema extension.

This URL indicates to the OpenApi connector which URL it should attempt to access to verify that the basic authentication credentials provided are valid. Information about who this user is \(such as `firstName` and `lastName`\) are populated with default values. In this example, these will be set to the same value as the provided username.

## Example B - using userInfoUrl

```
1    basicAuth:
2      type: http
3      scheme: basic
4      x-flow-identity:
5        me:
6          userInfoUrl: http://localhost:5010/api/crud/me
7          firstName: firstName
8          lastName: lastName
9          email: email
10         username: username
11         userId: userId
```

The second method \(example B\) is similar to the OAuth approach in that a `userInfoUrl` is provided that is secured by basic authentication, which then returns information about the authenticated user.

The mapping works in the same way where the property on the left is mapped to the value of the returned property specified on the right.