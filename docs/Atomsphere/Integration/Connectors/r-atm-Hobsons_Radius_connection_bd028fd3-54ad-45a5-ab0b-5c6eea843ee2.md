import TestConnection from './_TestCon.md'

# Radius by Campus Management connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-bd028fd3-54ad-45a5-ab0b-5c6eea843ee2"/>
</head>


The Radius by Campus Management connection \(formerly, Hobsons Radius\) represents a single Radius by Campus Management account instance including login credentials.

A connection to the Radius by Campus Management service is valid for one hour of activity, or until it is closed by Radius by Campus Management due to inactivity. If a process is running when the hour ends, the connection does not expire until after the process is completed.

## Connection tab 

**URL** - 
 The base URL for the Radius by Campus Management service. For example: `https://useastapi.hobsonsradius.com`.

**User Name** - 
  User name for logging into the Radius by Campus Management service.

**Password** - 
 The password for your Radius by Campus Management service.

<TestConnection />