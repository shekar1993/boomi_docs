 
# SFTP (Legacy) connection 

The SFTP (Legacy) connection contains the connection settings, including login information, for the SFTP server.

This connection contains two configuration tabs:

-   SFTP Host — used to configure user, port, and proxy
-   SSH Options — used to configure private key authentication and key file password


With the SFTP (Legacy) connector you can authenticate using simple user name/password **or** SSH \(Secure Shell\) private key authentication. Do not configure both.


:::note

Entering incorrect credentials in the SFTP (Legacy) connection may result in a lockout from the server. The number of invalid attempts allowed before lockout depends on the configuration of the server you are trying to connect to. If the server is configured with six or fewer retries, you are locked out after the first attempt. Therefore, it is highly recommended to be diligent when entering credentials in the connection to avoid a lockout.

:::

## SFTP Host tab 

**Host** - 
The domain name or IP address of the SFTP host.

**Port** - 
The command port on which the SFTP server listens for incoming connections from an SFTP client. The default port is 22.

**User** - 
The user name of the account on the SFTP server.

**Password** - 
The password of the account on the SFTP server.

**Use Proxy** - 
Selecting this check box reveals the Choose Proxy Type list.

**Choose Proxy Type** - 
Select the internet protocol to route network packets:
- Atom — If selected, the connector uses the default HTTP proxy host, port, user name, and password from the container.properties file.

- HTTP — If selected, enter the host, port, user name, and password.

- SOCKS4 — If selected, enter the host and port.

- SOCKS5 — If selected, enter the host, port, user name, and password.

**Proxy Host (HTTP, SOCKS4, SOCKS5)** - 
The URI to your proxy server, such as ``http://111.111.111.11.88``

**Proxy Port (HTTP, SOCKS4, SOCKS5)** - 
The port number of the proxy server, such as 80.

**Proxy User (HTTP, SOCKS5)** - 
The name of the user who can log on to the proxy server, such as johndoe@mycompany.com.

**Proxy Password (HTTP, SOCKS5)** - 
The password for the Proxy User, such as password-to-proxy-host.

## SSH Options tab 

Boomi changed the algorithm sequence in the jsch library between versions 0.1.51 and 0.1.53. Some SFTP servers may not use the newer sequence as expected. Thus, the algorithm sequence in the 0.1.53 jsch library can cause connection issues with the key exchange that reports a connection or security error. The connector creation date determines the sequence:

-   Connectors created *before* the November 2017 release use the 0.1.51 sequence by default.
-   Connectors created *after* the November 2017 release use the 0.1.53 sequence but can use the 0.1.51 sequence by turning on **Use Max Key Exchange size of 1024**.


This is the list of jsch-0.1.53 supported key exchange methods:

```
ecdh-sha2-nistp256,
ecdh-sha2-nistp384,
ecdh-sha2-nistp521,
diffie-hellman-group14-sha1,
diffie-hellman-group-exchange-sha256,
diffie-hellman-group-exchange-sha1,
diffie-hellman-group1-sha1
```

This is the list of jsch-0.1.51 supported key exchange methods:

```
diffie-hellman-group1-sha1,
diffie-hellman-group14-sha1,
diffie-hellman-group-exchange-sha1
```

**Use Private Key Authentication** - 
A private key is part of two-factor authentication to identify a user when logging onto a server. This method is not available if you are using a Boomi Atom Cloud. Examples of private keys are RSA and DSA.

**Client SSH Key Path** - 
The system path where the key is located on the server on which the Atom is running. Store your Client SSH keys in a folder other than the SFTP (Legacy) connector and not in the Atom installation directory folders because these folders may be overwritten during updates.

**Key File Password** - 
The password used to protect the key file.

**Known Host Entry** - 
Paste an SSH Known Host key, typically stored in the `/home/[user]/.ssh/known_host file`, for the connector to verify/match against the associated private key.

**Use Max Key Exchange size of 1024** - 
When selected, the 0.1.51 version algorithm sequence is used to limit size of the Known Host key to 1024 characters. When unselected, the 0.1.53 default algorithm sequence is used and the key exchange size is unlimited.


:::note

The SFTP (Legacy) connector uses Java Secure Channel \(JSch\) for SSH key-based authentication. If you want to use JSch, select the **Use Private Key Authentication** check box. Make sure the private key is still in the .ppk format and not the .pem format. Then, in the **Client SSH Key File Path** field, specify the path to the private key you created.

:::

