# Activate and display Metrics for WSO2

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b04c31bf-07b9-435f-91cd-c3cd7489f4cc"/>
</head>

For WSO2, metrics must first be enabled via the Choreo cloud service in order to use and display them.

To make them usable in the API Control Plane , four variables must be inserted into the configuration file. These four values are optional. If they are not provided, the agent will not be able to obtain any metrics.

:::note
Your agent may not actually be using a config file. In that case, pass the extra parameters as environment variables, along with the others, prefixed with gateway., e.g. `gateway.orgId`.
:::

```
type: WSO2
url: https://host:port
user: yourUser
password: yourPassword
consumerKey: yourConsumerKey
consumerSecret: yourConsumerSecret
orgId: yourOrgId
environmentId: yourEnvironmentId
```

consumerKey, consumerSecret, orgId and environmentId are all related to Choreo, the web platform where WSO2 optionally stores metrics, and need to be added manually to the configuration file.

Refer [this link](https://apim.docs.wso2.com/en/latest/api-analytics/choreo-analytics/getting-started-guide/), for instructions on how to get started with Choreo. 

Refer [this link](https://wso2.com/choreo/docs/monitoring-and-insights/work-with-choreo-insights-api/access-the-choreo-insights-api/), for instructions on how to obtain consumerKey and consumerSecret.

## orgId

To get the orgId, click on your Profile in the top right and select Settings:

![How to WSO2 - orgId](../Images/img-cp-how_to_WSO2%20_orgId.png)

You should see the settings page for your organization, where you can click “Copy ID” to obtain the orgId:

![How to WSO2 - CopyId](../Images/img-cp-how_to_WSO2%20_copyId.png)

## environmentId

When looking at the metrics in Choreo, you can see the environmentId as env parameter in the URL:


![How to WSO2 - EnvId](../Images/img-cp-how_to_WSO2%20_envId.png)
