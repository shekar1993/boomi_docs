# Set Properties step

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-CB50F347-9000-4336-A9D6-D114075FB1CC"/>
</head>


Use the Set Properties step to set values for various document and process properties on outbound connector attributes, such as file name or email subject, or to store values in memory to facilitate your integration. Property values can be composed of static and/or dynamic values.

![Set Properties icon](../Images/step-ic-set-properties-32_f65f1524-add5-42a6-bebf-bb83b2fb02c1.jpg)

Generally, you use this step immediately before the outbound connector. The property type in the step should correspond to the type of connector the data will be sent to. For example, to send data via FTP use the Set Properties step to set the *FTP File Name* — not the Disk or SFTP File Name.

Some common uses of the Set Properties step:

-   Setting the outbound Disk/FTP/SFTP file name from a mix of static and dynamic content

-   Changing the subject for email alerts, allowing you to reuse the same Mail operation component

-   Dynamically setting the outbound FTP/SFTP directory

-   Dynamically setting [connection credentials](int-Dynamic_Process_Connection_properties_9067300c-3df3-40ba-97b3-5a6a03a3a6dc.md) within a listener process