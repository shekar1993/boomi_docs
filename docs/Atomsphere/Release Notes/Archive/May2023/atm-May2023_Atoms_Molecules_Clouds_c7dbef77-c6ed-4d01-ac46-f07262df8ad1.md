# Atoms, Molecules, and Atom Clouds 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-c7dbef77-c6ed-4d01-ac46-f07262df8ad1"/>
</head>





**Features:**

-   Atom, Molecule, and Atom Cloud installers are upgraded to address security vulnerabilities for third-party packages. \(RUN-4834\)

-   The Set Local Working Directory property \(`com.boomi.container.localWorkDir`\) name is changed to Set Local Jar Directory \(`com.boomi.container.localJarDir`\) to reduce similarity to the Working Data Local Storage property. You can set this property in the Properties panel's Advanced tab.

    If the original property was set prior to this release, it will continue to appear in the Properties panel's Custom tab. You can remove it after setting the Set Local Jar Directory property. \(RUN-4729\)

:::note

There is a known performance issue where if this property is set, the first time a connector is used in an execution, the execution will complete slower than expected. All subsequent executions perform normally. This behavior occurs for every connector that you use after setting this property. This issue will be resolved in RUN-5548.

:::

To learn more about this feature, see the topic [Properties panel, Advanced tab](/docs/Atomsphere/Integration/Integration%20management/r-atm-Properties_panel_Advanced_tab_c39737e8-1b16-4fdd-b414-152694364c14.md).

-   You can use the Set Local Jar Directory property in the Properties panel's Advanced tab to set a local JAR directory to which connectors are copied to each node in a cluster when they are downloaded or updated. \(RUN-2431\)

    **Important:** If you use a custom security policy, you must update your custom file to sync with changes made to the HIGH security policy. Under

    ``` 
    
    grant codeBase "file:${com.boomi.container.libDir}/-" {
      // base container configuration
    ```

    add the following lines:

    ``` 
    
    permission java.io.FilePermission "${com.boomi.container.localJarDir}", "read";
    permission java.io.FilePermission "${com.boomi.container.localJarDir}${/}-", "read";
    permission java.io.FilePermission "${com.boomi.container.workDir}", "read";
    ```

    To learn more about this feature, see the topic [Properties panel, Advanced tab](/docs/Atomsphere/Integration/Integration%20management/r-atm-Properties_panel_Advanced_tab_c39737e8-1b16-4fdd-b414-152694364c14.md).


**Fixes:**

-   The fix implemented in RUN-4975 in the March 2023 release prevented all Atoms, Molecules, and Atom Clouds from upgrading from Java 8 to Java 11. This issue was resolved with the release of the Atom installer patch prior to the May Runtime Release.

Before upgrading to Java 11, ensure that the Java Home property on the Startup Properties panel matches the pref\_jre.cfg location.

:::note

When upgrading from Java 8 to Java 11 or if the runtime is using an external JDK, Windows multi-node runtimes can be upgraded only by using the script. All nodes must be brought down before you run the upgrade script.

:::

 \(RUN-5442, REL-8641\)





