#  Master Data Hub

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-cb2bc598-6284-43af-b68a-9a81dd0594d9"/>
</head>

**We added these features:**
- You can apply individual user permissions to Repository API requests. This JWT authentication enhancement brings additional security and governance to Master Data Hub repositories. JWT authentication limits user actions via the Repository API based on the user role and permissions, including Hub entitlements. <br></br><br></br>
When calling Repository API requests using JWT authentication, administrators can view audit logs and see details about the users and the actions performed on repositories. Read [Repository API](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/r-mdm-Repository_API_659e32f2-99ce-444e-8201-8a9ae1d92c9b.md) to learn more. (HUB-2562)

- When you submit multiple consecutive batches with less than ten entities, you may notice in some cases an improvement in performance and throughput for inbound processing.<br></br><br></br>
After receiving a small entity batch, Master Data Hub may wait several seconds to receive additional batches. In this scenario, Master Data Hub combines small batches and applies a single batch ID when processing. (HUB-2639)

**We fixed these issues:**

- You can view up to 100 collection fields in golden records, quarantined entities, and staged entities in the user interface. A notification informs you if the record contains more than 100 collection fields. You can view additional fields by examining the XML data or by querying the Repository API. (HUB-2595, HUB-3254, HUB-3327)

- When you commit a domain’s stage entities, Master Data Hub no longer waits to perform subsequent actions to the domain, such as model deployment. (HUB-3338)
