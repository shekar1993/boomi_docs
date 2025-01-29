---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-50e51f10-84a6-4304-90a0-52606efe9454"/>
</head>

**Applications EAV (Sample)**

- Sample Application level EAV `{partner=MBT}` 

- Sample preInputs/postInputs as params:`{"X-Mso-Partner":"applications.partner"}` 

- Then header that gets injected in request/response would be like `X-Mso-Partner=**MBT**`

**Plans Standard Field (Sample)**

- Plans standard field name having value "Gold Plan" 

- preInputs as params:`{"X-Mashery-Plan":"plans.name"}` 

- Then header that gets injected in request would be like X-Mashery-Plan= **"Gold Plan"**

This Connector supports various API Management models/objects based standard fields. Standard fields support for respective models is given in the following table. 

|**Sr. No.** |**Model Name** |**Standard Field Support** |**EAV Field Support** |**Standard Fields** |
| ---- | ----  |----  | ---- | ----  |
|1 |applications |Yes |Yes |name, eav, id, tags, external\_id, uuid |
|2 |plans |Yes |Yes |id, package\_id, name, eav |
|3 |packages |Yes |Yes |name, eav, area\_id |
|4 |keys |Yes |Yes |spkey, mapi, handle, eav |
|5 |package\_keys |Yes |Yes |package\_id, plan\_id, rate\_limit\_ceiling, qps\_limit\_ceiling, apikey, eav, app\_id, status |
|6 |members |Yes |Yes |id, handle, email, moniker, eav, uuid |

Member's standard fields are only supported; when application, that uses package key to make API call, is associated with member's original registered API Management area. 
