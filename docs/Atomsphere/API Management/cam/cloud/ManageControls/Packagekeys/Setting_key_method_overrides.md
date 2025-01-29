---
sidebar_position: 8
---

# Setting Key Method Overrides

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-5756b1db-f01d-4174-9b07-fffc9d42c621"/>
</head>

The throttle and the quota limits can be specified at the key level. These limits override the limits set at the Plan level. 

**To set key overrides:**

1. On the **Package Keys** page, for a specific key, click ![](../../Images/edit.jpg). 

   The **Settings** page is displayed. 

2. In the **Throttle for this key** list and the **Quota for this key** list, select list items.

   The **Throttle for this key** and the **Quota for this key** lists, have the following three list options: 

   - **Default:** This does not override the existing Plan limits
    
   - **Unlimited:** This sets no limit on API calls. 

   - **Custom limit:** This sets custom limit that overrides the Plan-level limits. 

      If **Custom limit** is selected, **calls per second** and **calls per day** fields are enabled. In the **calls per second** field and the **calls per day** box, specify custom limits for each. 

3. Click **Save**. 

   :::note
   
   The **Developer Key Overrides** checkbox on the **Plan Rate Limits** page (Design > API Plans) must be selected for the Plan level limits to be overridden by the key- level limits. 

   By design, the key override will not override the method rates and limits.

   :::
