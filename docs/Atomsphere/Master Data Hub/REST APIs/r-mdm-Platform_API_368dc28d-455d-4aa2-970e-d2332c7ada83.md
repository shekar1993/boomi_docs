# Boomi DataHub Platform API

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-368dc28d-455d-4aa2-970e-d2332c7ada83"/>
</head>

The Boomi DataHub Platform API enables platform-level programmatic access to master data domains.

:::note

Domains are referred to in the previous topic links as universes, except in the context of deployment, where a universe refers to the model underlying a domain.

:::

## Access requirements 

All Platform API requests must authenticate using [Basic Auth](http://en.wikipedia.org/wiki/Basic_access_authentication). The credentials must be the user name \(email address\) and password of an authorized user of the account whose ID is specified in the request URL.

Furthermore, the authenticating user for all Platform API requests must have the **API Access** privilege. Requests for some operations require additional privileges — these privileges are noted in the individual topics for those operations.

If an API request does not provide Basic Auth credentials or the credentials or account ID are invalid, the Boomi Enterprise Platform responds with a [403 \(Forbidden\) HTTP Response](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.4) having the following body:

```xml
<UserMessage id="error.user.login" type="error">
   <Data>Incorrect user name and password combination.</Data>
</UserMessage>
```

If the authenticating user for a particular API request does not have the required privileges, the platform responds with a [400 \(Bad Request\) HTTP Response](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1) having the following body:

```xml
<error>
   <message>The authenticated user does not have access rights to this functionality</message>
</error>
```

When making a call to the Platform API, users with [Two-Factor authentication](/docs/Atomsphere/Integration/AtomSphere%20API/int-AtomSphere_API_and_Partner_API_authentication_007fdf04-3454-41f8-a36d-163435193b9b.mdx#two-factor-authentication) enabled are required to include X-Boomi-OTP as an HTTP header and set the authentication code as its value.

:::note

If you are using single sign-on, you need to use an [API token](../../Platform/int-AtomSphere_API_Tokens_page_6a75a1f6-709c-4b08-b3bd-85fe2ac02e18.md) to authenticate.

:::

## API usage limits 

The Boomi DataHub Platform API enforces the following usage limits:

**Number of requests per day**  
The limit is account-specific.

Calculating your account’s usage request limit is 1,000 times your number of licensed connectors. Usage is calculated based on a rolling 24-hour period, with usage calculated every hour. If API usage exceeds this limit, API users receive an HTTP 503 response indicating that the server is temporarily unable to fulfill the request.

For an example of how this works, assume that your account has a limit of 2,000 requests per day. If, starting at noon on Monday, API users make 100 requests per hour, the account reaches it's limit of requests per rolling 24-hour period during the 7:00 a.m. hour on Tuesday (20 hours * 100 requests an hour = 2,000 requests). API users cannot make requests again until the previous 24-hour period has fewer than 2,000 requests. It reaches that threshold after noon on Tuesday, when the previous day’s requests fall out of the previous 24-hour period.

:::note

None of ’s built-in functionality uses the Platform API, so using the service does not affect your API usage limits.

:::

## Platform API audit log

The [Platform API](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/r-mdm-Platform_API_368dc28d-455d-4aa2-970e-d2332c7ada83.md) enables programmatic access to the audit log. The API’s [Audit Log object](https://developer.boomi.com/api/platformapi#tag/AuditLog) represents an entry in the audit log.

Retention of audit log entries is indefinite. Entries logged during the past 30 days appear in the **Log** tabs in Boomi DataHub. 

Audit Log object queries for specific types of Boomi DataHub actions are constructed by combining the type, action and modifier filter parameters:

|Action type\(s\)|type|action|modifier|
|----------------|----|------|--------|
|Switched accounts|*account*|ON\_ENTRY|NONE|
|Model addition to an account group|*as.accountgroup.resource*|ADD|NONE|
|Model removal from an account group|*as.accountgroup.resource*|DELETE|NONE|
|Created source in account|*mdm.account.source*|ADD|NONE|
|Deleted source from account|*mdm.account.source*|DELETE|NONE|
|Modified properties of source|*mdm.account.source*|UPDATE|NONE|
|Requested addition, updating or deletion of a channel for source|*mdm.channel.state*|CHANGE|REQUEST|
|Channel added, updated or deleted for a source \(or failure of one of these operations\)|*mdm.channel.state*|CHANGE|RESPONSE|
|Channel update request resent for a golden record|*mdm.data*|ADD|NONE|
|Requested unlinking of a golden record from a source|*mdm.data*|CHANGE|REQUEST|
|Requested to manually end-date a golden record\(s\)|*mdm.data*|DELETE|NONE|
|Requested to manually purge an end-dated golden record\(s\)|*mdm.data*|DELETE|NONE|
|Golden records exported to CSV|*mdm.data*|DOWNLOAD|NONE|
|Golden record manually updated|*mdm.data*|EDIT|NONE|
|Requested to stop end-date of an active golden record\(s\)|*mdm.data*|STOP|NONE|
|Requested to stop purge of an end-dated golden record\(s\)|*mdm.data*|STOP|NONE|
|End-dated golden record restored|*mdm.data*|UPDATE|NONE|
|Requested deployment of model|*mdm.model*|DEPLOY|REQUEST|
|Model deployed \(or failure of this operation\)|*mdm.model*|DEPLOY|RESPONSE|
|Requested resetting of model|*mdm.model*|RESET|REQUEST|
|Model reset \(or failure of this operation\)|*mdm.model*|RESET|RESPONSE|
|Requested undeployment of model|*mdm.model*|UNDEPLOY|REQUEST|
|Model undeployed \(or failure of this operation\)|*mdm.model*|UNDEPLOY|RESPONSE|
|Canceled reapplying tags to all golden records in the model’s domain.|*mdm.model*|UPDATE|NONE|
|Reapplying tags to all golden records in the model’s domain|*mdm.model*|UPDATE|REQUEST|
|Reapplied tags to all golden records in the model’s domain|*mdm.model*|UPDATE|RESPONSE|
|Requested approval of quarantined entity for incorporation in domain|*mdm.quarantine*|APPROVE|NONE|
|Requested deletion of quarantine entry\(s\)|*mdm.quarantine*|DELETE|NONE|
|Requested rejection of quarantine entry|*mdm.quarantine*|REJECT|NONE|
|Requested match resolution or resubmission for quarantined entity|*mdm.quarantine*|RESOLVE|NONE|
|Requested restoration of end-dated golden record linked to quarantined entity|*mdm.quarantine*|RESTORE|NONE|
|Requested data update for quarantined entity|*mdm.quarantine*|UPDATE|NONE|
|Repository deleted|*mdm.repository*|DELETE|NONE|
|Repository renamed|*mdm.repository*|UPDATE|NONE|
|Requested attachment or removal of source to or from domain, enablement of initial load for source or finish of initial load|*mdm.source.state*|CHANGE|REQUEST|
|Source attached to or removed from domain or initial load for source enabled or finished \(or failure of one of these operations\)|*mdm.source.state*|CHANGE|RESPONSE|
|Source rankings updated|*mdm.source.state*|UPDATE|NONE|
|Default source selected|*mdm.source.state*|UPDATE|NONE|
|Default source designation removed|*mdm.source.state*|UPDATE|NONE|
|Requested addition of staging area for source|*mdm.staging\_area*|ADD|NONE|
|Staging area disabled or reenabled|*mdm.staging\_area*|CHANGE|NONE|
|Requested deletion of staging area for source|*mdm.staging\_area*|DELETE|NONE|
|Requested renaming of staging area|*mdm.staging\_area*|UPDATE|NONE|
|Requested deletion of entities from staging area|*mdm.staging\_data*|DELETE|NONE|



