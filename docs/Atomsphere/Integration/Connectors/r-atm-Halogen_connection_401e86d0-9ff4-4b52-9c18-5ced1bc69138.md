import TestConnection from './_TestCon.md'

# Saba TalentSpace connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-401e86d0-9ff4-4b52-9c18-5ced1bc69138"/>
</head>


The Saba TalentSpace connection represents a single Saba TalentSpace instance including login credentials.

If you have multiple organizations or sandbox instances, use a separate connection for each. You can pair a single connection with different Saba TalentSpace operations to perform a unique action against Saba TalentSpace.

## Connection tab 

**WSDL URL** - 
 The WSDL for Saba TalentSpace SOAP service.

**SOAP Endpoint URL** - 
 The SOAP service URL for Saba TalentSpace. If you leave this field blank, the endpoint URL from the WSDL is used.

**Username** - 
 The username for the Saba TalentSpace account.

**Password** - 
 The password for the Saba TalentSpace account.

**Client SSL Certificate (Optional)** - 
  Used to select, edit, or remove a private certificate for SSL authentication. Your private certificate is used to verify your identity when sending requests to the endpoint. To set up a client authentication, you must manually export your public certificate and provide it to your endpoint owner.

**Trust SSL Server Certificate (Optional)** - Used to select, edit, or remove a public certificate component for SSL server authentication. Contact the owner of the endpoint to obtain its public certificate and then import it into a certificate component.

<TestConnection />