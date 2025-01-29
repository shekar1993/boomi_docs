---
sidebar_position: 2
---

# API Calls and HTTP Requests

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c7a7ca51-0d75-4767-8093-30a402861ed4"/>
</head>

Methods for making API calls and HTTP requests. 

- **http()** 

Makes an HTTP request.

**Syntax**

```
/**
* @param {String} url The URL to request
* @param {Object} options Request options
[optional]
* @return {Promise} The request promise
*/
portal.http(url, options);
```

**Example**

```
// A basic request
var request = portal.http('https://some-url.com');
request.then(function (response) {
console.log(response.data); // The
responseText
console.log(response.xhr); // The full
response
}).catch(function (error) {
console.log(error.status); // The error status
console.log(error.statusText); // The error
statusText
});
// A request with the POST method
var request = portal.http('https://some-url.com', {
method: 'POST'
});
```

- **httpWithToken()**

Makes an HTTP request with the user credentials token automatically included.

**Syntax**

```
/**
* @param {String} url The URL to request
* @param {Object} options Request options [optional]
* @return {Promise} The request promise
*/
portal.httpWithToken(url, options);
```

**Example**

```
// A request with the token included
var request = portal.httpWithToken('https://some-url.com');
```

