# Getting started in Command Center

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-3001e2ab-4099-444c-9e53-863a5740e5e4"/>
</head>

The Command Center powered by ServiceNow simplifies data management by providing a dynamic 360-degree visualization of golden records from DataHub storage. The golden record visualization presents metadata in a way that lets business stakeholders gain insights into the data’s context and quality.

## Benefits 

- Empowers you to collaborate on data managements tasks within your organization
- Accelerates data-driven business decisions
- Streamlines data governance

## Prerequisites

You don't need a ServiceNow account to utilize the Command Center. However, you will need to do the following to get started:

- Contact your account representative
- Register your user account with the Command Center
- Ensure you have the following privileges:

    When using the Advanced Security feature:
      - **API Access**
      - **Atom Management Read Access**
      - **MDM - Stewardship**
      - **MDM - View Repositories**

    Without Advanced Security:

      - **Boomi Administrator**

  Read [User Management settings](/docs/Atomsphere/Platform/r-atm-User_management_baf961e2-b480-4fca-a3f5-8262aed6c031.md) to learn more about configuring privileges for user roles.

:::note

We're releasing Command Center initially through [Limited Availability](/docs/Atomsphere/Platform/atm-Feature_release_stages_00d83b66-e5db-4038-8398-fcaead4be12d.md). While we are limiting the number of customers, the release will be open to both existing and new DataHub customers up to that specified limit. The foundational read-only view will be rolled out more broadly to existing Hub customers throughout 2025 based on platform readiness and performance validation.

:::

## Register your user account with the Command Center

1. After contacting your account representative to activate your Command Center account, the Boomi administrator will coordinate with Boomi to register users. After they register your user, you’ll receive a welcome email. Take note of the username created for you in order to log into the Command Center.
2. Create your account password using the link provided in the email. You are prompted to send a verification code to your email. 
3. Enter the verification code sent to your email.
4. You are directed to the Command Center sign in page. Sign in with your username (provided in the welcome email) and your password. 
5. Navigate to the **Boomi Platform** > **Settings** > **Account Information and Setup** > **AtomSphere API Tokens** > **Add New Token** to generate an API token. 
6. Enter a name for the token and click **Generate Token**.
7. Copy the token to a text file. After you close the token window, you can no longer acquire the API token.
8. In the Command Center, navigate to your profile located in the right corner of the screen.
9. Next to **Api Token** in your profile, click **(Empty)**. 
10. Paste your API token in the window. 
11. Click **Save**.
12. Navigate back to **Home**. 

Next steps: [View golden records in the Command Center](/docs/Atomsphere/Master%20Data%20Hub/Command_Center/view_golden_records_in_command_center.md). 
