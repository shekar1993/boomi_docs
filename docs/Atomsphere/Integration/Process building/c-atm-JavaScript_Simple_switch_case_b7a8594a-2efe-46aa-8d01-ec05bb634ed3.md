# JavaScript: Simple switch case

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b7a8594a-2efe-46aa-8d01-ec05bb634ed3"/>
</head>


Depending on the lead type, this sample JavaScript custom scripting function sets values for a variety of fields accordingly.

If the mapped values are static, this type of mapping requirement can often be met using a cross reference table. This logic could also be implemented as a series of `if/else` statements.

| Category | Details                                          |
|----------|--------------------------------------------------|
| Inputs   | • leadType (Character)                           |
| Outputs  | • salesRep <br />• priority                        |
| Script   | ```javascript <br />switch (leadType) { <br />  case "Direct": <br />    salesRep = "Kevin"; <br />    priority = "High"; <br />    break; <br />  case "Referral": <br />    salesRep = "Louisa"; <br />    priority = "Low"; <br />    break; <br />  case "Reseller": <br />    salesRep = "Sarah"; <br />    priority = "Medium"; <br />    break; <br />  case "OEM": <br />    salesRep = "Sarah"; <br />    priority = "Low"; <br />    break; <br />  default: <br />    salesRep = "Adam"; <br />    priority = "Medium"; <br />} <br />``` |