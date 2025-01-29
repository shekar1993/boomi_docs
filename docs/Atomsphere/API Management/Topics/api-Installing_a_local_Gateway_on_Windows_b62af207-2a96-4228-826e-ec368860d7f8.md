# Installing a local Gateway on Windows 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b62af207-2a96-4228-826e-ec368860d7f8"/>
</head>


Install the downloaded Windows version of the local Gateway by running the executable file.

## Before you begin

Gateways require the Java 11 JDK. Boomi internally tests each Java version prior to their release.

-  The installer will install a private copy of Java 11 for the Gateway to use.

:::note 
    
    The private copy of the JDK is a complete JDK that is placed in your Gateway's jre directory. The private JDK will not interfere with a shared JDK (one that you, not the installer, installed). It is not integrated into browsers and does not write registry entries.

:::


Before completing these steps, download the Gateway installer and set up a Windows shared directory.

Depending on the version of Windows you are running, you might require Administrator access to run the Gateway installer.

The installer gives you the option to select local directories for storing working data and temporary data. It is recommended that you select local directories. If you do select local directories, you must ensure that these directories exist before you run the installer. The installer does not create the directories for you.

# Procedure

1.  After downloading the Gateway installer, run the executable file.

2.  If you see a security verification window, click **Yes**.

    The Gateway Setup Wizard opens.

3.  If the installer cannot find the JRE on your machine, you are prompted to download it.

4.  On the Welcome page, click **Next**.

5.  On the User Information page:

    1.  Select **User Name and Password** or **Token**, depending on how you want to authenticate the Gateway.

    2.  Enter one of the following, depending on the option you selected:

    -   your Boomi Enterprise Platform user name and password

    -   a valid installer token

        Installer tokens can be generated when the Gateway installer is downloaded from the Gateway Setup dialog. A token is valid only for the account in which it was generated. Tokens expire after a set amount of time ranging from 30 minutes to 24 hours.

    3.  Enter a name for the Gateway.

        This is the Gateway name that you see when you go to **Configure Server** > **API Gateways**. The name defaults to the local host name, but you can change it to something more familiar.

        :::note 
    
        The following characters are reserved and cannot be used in the name: asterisk (`*`), backslash (`\`), caret (`^`), colon (`:`), dollar sign (`$`), greater than (``>``), less than (`<`), percent (`%`), pipe (`|`), question mark (`?`), quotation mark (`"`), slash mark (`/`), Yen sign (`¥`).

        :::

    4.  If the local machine uses an HTTP proxy to connect to the Internet, select the **Use Proxy Settings** check box and enter the appropriate host, port, user name, and password for the proxy.

        If you do not fill out the proxy settings now, you can add them later.

    4.  Click **Next**.

        You connect to Boomi Enterprise Platform and your credentials are authenticated.

        If you specified a user name and password, the Accounts page is displayed.

        If you specified an installer token, the Select Destination Directory page is displayed and you can skip to step 7.

6.  **Optional:** On the Accounts page:

    1.  If your user name has access to multiple accounts, you see a list of accounts. Select the account to which this Gateway is associated. This step typically applies only to partners.

    2.  Click **Next**.

7.  On the Select Destination Directory page, select the installation directory and click **Next**.

    You must install the Gateway in the shared directory from the first machine. The directory name should look like this: `//<host\_name\>/Share/<gateway\_installation\_directory\>`.

8.  On the Select Local and Local Temp Directories page:

    1.  Select a local directory for storing the Gateway node’s working data.

    The directory that you select is stored in the Gateway’s Working Data Local Storage Directory property.

    2.  Select a directory for storing the Gateway node’s temporary data.

    The directory that you select appears in the node’s `bin/*.vmoptions` file as `-Djava.io.tmpdir=<your_selected_directory>`. If you do not set the local temporary directory, your default Java temp directory is used. The default directory is not recorded in the node’s `bin/*.vmoptions` file.

    3.  Click **Next**.

9.  On the Select Start Menu Folder page, modify any Start Menu settings and shortcuts and click **Next**.

10. On the Information page, review the installation settings and click **Next**.

    The installer installs all of the necessary files for your Gateway.

11. When the installation is complete, click **Finish** to start the Gateway.

## Results

The Gateway runs as a Windows service. You can view the Gateway online by going to **Configure Server** > **API Gateways**.