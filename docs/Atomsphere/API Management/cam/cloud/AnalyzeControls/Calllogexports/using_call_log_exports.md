---
sidebar_position: 1
---

# Using Call Log Exports

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-652155c1-1e92-477a-a7ef-331ec0f70bd0"/>
</head>


:::note

This feature requires a valid Amazon S3 bucket with correct permissioning. Follow the Call Log Export setup instructions available in the New Call Log Export workflow to configure the customer-provisioned S3 bucket using the provided [Cloud API Management Formation](https://developer.mashery.com/files/ECLE_customer_resources.yaml) template. 

:::

The Call Log Exports feature allows you to access and filter raw API call logs and export them as CSV files to an Amazon S3 bucket. New logs are delivered every 30 minutes and include detailed API call information such as source IP address, URI, service name and endpoint names. There are numerous possible use cases for this data, including fine-grained billing, abuse detection, and troubleshooting. 

To access the **Call Logs Exports** page, go to **Analyze > Call Log Exports**.

The main page for Call Log Exports is the **Manage your Call Log Exports** page, which displays a navigable list of all Call Log Export profiles. 

The following table describes the default fields displayed in the list view on the **All Call Log Exports** page. 

|**Column Name** |**Description** |
| ---- | --- |
|Call Log Export Name|The name of the Call Log Export profile. Click an existing name to view the Settings page where you can edit the profile name, status and target. |
|Profile Status|The status of the Call Log Export profile, either Enabled or Disabled. |
|Created|The date and time when the Call Log Export profile was created. |
|Updated |The date and time when the Call Log Export profile was last updated. |
|Actions| |
|![](../../Images/edit_2.jpg)|Click to modify the profile. The Settings page is displayed. You can modify a subset fields, as required. |
|![](../../Images/delete%202.jpg)|Click to delete the profile. A warning to delete the profile is displayed. |

