# Generating an SSH key

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6582c850-c632-417e-8187-9d081b3368d0"/>
</head>


Secure Shell \(SSH\) is an encrypted protocol used to administer and communicate with servers.  An SSH key is an access credential in the SSH protocol, symbolizing encrypted passwords that facilitate authentication to establish a connection to the server.

## About this task

There are multiple ways in which a key file can be generated in the client system. Example: ssh-keygen, putty keygen. Follow the below steps to generate the SSH keys & capture the private & public key content to be specified for Keys’ Content-based authentication.

## Procedure

1.  Start the command prompt and execute the `ssh-keygen -m PEM` command. If the "ssh-keygen" command is used without any parameters, it generates the key in the OpenSSH format. In that case, the key should be converted to PEM format to use it in the SFTP V2 connector.

2.  Press **Enter** key, if prompted.

3.  Enter a password, when prompted. This step is required to generate password protected SSH key files. This password should be provided in the SFTP connector connection settings, if SSH Key File Path-based authentication is used.

4.  Press **Enter** key, if prompted.

5.  Follows the prompts, until it generates an SSH key with random art image.

6.  Navigate to the folder `C:\\Users\\<user-name>\\.ssh`, and check for the two key files generated. The private key file is called id\_rsa and the associated public key is called id\_rsa.pub.

7.  Open the key file with a text editor, copy, and use the content in the "**Private Key Content**" and "**Public Key Content**" field respectively.