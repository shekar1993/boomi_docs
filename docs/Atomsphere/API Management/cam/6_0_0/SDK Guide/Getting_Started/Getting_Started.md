---
sidebar_position: 1
---

# Overview

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-004333ec-ded6-4c23-a201-9b720609b020"/>
</head>

This section provides an overview of the basic workflow of the Local Edition SDK. 

Estimated time to get started using the steps in this section: 30 minutes. 

## Before you begin

Before getting started with developing the Local Edition environment, carry out the following steps: 

1. Download the Local Edition artifact. 

2. Locate the `sdk.zip` file in the `TIB_mash-local_***.tar.gz`. 

3. Extract the contents of `sdk.zip` to a known location. 

4. In the terminal or command prompt, navigate to the folder of the extracted contents. 

  ``` /home/user/MasheryLocalSDK$ chmod +x gradlew create-adapter.sh build-adapter.sh```

:::note

Windows users can skip this step.

:::

## Procedure

1. [Creating an Adapter Project](../SDK%20Guide/Creating_an_adapter_project.md).

2. [Packaging the Adapter](../SDK%20Guide/Custom_adapters_and_processors_3_packaging_the_adapter.md).

3. [Including Adapter in TrafficManager](../SDK%20Guide/Including_adapter_in_trafficmanager.md).

   - Building the TrafficManager image

4. [Configuring Endpoints for Processors](../SDK%20Guide/Configuring_endpoints_for_processors.md).
