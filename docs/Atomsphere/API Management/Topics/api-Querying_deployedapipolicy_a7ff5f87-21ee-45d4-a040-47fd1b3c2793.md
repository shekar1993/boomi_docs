# Querying a DeployedApiPolicyRule 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-a7ff5f87-21ee-45d4-a040-47fd1b3c2793"/>
</head>


To retrieve all DeployedApiPolicyRule objects in an account, use the deployedApiPolicyRules query.

## About this task

You can also retrieve details for a specific DeployedApiPolicyRule if you know the rule id with the deployedApiPolicyRule query.

**Schema definition for the queries**

``` 
deployedApiPolicyRules: [DeployedApiPolicyRule!] @hasPrivilege(privs: [[ "API_MGMT_ACCESS" ]])
deployedApiPolicyRule(id: ID!): DeployedApiPolicyRule @hasPrivilege(privs: [[ "API_MGMT_ACCESS" ]])
```

**Example queries**

Example query that retrieves all DeployedApiPolicyRules in an account:

``` 
query{
   deployedApiPolicyRules{
       id,
       name,
       description,
       methods,
       type,
       configuration
   }
}
```

Example query that retrieves a rule with the specified id:

``` 
query{
   deployedApiPolicyRule(id: "e7301eb5-6301-4500-ad25-6adb1b9cc885"){
       id,
       name,
       description,
       methods,
       type,
       configuration
       }
   }
```