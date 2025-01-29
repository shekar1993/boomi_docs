# Oracle E-Business Suite V2 changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7ba9d23b-a1f9-49fc-a595-52cddea76926"/>
</head>


## Changelog

**2024-11 (Version 10, Current)**

- The connector now supports **DATE** type **OUT** parameter from the StoredProcedure execute call, using Boomi's default date format `yyyyMMdd HHmmss.SSS`.

**2024-05 (Version 8)**

- The PLSQL_EXECUTE operation is updated so that each output document returns with a separate error message.

- The integration process with the Connection Pool turned on and the Maintain Session flag checked will now run successfully.

**2024-04 (Version 7)**

- Updated the connector to use the new Oracle REST Service call in order to generate the profile.

- You can now use the Atom container properties to determine how large a payload to process, thus allowing for input file sizes greater than 1 MB.