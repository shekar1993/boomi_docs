# Installing the initial Molecule node on Windows

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4007a6f9-6906-4673-a015-9c3990594ae2"/>
</head>


Install the downloaded Windows version of the Molecule by running the executable file.

## Before you begin

Molecules require the Java 8 JRE or the Java 11 JDK. Boomi recommends Java 11. Boomi internally tested Amazon Corretto OpenJDK Java 1.8.0_382 and Amazon Corretto Open JDK 11.0.23.9.1.

Before completing these steps, download the Molecule installer and set up a Windows shared directory. Depending on the version of Windows you are running, you might require Administrator access to run the Molecule installer.

The installer installs a private copy of Java 11 for the Molecule to use. Alternatively, you can manage your own distribution of the Java 11 JDK by downloading the JDK from [Amazon](https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html) prior to installing the Molecule.

:::note

If you manage your own Java version instead of using the distribution provided by Boomi, Molecules using forked execution require the Java 8 JDK rather than the JRE. Java 11 is distributed as a JDK by default, so no additional considerations are required when using this version.

:::

The installer gives you the option to select local directories for storing working data and temporary data. Boomi recommends that you select local directories. If you select local directories, you must ensure that these directories exist before you run the installer. The installer does not create the directories for you.

:::caution Warning

If there are Unicode characters in the directory path to where you intend to install the Molecule, the installation will fail.

:::

## Procedure

1. After downloading the Molecule installer, run the executable file.

2. If you see a security verification window, click **Yes**.

    The **Molecule Setup Wizard** opens.

3. If the installer cannot find the JRE on your machine, you receive a download prompt. Download the JRE to your machine.

4. On the **Welcome** page, click **Next**.

5. On the **User Information** page:

    1. Select **User Name and Password** or **Token**, depending on how you want to authenticate the Molecule.

    2. Enter one of the following, depending on the selected option:

        - Your user name and password.

        - A valid installer token.

        You can generate installer tokens when you download the Molecule installer from the Molecule Setup dialog. When generating tokens, they are valid only for the specific account and Atom Clouds. Tokens expire after a set amount of time ranging from 30 minutes to 24 hours.

    3. Enter a name for the Molecule.

        The name is what you see when you go to **Manage** > **Atom Management**. The name defaults to the local host name, and you can change it to something more familiar.

        :::note

        The following characters are reserved and cannot be used in the name: asterisk (`*`), backslash (`\`), caret (`^`), colon (`:`), dollar sign (`$`), greater than (`>`), less than (`<`), percent (`%`), pipe (`|`), question mark (`?`), quotation mark (`"`), slash mark (`/`), Yen sign (`¥`).

        :::

    4. (Optional) If the local machine uses an HTTP proxy to connect to the internet, select the **Use Proxy Settings** check box and enter the appropriate host, port, user name, and password for the proxy.

        If you do not fill out the proxy settings now, you can add them later.

    5. Click **Next**.

        You connect to and the platform authenticates your credentials.

        If you specified a user name and password, the **Accounts** page appears.

        If you specified an installer token, the **Select Destination Directory** page appears and you can skip to step 7.

6. (Optional) On the **Accounts** page:

    1. If your user name has access to multiple accounts, you see a list of accounts. Select the account to which this is associated. This step typically applies only to partners.

    2. Click **Next**.

7. (Optional) On the **Environment** page:

    1. (Optional) If you have created environments already, a list appears. Select the environment to which this Molecule is attached. If you do not select one, your new Molecule appears in the list of **Unattached Atoms** on the **Atom Management** page in the Integration user interface.
   
    2. Click **Next**.

8. On the **Select Destination Directory** page, select the installation directory and click **Next**.

    You must install the in the shared directory from the first machine. The directory name must look like this: `//<host_name>/Share/<molecule_installation_directory>`.

9. On the **Select Local and Local Temp Directories** page:

    1. Select a local directory for storing the Molecule node’s working data.

        The directory that you select is stored in the Molecule’s **Working Data Local Storage Directory** property.

    2.  Select a directory for storing the Molecule node’s temporary data.

        The directory that you select appears in the node’s `bin/*.vmoptions` file as `-Djava.io.tmpdir=<your_selected_directory>`. If you do not set the local temporary directory, it uses the default temp directory. The default directory does not record in the node’s `bin/*.vmoptions` file.

    3. Click **Next**.

10. On the **Select Start Menu Folder** page, modify any **Start Menu** settings and shortcuts and click **Next**.

11. On the **Information** page, review the installation settings and click **Next**.

    The installer installs all of the necessary files for your Molecule.

12. When the installation is complete, click **Finish** to start the Molecule.

## Results

The Molecule runs as a Windows service. You can view the Molecule online by going to **Manage > Atom Management**.

## Next steps

Next, you need to set up the Molecule’s Windows service.