import OperationEnd from './_operationEnd.md'

# Microsoft Dynamics 365 for Finance and Operations operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f11e3d03-c6ac-4278-b3e6-1bd2ea1ae32d"/>
</head>


The Microsoft Dynamics 365 for Finance and Operations operation defines the interaction with the Microsoft Dynamics service's URL endpoint defined in the connection component. It represents a specific action \(Create, Delete, and so on\) to use against a Dynamics 365 entity object.

The Microsoft Dynamics 365 for Finance and Operations operation supports these actions:

-   **Inbound**: Supports Get and Query in all versions of Dynamics 365. The connector requires unique parameters at runtime to request data. Review the topic about parameter values to understand how to statically or dynamically define these values in a process for runtime. The Get action retrieves data for an entity specified as the resource with a unique identifier and is available only for entity objects. The Query action applies query options to set criteria for the data and entity properties to return and is available for entity objects.

-   **Outbound**: Create, Delete, Update. Use the Create action to generate and retrieve data from the Dynamics 365 for Finance and Operations service. You can use the Delete action to delete entities or individual properties of entities. Configure the Update action to Upsert objects. These actions are available for all entity objects in the connector. For all outbound operations, send request JSON data to the connector that corresponds with the defined JSON profile. Typically, request documents are the destination output of a map. You can also set parameters on the outbound connector's **Parameters** tab within the process to supply static or dynamic request values.

:::note

Not all actions are available for every object. You must create a separate operation component for each action and entity object combination required for your integration.

:::

In Dynamics 365 for Finance and Operations, objects are *entities* or *entity types*. A collection of objects is an *entity set*. Entity objects with simple names correspond to the entity set. Some entities may have concurrency protection in place.

## Metadata caching

When gathering metadata from the service, it saves the metadata in the connector cache and is reused for each operation to produce faster response times. If caching the metadata impacts the Atom's available memory, disable the metadata caching by setting the `com.boomi.connector.odata.disableMetadataCaching` container property to `true`.

## Concurrency 

When you enable concurrency, the server provides an @entityTag or ETag for the entity in Get, Delete, and Update actions. For example, you can use ETags in the header of documents offering web cache validation that compares ETag values in the cached version of an object to the server version. In addition, the server ensures that no one else has modified the entity since the last time you provided an ETag. To use concurrency, put a Set Properties step after the connector step in your process and add an ETag property.

## Get 

You can use the Get action with entity objects but not with link objects. For the Get action, you must supply the entity key as the objectId using either a value or a property value mapping. For example, you can specify a key consisting of a single ID as **9** or **ID=9**. If the key contains multiple values, delimit them with commas.

## Query 

You can use the Query action with entity objects and link objects. The Query action allows to look up object records based on specific search criteria. The Query action returns zero-to-many documents from a single Query request based on zero or more filters. After you select the Query connector action and use the **Import Wizard**, you can select fields, add query filters, and sort the results by field. The bottom half of the **Operation component** page contains tabs on which you configure these options.

The OData Query action supports the following filter operators:

-   Equal To \(eq\)

-   Not Equal To \(ne\)

-   Greater Than \(gt\)

-   Greater Than or Equal To \(ge\)

-   Less Than \(lt\)

-   Less Than or Equal To \(le\)


The OData Client connector automatically formats duration, binary, enum, and string values used in filters based on the construction rules in the OData 4.0 specification. You do not need to surround the values with quotes, or provide a prefix. For more information, see the linked topic.

OData supports a complex query language, and you can use a **Custom Expression** operator with filtering for more advanced operators such as arithmetic. To query an entity object and use the **Custom Expression** operator in a filter, navigate to and select **CustomFilter** in the **Filter Name** field. The **Operator** is set to **Custom Expression**.

![Operation component page Filter tab.](../Images/build-ps-odata-operation-filters-custom-filter-expression.jpg)

After selecting the custom filter and expression, you can use OData’s filter language to create, for example, a free-form filter in a parameter value. You must format the values based on the OData field data type using the construction rules in the OData 4.0 specification. For more information, see the linked topic. It substitutes the contents of the parameter value input into the filter expression according to the custom filter’s placement in the configured filter expression. For example, this filter: **AND\(LogicalFilter\(‘price’, ‘equals’, 5\), CustomFilter\(‘NOT\(name eq ‘Smith’\)’\)\)** results in the expression filter: **price eq 5 and NOT\(name eq ‘Smith’\)**.

When querying a link object, additional `SourceEntityKey/<KeyFields>` are available. Make the **SourceEntityKey** either a single top-level expression or nest it in a top-level AND expression to specify which entity’s links to query.

![Operation component page Filter tab.](../Images/build-ps-odata-operation-filters-source-entity-key-id.jpg)

In OData 4.0, you can select customFilter, which has a **Custom Expression** operator. Use this to configure a value to append as a filter to the URI. This functionality is similar to the **Custom Filter** in OData V2.0.

:::note

OData’s “NOT\(\)” unary query filter operator is not supported. As a workaround, use [DeMorgan's Laws](http://en.wikipedia.org/wiki/De_Morgan%27s_laws). OData’s precedence operator “\(\)” is supported only in custom filters.

:::

:::note

When you select fields to query, the field names append to the URL. As a result, it can exceed the browser’s URL length limit, which generates a 502 server error. If this happens, clear all fields.

:::

## Create 

You can use the Create action with entity objects and link objects.

When you use the Create action with entity profiles, use the `EntitySet/EntityType/Properties` element to specify values for properties of the entity being created. Use the `EntitySet/LinkEntityIds` element to create links to other entities. To create links from an element, it requires `EdmNavigationProperty` and `TargetEntityKey`. When you create an element, you can make links only to existing entities by using the `LinkEntityIds` element.

When you use the Create action with entity profiles, you also can establish an association to a collection of elements. For example, to create a supplier with a list of products that the supplier offers, use the `EntitySet/InlineEntityLinks` element to enumerate the collection of elements.

When you use the Create action with link profiles, supply the `EntitySet/SourceEntityKey` and `EntitySet/EdmNavigationProperty/TargetEntityKey`.

## Update 

Use the Update action with entity objects and link objects. Use the Update operation to perform basic updates to entity and link objects, to retrieve data from objects you are updating, or to Upsert objects. When you Upsert an object, it creates the entity and link if it does not exist, and simply updates the entity and link if it does exist.

**Note:** When employing the Update operation, you must populate the `@odata.editLink` field in the operation's request profile. Excluding the editLink value from the Update request profile results in an error. Alternatively, it returns the value automatically in Query and Get operations and is populated in the response profile for both operations by default.

When using the Update action with entity profiles, you can use the `LinkEntityIds` element to create links. To update existing links in the object, put them in the `Links` element of the source `EntityType`. You can use the `@entityTag` attribute on the `EntitySet/EntityType` element in Update actions.

When using the Update action with link profiles, supply the `SourceEntityKey` and `TargetEntityKey` for the link. For example, to remove the association between a source and a target entity, supply the `OldTargetEntityKey`.

## Delete 

Use the Delete action with entity objects and link objects.

When you use the Delete action with entity profiles, you must supply the entity key as input. You use the `@entityTag` attribute on the `EntitySet/EntityType` element in Delete actions. If the entity object is concurrency-enabled, you must put the `@entityTag` within brackets \(“\[ \]”\) at the end of the entity key. For example: **9\[W/0000020203X\]**.

When you use the Delete action with link profiles, you must supply the source and target entity keys, separated by a pipe character \(“\|”\). For example: **ID=0\|ID=8**. You can also use: **0\|8**. If the key contains multiple values, you must delimit them with a comma \(“,”\). For example: **ID=9\|ID=3,AD=4,AL=7**. You can also use: **9\|3,4,7**. Supplying the key property name in the key is optional.

## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The available objects vary based on the Dynamics 365 service to which you connect.

This table describes the default field definitions for each action type:

**Tracking Direction** - 

Select the document tracking direction for the operation, either **Input Documents** or **Output Documents**. This setting enables you to choose which document appears in **Process Reporting. Start** steps always track output documents regardless of your selection.

:::note

If the tracking direction is read-only, the feature to change the direction is either unavailable or the developer set the configuration to read-only. The default value you see shows you which document appears in **Process Reporting**.

:::

**Return Application Error Responses**   
This setting controls whether an application error prevents an operation from completing:

- If you clear the setting, the process stops and reports the error on the **Process Reporting** page.
- If you select the setting, processing continues and passes the error response to the next component processed as the connection output.

**Concurrency Mode** - 
  \(Get, Update, Delete\) This setting controls when the Dynamics 365 server updates concurrent objects:

 -   If match - \(On by default.\) Perform the action only if the current ETag matches my version.
 -   If none match - Perform the action even if the ETag does not match my copy.

**$skip** - 
  \(Query only\) Starts the query N entries into the set and returns only the remaining entries. Like all filters, $skip reduces processing time by limiting the number of returned records. For example, when querying a set of 10,000 records when $skip = 5000, it returns entries 5001-10,000. The default value of -1 turns off this option.

**$top** - 
 \(Query only\) Selects only the first N items of the set. Like all filters, $top reduces processing time by limiting the number of returned records. For example, when querying a set of 10,000 records when $top = 200, only entries 1-200 are returned. Combining the $skip = 5000 and $top = 200 examples, the query skips the first 5000 records then returns only the next 200 records \(5001-5200\). The default value of -1 turns off this option.
 
**Custom URL Query Parameters** - 
  \(Get, Query, Create, Delete, Update\) The properties you add \(a key, and value\) are added as parameters \(`query options` section in the following image\) to the query string of the URL in each request. This query allows you to customize or extend the way the operation interacts with the service and its data.

 ![Query options control the amount of data returned for the resource in the URL.](../Images/img-int-query_parameter_url_5f493b9b-b105-431c-b05f-c46962d3d119.jpg)

  Parameter example

 The `$filter` query parameter is automatically included by the connector in the request URL when a Query operation is runs with a configured filter. However, another query parameter, such as `cross-company`, is not automatically included, and you must add it based on your requirements. In this example, if you add `cross-company` as the key and true as the value, it adds the following URL query parameter at the end of the URL \(`query options` section in the previous image\) generated by the connector for the request:

 `cross-company=true`

 It adds the parameter after `&` or `$` in the URL, depending on whether there are previous URL query parameters.

 Property details

  -   You can override the properties using the Custom URL Query Parameters dynamic operation property.
  -   You cannot specify properties with blank keys or properties with repeated keys.
 -   The custom URL query parameters are encoded by the connector into percent-encoded \(URL-encoded\) UTF-8 representations based on the encoding mechanism provided by the Olingo library \(a custom variation of [RFC 3896](https://www.ietf.org/rfc/rfc3986.txt)\). The Query operation already applies the same encoding to URL query parameters for filters, field selection, sorting, top, and skip.
 -   For the Update operation, all property details apply regardless of the type of edit link provided in the input documents \(the edit link being absolute or relative\).
  -   For the Query operation, it prepares the request for the first page only to include the custom URL query parameters. The requests for subsequent pages use the links for next pages returned by the Dynamics services. Therefore, it may or may not include the custom URL query parameters set in the first request.
 -   Properties do not affect metadata requests.

## Custom fields 

The Dynamics 365 for Finance and Operations connector supports *dynamic properties* \(custom fields\). It includes the properties in an object, and the metadata does not declare them. The connector treats these properties as simple types. Because the dynamic properties are not declared, you cannot include them in the profile when importing. Instead, the output XML contains the properties if the server returns them. To process the dynamic properties, add profile elements to the profiles manually.


<OperationEnd />