---
sidebar_position: 11
---

# Endpoint Load Balancing and Domains

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-edbdf490-b3f9-4bac-9119-89dffd4efb77"/>
</head>

You can add and use more than one public endpoint addresses and system endpoint addresses. For the Public endpoints, this will allow multiple domain/hosts to access the endpoint, and for System endpoint addresses the calls will round-robin to the origin. 

The following table describes the fields on the **Endpoint Load Balancing & Domains** page. 

|**Field** |**Description** |
| ---- | ----- |
|Public Endpoint Addresses|<p>You can add multiple addresses by adding the **Fully Qualified Domain** name in the text box and then clicking **Add**. </p><p>To add a host to the **Current** list (which indicates the active host name), click the address(es) in the **Unselected** list. </p><p>To remove a host, click on an entry in the **Current** list. </p><p>:::note</p><p>The newly added hosts may require whitelisting approval.</p><p>::: </p>|
|System Endpoint Addresses|<p>The backend system endpoint addresses are used in the simple Round-robin load-balancing. </p><p>:::note</p><p>If **TIBCO Cloud Mesh** is used for the endpoint, configuration for **System Endpoint Addresses** is not shown on this page.</p><p>::: </p><p>To add a host to the **Current** list (which indicates the active host name), click the address(es) from the **Unselected** list. </p><p>To remove a host, click on an entry in the **Current** list. </p><p>:::note</p><p>The newly added hosts may require whitelisting approval.</p><p>::: </p>|

