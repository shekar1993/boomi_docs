# Authentication Source settings for Basic Authentication \(Gateway\) 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-8BC83DE3-FAD4-47F0-B0F6-96D9E2FDFD5E"/>
</head>


The Source Configuration for Basic Authentication \(Gateway\) page enables you to review and modify the privileges of your API users.

You must select an identity provider type during the creation of an Authentication Source. Basic Authentication \(Gateway\) allows you to set authentication privileges for specific users within API Management.

After you configure the authentication source, click **Save and Send to Gateway** to send the updates to all the Gateways using this authentication source.

:::note 

If the authentication source is not in use by any API deployed to the Gateway, the **Save and Send to Gateway** button appears as **Save**.

:::

You can view the APIs that use a particular Authentication Source by clicking **View API Associations** which opens the API Associations panel. The panel lists all the deployments for the Authentication Source.

## General tab 

Use the General tab to modify the name and description.

## Users tab 

Use the Users tab to add or edit the users who will be accessing your APIs. Users are the actual people who are calling an API.

Once you have created groups on the Groups tab, you can assign the users to specific groups. For instance, users Mary and Greg are added to the Developer group.

## Groups tab 

Use the Groups tab to add or edit the groups that your users are part of. Groups organize your users into workable categories that are assigned to specific roles.

Once you have created roles on the Roles tab, you can assign groups to specific roles. For example, you might create a Developer group that has the Administer role.


## Roles tab 

Use the Roles tab to identify the roles for your identity provider into the Authentication Source. Roles are the groups of users who serve a specific function. For example, you may have Administrator and General roles. 