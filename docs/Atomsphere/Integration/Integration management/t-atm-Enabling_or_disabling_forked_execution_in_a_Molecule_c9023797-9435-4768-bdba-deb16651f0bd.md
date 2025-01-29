# Enabling or disabling forked execution in a Molecule 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c9023797-9435-4768-bdba-deb16651f0bd"/>
</head>


Enable or disable forked executions in a Molecule by setting its **Execute Processes as Forked JVMs** property on the Properties panel.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

:::caution

If you use your own distribution of the Java 11 JDK rather than that provided by Boomi, you must use a JDK rather than a JRE to complete this task.

:::

1.  Go to **Manage** \> **Atom Management** and select the Molecule from the list.

2.  In Settings & Configuration, click **Properties**, and then click the **Advanced** tab.

3.  Select the **Execute Processes as Forked JVMs** property \(`com.boomi.container.processExecMode`\), click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and select one of the following values:

    -   To enable forked execution, select MULTI\_PROCESS.

    -   To disable forked execution, select MULTI\_THREAD.

    By default, this property is not set so that forked execution is disabled. If you do not set the property, forked execution remains disabled. If you have enabled forked execution, disable it by choosing the MULTI-THREAD option.

4. **Optional:** **This step applies to version Java 8 only.** If you enabled forked execution for the Molecule, do the following to point to the location of the JRE or JDK that the Molecule should use:

    1.  Select the **Java Class Path Prepend** property \(`-classpath/p`\), click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and enter the path to the tools.jar class file \(e.g., C:\\Program Files\\Java\\jdk1.8.0\_261\\lib\\tools.jar or /usr/java/jdk1.8.0\_261/lib/tools.jar\).

    2.  Select the **Java Library Path** property \(`-Djava.library.path`\), click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and enter the path to the tools.jar class file \(e.g., C:\\Program Files\\Java\\jdk1.8.0\_261\\lib\\tools.jar or /usr/java/jdk1.8.0\_261/lib/tools.jar\).

5.  Click **Save**.

    Because changes to this property do not take effect until the Molecule is restarted, you are prompted to restart. You have the option to restart now or restart later.

## Next steps

If you enabled forked execution for the Molecule, you can set properties on the Forked Execution Properties panel that affect how forked executions run.