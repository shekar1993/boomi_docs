# Fields overview

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-8b21b042-786a-4069-909c-acb93a62f354"/>
</head>


Fields define the structure of golden records for a domain. The fields in a model correspond to columns in the table of the domain’s master data.

In the model page for a given model, select the **Fields** tab to do the following

-   Add fields to the model.

    While you can individually add fields, consider first using the Import Fields wizard or the Boomi Suggest wizard.

    -   The Import Fields wizard lets you add selected fields from an existing profile. This method of adding fields is appropriate if you have already built processes that connect to what will be the domain’s source systems.

    -   The Boomi Suggest wizard suggests a set of fields from which you can selectively accept. These field suggestions are leveraged from the collective intelligence of the community.

-   Modify the properties of the model’s existing fields.

- Mask sensitive data in field values.

-   Delete fields. Deleted fields remain in the model but are no longer in the golden record field structure.

-   Reorder fields.

-   Add field groups to the model as a means of defining relationships between active \(non-deleted\) fields.

    For example, the field group “Street Address” might include the fields “Address 1” and “Address 2”. A more expansive definition of this field group might also include “City”, “State”, “Postal Code” and “Country”.

    Field groups can be designated as repeatable to enable the modeling of one-to-many relationships in a single model — see “Collections — Repeatable Fields and Field Groups” below.

-   Remove fields from field groups.

-   Restore deleted fields to the golden record field structure.

Field changes, including changes in field status from active to deleted and vice versa, will not persist in the model definition until you publish the model or save it as a draft.

Fields have the following properties:

-   status — active or deleted.

-   name

-   type — one of the following:

    -   Text — maximum length 255 characters. Field values can be partially or fully masked. 

    -   Integer — positive or negative whole number. Field values can be partially or fully masked.

    -   Float — double-precision binary floating-point. Values exceeding storage capacity are rounded. Field values can be partially or fully masked.

    -   Date/Time — format is yyyy-MM-dd'T'HH:mm:ss'Z' — for example, `2013-03-01T15:32:00Z`. Field values can be partially or fully masked.

    -   Date — format is yyyy-MM-dd — for example, `2013-03-01`. Field values can be partially or fully masked.

    -   Time — format is HH:mm:ss — for example, `15:32:00`. Field values can be partially or fully masked.

    -   Boolean — allowable values `true` and `false` \(case-sensitive\). Field values can be fully masked. 

    -   Reference — see “Reference Fields” below. Field values cannot be masked.

    -   Enumeration — specified allowable values of maximum length 255 characters \(case-sensitive\). Field values can be partially or fully masked.

    -   Long Text — maximum length 5,000 characters. Long Text fields cannot be selected for matching in match rules. Field values can be partially or fully masked.

    Once a field is added and the model is published, the field’s type cannot be changed.

-   allowable value list \(Enumeration fields only\)

-   required \(or not\) — If a field is required, it must have a value in a golden record.

-   validation options \(Text fields only, not applicable to Long Text fields\):

    -   Minimum character count

    -   Maximum character count

    -   Pattern for matching — specified by a [regular expression](http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html)

-   repeatable \(or not\) — see “Collections — Repeatable Fields and Field Groups” below.

    Once a field is added and the model is published, this property cannot be changed.


Field groups have the following properties:

-   name

-   names of member fields

-   repeatable \(or not\) — see “Collections — Repeatable Fields and Field Groups” below.

    Once a field group is added and the model is published, this property cannot be changed.


:::note

Deploying newer or older versions of a model in which fields were added or deleted is potentially destructive in the sense that certain data that used to be stored may no longer be stored or users will no longer have access to data to which they previously had access.

:::

## Fields and the golden record title format 

In the model page for a given model, select the **Record Title Format** tab to specify the model’s golden record title format. All types of fields are selectable for inclusion in the title format, with the exception of reference fields, masked fields, and repeatable \(collection\) fields. You can also include static text in the title format.

The title format is used in pages accessed through the Stewardship menu:

-   Golden record titles appear in data grids, quarantine entry lists, and staged entities lists, and as view headings in details views for golden records, quarantine entries, and staged entities.

-   In the Golden Records page, title format field values in referenced golden records for resolved references are shown as reference field values instead of golden record IDs.

-   In the Quarantine page, title format field values in referenced golden records for resolvable references are shown as reference field values instead of source entity IDs.


## Collections — repeatable fields and field groups 

To model one-to-many relationships within the context of a single model, you must use repeatable fields and field groups. Each repeatable field or field group represents a collection. In a golden record a collection is a set of one or more instances of the same repeatable field or field group.

For example, suppose you are using Boomi DataHub to manage master employee data, and these are among your requirements:

-   Manage employee nickname data. Employees may have multiple nicknames — that is, a collection of nicknames.

-   Manage employee phone number data. Employees may have multiple phone numbers — that is, a collection of phone numbers. Each of an employee’s phone numbers is of a particular type — for example, office, mobile, home.


You could define these relationships in a single model as follows:

1.  Define “Nickname” as a repeatable field representing the collection “Nicknames”.

2.  Define the fields “Number” and “Type” to represent phone number properties.

3.  Define “Phone” as a repeatable field group representing the collection “Phones”.

4.  Group “Number” and “Type” in “Phone”.


There are two options for specifying how collection items in incoming entities are matched with collection items in golden records:

1.  Order of occurrence

    Matching of collection items is performed sequentially. If a collection is represented by a field group, matching is performed on each field in a given collection item. For examples of matching by order of occurrence, see the linked collection item matching examples.

2.  Key field values

    Matching is performed only on fields designated as *key* fields.

    -   If a collection is represented by a field, the field is a key.

    -   If a collection is represented by a field group, you can select one or more of its fields as keys. If you do not explicitly select any key fields, all of the field group’s fields are designated as keys.

    For examples of matching by key field values, see the linked collection item matching examples.


Collections cannot be embedded in other collections. The XPath of the XML element representing a collection in entities propagating to and from repositories cannot conflict with that of an element representing another collection, field, or field group. Collections and their fields cannot be specified in match rules. You cannot designate a collection or a field in a collection as a golden record title format field.

## Reference fields

Reference fields differ from ordinary fields. Reference fields represent relationships between objects of the same type, such as employees and their managers, and objects of different types, such as contacts and accounts.

-   Suppose you are using Boomi DataHub to manage master contact and account data. To represent contact-account relationships, you would add to your Contacts model a reference field named Account specifying your Accounts model. The Contacts domain would then be said to reference the Accounts domain. This type of reference is an inter-domain reference. In the golden record for a given contact, the value of the Account field would be ID of the golden record for the account with which the contact is related.

-   Suppose you are using Boomi DataHub to manage master employee data. To represent employee-manager relationships, you would add to your Employees model a reference field named Manager. The Employees domain would then be said to reference itself. This type of reference is an intra-domain reference. In the golden record for a given employee, the value of the Manager field would be ID of the golden record for the employee’s manager.


Reference fields have the following properties:

-   status — active or deleted.

-   name

-   type — Reference

-   referenced model — Either the same model as that in which the field is defined \(defining an intra-domain reference\) or another model \(defining an inter-domain reference\). Once a reference field is added, this property cannot be changed.

-   required \(or not\) — If a reference field is required, it must have a value in a golden record.

    Intra-domain reference fields cannot be required.

-   enforce referential integrity \(or not\) — Either or both of two types of referential integrity can be enforced for a reference field:

    -   Enforcing referential integrity for incoming entity contributions ensures that contributed entities that reference entities for which golden records do not already exist cannot be incorporated in the target domain without manual intervention. For example, when the field in a contributed entity for a contact references an account for which a golden record does not already exist, the entity will be quarantined.

    -   Enforcing referential integrity for outgoing channel update requests ensures propagation of source record update requests on channels, as a result of golden record updates, will occur only to sources already linked to referenced golden records. For example, when the field in the golden record for a contact referencing an account is updated, update requests will be propagated only to sources to which the golden record for the referenced account are already linked.

    Inter-domain reference fields for which referential integrity is enforced in a model are required fields in that model. Referential integrity is implicitly enforced for reference fields representing collections.


## “id” field 

The id field is required in a model. When you create a model, the id field is automatically added as the first field. You cannot move it, modify its properties, add it to a field group, delete it or designate it as a golden record title format field. You can add other fields with that same name to a model, but you will not be able to save the model unless those fields are members of a field group.

:::note

Any process that loads source records into Boomi DataHub needs to map the source record ID to the automatically added id field in the domain to enable the creation of linkages between golden records and source records. Internally the repository maintains a cross-reference table for each domain in which source record IDs are mapped to golden record IDs.

:::