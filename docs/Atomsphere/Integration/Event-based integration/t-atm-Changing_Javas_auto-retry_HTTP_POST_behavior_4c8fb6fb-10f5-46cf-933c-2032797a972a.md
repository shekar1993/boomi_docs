# Changing Java’s auto-retry HTTP POST behavior 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4c8fb6fb-10f5-46cf-933c-2032797a972a"/>
</head>


To prevent external Java applications from making calls to the Web Services Server listener processes, you should set the **Retry HTTP POST** property on the **Properties** panel.

## About this task

Some users observed that external Java applications were making calls to Web Services Server listener processes. Therefore those processes were executing twice on their Atom, Molecule, or private Atom Cloud. The initial attempt to call the Web Services Server listener processes was not being recorded in the shared HTTP server logs.

By default and in certain scenarios, Java automatically retries HTTP POST calls. This retry was disabled for all new Atom installations as of the November 2014 release because most users do not want this behavior.

To disable Java’s automatic retry behavior on Atoms, Molecules, or Atom Clouds installed prior to the November 2014 release, or to enable this behavior on Atoms, Molecules, or Atom Clouds installed after the November 2014 release, follow these steps:



## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Select the Atom, Molecule, or Atom Cloud from the list.

3.  In Settings & Configuration, click **Properties**.

    The Atom Properties or Molecule Properties panel opens.

4.  Click the **Advanced** tab.

5.  If the Atom, Molecule, or Cloud was installed before the November 2014 release, disable Java’s automatic retry behavior by doing the following:

    1.  Select the **Retry HTTP Post** property \(`-Dsun.net.http.retryPost`\) and click **![](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**.

    2.  Leave its Property Value check box turned off.

    **Note:** If the Atom, Molecule, or Cloud was installed after the November 2014 release, the Retry HTTP Post property is already disabled

6. **Optional:** If you want to restore Java’s automatic retry behavior, select the Property Value check box for **Retry HTTP Post**.

7.  Click **Save**.

    Because changes to this property do not take effect until the Atom, Molecule, or Atom Cloud is restarted, you are prompted to restart. You have the option to restart now or restart later.