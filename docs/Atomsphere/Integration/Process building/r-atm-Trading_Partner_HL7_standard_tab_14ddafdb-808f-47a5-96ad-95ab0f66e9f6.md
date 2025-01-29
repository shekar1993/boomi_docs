# Trading Partner HL7 Standard tab 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8D592C28-83AD-40CF-A5D0-A07376613864"/>
</head>


The HL7 Standard tab is where you set Basic HL7 Options, Identification Options, and Message Options.

Inbound and outbound files are automatically validated based on the data populated within this tab. Certain envelope fields are automatically populated for outbound interchanges.



:::note

HL7 solutions are included in their own edition. If you would like to have HL7 capabilities enabled in your account, contact your representative.

:::

:::note

Integration currently does not directly support HL7 field repetition separators, which are used to delimit and identify repeating HL7 data components. Field repetition separators are commonly present in MSH02 data elements in HL7 documents. To identify repeating data components in HL7 EDI profiles, you can use composites.

:::

## Basic HL7 Options

These options are applicable only to your trading partners — that is, they are not applicable to “This is my company.”

- **Require Accept Acknowledgments** - Sets the conditions under which accept acknowledgments are required to be returned.

- **Require Application Acknowledgments** - Sets the conditions under which application acknowledgments are required to be returned.

- **Batch Header and Trailer**

  - Omit \(default\) — Child documents associated with a message are output; batch headers and trailers are not output.
  - Include if Present— While processing a message that has a batch parent, batch headers are output first, then the child documents, then batch trailers when triggered by the final batch header message or by a file name change.

- **Element Delimiter** - Sets the delimiter between data elements in segments in outbound messages:

  - Colon \( : \) Delimited
  - Plus \( + \) Delimited
  - Star Delimited
  - Comma Delimited
  - Tab Delimited
  - Tick Mark \( \` \) Delimited
  - Bar \( \| \) Delimited \(default\)
  - Ampersand \( & \) Delimited
  - Carat \( ^ \) Delimited
  - Byte Character — Sets the delimiter to the formatted byte character typed in the adjacent field. For example, 0XFF. The format should be parsable by the method described [here](https://docs.oracle.com/javase/7/docs/api/java/lang/Integer.html#decode(java.lang.String)).
  - Other Character — Sets the delimiter to the character typed in the adjacent field.

- **Segment Terminator** - Sets the end character for segments in outbound messages:

  - Carriage Return \(default\)

- **Composite Delimiter** - Sets the delimiter between composites within segments in outbound messages:

  - Colon \( : \) Delimited
  - Plus \( + \) Delimited
  - Star Delimited
  - Comma Delimited
  - Tab Delimited
  - Tick Mark \( \` \) Delimited
  - Bar \( \| \) Delimited
  - Ampersand \( & \) Delimited
  - Carat \( ^ \) Delimited \(default\)
  - Byte Character — Sets the delimiter to the formatted byte character typed in the adjacent field. For example, 0XFF. The format should be parsable by the method described [here](https://docs.oracle.com/javase/7/docs/api/java/lang/Integer.html#decode(java.lang.String)).
  - Other Character — Sets the delimiter to the character typed in the adjacent field.

- **Sub-Composite Delimiter** - Sets the delimiter between sub-composites in outbound messages:

  - Colon \( : \) Delimited
  - Plus \( + \) Delimited
  - Star Delimited
  - Comma Delimited
  - Tab Delimited
  - Tick Mark \( \` \) Delimited
  - Bar \( \| \) Delimited
  - Ampersand \( & \) Delimited \(default\)
  - Carat \( ^ \) Delimited
  - Byte Character — Sets the delimiter to the formatted byte character typed in the adjacent field. For example, 0XFF. The format should be parsable by the method described [here](https://docs.oracle.com/javase/7/docs/api/java/lang/Integer.html#decode(java.lang.String)).
  - Other Character — Sets the delimiter to the character typed in the adjacent field.

- **Filter Functional Acknowledgments** - If selected, Trading Partner steps performing inbound interchanges will not pass ACK functional acknowledgment documents to processes.

- **Reject Duplicates** - If selected, documents are rejected when documents with the same control number have already been received.

- **Validate Outbound Interchanges** - If selected, HL7 documents in outbound interchanges are validated.

- **Outbound Validation Option** - Sets the manner in which outbound validation is performed.

  - Filter Errored Documents — Each document found to have any errors is sent to the Trading Partner step’s Errors path.
  - Fail Interchange if Any Documents Have Errors — When a document error occurs, the entire interchange is sent to the Trading Partner step’s Errors path.

  This control is disabled if **Validate Outbound Interchanges** is cleared.

## Identification Options

These options correspond to fields in the MSH message header segment identifying the interchange sender or receiver. If **Batch Option** is set to Batch, these options also apply to the corresponding FHS and BHS segments.

- **Application** - Sets the Sending Application \(MSH-3\) or the Receiving Application \(MSH-5\), which uniquely identifies the application within the network enterprise. The field is a composite of the **Namespace ID**, **Universal ID**, and **Universal ID Type**.

- **Facility** - Sets the Sending Facility \(MSH-4\) or the Receiving Facility \(MSH-6\), which is the address of one of several occurrences of the same application within the sending or receiving system. The field is a composite of the **Namespace ID**, **Universal ID**, and **Universal ID Type**.

- **Network Address** - Sets the Sending Network Address \(MSH-24\) or the Receiving Network Address \(MSH-25\). The field is a composite of the **Namespace ID**, **Universal ID**, and **Universal ID Type**.

## Message Options

- **Processing ID** - Sets the type of the system used for facilitating interchange:

  - Debugging \(D\)
  - Production \(P\)
  - Training \(T\)

- **Processing Mode** - Sets the interchange processing mode:

  - Not Present
  - Archive \(A\)
  - Restore From Archive \(R\)
  - Initial Load \(I\)
  - Current Processing \(T\)
