# Setting a container property for customized script files

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a9c85bd9-651c-440d-bb98-7b7913e01e1d"/>
</head>


You should not need to customize the Molecule or Atom Cloud script files but if you do, set a container property to indicate that a customized file should be used rather than the distributed file.

## About this task

Setting a container property identifies a customized file to and preserves its contents from one release to the next.

:::note

The scripting engine that you use depends on whether you use Windows or Linux. If you are running:

- Windows and an Atom, or if you are running a Molecule that does not use UNC paths or forked execution, then batch scripts (.bat) are used.
- Windows and a Molecule that use UNC paths or forked execution, or if you are running an Atom, then PowerShell scripts (.ps1) are used.
- Linux, then shell scripts (.sh) are used in all situations.

:::

## Procedure

1.  In the **Manage** menu, select **Atom Management**.

2.  Select the Molecule or Cloud Molecule from the list.

3.  In Settings & Configuration, click **Molecule Properties** or **Cloud Properties**.

4.  Click the **Advanced** tab and set a property for each customized file that you created.

    The value of each property is based on the customized file's name. For example, if you customized the procrunner.ps1 file and named it procrunner-CUSTOM.ps1, set the Customized Procrunner Script File Name value to CUSTOM.

    1.  If you customized the procrunner file, select the **Customized Procrunner Script File Name** property, click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and add CUSTOM in the **Property Value** field.

    2.  If you customized the procbrowser file, select the **Customized Procbrowser Script File Name** property, click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and add CUSTOM in the **Property Value** field.

    3.  If you customized the procworker file, select the **Customized Procworker Script File Name** property, click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and add CUSTOM in the **Property Value** field.

    4.  If you customized the restart file, select the **Customized Restart Script File Name** property, click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and add CUSTOM in the **Property Value** field.

5.  Click **Save**.

    The property values are saved and added to the Molecule or Cloud’s `<installation_directory>/conf/container.properties` file.