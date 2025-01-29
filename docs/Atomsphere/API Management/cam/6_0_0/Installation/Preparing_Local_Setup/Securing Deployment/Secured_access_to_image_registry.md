---
sidebar_position: 3
---
# Secured Access to Image Registry

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d81bf6f2-c1b3-4fb6-9fac-dc5db29bef09"/>
</head>

This procedure is optional. An image registry is a placeholder to store images. The image registry can be either on-premises or a cloud service. You must secure the image registry to prevent unauthorized access. You can push an image to the image registry or pull an image into some another Kubernetes cluster. 

You can access the image registry based on the role and location of the registry.

- Cloud registry - Sign in to the respective cloud account and add a token to the Kube config file. Usually the cloud SDK or CLI does that after sign-in. Refer to the cloud-specific documentation.

- Using image pull secrets - You can create Kubernetes secrets to access the images and configure these secrets in the deployment configurations. For more information, see "Pull an Image from a Private Registry" at [Kubernetes Documentation](https://kubernetes.io/docs/home/).

You can refer a sample file at `<extract location>/samples/general/apiml-role.yaml`.
