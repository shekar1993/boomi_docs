# Expanded and Non-Expanded Related Entity Examples

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-31d64890-0768-4297-a8c8-9ae004456de7"/>
</head>


Refer to the following examples when entering the list of related entities for the SAP S4HANA OData Cloud \(Tech Preview\) connector's Get and Query operations

## Expanded Related Entity

```java

"to_EmailAddress": { 

                    "results": [ 

                        { 

                            "__metadata": { 

                                "id": "https://myXXXXXX-api.s4hana.ondemand.com:443/sap/opu/odata/sap/API_BUSINESS_PARTNER
/A_AddressEmailAddress(AddressID='22824',Person='',OrdinalNumber='3')", 

                                "uri": "https://myXXXXXX-api.s4hana.ondemand.com:443/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_AddressEmailAddress
(AddressID='22824',Person='',OrdinalNumber='3')", 

                                "type": "API_BUSINESS_PARTNER.A_AddressEmailAddressType" 

                            }, 

                            "AddressID": "22824", 

                            "Person": "", 

                            "OrdinalNumber": "3", 

                            "IsDefaultEmailAddress": false, 

                            "EmailAddress": "george.clark@domain.com ", 

                            "SearchEmailAddress": “GEORGE.CLARK@domain ", 

                            "AddressCommunicationRemarkText": "" 

                        }, 
```

## Non-Expanded Related Entity

```java

  "to_EmailAddress": { 

                    "__deferred": { 

                        "uri": "https://myXXXXXX-api.s4hana.ondemand.com:443/sap/opu/odata/sap/API_BUSINESS_PARTNER
/A_BusinessPartnerAddress(BusinessPartner='17100001',AddressID='22824')/to_EmailAddress" 

                    } 

                },.  
```