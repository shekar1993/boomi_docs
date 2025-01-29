---
sidebar_position: 14
---

# Creating a Method

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f50f392d-c185-4738-af28-c16e3f53922f"/>
</head>

The methods are defined under the endpoints so that filters can be created at the method level to get customized responses. The methods defined on this page are displayed while creating the Packages and Plans. The throttle and quota limits can be set for the defined methods while creating a Plan. You can define an XML or JSON schema depending on the schema that your API supports. 

:::note

The method name entered here must match the name that Traffic Manager detects when the service is called. To ensure that the correct name is entered, you can refer to the method reports on the **Reports** tab. 

:::

The following table describes the fields on the **Method Definition** page. 

|**Field** |**Description** |
| ----- | ---- |
|Name|A method name that is displayed while setting method-specific limits and generating method-specific reports. |
|Sample XML Response|A sample XML response that represents a complete data set, that might be returned to an application, as possible. Note that you must enter a valid XML string to be able to create the method definition. |
|Sample JSON Response|A sample JSON response that represents a complete data set, that might be returned to an application, as possible. Note that you must enter a valid JSON string to be able to create the method definition. |

