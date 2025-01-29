# Connectivity to Boomi from SAP

<head>
  <meta name="guidename" content="Boomi for SAP"/>
  <meta name="context" content="GUID-b33a83b0-b604-46e0-8a98-e9c136b16151"/>
</head>

## Challenge

Encountering 400 Bad Request may arise from inconsistencies between the SSL status of the RFC and the port/settings configured in Boomi. Similarly, 401 Unauthorized issues often occur due to incorrect Boomi web service credentials or insufficient permissions.

## Solution

- The success of a Connection Test in the SM59 RFC is not solely determined by receiving a 200 OK response. To assess whether the connection was established, the first step should involve checking the Shared Server Logs in Boomi. Potential indicators of a successful connection include receiving a 404 or 405 error, indicating that no Boomi process is deployed to the Atom at the specified URL with a GET method (as Boomi for SAP receiver processes use POST).

  - **400 Bad Request**

      1. Ensure that the active/inactive status of the RFC SSL matches the port and setting in Boomi. 

      2. If an RFC is on port 443 with SSL inactive and connects to an SSL port on a Boomi Atom, it may result in HTTP code 400.

  - **401 Unauthorized**

      1. Verify the username and password used in the RFC for the Boomi web service are correct. 

      2. Ensure that the Boomi web service user has the necessary permissions to call the specific web service (Use Process Filtering section in Boomi). 

      3. Verify that the Boomi web service user is authorized to call the web service from the SAP IP address (Use IP Filter section in Boomi).




