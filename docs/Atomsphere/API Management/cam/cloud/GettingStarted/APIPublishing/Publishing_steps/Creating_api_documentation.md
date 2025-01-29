---
sidebar_position: 5
---

# Creating API Documentation

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-43dcb273-8d09-49fb-91b4-77353f29c491"/>
</head>

At this point, you can potentially test your API using your favorite client app. (For example, enter `http://evalXXXX.api.mashery.com/acme/v1?api_key=25puf2ft6d9y6zrud3cc49zj` in a browser). But first, you need to create an Interactive Documentation page. 

To clarify what the following steps do, setting up Interactive Documentation does not affect which resources are available via Boomi Cloud API Management. At present, you have defined it so that all services exposed via `https://integration.cloud.boomiapps.com` are available via `http://evalXXXX.api.boomi.com/acme/v1`. What you are configuring is how a portal user can interact with the services via the Interactive Documentation page on the portal. 


## Procedure

1. Go to your Boomi Cloud API Management portal URL: `https://evalXXXX.admin.mashery.com`and navigate to **Design>Interactive Documentation**. This opens Interactive Documentation page which shows the list of all the APIs defined. 

   :::note

   You can click the **Interactive Documentation Portal Page Settings** button to modify the general settings - **Page Title** and **Description**. You do not need to change these options for this quick-start example. 

   :::

2. To open the default Interactive Documentation template for APIs created by: 

   - **Import a file** option:

      a. In Title column, click on the API link, e.g, **Acme API**. The **Edit Interactive Documentation: Acme API** page is displayed. Then, follow step 3 to edit the values in Interactive Documentation.

   - **Create Manually** option:

      a. Click **New Interactive Documentation**. This opens **Interactive Documentation** page.
      
      b. In **New Interactive Documentation** page, provide the following values:
      
      - **Select an API Definition:** Select an API definition from the drop-down.
         
      - **Please select the format of the document you are uploading:** Select **IO Doc** or **Swagger** format. 
      
         :::warning

         This setting cannot be changed later. We recommend choosing the **Swagger** format or Document Type for your API.

         ::: 

         - **Upload a JSON or YAML:** Upload an existing JSON or YAML file.
            
         OR

         - **Import from URI**: Provide the URI.

      c. Click **Save and Continue**. This opens up the **API Definitions** page for Acme API. You can see the API Definitions once they have been created. 

      d. In Title column, click on the API link created. The **Edit Interactive Documentation: Acme API** page is displayed. Then, follow step 3 to edit the values in Interactive Documentation.


3. To point Interactive Documentation to the appropriate API endpoint and paths for each method, edit the following values in the Interactive Documentation JSON file: 

   - `basePath`: "http://evalXXXX.api.mashery.com/acme/v1" 
   
   - Under `exampleMethod`: 

      - `description`: "Get all products" 
      
      - `paths`: "/product" 

   - Under the `parameters`, there is a sample `exampleParameter` created. Here, in `required` replace `true` with `false`. 

   - (Optional) You can also change the names of the methods (for example, instead of `exampleMethod`, you can use `GetAllProducts`), which is the display name used on the Interactive Documentation page. 

   Your completed Interactive Documentation definition should look like the following example: 

   ```xml
   {
   "name":"Acme API",
   "title":"Acme API",
   "description":"",
   "version":"10",
   "protocol":"rest",
   "basePath":"http://evalXXXX.api.mashery.com/acme/v1",
   "auth":{
   "key":{
   "param":"api_key",
   "location":"query"
   }
   },
   "resources":{
   "Default":{
   "methods":{
   "GetAllProducts":{
   "description":"Get all products",
   "httpMethod":"GET",
   "path":"/product",
   "parameters":{
   "exampleParameter":{
   "description":"",
   "default":"",
   "required":false,
   "location":"query"
   }
   }
   }
   }
   }
   }
   }
   ```

4. Click **Save**. 



