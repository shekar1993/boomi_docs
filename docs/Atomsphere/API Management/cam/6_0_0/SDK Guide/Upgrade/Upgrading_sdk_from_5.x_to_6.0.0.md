---
sidebar_position: 3
---

# Upgrading the Custom Adapters

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-aef0707c-fd56-443f-b8f3-7ff705ee3cbb"/>
</head>

These instructions apply if you are upgrading from Local Edition SDK 5.3.x, 5.4.x, 5.5.x,and 5.6.x. Pre-built adapters can also be upgraded from earlier versions of the Local Edition SDK. 

## Procedure

1. Extract the `TIB_mash-local_<product_version>.GA*.tar.gz` to your desired location and locate the `sdk.zip` file. 

2. Extract the contents of `sdk.zip` to a known location. 

1. Navigate to the location where you have extracted the `sdk.zip` file.

   Windows users can skip this step.

   In the command prompt, input the following: 

   -  `cd <extract location>/MasheryLocalSDK`

   - `chmod +x upgrade-sdk.sh`

1. In the command prompt, input the path of the extracted contents of . 

   For Windows: 

   ```xml
   C:\Users\Administrator\MasheryLocalSDK> upgrade-sdk.bat -d "<path of TML <product version from which you want to upgrade> MasheryLocalSDK folder>"
   ```

   For Linux/MacOS: 

   ```xml
   /home/user/MasheryLocalSDK$ ./upgrade-sdk.sh -d "<path of TML <product version from which you want to upgrade> MasheryLocalSDK folder>"
   ```

## What to do next

The libraries, documents, and example folder are updated. You must rebuild the processors and other extensions. 

To rebuild the adapters: 

```build-adapter.sh```

```build-adapter.bat```

## Rolling Back

The operation to rollback an upgrade to an earlier version of Local Edition SDK are similar to the upgrade path. 

Input the following as applicable. 

- For Windows: 

  ```C:\Users\Administrator\MasheryLocalSDK>./rollback-sdk.bat--destination-sdk-path<OLDER\_SDK\_PATH>--target-adapters<ADAPTER\_NAME\_1#ADAPTER\_NAME\_2>```

- For Linux/MacOS: 

  ```/home/user/MasheryLocalSDK$./rollback-sdk.sh--destination-sdk-path<OLDER\_SDK\_PATH>--target-adapters<ADAPTER\_NAME\_1#ADAPTER\_NAME\_2>```

:::note

Target adapter is optional. 

:::
