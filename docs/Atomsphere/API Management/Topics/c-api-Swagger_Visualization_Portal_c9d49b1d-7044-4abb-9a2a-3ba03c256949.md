# Swagger Visualization Portal 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c9d49b1d-7044-4abb-9a2a-3ba03c256949"/>
</head>


The Swagger Visualization Portal provides a way for users to browse APIs and see the operations along with the associated parameters and responses for the API. Additionally, users can modify and execute the API call to see live results of the API request.

Through the Swagger Visualization Portal, users can view and identify how to use APIs that are deployed on an Atom. Currently, results are displayed in cURL. [cURL](HTTPS://CURL.HAXX.SE/) is a command line tool that can get and send files that use URL syntax.

The Swagger Visualization Portal is available on the Atom, and it is only for deployments that are not using the API Gateway. If the Atom's default port is configured with the Gateway authentication type, or if the Cloud or Cloud Attachment is configured with the Gateway authentication type, the Swagger Visualization Portal is not accessible. For deployments on the Gateway, use the Developer Portal to view and test APIs.
