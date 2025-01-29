# Connector SDK demonstration connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2598de92-04a5-4a55-9ac3-e62dd86a78af"/>
</head>


The Connector SDK changelog contains changes to the SDK by version and provides you with an audit trail. Releases containing only internal changes are omitted from the changelog.

The service implementation serves content using the appengine-rest-server adapter written by the development team.

Downloading the demonstration connector

You can access the demonstration connector by downloading the `connector-sdk-demo-<version>.car`.zip. The zip file contains the demonstration \(demo\) connector and descriptor file which are ready to be uploaded to the platform and your account using the **Developer** tab.

-   To download the latest compiled version of the demo connector from Boomi's Amazon S3 repository, use the following URL: \).

-   To download the latest version of the demo connector source from Boomi's Amazon S3 repository, use the following URL: \).


## Implementation classes 

The demo connector includes the following Implementation classes:

-    — The Connector implementation, responsible for bootstrapping the other classes.
-    — Implementation of metadata browsing for the demo service.
-    — Implementation of connection for the demo service.
-    — Implementation of XML object joiner.
-    — Implementation of simple object that wraps the response from the demo service.
-    — Implementation of XML splitter.
-    — Implementation of object creation.
-    — Implementation of single object retrieval by ID.
-    — Implementation of multiple object retrieval using query filters.
-    — Implementation of existing object updating \(either partial or complete\).
-    — Implementation of object deletion.
-    — Implementation of metadata browsing for a custom execute operation.
-    — Implementation of a custom execute operation.
-    — Simple data structure to hold data for a browse-time cookie.
-    — Simple data structure to hold data for the response to a custom execute operation.

## Test classes 

The demo connector includes the following Test classes:

-   DemoBrowserTest.java — Unit tests for metadata browsing operations.
-   DemoOperationTest.java — Unit tests for object operations.
-   DemoExecuteEchoTest.java — Unit tests for custom execute operations.

## Demonstration connector descriptor examples 

The demonstration \(demo\) connector descriptor file \(`connector-descriptor.xml`\) provides examples of how you can configure connector operations:

-   [Shared operation configuration](int-demonstration_connector_descriptor_file_b8ca7a03-7ea8-4ad3-894b-ac2a4db6e578.md#section_pgk_mh2_1lb) — Example of configuration applied to multiple operation types.
-   [Query filter configuration](int-demonstration_connector_descriptor_file_b8ca7a03-7ea8-4ad3-894b-ac2a4db6e578.md#section_gn1_k32_1lb) — Example of Query filter configuration.
-   [Custom operation configuration](int-demonstration_connector_descriptor_file_b8ca7a03-7ea8-4ad3-894b-ac2a4db6e578.md#section_typ_1j2_1lb) — Example of custom operation configuration, the `@trackedDocument="user"` attribute allowing users to select the tracking direction for an operation, and various field type declarations.