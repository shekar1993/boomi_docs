# Using enhanced composites

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ade182c8-6f8e-4e19-a766-496736993b81"/>
</head>

HL7 enhanced composites provide additional features for Boomi HL7 EDI profiles, including the capability to set attributes at the composite level even when the composite element has been expanded and support for repeating data elements.

When a profile is switched to enhanced composites, a composite data element that is expanded will no longer replace the composite element with children. Instead, the composite element is retained and the children added underneath. This allows you to set attributes such as mandatory and repeating at the composite root level, which is more compliant with the HL7 standard, and also set a repeat element delimiter. Additionally, all data elements have the option of being marked repeating, providng support for elements such as the HL7 2.3.1. MSH.18 data element, which might contain multiple values.

Enhanced composites also provide the following improvements to the Data Elements tab:

- Icons are green if the segment can be expanded
- When you expand a segment, the data element list remains expanded

To use enhanced composites, you must set the custom property `com.boomi.container.useExtendedEDIParsing` to `true` on the runtime in Atom Management on the Properties panel's Custom tab.

:::note

This property's default value is `false`, which results in an HL7 profile that has enhanced composites enabled being downgraded to the legacy behavior, which will affect mandatory and repeating settings.

:::

## Enable enhanced composities

Use the following steps to enable enhanced composites on a new EDI profile:

1. From the **Build** page, click **Create New** and select EDI Profile. Choose **HL7** for the standard.

2. In the Getting Started window, select whether you want to import a profile or set one up manually.

3. On the **Options** tab in the **File Options** section, turn on the toggle for **Enhanced Composites**.

For an existing profile, select the HL7 profile for which you want to enhance composites from the Component Explorer and then turn on the toggle for **Enhanced Composites** on the **Options** tab.

## Escape handling

EDI Standards typically define a mechanism that allows characters with special meanings in the file format to be embedded as literal characters in the data. In many standards, embedding these special characters involves prefixing the special character with an “escape” character. The escape character tells the parser to treat the next character literally, not as a delimiter.

The Boomi EDI Parser was implemented with this prefix behavior, so legacy HL7 profiles will use the prefix mechanism to represent escape sequences. When data is written into an HL7 profile element, any delimiters in the data are prefixed with the HL7 default escape character (`\`). When mapping from a non-expanded composite node to a non-expanded composite node in an EDI to EDI scenario, all the delimiter characters in the non-expanded composite are prefixed with the escape character in the output. This can be problematic when the goal of the mapping logic is to copy the data in an unaltered form.

As part of an overall effort to improve usability and standards compliance, while also maintaining backward compatibility with the legacy profile behavior, Boomi implemented a new option, “enhanced composites.” When combined with a custom property in the runtime environment (com.boomi.container.useExtendedEDIParsing), the enhanced composites profile option no longer adds escape characters when mapping from a non-expanded composite into a non-expanded composite. Additionally, the HL7 specification does not use the escape character as a prefix. Instead, there are special encoding rules for escape characters in HL7, so we added support for those escape sequences to profiles that have enhanced composites enabled. For example, a field separator (usually `|`) is converted into `\F\`. Using enhanced composites also enables new escaping behavior.

The escaping behavior is dependent on the structure of the HL7 profile. If the structure of the messages being processed does not match the structure of the profile, sometimes escaping logic can be applied in a way that is not desirable. For this reason, you can turn off the escaping logic. This affects both the reading and writing of data elements. Escape sequences with special meaning will not be converted from their encoded form on read, and special characters will always be treated as literals on write. This behavior can be controlled as a global profile option or individually on specific data elements. For more information, refer to [EDI Profile's Options tab](./r-atm-EDI_Profiles_Options_tab_6261e4ab-3523-482c-807e-89c033f8fc19.md).

Escape handling as defined by the [HL7 specification](https://www.hl7.org/implement/standards/index.cfm?ref=nav) applies only to certain data types. Whether or not the disable escape behavior is off, the escaping behavior will be constrained to elements with the data type ST (String), FT (Formatted Text), or TX (Text Data).
