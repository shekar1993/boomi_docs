import TestConnection from './_TestCon.md'

# JIRA REST connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c9ab8054-c873-4050-8fb2-f4daffc241b3"/>
</head>


The JIRA REST connection represents a single JIRA service, including sign-in credentials.

If you have multiple organizations or sandbox instances, use a separate connection for each. You can pair a single connection with different JIRA REST operations to perform a unique action against a JIRA service.

If you are using an SSL connection:

-   You might need to manually import a certificate.
-   You must use a local Atom. Using an Atom Cloud creates an SSL handshake failure because the connector does not select certificate components from the Boomi Enterprise Platform.


## Connection tab 

**URL** - 
The base URL to your JIRA service. For example: `http://jira.atlassian.com`
    
**Username** - 
  The user name, who has System Administrator permissions, used to sign into JIRA.

**Password** - 
 The API token used to make calls to REST APIs for the JIRA application.

<TestConnection />