# API testing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-e318fa9f-0634-48c6-bbdb-8b7ba0b096e4"/>
</head>


You cannot use Test mode within an API process because the Web Services Server connector is listen-only and cannot be triggered in real time when in this mode.

Here are the basic steps to test an API process:

1.  Deploy the process to an Atom Cloud or to a local Atom to launch Web Services Server.

2.  If you are using an API Service component to define the API endpoint\(s\), deploy the component.

3.  Trigger the client application work flow that invokes the API by sending an outbound message to the Atom's endpoint URL.

4.  Review the process execution and inbound document data on the Manage menu's Process Reporting page. A new execution thread should be visible after a successful send from the client application to the Atom's web server.

5.  Save a copy of the inbound request data to a local file.


Consider using the FTP or Disk connector in the Start step to retrieve the request XML, JSON, or file data that you intend to send through the API process. This allows you to simulate the document flow in Test mode without having to fully deploy the process to an Atom.

## Client-side testing with Postman

[Postman](https://www.postman.com/) is an API platform that allows you to build and test APIs.

## Client-side testing with SoapUI

[SoapUI](http://www.soapui.org) is a testing tool that enables you to work interactively with API clients or implementations and to run tests of SOAP-based APIs in a continuous integration environment. It is best to use SoapUI to test APIs processes where the full SOAP URL is available. Consider getting the SoapUI NG Pro version to do more extensive testing with HTTP messages. 