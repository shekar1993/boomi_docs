# Analysis on EAV for inclusion in ASR Request

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-1c794c84-66cd-46cc-9745-0cd524d8c2d3"/>
</head>

## Objective

It is suggested that EAV and standard fields should also be part of ASR request. R4 generally supports below six models for including EAVs and Standard fields:

- Application

- Member

- Plan

- Package

- Service Key

- Package Key

Generally its not good idea to expose all standard fields for above models as some of the standard fields are secured and should not be exposed. If large number of standard fields are exposed, then there is also an impact on performance as size of the blob containing these fields increase which is directly proportional to time taken to retrieve this blob from database or memcache.

This page is designed to discuss what EAVs and Standard fields should be part of ASR Service.

## Supported Models

This section will describe all standard fields for supported model and whether those fields should be 

### Plans
| **S.No.** | **Field Name** | **<p>Available In Proxy Core</p><p>(![tick](../Images/tick_mark.jpg)/![error](../Images/error.png))</p>** | **Proxy-Core Object Name** | **Proxy-Core Field Name** | **<p>Support for ASR Request</p><p>(![tick](../Images/tick_mark.jpg)/![error](../Images/io_docs_error_tip.jpg))</p>** |
|---|---|---|---|---|---|
| **1** | id | ![tick](../Images/tick_mark.jpg) | PlanConfiguration | Id | ![tick](../Images/tick_mark.jpg) |
| **2** | area\_id | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **3** | package\_id | ![tick](../Images/tick_mark.jpg) | PlanConfiguration.PackageConfiguration | Id | ![tick](../Images/tick_mark.jpg) |
| **4** | name | ![tick](../Images/tick_mark.jpg) | PlanConfiguration | planName | ![tick](../Images/tick_mark.jpg) |
| **5** | description | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **6** | notes | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **7** | rate\_limit\_ceiling | ![tick](../Images/tick_mark.jpg) | PlanConfiguration | rateLimitCeiling |  |
| **8** | rate\_limit\_exempt | ![tick](../Images/tick_mark.jpg) | PlanConfiguration | rateLimitExempt |  |
| **9** | rate\_limit\_order\_overide\_allowed | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **10** | rate\_limit\_key\_override\_allowed | ![tick](../Images/tick_mark.jpg) | PlanConfiguration | rateLimitKeyOverrideAllowed |  |
| **11** | rate\_limit\_period | !![tick](../Images/tick_mark.jpg) | PlanConfiguration | rateLimitPeriod |  |
| **12** | qps\_limit\_ceiling | ![tick](../Images/tick_mark.jpg) | PlanConfiguration | qpsLimitCeiling |  |
| **13** | qps\_limit\_exempt | ![tick](../Images/tick_mark.jpg) | PlanConfiguration | qpsLimitExempt |  |
| **14** | qps\_limit\_order\_override\_allowed | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **15** | qps\_limit\_key\_override\_allowed | ![tick](../Images/tick_mark.jpg) | PlanConfiguration | qpsLimitKeyOverrideAllowed |  |
| **16** | order\_max | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **17** | order\_moderation\_threshold | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **18** | response\_filter\_override\_allowed | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **19** | email\_template\_set\_id | ![tick](../Images/tick_mark.jpg) | PlanConfiguration | emailTemplateSetId |  |
| **20** | eav | ![tick](../Images/tick_mark.jpg) | PlanConfiguration | eav | ![tick](../Images/tick_mark.jpg) |
| **21** | created | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **22** | updated | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **23** | is\_public | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **24** | is\_moderated | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **25** | status | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **26** | uuid | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |

### **Packages**
| **S.No.** | **Supported Field Name By Connector** | **<p>Available In Proxy Core</p><p>(![tick](../Images/tick_mark.jpg)/![error](../Images/io_docs_error_tip.jpg))</p>** | **Proxy-Core Object Name** | **Proxy-Core Field Name** | **<p>Support for ASR Request</p><p>(![tick](../Images/tick_mark.jpg)/![error](../Images/io_docs_error_tip.jpg))</p>** |
|---|---|---|---|---|---|
| **1** | id | ![tick](../Images/tick_mark.jpg) | PackageConfiguration | id | ![tick](../Images/tick_mark.jpg) |
| **2** | area\_id | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **3** | name | ![tick](../Images/tick_mark.jpg) | PackageConfiguration | name | ![tick](../Images/tick_mark.jpg) |
| **4** | description | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **5** | notify\_developer\_period | ![tick](../Images/tick_mark.jpg) | PackageConfiguration | notifyDeveloperPeriod |  |
| **6** | notify\_developer\_near\_quota | ![tick](../Images/tick_mark.jpg) | PackageConfiguration | notifyDeveloperNearQuota |  |
| **7** | notify\_developer\_over\_quota | ![tick](../Images/tick_mark.jpg) | PackageConfiguration | notifyDeveloperOverQuota |  |
| **8** | ` `notify\_developer\_over\_throttle | ![tick](../Images/tick_mark.jpg) | PackageConfiguration | notifyDeveloperOverThrottle |  |
| **9** | notify\_admin\_period | ![tick](../Images/tick_mark.jpg) | PackageConfiguration | notifyAdminPeriod |  |
| **10** | notify\_admin\_near\_quota | ![tick](../Images/tick_mark.jpg) | PackageConfiguration | notifyAdminNearQuota |  |
| **11** | notify\_admin\_over\_quota | ![tick](../Images/tick_mark.jpg) | PackageConfiguration | notifyAdminOverQuota |  |
| **12** | notify\_admin\_over\_throttle | ![tick](../Images/tick_mark.jpg) | PackageConfiguration | notifyAdminOverThrottle |  |
| **13** | notify\_admin\_emails | ![tick](../Images/tick_mark.jpg) | PackageConfiguration | notifyAdminEmails |  |
| **14** | near\_quota\_threshold | ![tick](../Images/tick_mark.jpg) | PackageConfiguration | nearQuotaThreshold |  |
| **15** | eav | ![tick](../Images/tick_mark.jpg) | PackageConfiguration | eav | ![tick](../Images/tick_mark.jpg) |
| **16** | created | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **17** | updated | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **18** | key\_adapter | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **19** | key\_length | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **20** | shared\_secret\_length | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **21** | status | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **22** | uuid | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **23** | org\_id | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |

### **Applications**

| **S.No.** | **Supported Field Name By Connector** | **<p>Available In Proxy Core</p><p>(![tick](../Images/tick_mark.jpg)/![error](../Images/io_docs_error_tip.jpg))</p>** | **Proxy-Core Object Name** | **Proxy-Core Field Name** | **<p>Support for ASR Request</p><p>(![tick](../Images/tick_mark.jpg)/![error](../Images/io_docs_error_tip.jpg))</p>** |
|---|---|---|---|---|---|
| **1** | id | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | appId | ![tick](../Images/tick_mark.jpg) |
| **2** | created | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **3** | updated | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **4** | handle | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **5** | name | ![error](../Images/error.png) |  |  | ![tick](../Images/tick_mark.jpg) |
| **6** | summ | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **7** | type | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **8** | commercial | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **9** | ads | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **10** | ads\_system | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **11** | usage\_model | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **12** | tags | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **13** | notes | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **14** | how\_did\_you\_hear | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **15** | preferred\_protocol | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **16** | preferred\_output | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **17** | prefs | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **18** | eav | ![error](../Images/error.png) |  |  | ![tick](../Images/tick_mark.jpg) |
| **19** | external\_id | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **20** | uri | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **21** | status | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **22** | area\_id | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **23** | is\_packaged | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| 24 | oauth\_redirect\_uri | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| 25 | uuid | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |

### **Keys**

| **S.No.** | **Supported Field Name By Connector** | **<p>Available In Proxy Core</p><p>(![tick](../Images/tick_mark.jpg)/![error](../Images/io_docs_error_tip.jpg))</p>** | **Proxy-Core Object Name** | **Proxy-Core Field Name** | **<p>Support for ASR Request</p><p>(![tick](../Images/tick_mark.jpg)/![error](../Images/io_docs_error_tip.jpg))</p>** |
|---|---|---|---|---|---|
| **1** | id | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | id |  |
| **2** | created | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | created |  |
| **3** | updated | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | updated |  |
| **4** | area\_id | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | areaId | ![tick](../Images/tick_mark.jpg) |
| **5** | spkey | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | spkey | ![tick](../Images/tick_mark.jpg) |
| **6** | mapi | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | mapi | ![tick](../Images/tick_mark.jpg) |
| **7** | handle | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | handle | ![tick](../Images/tick_mark.jpg) |
| **8** | status | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | status |  |
| **9** | rate\_limit\_ceiling | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | rateLimitCeiling | ![tick](../Images/tick_mark.jpg) |
| **10** | qps\_limit\_ceiling | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | qpsLimitCeiling | ![tick](../Images/tick_mark.jpg) |
| **11** | rate\_limit\_exempt | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | rateLimitExempt |  |
| **12** | qps\_limit\_exempt | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | qpsLimitExempt |  |
| **13** | request\_notification\_blocked | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | requestNotificationBlocked |  |
| **14** | required\_referer | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | requiredReferer |  |
| **15** | passwd | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | passwd | ![error](../Images/error.png) |
| **16** | secret | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | secret | ![error](../Images/error.png) |
| **17** | permitted\_request\_methods | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | permittedRequestMethods |  |
| **18** | permitted\_api\_methods | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | permittedApitMethods |  |
| **19** | permitted\_api\_paths | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | permittedApiPaths |  |
| **20** | prefs | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | prefs |  |
| **21** | eav | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | eav | ![tick](../Images/tick_mark.jpg) |
| **22** | app\_id | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | appId | ![tick](../Images/tick_mark.jpg) |
| **23** | developer\_class\_id | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | developerClassId |  |

### **Package\_Keys**

| **S.No.** | **Supported Field Name By Connector** | **<p>Field Available In Proxy Core</p><p>(![tick](../Images/tick_mark.jpg)/![error](../Images/io_docs_error_tip.jpg))</p>** | **Proxy-Core Object Name** | **Proxy-Core Field Name** | **<p>Support for ASR Request</p><p>(![tick](../Images/tick_mark.jpg)/![error](../Images/io_docs_error_tip.jpg))</p>** |
|---|---|---|---|---|---|
| **1** | id | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration.PackageKeySettings | id |  |
| **2** | area\_id | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | areaId | ![tick](../Images/tick_mark.jpg) |
| **3** | app\_id | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | appId | ![tick](../Images/tick_mark.jpg) |
| **4** | package\_id | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration. PackageKeySettings | packageId | ![tick](../Images/tick_mark.jpg) |
| **5** | plan\_id | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration. PackageKeySettings | planId | ![tick](../Images/tick_mark.jpg) |
| **6** | apikey | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | mapi | ![tick](../Images/tick_mark.jpg) |
| **7** | secret | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **8** | rate\_limit\_ceiling | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration. PackageKeySettings | packageRateLimitCeiling | ![tick](../Images/tick_mark.jpg) |
| **9** | rate\_limit\_exempt | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration. PackageKeySettings | packageRateLimitExempt |  |
| **10** | qps\_limit\_ceiling | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration. PackageKeySettings | packageQpsLimitCeiling | ![tick](../Images/tick_mark.jpg) |
| **11** | qps\_limit\_exempt | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration. PackageKeySettings | packageQpsLimitExempt |  |
| **12** | status | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration. PackageKeySettings | status |  |
| **13** | created | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **14** | updated | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **15** | handle | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **16** | eav | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration. PackageKeySettings | eav | ![tick](../Images/tick_mark.jpg) |
| **17** | uuid | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |

### **Members**

| **S.No.** | **Supported Field Name By Connector** | **<p>Available In Proxy Core</p><p>(![tick](../Images/tick_mark.jpg)/![error](../Images/io_docs_error_tip.jpg))</p>** | **Proxy-Core Object Name** | **Proxy-Core Field Name** | **<p>Support for ASR Request</p><p>(![tick](../Images/tick_mark.jpg)/![error](../Images/io_docs_error_tip.jpg))</p>** |
|---|---|---|---|---|---|
| **1** | id | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **2** | created | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **3** | updated | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **4** | handle | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | handle | ![tick](../Images/tick_mark.jpg) |
| **5** | passwd | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **6** | email | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | email | ![tick](../Images/tick_mark.jpg) |
| **7** | moniker | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | moniker | ![tick](../Images/tick_mark.jpg) |
| **8** | uri | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **9** | status | ![tick](../Images/tick_mark.jpg) | DeveloperConfiguration | member\_status | ![tick](../Images/tick_mark.jpg) |
| **10** | blog | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **11** | im | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **12** | imsvc | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **13** | phone | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **14** | company | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **15** | address1 | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **16** | address2 | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **17** | city\_or\_town | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **18** | state\_province\_abbr | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **19** | zip\_code | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **20** | country\_code | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **21** | prefs | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **22** | first\_name | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **23** | last\_name | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **24** | registration\_area\_id | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **25** | registration\_ipaddr | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| **26** | uuid | ![error](../Images/error.png) |  |  | ![error](../Images/error.png) |
| 27 | eav | ![error](../Images/error.png) |  |  | ![tick](../Images/tick_mark.jpg) |



