# FAQ

<head>
  <meta name="guidename" content="Event Streams"/>
  <meta name="context" content="GUID-a7acb3f0-ca09-476a-a619-dfc0ede8686d"/>
</head>


**Is there an on-premises version available for Event Streams?**

No. Event Streams is only available in the Boomi cloud and there aren’t any current plans to provide an on-premises option.

**What cloud regions are available?**

Event Streams is hosted in 4 regions US-EAST, ANZ(Sydney), DEU(Germany), and GBR (United Kingdom). Additional localized cloud regions may be available in the future..

**Does Event Streams store customer data?**

Yes. Customer messages are securely stored on Boomi infrastructure until they are acknowledged \(i.e. processed\) by the downstream consumers. Stale messages that have not been acknowledged for 15 days are automatically deleted.

**How does ensure that customer data is safe?**

Messages sent to Event Streams are encrypted using TLS during transit and also encrypted at rest within the event broker’s storage. We use a JSON web token \(JWT\) which allows for secure and private communication between all internal services.

**Where is message data persisted?**

Messages are logged and stored in Boomi’s AWS infrastructure using EFS, EBS, and RDS services.

**How does Event Streams guarantee message delivery?**

Messages delivered to Event Streams are persistently stored to disks across multiple nodes for high availability until they are acknowledged by consumers. Stale messages that have not been acknowledged for 15 days are automatically deleted.

**What happens if I go over my usage?**

Boomi will not turn off your account if you exceed your usage. However, you will be responsible for the prorated overage amount at the time of renewal. For more information, please contact your Boomi Account representative.

**What is the maximum size of messages?**

Maximum message size produced via the Connector is limited to 1MB.
Maximum message size produced via the REST API is limited to 5MB.

**What is the rate limit for Event Streams REST API**

The rate limit is set as 60,000 requests per IP within a 5 minute window.
The total size of the HTTP request must not exceed 10MB.

**What are other usage limits?**

Event Streams Usage limits: 
- Environments: A maximum of 200 Environments are allowed per account.
- Topics: Each Environment can have up to 1000 topics.
- Backlog: Topics can store a maximum of 5GB of backlog data.
- Tokens: Each Environment can have up to 1000 tokens.

**Does the Event Streams connector require an additional connector license?**

No. The connector is included with Event Streams.

**Does Event Streams work with Master and Sub Accounts?**

Yes. Each separate account can have their own instance of Event Streams that can work independently. Master accounts can also share Event Streams topics with sub accounts.

**Will Event Streams support multi-regions/cloud?**

Event Streams is hosted in 4 regions US-EAST, ANZ(Sydney), DEU(Germany), and GBR (United Kingdom). Additional localized cloud regions may be available in the future.

**Does the Event Streams connector work with Atom Cloud, Molecule and Private Atom Cloud runtimes?**

Yes. The Event Streams connector can be deployed and run in any of these runtimes.

**What ports does Event Streams use?**

**USA EAST Region:** 

Port: 6651

Host: usa-east.eventstreams.boomi.com

IPs:

- 52.45.106.209
- 44.196.85.1
- 34.204.156.38
- 3.220.51.16

**ANZ Region:**

Port: 6651

Host: aus-east.eventstreams.boomi.com

IPs: 

- 54.66.251.136
- 13.55.192.103
- 13.210.183.141

**DEU Region**

Port: 6651

Host: deu.eventstreams.boomi.com

- 18.153.235.129
- 3.66.185.109
- 35.158.194.186

**GBR Region**

Port: 6651

Host: https://gbr.eventstreams.boomi.com

- 3.11.24.22
- 35.176.163.38
- 35.176.171.20
