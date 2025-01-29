# Governance 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-09d7b86f-e8db-4557-ac50-76f1b5f7a26d"/>
</head>


During the maintenance phase of a Boomi DataHub project, administrators perform a variety of routine and non-routine governance tasks.

These are routine governance tasks:

- View counts of pending transactions for domains. Do this on the **Activity** tab in repository pages.

- View reports on processed batches of incoming source entities. Do this in the Inbound Activity page, which is accessible through the **Reporting** menu.

- View pending and delivered source record update requests targeting domain sources. Do this in the Outbound Activity page, which is accessible through the **Reporting** menu.

  - Shortcut access to the Outbound Activity page is available on the **Activity** tab or the domain **Sources** tab in repository pages for viewing update requests targeting a specific source of a specific domain hosted in a specific repository.

  - Shortcut access to the Outbound Activity page is available on the Golden Records page, which is accessible through the **Stewardship** menu, for viewing update requests for a specific golden record.

- Build and view historical reports, such as golden record counts over time. Do this in the Historical Reporting page, which is accessible through the **Reporting** menu. Historical report data can be exported to a CSV file.


Administrators should monitor the Boomi DataHub **Dashboard** page to determine when to perform many routine tasks

These governance tasks are more in the realm of non-routine:

- View historical domain data. Do this on the **Golden Records** page, which is accessible through the **Stewardship** menu.

- Assign Boomi DataHub entitlements to custom user roles. Do this in Integration in the Settings page on the **User Management** tab.

- Access the Boomi DataHub audit log. Do this on the **Log** tabs in repository pages.

- Attach new sources to domains (or remove previously attached sources). Do this on the **Sources** tab in repository pages.

- Deploy new versions of domain models (or roll back to older versions). Do this in the **Models** page or in the Model Publication History view, which is accessible in the Models page and in repository pages on the **Summary** tab. See “Revising models” below.

- Resubmit previously submitted batches of source entities. Do this in the Inbound Activity page, which is accessible through the **Reporting** menu.

- Delete pending source record update requests from a source’s channel. Do this in the Outbound Activity page, which is accessible through the **Reporting** menu.

- Resend delivered source record update requests on a source’s channel. Do this in the Outbound Activity page, which is accessible through the **Reporting** menu.

- Request the sending of source record update requests in bulk to sources on their channels. Do this in the Golden Records page, which is accessible through the **Stewardship** menu.

- View the status of requests for bulk operations on golden records, and apply actions to those requests. Do this in the Bulk Processing Requests page, which is accessible through the **Reporting** menu. Bulk operations include sending source record update requests for golden records, end-dating golden records, and purging golden records.

- Set up subscriptions in order to receive alerts via email about new golden records, end-dated golden records and/or quarantined entities. Do this in Integration in the Settings page on the **Email Alerts** tab.

Refer to the linked topics for instructions. The remainder of this topic elaborates on one of the more involved governance responsibilities.



## Revising models 

The need to revise a model and deploy a new version may arise when, for example, an administrator needs to attach a new source to the corresponding domain or the data structure of an existing source is modified by the owner of that system. An administrator may even find it necessary at times to roll back to an older version of the model, although this need more typically arises as a result of testing performed during the implementation phase.

Keep in mind that while a repository never deletes master data, deploying a newer or older version of a model is potentially destructive in the sense that certain data that used to be stored may no longer be stored or users will no longer have access to data to which they previously had access.

For example, consider a domain with a Name field. Suppose that field is deleted from the underlying model, a Type field is added and then a new version of the model is deployed. Golden records inserted going forward will not have the Name field populated. Suppose the original version is then redeployed. The Type field values in the records recently added will not be accessible to users.