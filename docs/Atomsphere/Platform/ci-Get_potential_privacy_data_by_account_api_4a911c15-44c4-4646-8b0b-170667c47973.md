# Get Potential Privacy Data By Account API

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-4a911c15-44c4-4646-8b0b-170667c47973"/>
</head>

The Get Potential Privacy Data By Account API provides programmatic access to identify potential personally identifiable information (PII) within a Boomi account at the process, field, and geographical location level. The API provides a list of processes with PII details arranged in classifications of applications and fields.

You can use the GET operation within the API to:

- Identify business applications (connected to Integration) containing potential PII.
- Tag and classify potential PII for both potential PII identification and potential PII movement to audit and quickly assess the impact of a data breach from an application.

| Response Field | Data Type | Description |
| --- |--- | --- |
| accountName | *String* | The name of the Boomi account the data is for. |
| total | *Integer* | The total number of PII fields found in the Boomi account. |
| totalNumberOfProcesses | *Integer* | The total number of processes in the Boomi account having potential PII fields. |
| account | *String* | The Boomi account ID having the same ID as the ID passed as a parameter in the request of the API.Each account contains a collection of all the fields in the profiles. Each group of fields contains the field id, profile component id, and field name. |
| processes | | A collection of processes in the Boomi account, grouped by the following fields:<br />- Version (Integer) — The version of the process component.<br />- Total (Integer) — The total number of PII fields found in the process.<br />- boomiComponentId (String) — The process ID as it relates to the PII<br />- service.Name (String) — The name of the process.<br />- Applications — A collection of JSON objects representing the flow of data from one connector to another.<br />  **Attention:** This is not available in Early Access.<br />- Classifications — A collection type of PII, such as financial, health, job, and personal. Each group of classification consists of the field ID/IDs identified as a corresponding type of PII and the total number of fields in each classification. |
| applications |  | A collection of JSON objects representing the flow of data, grouped by the following fields:<br />boomiProcessComponentId — The process ID to which the application maps to.<br />name — The name of the connector.<br />geoLocationData — A collection of geographical data of the hostname.<br /> --ip — The IP address of the host.<br />--regioname — The host region, state, and province.<br />--hostname — The DNS of the hostname.<br />--countryname — The country of the host.<br />--regioncode — The state code abbreviation.<br />--zip — The zip code, if applicable.<br />--latitude — The latitude coordinates represented as a floating point value.<br />--longitude — The longitude coordinates represented as a floating point value.<br />--countrycode — The country abbreviation.<br />--Continent code — The continent abbreviation.<br />--Continent name — The name of the continent.<br />--city — The name of the city. |

## Supported operations

| GET | QUERY | CREATE | UPDATE | EXECUTE | DELETE |
| --- | --- | --- | --- | --- | --- |
| ![img](./Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg) Supported | ![img](./Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg) Not supported | ![img](./Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg) Not supported | ![img](./Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg) Not supported | ![img](./Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg) Not supported | ![img](./Images/img-atm-not_supported_api_88d3bc76-0a84-4175-b675-18dda09affba.svg) Not supported |

## RESTish implementation

- ### PII service

  Send a request to:

  `https://pii.intelligence.boomi.com/pii/account/ACCOUNT_ID?numOfResults=2`

  where Account_ID is the ID of the authenticating Boomi account for the request.

- ### GET operation

  Send an HTTP GET to:

  `https://api.boomi.com/api/rest/v1/Account_ID/jwt/generatetoken`

  where Account_ID is the ID of the authenticating Boomi account for the request.

  :::note
  
  The request requires Basic Authentication with Integration credentials.

  :::

  You can filter the number of processes you want to return in the response using the `numOfResults` query parameter. The response body is the same as when getting potential PII by account. However, using `numOfResults` returns just the number of processes passed in the query parameter. For example,`account/${account_id}?numOfResults=10` returns only 10 processes for the specified account_id.

  JSON response:

  ```json
  {
   "accountName": "${account_name}"
    "total": “${Total_Num_of_PII_Flds_found}”,
   "totalNumberOfProcesses":”${Total_Num_OF_Processes_With_PII}”,
    "account": "${Account_Id}",
    "fields": [
      	{boomiProcessComponentId": "${Process component_id}",
  "boomiProfileComponentId": "${Profile_component_id}",
  "id": ${field_id},
  "name": "${field_name}",
  "piiClassifications": [
  ${Classification}
    ],
    "processes": [
      	{
        "version": "${version}",
        	      "total": "${Total_Num_of_PII_Flds_found}",
       	      "boomiComponentId": "${process_Id}",
       	      "name": "${Process_Name}",
       	      "applications":[{"from": "${application_id}","to":${applicationid}"}],
       	      "classifications": { 
  		"classification": "${Classification}",
  	 	"total": "${Total_Num_of_PII_Flds_found}",
  	 	fieldIds": ["${Field_IDs}"]
        	       }
                   }
    ],
     "applications": [
     	 {
        	   "boomiProcessComponentId”: “${Process_Id}”,
    		"name": "${Type_Of_Connector:Reference Name}"
       		 "geoLocationData": {
         			 "endPointInfo": "${IP_or_EndPoint_URL}",
                              "hostname":${host_name_server}",
         			 "countryName": "${country_name}",
         			 "regionCode": "${region_code}",
     			 "regionName": "${region_name}",
          			 "zip": "${zip}",
        			 "latitude": "${latitude}",
     			 "longitude": "${longitude}"
         			 "countryCode": "${country_code}",
         			 "continentCode": "${continent_code}",
          			 "continentName": "${continent_name}",
          			 "city": "${city}"
        		}
       
      	}
      ]
  }
  ```
  