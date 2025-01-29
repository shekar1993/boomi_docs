# APIs, API Products, Versions and Plans 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-9236843a-cde4-43d3-b695-74d9bce4f81a"/>
</head>  

## APIs

An API is a set of resources that are made available to consumers, both internally and externally. Every API has a contract that defines what resources and operations are available and how authentication needs to be performed for it. This contract is called a specification and it may develop over time. 

For more information on APIs see [APIs](../Topics/cp-APIs.md).

## API Products

Products allow to bundle multiple APIs into one subscribable package. Imagine having a micro service based architecture. Instead of having to subscribe to 20 or more APIs (one for each micro service) application developers would like to subscribe to one API product, that contains those 20 APIs that have a common theme or are needed for a specific use cases. 


For more information on API Products see [API Products](../Topics/cp-API_products.md). 

## Versions

Because APIs develop over time, they are available in different versions, that have different specs. All versions of an API are available in one convenient place and can be deployed to any of the environments at any time. This allows you to roll out a new version to a specific environment and also roll back to the last version in case there is the need to do so. 

The version of an API can be accessed within each API. See [API Versions](../Topics/cp-API_versions.md). 

## Plans

When making an API product available, you’ll want to guarantee a certain quality of service. Additionally, you might want to charge for your API products (monetization). In order to do so, you can create plans that control how many requests to an API a consumer is allowed to do and how fast the consumer can make calls to it. You can create and assign an unlimited number of plans to your API products. 

For more information on Plans see [Configuration Plans](../Topics/cp-Configuration_plans.md). 