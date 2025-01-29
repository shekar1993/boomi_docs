# Assigning a DeployedAPIPolicyRule to a Deployed API 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-e339db7a-4534-441a-9884-6c3b69102273"/>
</head>


The `DeployedApiPolicyRules` are assigned to the APIs as custom policies. To assign a `DeployedApiPolicyRule` to an API, use the ``deployedApiUpdate`` GraphQL mutation.

The mutation is modified to accept a new optional field - `customPolicies`. This field contains a list of `DeployedApiPolicyInput` objects specifying DeployedApiPolicyRules that should be applied to an API execution. Setting this field to an empty list `(“[]”)` removes any custom policies from the deployment.

`DeployedApiPolicyInput` has the following fields:

|Field|Mandatory/Optional|Description|
|-----|------------------|-----------|
|``path``|Mandatory|The path for which this set of rules apply. Must start with a forward slash (“/”). The longest matching path is chosen and only it’s rules are applied. Note: the path is relative to the Base API path. For example, if an API with a Base API path of ``“/ws/rest/myservices”`` has two endpoints, serviceA and serviceB, and you want to set the policy for serviceA only, then the path should be set to ``“/serviceA”``.|
|``rules``|Mandatory|A list of ids of the ``DeployedApiPolicyRule`` objects that should be applied to the API. The list cannot be empty. The rules are applied in the order defined by this list.|
|``applied when``|Mandatory|Specifies whether this set of rules should be applied by the standard policies that the gateway already applies to the APIs. This field can have one of those two values: *`BEFORE_STANDARD_POLICIES`* or *`AFTER_STANDARD_POLICIES`*.|

**Schema definitions**

The ``deployedApiUpdate`` mutation is not changed:

``` 
deployedApiUpdate(deployedApi: DeployedApiInput!): DeployedApi! @hasPrivilege(privs: [[ "API_MGMT_ACCESS" ]])
```

The ``deployedApiInput`` has been extended to include the customPolicies field:

``` 
input DeployedApiInput {
   id: ID!
   executionSettings: DeployedApiExecutionSettingsInput
   authSourceId: String
   planIds: [ID!]
   keylessPlanId: ID
   requiredRoles: [ID!]
   customPolicies: [DeployedApiPolicyInput!] 
}
```

The ``DeployedApiPolicyInput`` field is defined as follows:

``` 
input DeployedApiPolicyInput {
   path: String!
   rules: [ID!]
   appliedWhen : DeployedApiPolicyTiming!
}

enum DeployedApiPolicyTiming {
   BEFORE_STANDARD_POLICIES
   AFTER_STANDARD_POLICIES
}
```

The DeployedApi type returned by the ``deployedApiUpdate`` mutation is modified to include the ``customPolicies`` field. Refer to the [Creating a DeployedApiPolicyRule](/docs/Atomsphere/API%20Management/Topics/api-Creating_deployedapipolicyrule_3c534f30-dba9-4222-8916-ed876716f46a.md) section for the definition of ``DeployedApiPolicyRule``.

``` 
type DeployedApi @key(fields: "id") {
   id: ID!
   component: Component! @resolve
   metadata: ApiComponentMetadata! @resolve
   authSource: AuthSource
   environment: Environment!
   endpoints: [DeployedApiEndpoint!] @resolve
   keylessPlan: DeployedApiPlan @resolve
   plans: [DeployedApiPlan!] @resolve
   executionSettings: DeployedApiExecutionSettings @resolve
   requiredRoles: [AuthSourceRole!]
   customPolicies: [DeployedApiPolicy!] @resolve 
}

type DeployedApiPolicy {
   path: String!
   when: DeployedApiPolicyTiming!
   rules: [DeployedApiPolicyRule!]
}
```

**Examples of deployedApiUpdate mutation**

Below are examples of mutations used to assign ``DeployedApiPolicyRules`` to a ``deployedApi``. 

The following request assigns ``DeployedApiPolicyRule`` with id ``d491724b-1bed-49b0-aeb4-0fdd6caff7f7`` to a deployed API with id ``e7301eb5-6301-4500-ad25-6adb1b9cc885``. The custom rule is executed after standard policies are applied by the gateway. The mutation returns the id of deployed api with the list of custom policies assigned to the API.

``` 
mutation{
   deployedApiUpdate(deployedApi: {
   id: "e7301eb5-6301-4500-ad25-6adb1b9cc885",
   customPolicies: [
{path: "/",
            	rules: ["d491724b-1bed-49b0-aeb4-0fdd6caff7f7"],
            	appliedWhen: AFTER_STANDARD_POLICIES
            	}
]
   }){
	id,
       customPolicies{
               path,
		  when,
		  rules {
			id,
			name
		  }
           }   
}
}
```

To remove all custom policies assigned to an API deployment, send a request with an empty customPolicies list, as shown in the following example:

``` 
mutation{
   deployedApiUpdate(deployedApi: {
   id: "e7301eb5-6301-4500-ad25-6adb1b9cc885",
   customPolicies: []
   }){
	id,
       customPolicies{
               path
           }   
}
}
```

**Error codes and messages returned by mutations**

Error codes returned from creating, updating, or deleting the ``DeployedApiPolicyRule``.

``` 
enum DeployedApiPolicyRuleErrorCode {
   METHOD_MISSING @en(detail: "Specify at least one HTTP method for this policy.")
   METHOD_INVALID @en(detail: "Input contains invalid HTTP method.")
   NAME_TOO_LONG @en(detail: "Policy name cannot be longer than {0} characters.")
   NAME_NOT_UNIQUE @en(detail: "Policy with this name already exists.")
   NAME_BLANK @en(detail: "Policy name cannot be blank.")
   DESCRIPTION_TOO_LONG @en(detail: "Description cannot be longer than {0} characters.")
   CONFIGURATION_INVALID @en(detail: "Policy configuration needs to be a valid json object.")
   CONFIGURATION_TOO_LONG @en(detail: "Configuration exceeded {0} characters.")
   TYPE_INVALID @en(detail: "Policy type is invalid or not supported.")
   POLICY_RULE_NOT_FOUND @en(detail: "The API policy rule was not found. Check the rule ID and try again.")
   POLICY_RULE_ID_EMPTY @en(detail: "The API policy rule ID cannot be empty. Specify a policy rule ID.")
   POLICY_RULE_IN_USE @en(detail: "This API policy rule cannot be deleted as it is being used by one or more API deployments.")
}
```

Error codes returned for a failed ``deployedApiUpdate`` due to invalid customPolicies input.

``` 
enum DeployedApiPolicyErrorCode {
   PATH_TOO_LONG @en(detail: "Path cannot exceed {0} characters.")
   PATH_INVALID @en(detail: "Path contains characters not allowed in a valid url.")
   PATH_DUPLICATE @en(detail: "Multiple policies are defined for path {0} with {1} timing. Multiple policies for the same path with the same timing are not allowed.")
   DEPLOYMENT_NOT_ON_GATEWAY @en(detail: "The API is not deployed on an API Gateway. You can specify API policy only for APIs deployed on the API Gateway. To set the API policy, first deploy the API to an environment that contains an API Gateway or migrate an API Gateway to the environment where the API is deployed.")
   RULES_EMPTY @en(detail: "At least one rule is required.")
   RULE_NOT_FOUND @en(detail: "Rule with id {0} was not found. Check the rule ID and try again.")
}
```
