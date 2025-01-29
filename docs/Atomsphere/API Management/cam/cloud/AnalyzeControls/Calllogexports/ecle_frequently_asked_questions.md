---
sidebar_position: 4
---

# ECLE FAQ

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-14129be1-2502-47c9-8433-ed00f14b3a94"/>
</head>


The following are frequently asked questions for the Enriched Call Log Export feature. 

**Q: How is this data different from what's already available in the API Management reporting dashboard or API?**

A: This is our first offering that provides call level details, such as URI, IP Address, etc., for individual calls. The data in the reporting dashboard and API represent aggregated sets of data. For the first time, you can take call level data and feed it in to the data warehouse, using the visualization of your choice. 

**Q: How do I enable the Call Log Export feature?**

A: If the feature is not enabled in your dashboard, it might be because you are not using the latest Control Center. The UI for this feature is not available for customers on the legacy dashboard. Should you want to enable this feature, open a case within the ticketing system providing the same information that you would have needed to provide above. 

**Q: After creating a Call Export Profile, how long does it take to receive my first file?**

A: Assuming your bucket is configured properly, and you have active traffic that matches the configured profile, you should see your first file in about 2-2.5 hours. 

**Q: What does the name of the files represent?**

A: The file name has underscore delimited values that represent 1) your API Management Area name (the name of your instance) 2) The beginning of the time slice for the logs included in the file 3) the ending time stamp of the time slice for logs included in the file 4) the time stamp representing when the extraction was run 5) The unique identified, or UUID of the Call Log Export Config (this UUID is helpful should you have multiple active profiles) 

**Q: Why does it take 30-45 minutes after the end of a period for a specific file to arrive in my bucket?**

A: We are optimizing this feature so that it is as accurate as possible and we deliver all logs at least once. We wait after the close of a time slice for late arriving data to come in. It then takes time to process and deliver the data. 

**Q: What are the causes of late arriving data and how do I receive it?**

A: There are various reasons data could arrive well after the transaction time, some examples are: API Management - Local Edition log upload schedules, or network issues between the traffic managers and our systems. If data arrives after we have started processing an export for a time slice, export is delayed for approximately 10 hours. A new file is delivered that is named similarly as the previously delivered file but it has a new extraction time element. 

**Q: There are calls missing, what's going on?**

A: More often than not, missing files/call data is due to data arriving after the processing window has closed. Data is delivered in 30 minute time slices. Data has up to 30 minutes from the close of the time window to arrive and still be considered 'on time', and arrive in the normally scheduled deliveries. There are various reasons data could arrive after the transaction time, some examples are Local Edition log upload schedules, network issues between the traffic managers and our systems. If data arrives after the processing window has ended, it is delivered roughly 4 hours later. Logs received greater than 12 hours late are excluded from processing. A new file is delivered that is named similarly as the previously delivered file but it has a new 'extraction time' element. 

**Q: Do I receive duplicate files?**

A: Our goal with this feature is to deliver data at least once, this means that should we be in doubt as to what you have received, we might re-send. The field 'request\_uuid' can be used within your system as an indexed field to ensure that you do not store duplicates. 

**Q: What format does the file come in?**

A: The files are gzipped CSVs. 

**Q: What does the name, Enriched Call Log Export, mean?**

A: With this feature we have attempted to make sure that you have all the information you need to create meaningful analytics without a lot of gymnastics with the data. Therefore, we have merged both call log data from the Traffic Manager with metadata such as API service name, Package name, Plan name, etc., the addition of this data is what we are referring to as 'Enriched'. 

**Q: What do the field names represent?**

A: A table of field names and descriptions can be found below. 

**Q: Can I export data for a previous date?**

A: Not currently, but this is under consideration for future development. 
## **ECLE Field Names Tables**

|**Field Name** |**Description** |
| :-: | :-: |
|api\_key |API key used by application. Provided both when used by itself and in relation to an OAuth2 based call. |
|api\_method\_name |Name of Method as configured via the Method detection setting on the endpoint. |
|bytes |Bytes in response. |
|cache\_hit |True/false on cache hit served by API Management. |
|client\_transfer\_time |Total time transferring from API Management to client on outbound. |
|connect\_time |Total time Traffic Manager negotiating connection with customer origin servers (0 value means reusing existing connection). |
|endpoint\_name |Name of endpoint |
|http\_method |HTTP method (get, post, etc.) |
|http\_status\_code |HTTP status code |
|http\_version |HTTP version |
|oauth\_access\_token |OAuth access token value |
|org\_name |(string) Organization Name for the Parent organization. If the object is not associated with an Organization, then this value is empty. |
|org\_uuid |(string) Unique identifier for a Parent organization. If the object is not associated with an Organization, then this value is empty. |
|package\_name |Name of package |
|package\_uuid |Unique ID for the package, used with V3 API. |
|plan\_name |Name of plan |
|plan\_uuid |Unique GUID for plan, used with v3 API. |
|pre\_transfer\_time |Process time by API Management prior to transfer. |
|qps\_throttle\_value |Queries per second throttle count value. |
|quota\_value |Count against call quota. |
|referrer |Client referrer information. |
|remote\_total\_time |Total call time spent waiting for response from origin by API Management. |
|request\_host\_name |Name of host invoked by call. |
|request\_id |ID of request (time(epoch)+serviceid+API\_key). |
|request\_time |Date/time of request in ISO 8601. |
|request\_uuid |Unique id for request. |
|response\_string |Response string which includes source of error (Mashery vs origin). |
|service\_definition\_endpoint\_uuid |UUID for endpoint, used with v3 API. |
|service\_id |Service ID (Also sometimes known as SPKEY or Servicekey). |
|service\_name |Name of service in which endpoint is located. |
|src\_ip |Source IP address of Client. |
|ssl\_enabled |True/false SSL used in inbound connection. |
|sub\_org\_name |(string) Sub Organization Name. If the object is not associated with a Sub organization, then this value is empty. |
|sub\_org\_uuid |(string) Unique identifier for the Sub organization. If the object is not associated with a Sub organization, then this value is empty. |
|total\_request\_exec\_time |Total time from receipt of request to completion of response to client, formerly exec\_time. |
|traffic\_manager |Traffic manager host name |
|traffic\_manager\_error\_code |Error code returned by Traffic Manager |
|uri |URI (with max length imposed) |
|user\_agent |User Agent of client |

