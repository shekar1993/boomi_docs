# Installing a local Atom on Linux 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4bcd02f0-6f21-444c-a861-cbdfba8f1550"/>
</head>


Install the downloaded Linux version of the local Atom by running the executable file.

## Before you begin

Atoms require the Java 8 JRE or the Java 11 JDK. Boomi internally tested Amazon Corretto OpenJDK Java 1.8.0_382 and Amazon Corretto Open JDK 11.0.20.8.1.

The installer installs a private copy of Java 11 (11.0.20.8.1) for the Atom to use. Alternatively, you can manage your own distribution of the Java 11 JDK by downloading the JDK from [Amazon](https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html) prior to installing the Atom.

Before completing these steps, download the local Atom installer.

:::note

If you choose not to use the user interface to install a local Atom, you can use the console mode option (-c) of the install4j installer.

:::

## Procedure

1. Locate the Atom installer file that you downloaded and saved to your computer.

    After downloading the file, you can run the installation wizard using a command line, which Boomi recommends, or with the user interface.

2. Do one of the following:
   
   - If you want to run the installer in console mode from a command line, run the file with the `-c` flag:

     `sh /<path>/atom_install64.sh -c`

   - If you install with the user interface, double-click the installation file \(you might need to change the properties to allow the Linux shell script to run: `chmod +x atom_install64.sh`\) or run the file from the command line without the command-only flag:

     `sh /<path>/atom_install64.sh`

3. If the installer cannot find the JRE on your computer, you receive a prompt to download the file.

4. On the Welcome page, click **Next**.

5. On the User Information page, do the following:

    1. Select **User Name and Password** or **Token**, depending on how you want to authenticate the Atom.

    2. Enter one of the following, depending on the option you selected:

        - Your user name and password

        - A valid installer token

        When downloading the Atom installer from the Atom Setup dialog, you can generate installer tokens. A token is valid only for the account that creates it. Tokens expire after a set time ranging from 30 minutes to 24 hours.

    3.  Enter a name for the Atom.
    
        The Atom name is the one you see when you go to **Manage** > **Atom Management**. The name defaults to the local host name, but you can change it to something more familiar.

        :::note

        The following characters are reserved and cannot be used in the name: asterisk (`*`), backslash (`\`), caret (`^`), colon (`:`), dollar sign (`$`), greater than (`>`), less than (`<`), percent (`%`), pipe (`|`), question mark (`?`), quotation mark (`"`), slash mark (`/`), Yen sign (`¥`).

        :::

    4.  Click **Next**.
    
    You connect to with your credentials authenticated. The Accounts page appears if you specify a user name and password. If you specified an installer token, the Select Directory for Symlinks page appears, and you can skip to step 7.

6. (Optional) On the Accounts page:

    1. (Optional) If your user name has access to multiple accounts, you see a list of accounts. Select the account to which you associated this Atom. This step typically applies only to partners.

        If you are using the command line, each account name is followed by a number within square brackets, for example, \[123\]. To select an account, enter its number.

    2. Click **Next**.

7. (Optional) On the Environment page:

    1. A list of environments appears if created for your account. Select the environment to which you attach the Atom. If you do not select an environment, your new Atom appears in the list of Unattached Atoms on the Atom Management page in the user interface.

    2. Click **Next**.

8. On the Select Destination Directory page, select the folder where you installed the Cloud Molecule and click **Next**.

9. On the Select Directory for Symlinks page, select **Don't create symlinks** and click **Next**.

10. On the Information page, review the installation settings and click **Next**.

    After installing all of the necessary files for your Atom, messages appear saying that the installer is retrieving the build number, extracting files, downloading Atom files, and finishing the installation.

11. When the installation is complete, click **Finish** to start the Atom.

## Results

The Atom runs as a daemon thread. You can view the Atom online by going to **Manage** \> **Atom Management**.

The installation log file is located in `<atom\_installation\_directory\>/tmp` and its file name starts with `i4j`.

## Next steps

See the topics about managing Atoms, Molecules, and Atom Clouds. You might want to modify how the Atom runs, change default settings, or even remove the Atom.