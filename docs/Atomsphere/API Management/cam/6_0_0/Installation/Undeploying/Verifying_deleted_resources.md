---
sidebar_position: 3
---

# Verifying Deleted Kubernetes Resources

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-99c0ed5b-ec4a-4992-af74-e0eaf5c34b0a"/>
</head>

## Procedure

1. Ensure that the deleted application is not still present. 

   ```
   $ helm list
   ```

2. Ensure that the services associated with the application are not present. 

   ```
   $ kubectl get svc
   ```

3. Ensure that the endpoints associated with the services are not present. 

   ```
   $ kubectl get endpoints
   ```

## Result

All associated Kubernetes resources are removed successfully.

## What to fo next

You need to remove some user data that is not removed.
