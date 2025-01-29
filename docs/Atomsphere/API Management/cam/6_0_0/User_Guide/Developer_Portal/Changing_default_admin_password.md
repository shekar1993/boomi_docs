---
sidebar_position: 4
---

# Changing the Administrator Password

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2da71110-16b4-478c-938f-ccdca05a701f"/>
</head>

The default administrator password can be changed from the Developer Portal. 

## Before you begin

Make sure that all components are active and the cluster is up and running 

   ```
   kubectl get pods
   NAME                                           READY   STATUS      RESTARTS   AGE
   cache-deploy-66559dcd79-64n2n                  2/2     Running     0          4h16m
   cache-deploy-66559dcd79-7vvdp                  2/2     Running     0          4h16m
   cache-deploy-66559dcd79-m7dn7                  2/2     Running     0          4h16m
   cacheloader-deploy-7bfd5b88d5-j7hkw            2/2     Running     0          4h16m
   configui-deploy-77d978b8cd-j5mbk               2/2     Running     0          4h16m
   loader-job-delta-28526955-sb899                0/1     Completed   0          10s
   platformapi-deploy-85d699fd7f-mqs8x            2/2     Running     0          4h16m
   startup-cacheloader-job-v6-0-0-ga-332r-2dvsj   0/1     Completed   0          4h16m
   trafficmanager-deploy-c4c76d544-p2z9n          2/2     Running     0          4h16m
   ```
## Updating Password in Existing Deployment

### Procedure

   1. Log in to the Developer Portal and update the password in the Admin view.

   2. Update secret `configui-user-secrets` with the new value.

   3. Restart `configui` pods. After restarting the pods, you can:

      Delete the pod and wait for the K8s scheduler to recreate the pod. 

      or 

      Scale down `configui` pods to 0 (wait for them to terminate) and scale them up again to the number of pods you want.

## Updating Password in New Deployment

### Procedure

1. Start toolkit container. For more details, see [Importing Seed Data](../../Installation/Preparing_Local_Setup/Preparing%20Database/Importing_seed_data.md).

2. Run customization script as mentioned in [Importing Seed Data](../../Installation/Preparing_Local_Setup/Preparing%20Database/Importing_seed_data.md).

3. When running customization pass new flag `localdevadminpassword` with value for `configui` and developer portal password.

4. Create `configui-user-secrets` with the new password.

