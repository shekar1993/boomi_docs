---
sidebar_position: 3
---
# Continuing Processing Request for Successful Authentication

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f9eb9cfc-8b1c-4072-89d9-b9319b6eb528"/>
</head>

1. Get the headers from the `HTTPServerRequest`. 

2. Check for the authentication header. 

3. Validate the value of the authentication header. On validation success, return from the adapter and continue processing. 

   Successful Authentication

   ```
   if (userId.equals("userName") && password.equals("userPassword")) {
  Logger.info(MyCustomAuthenticatorFailed.class,"Basic Authentication is successful");
  }
  ```
