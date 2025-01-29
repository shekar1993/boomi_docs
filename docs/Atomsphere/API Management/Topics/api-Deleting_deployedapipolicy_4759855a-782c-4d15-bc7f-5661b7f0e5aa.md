# Deleting a DeployedApiPolicyRule

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-4759855a-782c-4d15-bc7f-5661b7f0e5aa"/>
</head>


You can delete a DeployedApiPolicyRule if it is not being used by any active deployments. If the rule is in use, the deployedApiPolicyRuleDelete mutation returns the POLICY\_RULE\_IN\_USE error.

## About this task

The ids of the deployments using the rule are returned in the extensions parameters field. The input to the mutation is the id of the rule you wish to delete. If successful, the mutation returns the id of the rule that was deleted.  

**Schema definitions for deployedApiPolicyRuleDelete**

Schema definition for the mutation is as follows:

``` 
deployedApiPolicyRuleDelete(id: ID!): ID! @hasPrivilege(privs: [[ "API_MGMT_ACCESS" ]])
```

**Example request to delete DeployedApiPolicyRule**

``` 
mutation {
   deployedApiPolicyRuleDelete(id:"e7301eb5-6301-4500-ad25-6adb1b9cc885")
}
```

Example error response when the rule is in use:

``` 
{
   "errors": [
       {
           "message": "This API policy rule cannot be deleted as it is being used by one or more API deployments.",
           "path": [
               "deployedApiPolicyRuleDelete"
           ],
           "extensions": {
               "errorCode": "POLICY_RULE_IN_USE",
               "parameters": [
                   "b776fb1e-a25d-056f-3414-f4162273d058"
               ],
               "language": "en-US",
               "classification": "DataFetchingException"
           }
       }
   ],
   "data": null
}
```