# Subscriptions page 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-4a29133e-8eac-4aaa-a56a-0bc853dd47ad"/>
</head>


The Subscriptions page facilitates the review and administration of API subscriptions associated with registered applications.

Clicking on an application name expands the view to reveal its subscriptions. You can select a subscription status to provide an associated view of the subscriptions filtered by that status. Deleted subscriptions appear only when the **Deleted** filter is selected.

To delete a subscription, click on the Delete icon.

## Subscription details 

Clicking on the API name of an individual subscription provides you with its associated details.

This interface provides insight into what governance is tied to this subscription as well as its associated API Key. The API Key is used as part of the invocation of calls to this API to provide lineage to the consuming application, ensure governance of the subscription is properly enforced, and facilitate the capturing of usage metrics.

#### Subscription Details

**Name**  
Description

**API Name**  
The name of the API that you subscribed to from the API Catalog page.

**Requested On**  
The date that you first requested the API subscription.

**Expiration Date**  
The date where your API subscription expires, if the Publisher specified one.

**Last Updated**  
The date of the last change to the subscription. Potential changes to the subscription include changing the status or the Publisher could change the plan, status, or expiration date.

**API Key**
A copy button is provided adjacent to the API Key field to simplify copying the API Key field for use within applications or API testing utilities. Should you require the API Key to be replaced for any reason, you can click the **Generate Replacement API Key** link. You are able to generate a replacement API Key even if the subscription is disabled. In this case, the API Key will not work until the subscription is enabled.

:::info 
 
The existing API Key will be inactivated and replaced with the newly generated API Key. As such, any associated use of the API Key will need to be updated to invoke the new API Key.

:::

**Subscription Status**  
For subscriptions that are approved by the Publisher, you can temporarily disable the API subscription. Then, you can enable it again. The publisher can also disable your subscription temporarily. If the publisher disabled your subscription, the ability to enable it will be disabled.

:::note 

You are unable to modify the subscription if the application is disabled.

:::

**Quota Limit**  
The number of allowed incoming API requests. This value tends to be set at a lower time period than the Rate Limit to avoid overwhelming the server.

**Maximum Message Size**  
The size limit of incoming API requests in kilobytes \(KB\).

**Rate Limit**  
The total number of allowed incoming API requests on an API Gateway for a specific time period. This value tends to be set at a higher time period than the Quota Limit as a way to avoid overusing an API.

**Message from Publisher**  
The message that the Publisher sent you when accepting or rejecting the subscription request.

**Message to Publisher**  
The message that you sent to the Publisher when submitting the subscription request.

#### Publisher Information

**Name**    
Description

**Publisher Name**  
The name of the Publisher.

**Publisher Email**  
The email address of the Publisher.

**Company Website**  
The website of the company who owns the API. 