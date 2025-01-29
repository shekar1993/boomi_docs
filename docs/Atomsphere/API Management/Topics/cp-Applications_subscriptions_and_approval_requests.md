# Applications, Subscriptions, and Approval Requests 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-8741164a-8d7d-4a9b-b909-7990c64f1cac"/>
</head> 

## Applications

In order to access an API product you must create an application first. The API keys needed to access the API are linked to the applications. This way you can disable the access from one application to all of your APIs simply by deactivating the application. 

For more information on applications see [Applications](../Topics/cp-Applications.md).

## Subscription

Subscriptions are the entity that control access to an API. A subscription always refers to one application and one API product. The subscription also contains the information which plan is used to access the API. By changing plans within a subscription, the allowed number of calls an application can make to an API is controlled. 

In order to control subscriptions, there are approval workflows available. Please refer to the chapter on configuration for more details about the possibilities. 

Subscriptions can be performed by the administrators within the administration portal, but can also be done inside of one of the developer portals in case a self-service solution is desired. 

Subscriptions can be viewed within applications or APIs. See [Application Subscriptions](../Topics/cp-Application_subscriptions.md). 

## Approval Requests

In case you don’t want anyone with access to your developer or admin portal to subscribe to your APIs without notice, you can activate approval requests in the configuration. If they are enabled, they allow you to manually confirm or deny all subscription requests before they are able to access the API.
For more information on Approval Requests see [Configuration Approvals](../Topics/cp-Configuration_approvals.md).