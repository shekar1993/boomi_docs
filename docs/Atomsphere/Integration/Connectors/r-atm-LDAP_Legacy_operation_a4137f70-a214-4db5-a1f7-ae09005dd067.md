
import OperationEnd from './_operationEnd.md'

# LDAP (Deprecated) operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a4137f70-a214-4db5-a1f7-ae09005dd067"/>
</head>


The LDAP (Deprecated) operation defines how to interact with your LDAP server instance.

Not all actions are available for each operation type. You must create a separate operation component for each action required for your integration.

The LDAP (Deprecated) connector operations support the following actions:

-   Inbound: Get and Query retrieve document records from an LDAP server instance. Inbound operations require unique parameters at runtime to request data. You can define these values statically or dynamically in a process.
-   Outbound: Create and Update send data to an LDAP server instance. Outbound operations first send request XML data into the connector that corresponds with the defined XML profile. Request documents are typically the destination output of a map. You can set parameters on the outbound connector's Parameter tab within the process to supply static or dynamic request values.


## Data returned by outbound actions 

Create and Update objects do not return data, but they do return a status message that you can rout. The following example is a successfully returned object:

```
<result>
  <status>Success</status> 
  <message>assignUser Success</message>
</result>
```

If the Return Application Error Responses check box is on, errors are returned from all objects. The following example is an error response:

```
<result>
   <status>Error</status>
   <message>\[LDAP: error code 53 - 00000561: SvcErr: DSID-031A11E5, problem 5003 (WILL_NOT_PERFORM), data 0??\]</message>
 </result>
```

## Get 

For the inbound Get action, supply a single internal ID for the user record you want to retrieve. The following object is supported:

|Object Type|Description|
|-----------|-----------|
|**Get user details**|This action returns a single user from the Active Directory or LDAP. ID is a required parameter that refers to the user distinguished name \(DN\).|

## Query 

The inbound Query action requires you to supply static or dynamic request parameters \(filters\) to control the object records being selected from LDAP. Zero to many object record documents can be returned from a single Query request. After selecting the Query connector action and using the Import Wizard, you can add query filters. The following objects are supported:

|Object Type|Description|
|-----------|-----------|
|**Query Users**|This query returns a list of users from the Active Directory or LDAP and requires at least a searchBase and a filter.|
|**Check for the existence of username in a group**|This query returns a status message regardless of whether a user exists in a group. You can identify the user by using distinguished name or GUID. userDN and groupDN filter parameters are required.|
|**Query groups**|This query returns a list of groups from the Active Directory or LDAP and requires at least a searchBase.|
|**Query Objects**|This query returns a list of objects from the Active Directory or LDAP and requires at least a searchBase and a filter.|

## Create 

The outbound Create action performs a new action in the LDAP object defined in the operation. The following objects are supported:

|Object Type|Required Inputs — Default Properties|Description|
|-----------|------------------------------------|-----------|
|**Add a user to the directory**|userDN,m\_objectClass|This action creates a user in the Active Directory or LDAP. You must provide the valid Object Class and userDN to successfully create a user.|
|**Add a group to the directory**|groupDN,m\_objectClass|This action creates a group in the Active Directory or LDAP|
|**Assign a user to a group**|userDN,groupDN|This action assigns a user to a group. userDN is the distinguished name of the user; groupDN is the distinguished name of the group.|
|**Add an object to the directory**|objectDN,m\_objectClass|This action creates an object in the Active Directory or LDAP. You must provide the valid Object Class and objectDN to successfully create an object.|

## Update 

The outbound Update action updates existing records in the LDAP object defined in the operation. The following objects are supported:

|Object Type|Required Inputs — Default Properties|Description|
|-----------|------------------------------------|-----------|
|**Update a user in the directory**|userDN,updateGUID|This action updates a user in the Active Directory or LDAP. You must provide the userDN \(for example, uid=zylean,ou=Users,dc=wdcigroup,dc=net\) or the objectGUID if that is turned on. You can use this action to remove a value from an attribute by passing an empty space \(" "\) value to the XML element.|
|**Remove a user from a group**|userDN,groupDN|This action removes a user from a group. userDN is the distinguished name of the user; groupDN is the distinguished name of the group.|
|**Move or update a user/object Distinguished Name**|userDN,newUserDN|This action renames a user or object distinguished name. Alternatively, you can move the user or object to another tree in Active Directory or LDAP|
|**Update an object in the Directory**|objectDN,updateGUID|This action updates the existing object in the Active Directory or LDAP. To update an object, provide the objectDN \(for example, uid=zylean,ou=Users,dc=wdcigroup,dc=net\) or the objectGUID if that is turned on. You can use this action to remove a value from an attribute by passing an empty space \(" "\) value to the XML element.|
|**Remove an object from the Directory**|objectDN|This action deletes an object from Active Directory or LDAP.|

## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate.

The following table describes the default field definitions for each action type:



**Object** - 
An object defines what you want to integrate or the action to run, which you select in the Import Operation wizard.

**Return Application Error Responses** - 
This setting controls whether an application error prevents an operation from completing:
- If you clear the setting, the process stops and reports the error on the Process Reporting page.

- If you select the setting, processing continues and passes the error response to the next component processed as the connection output.

**Use objectGUID to identify record** - 
\(Update and Query\) This is a configurable option in the Update action. If selected, provide the objectGUID in the Update request. If cleared, supply the full DN \(distinguished name\) to perform the Update action.

**Base Object to search from** - 
(Query only\) This is a required field for the Query action. You can set it here as a connection property \(global for all queries\) or pass it into the query using the searchBase parameter of the Query profile \(dynamic\).

**Attributes** - 
The attributes to use for querying an object.

**Query Limit** - 
\(Query only\) The maximum number of rows to return in a single query. The default is -1.

<OperationEnd />