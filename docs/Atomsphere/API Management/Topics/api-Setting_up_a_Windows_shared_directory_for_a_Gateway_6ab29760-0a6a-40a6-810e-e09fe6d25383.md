# Setting up a Windows shared directory for a Gateway 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-6ab29760-0a6a-40a6-810e-e09fe6d25383"/>
</head>


Use Windows file sharing to grant specific users access to the Gateway installation folder path.

## Before you begin

Before completing these steps for a Windows installation, download the local Gateway installer.

## Procedure

1.  Choose or create a user that will be used to run the Gateway. This user will be used to share the directory as well as to run the Gateway as a service on the various Windows machines.

2.  Create an empty directory on the Windows server.

    The Gateway installer uses uniform naming convention \(UNC\) paths to access a shared directory. Therefore, you should create this directory on a file server that can share it to the other machines that will be used for the Gateway.

3.  Share the directory by using Windows file sharing.

    Do not use a mapped network drive path \(such as `D:\`\) because you cannot use drive mappings for Windows services. Instead, use a UNC path \(such as `\\somepath`\) to the network drive.

4.  Make sure the user has Full Control privileges on the share and the entire Gateway installation folder path.

    :::note 
    
    You should grant privileges to the user explicitly rather than adding the user to an administration group.

    :::

## Next steps

Next you need to install the first Gateway node. 