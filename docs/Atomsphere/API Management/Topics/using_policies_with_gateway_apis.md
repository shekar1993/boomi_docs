# Using Policies with Gateway APIs

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-5200387a-dd08-46f8-a234-dd94661dd874"/>
</head>

To use a policy with your API via APIs, you must:

1.  [Create a DeployedApiPolicyRule](api-Creating_deployedapipolicyrule_3c534f30-dba9-4222-8916-ed876716f46a.md#title_cead461d-f099-433d-8cfd-43c0f5d2c635) that specifies the rule to use, configuration for the rule, and the HTTP methods of the requests that the rule should be applied to. After you have created a `DeployedAPIPolicyRule` you can modify, delete, or query it.

    :::note 
    
    The `DeployedApiPolicyRule` is not specific to an API. After it is created, it can be assigned to one or more APIs. GraphQL APIs are provided for creating `DeployedApiPolicyRule`, querying existing `DeployedApiPolicyRules`, and assigning a `DeployedApiPolicyRule` to a deployment. Each GraphQL request must include a X-Account header, the value of the header is the user’s account identifier.

2.  [Assign the DeployedApiPolicyRule to your API deployed on an API Gateway](api-Assigning_deployedapipolicy_e339db7a-4534-441a-9884-6c3b69102273.md#title_25cf2a90-f245-4bd2-b1e1-5831b08eae0a).
