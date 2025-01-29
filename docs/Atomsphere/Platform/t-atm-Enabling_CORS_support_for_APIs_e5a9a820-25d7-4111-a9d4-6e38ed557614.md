# Enabling CORS support for AtomSphere and Partner APIs

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-814E081A-7845-44DA-9BD4-A52F0AB894EF"/>
</head>

Enable CORS support on the CORS page \(**Settings** \> **Account Information and Setup** \> **Boomi AtomSphere API** \> **CORS**\).

## Procedure

1. Select **Settings** \> **Account Information and Setup**. Click **CORS** under the **AtomSphere API** section on the left.

2. Click **Add Origin**.Specify an origin using URL syntax in the **Origin** field for the new rule.

    Origins are used for matching cross-server RESTish API requests under the account by protocol \(HTTP or HTTPS\), originating domain, and originating port.

4. Select the check box for each HTTP method \(GET, POST, DELETE\) that you want to use for the account from the specified origin.

5. (Optional) For each additional CORS rule that you want to specify, repeat steps 2–4.  

6. Click **Save**.
