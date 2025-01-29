# Configuring an override for the Shared Web Server's base URL 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e02ab7e7-2e85-4608-99ef-e72e7bf388be"/>
</head>


Override the default of the base URL on the Shared Web Server panel within Atom Management.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.


## About this task

If you want to use the Shared Web Server on an Atom that is behind a NAT (network address translation) or some other network forwarding device, you can choose to manually override the URL that is used when building the WSDL. To get the correct location into the WSDL, do the following.


## Procedure

1.  On the **Manage** menu select **Atom Management**.

2.  Select the Atom from the list on the left.

3.  Under Settings & Configuration, click **Shared Web Server**.

4.  On the **General** tab do the following:

    1.  For **Base URL for API Requests**, select **Override Default**.

    2.  Type the URL in the field provided. For example:

    ```
     https://<External/Internal Host>[:<Port>]
     ```

5.  In the **Listening Port Configuration** section, ensure that the port that you want to configure is enabled.

6.  If the external URL is HTTPS and the internal URL is HTTP, do the following in the **Advanced Settings** section:

    1.  Specify an external host in the **External Host** field.

    2.  In the Listening Port Configuration section, set the port’s **External Port** field to a number greater than 0. The typical external SSL port is 443.

    3.  In the Listening Port Configuration section, turn on the port’s **External SSL** check box.

7.  Click **Save** to apply the settings on all of the Shared Web Server panel tabs.

    You are prompted to restart the Atom, Molecule, or Atom Cloud. You have the option to restart now or restart later.