# Common questions about the Microsoft Dynamics CRM connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4647fbfd-ca87-4928-85c3-918437877cd1"/>
</head>


Answers to these common questions about the Microsoft Dynamics CRM connector helps when troubleshooting.

How can I determine which attributes are available for certain operations without generating and examining a profile?

-   You can look at the Microsoft documentation. Go to the [Privileges by entity](https://docs.microsoft.com/en-us/previous-versions/dynamicscrm-2016/developers-guide/gg309366(v=crm.8)) page and click the entity privileges for the entity in which you are interested. From there, click the Entity Metadata link. On that page, go to the Attribute Metadata section. For example, the [Account Entity Metadata page](https://docs.microsoft.com/en-us/previous-versions/dynamicscrm-2013/crm.6/gg328057(v=crm.6)) contains a table showing the attribute metadata for the Account entity.

Can I create a quote from an opportunity?

-   Some fields \(totallineitemamount\_base, totalamountlessfreight, totaltax, and totalamount\_base in Quote Query Profile\) that appear in the opportunity cannot be created or updated in the quote. Therefore the answer is no. If a field is marked as unable to create or update in the Microsoft CRM system, then the connector does not create or update those fields, which are not available in your profile.

When browsing for an operation I get the error message, "A Fault occurred but no error details were returned. Raw error message is: An error occurred when verifying security for the message."

-   If the machine running your atom is even a minute off from official standard time, the Microsoft web service rejects the request in an effort to protect against hacking. To fix this, ensure that the machine running your atom has its time set correctly, say, to the official time reported on [https://www.time.gov](https://www.time.gov/).

I have an error message that my input date and time \(as a parameter in my process\) does not match a certain format, but my input profile does not use that format. How can I enter a date and time string as a parameter in my process?

-   This connector currently accepts strings like 2011-08-09T07:00:00Z, which is matched by the format *yyyy-MM-dd'T'HH:mm:ssZ*. If you look at the input profile, the list box for the date and time format does not list this format. Although it does not look possible, you type in the list box field and your entry is added to the list. In the input profile, type yyyy-MM-dd'T'HH:mm:ssZ for the date and time format and save the profile. Then in your step parameters you can use a string like 2011-08-09T07:00:00Z.

How do I query by both attribute and by reference? For example, I need to do a query by reference to find all entities created by me, and also that have a certain attribute set.

-   The connector allows you to query only by one of these things at a time: either by a single reference \(attributeName/logicalName and attributeName/id\), or by an arbitrary logic structure for your attributes. If you want to query by both at the same time, you need to use multiple steps. First do a by-reference query, say, createdBy/logicalName and createdBy/id, which can return multiple files. Then connect this to a **Route** step \(which routes by XML Profile Element Entity.attribute - equal to Static Value - from Queryreturn\). You are querying for the larger set, and then using a subsequent step to further select from that retrieved set.