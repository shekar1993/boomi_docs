---
sidebar_position: 2
---
# Stopping a Processing Request On Authentication Failure

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c70a9999-2309-4929-8663-13a6a53a0766"/>
</head>

## Procedure

1. Get the headers from the `HTTPServerRequest`.

2. Check for the authentication header. 

3. Validate the value of the authentication header. On validation failure, set the *TrafficManagerResponse* to complete. 

4. Local Edition stops the request and returns the `ERR_403_NOT_AUTHORIZED` error. 

:::note

You cannot change the status code or status message from the adapter. 

:::

   Unsuccessful Authentication

   ```xml
   private void doAuthenticateEvent(AuthenticationEvent event)
  throws ProcessorException {
  //For example request doesn't contain the authorization header then user can terminate
  the call by marking response as complete
  // in order to thrown 403 ERR_403_NOT_AUTHORIZED for the incoming request.
  HTTPHeaders headers = event.getServerRequest().getHeaders();
  if (headers != null) {
  String authorization = headers.get(HEADER_AUTHORIZATION);
  if ((null == authorization || authorization == "")
  || !authorization.startsWith(AUTH_BASIC)) {
  Logger.warn(MyCustomAuthenticator.class,"Error validating the authentication
  header {}",HEADER_AUTHORIZATION);
  event.getCallContext().getResponse().setComplete();
  }
  }
  ```

:::note

If the authentication fails to prevent further processing, set the following: 

   ```event.getCallContext().getResponse().setComplete();```

   Refer to the working code in `examples/MyCustomAuthenticatorFailed.java`. 
