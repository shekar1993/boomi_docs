---
sidebar_position: 2
---

# Creating an Adapter Project

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0eccd487-7117-494c-89b3-4dc49b32f6ad"/>
</head>

Describes how to create an adapter project. 

## Pre or Post Processor

### Procedure

1. To create an adapter project, use the create-adapter script in the terminal or command prompt. 

   - Command for Linux or MacOS X: 

   ```
   /home/user/MasheryLocalSDK$ ./create-adapter.sh --project-name MyCustomAdpater --adapter-type TrafficEventListener --adapter-name MyCustomProcessor --package-name com.companyname.apim.adapter 
   ```

   - Command for MS Windows: 

   ```
   C:\Users\Administrator\MasheryLocalSDK> create-adapter.bat --project-name MyCustomAdapter --adapter-type TrafficEventListener --adpater-name MyCustomProcessor --package-name com.companyname.apim.adapter
   ```

2. Change the project name, adapter name, and package name.
   Running the script for the first time downloads the necessary Gradle binaries.

3. Open the JAVA source *MyCustomProcessor.java* in a text editor and write the processing logic for pre and post processing.

## Custom Authenticator

### Procedure

1. To create an adapter project, use the create-adapter script in the terminal or command prompt. 

   - Command for Linux or MacOS X: 

   ```
   /home/user/MasheryLocalSDK$ ./create-adapter.sh --project-name MyCustomAdpater --adapter-type Authenticator --adapter-name MyCustomAuthenticator --package-name com.companyname.apim.adpater 
   ```

   - Command for MS Windows: 

   ```
   C:\Users\Administrator\MasheryLocalSDK> create-adapter.bat --project-name MyCustomerAdapter --adapter-type Authenticator --adapter-name MyCustomAuthenticator --package-name com.companyname.apim.adapter
   ```

2. Change the project name, adapter name, and package name.
   Running the script for the first time downloads the necessary Gradle binaries.

3. Open the JAVA source `MyCustomProcessor.java` in a text editor and implement authenticator logic.

:::note

For more information to edit in an IDE, see [Using the Adapter SDK in and IDE](../SDK%20Guide/Using_adapter_sdk_in_an_ide.md).

:::

For more information see the examples under section **Extending Functionality of the TrafficManager**.