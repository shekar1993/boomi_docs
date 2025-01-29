# Webhook Events

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-dda03c48-d11c-4de6-9fd3-df505c4b6746"/>
</head>


- `subscription.create` - This event is triggered when a new subscription has been created. In contrast to the approval requests events this event is also triggered if no approval request is needed for this event.

   **Example**

``` xml
   {
 "type" : "subscription.create",
 "data" : {
  "subscription" : {
   "application" : 1,
   "apiProduct" : 1,
   "plan" : 1,
   "environments" : [ 1, 2, 3 ],
   "approvalStatus" : "PENDING",
   "approvalRequest" : null,
   "deploymentStatus" : "DEPLOYMENT_REQUIRED",
   "apiProductDisplayName" : "ProductX",
   "termsOfUseAccepted" : true,
   "id" : 42
  },
  "approvalRequest" : {
   "status" : "PENDING",
   "createdAt" : "2024-03-18T09:14:06.358041892Z",
   "resolvedAt" : null,
   "subscription" : 42,
   "createdByUser" : 13,
   "createdByOrganization" : 3,
   "resolvingOrganization" : 4,
   "resolvedByUser" : null,
   "comment" : "",
   "id" : 99
  },
  "user" : {
   "username" : "jane@boomi.com",
   "displayName" : "Joe",
   "email" : "jane@boomi.com",
   "status" : "ACTIVE",
   "role" : "USER",
   "organization" : 3,
   "origin" : "LDAP",
   "termsOfUseAccepted" : true,
   "id" : 13,
   "hasImage" : false
  }
 },
 "timestamp" : "2024-03-18T09:14:06.358096801Z"
}
```

- `subscription.delete` - This event is triggered when a subscription is removed. This can be done by one of the administrators, but also by the consumers themselves within the developer portal.

   **Example**

``` xml
   {
 "type" : "subscription.delete",
 "data" : {
  "subscription" : {
   "application" : 1,
   "apiProduct" : 1,
   "plan" : 1,
   "environments" : [ 1, 2, 3 ],
   "approvalStatus" : "PENDING",
   "approvalRequest" : null,
   "deploymentStatus" : "DEPLOYMENT_REQUIRED",
   "apiProductDisplayName" : "ProductX",
   "id" : 42
  }
 },
 "timestamp" : "2024-02-29T08:51:10.864166Z"
}
```
    




