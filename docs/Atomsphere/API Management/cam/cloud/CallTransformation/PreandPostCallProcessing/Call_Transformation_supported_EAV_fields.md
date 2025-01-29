---
sidebar_position: 6
--- 

# Call Transformation Supported EAV Fields

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-9bf86b30-8cb3-4a04-8802-ab4db5ab6f68"/>
</head>

## **Plans** 

|**S.No.** |**Field Name** |**Type**|**Field Description** |**Support for ASR Connector (Yes/No)**|
| :- | :- | :-: | :- | :-: |
|1|name |String|This is the plan name associated with API key using which request has been made to API Management. |Yes|
|2|qps\_limit\_ceiling |Integer|Maximum number of API requests per second allowed for this plan. |Yes|
|3|qps\_limit\_exempt |Boolean|This field describes whether this plan is exempted for QPS throttling. |Yes|
|4|rate\_limit\_ceiling|Integer|Maximum number of API requests allowed for this plan over time period defined in rate\_limit\_period.|Yes|
|5|rate\_limit\_period|String|This field could be minute/second/hour/day/month. This field is related to rate\_limit\_ceiling and defines period for rate\_limit\_ceiling.|Yes|
|6|rate\_limit\_exempt|Boolean|This field describes whether this plan is exempted for rate limit throttling.|Yes|
|7|key\_qps\_limit\_ceiling|Integer|Defines maximum number of API requests per second allowed for associated package key in case qps\_limit\_key\_override\_allowed is true. If qps\_limit\_key\_override\_allowed is false, its value will be null.|Yes|
|8|key\_qps\_limit\_exempt|Boolean|Defines whether associated package key is exempted for QPS throttling in case qps\_limit\_key\_override\_allowed is true. If qps\_limit\_key\_override\_allowed is false, its value will be null.|Yes|
|9|key\_rate\_limit\_ceiling|Integer|Defines maximum number of API requests allowed for associated package key over time period defined in key\_rate\_limit\_period in case rate\_limit\_key\_override\_allowed is true. If rate\_limit\_key\_override\_allowed is false, its value will be null.|Yes|
|10|key\_rate\_limit\_period|String|This field could be minute/second/hour/day/month. This field is related to key\_rate\_limit\_ceiling and defines period for key\_rate\_limit\_ceiling. This field will be defined only if rate\_limit\_key\_override\_allowed is true otherwise its value will be null.|Yes|
|11|key\_rate\_limit\_exempt|Boolean|Defines whether associated package key is exempted for rate limit throttling in case rate\_limit\_key\_override\_allowed is true. If rate\_limit\_key\_override\_allowed is false, its value will be null.|Yes|
|12|effective\_qps\_limit\_ceiling|Integer|Defines effective maximum number of API requests per second allowed for this plan after considering value of qps\_limit\_ceiling, key\_qps\_limit\_ceiling and qps\_limit\_key\_override\_allowed. If qps\_limit\_key\_override\_allowed is true, then it will return key\_qps\_limit\_ceiling otherwise it will return qps\_limit\_ceiling.|Yes|
|13|effective\_qps\_limit\_exempt |Boolean|Defines whether plan is exempted for QPS throttling after considering value of qps\_limit\_exempt, key\_qps\_limit\_exempt and qps\_limit\_key\_override\_allowed. If qps\_limit\_key\_override\_allowed is true, then it will return key\_qps\_limit\_exempt otherwise it will return qps\_limit\_exempt.|Yes|
|14|effective\_rate\_limit\_ceiling|Integer|Defines maximum number of API requests allowed for plan over time period defined after considering value of rate\_limit\_ceiling, key\_rate\_limit\_ceiling and rate\_limit\_key\_override\_allowed. If rate\_limit\_key\_override\_allowed is true, then it will return key\_rate\_limit\_ceiling otherwise it will return rate\_limit\_ceiling.|Yes|
|15|effective\_rate\_limit\_period|String|This field could be minute/second/hour/day/month. This field is related to effective\_rate\_limit\_ceiling and defines period for effective\_rate\_limit\_ceiling. If rate\_limit\_key\_override\_allowed is true, then it will return key\_rate\_limit\_period otherwise it will return rate\_limit\_period.|Yes|
|16|effective\_rate\_limit\_exempt|Boolean|Defines whether plan exempted for rate limit throttling after considering value of rate\_limit\_exempt, key\_rate\_limit\_exempt and rate\_limit\_key\_override\_allowed. If rate\_limit\_key\_override\_allowed is true, then it will return key\_rate\_limit\_exempt otherwise it will return rate\_limit\_exempt.|Yes|

## Package

|**S.No.**|**Field Name** |**Type**|**Field Description** |**Support for ASR Connector (Yes/No)**|
| :- | :- | :-: | :- | :-: |
|1|name |String|This is the package name associated with API key using which request has been made to API Management. |Yes|
## **Package Key**

|**S.No.** |**Field Name** |**Type**|**Field Description** |**Support for ASR Connector (Yes/No)**|
| :- | :- | :-: | :- | :-: |
|1|mapi |String|This is the API key using which request has been made to API Management. |Yes|
|2|key\_qps\_limit\_ceiling|Integer|Defines maximum number of API requests per second allowed for package key.|Yes|
|3|key\_qps\_limit\_exempt |Boolean|Defines whether package key is exempted for QPS throttling.|Yes|
|4|key\_rate\_limit\_ceiling|Integer|Defines maximum number of API requests allowed for package key over time period defined in key\_rate\_limit\_period.|Yes|
|5|key\_rate\_limit\_period|String|This field could be minute/second/hour/day/month. This field is related to key\_rate\_limit\_ceiling and defines period for key\_rate\_limit\_ceiling. |Yes|
|6|key\_rate\_limit\_exempt|Boolean|Defines whether package key is exempted for rate limit throttling.|Yes|
|7|Custom Field / EAV|String/ Integer/ Boolean |Any custom field defined for package key. |Yes|

## Application

|**S.No.**|**Field Name**|**Type**|**Field Description** |**Support for ASR Connector (Yes/No)**|
| :- | :- | :-: | :- | :-: |
|1 |name |String|This is the application name associated with API key using which request has been made to API Management. |Yes|
|2|external\_id|String|-|Yes|
|3|Custom Field / EAV|String / Integer/ Boolean |Any custom field defined for application. |Yes|
## **Member**

|**S.No.** |**Field Name** |**Type**|**Field Description** |**Support for ASR Connector (Yes/No)**|
| :- | :- | :-: | :- | :-: |
|1|name |String|This is the user name associated with API key using which request has been made to API Management. |Yes|
|2|email|String|User email address.|Yes|
|3|external\_id|String|-|Yes|
|4|Custom Field / EAV|String / Integer/ Boolean |Any custom field defined for member. |Yes|

