# AWS Service Automation connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-80581d12-14b1-42e2-bb6f-800dd3e480ce"/>
</head>


The AWS Service Automation connector has been designed to simplify calling the Amazon Web Services \(AWS\) APIs \(currently GET, POST, PUT verb, upcoming the support for DELETE verb\) by integrating seamlessly into Boomi processes.

Use the AWS Service Automation connector to call most of the Amazon APIs in order to automate machine learning tasks \(image Rekognition, Translate, Comprehend’s sentiment analysis etc.\), interaction with NoSQL DynamoDB, provisioning of VMs \(e.g. Amazon EC2 service which can turn on/off VMs\), query the status of services \(e.g. Amazon Athena service in order to create tables\) or of your AWS Managed Blockchain.

The connector supports interacting both with region-based services \(e.g. EC2\) and non-region tied services \(e.g. IAM\) and allows calling almost all the documented AWS APIs.

Benefits

There are many benefits of using a dedicated connector rather than relying on custom scripting:

-   Credentials are securely managed thru the iPaaS infrastructure of Boomi Integration
-   No manual coding
-   Request signature and marshalling is automatically managed by the connector
-   Developer does not need to remember API versions and conventions etc...
-   Success status/failure is automatically managed by the connector or within the process

Use Cases

Typical use-cases for this connector may be:

-   Use AWS Comprehend to add machine-learning powered sentiment analysis to seamlessly you CRM processes
-   Use AWS Rekognition AI capabilities to augment your Boomi Flow application with the capability to identify objects within pictures
-   Read and store unstructured data in DynamoDB NoSQL
-   Integrate existing AWS Lambda business login within existing Boomi processes \(e.g. Map lookups or enrichments\)
-   Trigger existing AWS Lambda scripts as a part of larger business processed managed via Boomi Flow
-   Provision EC2/RDS resources on-demand based on user request coming from Boomi Flow apps

Known Limitations

The following known limitations affect this connector:

-   the current version of the connector can call API with the GET, POST and PUT verb. Support for the DELETE verb is upcoming.
-   this connector speed is rate-limited: please contact boomi-connectors-support@mindmercatis.com to unlock this feature.

## Connector configuration

To configure the connector to communicate with AWS Service Automation, set up the following components:

-   AWS Service Automation connection
-   AWS Service Automation operation

We can create one AWS Service Automation connection for each Amazon account with one or more AWS Service Automation operations, one for each type of service that we would call.

We can reuse components, which contain connection settings \(such as AWS Access Key, AWS Secret Key and AWS Region\). After building your connection and operation, set up your connector within a process. When the AWS Service Automation connector is defined properly within your process, Boomi Integration can map to and from virtually any system using the connector to send a request to Amazon APIs

## Supported editions

The list of AWS Services supported by the connector is provided below:

|AWS Service Name

|API Version|
|------------------|-----------|
|Athena|2017-05-18|
|Auto Scaling|2011-01-01|
|Auto Scaling Plans|2018-01-06|
|Batch|2016-08-10|
|CloudFormation|2010-05-15|
|CloudFront|2019-03-26|
|CloudWatch|2010-08-01|
|Comprehend|2017-11-27|
|DynamoDB|2012-08-10|
|EC2|2016-11-15|
|Elastic Beanstalk|2010-12-01|
|Elastic Container Registry|2015-09-21|
|Elastic Container Service|2014-11-13|
|Elastic File System|2015-02-01|
|ElastiCache|2015-02-02|
|Elasticsearch|2015-01-01|
|Identity and Access Management|2010-05-08|
|Key Management Service|2014-11-01|
|Lambda|2015-03-31|
|Managed Blockchain|2018-09-24|
|Polly|2016-06-10|
|Redshift|2012-12-01|
|Rekognition|2016-06-27|
|RDS|2018-08-01|
|SageMaker|2017-07-24|
|SES|2010-12-01|
|Step Functions|2016-11-23|
|Translate|2017-07-01|

## Prerequisites

The AWS Service Automation connector requires the following:

-   Your AWS access key and AWS secret key.
-   The appropriate access rights to the Amazon APIs service.

## Tracked properties

This connector has the following tracked properties that you can set or reference in various step parameters:



**AWS Region** - :   Inbound property used when executing the action to override the default region specified within the Connection Configuration. Set this to "" \(empty string\) to force the use of the global endpoint \(e.g. [https://ec2.amazonaws.com](https://ec2.amazonaws.com)\) instead of one of the regional ones \(e.g. [https://ec2.eu-west-1.amazonaws.com](https://ec2.eu-west-1.amazonaws.com) \).

**Path** - :   Inbound property used to override the static path specified inside the Operation Configuration. Use this property with Actions which require to specify a path to point to a specific resource \(e.g. the Lambda action "GetFunction" requires to specify a complete path in the form `/functions/{FunctionName}`. See [https://docs.aws.amazon.com/it\_it/lambda/latest/dg/API\_GetFunction.html](https://docs.aws.amazon.com/it_it/lambda/latest/dg/API_GetFunction.html)\).