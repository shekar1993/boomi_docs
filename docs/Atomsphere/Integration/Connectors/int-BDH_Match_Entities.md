# Match Entities operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c521cab0-4ad1-4907-bc6c-a57d08b6a10e"/>
</head>


The Match Entities operation sends a batch of entities from a contributing source, applies match rules, and returns match results for each entity in the batch. This operation helps you test how match rules apply to entities coming from a source so you can see potential duplicate records and make match rule adjustments. 

The response is returned in XML format. The operation aligns with the [Match Entities](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/r-mdm-Match_Entities_d429e265-e650-4ad4-8f9b-5fe08c2db157.md) operation in the Repository API.

## Prerequisites

You must have the following: 

- A Hub repository 
- A deployed model in the repository
- Source attached to the deployed model
- Open Source channel in the deployed model > Sources tab. Refer to [Loading data from a source](/docs/Atomsphere/Master%20Data%20Hub/Deployment/t-mdm-Loading_data_from_a_source_8c5915de-5144-45a0-8d21-b798879e174a.md).
- Source is set to contribute data
- A deployed Boomi Atom to run connector operations (Integration > Manage > Atom Management)

## Setting up the Match Entities operation

1. In the connector, select **Match Entities** in the **Action** drop-down.
2. Click the plus icon in the **Operation** field to create a new operation.
3. Click **Import Operation**.
4. Select the Atom you want to use to run your integration. The Atom must be online.
5. Ensure [the connection you created](/docs/Atomsphere/Integration/Connectors/int-Boomi_Data_Hub_connection.md) to the repository is selected in the **Connection** field.
6. **Optional**: In **Source**, enter the source ID for the source that is contributing data to the repository. The source ID here acts as a filter to help you select the deployed model name. You can find the source ID on the Sources page in Hub.
7. **Optional**: In **Filter**, enter a regex as a filter to help you select the deployed model name.
8. Click **Next**.
9. Select the deployed model name. 
10. Click **Next**. 
9. Click **Finish**. The import operation creates a request and response profile. You can use these profiles to map data in a [Map step within your integration](/docs/Atomsphere/Integration/Process%20building/c-atm-Map_components_87f669d6-4999-445f-9f29-ed24e79c92dd.md).
10. Enter the source ID in **Source** to indicate the contributing source for the entities.
11. **Optional**: Select **Return Application Error Responses** if you want the operation to continue when there is an application error. Processing continues and passes the error to the next component processed as the connection output. When the checkbox is clear, the process stops and reports the error in Process Reporting.
12. Click **Save and Close**.
13. Click **OK**.
14. Click **Save**.


## Response examples

Each match results is returned as a separate document. The response includes the match result status.

:::info 

The connector uses administrator privileges to authenticate. Therefore, masked field values are unmasked in responses.

:::



```xml
   <MatchResult matchRule="Incoming name is similar to (Jaro-Winkler) Existing name" status="SUCCESS">
     <entity>
       <contact>
         <id>1</id>
         <name>bobby</name>
         <city>berwyn</city>
       </contact>
     </entity>
     <match>
       <contact>
         <id>e6e1b847-d61a-46d9-a610-c678ba40ca41</id>
         <name>bob</name>
         <city>berwyn</city>
       </contact>
       <fuzzyMatchDetails>
         <field>name</field>
         <first>BOBBY</first>
         <second>BOB</second>
         <method>jarowinkler</method>
         <matchStrength>0.90666664</matchStrength>
         <threshold>0.85</threshold>
       </fuzzyMatchDetails>
     </match>
     <duplicate>
       <contact>
         <id>fc8cd5be-ac26-4e9a-9d0c-6b397a124172</id>
         <name>bob</name>
         <city>berwyn</city>
       </contact>
       <fuzzyMatchDetails>
         <field>name</field>
         <first>BOBBY</first>
         <second>BOB</second>
         <method>jarowinkler</method>
         <matchStrength>0.90666664</matchStrength>
         <threshold>0.85</threshold>
       </fuzzyMatchDetails>
     </duplicate>
   </MatchResult>
```

```xml
   <MatchResult status="ALREADY_LINKED">
     <entity>
       <contact>
         <id>2</id>
         <name>mike</name>
         <city>chesterbrook</city>
       </contact>
     </entity>
  </MatchResult>

```

| Element | Definition |
| ----    | -----      |
|matchRule  |  Match rule whose application resulted in a match (if there was a match).|
|status     |  Status of the match. Read [Match result status definitions](#match-result-status-definitions) for more information.|
|entity     |  Contains a copy of the entity as it appeared in the request body. |
|match         |    Each matching golden record not yet linked to an entity in the source system. The id is the system golden record ID|
|duplicate       |    Each matching golden record already linked to an entity in the source system. The id is the system golden record ID|
|fuzzyMatchDetails|  Indicates fuzzy matching is specified for the match or duplicate record. <ul><li>field - the field containing the data used for matching.</li><li>first - the value of the field referenced first in the applied match rule. This value is either from the incoming entity or the matched golden record.</li><li>second - the value of the field referenced second in the applied match rule. This value is either from the incoming entity or the matched golden record.</li><li>method - the similarity algorithm specified by the applied match rule — either jarowinkler (Jaro-Winkler), levenshtein, bigram, trigram or soundex.</li><li>matchStrength - the strength of the fuzzy match. A value of 1.0 indicates perfect similarity.</li><li>threshold - the tolerance level for application of the similarity algorithm specified by the applied match rule.</li></ul>              |

## Match result status definitions

| Status    |  Definition |
| ----      | -----       |
| SUCCESS         | Request was successfully processed.|
| FAILED_TO_RUN   | Internal error occurred.|
| TOO_MANY_MATCHES | There are 10 or more matching elements (1,000 or more in the case of an exact matching expression grouped with a fuzzy matching expression).|
| ALREADY_LINKED | Entity is already linked to an entity in the source system.|
|MATCH_REFERENCE_FAILURE | Entity matches on a reference field but the field value does not resolve to a golden record. The response omits the match element and includes a message with details about the match reference failure.|