# Relationships between flat file record formats

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7ad54235-f50b-4a92-a474-e5a19b857a92"/>
</head>


You can add record formats to a profile as either a child or a sibling of another record format.

Whether to choose child or sibling depends on how the records are logically related to one another in the data set. If the data set contains a record in one format followed by a record\(s\) in a second format, where the second record is related to the first, then it is a child relationship. However, if the records are independent of one another, then it is likely a sibling relationship.

:::note

The relationship between record formats affects how the data is interpreted when mapping. If you do not get the mapping results you expect with the relationship configured one way, simply try configuring the profile with the other relationship and review the results.

:::

A common example of a child relationship would be a transaction record with "header" and "details" such as an invoice with multiple lines. In the sample data set below, the "detail" record \(identified by the unique value in the first column\) should be configured as a child record format of the "header" record. Note how the detail records repeat one or more times for the same header record before the next header record is encountered.

```
H,INV123,Customer ABC,Rush Order
D,INV123,Item A,$20.00,4
D,INV123,Item B,$50.00,1
H,INV789,Customer XYZ,Standard Order
D,INV789,Item A,$20.00,16
...
```

This data sample represents a sibling relationship export including customers and vendors. The different customer and vendor record types are not related to one another. All of the customers are listed, then all of the vendors.

```
C,Customer ABC,Premier Support,534 Main St,$123.54
C,Customer XYZ,Premier Support,33 3rd Ave,$0.00
V,Vendor 123,Warehouse,Express Shipping
V,Vendor 456,Distributor,Standard Shipping
V,Vendor 789,Warehouse,Overnight Shipping
...
```

For additonal information and examples of establishing the parent/child relationship, see [Flat file record format detection](c-atm-Flat_file_record_format_detection_efb3a3b3-1aa9-4d22-814d-a8cac523d5d6.md)