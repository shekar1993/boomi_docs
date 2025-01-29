# XSLT Transformation step: working with dynamic document properties

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4a4a8eac-1be5-4afc-8773-1ba7e739e063"/>
</head>


The XSLT transformation step of the Data Process step provides the ability to set and retrieve dynamic document properties within an XSLT stylesheet using a pair of XSLT functions.

The XSLT Transformation step allows you to pass dynamic runtime values into an XSLT stylesheet as variables. You can use dynamic document properties with the XSLT Transformation step to set default values, to drive conditional transformations, or to output specific values from the transformation for use later in the process.

Only dynamic document properties can be retrieved or set directly in the XSLT stylesheet. To retrieve values for other types of properties such as connector properties, dynamic process properties, or process properties within the XSLT stylesheet, simply use a Set Properties step to store those values as dynamic document properties prior to the Data Process XSLT Transformation step in your process.

## Getting started

To retrieve and set dynamic document properties from your process, the XSLT Transformation step includes a pair of built-in functions, **get-ddp\(\)** and **set-ddp\(\)**, described in the **Functions** section. To use these functions, add the special "boomi" namespace declaration to the `<xsl:stylesheet\>` root element, like the following example:

```
<xsl:stylesheet version="3.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:boomi="http://boomi.com/custom-function">

```

See the [Process Library](https://platform.boomi.com/#build;processLibrary=f9e910c6-453b-426d-ab5a-57316bac5252) in the service for an example on how to use dynamic document properties with XSLT Stylesheet components.

**Note:** Dynamic document properties are used only to get data from a previous step into the XSLT component, and to pass data to steps later in the process. For use within the XSLT component, it is recommended to use a normal XSLT variable.

## Functions

The following table describes the get-ddp and set-ddp properties provided by the XSLT Transformation step:

|Name|Definition|
|---|---|
|boomi:get-ddp\(propName\)|Returns the string value for the specified dynamic document property name. Values can be retrieved into any XSLT context such as xsl:param, xsl:variable, xsl:value-of, or other elements with a select attribute.<br/>Example:<br/> ```<xsl:variable name="myInValue"select="boomi:get-ddp('DDP_MY_IN_PROP')"/>```|
|boomi:set-ddp\(propName,propValue\)|Sets the value for the specified dynamic document property name to the specified value. Both propName and propValue must be string values.The xsl:value-of element is required to execute the built-in function that sets the property.<br/>Example:<br/>```<xsl:variable name="myOutValue" select="boomi:set-ddp('DDP_MY_OUT_PROP', 'the new value')"/><xsl:value-of select="$myOutValue" />```|
