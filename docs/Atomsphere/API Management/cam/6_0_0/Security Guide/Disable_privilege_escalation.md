---
sidebar_position: 6
---

# Disable Privilege Escalation

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d3781c18-b56a-42db-a2f7-a954381ffec6"/>
</head>

All pods of Local Edition have privilege escalation set to false. This prevents the process in a container attempting to get higher privileges than the parent process.

## Fluent Bit

Fluent Bit is used as a Sidecar in all pods. The Fluent Bit process reads console logs (via tail) and forwards them to observability stack. For Fluent Bit to read console logs, it has other capabilities dropped except for `CAP_FOWNER` along with privilege escalation set to false. 
