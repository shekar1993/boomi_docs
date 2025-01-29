# Adding the Boomi Enterprise Platform as a service provider

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-2896dcac-5810-4ce7-89f2-809e56818136"/>
</head>

Add a user in OpenAM.

## About this task

Although OpenAM is the identity provider in this task, every identity provider is different.

## Procedure

1. Log into your identity provider \(OpenAM\) as the administrator.

2. Click **Register Remote Service Provider**.

3. In the **Where does the metadata file reside** field, select **URL**.

4. In the **URL where metadata is located** box, add the URL to the metadata for the account that you are setting up for single sign-on. This is the value from the **MetaData URL** field in **Settings** \> **Account Information and Setup** on the **SSO Options** tab — for example: `https://<host\>:<port\>/sso/<accountId\>/saml?metadata=true`.

5. In the **Circle of Trust** section, select **Add to existing**.

6. In the **Existing circle of trust** list, select the circle of trust that you created earlier.

7. In the **Attribute Mapping** section, type **FEDERATION\_ID** in the first field and select **mail** from the second field, then click **Add**.

    This means that the value in a user's email address field will be used as the federation id.

8. Click **Configure**.
