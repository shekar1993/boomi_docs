# Rolling back an API Gateway to use a previous version of Java 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-5d167021-39e6-41e5-8b6c-d4272628f8d0"/>
</head>


You can roll back an API Gateway to the previous version of Java from the API Gateway settings page.

## About this task

If you upgraded an API Gateway to the latest Java version and want to roll it back to the previous version, you can use the Boomi Enterprise Platform. You can also use the AtomSphere API to roll back the Java version. For more information about this topic, see [Roll back Java operation](https://developer.boomi.com/api/platformapi#tag/JavaRollback). The **Roll back** option is not available if:

-   The API Gateway is offline

-   The container is not upgraded to the latest Java version

-   The container currently uses an external JRE location

-   There is no jre_a (previously named jre_backup) folder in the installation directory

## Procedure

1.  In the API Management user interface, navigate to **Configure Server** \> **Gateways** and then select the API Gateway for which you want to roll back the Java version.

2.  Select **Java Information** to open the Java Information panel and click **Roll back**.

    A dialog box opens and displays the current Java version and the roll back version.

3.  Click **Roll back** to confirm that you want to roll back the Java version.

    A pop-up dialog box displays in the bottom right corner of the screen, indicating that the roll back will begin shortly.