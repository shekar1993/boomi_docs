---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-a756c908-dd3d-4ba2-921b-72c69930f957"/>
</head>

When a request comes to this connector, it will check the body content type, and as per the requirement, it will convert the API payload content from XML to JSON and vice versa using pre-processing and post-processing. 

## JSON to XML Usage Examples
  
| Description | JSON Body | Transformed XML Body |
| --- | --- | --- |
| Normal JSON | `{"employee" : {"first-name" : "Jane","last-name" : "Doe","address" : "Paris","phone-number" : "123456"}}` | `<?xml version="1.0" encoding="UTF-8"?><employee><first-name>Jane</first-name><last-name>Doe</last-name><address>Paris</address><phone-number>123456</phone-number></employee>` |
| JSON with nested tag | `{"employee" : {"first-name" : "Jane","last-name" : "Doe","address" : {"street" : "123 A Street"},"phone-number" : "123456"}}` | `<?xml version="1.0" encoding="UTF-8"?><employee><first-name>Jane</first-name><last-name>Doe</last-name><address><street>123 A Street</street></address><phone-number>123456</phone-number></employee>` |
| JSON with attribute | `{"employee" : {"first-name" : "Jane","last-name" : "Doe","address" : {"street" : "123 A Street"},"phone-number" : \[ {"@type" : "work","\$" : "555-1111"}, {"@type" : "cell","$" : "555-2222"} ]}}` | `<?xml version="1.0" encoding="UTF-8"?><employee><first-name>Jane</first-name><last-name>Doe</last-name><address><street>123 A Street</street></address><phone-number type="work">555-1111</phone-number><phone-number type="cell">555-2222</phone-number></employee>` |
| JSON with empty object | `{"employee" : {"first-name" : "Jane","last-name" : "Doe","address" : {"street" : "123 A Street"},"phone-number" : [ {"@type" : "work","\$" : "555-1111"}, {"@type" : "cell","$" : "555-2222"} ],"other-details" : {}}}` | `<?xml version="1.0" encoding="UTF-8"?><employee><first-name>Jane</first-name><last-name>Doe</last-name><address><street>123 A Street</street></address><phone-number type="work">555-1111</phone-number><phone-number type="cell">555-2222</phone-number><other-details></other-details></employee>` |

## XML to JSON Usage Examples
  
| Description | Pre-Input Data | XML Body | Transformed JSON Body | Remarks |
| --- | --- | --- | --- | --- |
| Normal XML | -   | `<?xml version="1.0" encoding="UTF-8"?><employee><first-name>Jane</first-name><last-name>Doe</last-name><address>Paris</address><phone-number>123456</phone-number></employee>` | `{"employee": {"first-name": "Jane","last-name": "Doe","address": "Paris","phone-number": 123456}}` |     |
| XML with nested tag | -   | `<?xml version="1.0" encoding="UTF-8"?><employee><first-name>Jane</first-name><last-name>Doe</last-name><address><street>123 A Street</street></address><phone-number>123456</phone-number></employee>` | `{"employee": {"first-name": "Jane","last-name": "Doe","address": {"street": "123 A Street"},"phone-number": 123456}}` |     |
| JSON with attribute | -   | `<?xml version="1.0" encoding="UTF-8"?><employee><first-name>Jane</first-name><last-name>Doe</last-name><address><street>123 A Street</street></address><phone-number type="work">555-1111</phone-number><phone-number type="cell">555-2222</phone-number> </employee>` | `{"employee": {"first-name": "Jane","last-name": "Doe","address": {"street": "123 A Street"},"phone-number": [{"@type": "work","$": "555-1111"},{"@type": "cell","\$": "555-2222"}]}}` |     |
| Adding new node | node_interpretation : stricttext\_node\_name : **testNode** | `<?xml version="1.0" encoding="UTF-8"?><catalog><book><name>bookName1</name></book></catalog>` | `{"catalog": {"book": {"name": {"testNode": "bookName1"}}}}` | Both values - node_interpretation and text\_node\_name are mandatory in pre-input configuration to get the specific result. node_interpretation value should always be strict.Be sure to configure this both together in pre-inputs to add any text node |
| Add Custom Attribute prefix | use\_attribute\_prefix:yesattribute_prefix:# | `<?xml version="1.0" encoding="UTF-8"?><catalog><book id="01"><name>bookName1</name></book></catalog>` | `{"catalog": {"book": {"#id": "01","name": "bookName1"}}}` | Both values -use\_attribute\_prefix and attribute_prefix are Mandatory in pre-input configuration to get the specific result. use\_attribute\_prefix value should always be yes.attribute_prefix must be used with use\_attribute\_prefix. |
| Namespace handling | namespace_handling:yes | `<?xml version="1.0" encoding="UTF-8"?><test><pre:elem xmlns:pre="urn::value">xyz</pre:elem></test>` | `{"test": {"pre:elem": {"xmlns:pre": "urn::value","$": "xyz"}}}` | To handle namespace, you must give namespace_handling:yes in pre-inputs. |
| Custom Name Space Prefix | namespace\_handling:yes use\_namespace\_prefix:yes namespace\_prefix:# |` <?xml version="1.0" encoding="UTF-8"?><test><pre:elem xmlns:pre="urn::value">xyz</pre:elem></test>` | `{"test": {"pre:elem": {"#xmlns:pre": "urn::value","$": "xyz"}}}` | To handle namespace, these 3 values are required in pre-input configurations. This should be configured all together as given in the example. |
| Array Representation : Compact | array\_representation : compact array\_parent_child : options\|option | `<?xml version="1.0" encoding="UTF-8"?><xml><options><option>1</option><option>2</option></options></xml>` | `{"xml": {"options": [1,2]}}` | array_representation and array\_parent\_child must be used together to handle array representation. array_representation compact will create compact array as shown in the JSON example. array_representation and array\_parent\_child both should be configured together in pre-inputs to define array_representation. In case of multiple arrays in JSON, array\_parent\_child becomes a comma-separated list of parent\|child |
| Array Representation : Expanded | array\_representation : expand array\_parent_child : options\|option | `<?xml version="1.0" encoding="UTF-8"?><xml><options><option>1</option><option>2</option></options></xml>` | `{"xml": {"options": {"option": [1,2]}}}` | Expand array\_representation is default array\_representation. If we are not giving any configuration in pre-inputs it will by default treat as expand. |
| Recognize Number | consider_number:true | `<a><b>100</b><c>value</c></a>` | `{"a": {"b": 100,"c": "value"}}` | This feature is applicable for XML→JSON transformation only. |
|     | consider_number:false | `<a><b>100</b><c>value</c></a>` | `{"a": {"b": "100","c": "value"}}` | This feature is applicable for XML→JSON transformation only. |
| Recognize Boolean | consider_boolean:true | `<a><b>true</b><c>value</c></a>` | `{"a": {"b": true,"c": "value"}}` | This feature is applicable for XML→JSON transformation only. |
|     | consider_boolean:false | `<a><b>true</b><c>value</c></a>` | `{"a": {"b": "true","c": "value"}}` | This feature is applicable for XML→JSON transformation only. |

