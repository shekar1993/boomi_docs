# Expression Language

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-1141b130-0919-4cfc-a5af-b9d441080ff6"/>
</head>

Use Expression Language (EL) to query and manipulate object graphs and dynamically configure various aspects and policies of an API. EL allows you to reference values from the current API transaction to use expressions to create dynamic filters, routing rules, and policies that respond to specific conditions or parameters.

EL is an extended version of the [Spring Expression Language (SpEL)](https://docs.spring.io/spring-framework/reference/core/expressions.html) that augments standard SpEL capabilities by providing additional object properties inside the expression language context. As an extension of SpEL, all capabilities detailed in the SpEL documentation are available in EL.

  :::note
  Custom properties and attributes have special meanings:
  - **Custom Properties**: Defined at the API level and read-only during the Gateway's execution of an API transaction.
  - **Attributes**: Scoped to the current API transaction and can be manipulated during the execution phase through the `assign-attributes` policy. Attributes are used to attach additional information to a request via a variable that is dropped after the API transaction is completed.

The following sections define the scope and usage of EL:
- [Basic usage](docs/Atomsphere/API%20Management/Topics/api-expression_language_basic_usage.md)
- [Request](docs/Atomsphere/API%20Management/Topics/api-expression_language_request.md)
- [Response](docs/Atomsphere/API%20Management/Topics/api-expression_language_response.md)
- [Policies](docs/Atomsphere/API%20Management/Topics/api-expression_language_policies.md)
- [Conditions](docs/Atomsphere/API%20Management/Topics/api-expression_language_conditions.md)
