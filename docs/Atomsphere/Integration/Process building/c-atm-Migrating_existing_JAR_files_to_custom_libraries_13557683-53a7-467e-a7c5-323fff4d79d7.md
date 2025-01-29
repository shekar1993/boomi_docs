# Migrating existing JAR files to use custom libraries

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-13557683-53a7-467e-a7c5-323fff4d79d7"/>
</head>


Existing JAR files that were placed in `/userlib` folders manually continue to work as they did before the introduction of Custom Library components. However, as a best practice, Boomi recommends that you migrate any manually deployed JAR files to custom libraries that can be managed through the UI.

To make existing JAR files known to Custom Library, follow the normal custom library deployment flow:

-   Upload copies of the JAR files into your account library.

-   Create one or more Custom Library components containing the JAR files.

-   Deploy the Custom Library components to the appropriate Atom or environment.


When the JAR files are deployed, checks for existing files of the same name:

-   If the file name and the contents of the file are the same, the file is not replaced.

-   If the file name is the same but the contents are different, the new JAR file is deployed with a unique suffix to avoid a naming conflict. The existing file is marked for deletion.

In either case, the JAR file is now recognized by Custom Library and can be managed through the UI.

:::note

Before you deploy a new version of an existing JAR file, Boomi recommends that you upload that file to and create a Custom Library component. If the JAR file is not part of a Custom Library, it cannot be deployed or undeployed through the UI. You will have to continue maintaining that JAR file manually.

:::