# Amazon Selling Partner (Tech Preview) changelog 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1dadaa38-159d-468a-92e5-6b23ae994032"/>
</head>

**2025-01 (Version 2, Current)**

- The **Query** operation now supports the following object types:
  * **getCollectionFormHistory** 
  * **getFeatures** 
  * **getFeatureInventory**
  * **getFulfillmentPreview** 
  * **getOrders***
  * **getOrderltems***
  * **getOrderltemsBuyerInfo***
  * **getSelfShipAppointmentSlots**
  * **listAllFulfillmentOrders**
  * **listFinancialEventGroups**
  * **listReturnReasonCodes**
  * **searchCatalogItems**

The **getCollectionFormHistory**, **getFeatures**, **getFulfillmentPreview**, and **listReturnReasonCodes** object types do not support pagination. Objects types with an asterisk (*) can return Personally Identifiable Information (PII). (CONC-9576) (CONC-8451)

**2024-11 (Version 1)**
 - Initial Tech Preview release.