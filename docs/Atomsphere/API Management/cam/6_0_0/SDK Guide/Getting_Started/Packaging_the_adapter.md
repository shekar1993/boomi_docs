---
sidebar_position: 3
---

# Packaging the Adapter

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-9306a0af-6b3d-46a8-9634-09e4786dc8b7"/>
</head>

The build adapter script is used for compiling and packaging the adapter. 

To package the adapter: 

## Procedure

1. Run the build script. 

   - Command for Linux/MacOS:

   ```/home/user/MasheryLocalSDK$ ./build-adapter.sh```

   - Command for Windows:

   ```C:\Users\Administrator\MasheryLocalSDK> build-adapter.bat```

   The build script reports the compilation errors. In case of any reported errors, rerun the build script. 

2. The script generates an archive file under **MasheryLocalSDK > dist folder** with the name *tml-mashery-customer-extension.zip*. Upload this adapter to the Local Edition installer. 
