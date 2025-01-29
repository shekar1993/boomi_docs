# MIME properties

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a65497f4-4a14-40ce-9204-fb866081c952"/>
</head>

Set custom or predefined MIME property values on process steps used to get and set properties.

MIME properties are defined or arbitrary values that you can use to attach MIME document headers to documents within your integration process. For example, MIME properties can be set so that steps like the HTTP Client connector can identify a MIME document as it passes through a process. MIME properties can be set in the Set Properties step, and are retrieved from the parameter value list for most process steps.

There are 12 different types of MIME property values that a user can set on the Boomi Enterprise Platform. The following property values included in the are considered standard to MIME headers:

- MIME-Version
- Content-ID
- Content-Description
- Content-Transfer-Encoding
- Content-Type
- Content-Features
- Content-Disposition
- Content-Language
- Content-MD5
- Content-Base
- Content-Location
- Content-Alternative
- Content-Duration

There are three additional MIME property values that a user can set in a process: Name, MIME Document, and Custom. The MIME Name property value is used as a reference. The MIME document property can be set with two allowed static values, true or false, and is used to determine whether the document is of MIME type. The Custom option allows the user to define the MIME header at their own discretion.
