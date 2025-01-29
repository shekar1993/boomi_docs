# Setting up Linux shared directories for a Gateway 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-656e8aea-6445-4909-8f8e-ac299196c596"/>
</head>


Run the Gateway installer file on a machine that will share the installation directory and share the directory via NFS to other machines.

## Before you begin

Before completing these steps for a Linux installation, download the local Gateway installer.

## Procedure

1.  After downloading the Gateway installer \(gateway\_install.sh or gateway\_install64.sh\), run it on a machine that will eventually share the Gateway's installation directory.

2.  Share the directory via NFS to other machines, using the same installation directory name.

## Next steps

If you are installing a Gateway, next you need to install the first node. 