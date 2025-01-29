# Installing the initial Cloud Molecule on Windows 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-448cc859-8080-4eef-83df-8f8f89621ea0"/>
</head>


Use the Molecule Cloud installer to install the initial Molecule Cloud on your Windows operating system.

## Before you begin

Cloud Molecules require either the Java 8 JRE or Java 11 JDK. Boomi recommends Java 11. Boomi internally tested Amazon Corretto OpenJDK Java 1.8.0_382 and Amazon Corretto Open JDK 11.0.20.8.1.

Before completing these steps, download the Cloud Molecule installer and set up a Windows shared directory. Depending on the version of Windows you are running, you might require Administrator access to run the Cloud Molecule installer.

The installer gives you an option to select local directories for storing working data and temporary data. Boomirecommends that you select local directories. If you select local directories, ensure that these directories exist before you run the installer. The installer does not create the directories for you.

If you do not have Java 11 installed on your machine, you can download the installer file that includes a private copy of Java 11 (11.0.20.8.1) from the Atom > Atom Management page. You can alternatively manage your own distribution of the Java 11 JDK by downloading the JDK from [Amazon](https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html) prior to installing the Cloud Molecule.

:::note

Ensure that you use the Java binary to run the installer comes from the `<jdk>/jre/bin` directory and not the `<jdk>/bin` directory.

:::

:::caution Warning

If there are Unicode characters in the directory path to where you intend to install the Cloud Molecule, the installation will fail.

:::

## Procedure

1. After downloading the Cloud Molecule installer, run the installation file.

2. If you see a security verification window, click **Yes**.

    The Cloud Setup Wizard opens.

3. On the **Welcome** page, click **Next**.

4. On the **User Information** page:

    1. Select **User Name and Password** or **Token**, depending on how you want to authenticate the Cloud Molecule.

    2. Enter one of the following, depending on the option you selected:

        - Type your user name and password

        - Type a valid installer token

        You can create tokens when you download the Cloud Molecule installer from the **Cloud Setup** dialog. When generating tokens, they are valid only for the specific account and Atom Clouds. Tokens expire after a set amount of time ranging from 30 minutes to 24 hours.

    3. Enter a name for the Cloud Molecule.

        The Cloud Molecule name that you see following the Atom Cloud name when you go to **Manage** > **Atom Management**. The name defaults to the local host name, but you can change it to something more familiar.

        :::note

        The following characters are reserved and cannot be used in the name: asterisk (`*`), backslash (`\`), caret (`^`), colon (`:`), dollar sign (`$`), greater than (`>`), less than (`<`), percent (`%`), pipe (`|`), question mark (`?`), quotation mark (`"`), slash mark (`/`), Yen sign (`¥`).

        :::

    4. If the local machine uses an HTTP proxy to connect to the internet, select **Use Proxy Settings** and enter the appropriate host, port, user name, and password for the proxy.

        If you do not fill out the proxy settings now, you can add them later.

    5. Click **Next**.

    You connect to the Boomi Enterprise Platform and it authenticates your credentials.

    If you specified a user name and password, the **Accounts** page appears followed by the **Clouds** page.

    If you specify an installer token, the **Select Destination Directory** page appears and you can skip to step 7.

5. (Optional) On the **Accounts** page:

    1. If your user name has access to multiple accounts, a list of accounts appear. Select the account with which to associate this Cloud Molecule. This step typically applies only to partners.

    2. Click **Next**.

6. On the **Clouds** page, select the Atom Cloud with which to associate this Cloud Molecule and click **Next**.

    This step is the Atom Cloud that you added to the **Atom Management** panel before downloading the Cloud Molecule installer.

7. (Optional) On the **Environment** page:

    1. If you created environments for your account, a list of them appears. Select the environment with which to attach this Cloud Molecule. If you do not select one, your new Cloud Molecule appears in the list of **Unattached Atoms** on the **Atom Management** page in the user interface.

    2. Click **Next**.

8. On the **Select Destination Directory** page, select the installation directory and click **Next**.

    You must install the Cloud Molecule in the shared directory from the first machine using the FULL UNC path of the shared directory. For example, the directory name appears as: `//<host_name>/Share/<cloud_installation_directory>` where `<host_name` is the name of the machine. You also can choose a sub-directory of the UNC path.

9. On the **Select Local and Local Temp Directories** page:

    1. Select a local directory for storing the Cloud Molecule node’s working data.

        The directory that you select is stored in the Cloud’s Working Data Local Storage Directory property.

    2. Select a directory for storing the Cloud Molecule node’s temporary data.

        The directory that you select appears in the node’s bin/\*.vmoptions file as `-Djava.io.tmpdir=<your_selected_directory>` where `<your_selected_directory>` is the name of the top-level folder in the directory. If you do not set the local temporary directory, it uses your default Java temp directory. The default directory is not recorded in the node’s bin/\*.vmoptions file.

    3. Click **Next**.

10. On the **Select Start Menu Folder** page, modify any **Start** menu settings and shortcuts and click **Next**.

11. On the **Information** panel, review the installation settings and click **Next**.

    The all of the necessary files install for your Cloud Molecule.

12. After completing the installation, click **Finish** to start the Cloud Molecule.

## Next steps

You need to set up the Atom Cloud’s Windows service.