# Deploying a custom PL/SQL API

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6227fc55-26ff-4dce-8f3c-25076a4842c6"/>
</head>


This procedure explains the steps for packaging and deploying a Custom PL/SQL API in the Oracle Integration Repository.

## Procedure

1.  Create the PL/SQL package in the database.

    Annotate the custom PL/SQL API definition based on the Integration Repository annotation standards for the PL/SQL interface type.

2.  Create the Integration Repository Loader File \(iLDT\) file in an SSH environment.

    Validate the annotated custom PL/SQL interface definitions against the annotation standards. This validation is performed by executing the Integration Repository Parser \(IREP Parser\), a design-time tool, to read the annotated files and then generate an iLDT file if no error occurred. For information on how to generate and upload the iLDT files, see [Generating and Uploading iLDT Files](https://docs.oracle.com/cd/E18727_01/doc.121/e12065/T511473T543283.htm#isgdg_nativecustgenildt).

3.  Upload the generated iLDT file to the Oracle Integration Repository \(App Server\):

    Upload the iLDT file to the integration repository and it will be displayed under the PL/SQL API interface type from the Integration Repository browser. To differentiate the custom interfaces from Oracle native packaged ones, all custom integration interfaces have Interface Source 'Custom' in contrast to Oracle interfaces with Interface Source 'Oracle' when you view them from the repository. See: [Uploading ILDT Files to Integration Repository](https://docs.oracle.com/cd/E18727_01/doc.121/e12065/T511473T543283.htm#T544136), Oracle E-Business Suite Integrated SOA Gateway Implementation Guide.

4.  Deploy the custom PL/SQL interface as REST services in the Oracle Integration Repository.

    Enter a unique service alias for each selected custom interface before deploying the service. See: [Deploying a Custom PL/SQL REST Web Services](https://docs.oracle.com/cd/E18727_01/doc.121/e12065/T511473T522190.htm#T626104), Oracle E-Business Suite Integrated SOA Gateway Implementation Guide

5.  Create the necessary security grants for the custom integration interfaces.

    See: [Creating Security Grants](https://docs.oracle.com/cd/E18727_01/doc.121/e12065/T511473T634173.htm#T634188), Oracle E-Business Suite Integrated SOA Gateway Implementation Guide.