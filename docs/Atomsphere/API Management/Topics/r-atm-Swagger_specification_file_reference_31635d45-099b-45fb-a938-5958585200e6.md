# Swagger specification file reference

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-31635d45-099b-45fb-a938-5958585200e6"/>
</head>


Swagger objects in generated Swagger specification files are derived from the API Service component’s configuration settings and shared web server settings. Swagger objects not mentioned are not returned in generated Swagger specification files.

For general information about the JSON schema for Swagger specification files, refer to the [Swagger v2.0 specification](https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md).

:::note

For v3, refer to [OpenAPI Specification File Reference](/docs/Atomsphere/Integration/Event-based%20integration/int-Open_API_Specification_File_Reference_c22e9762-4e86-400f-a87a-3244c780e361%20copy.md).

:::

## General API metadata

General API metadata is returned in the root document object `swagger`.

`swagger` Field   
**Derivation**

`info`
<br />Child object:

**Field**   
**Derivation**

`title`
<br />**Title** in the API Service component’s **General** tab.


`description`
<br /> **Description** in the API Service component’s **General** tab.

`version`
<br />**Version** in the API Service component’s **General** tab.

`contact`
<br />Child object:

**Field**   
**Derivation**

`name`
<br />**Name** in the Published Contact Metadata section of the API Service component’s **Documentation** tab.


`url`
<br />**URL** in the Published Contact Metadata section of the API Service component’s **Documentation** tab.

`email`
<br />**Email** in the Published Contact Metadata section of the API Service component’s **Documentation** tab.

`license`
<br />Child object:

**Field**   
**Derivation**

`name`
<br />**Name** in the License Metadata section of the API Service component’s **Documentation** tab.

`url`
<br />**URL** in the License Metadata section of the API Service component’s **Documentation** tab.

`basePath`
<br />**Path to REST** in the API Service component’s **REST** tab.

`schemes`
<br />Ports enabled in the **General** tab in the Shared Web Server panel for the Atom serving the Swagger specification file.

-   “http” if an enabled port does not have SSL enabled.

-   “https” if an enabled port has SSL enabled.


Both values are returned if applicable.

`paths`
<br />Child object — see “`paths`: REST Route Descriptions” below.

`definitions`
<br />Child object — see “`definitions`: Request and Response Profile Schemas” below.

`responses`
<br />The HTTP response status codes and descriptions returned in this child Responses Definitions object are common to multiple API operations. Common HTTP response status codes and descriptions are not configurable in .

## `paths`: REST route descriptions

The description of each REST route defined in the API Service component’s **REST** tab is returned as a Path Item object whose name is derived from the configuration of the route’s specified operation as follows:

-   “/” \(slash\), followed by

-   **Resource**, followed by a space and

-   **Path to Resource**


    :::note
    
    Where multiple REST routes are distinguished only by HTTP headers specified for matching, a Path Item object is returned only for the most recently added route.

    :::

The description of a REST route’s specified operation is returned in an Operation object whose name is derived from the operation’s **HTTP Method** — for example, the object name “get” corresponds to the **HTTP Method** selection GET.

**Operation field**   
**Derivation**

`summary`
<br />Name of the Web Services Server listener **Process** component linked to the operation.

`description`
<br />Description of the REST endpoint.

`tags`
<br />A list of tags for API documentation control. Tags are used for logical grouping of operations by resources or any other qualifier.

`consumes`
<br /> [Internet media type](http://en.wikipedia.org/wiki/Internet_media_type) associated with the operation’s **Input Type**.

**Input Type**   
**`consumes` value**

**Single Data**
<br />application/binary

**Single XML Object**
<br />application/xml

**Multiple XML Objects**
<br />application/xml

**Single JSON Object**
<br />application/json

**Multiple JSON Objects**
<br />application/json

`produces`
<br />The operation’s **Result Content Type** \([Internet media type](http://en.wikipedia.org/wiki/Internet_media_type)\).

`parameters`
<br />In this child Parameter Definitions object, each of certain types of the operation’s input parameters is returned as a Parameter object.

A parameter’s type is returned in its `in` field. The following types of parameters are returned:

-   path

-   header

-   body


A path Parameter object is returned for each URL path parameter — that is, each portion of the operation’s **Resource Path** delineated in braces \{\}.

**path Parameter field**   
**Derivation**

`name`
<br />The corresponding delineated parameter name in **Resource Path**.

`required`
<br />Returned as “true”.

`type`
<br />Returned as “string”.

A header Parameter object is returned for

-   each of the operation’s defined **HTTP Headers**. These are the headers defined for routing purposes in the API Service component’s **REST** tab. Note, however, header *values* are not returned in the object because the Swagger specification does not provide a means for returning header values.

-   each of the **HTTP Headers**, defined in the API Service component’s **General** tab, whose values in REST and SOAP requests are potentially passed to the API’s linked listener process execution as dynamic document properties.


**header Parameter field**   
**Derivation**

`name`
<br />The header name.

`required`
<br />   
-   If returned as “true”, the header is of the type used for routing purposes.

-   If returned as “false”, the header is of the type used to pass dynamic document properties to the linked process execution.


`type`
<br />Returned as “string”.

A body Parameter object is returned if a request profile is specified for the operation.

**body Parameter field**   
**Derivation**

`name`
<br />Name of the **Request Profile** component.

`description`
<br />Description of the request profile component.

`schema`
<br />Reference to the Definition object in which the request profile is actually defined — see “`definitions`: Request and Response Profile Schemas” below..

`responses`
<br />In this child Responses object, a description of each of the responses returned by this operation is returned as a child Responses object whose name is an HTTP response status code. For all responses except 200, the field values refer to response definitions common to multiple API operations specified in the root `swagger` object’s `responses` list.

For the 200 response:

**200 response field**   
**Derivation**

`description`
<br />The response description is not yet configurable in and so always returns “Success”.

`schema`
<br />Reference to the Definition object in which the response profile is defined — see “`definitions`: Request and Response Profile Schemas” below.

## `definitions`: request and response profile schemas

The schema of each XML or JSON request and response profile for operations specified for REST routes defined in the API Service component’s **REST API** tab is returned as a Schema object whose name is the profile’s root element or object. If the name of the root element in an XML profile is the same as that of a root object in a JSON profile, “ns\#-” is prepended to the name of the schema returned for the XML profile. To ensure the name of the root element or object is properly returned as the name of the schema, you should URL-encode that name in the profile.

The returned schemas comply with the JSON Schema V4 standard.

In objects describing numeric elements or objects in profiles, the `type` and `format` field values are derived as follows:

**Numeric data type in profile**   
**Object fields**

**Float \(less than nine digits\)**
<br /> 
-   `type` — number
-   `format` — float

**Double \(nine or more digits\)**
<br /> 
-   `type` — number
-   `format` — double

**Integer \(32-bit, less than nine digits\)**
<br /> 
-   `type` — integer
-   `format` — int32

**Long \(64-bit, nine or more digits\)**
<br /> 
-   `type` — integer
-   `format` — int64

In objects describing date/time elements or objects in profiles, the `type` and `format` field values are derived as follows:

**Date/time data type in profile**   
**Object fields**

**Date \(matching the full date format per [RFC-3339](https://www.ietf.org/rfc/rfc3339.txt) — YYYY-MM-dd\)**
<br />  
-   `type` — string
-   `format` — date

**DateTime \(date format not matching the full date format per [RFC-3339](https://www.ietf.org/rfc/rfc3339.txt)\)**
<br />
-   `type` — string
-   `format` — date-time

In objects whose **Comments** fields are specified in the profile, the comments are present in the `description` field value.

In objects describing looping and repeating elements in XML profiles, the `minItems` field value is derived from the element’s **Min Occurs** setting.

In objects describing elements and attributes in XML profiles, the XML child object’s fields are derived as follows:

**XML child object field**   
**Derivation**

`namespace`
<br />Namespace defined in the profile’s **Types** tab.

`prefix`
<br />Platform - assigned prefix in the form ns\#, where \# corresponds to the matching namespace. Prefix assignments specified in the profile’s **Types** tab are disregarded. If this object’s parent is a reference to another XML element or attribute definition, “nons” \(no namespace\) is prepended to the reference.

`attribute`
<br />Omitted for elements. Returns “true” for attributes.

The `wrapped` field is not returned.

## `securityDefinitions` and `security`: Shared Web Server basic authentication

If the shared web server responding to the Swagger specification file request is configured to require Basic authentication, the following objects are returned:

-   Security Definitions \(`securityDefinitions`\) — A single definition is returned in this object. The definition name — “basic” or “oauth2” — is derived from the **Authentication Type** setting in the General tab of the Shared Web Server panel. A value of “basic” is returned in the definition’s `type` field regardless of the **Authentication Type** setting.

-   Security Scheme \(`security`\) — This object is a stub. The object name — “basic” or “oauth2” — is derived from the **Authentication Type** setting in the General tab of the Shared Web Server panel.


:::note

The definition name in `securityDefinitions` may not match the `security` object name if the user has access to the Atom from two different ports with two different security methods. This is due to caching of the Swagger specification file.

:::