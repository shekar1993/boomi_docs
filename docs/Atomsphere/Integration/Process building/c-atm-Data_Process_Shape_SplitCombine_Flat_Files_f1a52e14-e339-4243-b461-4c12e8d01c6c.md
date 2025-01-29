# Data Process step: Split or combine flat files

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4E781899-0D0D-4EC2-A102-F8EFE2CA8FE3"/>
</head>


You can use the Data Process step to split or combine flat files.

## Splitting flat files

You can split flat files by line or by profile.

Split By Line — Splits each line \(record\) into a separate document or documents. This is useful for breaking up very large files into smaller pieces. For example, you may want to split one document with 5,000 records into 10 documents with 500 records each. If you split them prior to a Map step, you can achieve better performance.

-   Batch Count — Used to specify the number of lines per document. The default is 0, which means that batching is turned off, and each line splits into a separate document. \(This is the same as setting the batch count to 1.\)

-   Headers Option

-   No Column Headers — If selected, it is assumed that the input document does not contain column headers. The first line is considered to be a record and is put into the first document.

-   Remove First Line as Column Headers — If selected, the first line is considered to be a header, not a record. The header is not put into any of the documents.

-   Retain First Line as Column Headers — If selected, the first line is considered to be a header, not a record. The header is not put at the top of each document.


Split By Profile — Splits lines \(records\) based on the unique value of a profile element or "link element". The files to be split must match the profile that you select and must contain the link element that you select. Records with the same value for the link element are put in the same document. A common example is a sales order file with header and detail information, where the header information is repeated on each detail line. If you select the order number as the link element, each resulting document contains one complete order record.

The lines to be linked do not need to be read in consecutively. The Split Documents process type searches through the entire document and groups matching lines in the output document\(s\). For example, if you split a sales order file by state used in the address, you get a document for each state containing sales orders for that state \(one for State\_AAA, one for State\_BBB, etc.\). However, you cannot link lines from multiple input documents. If your integration scenario requires this, add a Combine Documents Data Process step before the Split Documents Data Process step.

-   Batch Count — Used to specify the number of link element values per document. The default is 0, which means that batching is turned off, and records are split based on one unique value of the link element. \(This is the same as setting the batch count to 1.\) For example:

-   If you split a sales order file by state used in the address and Batch Count = 1, you get one document for each state containing sales orders for that state \(one document for State\_AAA, one document for State\_BBB, etc.\).

-   If you split a sales order file by state used in the address and Batch Count = 2, records are split based on two unique values of the link element. The first document contains all sales orders for the first two states read in \(for example, State\_AAA and State\_BBB\). The second document contains all sales orders for the next two states read in \(for example, State\_CCC and State\_DDD\). The third document contains all sales orders for the next two states read in, and so on.

-   Keep Headers — If cleared, a header \(the element names from the profile\) is not put into any of the documents. If selected, a header is put at the top of each document.

-   Profile — When splitting by profile, you must select a flat file profile. If you do not select one, the process fails at this Data Process step.

-   Link Element— When splitting by profile, you must select a profile element for linking related records. If you do not select one, the process fails at this Data Process step.


## Example: Splitting flat files by line

The Split By Line option splits the flat file’s lines \(records\) into a separate document or documents.

The following sample flat file shows 14 sales orders placed by four companies. The first line contains a header.

```
Company, Address, City, State, ZipCode, Country, OrderNumber, LineNumber, ItemName, Quantity, Price, TotalPrice
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1100, 1, Item_A, 500, 10.00, 5000.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1100, 2, Item_B, 25, 20.00, 500.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1100, 3, Item_C, 100, 25.00, 2500.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1200, 1, Item_A, 300, 10.00, 3000.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1200, 2, Item_B, 50, 20.00, 1000.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1200, 3, Item_C, 10, 25.00, 250.00
CCC_Company, Address_CCC, City_CCC, State_CCC, 94003, US, 1300, 1, Item_B, 50, 20.00, 1000.00
CCC_Company, Address_CCC, City_CCC, State_CCC, 94003, US, 1300, 2, Item_C, 50, 25.00, 1250.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1400, 1, Item_A, 250, 10.00, 2500.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1400, 2, Item_B, 10, 20.00, 200.00
DDD_Company, Address_DDD, City_DDD, State_DDD, 52004, US, 1500, 1, Item_A, 200, 10.00, 2000.00
DDD_Company, Address_DDD, City_DDD, State_DDD, 52004, US, 1500, 2, Item_C, 20, 25.00, 500.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1600, 1, Item_A, 300, 10.00, 3000.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1600, 2, Item_C, 200, 25.00, 5000.00
```

First let’s vary the Batch Count. We use the Batch Count option to specify the number of lines per document. \(In each case we use the Header option **Retain first line as Column Headers**, so that the first line is considered to be a header and appears at the top of each document.\) Using the sales order data shown above, here are the results.

-   If **Batch Count** = 0 or 1, each non-header line is split into a separate document. We get 14 documents.

-   If **Batch Count** = 2, the non-header lines are grouped by two’s, in the order that they are read in. We get seven documents.

-   If **Batch Count** = 3, the non-header lines are grouped by three’s, in the order that they are read in. We get five documents. \(The fifth document contains only two records.\)


Now let’s keep the Batch Count at 0 or 1 and vary the Column Header options. We use the Column Headers options to include or exclude headers. Using the sales order data shown above, here are the results.

-   If **Batch Count** = 0 or 1, each line above is split into a separate document. If we select **No Column Headers**, it is assumed that the input document does not contain column headers. The first line is considered to be a record. We get 15 documents.

-   If **Batch Count** = 0 or 1, each line above is split into a separate document. If we select **Remove first line as Column Headers**, the first line is considered to be a header and is removed. We get 14 documents, none of which contains the header.

-   If **Batch Count** = 0 or 1, each line above is split into a separate document. If we select **Retain first line as Column Headers**, the first line is considered to be a header. We get 14 documents. The header appears at the top of each document.


## Example: Splitting flat files by profile

The Split By Profile option splits the flat file’s lines \(records\) based on the unique value of a profile element or "link element". You must select a profile and a link element.

The following sample flat file shows 14 sales orders placed by four companies. The data does not contain a header.

```
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1100, 1, Item_A, 500, 10.00, 5000.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1100, 2, Item_B, 25, 20.00, 500.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1100, 3, Item_C, 100, 25.00, 2500.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1200, 1, Item_A, 300, 10.00, 3000.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1200, 2, Item_B, 50, 20.00, 1000.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1200, 3, Item_C, 10, 25.00, 250.00
CCC_Company, Address_CCC, City_CCC, State_CCC, 94003, US, 1300, 1, Item_B, 50, 20.00, 1000.00
CCC_Company, Address_CCC, City_CCC, State_CCC, 94003, US, 1300, 2, Item_C, 50, 25.00, 1250.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1400, 1, Item_A, 250, 10.00, 2500.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1400, 2, Item_B, 10, 20.00, 200.00
DDD_Company, Address_DDD, City_DDD, State_DDD, 52004, US, 1500, 1, Item_A, 200, 10.00, 2000.00
DDD_Company, Address_DDD, City_DDD, State_DDD, 52004, US, 1500, 2, Item_C, 20, 25.00, 500.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1600, 1, Item_A, 300, 10.00, 3000.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1600, 2, Item_C, 200, 25.00, 5000.00
```

The flat file profile looks like this:

```
Record
Elements
Company
Address
City
State
ZipCode
Country
OrderNumber
LineNumber
ItemName
Quantity
Price
TotalPrice
```

We select `Company` as the link element.

First let’s vary the Batch Count. We use the Batch Count option to specify the number of link element values per document. \(In each case, we clear the **Keep Headers** option. A header \[the element names from the profile\] is not put into any of the documents.\) Using the sales order data and flat file profile shown above, here are the results.

-   If **Batch Count** = 0 or 1, lines are split based on one unique value of the link element \(`Company`\). There are four different values for `Company` in the input document. We get four documents: a document containing the AAA\_Company records, a document containing the BBB\_Company records, a document containing the CCC\_Company records, and a document containing the DDD\_Company records

-   If **Batch Count** = 2, the non-header lines are grouped by two values of the link element, in the order that they are read in. We get two documents: a document containing the AAA\_Company and BBB\_Company records, and a document containing the CCC\_Company and DDD\_Company records.

-   If **Batch Count** = 3, the non-header lines are grouped by three values of the link element, in the order that they are read in. We get two documents: a document containing the AAA\_Company, BBB\_Company and CCC\_Company records, and a document containing the DDD\_Company records.


Now let’s keep the Batch Count at 0 or 1 and vary the **Keep Headers** option. We use the Keep Headers option to include or exclude headers. Using the sales order data and flat file profile shown above, here are the results.

-   If **Batch Count** = 0 or 1, lines are split based on one unique value of the link element \(`Company`\). If we *clear* **Keep Headers**, we get four documents, grouped by Company. A header \(the element names from the profile\) is not put into any of the documents.

-   If **Batch Count** = 0 or 1, lines are split based on one unique value of the link element \(`Company`\). If we *select* **Keep Headers**, we get four documents, grouped by Company. A header \(the element names from the profile\) is put at the top of each document.


## Combining flat files

The Combine Documents process type combines multiple flat file documents into a single document. When combining flat file data, make sure the individual documents do not contain column headers that invalidate the format.

-   Free-Form Header — Used to add header text to the combined document.

-   Free-Form Footer — Used to add footer text to the combined document.

-   Headers Option — Used to include or exclude headers that may be in the documents that are being read in.

-   No Column Headers — If selected, it is assumed that the input documents do not contain column headers. The first line in each document is considered to be a record and is added to the combined document.

-   Remove First Line as Column Headers — If selected, the first line in each document is considered to be a header. The headers are not put into the combined document.

-   Retain First Line as Column Headers — If selected, the first line in the first document is considered to be a header. The header appears prior to the data in the combined document.


## Example: Combining flat files

The following are two flat file documents containing sales orders. Each document contains a header.

```
Document 1 Header
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1100, 1, Item_A, 500, 10.00, 5000.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1100, 2, Item_B, 25, 20.00, 500.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1100, 3, Item_C, 100, 25.00, 2500.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1400, 1, Item_A, 250, 10.00, 2500.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1400, 2, Item_B, 10, 20.00, 200.00

```

```
Document 2 Header
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1200, 1, Item_A, 300, 10.00, 3000.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1200, 2, Item_B, 50, 20.00, 1000.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1200, 3, Item_C, 10, 25.00, 250.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1600, 1, Item_A, 300, 10.00, 3000.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1600, 2, Item_C, 200, 25.00, 5000.00
```

We can use the Free-Form Header and Free-Form Footer fields to add header and/or footer text to the combined document. We use the Column Headers options to include or exclude headers that may be in the documents that are being read in.

In the three scenarios below, we type “My Free-Form Header” in the **Free-Form Header** field, and “My Free-Form Footer” in the **Free-Form Footer** field. Using the two documents shown above, here are the results.

If we select **No Column Headers**, it is assumed that the documents do not contain column headers. The first line in each document is considered to be a record \(even though it is a header in this case\) and is added to the combined document. The combined document looks like this:

```
My Free-Form Header
Document 1 Header
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1100, 1, Item_A, 500, 10.00, 5000.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1100, 2, Item_B, 25, 20.00, 500.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1100, 3, Item_C, 100, 25.00, 2500.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1400, 1, Item_A, 250, 10.00, 2500.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1400, 2, Item_B, 10, 20.00, 200.00
Document 2 Header
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1200, 1, Item_A, 300, 10.00, 3000.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1200, 2, Item_B, 50, 20.00, 1000.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1200, 3, Item_C, 10, 25.00, 250.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1600, 1, Item_A, 300, 10.00, 3000.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1600, 2, Item_C, 200, 25.00, 5000.00
My Free-Form Footer

```

If we select **Remove first line as Column Headers**, the first line in each document is considered to be a header. The headers are not put into the combined document. The combined document looks like this:

```
My Free-From Header
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1100, 1, Item_A, 500, 10.00, 5000.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1100, 2, Item_B, 25, 20.00, 500.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1100, 3, Item_C, 100, 25.00, 2500.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1400, 1, Item_A, 250, 10.00, 2500.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1400, 2, Item_B, 10, 20.00, 200.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1200, 1, Item_A, 300, 10.00, 3000.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1200, 2, Item_B, 50, 20.00, 1000.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1200, 3, Item_C, 10, 25.00, 250.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1600, 1, Item_A, 300, 10.00, 3000.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1600, 2, Item_C, 200, 25.00, 5000.00
My Free-From Footer
```

If we select **Retain first line as Column Headers**, the first line in the first document is considered to be a header. The header appears prior to the data in the combined document. The combined document looks like this:

```
My Free-From Header
Document 1 Header
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1100, 1, Item_A, 500, 10.00, 5000.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1100, 2, Item_B, 25, 20.00, 500.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1100, 3, Item_C, 100, 25.00, 2500.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1400, 1, Item_A, 250, 10.00, 2500.00
AAA_Company, Address_AAA, City_AAA, State_AAA, 19001, US, 1400, 2, Item_B, 10, 20.00, 200.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1200, 1, Item_A, 300, 10.00, 3000.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1200, 2, Item_B, 50, 20.00, 1000.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1200, 3, Item_C, 10, 25.00, 250.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1600, 1, Item_A, 300, 10.00, 3000.00
BBB_Company, Address_BBB, City_BBB, State_BBB, 83002, US, 1600, 2, Item_C, 200, 25.00, 5000.00
My Free-From Footer

```