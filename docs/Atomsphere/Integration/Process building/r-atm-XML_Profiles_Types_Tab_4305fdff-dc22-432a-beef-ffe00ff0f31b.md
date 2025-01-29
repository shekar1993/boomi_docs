# XML profile’s Types tab

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4305fdff-dc22-432a-beef-ffe00ff0f31b"/>
</head>


On the XML profile's Types tab you can add, define, edit, and delete namespaces, element declarations, complex types, elements, and attributes.

The icons on the **Types** tab represent the following:

-   ![Green sphere.](../Images/main-ic-sphere-green-shiny-16_2353f896-fb37-469e-a298-e0f86e86c240.jpg) A namespace

-   ![Single blue building block.](../Images/main-ic-box-blue-16_fafcab14-ca59-4937-b547-a4c8b9faa987.jpg) An element declaration without elements or attributes

-   ![Three blue building blocks.](../Images/main-ic-box-three-blue-16_492ab85c-6ce0-4dee-8d70-fe96386b828b.jpg) An element declaration that has elements and/or attributes

-   ![Single yellow building block.](../Images/main-ic-box-yellow-16_88f32def-be6c-47d6-aa43-f2aef572647e.jpg) A complex type without elements or attributes

-   ![Three yellow building blocks.](../Images/main-ic-box-three-yellow-16_fb1578cf-d17a-4d09-883a-b4cc8ff20398.jpg) A complex type that has elements and/or attributes

-   ![Single green building block.](../Images/main-ic-box-green-16_4089e4ab-94dc-4a17-afd0-d4ed437488fe.jpg) An element without elements or attributes

-   ![Three green building blocks.](../Images/main-ic-box-three-green-16_d21022a6-1fc2-445f-8a2f-0eb02c1cc9a9.jpg) An element that has elements and/or attributes

-   ![Single red building block.](../Images/main-ic-box-red-16_33f7bc2e-c20a-42cb-a7b8-f75822eee3d3.jpg) An attribute


Namespaces, element declarations, complex types, elements and attributes in an XML profile have the following configuration settings.

## Namespaces

Namespaces are a way to qualify XML elements with a prefix to avoid naming conflicts. If your XML document uses namespaces they must be configured in the XML profile. Namespaces must be declared before they can be used within the document. The namespace declaration is made in a given element, but then can be used by its child elements.

Each XML profile has an “Empty Namespace” by default. It cannot be deleted from the **Types** tab. It is used by all types that do not declare a namespace. Click **Add Namespace** to add a namespace.

Namespaces are created on the XML profile’s **Types** tab and referenced by elements on the **Data Elements** tab.

**Name**   
**Description**

**Namespace**   
Used to identify the namespace. It is typically an Internet URL similar to this: `http://www.w3.org/TR/html4/`.

**Prefix**   
Prefix to use with this namespace. All elements in the document with the prefix are associated with this namespace.

**Comments**   
Free text description.

## Element Declarations

**Name**   
**Description**

**Element Name**   
Name of the element declaration. It must match the actual XML element name in the source or destination file.

**Comments**   
Free text description.

**Type Name**   
Used to select a complex type from the specified namespace.

You can also add qualifiers. If the element declaration does not reference a complex type, you can also configure Field Size options and Data Format options. See the XML profile’s **Data Elements** tab topic for more information.

## Complex Types

**Name**   
**Description**

**Type Name**   
The name of the complex type.

**Comments**   
Free text description.

You can also configure Field Size options, Data Format options and Qualifiers. See the XML profile’s **Data Elements** tab topic for more information.

## Elements

**Name**   
**Description**

**Element Name**  
Name of the element. It must match the actual XML element name in the source or destination file.

**Comments**   
Free text description.

**Min Occurs \(Minimum Occurrences\)**   
The minimum number of times the element can occur.

**Max Occurs \(Maximum Occurrences\)**   
The maximum number of times the element can occur.

**Looping Option**   
Unique — Only unique instances of a loop or segment will be written. If two \(or more\) loops or segments are identical, then only the first instance will be written.

Occurrence — All instances are written.

**Type Name**   
Used to select a complex type or element declaration from the specified namespace.

You can also configure Field Size options and Data Format options. You can add a qualifier to an element only if it does not reference a type. See the XML profile’s [**Data Elements** tab](./r-atm-XML_Profiles_Data_Elements_tab_c846011c-2964-42fc-93ec-3a2344a8dbbe.md) topic for more information.

## Attributes

Attributes on the **Types** tab have the same settings as those on the **Data Elements** tab, except that you are adding them to an element in a namespace so you do not have to select a namespace. See the XML profile’s **Data Elements** tab topic for more information.