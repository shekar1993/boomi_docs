---
sidebar_position: 10
---

# Referring to Third-party Libraries with Dependency

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0b4098f5-1933-45a9-9684-c95fc8e7d6a4"/>
</head>

You can use third-party libraries for an adapter. Few third-party libraries have transitive dependencies. You have to include these dependencies in the lib folder. 

Gradle supports reference to third-party libraries and then resolve the transitive dependencies. 

To refer to third -party dependency for an adapter sub project: 

1. Navigate to the JCenter repository (`https://bintray.com/bintray/jcenter`) or to the Maven central repository (`https://mvnrepository.com/repos/central`). 

2. Select the required library and click **Gradle**.

3. Copy the dependency text. 

   The dependency text is in the form of compile `org.apache.commons:commons-lang3:3.9`

4. Open the `build.gradle` file of the sub-project in a text editor.

5. In the **dependencies** section, add the dependency text of step 3. 

   <!-- ![](Aspose.Words.c06dd9c3-b1a7-4292-bba7-c06774a8fba7.001.png) -->

:::note

Adding the direct dependency on jackson-bind, includes the transitive dependency for jackson-core and jackson-annotations.

:::
