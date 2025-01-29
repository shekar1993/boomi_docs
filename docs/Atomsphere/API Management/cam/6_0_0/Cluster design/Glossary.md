---
sidebar_position: 1
---

# Glossary

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-52e8dfd7-981e-4e0a-bba0-d097b4d8aef0"/>
</head>

|**Name**|**Description**|
|---|---|
|GCP|Google Cloud Platform|
|Traffic call|One HTTP(s) request received by the traffic manager (TM) component; if authorization succeeds, the TM forwards the request to your back-end server. Your back-end-server then generates an HTTP response which the TM conveys to the client who issued the initial HTTP request.|
|Protected traffic|Denotes calls for which the authorization involves validating an OAuth token.|
|Unprotected traffic|Denotes calls for which the authorization involves validating an API key.|
|Request and Response size|denotes the size of the HTTP request and response body, exclusive of HTTP headers.|
|Traffic volume|HTTP traffic expressed in queries per second (QPS) or transactions per second (TPS); 1.5k qps denotes 1500 queries per second. QPS|TPS is used to designate the traffic volume level.|
|Availability region (or simply "Region)|Denotes a particular geographic area. Each Region is designed to be isolated from the other Regions. For example, for GCP the us-west1 region denotes a region on the west coast of the United States that has three zones: us-west1-a , us-west1-b , and us-west1-c .|
|Availability zone (or simply "Zone")|<p>Denotes an independent, isolated group of data centers within a region. Availability zones are far enough apart to reduce the likelihood that more than one will be affected by local outages or weather. Availability zones have independent power, cooling, and networking infrastructure. They're designed so that if one zone experiences an outage, then regional services, capacity, and high availability are supported by the remaining zones. The network latency within a Zone is typically lower than the inter-Zone latency within a given Region, which itself is typically lower than the Region to Region latency. </p><p>Sources: </p><p> - GCP - https://cloud.google.com/compute/docs/regions-zones </p><p>- AWS - https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html </p><p>- Azure - https://learn.microsoft.com/en-us/azure/reliability/availability-zones-overview?tabs=azure-cli</p>|

