---
sidebar_position: 4
---

# Configuring Endpoint Call Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-8fdf2d69-00bc-401a-b4a9-cb3372cff407"/>
</head>

On the Call Transformations page, specify the following information in these fields: 

- **Processing Adapter:** com.mashery.proxy.customer.generic.xml-json-transformation-connector 

- **Perform Pre-Processing:** Enabled 

- **Perform Post-Processing:** Enabled 

- **Data to make available for pre-processing:** Pre-Input Data as shown in the following table. 
    
    | Data | Examples | Notes |
    | --- | --- | --- |
    | max\_payload\_size: &lt;size in kb&gt; | max\_payload\_size : 600 | Optional. |
    | fail_safe: &lt;flag&gt; | fail_safe : true | Optional. Default is 'false'. Any value besides 'true' is treated as 'false'. |
    | override\_custom\_error_message : &lt;flag&gt; | override\_custom\_error_message : true | Optional. Default is 'false'. For enabling API service endpoint supported static custom messages to override Connector runtime message. |
    
-  Data to make available for post-processing (one per line)
    
    | Data | Example | Notes |
    | --- | --- | --- |
    | max\_payload\_size: &lt;size in kb&gt; | max\_payload\_size : 600 | Optional. |
    | fail_safe: &lt;flag&gt; | fail_safe : true | Optional. Default is 'false'. Any value besides 'true' is treated as 'false'. |
    | override\_custom\_error_message : &lt;flag&gt; | override\_custom\_error_message : true | Optional. Default is 'false'. For enabling API service endpoint supported static custom messages to override Connector runtime message. |