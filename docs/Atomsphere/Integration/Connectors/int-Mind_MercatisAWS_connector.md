import PartnerSupport from './_PartnerSupport.md'

# Mind-Mercatis AWS - Partner connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8224b5e7-e359-47fa-bf2b-27b404ffcb9a"/>
</head>

<PartnerSupport />

Use the Mind-Mercatis AWS – Partner Connector to call most of the Amazon Web Services (AWS) APIs in order to automate machine learning tasks (image Rekognition, Translate, Comprehend’s sentiment analysis etc..), interaction with NoSQL DynamoDB, provisioning of VMs (e.g. Amazon EC2 service which can turn on/off VMs), query the status of services (e.g. Amazon Athena service to create tables).

The Mind-Mercatis AWS – Partner Connector has been designed to simplify calling the Amazon Web Services APIs by integrating seamlessly into Boomi processes.

The connector supports interacting both with region-based services (e.g. EC2) and non-region tied services (e.g. IAM) and allows calling almost all the documented AWS APIs.

There are many benefits to using a dedicated connector rather than relying on custom scripting:
* Credentials are securely managed through the iPaaS infrastructure of Boomi AtomSphere
* No manual coding
* Request signature and marshalling is automatically managed by the connector
* Developer does not need to remember API versions and conventions
* Success status/failure is automatically managed by the connector or within the process

The list of AWS Services supported by the connector is provided [here](https://mindmercatis.atlassian.net/l/c/bWystLyk).

Typical use-cases for this connector may be:

* Use **AWS Comprehend** to add machine-learning powered sentiment analysis seamlessly to your CRM processes
* Use **AWS Rekognition AI** capabilities to augment your Boomi Flow application to identify objects within pictures
* Read and store unstructured data in **DynamoDB** NoSQL
* Integrate existing AWS **Lambda** business login within existing Boomi processes (e.g. Map lookups or enrichments)
* Trigger existing AWS **Lambda** scripts as a part of larger business processes managed via Boomi Flow
* Provision **EC2/RDS** resources on-demand based on user request coming from Boomi Flow apps

## Connector configuration 

To configure the Mind-Mercatis AWS – Partner Connector, set up two components:
*  Mind-Mercatis AWS – Partner Connector connection
*  Mind-Mercatis AWS – Partner Connector operation

One Mind-Mercatis AWS – Partner Connector connection is required for each Amazon account. The connection can be used with one or more Mind-Mercatis AWS – Partner Connector operations: one for each type of service to be called.

Components can be reused, which contain connection settings (such as AWS Access Key, AWS Secret Key and AWS Region). After building the connection and operation, set up the connector within a process. When the Mind-Mercatis AWS – Partner Connector is defined within the process, Boomi Integration can map to and from virtually any system using the connector to send a request to Amazon APIs.

## Prerequisites 
To implement a connection to your Mind-Mercatis AWS – Partner Connector account from Boomi Integration, the following information is required:
* AWS Access Key and AWS Secret Key
* Appropriate access rights to the Amazon APIs service

## Limitations 
The following known limitations affect this connector:
* The current version of the connector can call API with the GET, POST and PUT verb. Support for the DELETE verb is upcoming.
* The connector speed is rate-limited: see the topic [Mind-Mercatis AWS - Partner Connection](../Connectors/int-Mind_MercatisAWS_connection.md) for more details.
* The connector will work only on Atoms / Molecules (on-premise) and NOT on Boomi Public Cloud. This due to a limitation in the AWS libraries. Future connector’s releases may overcome this limitation.

## Tracked properties

This connector has the following tracked properties that you can set or reference in various step parameters:

* Amazon AWS Region - Inbound property used when executing the action to override the default region specified within the Connection Configuration. Set this to "" (empty string) to force the use of the global endpoint (e.g.` https://ec2.amazonaws.com`) instead of one of the regional ones (e.g. `https://ec2.eu-west-1.amazonaws.com`).

* Path - Inbound property used to override the static path specified inside the Operation Configuration. Use this property with Actions requiring to specify a path to point to a specific resource (e.g. the Lambda action "GetFunction" requires to specify a complete path in the form `/functions/{FunctionName}`. See https://docs.aws.amazon.com/it_it/lambda/latest/dg/API_GetFunction.html).