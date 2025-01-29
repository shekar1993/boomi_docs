# Downloading the local Gateway installer 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-85f54788-80fc-40c3-bca0-905170046974"/>
</head>


Download the Gateway installer for Windows or Linux on the **API Gateways** page.

## Before you begin

Review the Gateway system requirements to ensure that your system is compatible with setting up a Gateway.

In order to install a Gateway in an account, you must have the API Management privilege in that account. If you do not have the API Management privilege and try to download the Gateway installer from the Authentication tab, you will receive an error message.



## Procedure

1.  Go to **Configure Server** \> **API Gateways** and click **Add a Gateway**.

2.  From the Operating System drop-down list, select the type of Gateway that you plan to install:

    -   **Windows 32-bit**

    -   **Windows 64-bit**

    -   **Linux 32-bit**

    -   **Linux 64-bit**

3.  **Optional:** Open the **Security Options** section to generate an installer token.

    You can use the token to install a Gateway or give the token to someone else to perform the installation. Using a token eliminates the need to specify Boomi Enterprise Platform credentials. A token is valid only for the account in which it is generated.

    1.  From the **Token Valid For** drop-down list, select the length of time for which the token should be valid.

        The minimum length of time is 30 minutes; the maximum is 24 hours.

    2.  Click **Generate Token**.

        A unique installer token is displayed in the **Gateway Installer Token** field along with the date and time when the token will expire.

    3.  Click ![](../Images/main-ic-two-documents_832db596-4895-4b34-943f-079de49b9525.jpg) to copy the installer token to the clipboard.

    4.  Paste the token to another location for use when performing the installation.

    5.  **Optional:** Click **Generate Another Token** to generate additional installer tokens.

4.  Click **Download Installer**.

    A dialog opens that shows the name of the executable file you need for the operating system you selected.

5.  Click **Save File**.

    The executable file is saved to your machine.

6.  **Optional:** Give the installer token that you generated and the executable file to the person who will perform the installation.

7.  Follow the operating system-specific instructions for installing a local Gateway on Windows or Linux.
