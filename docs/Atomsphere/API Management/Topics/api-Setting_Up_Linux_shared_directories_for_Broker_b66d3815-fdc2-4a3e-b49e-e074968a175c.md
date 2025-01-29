# Setting up Linux shared directories for a Broker 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b66d3815-fdc2-4a3e-b49e-e074968a175c"/>
</head>


Run the Broker installer file on a machine that will share the installation directory and share the directory via NFS to other machines.

## Before you begin

Before completing these steps for a Linux installation, download the local Broker installer.

## Procedure

1.  After downloading the Broker installer \(broker\_install.sh or broker\_install64.sh\), run it on a machine that will eventually share the Broker's installation directory.

2.  Share the directory via NFS to other machines, using the same installation directory name.

## Next steps

If you are installing a Broker, next you need to install the first node. 