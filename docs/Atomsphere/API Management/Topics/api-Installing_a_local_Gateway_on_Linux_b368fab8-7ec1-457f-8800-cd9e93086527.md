# Installing a local Gateway on Linux 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b368fab8-7ec1-457f-8800-cd9e93086527"/>
</head>


Install the downloaded Linux version of the local Gateway from a command line with the `-c` flag.

## Before you begin

Gateways require the Java 11 JDK. Boomi internally tests each Java version prior to their release.

-  The installer will install a private copy of Java 11 for the Gateway to use.

:::note 
    
    The private copy of the JDK is a complete JDK that is placed in your Gateway's jre directory. The private JDK will not interfere with a shared JDK (one that you, not the installer, installed). It is not integrated into browsers and does not write registry entries.

:::


Before completing these steps, download the Gateway installer and set up Linux shared directories.

The installer gives you the option to select local directories for storing working data and temporary data. It is recommended that you select local directories. If you do select local directories, you must ensure that these directories exist before you run the installer. The installer does not create the directories for you.

:::note 

If you choose not to use the GUI to install a Gateway, you can use the console mode option `(-c)` of the install4j installer.

:::

## Procedure

1.  Locate the Gateway installer file that you saved to your machine.

    After the file is downloaded, the installation wizard can be run via a command line, which is recommended, or via the GUI.

2.  Do one of the following:

    -   If you want to run the installer in console mode from a command line, run the file with the `-c` flag:

        `sh /<path>/gateway_install64.sh -c`

    -   If you are using the GUI, double-click the install file \(you might need to change the properties to allow executions: `chmod +x gateway_install64.sh`\) or run the file from the command line without the command-only flag:

        `sh /<path>/gateway_install64.sh`

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
    
    The following characters are reserved and cannot be used in the name: asterisk (`*`), backslash (`\`), caret (`^`), colon (``:``), dollar sign (`$`), greater than (`>`), less than (`<`), percent (`%`), pipe (`|`), question mark (`?`), quotation mark (`"`), slash mark (`/`), Yen sign (`¥`).

    :::

    4.  Click **Next**.

    You connect to Boomi Enterprise Platform and your credentials are authenticated.

    If you specified a user name and password, the Accounts page is displayed.

    If you specified an installer token, the Select Directory for Symlinks page is displayed and you can skip to step 7.

6.  **Optional:** On the Accounts page:

    1.  If your user name has access to multiple accounts, you see a list of accounts. Select the account to which this Gateway is associated. This step typically applies only to partners.

         If you are using the command line, each account name is followed by a number within square brackets, for example `[123]`. To select an account, enter its number.

    2.  Click **Next**.

7.  On the Select Directory for Symlinks page, select the **Don't create symlinks** check box and click **Next**.

8.  On the Select Local and Local Temp Directories page:

    1.  Select a local directory for storing the Gateway node’s working data.

    The directory that you select is stored in the Gateway’s Working Data Local Storage Directory property.

    2.  Select a directory for storing the Gateway node’s temporary data.

    The directory that you select appears in the node’s `bin/\*.vmoptions` file as `-Djava.io.tmpdir=<your_selected_directory>`. If you do not set the local temporary directory, your default Java temp directory is used. The default directory is not recorded in the node’s `bin/\*.vmoptions` file.

    3.  Click **Next**.

9.  On the Information page, review the installation settings and click **Next**.

    The installer installs all of the necessary files for your Gateway. You should see messages saying that the installer is retrieving the build number, extracting files, downloading Gateway files, and then finishing the installation.

10. When the installation is complete, click **Finish** to start the Gateway.

## Results

The Gateway runs as a daemon thread. You can view the Gateway online by going to **Configure Server** \> **API Gateways**.

The installation log file is located in `<gateway\_installation\_directory\>/tmp` and its file name starts with `i4j`.

# Next steps

Next you can install additional Gateway nodes.