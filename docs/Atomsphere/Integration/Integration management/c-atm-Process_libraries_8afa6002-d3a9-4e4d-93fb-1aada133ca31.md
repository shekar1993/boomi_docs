# Process libraries 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-E7CC2C4D-880E-4575-8E09-22C2EA836AE8"/>
</head>


Primary account users with Process Library privilege can publish processes in a process library and manage that library.

You perform these activities on the Process Library page \(**Manage** \> **Process Library**\). Before you can publish a process, you must do the following:

-   In the service, use Packaged Components \(**Deploy menu** \> **Packaged Components**\) to first package the process and mark the package as shareable.

-   Update the Publisher tab \(**Settings** \> **Account Information and Setup** \> **Publisher**\) with a publisher name and, optionally, other publisher information.


**Note:** Process library management is an optional feature. To have this feature enabled in your account, contact your sales representative.

When you publish a packaged process, you have the option to include any passwords that are specified within the process.

After you package a process and then publish it to the process library, you share the published process with managed accounts on a per-account group basis. For a managed account, its process library is a collection of published processes that have been shared with account groups of which the account is a member. For you, sharing means adding the process as a resource to account groups of which managed accounts are members — you do this in the **Setup** page on the **Account Groups** tab.

Users of managed accounts can access published processes, including processes published by , by clicking **Browse Process Library** on the **Build** page. They can install copies of those processes in their accounts and use the installed processes as templates for new processes.

**Note:** For Legacy deployment, API Service components must also be published to be included in an integration pack. However, API Service components cannot be shared with managed accounts directly and do not appear in the [Browse Process Library dialog](https://platform.boomi.com/#build;processLibrary=home) in the **Build** page.