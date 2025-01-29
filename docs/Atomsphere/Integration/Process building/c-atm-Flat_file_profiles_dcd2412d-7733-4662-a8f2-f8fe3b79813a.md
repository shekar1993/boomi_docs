# Flat file profiles

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-97D71675-1C11-4E10-B4C7-6AE56262FC6F"/>
</head>

Flat file profiles represent structured data sets that contain rows of data, typically with one record per row and each row containing a series of fields known as elements.

The most common example of a flat file data set is a basic comma-separated-value \(CSV\) file.

The structure of the elements in a flat file data set is defined as one of two types:

- Delimited — Each element is separated by some specific character \(the delimiter\), such as a comma, asterisk, or pipe. Elements can be variable in length. For example:

  ```csv
  C,Customer ABC,Premier Support,534 Main St,$123.54
  C,Customer XYZ,Premier Support,33 3rd Ave,$0.00
  V,Vendor 123,Warehouse,Express Shipping
  V,Vendor 456,Distributor,Standard Shipping
  V,Vendor 789,Warehouse,Overnight Shipping
  ...
  ```

- Data Positioned — Each element begins at a specific column position and has a specific length. For example:

  ```csv
  Order573*20*376f972*Ntwk Adpt*29.99*Company A
  UniqueOrder675*40*Wireless Card*801 Cassatt Road*Berwyn*PA*19312*Call Tech Support Immediately*97G45E*sku4513
  Order574*10*5247rt*Headphones*15.75*Company B
  UniqueOrder676*25*Wireless Card*Address Unknown*NA*NA*NA*Call Tech Support Immediately*97G45E*sku4513
  ...
  ```

In general, configure the flat file options to match the basic structure of your data set and then use the Import Wizard to import a sample file and quickly create the individual elements for each record format.

:::note

Flat file profiles were updated in May 2016 to support additional parsing functions for delimited flat file data. When you open a profile that was created prior to May 2016, you are prompted to upgrade the profile to the new format. Support continues for both formats; the appropriate parser is used for a given profile.

:::