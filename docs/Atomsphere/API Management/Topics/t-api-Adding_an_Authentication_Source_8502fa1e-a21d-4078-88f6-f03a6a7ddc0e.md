# Adding an Authentication Source 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-3F9E6648-8C8C-491E-A89A-684A5294A55B"/>
</head>


Add an Authentication Source on the **Authentication** page \(**Configure Server** \> **Authentication**\).

## Procedure

1.  On the **Authentication** page, go to the **Authentication Sources** tab and click the **New Authentication Source** button. The **Add an Authentication Source** dialog opens.

2.  Provide a name and optionally a description for the Authentication Source.

3.  Select an **Identity Provider Type**

    -   JWT - **recommended and preferred way of authentication**
    -   Basic Authentication \(Gateway\)

4.  Click **OK**. The **Authentication Source Configuration** page opens.

5.  Complete the below steps based on the Identity Provider Type you selected.

    If you selected **JWT Authentication**:

    1.  On the **General** tab, specify the **Identity Provider URL**.

    2.  On the **Roles** tab, specify a **Group Identifier** and one or more **Identity Provider Roles**.

    3.  On the **Audience Claim** tab, enter audience claim values for your JWT authentication source.

    For more information, see [Authentication Source settings for JWT](/docs/Atomsphere/API%20Management/Topics/api-Auth_Source_settings_for_JWT_4686dcb6-bcc2-42df-b00a-b26d15904000.md).

    If you selected **Basic Authentication \(Gateway\)**:

    4.  On the **Users** tab, add users.

    5.  On the **Groups** tab, add groups.

    6.  On the **Roles** tab, add roles.

    7.  After you create users, groups, and roles , assign one or more roles to a group and then assign users to specific groups.

6.  Click **Save**.