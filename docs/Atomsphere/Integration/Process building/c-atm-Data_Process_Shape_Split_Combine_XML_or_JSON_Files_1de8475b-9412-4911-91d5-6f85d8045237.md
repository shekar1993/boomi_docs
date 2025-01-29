# Data Process step: Split or combine XML or JSON files

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5F5FF572-5A52-46C6-BF69-F164F08FEC10"/>
</head>


You can use the Data Process step to split or combine XML or JSON files.

## Splitting XML or JSON files

You can use the Split Documents process type to split an XML or JSON file into a separate document or documents. The files to be split must match the profile that you select and must contain the “split element” that you select.

-   Profile — You must select an XML or JSON profile.

-   Split Element— You must select a profile element for splitting related records. You can split by any XML or JSON profile element except the root node.

-   Batch Count — Used to specify the number of records per document. The records are split by number in the order that they are read in. For example, if Batch Count = 2, the first two records read in will be in the first document, the third and fourth records read in will be in the second document, and so on. Records with the same value for the split element are *not* put in the same document. The default is 0, which means that batching is turned off, and each record will be split into a separate document. \(This is the same as setting the batch count to 1.\)

:::note

The structure of the XML or JSON file, and the split element you select, determines whether the Batch Count field is honored or ignored. See the following information about the two methods of splitting XML and JSON files.

:::

There are two ways in which XML files can be split:

-   If there are peer elements along the path to the split element, then the “non-batch” split method is used and the Batch Count is ignored.

-   If there are no peer elements along the path to the split element, and the split element is not an attribute and does not have any XML constraints, then the “batch” split method is used and the Batch Count is honored.


There are two ways in which JSON files can be split:

-   If there are peer elements along the path to the split element, or the split element is an absolute array element or an object element, then the “non-batch” split method is used and the Batch Count is ignored.

-   If there are no peer elements along the path to the split element and the split element is a repeating array element, then the “batch” split method is used and the Batch Count is honored.


See the first sample XML profile. If we select `Id` as the split element, the “non-batch” split method will be used because `Id` has peer elements: `LastName`, `FirstName`, `Name` and `Email`. No matter how the Batch Count field is set, each record will be split into a separate document.


```
contactList

    Department

    Contact

          Id

          LastName

          FirstName

          Name

          Email
```

See the second sample XML profile. If we select `Id` as the split element, the “non-batch” split method will be used. `Contact`, which is along the path to the split element, has a peer element, `Department`. No matter how the Batch Count field is set, each record will be split into a separate document.

```
contactList

    Department

    Contact

          Id

          LastName

          FirstName

          Name

          Email
```

See the third sample XML profile. If we select `Id` as the split element, the “batch” split method will be used. The path to the split element is `contactList/Contacts/Id`. `contactList`, `Contacts` and `Id` don’t have any peer elements, and `Id` isn’t an attribute and doesn’t have any constraints. The Batch Count field will be honored.

```
contactList

      Contacts

          Id

                LastName

                FirstName

                Name

                Email
```
<details>
<summary>XML split example</summary>
## Example: Splitting XML files

The following sample XML file shows five contacts. If we select `<Id>` as the split element, the “batch” split method will be used.

```
<contactList>

    <Contacts>

    <Id>1

        <LastName>Denver</LastName>
        <FirstName>Jen</FirstName>
        <Name>Jen Denver</Name>
        <Email>jen@boomi.com</Email>

    </Id>

    <Id>2

        <LastName>Davis</LastName>
        <FirstName>Josh</FirstName>
        <Name>Josh Davis</Name>
        <Email>josh@boomi.com</Email>

    </Id>

    <Id>3

        <LastName>Denir</LastName>
        <FirstName>Justin</FirstName>
        <Name>Justin Denir</Name>
        <Email>justin@boomi.com</Email>

    </Id>

    <Id>4

        <LastName>Dustin</LastName>
        <FirstName>Jaimie</FirstName>
        <Name>Jaimie Dustin</Name>
        <Email>jaimie@boomi.com</Email>

    </Id>

    <Id>5

        <LastName>Dunpil</LastName>
        <FirstName>Jay</FirstName>
        <Name>Jay Dunpil</Name>
        <Email>jay@boomi.com</Email>

    </Id>

    </Contacts>
    
</contactList>
```
</details>

<details>
<summary>JSON split example</summary>

## Example: Splitting JSON files

The following sample JSON file shows five contacts.If we select `"Id"` as the split element, the “batch” split method will be used. 
```
{
  "contactList": {
    "Contacts": [
      {
        "Id": 1,
        "LastName": "Denver",
        "FirstName": "Jen",
        "Name": "Jen Denver",
        "Email": "jen@boomi.com"
      },
      {
        "Id": 2,
        "LastName": "Davis",
        "FirstName": "Josh",
        "Name": "Josh Davis",
        "Email": "josh@boomi.com"
      },
      {
        "Id": 3,
        "LastName": "Denir",
        "FirstName": "Justin",
        "Name": "Justin Denir",
        "Email": "justin@boomi.com"
      },
      {
        "Id": 4,
        "LastName": "Dustin",
        "FirstName": "Jaimie",
        "Name": "Jaimie Dustin",
        "Email": "jaimie@boomi.com"
      },
      {
        "Id": 5,
        "LastName": "Dunpil",
        "FirstName": "Jay",
        "Name": "Jay Dunpil",
        "Email": "jay@boomi.com"
      }
    ]
  }
}
```
</details>

-   If **Batch Count** = 0 or 1, each record is split into a separate document. We get five documents.

-   If **Batch Count** = 2, the records are grouped by two’s, in the order that they are read in. We get three documents. \(The third document contains only one record.\)

-   If **Batch Count** = 3, the records are grouped by three’s, in the order that they are read in. We get two documents. \(The second document contains only two records.\)


## Combining XML or JSON files

You can use the Combine Documents process type to combine XML or JSON files. When combining XML or JSON data, the documents must match the selected profile. They are combined based on the selected Combine Element. For XML profiles, you cannot combine by an element that has constraints. \(Constraints are used only in legacy XML profiles. New XML profiles use qualifiers and instance identifiers.\) You cannot combine by an XML attribute. For JSON profiles, you can use only repeating array elements.

-   Profile — You must select an XML or JSON profile.

-   Combine Element— You must select a profile element for combining related records.

-   Combine Documents Into New Profile — \(optional\) If selected, you must select the profile into which the documents will be combined.

-   Combine Into Profile — When combining into a new profile, you must select an XML or JSON profile.

-   Combine Into Element — When combining into a new profile, you must select a profile element for combining related records.

<details>
<summary> XML Example </summary>
## Example: Combining XML files

The Combine Documents process type combines multiple XML files into a single file.

The following are three XML files, each containing two contacts. We select an XML profile and we select `<Id>` as the Combine Element.

```
<contactList>

    <Contacts>

    <Id>1
        <LastName>Denver</LastName>
        <FirstName>Jen</FirstName>
        <Name>Jen Denver</Name>
        <Email>jen@boomi.com</Email>
    </Id>

    <Id>2
        <LastName>Davis</LastName>
        <FirstName>Josh</FirstName>
        <Name>Josh Davis</Name>
        <Email>josh@boomi.com</Email>
    </Id>

    </Contacts>

</contactList>
```

```
<contactList>

    <Contacts>

    <Id>3
        <LastName>Denir</LastName>
        <FirstName>Justin</FirstName>
        <Name>Justin Denir</Name>
        <Email>justin@boomi.com</Email>
    </Id>

    <Id>4
        <LastName>Dustin</LastName>
        <FirstName>Jaimie</FirstName>
        <Name>Jaimie Dustin</Name>
        <Email>jaimie@boomi.com</Email>
    </Id>

    </Contacts>

</contactList>
```

```
<contactList>

    <Contacts>

    <Id>5
        <LastName>Dunpil</LastName>
        <FirstName>Jay</FirstName>
        <Name>Jay Dunpil</Name>
        <Email>jay@boomi.com</Email>
    </Id>

    <Id>6
        <LastName>Dewey</LastName>
        <FirstName>Jackie</FirstName>
        <Name>Jackie Dewey</Name>
        <Email>jackie@boomi.com</Email>
    </Id>

    </Contacts>

</contactList>
```

The XML files are combined into one document that matches the selected profile. It contains the contents of the three XML files.

```
<contactList>

    <Contacts>

    <Id>1
        <LastName>Denver</LastName>
        <FirstName>Jen</FirstName>
        <Name>Jen Denver</Name>
        <Email>jen@boomi.com</Email>
    </Id>

    <Id>2
        <LastName>Davis</LastName>
        <FirstName>Josh</FirstName>
        <Name>Josh Davis</Name>
        <Email>josh@boomi.com</Email>
    </Id>

    <Id>3
        <LastName>Denir</LastName>
        <FirstName>Justin</FirstName>
        <Name>Justin Denir</Name>
        <Email>justin@boomi.com</Email>
    </Id>

    <Id>4
        <LastName>Dustin</LastName>
        <FirstName>Jaimie</FirstName>
        <Name>Jaimie Dustin</Name>
        <Email>jaimie@boomi.com</Email>
    </Id>

    <Id>5
        <LastName>Dunpil</LastName>
        <FirstName>Jay</FirstName>
        <Name>Jay Dunpil</Name>
        <Email>jay@boomi.com</Email>
    </Id>

    <Id>6
        <LastName>Dewey</LastName>
        <FirstName>Jackie</FirstName>
        <Name>Jackie Dewey</Name>
        <Email>jackie@boomi.com</Email>
    </Id>

    </Contacts>

</contactList>
```
</details>

<details>
<summary> JSON Example </summary>

## Combining JSON files

The Combine Documents process type combines multiple JSON files into a single file.

The following are three JSON files, each containing two contacts. We select a JSON profile and we select `"Id"` as the Combine Element.

```
{
  "contactList": {
    "Contacts": [
      {
        "Id": 1,
        "LastName": "Denver",
        "FirstName": "Jen",
        "Name": "Jen Denver",
        "Email": "jen@boomi.com"
      },
      {
        "Id": 2,
        "LastName": "Davis",
        "FirstName": "Josh",
        "Name": "Josh Davis",
        "Email": "josh@boomi.com"
      }
    ]
  }
}
```

```
{
  "contactList": {
    "Contacts": [
      {
        "Id": 3,
        "LastName": "Denir",
        "FirstName": "Justin",
        "Name": "Justin Denir",
        "Email": "justin@boomi.com"
      },
      {
        "Id": 4,
        "LastName": "Dustin",
        "FirstName": "Jaimie",
        "Name": "Jaimie Dustin",
        "Email": "jaimie@boomi.com"
      }
    ]
  }
}
```

```
{
  "contactList": {
    "Contacts": [
      {
        "Id": 5,
        "LastName": "Dunpil",
        "FirstName": "Jay",
        "Name": "Jay Dunpil",
        "Email": "jay@boomi.com"
      },
      {
        "Id": 6,
        "LastName": "Dewey",
        "FirstName": "Jackie",
        "Name": "Jackie Dewey",
        "Email": "jackie@boomi.com"
      }
    ]
  }
}
```

The JSON files are combined into one document that matches the selected profile. It contains the contents of the three JSON files.

```
{
  "contactList": {
    "Contacts": [
      {
        "Id": 1,
        "LastName": "Denver",
        "FirstName": "Jen",
        "Name": "Jen Denver",
        "Email": "jen@boomi.com"
      },
      {
        "Id": 2,
        "LastName": "Davis",
        "FirstName": "Josh",
        "Name": "Josh Davis",
        "Email": "josh@boomi.com"
      },
      {
        "Id": 3,
        "LastName": "Denir",
        "FirstName": "Justin",
        "Name": "Justin Denir",
        "Email": "justin@boomi.com"
      },
      {
        "Id": 4,
        "LastName": "Dustin",
        "FirstName": "Jaimie",
        "Name": "Jaimie Dustin",
        "Email": "jaimie@boomi.com"
      },
      {
        "Id": 5,
        "LastName": "Dunpil",
        "FirstName": "Jay",
        "Name": "Jay Dunpil",
        "Email": "jay@boomi.com"
      },
      {
        "Id": 6,
        "LastName": "Dewey",
        "FirstName": "Jackie",
        "Name": "Jackie Dewey",
        "Email": "jackie@boomi.com"
      }
    ]
  }
}
```
</details>