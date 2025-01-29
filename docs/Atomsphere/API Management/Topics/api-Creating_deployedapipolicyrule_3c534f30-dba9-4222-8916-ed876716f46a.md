# Creating a DeployedApiPolicyRule 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-3c534f30-dba9-4222-8916-ed876716f46a"/>
</head>


To create a ``DeployedApiPolicyRule`` use the ``deployedApiPolicyRuleCreate`` GraphQL mutation. If the mutation is executed successfully, it returns a newly created ``DeployedApiPolicyRule``. If it fails, the mutation returns null data and details for the failure in the errors field.

## About this task

The mutation accepts ```DeployedApiPolicyRuleCreateInput``` object with the following fields:

| Field         | Required | Description                                                                                                                                                                                                                                               |
|---------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ```name```          | yes          | User-defined rule name. This name should be unique within an account. This field is not used during execution. It's only used to identify the rule.                                                                                                       |
| ```description```   | no           | A description of the rule. This field is not used during execution.                                                                                                                                                                                       |
| ```methods```       | yes          | List of HTTP methods to which this rule should be applied. The list must contain at least one HTTP method.                                                                                                                                                |
| ```type```          | yes          | The policy id as specified in policy `plugin.properties` file. This field cannot be changed after the policy is created. The types of supported policies are:<ul><li>cache</li><li>mock</li><li>transform-headers</li><li>ip-filtering</li><li>policy-request-validation</li><li>json-validation</li><li>Transform-queryparams</li><li>url-rewriting</li></ul> |
| ```configuration``` | no           | JSON rule configuration. We only validate that the configuration is a valid json object, we do not validate that the configuration is valid for a given policy type.  Limited to 40,000 characters and if it exceeds that, an error is returned.                                                                                   |



**Schema definitions for deployApiPolicyRuleCreate mutation**

Definition for the mutation is as follows:

``` 
deployedApiPolicyRuleCreate(deployedApiPolicyRule: DeployedApiPolicyRuleCreateInput!): DeployedApiPolicyRule! @hasPrivilege(privs: [[ "API_MGMT_ACCESS" ]])
```

Types used in the mutation input and return objects:

```
input DeployedApiPolicyRuleCreateInput {
   name: String!
   description: String
   methods: [HttpMethod!]!
   type: ID!
   configuration: String
}

type DeployedApiPolicyRule {
   # Rule identifier
   id: ID!
   # User-defined rule name. Not used during execution.
   name: String!
   # Description of this rule. Not used during execution.
   description: String
   # All the HTTP methods for which this rule applies
   methods: [HttpMethod!]!
   # Policy id as specified in policy plugin.properties file.
   type: ID!
   # The JSON-encoded configuration for the rule.
   configuration: String
   # List of deployed APIs that are using this rule.
   usedBy: [DeployedApi!] @resolve
}

enum HttpMethod {
   GET
   HEAD
   POST
   PUT
   DELETE
   CONNECT
   OPTIONS
   TRACE
   PATCH
}
```

**Example requests to create DeployedApiPolicyRule**

This is an example request to create a policy-request-validation policy. With the supplied configuration, the policy will return 400 error if x-custom header is not present in the GET, PUT or POST request:

``` json
mutation{
   deployedApiPolicyRuleCreate(deployedApiPolicyRule: {
   name:"x-custom header validator",
   description: "Validates that x-custom header is present",
   methods: [GET, PUT, POST],
   type: "policy-request-validation",
   configuration: "{"rules": [{"constraint": {"type": "NOT_NULL"},"input": "{#request.headers['x-custom']}"}], "status": "400"}"
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

This is an example request to create a JSON validation policy. With the supplied configuration, the policy validates the json input that accepts two numbers called “val1” and “val2” and validates that they are not larger than 10. Note that the escape character in the configuration’s “schema” field has to be escaped, for instance : "maximum"

``` json
mutation{
   deployedApiPolicyRuleCreate(deployedApiPolicyRule: {
   name:"json validator for calculator",
   description: "Validates calculator input",
   methods: [POST],
   type: "json-validation",
   configuration: "{"scope":"REQUEST_CONTENT", "errorMessage": "Number too large. Number cannot be higher than 10.", "schema":"{"title": "Adder", "type": "object", "properties": {"val1": {"type": "number", "maximum": 10}, "val2": {"type": "number", "maximum": 10}}} "}"
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