# Microsoft Dynamics CRM object-specific details 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7e1538de-60d0-4936-95e7-a05567c84203"/>
</head>


Microsoft Dynamics CRM object-specific details are provided to help you when troubleshooting.

You need to handle some objects in a particular way. For example, when entities have sets of attributes that are associated, modify both. If you have trouble with entities, use these examples as a guide:

-   account: You can create a record with another ownerid. For instance, if you are performing a create operation with User1's credentials, you can specify User2's GUID as the ownerid if they are a system user in the system. Users must have an assigned role before this works. If you set the ownerid, you also need to set the type because more than one type is capable of being an owner.

-   customeraddress: the objecttypecode \(entity\_name, a string\) is the entity type of thethe parentid\(lookup or GUID\). You need to change these two values, objecttypecode and parentid, together if you change the type \(for example, account to contact\) associated with this address.

-   recurringappointmentmaster: the statecode and statuscode are associated with each other and in many instances must change together. The statecode is an integer that specifies the state, and the statuscode is an integer associated with the state that describes the statuscode. For instance in recurringappointmentmaster, the statuscode can be 0, 1, 2, or 3 \(for open, completed, cancelled, or scheduled\). For those statecode, the statuscode can be 5 or 6 \(busy or out-of-office\) for statecode 3 \(cancelled\). Or statuscode could be 1 or 2 \(free or tentative\) for statecode 0 \(free\). So if the statecode and statuscode are 0/1 you can only update to 0/2, not to 0/5.

-   asyncoperation: You cannot delete an asyncoperation if it is not in a completed state \(statecode 3\). You cannot set the statecode to complete on asyncoperations of certain operationtypes \(such as operationtypes 19\). You cannot create the statecode and statuscode; they are automatically initialized to statecode 0 and statuscode 0. If you update the statecode \(for example, statecode 3\), the statuscode updates automatically \(statuscode 32\).