# How to Externalize Properties and Files from SDK-Built Adapters

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-fd56a6fd-86c2-42c3-80fe-44b73eabe46e"/>
</head>

You can use the SDK to create a adapter that can read the file content of `/opt/mashery/containeragent/resources/properties/tml_tm_properties_final.json` present inside the TM container. 

After building the adapter, upload it into the installer and create the cluster. The entries from file `/tml_tm_properties.json` are available. 
