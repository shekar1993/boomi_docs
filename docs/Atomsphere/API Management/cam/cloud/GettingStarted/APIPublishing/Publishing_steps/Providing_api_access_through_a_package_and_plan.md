---
sidebar_position: 3
---

# Providing API Access through a Package and Plan

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-27408cd8-b899-4f68-bc57-31875c385596"/>
</head>

You have created your first API, but no one has access to the API yet. If you call your API at this point, an error occurs. 

If you try an HTTP GET to `http://evalXXXX.api.mashery.com/acme/v1/product`, you can see a 403 Forbidden error with "Developer Inactive".

To get access to the API, you must first create a Package and Plan, which encapsulates the APIs that a developer can sign up for, how keys are generated, what rate limits are set, and so on.

The Package defines what APIs are available to developers. The Plan defines the access developers have to the APIs, for example, the number of calls per second. 

## Defining Package and Plan

### Procedure

1. Click **API Packages** on the **Get Started** page or navigate to **Design>Packages**. This opens **Manage your APIs with API Packages** page.

2. Click **New API Package**. This opens **New API Package** window. 

3. In **New API Package** page, provide the following values:

   1. **Package Name:** Enter the name for the new API Package.
      
   2. **Description:** Leave it empty for now. 
      
   3. **Organization:** Leave as the default. You can use the list to select one of the other pre-defined organizations. 

   4. Click **Save and Continue**. This opens up the **API Packages** page for Acme API. You can see the API Definitions once they have been created. 

   In the left navigation menu, you can see all the options available: 

   - **Plans:** The list of all the plans created for the API (the current view). 

   - **API Package Settings:** Overall API package settings, including the name, description, and organization that were just configured.

   - **Key Properties:** Key length and if you want to generate shared secrets. 

   - **Notification Settings:** Whether and when to send notifications when nearing quota limit or over quota/throttle limit, both for developers and administrators.
   
4. Navigate to **Plans**, click **Create your first API Plan**. This opens **New Plan** window.

5. In **New API Plans** page, provide the following values:

   1. **Name:** Enter the name for the new API Plan. For e.g. Starter Plan 

   2. **Description:** Leave empty for now.

   3. Click **Save and Continue**. This opens up the **API Plan Settings** page for Starter Plan API. You can see the API Package and Plan once they have been created. 

   In the left navigation menu, you can see all the options available: 

   - ​​​**​Plan Contents:** Where you can set method level rate limits and response filters (more on this later).

   - **Plan Designer:** Which APIs are allowed in this plan.

   - **Plan Settings:** The name, status, and description of the plan.

   - **Key Properties:** How keys are requested (self-service, moderated). 

   - **Rate Limits:** Throttle and Quota limits. 

   - **Access Control:** Who has visibility to this plan. 

   - **Notification Settings:** Where you can assign a specific notification template. 

6. Click **Plan Designer** in the left navigation menu and configure the following: 

   a. Click the check box next to the API Definition Acme **API Ver:1.0**. Navigate to the next level by clicking anywhere in each box except on the check box. The default endpoint is automatically selected.

      :::note
      
      Right now, no methods are available, as they haven't been defined. 

      What has been defined so far allows any API call that matches `http://evalXXXX.api.mashery.com/acme/v1/*` to be allowed through
      with this plan. You can potentially allow for access to all APIs, limit to specific endpoints, or even any unidentified method.

      :::

   b. Click **Save**. 

7. Click **Key Properties** in the left navigation menu and configure the following: 

   a. Set **Self-service Key Provisioning** to **Enabled**. The default value is **Enabled**. 

      :::note
      
      Setting it to **Disabled** would only allow an administrator to provision access on behalf of a developer, versus allowing a developer to get a key through self-service provisioning. 

      :::

   b. Set **Maximum Allowable Keys** to 4. The default value is 4.
   
   c. Set **Number of Keys allowed until Moderation** to 1. 

      :::note
      
      Setting this to 0 means that administrative approval is required before access is granted for an application key. Setting this to 1 or more, means keys are provided through self-service. 

      :::

   d. Click **Save**.

8. Click **Rate Limits** in the left navigation menu and configure the following: 

   a. Set **Throttle** to **1** (calls per second). 

   b. Set **Quota** to **2500** and **Quota Period** to **Day** (calls per day). 

   c. Click **Save**.

9. Click **Access Control** in the left navigation menu and configure the following: 

   a. Click **Everyone** in the **Unselected Roles** column to add to the **Current Role**s. 

      :::note
      
      By default, no one can see the Packages and Plans that are defined. Custom roles can be created to only enable specific developers to see if specific plans are available. For this quick start example, it's assumed that **Everyone** is allowed to see the plans you have created. 

      :::

   b. Click **Save**.

10. Click **Notification Settings** in the left navigation menu and configure the following: 

      a. **Developer Notification Template**: Select nothing to use the default template or choose an existing template from the drop-down.

      b. **Admin Notification Template**: Select nothing to use the default template or choose a admin template from the drop-down.

      c. Click **Save**.


