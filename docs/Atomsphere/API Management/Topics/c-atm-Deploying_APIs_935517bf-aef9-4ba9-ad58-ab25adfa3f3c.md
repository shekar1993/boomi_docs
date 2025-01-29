# API deployment

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-935517bf-aef9-4ba9-ad58-ab25adfa3f3c"/>
</head>


To begin testing from a client application and successfully reach the full URL path defined in the Atom and operation, you need to deploy an instance of the web service listener process. If the endpoint is defined in an API Service component, you also need to deploy that component.

We recommend you deploy an early version of the listener first to confirm that the URL is working before fully developing the process from end to end. There are some networking considerations when trying to reach the URL in the Cloud or behind your firewall in a local environment. See the topics linked below.

You can view the status of deployed listeners and API Service/Proxy components in the Listeners panel in **Manage** \> **Atom Management**. In that panel it is also possible to pause, resume, and restart listeners. 