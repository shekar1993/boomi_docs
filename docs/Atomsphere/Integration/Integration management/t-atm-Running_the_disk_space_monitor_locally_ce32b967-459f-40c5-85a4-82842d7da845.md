# Running the disk space monitor locally 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ce32b967-459f-40c5-85a4-82842d7da845"/>
</head>


You can run the disk space monitor locally as a service either one time or at specified intervals.

## Procedure

1.  Go to **Manage** \> **Atom Management** and select the Cloud Molecule from the list on the left.

2.  In Settings & Configuration, click **Account Properties**.

3.  Click the **Advanced** tab.

4.  In the Property list, select the **Disk Space Monitoring** property, then click **Add Property**.

5.  In the **Property Value** field add `false`.

6. **Optional:**  To run the purge process separately, select the **Purge Manager** property, click **Add Property**, then add false in the **Property Value** field.

7.  Click **Save**.

    Because changes to this property do not take effect until the Atom Cloud is restarted, you are prompted to restart. You have the option to restart now or restart later.

8.  Run the following Java command in the root directory on a server that has access to the shared disk:

    ```
    java -Dcom.boomi.container.libDir=lib <heap_size> -cp lib/container-cloudlet.jar:lib/container-config.jar:lib/boomi-util.jar:lib/boomi-logging.jar:lib/model-platform.jar:lib/container-purge.jar:lib/container-schedule.jar:lib/container-execution.jar:lib/container-core.jar:lib/container-store-api.jar:lib/container-store.jar:lib/container-connector.jar:lib/commons-lang.jar com.boomi.container.cloudlet.monitor.AtomMaintenanceServer <frequency>
    ```

    -   The command requires one argument that tells the monitor when to run:

        -   To run the monitor one time, specify `—runonce`.

        -   To run the monitor as a background service, use the `<frequency>` argument and specify the interval as a whole number of milliseconds.

    -   The command accepts one optional argument to constrain the heap size to 16 or 32 MB. Use `<heap size>` to specify **-Xmx16m** or **-Xmx32m**.

    If you are using Windows, the Java command looks like this:

    ```
    java -Dcom.boomi.container.libDir=lib <heap_size> -cp lib\container-cloudlet.jar;lib\container-config.jar;lib\boomi-util.jar;lib\boomi-logging.jar;lib\model-platform.jar;lib\container-purge.jar;lib\container-schedule.jar;lib\container-execution.jar;lib\container-core.jar;lib\container-store-api.jar;lib\container-store.jar;lib\container-connector.jar;lib\commons-lang.jar com.boomi.container.cloudlet.monitor.AtomMaintenanceServer <frequency>
    ```

9.  When the command runs, it generates an atom-maintenance.log file in which you can see the results.