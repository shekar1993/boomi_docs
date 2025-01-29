# Setting up unicast support 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4ddf6a4e-633e-4d46-acfd-83f39078ea83"/>
</head>


If multicast \(UDP\) support is disabled or not available to all the nodes in a Molecule or Cloud Molecules in an Atom Cloud, you can configure those containers to use unicast \(TCP\) for cluster communication.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## Procedure

1.  In the **Manage** menu, select **Atom Management**.

2.  Select the Molecule or Cloud Molecule from the list.

3.  In Settings & Configuration, click **Properties**.

    The Molecule Properties or Cloud Properties panel opens.

4.  Click the **Advanced** tab.

5.  Select the **Cluster Network Transport Type** property, click **Add Property**, and type UNICAST in the **Property Value** field.

    By default, a node does the following:

    -   attempts to detect a minimum of two initial hosts for cluster communication

    -   waits up to 30 seconds for hosts to show up in \<installation\_directory\>/bin/views

    :::note
    
    If the Cluster Network Transport Type container property is not set, multicast support is enabled by default.

    :::

6. **Optional:** If the default unicast port of 7800 conflicts with an existing product on the Molecule node or Cloud Molecule, select the **TCP Port for Unicast** property, click **Add Property**, and specify a port number in the **Property Value** field.

7. **Optional:**  To customize the auto-detection of initial hosts, set the following properties:

    1.  Select the **Minimum Number of Hosts for Unicast Auto-detect** property, click **Add Property**, and type a value in the **Property Value** field.

        The default is 2.

    2.  Select the **Timeout for Unicast Auto-detect** property, click **Add Property**, and type a number of seconds in the **Property Value** field.

        The node waits the specified amount of time for other hosts to show up in \<installation\_directory\>/bin/views. The default is 30 seconds.

        **Note:** Setting this property to an integer less than or equal to 0 disables the auto-detection of initial hosts.

8. **Optional:**  To identify specific host machines as initial hosts, select the **Initial Hosts for Unicast** property, click **Add Property**, and specify one or more hosts in the **Property Value** field.

    For example: `192.168.1.1[7800],192.168.1.2[7800]`, where 7800 is the default unicast port \(unless you changed the port\). The port number is *not* optional — it must be included and surrounded by square brackets \[ \].

    **Note:** Any hosts that auto-detection identifies are used *in addition to* the initial hosts that you specify here.

9.  Click **Save**.

    Changes to this property do not take effect until the Molecule or Cloud Molecule is restarted. You have the option to restart now or restart later.

## Next steps

To switch back to multicast support, repeat step 5 setting the Cluster Network Transport Type property to MULTICAST. Then you can change the Multicast Address and Multicast Port properties, if needed.