# Changing HTTP forward proxy settings on an API Gateway 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-3ad3b223-e376-47e4-a14c-de4145f3b4a0"/>
</head>


Change HTTP forward proxy settings in the Integration Atom Management **Properties** panel.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.


## Procedure

1.  Within Integration, go to **Manage** \> **Atom Management**.

2.  Select the Atom or Molecule from the list on the left.

3.  In Settings & Configuration, click **Properties**.

    The Atom Properties or Molecule Properties panel opens.

4.  Click the **Advanced** tab.

5.  Select the **Proxy Host** `(com.boomi.container.proxyHost`) property, click **Add Property** and type the host name or IP address in the Property Value field.

6.  Select the **Proxy Port** (`com.boomi.container.proxyPort`) property, click **Add Property** and type the port number in the Property Value field.

7.  If your forward proxy requires user authentication, select the **Proxy User ID** (`com.boomi.container.proxyUser`) property, click **Add Property** and type the user ID in the Property Value field.

8.  **Optional:** If an encrypted proxy password exists on the Atom or Molecule, the property list shows the Encrypted Proxy Password property. You cannot edit the encrypted password. To change the password once it has been set and encrypted on the Atom, delete the Encrypted Proxy Password property and then set a new password as described in step 14. To delete the property, locate the **Encrypted Proxy Password** property and click the ![Delete](../Images/main-ic-x-white-in-red-circle-16_0d0c5dc5-1c5e-4117-8a58-92c5e050ec5b.jpg) **Delete** icon.

9.  **Optional:** Select the **Non Proxy Hosts** \(com.boomi.container.nonProxyHosts\) property, click **Add Property** and type the host name\(s\) in the Property Value field.

    The Non Proxy Hosts property specifies the hosts to be connected to directly, not through the proxy server. The value can be a list of hosts, each separated by a pipe \(\|\). An asterisk \(\*\) can be used for matching. For example, `*.mycompany.com|localhost` would indicate that any hosts suffixed by mycompany.com or a host of localhost should not go through the proxy.

10. Click **Save**.

    Because changes to these properties do not take effect until the API Gateway is restarted, you are prompted to restart. You have the option to restart now or restart later.

    If you are setting the proxy password in the next step or the system property for user authentication of your forward proxy in step 12, you can wait to restart your API Gateway until after you set the proxy password. The API Gateway must be restarted after the password is set in the properties file.

11. To set the proxy password for the API Gateway:

    1. Navigate to `<installation\_directory\>/conf` for your API Gateway.

    2. Open the container.properties file in a text editor such as Notepad.

    3. Set the `com.boomi.container.proxyPassword` value as the plain text value of your password.

    4. Save the file.

12. If your forward proxy requires authentication, set your system properties to enable the Basic authentication scheme.

    1. Within Integration, go to **Manage** \> **Atom Management**.

    2. Select the Atom or Molecule from the list on the left.

    3. In Settings & Configuration, click **Properties**.

        The Atom Properties or Molecule Properties panel opens.

    4. Click the **Custom** tab.

    5. Under System Properties, click **Add a Property** and type the correct system property for your connection type if the forward proxy requires user authentication.

    |Connection Type|System Property|
    |---------------|---------------|
    |Secure \(https\) connections|`-Djdk.http.auth.tunneling.disabledSchemes=""`|
    |Unsecure \(http\) connections|`-Djdk.http.auth.proxying.disabledSchemes=""`|

    6. Click **Save**.

13. Restart your API Gateway.