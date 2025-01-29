# Data map extensions

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-126d6c7d-71d1-4839-b1e7-586147f826d1"/>
</head>


Use data map extensions either to override field-to-field mapping or to add fields to flat file profiles in map components when a process is deployed.

There are two types of data map extensions:

-   The first type allows field-to-field mapping defined by map components within a process to be augmented, replaced, or overridden when the process is deployed. You can map to destinations that have already been mapped in the original maps. However, you cannot map to a destination that has already been mapped by an override mapping. You can add functions to data map extensions. All function types except user-defined functions are available. The Simple Lookup function type can be used to return a single value.

    The mapping controls are similar to those in the map component creation interface, which is drag-and-drop. Mapping overrides are displayed as black lines.

    If at any time you are unhappy with the mappings, you have the option to **Clear all mapings** and start over.

    These field mapping extensions have the following limitations:

    -   You cannot select different source or destination profiles.

    -   Only mappings using XML or flat file profiles with single-record formats are supported.

    -   If the original maps contain map functions, those map functions are displayed in a gray color and disabled. You can view but not change the configuration and default values of the map functions.

    -   For function types that require a separate component, such as connection and operation components in connector calls, you can select only components that are defined in the original process. If you use extensions with integration packs, the Connector Call function is available but cannot be used. This is because no connection or operation components are available in the Connector Call dialog.

    -   You cannot add cached data to the source profile.

    -   You cannot add default values to the destination profile.

    -   The Map Function Ordering dialog is not available. Functions in the original maps are processed first, followed by functions in the Extensions dialog.

-   The second type of data map extension allows the addition of fields to flat file profiles used in map components within a process when the process is deployed. The profiles must have single-record formats, as opposed to multiple- or nested-record formats. This type of extension applies only to the map component for which the extension is defined; other maps that use the same profile are not automatically extended.


Data map extensions represent the generalized mapping between two object definitions. To define data map extensions, first define object definitions. Object definitions provide a means, depending on the application connectors used in a process, by which you can dynamically browse custom fields and incorporate them into mappings. Custom *objects*, however, cannot be dynamically browsed and mapped.

Data map extensions can be used in conjunction with connection settings extensions. Connection settings extension values specify connection settings for the data sources from which source and destination profiles will be loaded when data map extension values are set.