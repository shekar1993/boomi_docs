# SuccessFactors – Partner operation’s outbound actions 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1daf78ed-bc9e-4d70-8921-6b2074fe81ca"/>
</head>


The SuccessFactors – Partner operation's outbound actions describe how to create, delete, update, and insert SuccessFactors records.

## Create, Delete, Update, and Upsert 

Write actions have both a request and response profile. The request profile for a Delete action contains only an element to specify the ID for the record to delete. Request profiles for other Write actions are those fields indicated as `Insertable` \(Create actions\), `\_Updateable` \(Update actions\) or `\_Upsertable` \(Upsert actions\) per the object type specification in the SFAPI Data Dictionary.

Request profile documents have constraints set according to the SFAPI Data Dictionary metadata for each field. If a maximum length is specified for a field, this value is reflected in the Constraint section \(on the Data Elements tab\). If the field is required, the Min Occurs field \(on the Data Elements tab\) is set to "1" and the Minimum Length constraint is set to "1" \(on the Data Elements tab, Field Size Options section\).

For Update and Upsert actions for non-effective dated BizX objects, you can leave an existing field value unchanged by leaving the field value blank. To clear a value from an existing record, set the Min Occurs field to "1" and select the Respect Min Occurs check box \(on the Options tab\).

Upserts of effective date BizX objects behave differently. By default, leaving a field blank initiates a NO\_OVERWRITE behavior where the field for a new effective dated record is set to the value for the field in the previous record. To clear a field and prevent the previous value from being propagated, set the Min Occurs field to "1" and select the Respect Min Occurs check box.

Write action response profiles provide the status of each document that is written and any errors. An index is also provided to associate specific documents to specific response elements. For more information, see the SFAPI Error Messages Guide.

On the XML profile’s Data Elements tab, the following index fields appear:

-   objectEditResult

    -   index

    -   id

    -   errorStatus

    -   editStatus

    -   message

 
:::note

The index is a one-based ordinal number that corresponds to the respective input documents. You can use this ordinal to correlate the input data with each respective edit result.

:::