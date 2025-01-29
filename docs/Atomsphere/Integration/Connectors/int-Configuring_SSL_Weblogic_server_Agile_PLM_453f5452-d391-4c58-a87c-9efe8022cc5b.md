# Configuring SSL on the WebLogic server hosting the Agile PLM application

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-453f5452-d391-4c58-a87c-9efe8022cc5b"/>
</head>


Once you have completed the steps to set up SSL for the Teqtron Agile PLM connector, configure SSL on the WebLogic Server that hosts the Agile PLM application.

1.  Access http://:7001/console/login/LoginForm.jsp

2.  Log in to the Admin Console.

3.  Select the server on which you want to configure the SSL certificate. Server –\> Click on the Keystore tab. By default it points to the Demo Certificates.

4.  From the dropdown list, select the "Custom Identity and Custom Trust" option. Enter the identity and trust keystore details.

5.  Configure the Identity of the Server:

    1.  Click on the SSL tab and enter the alias of the private key, e.g. mykey, and the key passphrase "Agile123"

6.  Configure SSL for Web Services:

    1.  Get the certification key, for example mykeystore.jks, that is generated using the steps in the basic SSL configuration section, and keep the file in a folder located on the machine where you want to run Web Services, for example "C:\\SSL".

    1.  Download the Web Services sample files from OTN.

    2.  Copy AgileAPI.jar file into "C:\\SSL\\WS\\".

    3.  Copy one of the sample Java files for creating an object, CreateObject.java in a location such as "C:\\SSL\\WS".

    4.  Compile the file as follows: C:\\SSL\\WS\>javac -classpath .; C:\\SSL\\WS\\AgileAPI.jar CreateObject.java

    5.  Run the sample as follows: C:\\SSL\\WS\>java -classpath .;C:\\SSL\\WS\\AgileAPI.jar - Djavax.net.ssl.trustStore=C:\\SSL\\mykeystore.jks - Djavax.net.ssl.trustStorePassword=Agile123 CreateObject

7.  Follow these steps to run Web Services sample code in an SSL environment:

    1.  Now the SSL is successfully configured for web services and the certificate can be imported to Boomi to be used in the Trust SSL Certificate property in Teqtron Agile PLM connector connection.