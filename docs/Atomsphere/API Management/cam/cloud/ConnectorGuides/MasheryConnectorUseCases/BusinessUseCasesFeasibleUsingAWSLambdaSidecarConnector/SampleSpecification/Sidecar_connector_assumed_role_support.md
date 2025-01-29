---
sidebar_position: 3
---

# Sidecar Connector Assumed Role Support

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-05bcd3b1-3076-43e5-b044-d370fa31adff"/>
</head>


AWS IAM supports assumeRole feature with external ID within the IAM policy trust relationship. AssumeRole feature in AWS is one of the public cloud security best practices for multi-tenant architecture. 

Sidecar connector provides support to use this assume role feature. Using assume role, temporary assume role credentials are generated and these credentials are used to invoke AWS Lambda function. 

To generate assume role following information is needed: 

- roleARN: ARN of the role which Sidecar Connector assumes to access and invoke AWS Lambda function 

- External Id: This is an optional data that can be used with the IAM trust policy to designate who can assume the role. This prevents the confused deputy scenario where the incorrect role may result in accessing the wrong account and action intended for another tenant (customer A resources vs. customer B resources). 

## Working across AWS account boundaries

In API Management for cloud customers the AWS Lambda Sidecar Connector is designed to invoke Lambda function and assume role of the customer provided role that has access. Using STS assume role, Sidecar Connector acquires invoke permission to AWS Lambda function deployed by customer. 

API Management Sidecar Connector is the AWS client which is making a call to AWS Lambda function. 

Customer is the resource owner which has created and deployed function (a resource) in AWS Lambda. 

There are two AWS accounts which are in play in this Sidecar Connector integration feature. 

- API Management Sidecar Connector that is AWS client making a call with AWS account ID (e.g. 809167139867) and assuming a role that customer configures in the Connector. 

- Customer AWS account ID (e.g. 444455556666) that was used to create and deploy function (a resource) in AWS Lambda. 

**API Management Infrastructure Support** 

API Management provides an AWS account ID (e.g. 809167139867 ) that makes a call to invoke Lambda function from API Management Sidecar Connector after creating STS client that assumes role configured by customer in the Connector. 

Sample trust policy set by API Management for AWS Account ID 809167139867 (Sidecar Connector leverages AWS EC2 instance profile that assumes role tibco\_sidecar\_connector to invoke Lambda function across customers AWS account). 

```
{
"Version": "2012-10-17",
"Statement": [{
"Effect": "Allow",
"Action": "sts:AssumeRole",
"Resource": "arn:aws:iam::*:role/tibco_sidecar_connector*"
}]
}
```

:::note

Boomi Cloud Security team creates and enables this necessary infra support for AWS Lambda Sidecar Connector. 

:::

**API Management Customer A** 

- API Management Customer A allows API Management Sidecar Connector to access/invoke AWS Lambda function resource which is owned and deployed by customer A. 

- Customer A should create AWS account with full permission to create, access and invoke Lambda function.

- Customer A should create a Role with limited permission to access and invoke Lambda function resource. This role name should be in the format - tibco\_sidecar\_connector\*. 

- Customer A should configure IAM trust policy for a AWS principal/external identity that is able to create AWS STS client using configured roleARN, assume role to invoke AWS Lambda function resource. 

Sample trust policy set by Customer A (For Boomi AWS account ID 809167139867 and external ID 123456789pqrst) 

:::note

This is stricter trust policy that only allows calls from AWS Identity having account ID 809167139867 AWS account ID mentioned in the example is for reference only and does not reflect actual AWS account ID that is used in production.

:::

```
{
"Version": "2012-10-17",
"Statement": [{
"Effect": "Allow",
"Principal": {
"AWS": "arn:aws:iam::809167139867:root"
},
"Action": "sts:AssumeRole",
"Condition": {
"StringEquals": {
"sts:ExternalId": "123456789pqrst"
}
}
}]
}
```

Customer A Cloud Ops / Cloud SecOps creates and enables this necessary infra support to leverage AWS Lambda Sidecar Connector. 

|**Configuration/Entity** |**Example Value** |**Owner** |**Notes** |
| ---- | ---- | --- | ---- |
|IAM Role Name |tibco\_sidecar\_connector |Boomi Customer A |Customer A configures this agreed (between API Management and Customer) role name that has necessary permission to access and invoke AWS Lambda function. Any request coming from AWS identity with this Role name AND having account ID 809167139867 can invoke Lambda function. |
|IAM Account ID |809167139867 |API Management|API Management provides an AWS account ID that makes a call to invoke Lambda function from API Management Sidecar Connector after creating STS client to assume role. |
|ExternalID |123456789pqrst |Boomi Customer A |<p>Customer A creates and configures unique identifier that is used to establish trust IAM policy besides role which API Management Sidecar Connector uses while creating STS client to assume role. </p><p>e.g. Customer A should configure externalID in the Connector pre-input configuration. </p>|

**API Management Customer B** 

- API Management Customer B allows API Management Sidecar Connector to access/invoke AWS Lambda function which is owned and deployed by customer B. 

- Customer B should create AWS account with full permission to create, access and invoke Lambda function. 

- Customer B should create Role with limited permission to access and invoke Lambda function. This role name should be in the format - tibco\_sidecar\_connector\*. 

- Customer B should configure IAM trust policy for a AWS principal/external identity that is able to create AWS STS client using configured roleARN, assume role to invoke AWS Lambda function resource. 

Sample policy ( For Boomi AWS account ID 809167139867 and external ID 111122223333pqrst) 

:::note

This is stricter trust policy that only allows calls from AWS Identity having account ID 809167139867 AWS account ID mentioned in the example is for reference only and does not reflect actual AWS account ID that is used in production. 

:::

```
{
"Version": "2012-10-17",
"Statement": [{
"Effect": "Allow",
"Principal": {
"AWS": "arn:aws:iam::809167139867:root"
},
"Action": "sts:AssumeRole",
"Condition": {
"StringEquals": {
"sts:ExternalId": "123456789pqrst"
}
}
}]
}
```

Customer A Cloud Ops / Cloud SecOps creates and enables this necessary infra support to leverage AWS Lambda Sidecar Connector. 

|**Configuration/Entity** |**Example Value** |**Owner** |**Notes** |
| --- | --- | --- | --- |
|IAM Role Name |tibco\_sidecar\_connector |Boomi Customer B |Customer B configures this agreed (between API Management and Customer) role name that has necessary permission to access and invoke AWS Lambda function. Any request coming from AWS identity with this Role name AND having account ID 809167139867 can invoke Lambda function. |
|IAM Account ID |809167139867 |API Management|API Management provides an AWS account ID that makes a call to invoke Lambda function from API Management Sidecar Connector after creating STS client to assume role. |
|ExternalID |123456789pqrst |Boomi Customer B |<p>Customer B creates and configures unique identifier that is used to establish trust IAM policy besides role which API Management Sidecar Connector uses while creating STS client to assume role. </p><p>e.g. Customer A should configure externalID in the Connector pre-input configuration. </p>|

