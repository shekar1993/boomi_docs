# Modifying a DeployedApiPolicyRule 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-07b02d8e-2949-4f73-9fb2-e1dd3e82b56c"/>
</head>


If you want to modify an existing DeployedApiPolicyRule, use the deployedApiPolicyRuleUpdate mutation.



## About this task

The mutation accepts DeployedApiPolicyRuleCreateInput object with the fields listed in the table below. The mutation supports partial updates.

|Field|Required|Description|
|-----|------------------|-----------|
|```id```|yes|The rule identifier as returned by the deployedApiPolicyRuleCreate mutation. It can also be obtained with the deployedApiPolicyRule or deployedApiPolicyRules queries.|
|```name```|no|User defined rule name. This field is not used during execution. It's only used to identify the rule.|
|```description```|no|A description of the rule. This field is not used during execution.|
|```methods```|no|List of HTTP methods to which this rule should be applied. If this field is present in the request, it must contain a list of HTTP methods and the list must not be empty.|

**Schema definitions for deployedApiPolicyRuleUpdate mutation**

Definition for the mutation is as follows:

``` 
deployedApiPolicyRuleUpdate(deployedApiPolicyRule: DeployedApiPolicyRuleInput!):  DeployedApiPolicyRule! @hasPrivilege(privs: [[ "API_MGMT_ACCESS" ]])
```

Input type definition

``` 
input DeployedApiPolicyRuleInput {
   id: ID!
   name: String
   description: String
   methods: [HttpMethod!]
   configuration: String
}
```

The result type is the same as for [deployedApiPolicyRuleCreate](/docs/Atomsphere/API%20Management/Topics/api-Creating_deployedapipolicyrule_3c534f30-dba9-4222-8916-ed876716f46a.md) mutation.

**Example requests to update DeployedApiPolicyRule**

Example of how to update the configuration of a caching policy. Only the configuration is being updated in this request, hence configuration is the only field present in the input:

``` 
mutation{
   deployedApiPolicyRuleUpdate(deployedApiPolicyRule: {
   id: "e7301eb5-6301-4500-ad25-6adb1b9cc885",
   configuration: "{\"cacheName\": \"myCache\", \"key\": \"{#request.params['zipcode']}\", \"timeToLiveSeconds\": 3600, \"useResponseCacheHeaders\": false,\"scope\": \"API\"}"
   }){
       id,
       name,
       description,
       methods,
       type,
       configuration
   }
}
```