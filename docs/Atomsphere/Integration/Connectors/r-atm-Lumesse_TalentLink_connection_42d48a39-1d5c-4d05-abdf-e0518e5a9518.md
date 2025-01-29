import TestConnection from './_TestCon.md'

# Lumesse TalentLink – Partner connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-42d48a39-1d5c-4d05-abdf-e0518e5a9518"/>
</head>


The Lumesse TalentLink – Partner connection represents a single Lumesse TalentLink account instance including sign-in credentials.

The connection uses Web Services Security on all SOAP requests. It uses the connection settings to populate the security fields. All SOAP requests contain two query parameters: the API key \(`api_key`\) and Company Name \(`companyName`\).

## Connection tab 

**Lumesse Host** - 
 The host which is part of the URL. The default is: `https://api.lumessetalentlink.com`. See the [Lumesse TalentLink – Partner connector](../Connectors/r-atm-Lumesse_TalentLink_connector_92da5dc0-28b3-4cfb-b4ca-14284a8aea16.md) topic for a list of supported WSDLs.

**Company Name** - 
 The company name to use when connecting to the Lumesse TalentLink service.

**User** - 
  The user name to use when connecting to the Lumesse TalentLink service.

**Environment** - 
 The Back Office \(BO\) or Front Office \(FO\).

**Password** - 
 The password for the user connecting to the Lumesse TalentLink service.

**HRIS Bundle API Key** - 
 The API key for the Human Resources Information Systems \(HRIS\) bundle.

**User Bundle API Key** - 
 The API key for the User bundle.

<TestConnection />