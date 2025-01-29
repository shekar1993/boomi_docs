# Metrics

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ab6f40ca-7d44-4444-9cf6-6756c83b801c"/>
</head> 

API Control Plane can show aggregated information about API calls in a selected time interval. These metrics include sums and averages, as well as graphs, that show the number of requests over time.

Metrics can be viewed for APIs, as well as for applications. For the latter, the metrics cover all requests made by the application, across all APIs. (We say an application made a request, when the request contains authentication information specific to that application, e.g. its api-key.)

## How metrics are obtained

There are two ways in which API Control plane can obtain metrics. The preferred way is to retrieve information about each API request from the gateway and store it in a database. We refer to this information as raw metrics, opposed to metrics that have already been aggregated by the gateway. This approach allows for very fast metrics queries and will be used to offer a much more powerful and flexible metrics page in the future. Depending on the platform, additional configuration of the gateway as well as the API Control Plane agent may be necessary to enable raw metrics. It should also be noted, that this approach will only import metrics from the moment that the API Control Plane agent is connected to the gateway. No past metrics will be imported.

:::note 
Raw metrics are also a requirement for certain [governance](../Topics/cp-Governance.md) information. This information, such as slowest APIs, is only available for environments with raw metrics enabled.
:::

The other approach is to obtain aggregated metrics from the gateway directly through its Rest API. This is used as a fallback if raw metrics are not supported by the platform or if the necessary configuration is missing. Depending on the platform, this approach can be limited and some metrics may not be available at all. For example, some platforms only supports API metrics but not application metrics with this approach. Querying metrics this way may also be considerably slower, as each query must be forwarded through the agent to the gateway.

## Metrics on different platforms

- AWS: [How to enable raw metrics in AWS](../Topics/cp-How_to_connect_to_AWS.md).
When using aggregated metrics from the gateway, AWS only supports API metrics, not application metrics.
- Azure: Azure will always use raw metrics. No additional configuration is required.
- Kong: [How to enable raw metrics in Kong](../Topics/cp-How_to_connect_to_Kong.md).
Kong does not supported aggregated metrics from the gateway. If raw metrics are not configured for Kong, API Control Plane will not be able to display any metrics.
- WSO2: [How to enable raw metrics in WSO2](../Topics/cp-How_to_connect_to_WSO2.md).
WSO2 does not provide aggregated metrics by itself. However, it can be configured to push metrics to a cloud platform named Choreo, which the API Control Plane Agent can connect to, to obtain API metrics, but not application metrics. Read here on how to configure this.
- Gravitee: [How to enable raw metrics in Gravitee](../Topics/cp-How_to_connect_to_Gravitee.md).
Even without raw metrics, Gravitee supports aggregated API and application metrics.
- Layer7: Raw metrics for Layer7 are currently not supported.
However, aggregated gateway metrics for APIs and applications are supported.
- Layer7 with Solution Kit: As long as you are using the latest version of AAGM and our solution kit, raw metrics are enabled by default. No additional configuration is required.

## How to setup the database for raw metrics?

If you are using the SaaS version of API Control Plane, you can ignore this part. The metrics database will be configured for your tenant automatically. For on-prem installations, read here on how to [Setup and connect InfluxDB](../Topics/cp-Setup_and_connect_InfluxDB.md) with API Control Plane.