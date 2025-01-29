# JSON schemas in Integration

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5ee2b652-c4bf-428d-832d-13b9fdf45828"/>
</head>



Learn how translates imported JSON schemas to build a JSON profile component in .

JSON Schema is a specification for JSON-based format and defines how JSON data or documents should be structured.

In Integration, JSON profiles can be created by importing a JSON schema file. From a given JSON schema, the profile is automatically generated with data elements, objects, and many of the constraints defined within the JSON schema definition. This can be done via the [JSON profile component Import Wizard](int-Importing_a_json_schema_into_a_json_profile_117640c6-8f4b-41a2-a9db-7ae016063c64.md) in Integration, as part of connector operation's Import Wizard \(if the endpoint API uses JSON\), or when importing a JSON Swagger definition through an API Service component.

**Supported JSON schema versions**

Boomi supports the following versions of the [JSON Schema Specification](https://json-schema.org/specification-links.html):

-   Draft 3
-   Draft 4

:::note

Keywords supported in versions later than Draft 4 of the JSON Schema specification are either imported according to Draft 4 specifications or are ignored. Unsupported keywords are detailed in the final section of this topic.

:::

## Understanding how JSON schemas are interpreted in Integration


The following tables describe JSON data structures and how translates imported schemas to populate the Element Details tab of the resulting JSON profile component.

**Basic properties**

| Basic Property type | Sample schema                                              | JSON profile component                                                                                   |
|---------------------|------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| General             | ```  "my_favorite_property": { "description": "Best property ever", "type": "string" } ``` | For all properties: - The property name of the imported schema is set as the Value Name field value in the resulting JSON profile. For example, the property name `my_favorite_property` in our sample schema is automatically set as the Value Name value in the JSON profile component. - The Value Type field in the JSON profile is always set to the Simple option. If specified, the `description` value of the imported schema populates the Comments field in the resulting JSON profile. For example, the string `Best property ever` from our sample schema automatically populates the Comments value in the profile. **Note:** Comments longer than 4,000 characters are truncated in the user interface. |
| String              | ```  "company_name": { "type": "string", "minLength": 4, "maxLength": 100 } ``` | For string-type properties (except those with specific date format, see below): - If either `minLength` or `maxLength` are specified in the imported schema, the Field Length Validation box in the resulting JSON profile is automatically turned on. - The `minLength` value of the imported schema is set as the Min Length value in the resulting JSON profile. - The `maxLength` value of the imported schema is set as the Max Length value in the resulting JSON profile. - The Data Type field in the JSON profile is always set to the Character option. All other keywords such as `pattern` and `format` (other than for dates) are not supported. |
| Date                | ```  "ship_date": { "type": "string", "format": "date-time" } ``` | For string-type properties where the JSON schema `format` value is set to `date-time`, `time`, or `date`: - The Data Type field in the resulting JSON profile is always set to the Date/Time field option. - The Date Format field in the resulting JSON is based on the value of `format` in the JSON schema: - If set to `date-time` in the schema, the profile sets Date Format to `yyyy-MM-dd’T’HH:mm:ss.SSSZZ`. - If set to `time` in the schema, the profile sets Date Format to `HH:mm:ss.SSSZZ`. - If set to `date` in the schema, the profile sets Date Format to `yyy-MM-dd`. |
| Number              | ```  "order_amount": { "type": "number" } ``` | For `number` or `integer` type properties in the JSON schema: - The Data Type field in the resulting JSON profile is always set to the Number option. - The Number Format field in the resulting JSON has a default value of an empty string (""). All other keywords including `minimum, exclusiveMinimum, maximum, exclusiveMaximum, multipleOf` are not supported. |
| Boolean             | ```  "rush_order": { "type": "boolean" } ``` | For `boolean` type properties: - The Data Type field in the resulting JSON profile is always set to the Boolean option. |

 
 
  
  
  **Arrays**

| Array type                | Sample schema                                                                                   | JSON profile component |
|--------------------------|-------------------------------------------------------------------------------------------------|------------------------|
| Array of basic properties| ``` "tracking_numbers": { "type": "array", "items": { “type”: "string" }, "minItems": 1, "maxItems": 10 } ``` | For `array` type properties: - The property name of the imported schema is set as the **Value Name** field in the resulting JSON profile. For example, the property name `tracking_numbers` in our sample schema is automatically set as the **Value Name** field of resulting JSON profile component. Property names are required. - The **Value Type** field in the resulting JSON profile is populated with Array \(Repeating\). - The **Array Name** field in the resulting JSON profile is populated with Array. - Array Elements can be simple or object. If the array element is a simple unnamed property, it is named a static value like "item1" in the resulting JSON profile. - If `“minItems”: 0` in the schema, the **Min Occurs** field value in the resulting JSON profile is set to 0. - If `minItems` is set to a value greater than 0 in the schema, the **Min Occurs** field value in the resulting JSON profile is set to 1. For example, if `“minItems”: 2`, **Min Occurs** is still set to 1 in the profile. - If `“maxItems”: 1` in the schema, the **Max Occurs** field value in the resulting JSON profile is set to 1. - If `maxItems` is set to a value greater than `1` in the schema, the **Max Occurs** field value in the resulting JSON profile is set to unbounded. For example, if `“maxItems”: 12`, **Max Occurs** is still set to unbounded in the profile. - The **Required** option in the resulting profile is automatically turned on if `minItems` is set to a value greater than `0` in the schema. All other keywords including `unique` and `additionalItems` are not supported. |
| Array of objects         | ``` “addresses”: { "type": "array", “Items”: { $ref”, “#/definitions/address” } } ``` | For `array` type properties: - The same rules and behaviors apply as those described above for **Array of basic properties**, with the exception that the **Value Type** field in the resulting profile is set to **Object**. When used in an array, the object definition is typically described elsewhere in the schema document and referenced using a pointer, as demonstrated in our sample schema. See the sections **Objects** and **Object References** below for more information. |


**Objects**

Schema objects represent logical groupings of properties to model data objects, and are the main data structures you use when working with JSON schemas. For example, it is common for APIs to encapsulate properties in an object. The following table describes how translates objects in imported schemas to build the resulting JSON profile component. Information about how object references are supported within the context of are detailed later in this topic.

:::note

Only root-level objects are available for selection during the Import Wizard process from which to build the JSON profile component.

:::

| Object type | Sample schema                                                                                                                                                | JSON profile component |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|
| General     | ```  { "title": "Customer Order", "description": "object sample", "type": "object", "properties": { "company_name": { "type": "string", "minLength": 4, "maxLength": 100 }, "ship_date": { "type": "string", "format": "date-time" }, "order_amount": { "type": "number" }, "rush_order": { "type": "boolean" }, "tracking_numbers" : { "type": "array", "items": { "type": "string" }, "minItems": 1, "maxItems": 10 } } } ``` | For all definitions of `object` type: - The `title` property of the imported schema is set as the **Value Name** field in the resulting JSON profile. For example, the `title` property `Customer Order` in our sample schema is automatically set as the **Value Name** field of the JSON profile component. - The **Value Type** field in the resulting JSON profile is set to Object. - The **Comments** field in the resulting JSON profile derives from the `description` field of the imported schema, if specified. **Note:** Comments longer than 4,000 characters are truncated. - The resulting profile is generated with an Object element, where the **Object Name** field is set to a static value of Object. - Child data elements in the resulting JSON profile are created for properties defined within the `properties` element of the JSON schema. All other keywords including `minProperties`, `maxProperties`, `propertyNames`, `additionalProperties`, `patternProperties`, `dependencies` are not supported. |


**Object references**

It is common for schema objects to reference other objects. This allows schemas to avoid redundancy of definitions and facilitate reuse and simplified maintenance. Such object references may be defined within the same schema file \(typically within a “definitions” section\) or in a separate schema file. The Import Wizard supports $ref, Id, file and URL references.

When using a file $ref, supports only the file name but not relative paths. For example, the file name definitions.json is accepted, but the Import Wizard ignores the file path /directory1/directory2/definitions.json.

When using a URL $ref, the JSON schema Import Wizard attempts to follow the references automatically if they are publicly accessible. If the Import Wizard cannot follow the reference, the Import Wizard prompts you to upload a file for the given reference. For example, if the URL boomi.com/geo.json is not reachable, the Import Wizard gives you the option to provide the missing geo.json schema to continue the JSON profile's generation. If you do not have the external schema file, you can choose to ignore it and the resulting property is treated as an empty object. However, keep in mind the resulting profile component structure may be incomplete for your needs.

:::note

Recursively referenced objects are supported, and up to 3 levels are imported into the profile.

:::

The following is a typical example of reference to object definitions within the same JSON schema file:

``` 
{
"$schema": "http://json-schema.org/draft-04/schema#",
"title": "Customer Order",
"description": "Customer Order for direct and referral sales",
"type": "object",
"properties": {
...
"billing_address": { "$ref": "#/definitions/address" },
"shipping_address": { "$ref": "#/definitions/address" }
},
"definitions": {
"address": {
"type": "object",
"properties": {
"street_address": { "type": "string" },
"city":           { "type": "string" },
"state":          { "type": "string" }
}
}
}
}

```

Alternatively, if the definition for `address` from our example is contained in another schema file, the references may look like the following.

File:

`"billing_address": { "$ref": "common_objects.json#/address" }`

URL:

`"billing_address": { "$ref": "https://www.myserver.com/schemas/common_objects.json#/address" }`

For more information about JSON schema structuring, see the article [Structuring a complex schema](https://json-schema.org/understanding-json-schema/structuring.html).

## Considerations when importing a JSON schema to build a JSON profile

When importing a JSON schema using the JSON profile Import Wizard, there are a few things to keep in mind:

-   During the import process, you are prompted to choose a root-level object in your provided schema file from which to build the final JSON profile. If the root does not have a specified title, the Import Wizard uses the schema file name as the object name.
-   When importing a JSON schema or document to generate an JSON profile, the profile can have a maximum of 5,000 nodes. This limitation applies only to imported JSON profiles. However, users can manually add additional nodes beyond this limit as needed after the initial profile generation.
-   Keywords supported in versions later than Draft 4 of the JSON Schema specification are either imported according to Draft 4 specifications or are ignored because they are not relevant for the JSON profile. Be aware that this may result in incomplete structures in the profile for some objects. Unsupported keywords are listed as follows:

| Schema data structure     | Unsupported keywords                                                                                       |
|---------------------------|-------------------------------------------------------------------------------------------------------------|
| General schema            | • enum <br/> • cost <br/> • Arrays of allowed types (e.g. `{ "type": ["number", "string"] }`)                |
| Complex schema            | • anyOf, allOf, oneOf, not <br/> • Conditional subschemas (draft 7 only) <br/> • contentMediaType, contentEncoding (draft 7 only) <br/> • Extending properties (?) |
| Annotations               | • examples <br/> • title <br/> • default <br/> • $comments                                                  |