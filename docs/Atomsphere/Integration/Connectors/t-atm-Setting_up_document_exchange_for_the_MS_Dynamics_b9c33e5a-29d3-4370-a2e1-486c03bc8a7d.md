# Setting up document exchange for the Microsoft Dynamics AX connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b9c33e5a-29d3-4370-a2e1-486c03bc8a7d"/>
</head>


By setting up document exchange, data can move into and out of Microsoft Dynamics AX.

## About this task

Set up document exchange before creating a Microsoft Dynamics AX connector. Perform the following steps from the Server and Database Administration Guide for Microsoft Dynamics® AX 2009.

## Procedure

1.  Install and configure the Application Integration Framework \(AIF\).

2.  Generate the web services. In this step, you publish the web services for external consumption. This is mandatory.

3.  Grant permissions to the web service. See “Grant permissions to a service” in the Administration Guide. This is mandatory.

4.  Do the following to get the web service URL.

    1.  Click **Start** \> **Administrative tools** \> **Internet Information Services \(IIS\) Manager**.

    2.  Expand the Default Web Site node or the web site node that contains the AIF web services virtual directory.

    3.  Navigate to the virtual directory `MicrosoftDynamicsAXAif50`.

        The services appear in the pane on the right side and have a file name extension of `.svc`.

    4.  Right-click the `.svc` file and select **Browse**.

        An Internet Explorer browser window opens with the service name at the top. The URL to which Internet Explorer points is the URL of the service. For example: `http://localhost/MicrosoftDynamicsAXAif50/salesorderservice.svc`. You need the fully-qualified URL without the localhost path in order to successfully call the service.