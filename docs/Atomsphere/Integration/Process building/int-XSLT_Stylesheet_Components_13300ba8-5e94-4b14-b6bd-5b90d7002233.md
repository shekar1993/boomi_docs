# XSLT Stylesheet components

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-13300ba8-5e94-4b14-b6bd-5b90d7002233"/>
</head>


XSLT Stylesheet components enable you to apply XSLT transformations to XML or JSON documents using the Data Process step in processes.

Using the XSLT Stylesheet component, users can transform XML or JSON documents when the full structure of the data is unknown, output new formats like HTML, easily migrate XSLT maps from other systems for use on the platform, and dynamically map subsections of documents. You can create reusable XSLT Stylesheet components in the same way that you create other types of components: from the **Build** page’s **New** button, or **Component Explorer**, or from any process step that contains an icon for creating a new component ![+](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg). XSLT stylesheet components are deployed as part of any process in which they are referenced.

## Support versions

The XSLT Stylesheet component supports XSLT version 3.0, which is backward compatible with XSLT versions 1.0 and 2.0. Your Atom must be running on Java version 8 to use XSLT.

## Usage considerations

-   Multiple XML documents sent to the Data Process step are transformed individually. Incoming documents cannot be combined or split in the transformation process.
-   The XSLT Stylesheet component must include the full, complete XSLT stylesheet within the component editor. The component does not permit references to external stylesheets or other assets.
-   Dynamic document properties can be retrieved and set within the XSLT stylesheet using a pair of special XSLT functions. This allows dynamic runtime values to be passed into the XSLT stylesheet as a variable to set default values or drive conditional transformation, or to output specific values from the transformation for use later in the process\). See **Related References and Tasks** for more information about using dynamic document properties with XSLT Transformations.

See the [Process Library](https://platform.boomi.com/#build;processLibrary=f9e910c6-453b-426d-ab5a-57316bac5252) in the service for examples on how to use XSLT Stylesheet components.

## Increasing memory with XSLT

Users may experience a Java heap space issue when using input documents with XSLT that are larger than 100 MB.  suggests that users enable the **XSLT 3.0 streaming option** to handle larger documents, which is enabled by using `<xsl:mode streamable="yes"\>` within the XSLT stylesheet script. Note this capability takes advantage of functionality specific to the Saxon XSLT engine. For more information on how to implement Saxon's XSLT streaming mode, visit [Streaming of Large Documents](https://www.saxonica.com/documentation9.5/sourcedocs/streaming/index.html).

Alternatively, users can increase the Java heap space on their own private Atoms. To learn more, visit the [Increasing the memory available to an Atom or Molecule](../Integration%20management/t-atm-Increasing_memory_available_to_Atom_or_Molecule_ccb54dde-49f1-4c9f-b1d6-1b0305c2a7ef.md) topic.