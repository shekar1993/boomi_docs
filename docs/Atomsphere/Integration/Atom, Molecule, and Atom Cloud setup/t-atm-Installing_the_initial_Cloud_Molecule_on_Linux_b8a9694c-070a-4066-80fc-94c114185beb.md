# Installing the initial Cloud Molecule on Linux 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b8a9694c-070a-4066-80fc-94c114185beb"/>
</head>


Install the downloaded Linux version of the initial Cloud Molecule by running the executable file.

## Before you begin

Cloud Molecules require either the Java 8 JRE or Java 11 JDK. Boomi recommends Java 11. Boomi internally tested Amazon Corretto OpenJDK Java 1.8.0_382 and Amazon Corretto Open JDK 11.0.20.8.1.

Before completing these steps, download the Cloud Molecule installer and set up Linux shared directories.

The installer gives you the option to select local directories for storing working data and temporary data.

- Boomi recommends that you select a local directory for storing your working data. If you select a local directory, ensure that the directory exists before you run the installer. The installer does not create the directory for you.

- Do not select a local directory for storing your Cloud Molecule's temporary data. Configuring a custom temporary directory on Linux interferes with the Cloud Molecule's operation.

If you do not have Java 11 installed on your machine, you can download the installer file that includes a private copy of Java 11 (11.0.20.8.1) from the **Atom Management** page. You can alternatively manage your own distribution of the Java 11 JDK by downloading the JDK from [Amazon](https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html) prior to installing the Cloud Molecule.

:::note

Ensure that you use the Java binary to run the installer comes from the `<jdk>/jre/bin` directory and not the `<jdk>/bin` directory.

:::

If you choose not to use the user interface to install the initial Cloud Molecule, use the console mode option \(-c\) of the install4j installer.

## Procedure

1. Locate the Cloud Molecule installer file that you saved on your machine.

    After the file is downloaded, the installation wizard can be run using a command line, which recommends, or with the user interface.

2. Do one of the following:

    - To run the installer in console mode from a command line, run the file with the `-c` flag, such as:

        `sh /<path>/cloud_install64.sh -c`

    - If you use the user interface, double-click the install file (you might need to change the properties to allow the file to run: `chmod +x cloud_install64.sh`) or run the file from the command line without the command-only flag:

        `sh /<path>/cloud_install64.sh`

3. On the **Welcome** page, click **Next**.

4. On the **User Information** page:

    1. Select **User Name and Password** or **Token**, depending on how you want to authenticate the Cloud Molecule.

    2. Enter one of the following, depending on the selected option:

        - Type your user name and password

        - Type a valid installer token ID

        You can create installer tokens when you download the Cloud Molecule installer from the **Cloud Setup** dialog. After generating tokens, they are valid only for the specific account and Atom Clouds. Tokens expire after a set amount of time ranging from 30 minutes to 24 hours.

    3. Type a name for the Cloud Molecule.

        The Cloud Molecule name is what you see following the Atom Cloud name when you go to **Manage** \> **Atom Management**. The name defaults to the local host name, but you can change it to something more familiar.

    4. Click **Next**.

    You connect to the Boomi Enterprise Platform and it authenticates your credentials.

    If you specified a user name and password, the **Accounts** page appears followed by the **Clouds** page.

    If you specified an installer token, the **Select Directory for Symlinks** page appears and you can skip to step 7.

5. (Optional) On the **Accounts** page:

    1. If your user name has access to multiple accounts, a list appears. Select the account to the associated Cloud Molecule. This step typically applies only to partners.

        In the command line, each account name is followed by a number within square brackets, for example, \[123\]. To select an account, enter its number.

    2. Click **Next**.

6. On the **Clouds** page, select the Atom Cloud to associate with the Cloud Molecule and click **Next**.

    This Atom Cloud is the one that you added on the Atom Management page prior to downloading the Cloud Molecule installer.

7. (Optional) On the **Environment** page:

    1. If your account created environments, you see a list of them. Select the one to which this Cloud Molecule will be attached. If you do not select one, your new Cloud Molecule will appear in the list of Unattached Atoms on the Atom Management page in the user interface.

    2. Click **Next**.

8. On the **Select Destination Directory** page, select the folder where the Cloud Molecule is installed and click **Next**.

9. On the**Select Local and Local Temp Directories** page, select a local directory for storing the Cloud Molecule node’s working data and click **Next**.

    The directory that you select is stored in the Cloud’s Working Data Local Storage Directory property.

10. On the **Select Directory for Symlinks** page, select the **Don't create symlinks** check box and click **Next**.

11. On the **Information** page, review the installation settings and click **Next**.

    The installer installs all of the necessary files for your Cloud Molecule. Messages appear that say the installer is retrieving the build number, extracting files, downloading Cloud files, and then finishing the installation.

12. When the installation is complete, click **Finish** to start the Cloud Molecule.

## Results
You can view the Cloud Molecule online by going to **Manage** > **Atom Management**.

The installation log file is located in `<cloud_installation_directory>tmp` and its file name starts with `i4j`.

## Next steps

Next you can install [additional Cloud Molecules](./t-atm-Installing_additional_Cloud_Molecules_on_Linux_91eadc8f-6fb9-49b9-a2b1-c29e5015bb12.md).