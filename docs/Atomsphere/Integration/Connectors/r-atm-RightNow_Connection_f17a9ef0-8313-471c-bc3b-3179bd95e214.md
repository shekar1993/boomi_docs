import TestConnection from './_TestCon.md'

# RightNow – Partner connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f17a9ef0-8313-471c-bc3b-3179bd95e214"/>
</head>


The RightNow – Partner connection represents a single RightNow site, including login credentials.

To use multiple sites, you need a separate connection component for each site. You can pair this connection with different RightNow – Partner operations to perform unique actions against a RightNow instance.

## Connection tab 

**URL** - 
The URL for the RightNow service:

`http://<rightnow_host_name>/cgi-bin/<site_name>.cfg/php/xml_api/soap_api.php`

Configure the RightNow host name and site name \(in angle brackets\) to connect to the proper instance.

**User** - 
 The user name for logging into the RightNow service.

**Password** - 
  The password for logging into the RightNow service.

To understand how passwords are securely stored in a connection component, see the Password encryption security help topic.

<TestConnection />