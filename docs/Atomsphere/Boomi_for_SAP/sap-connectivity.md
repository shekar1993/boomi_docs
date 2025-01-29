# Connectivity

<head>
  <meta name="guidename" content="Boomi for SAP"/>
  <meta name="context" content="GUID-7ed2ab82-5df8-4f76-abe8-5796e9e7a05d"/>
</head>

Connectivity between SAP and Boomi Atoms is established using the HTTP protocol. 
When SAP initiates the connection, it utilizes RFC (type G) connections and directs its requests to a web service deployed on Boomi Atoms (SM59). Port 9090 is used on Boomi Atoms for this purpose. Additionally, certificates need to be trusted in STRUST if they are not already trusted. 

When Boomi initiates the connection, it connects to the HTTP(S) ports of SAP. The SAP ports that need to be used should be checked in the SMICM. If not trusted by Boomi Atoms, certificates can be added in Boomi for SAP connection as Server Certificates.

To ensure smooth connectivity, enable firewalls between SAP and Boomi Atoms.

