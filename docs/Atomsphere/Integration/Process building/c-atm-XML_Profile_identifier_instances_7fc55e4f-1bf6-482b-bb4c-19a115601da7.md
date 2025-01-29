# XML profile instance identifiers

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7fc55e4f-1bf6-482b-bb4c-19a115601da7"/>
</head>

Instance identifiers are placeholders in an XML profile that identify specific data sets.

At the element level, they categorize these data sets based on the numeric occurrence \(for example, the first occurrence or last occurrence\) and/or qualifier value within a given XML file. Instance identifiers can be used in maps to map specific data values for an occurrence or qualifier.

A qualifier is a specific value of a data element that can be predefined in to classify key data.

To identify each element instance as unique in your integration, you must:

- Add qualifiers to the parent data element

- Add a unique instance identifier at the child element level for each qualifier

:::note

If you specify multiple qualifiers, all of the qualifiers must match for an element to be populated.

:::

An XML profile can have a maximum of 200 instance identifiers which can be nested.

For example, consider an element, `assembly`, for which there are instance identifiers; `assembly` has a child element, `part`. If you define an instance identifier for `part`, the same child instance identifiers would be automatically added to each of the `assembly` instance identifiers. All of these instance identifiers, including those automatically added, would count toward the limit of 200. The automatically added child instance identifiers would not be visible in the profile, but they would be visible when the profile is used in a map.

Profile element references and choosers are used throughout to select a specific data element within an XML profile. With the usage of instance identifiers in XML profiles, it may be necessary for a specific instance of a particular data element to be selected.
