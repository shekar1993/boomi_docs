# Associating web service API users with internal roles

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-e7005f50-2264-4e3f-8327-2116b5c79d59"/>
</head>


Associate web service API users with Internal Roles on the Shared Web Server panel in Atom Management.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

Before you begin, create one or more internal roles on the Internal Roles page of \(**Authentication** \> **Internal**\).

## About this task

By associating a group of users to a single internal role, you can grant API access to all the users associated with that internal role for specific web service components at once without needing to set the permissions individually.

## Procedure

1.  Navigate to **Manage** \> **Atom Management**.

2.  Select the appropriate Atom and click **Shared Web Server**.

    The Shared Web Server panel is displayed.

3.  On the General tab, set the **API Type** to Advanced.

4.  On the User Management tab, click the **Enable Internal Roles** check box.

    An Internal Roles Management tab is added to the panel.

5.  Click ![](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) **Add Internal Role**.

    The **Add Internal Role** dialog opens.

6.  Select the **Internal Role** from the drop-down list.

7.  Click **OK**.

8.  Add one or more users from the **Add Role to User** drop-down list.

9.  Click **Save**.

## Next steps

After associating API users with internal roles, [update the API to only allow access to a specific internal role.](/docs/Atomsphere/API%20Management/Topics/t-api-Adding_an_internal_auth_source_to_an_API_4e459107-471b-4f66-81fd-1e03ab148b73.md)