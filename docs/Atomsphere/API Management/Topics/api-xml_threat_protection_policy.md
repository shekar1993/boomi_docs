# XML Threat Protection Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-145fd228-7ea6-4015-b441-919cdc2cde44"/>
</head>

The  `xml-threat-protection` policy validates an XML request body by applying limits on XML structures such as elements, entities, attributes, and string values. When an invalid request is detected (the limit is reached), the request is considered a threat and rejected with a `400 BAD REQUEST`.

## Timing

| On Request | On Request Content |
|---|---|
|   | X  |

## Configuration

| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|`maxElements`|no|Maximum number of elements allowed in an XML document. For example, `<root><a>1</a>2<b></b></root>` has three elements.|integer (-1 to specify no limit)|1000|
|`maxDepth`|no|Maximum depth of the XML structure. For example, `<root><a><b>1</b></a></root>` has a depth of two.|integer (-1 to specify no limit)|100|
|`maxLength  `|no|Maximum number of characters allowed for the whole XML document.|integer (-1 to specify no limit)|1000|
|`maxAttributesPerElement`|no|Maximum number of attributes allowed for a single XML element.|integer (-1 to specify no limit)|100|
|`maxAttributeValueLength`|no|Maximum length of individual attribute values.|integer (-1 to specify no limit)|100|
|`maxChildrenPerElement`|no|Maximum number of child elements for a given element. For example, `<code><root><a><b>1</b><c>2</c></a></root></code>` an element has two children.|integer (-1 to specify no limit)|100|
|`maxTextValueLength`|no|Maximum length of individual text value.|integer (-1 to specify no limit)|100|
|`maxEntities`|no|Maximum number of entity expansions allowed. XML entities are a type of macro and are vulnerable to entity expansion attacks.|integer (-1 to specify no limit)|100|
|`maxEntityDepth`|no|Maximum depth of nested entity expansions allowed.|integer (-1 to specify no limit)|100|
|`allowExternalEntities`|no|Whether to allow the inclusion of external entities. WARNING: Since XML can be vulnerable to XXE injection, only enable this feature if necessary.|boolean|false|

## Errors

HTTP status code

| Code | Message|
|---|---|
| `400 Bad Request`|Applies to invalid XML structure, maximum xml elements exceeded, maximum xml depth exceeded, maximum xml length exceeded, maximum attributes per element exceeded, maximum attribute value length exceeded, maximum children per element exceeded, maximum text value length exceeded, maximum xml entities exceeded, maximum xml entity depth exceeded, external entity is used when prohibited. |
