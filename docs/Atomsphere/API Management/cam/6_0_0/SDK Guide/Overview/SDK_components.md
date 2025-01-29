---
sidebar_position: 3
---

# SDK Components

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-97fce628-ba02-410f-8da5-8d1a2a3bf5e4"/>
</head>

:::note

You must have Local Edition running. 

:::

The contents of the SDK are: 

- Scripts to create boilerplates for adapters 

- Script to create distribution packages 

- Examples 

- SDK libraries 

- Gradle build framework 

- Javadocs for the libraries 

```xml
|MasheryLocalSDK/
|--createadapterproject.gradle
|--pre-post-processor.template
|--libs/
|--org.slf4j.api_{version}.jar
|--com.mashery.util_{version}.jar
|--com.mashery.trafficmanager.sdk_{version}.jar
|--com.mashery.http_{version}.jar
|--docs/
|--javadoc/
|--create-adapter.sh
|--create-adapter.bat
|--build.subproject.gradle.template
|--build-adapter.sh
|--build-adapter.bat
|--LICENSE
|--authenticator-adapter.template
|--gradlew.bat
|--build.gradle
|--common.gradle
|--settings.gradle
|--gradle.properties
|--gradlew.sh
|--gradlew.bat
|--upgrade-sdk.sh
|--upgrade-sdk.bat
|--rollback-sdk.sh
|--rollback-sdk.bat
|--gradle/
|--wrapper/
|--gradle-wrapper.properties
|--gradle-wrapper.jar
|--examples/
```


