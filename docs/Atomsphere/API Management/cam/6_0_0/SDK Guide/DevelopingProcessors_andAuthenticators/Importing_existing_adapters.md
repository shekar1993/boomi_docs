---
sidebar_position: 3
---

# Importing Existing Adapters

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d0f9b02a-8bda-4b07-bc20-e3a5a3f20fb7"/>
</head>

Adapters developed using versions prior to Local Edition 5.x SDK can be imported in the new version of the SDK. 

To import existing adapters: 

## Procedure

1. Create a new adapter project using the `create-adapter.sh/bat` script. 

:::note
   
The project name and other package name must be the same as the existing adapter project that you want to import.

::: 

2. Copy the existing source package into the newly created sub-project. 

3. Copy the third-party libraries into the lib folder of the sub-project. 

:::note

For an existing adapter being developed as a maven-based project, provide the Gradle form of dependencies in the sub-project's build.gradle file. For more information, see the [Referring to Third-Party Libraries](../SDK%20Guide/Referring_to_third_party_libraries.md) topic. 
