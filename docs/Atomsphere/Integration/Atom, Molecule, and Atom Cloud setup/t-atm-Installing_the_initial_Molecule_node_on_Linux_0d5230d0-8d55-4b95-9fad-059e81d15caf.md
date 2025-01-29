# Installing the initial Molecule node on Linux

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0d5230d0-8d55-4b95-9fad-059e81d15caf"/>
</head>


Install the downloaded Linux version of the initial Molecule by running the executable file.

## Before you begin

Molecules require the Java 8 JRE or the Java 11 JDK. Boomi recommends Java 11. Boomi internally tested Amazon Corretto OpenJDK Java 1.8.0_382 and Amazon Corretto Open JDK 11.0.20.8.1.

Before completing these steps, download the Molecule installer and set up Linux shared directories. The installer gives you the option to select local directories for storing working data and temporary data. Boomi recommends that you select local directories. If you do select local directories, you must ensure that these directories exist before you run the installer. The installer does not create the directories for you.

The installer installs a private copy of Java 11 (11.0.20.8.1) for the Molecule to use. Alternatively, you can manage your own distribution of the Java 11 JDK by downloading the JDK from [Amazon](https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html) prior to installing the Molecule.

:::note

If you manage your own Java version instead of using the distribution provided by Boomi, Molecules using forked execution require the Java 8 JDK rather than the JRE. Java 11 is distributed as a JDK by default, so no additional considerations are required when using this version.

:::

:::note

If you choose not to use the user interface to install the initial Molecule node, use the console mode option (-c) of the install4j installer.

:::

## Procedure

1. Locate the Molecule installer file that you saved to your machine.

    After downloading the file, you can run the installation wizard from a command line, which Boomi recommends, or from the user interface.

2. Do one of the following:

    - If you want to run the installer in console mode from a command line, run the file with the `-c` flag:

        `sh /<path>/molecule_install64.sh -c`

    - If you install with the user interface, double-click the install file (you might need to change the properties to allow the file to run: `chmod +x molecule_install64.sh`) or run the file from the command line without the command-only flag:

        `sh /<path>/molecule_install64.sh`

3. If the installer cannot find the JRE on your machine, you receive a download prompt.

4. On the **Welcome** page, click **Next**.

5. On the **User Information** page:

    1. Select **User Name and Password** or **Token**, depending on how you want to authenticate the Molecule.

    2. Enter one of the following, depending on the selected option:

        - Your user name and password

        - A valid installer token

        You can generate installer tokens when you download the Molecule installer from the **Molecule Setup** dialog. When generating tokens, they are valid only for the specific account and Atom Clouds. Tokens expire after a set amount of time ranging from 30 minutes to 24 hours.

    3. Enter a name for the Molecule.

        The name is what you see when you go to **Manage** > **Atom Management**. The name defaults to the local host name, and you can change it to something more familiar.

        :::note

        The following characters are reserved and cannot be used in the name: asterisk (`*`), backslash (`\`), caret (`^`), colon (`:`), dollar sign (`$`), greater than (`>`), less than (`<`), percent (`%`), pipe (`|`), question mark (`?`), quotation mark (`"`), slash mark (`/`), Yen sign (`¥`).

        :::

    4. Click **Next**.

    You connect to the Boomi Enterprise Platform and the platform authenticates your credentials.

    If you specified a user name and password, the **Accounts** page appears.

    If you specified an installer token, the **Select Directory for Symlinks** page appears and you can skip to step 7.

6. (Optional) On the **Accounts** page:

    1. You see a list of accounts if your user name has access to multiple accounts. Next, select the account to which this is associated. This step typically applies only to partners.

        In the command line, each account name is followed by a number within square brackets, for example, \[123\]. To select an account, enter its number.

    2. Click **Next**.

7. (Optional) On the **Environment** page:

    1. (Optional) If you created environments already, a list appears. Select the one to which this Molecule is attached. If you do not select one, your new Molecule appears in the list of Unattached Atoms on the **Atom Management** page in theIntegration user interface.

    2. Click **Next**.

8. On the **Select Destination Directory** page, select the folder where you installed the Cloud Molecule and click **Next**.

9. On the **Select Local and Local Temp Directories** page:

    1. Select a local directory for storing the node’s working data.

        The directory that you select is stored in the **Molecule’s Working Data Local Storage Directory** property.

    2. Select a directory for storing the node’s temporary data.

        The directory that you select appears in the node’s bin/\*.vmoptions file as `-Djava.io.tmpdir=<your_selected_directory>`. If you do not set the local temporary directory, the platform uses your default temp directory. The default directory is not recorded in the node’s bin/\*.vmoptions file.

        **Note:** If you are using a Linux Molecule with forked execution, you cannot use a custom directory, such as `-Djava.io.tmpdir=<your_selected_directory>`.

    3. Click **Next**.

10. On the **Select Directory for Symlinks** page, select the **Don't create symlinks** check box and click **Next**.

11. On the **Information** page, review the installation settings, and click **Next**.

    The installer installs all of the necessary files for your Molecule. Messages appear that say that the installer is retrieving the build number, extracting files, downloading Molecule files, and then finishing the installation.

12. When the installation is complete, click **Finish** to start the Molecule.

## Results

The Molecule runs as a daemon thread. You can view the Molecule online by going to **Manage > Atom Management**.

The installation log file is located in `<molecule_installation_directory>/tmp` and its file name starts with `i4j`.

## Next steps

Next, you can install [additional nodes](./t-atm-Installing_additional_Molecule_nodes_on_Linux_3fec362e-e44e-4859-baa6-1882b6fb420a.md).