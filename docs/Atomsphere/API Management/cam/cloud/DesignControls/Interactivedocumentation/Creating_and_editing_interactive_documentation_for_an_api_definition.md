---
sidebar_position: 4
---

# Creating and Editing Interactive Documentation for API Definitions

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-e5a2b8b3-e855-4f87-bfb5-fca5e479a61c"/>
</head>

Interactive Documentation supports JSON schema defined for an API. It also allows you to import a WSDL file for SOAP-based APIs. The built-in JSON validating tool validates the schema. If the schema is valid, the validation can be completed by saving the JSON definition. An error message is displayed if you enter invalid JSON schema. 

## Creating a JSON Definition

Once APIs are created from the **New Interactive Documentation** window, after selecting the Swagger option, you will need to create API specifications with description format Swagger 2.0 and Open API. 

:::note

For more information on creating Interactive Documentation definitions for REST and SOAP APIs, refer to the [API Management I/O Docs Configuration Guide](http://support.mashery.com/files/Mashery_IO_Docs_Configuration_Guide_03182014.pdf). 

:::

**To create a JSON definition:**

1. On the **Interactive Documentation** page, click **New Interactive Documentation**. 

   This launches a **New Interactive Documentation** window.

2. Select an API Definition from the drop-down list. 

3. Specify the Interactive Documentation as an **IO Doc or Swagger** document. 

   :::note
   
   This setting can't be changed later. 

   :::

4. Click Choose File to upload a JSON definition file; or use the option link to a WSDL file.

   :::note
   
   Ensure that the WSDL is valid. If the WSDL is invalid or non-compliant with the requirements, an error message is displayed. 

   :::

   For more information on using WSDL, see the following section - *WSDL Import for SOAP APIs*. 

5. Click **Save and Close** or **Save and continue**. 

   The Interactive Documentation item for the API definition is added in the **Interactive Documentation** list. 

## JSON Validation

While saving an IO Docs definition, there are two validations that occur: JSON validation and JSON schema validation. 

JSON validation checks for errors in the syntax of the IO Doc definition and does not save the edit changes, whereas the JSON schema validation checks whether the structure of the schema is valid according to the rules of JSON schema. A warning message is displayed, if the JSON schema is invalid, and the changes are saved. 

An error is displayed when you try to save an invalid JSON definition. The line error mark (![error image](../../Images/io_docs_error_tip.jpg)) appears on the line with an error. If you point to the error mark, an error tip is displayed. The error tip displays the expected syntax.

## WSDL Import for SOAP APIs

As with REST APIs, you can test real-time [SOAP](https://www.w3.org/TR/soap/) API responses by using the IO Docs. SOAP API can be exposed to the developers by importing respective [WSDL](https://www.w3.org/TR/wsdl) on the Dashboard. The I/O Docs converts the WSDL into a JSON definition. When an API call is made using the interactive documentation on the Portal, IO Docs converts the JSON objects into XML-based SOAP calls, and the SOAP-based request and response fields are displayed. 

Once the WSDL is successfully imported, Developers can test the SOAP-based responses on the Portal. 

## WSDL Requirements

At times, the schemas, types, and security issues of SOAP-based APIs are complicated to handle. To avoid such complications, IO Docs sets rules to be followed while importing WSDL. 

IO Docs supports WSDL 1.1. WSDL 2.0 can be used after it is converted into WSDL 1.1. For more information about the restrictions on elements, SOAP 1.1 and 1.2 operations, and HTTP operations, see [WSDL Requirements](http://support.mashery.com/docs/I_O_Docs_WSDL_requirements). 

## Editing a JSON Definition

To edit a JSON definition: 

1. Click the ![edit image](../../Images/edit.jpg) icon in the Actions column for the Interactive Documentation item. 

   This opens the `Edit Interactive Documentation:<name>` window.

2. After making your edits, click **Save**. 

