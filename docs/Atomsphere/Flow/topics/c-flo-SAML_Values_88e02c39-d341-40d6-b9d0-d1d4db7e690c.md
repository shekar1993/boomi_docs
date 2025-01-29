# SAML (Deprecated) connector configuration values

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-88e02c39-d341-40d6-b9d0-d1d4db7e690c"/>
</head>

:::warning

This connector is now in Deprecated status. It is no longer available for new users and is not actively maintained. We will provide a minimum six-month notice before its retirement. We recommend upgrading to the newer supported version of this connector.

:::

The following configuration values can be defined during installation of the .

## SAML (Deprecated) connector configuration values

|Name|Type|Required or optional?|Description|
|----|----|---------------------|-----------|
|Assertion Consumer Service \(URL\)|String|Required |This value should be kept as: **|
|Certificate|Encrypted| Required|The certificate provided by your IdP used to verify the SAML assertion package signature. <br /> Some IdP's will allow you to upload your own certificate.|
|Compress request|Boolean|Optional |This value allows the SAML request to be automatically compressed, as some IdPs may require SAML request compression. -   This configuration value is set to `$False` by default. <br />Set the configuration value to `$True` to apply compression to the requests sent via the SAML service.|
|Debug|Boolean|Required |Provide more descriptive error messages to help when debugging your configuration. For example, set this value to $True to provide detailed error messages. Be sure to use this only when you are initially building and configuring your SAML integration, when descriptive errors are required to assist with the debugging process.|
|Identifier of the IdP entity \(URI\)|String|Required |The IdP Issuer in URI \(Uniform Resource Identifier\) format. For example: auth0.your\_user\_name.com. <br />This value needs to be a standard URI and will be provided by your IdP. Note that some IdP's allow you to type your own identity issuer.|
|Identifier of the SP entity \(URI\)|String|Optional |Most SAML servers require extra information included in the URL used to forward the request.Note that although this field is optional in , most identity providers do require this value to be defined. 1. You will need to know the SP Entity ID before you begin this workflow. <br />2. The service provider entity ID must be written exactly the same as it is in the metadata file.|
|Login URL|String|Required |The IdP login URL that the user is redirected to. This is provided by your IdP. For example: https://your\_user\_name.eu.auth0.com/samlp/avMOCgvc|
|No XML Validation|Boolean|Required |This value needs to be set as $True when a non valid XML assertion package is sent. For example, normally this value should be set as: $False.|
|SP Private Key|Encrypted| Optional|This value allows a certificate to be used to encrypt the SAML assertion if the IdP is configured to send encrypted assertions.|
|Supported Users|String|Optional |This value allows you to restrict access by user.As the is 'stateless' \(and therefore does not support querying your IdP for supported users\) you will need to manually specify the users here as a string value detailing the list of users you wish to restrict access for, providing an ID and name, with each user separated by a semi-colon. <br /> \[user ID\],\[user name\];\[user ID\],\[user name\]; <br /> For example: UserA@example.com,UserA;UserB@example.com,UserB;UserC@example.com,UserC; <br />Users in this list then become available for selection when setting up flow/swimlane permissions, such as in the **Users** section of the **Flow Properties** form. Users are not automatically granted permissions when they are added to this list.|
|Supported Groups|String|Optional |This value allows you to restrict access by group.As the is 'stateless' \(and therefore does not support querying your IdP for supported groups\) you will need to manually specify the groups here as a string value detailing the list of groups you wish to restrict access for, separated by a semi-colon. For example: Domain Users;Group-A;Group-B|