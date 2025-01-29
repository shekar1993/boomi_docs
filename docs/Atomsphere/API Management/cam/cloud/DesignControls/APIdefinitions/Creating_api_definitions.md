---
sidebar_position: 2
---

# Creating API Definitions

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-fae5c14a-325a-4be4-805d-6031f359baab"/>
</head>

## Design > APIs 

Creating an API definition is the first step to configure the API in the Boomi Cloud™ API Management in the Control Center. Other API related settings can be configured on the [API Definition Settings](API_definition_settings.md), [API Definition Security Settings](API_definition_security_settings.md), [API Definition Error Sets](APIdefinitionerrorsets/API_definition_error_sets.md), and [API Definition Access Control](API_definition_interactive_documentation_access_control.md) pages. 

## To create an API Definition

1. On the **API Definitions** page, click **New API Definition** and select the **Create manually** option. 

   The **New API Definition** pop-up window is displayed.

2. Specify information for the following fields: 

   |**Field** |**Description** |
   | ------ | ------- |
   |API Definition Name|API name that is displayed while creating Packages and Plans, and while generating reports. |
   |Description|API description that states the purpose of the API. |
   |API Version|API version helps to identify a particular instance of the API. This field is defined for administration purpose, and it assists in the management of multiple versions of your API. API version is a metadata that can further describe the particular API definition. |

3. Click **Save and close** to finish creating the new API definition, which should now show in the list of API definitions of the **API Definitions** page. 

   Click **Save and continue** to go to the **API Definition and Endpoint List** page, where you can define the endpoints for the API definition. For more information, see [API Definition & Endpoint List](Endpoints/Endpoints.md). 
