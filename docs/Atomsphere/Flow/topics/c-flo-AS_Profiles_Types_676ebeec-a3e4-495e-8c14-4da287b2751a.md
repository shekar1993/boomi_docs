# Integration Profiles and Flow Types

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-676ebeec-a3e4-495e-8c14-4da287b2751a"/>
</head>

Integration profiles are used to specify the structure of the data that is processed, and should be configured with an understanding of how profiles relate and map to types in Flow.

- To exchange information with Flow, a profile must be in JSON (JavaScript Object Notation) format.

- The root entry for the profile will always be an Object.

- A Request and Response Profile can be specified in the Flow Service operation to define the data structure of requests and responses made between Integration and Flow. If data only needs to be moved in one direction (for example, if you do not require input data to get the desired response from Integration) the unnecessary profile selection can be left empty.

  ![Request/Response profiles](../Images/img-flo-Integration_Profiles_d626fe1f-cb8b-4ea7-aeda-6cb505af8562.png)

The Request/ Response profiles specified in the Flow Service operation are used by Flow to:

- Create types; types are automatically created in Flow for Object or Array(Repeating) profile entries when installing or updating the service. Object profile entries are automatically converted to an object  \(`ContentObject`\) type, and array profile entries are automatically converted to a list  \(`ContentList`\) type.

  To learn more about the different kinds of values/types in Flow, see [Understanding Values, Types, Objects, and Lists](c-flo-Values_Understanding_0a938b9f-c1be-45d9-b53f-aa9d0addad86.md),  and [Value content kinds](c-flo-Values_Content_Types_782220dc-722d-4d55-8576-e0274117e190.md).

- Convert Simple profile entries; entries such as Character, Number, Boolean, or Date/Time, do not automatically generate a type in Flow when installing or updating the service, but are instead converted to properties/values (found in a message action configuration for example). Note that Date/Time data in Request/Response profiles must be in the `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'` format.

- Populate Message action Input and Output parameters. See [Profile mapping to Message Action Input/Output parameters](c-flo-AS_MA_IO_b755e9fb-cfa3-4680-99d5-72ae0c812fa5.md).

## Profiles and naming of types in

Types that are automatically generated in from object/array profile entries \(as well as any message action binding names\) are named using a combination of:

- The name of the Flow Service action/process.![Step 1](../Images/img-flo-Step1_ed936f88-97de-4cc1-98ac-9f351a84a1bb.png)

- The type of profile \('Response' or 'Request'\). ![Step 2](../Images/img-flo-Step2_c61b5577-5d61-4de6-9cfd-7eb5f4587ce0.png)

- The name of the object/array profile entry. ![Step 3](../Images/img-flo-Step3_80c92964-4950-401a-b366-9af635fc20e7.png)

![Type naming convention](../Images/img-flo-Integration_Typenames_9459d1bd-35df-4224-99b7-8ba2a3cd56e5.png)

In the example above, an object type would be automatically created in Flow, and named 'TestAction RESPONSE - Input5Object'.

Best practice is for all the profile entry 'layers' of an object/array to be given the same name. This should also be done before the service is installed for the first time in Flow, to avoid types being generated with less meaningful names in the first instance; this will help to avoid types being created and named 'MyProcessName REQUEST Object_1' for example.

- Object profile entries should have 2 identically named layers.
  
- Array profile entries should have 4 identically named layers.

![Profile entry layers](../Images/img-flo-Integration_layers_6f6c2e1d-9595-42d7-b675-6e0d09eaf7bc.png)

## An example of how profiles map to types in

In this example, a profile will generate and map to types and properties in Flow as follows:

![Profile to type mapping example](../Images/img-flo-Integration_Profile_map_a410ffc8-2e35-40f3-ac9a-9076af4eb178.png)

- The top level profile entry is always an Object. In the example shown, it is named 'Object'.

- The first object profile entry nested under the root object hierarchy (named 'itunesResult') automatically creates a type in Flow named 'getmusic RESPONSE - itunesresult' ![Step 1](../Images/img-flo-Step1_ed936f88-97de-4cc1-98ac-9f351a84a1bb.png)

- This first object entry also generates three type properties for the new type in Flow:

  - The 'Producer' property is generated from the 'Producer' object entry in the profile ![Step 2](../Images/img-flo-Step2_c61b5577-5d61-4de6-9cfd-7eb5f4587ce0.png)

  - The 'resultCount' property is generated from the 'resultCount' simple number data type value entry in the profile. ![Step 3](../Images/img-flo-Step3_80c92964-4950-401a-b366-9af635fc20e7.png)

  - The 'Track' property is generated from the 'Track' array entry in the profile. ![Step 4](../Images/img-flo-Step4_a9fc9306-20bb-4f06-b6c7-616c9df561cb.png)
