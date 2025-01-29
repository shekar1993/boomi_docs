# Upgrading an API Gateway to Java 11 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-bdcbc1ee-9505-489c-a600-86fdb7b10c2f"/>
</head>


You can upgrade an API Gateway so that it uses Java 11.

## Before you begin

:::note 

If a Gateway had Broker functionality that was retired on March 31 2023, the Broker feature must be removed prior to upgrading to Java 11. The update to Java 11 must be carried out manually if the Gateway ever had Broker functionality. For troubleshooting information, see [Gateway with Broker Functionality Removed Unable to Upgrade to Java 11](https://community.boomi.com/s/article/Gateway-with-Broker-Functionality-removed-unable-to-upgrade-to-Java-11)

:::

When you download and run the upgrade wizard to upgrade your API Gateway to a new version of Java, the wizard gives you the option to use either the Boomi-provided JDK or your own managed Java JDK from which your container will run. If you choose to use the Boomi-provided JDK, the full JDK is automatically downloaded to your local directory and your runtime container is updated to use the newest version of Java 11.

:::note 

Upon upgrading, the upgrader places the new Java files a new directory called jre_a (previously named jre_backup), and modifies the runtime's pref_jre.cfg file to make this the new active Java location. If jre_a is already the active Java, the upgrader places the new Java files in the jre directory and modifies the pref_jre.cfg file accordingly.

:::

However, choosing an external JDK allows you to select and use your own distributed version of Java 11 JDK in which your upgraded container will run. If you choose to use your own distribution of Amazon Corretto Java 11, you must install the Java 11 JDK before you can upgrade an API Gateway to use Java 11. You can download the Java 11.0.18.10.1 JDK [here](https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html).

:::note 

If you do not use the Boomi-provided JDK, you must run the upgrader and specify the external JDK during step 9 of the upgrade instructions detailed below. Neglecting to specify the JDK causes the API Gateway to fail at start up.

:::

## About this task

If the API Gateway that you are upgrading was configured to use a JDK (one that you, not the installer, installed) that is shared among other applications or programs, the upgrader places a private copy of the JDK in your API Gateway’s jre directory automatically. The private JDK takes precedence over the shared JDK. Therefore, any JDK configuration in your shared JDK, such as custom certificates, security JAR files, etc., needs to be reconfigured in the private JRE.

:::note 

For Linux, if you choose not to use the GUI to upgrade your Gateway, use the console mode option \(-c\) of the install4j installer.

:::

## Procedure

1.  **Optional**: If you previously upgraded to a new Java version, copy the full `<installation_directory>/jre` directory and the full install4j folder to different locations before running the upgrader.

2.  In the API Management user interface, navigate to **Configure Server** \> **Gateways**.

3.  From the table of available Gateways, click the name of the Gateway that you want to upgrade.

    The Gateway settings page opens.

4.  From the Gateway Information panel, click the **Update to use Java `<version number\>`** link.

    A confirmation dialog opens, showing which upgrade program you chose to download. If you see `gateway_upgrade64.exe`, this means that you are upgrading a 64-bit Gateway for Windows. If you are upgrading a 64-bit Gateway for Linux, the file is named `gateway_upgrade64.sh`.

5.  Click **Save File**.

6.  Locate and run the file that you downloaded.

    -   If you are using Windows or the Linux GUI, run the file and follow the wizard to complete the required steps.

    -   For Linux, if you want to run the installer in console mode from a command line, run the file with the `-c` flag:

        `sh /<path>/gateway_upgrade64.sh -c`

        Follow the prompts, which take you to step 7.

7.  On the Welcome to the Gateway Upgrade Wizard screen, click **Next**.

8.  On the Select the Directory Containing the Gateway screen, do one of the following:

    -   If you are using Windows or the Linux GUI, click **Browse** on the Select the Directory Containing the Gateway page, locate and select the directory in which the Gateway is installed. Click **Next**.

    -   If you are using the Linux command line, type the path to the Gateway installation directory. Make sure the upgrade program completes successfully, then skip to the last step.

9. **Optional**: On the Select the Directory for the External JDK screen, do one of the following:

    -   If you choose to use the Boomi-provided JDK, click **Next** without making any changes.
    -   If you want to use your own distributed version of Java 11, turn on the **Use External JDK?** box and click **Browse** to find the local folder containing a custom JDK that your selected container will run from once upgraded. Click **Next**.
10. On the Migrate Certificates screen, do one of the following:

    -   If you do not want to migrate custom certificates automatically, click **Next** without making changes.
    -   If you want to migrate custom certificates automatically, turn on the **Migrate existing custom certificates automatically** box and click **Browse** to locate the folder containing the JDK that your Gateway is using. Then, click **Next**.
11. The wizard begins upgrading your selected container according to the preferences you have set earlier in this topic. When the wizard completes successfully, click **Finish**.

## Results

Your Gateway is now successfully upgraded to a newer version of Java 11. To see that the upgrade is successful, view the **Java Version** field in **API Gateway settings** \> **Atom Management** \> **Startup Properties** panel for your selected container.