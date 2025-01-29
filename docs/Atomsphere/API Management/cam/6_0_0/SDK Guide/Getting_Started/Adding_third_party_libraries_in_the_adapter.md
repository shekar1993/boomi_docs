---
sidebar_position: 9
---

# Adding Third-Party Libraries in an Adapter

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-8d39c64e-b6d3-432e-b5eb-bbd3aff050e3"/>
</head>

You can use third-party libraries in an adapter. 

To enable third-party libraries in classpath and run time:

## Procedure

1. Copy the third-party jars into the adapter sub project/lib folder. 

2. In IntelliJ IDEA and Apache NetBeans, rebuild the main project from within the IDE for the newly added jars to be included. 

3. For Eclipse: Configure the build path of the project to add all the third-party jars. 

## Adding third-party library for Eclipse environment

1. In the project structure, right-click the **MasheryAdapter** folder, point **Build Path** and click **Configure Build Path**. 

2. Navigate to the library location and click **Add External JARs**

3. Select the files that you wish to add and click **Open**. 

4. The files are added to the library. Click **OK**.



