# Twilio changelog 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7dcdb69f-727f-4f57-af9a-3eaed10e0e88"/>
</head>


## Changelog

**2023-11 (Current)**

- Several potential security vulnerabilities (Deserialization of Untrusted Data, Denial of Service, and Man-in-the-Middle (MitM)) were resolved to make the Connector more secure.

**2023-09**

- We introduced a New Message API with Get, Query and Create operations in place of SMS Message API which is deprecated and no longer maintained or updated for the upcoming versions of the Twilio API.

- We changed the datatype for `VoiceCallerId` from string to boolean for TollFreeIncomingPhoneNumber, LocalIncomingPhoneNumber, and IncomingPhoneNumbers objects.

- We removed the `DateUpdated` and `DateCreated` endpoints from the response data for the AuthorizedConnectApp object.

- We removed the `ConnectAppSid` and `OwnerAccountSid endpoints` from the response data for the Account object.