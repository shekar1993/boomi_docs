#  Master Data Hub

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-cb04dc3d-d365-47cd-adef-b1dc32881714"/>
</head>


**We fixed these issues:**

- Master Data Hub now automatically enforces incoming reference integrity when you add a reference field to a repeating field group. Master Data Hub retains your saved 
Reference Integrity setting for incoming field values. (HUB-1779)

- When you unlink a source entity, Master Data Hub now deletes the source entity if it does not adhere to the source’s outbound tag conditions. (HUB-2560)

- Corrected text in the Repository API error message for the Restore End-dated Golden Record for Source Entity endpoint. (HUB-2899)

- Golden record fields can be edited in the UI if you created the golden record before enabling source ranking. (HUB-3021)