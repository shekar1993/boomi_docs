# Integration with other Systems 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-76b818e0-c95b-41ec-a9e9-ec0cab88d258"/>
</head> 

The API Control Plane offers two ways of integrating with other systems. First, the Control Plane is built on API-first principles. That means, that all features that are available within the user interface are also available via the management API. You can use the management API to embed the API Control Plane into CI/CD pipelines, other workflow systems or into custom scripts. For more information see the documentation on the management API. 

The second way of integrating the API Control Plane with other systems is the support for outgoing web hooks. You can manage the configured web hooks including a log of all sent messages via the configuration menu. 

## When to use what? 

The main difference between the two integration concepts is the direction of communication. The management API allows the API Control Plane to be integrated in scenarios where the active part is the application the Control Plane needs to be integrated with. The primary example of this is using the Control Plane as part of an CI/CD pipeline, e.g. to calculate security and quality scores or to trigger deployments of APIs. 

When the integration relies on a trigger within the API Control Plane, e.g. a new subscription was created or an approval needs to be given, the web hook feature is the primary integration point. It allows you to invoke external applications and react on what happened within the Control Plane. The web hooks have a data field that contains details on the event that happened within the system.