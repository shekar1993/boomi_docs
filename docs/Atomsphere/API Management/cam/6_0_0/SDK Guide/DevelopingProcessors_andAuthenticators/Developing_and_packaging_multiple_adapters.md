---
sidebar_position: 4
---
# Developing and Packaging Multiple Adapters

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-5eb35015-8369-4b6b-bdbd-25c06fe550f7"/>
</head>

A project in SDK terminology is a bundle that is packaged and deployed to the traffic manager, and show up as an OSGi bundle in the traffic manager. 

A bundle can either package a single adapter or multiple adapters per user choice. Adapters' boiler plate code can be generated using the [adapter creation script](../SDK%20Guide/Creating_an_adapter_project.md)

## Developing Multiple Adapters

- One project per adapter 

```./create-adapter.sh -p <New adapter project name> -c <New adapter full package name> -a <New Adapter class name>```

Example 

```./create-adapter.sh -p DemoProject1 -c com.tibco.apim.examples1 -a DemoAdapter1```

```./create-adapter.sh -p DemoProject2 -c com.tibco.apim.examples2 -a DemoAdapter2```

Running the above two commands create two new projects under the extract location `<extract location>/MasheryLocalSDK/` with one adapter class each. 

- Multiple adapters per project 

  1.  Create a new project with a new adapter class. 

    ```./create-adapter.sh -p <New adapter project name> -c <New adapter full package name> -a <New Adapter class name>```

  2.  Create an adapter class in the same project. 

    ```./create-adapter.sh -p <Existing adapter project name> -c <Existing/New adapter full package name> -a <New Adapter class name>```

Example 

```./create-adapter.sh -p DemoProject1 -c com.tibco.apim.examples1 -a DemoAdapter1```

```./create-adapter.sh -p DemoProject1 -c com.tibco.apim.examples1 -a DemoAdapter2```

Running these two commands creates a demo project with two adapter classes in the `package. com.tibco.apim.examples1`.

- Bundling multiple adapters 

  Use the `build-adapters.sh` script to compile; build jars and bundle them as a deployable artifact. The script ensures that the adapters are [packaged properly](../SDK%20Guide/Custom_adapters_and_processors_3_packaging_the_adapter.md).
