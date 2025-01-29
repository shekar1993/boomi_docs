# Setting up Basic Authentication \(Gateway\) 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-04261aa0-7f00-4150-aae4-6408339564f2"/>
</head>


Setting up Basic Authentication allows you to restrict access to APIs without using a third party identity provider.

## Before you begin

Add an Authentication Source with the identity provider type Basic Authentication \(Gateway\).

## Procedure

1.  On the Roles tab, click **Add Role**.

2.  In the **Add a Role** dialog, specify a role name and optionally a description.

3.  **Optional:** Create additional roles by repeating steps 2 and 3 until all of your roles are created.

4.  On the Groups tab, click **Add Group**.

5.  In the **Add a Group** wizard, specify a group name and optionally a description. Click **Next**.

6.  On the Select Roles page, select one or more roles to assign to the group. Click **Next**.

7.  Review the group that you created on the Review Group page and click **Finish**.

8.  **Optional:** Create additional groups by repeating steps 4 through 7 until all of your groups are created.

9.  On the Users tab, click **Add User**.

10. In the **Add a Role** wizard, specify a user name and password.

11. Determine if the user is enabled to access APIs that use the Authentication Source. If they are, check the **Enable** box. Click **Next**.

12. On the Select Groups page, select one or more groups to assign to the user. Click **Next**.

13. Review the user that you created on the Review User page and click **Finish**.

14. **Optional:** Create additional users by repeating steps 9 through 13 until all of your users are created.

15. Click **Save**.

## Next steps

[Add the newly created Authentication Source to an API deployment](/docs/Atomsphere/API%20Management/Topics/t-api-Adding_an_authentication_source_to_an_API_9e89b1cd-03a3-42ad-8481-9f2a1f778a48.md).