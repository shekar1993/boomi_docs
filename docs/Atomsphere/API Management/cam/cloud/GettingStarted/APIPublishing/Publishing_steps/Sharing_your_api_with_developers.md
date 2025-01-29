---
sidebar_position: 4
---
# Sharing your API with Developers

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-75f0e9b9-b875-44c4-8750-d17c4e7574b0"/>
</head>

After you have created an API, a package, and a plan, you can then register as a developer and sign up for access to the API. For now, you can simply use your existing administrator account to register for Keys. To start sharing your API: 

## Procedure

1. Go to the customer Developer Portal URL: `http://evalXXXX.mashery.com`. 

      :::info

      You can access the URL directly from a new browser window or the API Control Center. To access the URL by the API Control Center, click on the square icon at the top right corner of the API Control Center and select **Developer Portal**.

      :::

2. Provide your credentials and click **Sign In**. The Developer Portal page is displayed.

3. Click **My Account**. The My API Keys page is displayed.

4. In the My API Keys page, click **Applications**. The My Applications page is displayed.

5. In the My Applications page, click **Create a New Application**. The Application Registration page is displayed.

6. In the Application Registration page, provide the following values: 

   a. **Name of your application:** Enter the name of your application, e.g., Starter App.

   b. **Web Site:** Enter a valid URL (the URL entered needs to be in a valid format, e.g., `https://evalXXX.mashery.com`, so it doesn't matter if the website is inaccessible yet). 

   For now, you can ignore the following fields:

   c. **Please describe what your application will do**: Leave it empty.
   
   d. **Register Callback**: Leave it empty

   e. **Select which Web APIs this application will use**: In this section, the **Issue a new key for Acme Package** and **Starter Plan** should already be selected by default. 

         :::note
      
         If you have created multiple packages and/or plans, you may see other packages that are checked off by default. Make sure to uncheck all other packages other than the one you have just created. If you leave each one checked, your application would get a different API Key per package.

         :::

   f. **Terms of Service**: Enable the **I agree to the terms of service** checkbox. 

   g. Click **Register Application**. 

## Result

You now have access to the Acme APIs using the new API key that you have registered. You should also have received an email about the status of your registration. For the first key request, you do not need any approval and as a result, your key will be automatically be active. If you require moderation, you will see a status of waiting. 