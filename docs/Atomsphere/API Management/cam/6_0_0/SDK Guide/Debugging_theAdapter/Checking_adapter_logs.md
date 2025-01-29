---
sidebar_position: 4
---

# Checking Adapter Logs

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-044ef427-90f4-4150-a4eb-eef1f2846e3b"/>
</head>

The logs are all stored on the Log service (tml-log) pod or container at `/mnt/data/tml-tm/<hostname/ipaddress>/tmdata/proxy_error/proxy_error.log` and `/mnt/data/tml-tm/<hostname/ipaddress>/tmdata/proxy_debug/proxy_debug.log`. 

Open the log file and search for messages containing text: *MasheryCustomAdapter*. 
