# XML profile data elements

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2c0133dc-0a5d-4b90-abae-43d057619af4"/>
</head>


The XML profile's Data Elements tab displays the actual structure of the XML document.

Because XML is a hierarchical structure, the elements, attributes, and their relationships are represented in a tree structure. Element names in the XML profile need to match the XML document’s element and attribute names exactly. The application uses this configuration to know how to read and write the XML document.

Every XML profile has exactly one root element. All other elements are contained within this single root element. Elements can be *nested* within another element to establish parent/child relationships.

The icons in the tree structure on the Data Elements tab represent the following:

-   ![Single green building block.](../Images/main-ic-box-green-16_4089e4ab-94dc-4a17-afd0-d4ed437488fe.jpg) An element without elements or attributes

-   ![Three green building blocks.](../Images/main-ic-box-three-green-16_d21022a6-1fc2-445f-8a2f-0eb02c1cc9a9.jpg) An element that has elements and/or attributes

-   ![Single red building block.](../Images/main-ic-box-red-16_33f7bc2e-c20a-42cb-a7b8-f75822eee3d3.jpg) An attribute

-   ![Single yellow building block.](../Images/main-ic-box-yellow-16_88f32def-be6c-47d6-aa43-f2aef572647e.jpg) An element that references a complex type without elements or attributes

-   ![Three yellow building blocks.](../Images/main-ic-box-three-yellow-16_fb1578cf-d17a-4d09-883a-b4cc8ff20398.jpg) An element that references a complex type that has elements and/or attributes

-   ![Single blue building block.](../Images/main-ic-box-blue-16_fafcab14-ca59-4937-b547-a4c8b9faa987.jpg) An element that references an element declaration without elements or attributes

-   ![Three blue building blocks.](../Images/main-ic-box-three-blue-16_492ab85c-6ce0-4dee-8d70-fe96386b828b.jpg) An element that references an element declaration that has elements and/or attributes


If you select an element in the tree on the left its settings appear on the right.

![XML profile with element selected](../Images/build-pg-xml-profile.jpg)

If you select an attribute in the tree on the left, its settings appear on the right.

![XML profile with attribute selected](../Images/build-pg-xml-profile-attribute.jpg)