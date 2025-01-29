# Downloading the Cloud Molecule installer 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d2444c7b-98a2-47f6-a139-f8e09593ff4f"/>
</head>

 

Download the Cloud Molecule installer from the **Cloud Management** page.

## Before you begin

Before downloading the Cloud Molecule installer, you must add an Atom Cloud.

:::note

It is a best practice to download the latest version of the installer each time you want to create a new Cloud Molecule. Previously downloaded installers might not contain the latest optimizations and can result in errors.

:::

You can obtain and run the Atom Cloud Docker image directly from Docker Hub and use it manually. Boomi Docker Hub provides information about the Atom Cloud image, such as the version and how to use the image or use it in unprivileged mode manually. Also, there are instructions about configuring your Molecule utilizing a list of environment variables.

:::note

Docker image installations are no longer available from the Integration user interface.

:::

## Procedure

You can obtain and run the Atom Cloud Docker image directly from [Docker Hub](https://hub.docker.com/r/boomi/cloud/) and use it manually. [Docker Hub](https://hub.docker.com/r/boomi/cloud/) provides information about the Atom Cloud image, such as the version and how to use the image or use it in unprivileged mode manually. Also, there are instructions about configuring your Molecule utilizing a list of environment variables.

1. Go to the **Manage** > **Cloud Management**.

2. On the **Clouds** tab, click **Install Cloud Molecule**.

    The Cloud Setup dialog opens.

3. From the **Operating System** drop-down list, select the type of Cloud Molecule to install:

    - Windows 32bit - `https://platform.boomi.com/atom/cloud_install.exe`

    - Windows 64bit - `https://platform.boomi.com/atom/cloud_install64.exe`

    - Linux 32bit - `https://platform.boomi.com/atom/cloud_install.sh`

    - Linux 64bit - `https://platform.boomi.com/atom/cloud_install64.sh`

4. (Optional) Open the **Security Options** section to generate an installer token.

    You can use the token to install a Cloud Molecule or give the token to someone else to perform the installation. Using a token eliminates the need to specify credentials. When generating tokens, they are valid only for the specific account and Atom Clouds.

    1. From the **Choose a Cloud** drop-down list, select the Atom Cloud to which this Cloud Molecule is associated.

    2. From the **Token Valid For** drop-down list, select the length of time for which the token is valid.

        The minimum length of time is 30 minutes; the maximum is 24 hours.

    3. Click **Generate Token**.

        A unique installer token appears in the **Cloud Installer Token** field along with the expiration date and time of the token.

    4. Click ![Copy icon.](../Images/main-ic-two-documents_832db596-4895-4b34-943f-079de49b9525.jpg) to copy the installer token to the clipboard.

    5. Paste the token to another location for use when performing the installation.

    6. Click **Generate Another Token** to generate additional installer tokens.

5. Click **Download Installer**.

    A dialog opens that shows the name of the installation file you need for the selected operating system.

6. Click **Save File**.

    The installation file downloads to your machine.

7. (Optional) Give the installer token and the installation file to the person who performs the installation.

8. Follow the operating system-specific instructions linked below for installing an Atom Cloud on Windows or Linux.