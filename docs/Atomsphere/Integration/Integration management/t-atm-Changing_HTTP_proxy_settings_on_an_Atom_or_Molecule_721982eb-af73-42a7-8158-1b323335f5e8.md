# Changing HTTP forward proxy settings on an Atom or Molecule 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-721982eb-af73-42a7-8158-1b323335f5e8"/>
</head>


Change HTTP proxy settings in the **Properties** panel.


## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Select the Atom or Molecule from the list on the left.

3.  In Settings & Configuration, click **Properties**.

    The Atom Properties or Molecule Properties panel opens.

4.  Click the **Advanced** tab.

5.  Select the **Proxy Host** \(com.boomi.container.proxyHost\) property, click **Add Property** and type the host name or IP address in the Property Value field.

6.  Select the **Proxy Port** \(com.boomi.container.proxyPort\) property, click **Add Property** and type the port number in the Property Value field.

7.  If your forward proxy requires user authentication, select the **Proxy User ID** \(com.boomi.container.proxyUser\) property, click **Add Property** and type the user ID in the Property Value field.

8.  If an encrypted proxy password exists on the Atom or Molecule, the property list shows the Encrypted Proxy Password property. You cannot edit the encrypted password. To change the password once it has been set and encrypted on the Atom, delete the Encrypted Proxy Password property and then set a new password as described in step 11. Follow the steps 9-10 before step 11. If the encrypted password property exists you should save after removing "*Encrypted Proxy Password*", otherwise the property won't be removed for step 11. To delete the property, locate the **Encrypted Proxy Password** property and click the ![Delete](../Images/main-ic-x-white-in-red-circle-16_0d0c5dc5-1c5e-4117-8a58-92c5e050ec5b.jpg) **Delete** icon.

9.  Select the **Non Proxy Hosts** \(com.boomi.container.nonProxyHosts\) property, click **Add Property** and type the host name\(s\) in the Property Value field.

    The Non Proxy Hosts property specifies the hosts to be connected to directly, not through the proxy server. The value can be a list of hosts, each separated by a pipe \(\|\). An asterisk \(\*\) can be used for matching. For example, `*.mycompany.com|localhost` would indicate that any hosts suffixed by mycompany.com or a host of localhost should not go through the proxy.

10. Click **Save**.

    Because changes to these properties do not take effect until the Atom or Molecule is restarted, you are prompted to restart. You have the option to restart now or restart later.

    If you are setting the proxy password in the next step or the system property for user authentication of your forward proxy in step 12, you can wait to restart your API Gateway until after you set the proxy password. The API Gateway must be restarted after the password is set in the properties file.

11. To set the proxy password:

    1.  Navigate to \<installation\_directory\>/conf.

    2.  Open the container.properties file in a text editor such as Notepad.

    3.  Modify the `com.boomi.container.proxyPassword` value as necessary.

    4.  Save the file.

12. This is required if you have set a username and password, and if you are using Java 8 or later, set your system properties to enable the Basic authentication scheme.

    1.  Go to **Manage** \> **Atom Management**.

    2.  Select the Atom or Molecule from the list on the left.

    3.  In Settings & Configuration, click **Properties**.

        The Atom Properties or Molecule Properties panel opens.

    4.  Click the **Custom** tab and locate System Properties.

    5.  Under System Properties, click **Add a Property** and type the correct system property for your connection type if the forward proxy requires user authentication.

        |Connection Type|System Property|
        |---------------|---------------|
        |Secure \(https\) connections|-Djdk.http.auth.tunneling.disabledSchemes=""|
        |Unsecure \(http\) connections|-Djdk.http.auth.proxying.disabledSchemes=""|

    6.  Click **Save**.

13. Restart your Atom or Molecule.