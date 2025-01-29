# Documenting a custom connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-dc182dd2-aafc-4860-888b-bbedfe6af8aa"/>
</head>


After you have built and tested your custom connector, document its functionality to help customers use it effectively. Useful documentation helps promote connector adaption, increases customer satisfaction, and helps reduce support and training costs.

Verify that you have built and thoroughly tested the custom connector.

Connector documentation typically consists of the following:

-   Release Notes — Verify that you version your connector and help customers understand the changes between releases. We recommend that you document new features and bug fixes. See the [What's new in AtomSphere for Mar 2020](https://help.boomi.com/bundle/release-notes/page/atm-Whats_new_in_Mar_2020_1a86c17b-4d92-4cc4-b1f5-cfbf2fd59c59.html) topic in the AtomSphere Documentation for samples.
-   User Documentation — Provide user documentation for each part of the custom connector, including the connector, connection, and operations. See the following connector documentation in the AtomSphere Documentation for samples:
    -   [Amazon S3 REST connector documentation](https://help.boomi.com/bundle/connectors/page/r-atm-Amazon_S3_REST_connector_bc37d2c7-9ea6-41b7-931b-9eb0c2a80640.html)
    -   [FTP \(Tech Preview\) connector documentation](https://help.boomi.com/bundle/connectors/page/int-FTP_SDK_connector_b2385da1-c374-481e-8ac4-f3777071365f.html)
    -   [Disk v2 connector documentation](https://help.boomi.com/bundle/connectors/page/int-Disk_v2_connector_d88d0ca9-b27e-44bd-ac32-dc1233e68123.html)
-   Examples — Examples are always helpful to explain why a feature is implemented. When possible, include examples in your connector documentation.

1.  Using Microsoft Word, open the Connector Documentation Template \(Connector\_Documentation\_Template.docx\) available from the Connector SDK artifacts on the public repository. When you created your local custom connector project using Maven, the documentation template is available to you locally.

2.  Follow the instructions in the template and the samples from this topic to document your connector.

3.  Verify and test your connector documentation against the functionality you have built into the connector.

4.  Submit the connector documentation to for review. This is a requirement as part of the public connector release process when [deploying a custom connector](https://developer.boomi.com/docs/Connectors/DeployConnectors/Versioning_and_releasing_connector).


[Deploying a custom connector](int-Versioning_and_releasing_your_custom_connector_caa33ca5-158f-4214-9934-724f4511185c.md#)