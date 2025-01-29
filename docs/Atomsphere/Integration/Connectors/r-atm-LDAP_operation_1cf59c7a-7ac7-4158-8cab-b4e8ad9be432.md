import RequestProfile from './_RequestProfile.md'
import ResponseProfile from './_ResponseProfile.md'
import OperationEnd from './_operationEnd.md'
import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'

# LDAP operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1cf59c7a-7ac7-4158-8cab-b4e8ad9be432"/>
</head>


The LDAP operation defines how to interact with the LDAP server instance, such as creating, retrieving, updating, searching for, and deleting objects in the data directory. Create a separate operation component for each action required for your integration.

The LDAP operation supports the following actions:

-   Create — add a new object to the data directory.
-   Get — look up an object in the data directory.
-   Update — update an object in the data directory.
-   Query — search and find objects in the data directory.
-   Delete — delete an object from the data directory.
-   Execute — rename and move an entry in the data directory.

## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the fields for each action type:

**Object** - 
An object defines what you want to integrate or the action to run, which you select in the Import Operation wizard.

<RequestProfile />

<ResponseProfile />

<TrackingDirection />

<ReturnErrRes />

**Attribute Action \(Update\)** - 
Select to add, remove, or replace attribute values. Attribute values can have a single value, or multiple values.

-   Single value attributes
     -   You cannot add an attribute.
     -   When removing an attribute, the operation removes the existing value only when it is the current value. An empty value in the input parameter removes the attribute.
    -   When replacing an attribute, the operation sets the new value. An empty value in the input parameter removes the attribute.
-   Multiple value attributes
    -   When adding attributes, the operation adds new values to the existing values.
    -   When removing attributes, the operation removes values in the input parameter from the values in the data directory on the LDAP server. Other values not present in the input parameter are left as-is. An empty value in the input parameter removes the entire attribute.
    -   When replacing attributes, the operation sets new values and removes the existing values. An empty value in the input parameter removes the attribute.

**Ignore Blank Input Attributes \(Update\)** - 
If selected, the operation removes all blank fields from the input field and ignores them. If cleared, blank input fields are sent to the LDAP server as-is and the attributes are removed when the **Attribute Action** is set to Replace or Remove.

**Search Scope \(Query\)** - 
Select what portion of the search context subtree is included and considered for the search, at or below the base Distinguished Name \(DN\).

-   Subtree — search the base object and all levels in the hierarchy below it.
-   One Level — search all entries in the hierarchy one level below the base object, but not the base object itself.

**Search Context \(Query\)** - 
Enter the context of the search for the selected object. For example, to find a specific principal \(user\), you may enter `cn=terry,cn=sales,dc=mygroup,dc=net`.


:::note

If set, the search context parameter value that you define as a document property overrides this value.

:::

**Use advanced search \(Query\)** - 
:   Specify if you want to use an advanced search to find objects in the data directory.

-   When selected, you can use the **Additional Search Filter** field to build an additional filter to further refine the search the connector sends to the LDAP server when executing the query.

-   When cleared, the filter uses the Object Type selected when browsing \(**Import Wizard**\) and a combination of the filters specified on the **Filters** tab, and the parameters for the filter provided on the Connector step's Parameter tab.


**Additional Search Filter \(Query\)** - 
:   Available when **Use advanced search** is selected. Specify additional filter criteria to refine the search the connector sends to the LDAP server when executing the query. When specified, the operation performs the query by submitting an AND filter to the server, including the additional search filter you specify. The connector automatically adds surrounding parenthesis to the specified filter value, even if the value already has surrounding parenthesis.

:::note

-   When an additional search filter is specified and the **Filters** tab contains filters, an AND filter is created with the Object Type selected when browsing, a combination of the filters provided on the **Filters** tab, the parameters for the filter provided in the Connector step's Parameters tab, and the additional search filter.
-   When an additional search filter is not provided and there are no filters on the **Filters** tab, the filter only contains the Object Type selected when browsing.
-   You can dynamically override the additional search filter \(if set\) with the corresponding Additional Search Filter dynamic operation property. The property value is ignored when the **Use advanced search** check box is cleared.
-   The connector logs the search filter sent to the LDAP server in the document log. At any time, you can [view the document log](/docs/Atomsphere/Integration/Integration%20management/t-atm-Viewing_a_document_log_d5679021-527b-4d11-a12e-1132830a592f.md).

:::

#### Additional Search Filter Example

Suppose you create a Query operation, select the group Object Type when browsing, and the filter expression you specify on the **Filters** tab matches entries having the cn attribute starting with the letter D. You specify the **Additional Search filter** value as groupType:1.2.840.113556.1.4.803:=8. This value matches "universal" LDAP groups.

In this example, the resulting filter is the following: `(&(objectClass=group)(cn=D*)(groupType:1.2.840.113556.1.4.803:=8))`

In contrast, if no filter expression is provided on the **Filters** tab, the resulting filter is the following: `(&(objectClass=group)(groupType:1.2.840.113556.1.4.803:=8))`

**Use range retrieval for group members \(Get, Query\)** - 
\(Applicable only for Active Directory\) If a group contains more members than the server-specific limit \(1,000 or 1,500 items\) in the member attribute, an Active Directory fixed threshold prevents the connector from returning the expected number of items. You can use range retrieval to return all values. Using range retrieval may impact performance, due to the operation having to contact the server multiple times for each query result.

:::info Attention

Pre-existing operations work as expected and do not use range retrieval until you select this check box and redeploy the process.

:::

-   When selected and if the items to retrieve contain the member attribute, the connector executes a series of commands to batch the values for the attribute and return them all. For each Get and Query result, the connector produces a JSON document with the member array field, containing all the attribute values.

-   When cleared, range retrieval is not applied to any attributes. If a group contains more members than the Active Directory fixed threshold, the connector does not return any values, regardless of how many exist on Active Directory.

:::note

For more information about the Active Directory fixed threshold and the maximum values retrieved, see the [Microsoft documentation](https://docs.microsoft.com/en-us/windows/win32/ad/enumerating-groups-that-contain-many-members).

:::

## Custom \(extended\) attributes 

When using the LDAP Import Wizard for Query and Get, you can optionally use the **Custom Attributes** field to enter additional attributes you want to add to the selected Object Type. This provides you the flexibility to include additional fields supported by your LDAP entries, but not part of the selected Object Type, in operation responses, response profiles, and Query filters.


:::note

Make sure to separate each additional attribute with a comma, do not enter a binary field, and for Active Directory, a field that is only available in a base search.

:::

You will notice the following changes after entering custom attributes:

-   The generated profile includes the custom attributes with their correct type.
-   Custom attributes become available when defining new Query filters and when updating existing filters.
-   The results of Query include the custom attributes.
-   The results of Get include the custom attributes.

If you enter a custom attribute that already exists in the selected Object Type, you will not notice any changes. If you do not need additional fields and leave this field blank, the Query and Get operations will complete normally.

## Create 

Create is an outbound action to add a new object to the data directory from any supported Object Class in the LDAP server retrieved when browsing. You must have the appropriate add permissions to perform this action. Otherwise, you receive an error. When browsing, you must select the Object Class that the new object belongs to.

This operation supports using a document property \(Distinguished Name\) to provide a unique identifier for the object you are adding to the data directory. This document property is required. Make sure and provide a value so the operation completes successfully and does not fail. The connector does not return an output JSON response document for this action.

## Get 

Get is an inbound action to look up an object in the data directory by its Distinguished Name \(DN\) based on the ID parameter specified in the Connector step. The connector looks up objects in the data directory by both the unique object ID and Object Class. If the object exists in the data directory, the connector returns the object. However, if the object ID does not exist, or if the object ID exists but it is for a different Object Type, the object is not found. You must have the appropriate search permissions to perform this action. Otherwise, you receive an error.

When successful, the connector returns a JSON response document containing the metadata about the object. For example, the person object contains the cn \(common name\), description, object class, see also \(a list of distinguished names that are related to the object\), sn \(surname\), and telephone number. Additionally, this action returns the Distinguished Named as a tracked property.

## Update 

Update is an outbound action to update \(add, replace, and remove\) the attribute values for an existing object in the data directory from any supported Object Class in the data directory retrieved when browsing. You must have the appropriate write permissions to perform this action. Otherwise, you receive an error.

This operation supports using a document property \(Distinguished Name\) to provide a unique identifier for the object you are updating in the data directory. This document property is required. Make sure and provide a value so the operation completes successfully and does not fail. The connector does not return an output JSON response document for this action.

#### Updating multiple attributes for an object

When using the Update operation, you create a one Update operation for each modification \(addition, removal, replacement\) you want to make to an attribute or to multiple attributes for an object. For example, you select the user object when browsing and want to add the new mobile telephone number, remove the home telephone number, and replace the manager. In this case, you must create three separate Update operations for each attribute action you want to complete. When you create the operation, the connector adds an extra field \(modificationType\) to each attribute in the generated profile.

One option you have to save time, reduce the number of Update operations you need to create, and provide flexibility so you can complete all attributes actions at once and override the settings in the operation, is to use the Map step. By using a map, you can modify the input profile generated in the Update operation for the user object, make the necessary additions, removals, and replacements to the user attributes all at once in the map \(by completing the modificationType and value for each field you want to add, remove, or replace\), and transform the user data with all of the attribute modifications from one profile to another.

## Query 

Query is an inbound action to search and find objects in the data directory for any supported Object Class in the LDAP server retrieved when browsing based on specific search criteria. You can search for objects matching the Object Type you selected when browsing. Query returns zero-to-many object records \(object names and attributes\) from a single Query request based on the filter you specify. You must have the appropriate search and read permissions to perform this action. Otherwise, you receive an error. Additionally, this action returns the Distinguished Named as a tracked property.

The bottom half of the Operation component page contains configuration options so you can add a query filter for the selected object \(for example, an account, person, etc.\) and filter out any attributes you do not to find. The LDAP Query action:

-   Supports one filter expression grouped by the AND and OR operators.

-   Supports the Not, Equal To, Approximate, Greater than or equal to, and Less than or equal to operators.

-   Supports the asterisk wildcard for matching substrings \(for example, `(cn=John*), (cn=*John*)`.



:::note

The following fields cannot be used in a Microsoft Active Directory query where the scope is different than Object:

-   msds-memberTransitive
-   msds-memberOfTransitive
-   msds-tokenGroupNames
-   msds-tokenGroupNamesGlobalAndUniversal
-   msds-tokenGroupNamesNoGCAcceptable

:::


## Dynamically setting the search context 

A dynamic search allows you to use a document property \(LDAP - Search Context\) in the **Set Properties step** and set the search context, rather than using the **Search Context** field in the Query operation. The document property provides you with the flexibility to reuse the same search context in a process instead of having to create a new Query operation for each search that you want to use.

For example, you want to reuse a search query for users by physical location, city, and office. You set the LDAP - Search Context document property parameter as ou=users,c=usa,st=new york,street=park avenue,dc=com The search context parameter value that you define as a document property overrides the value that you set in the operation.

## Delete 

Delete is an outbound action to delete a specific object from the data directory using the Distinguished Name \(DN\) as the ID parameter in the Connector step. You must have the appropriate delete permissions to perform this action. Otherwise, you receive an error.

The connector does not return an output JSON response document for this action.

## Execute 

Execute is an outbound action to rename an entry in the data directory by changing its Distinguished Name \(DN\). By changing the DN, you can move it to a new location. When browsing, select the Object Type of **Rename entry**. Provide a JSON input document to the connector with the following 2 fields and values:

-   current\_distinguished\_name
-   new\_distinguished\_name

If the JSON input document contains an entry where the current\_distinguished\_name matches an entry in the data directory, and an entry does not exist in the data directory having the specified new\_distinguished\_name from the JSON document, the connector renames the entry and moves it to the new distinguished name. For example, suppose you have an Active Directory user with the distinguished name of `uid=john.smith,ou=people,dc=example,dc=com`. You want to move that Active Directory user to a different ou \(ou=development\) in the data directory and have the new distinguished name of `uid=john.smith,ou=development,dc=example,dc=com`.

To do this, specify the following information in the input JSON document:

-   current\_distinguished\_name — `uid=john.smith,ou=people,dc=example,dc=com`
-   new\_distinguished\_name — `uid=john.smith,ou=development,dc=example,dc=com`

When you execute the process, the user’s Distinguished Name is renamed to the new Distinguished Name specified in the input JSON document and the user is moved to the new location in the data directory.

<OperationEnd />