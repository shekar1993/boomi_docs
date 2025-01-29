# Defining Trading Partner Settings extensions for a process

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b2f43a34-30f6-4e8f-a021-a0c0ca55ccdd"/>
</head>


Override control information, connection settings, or shared communication settings within configured Trading Partners.

## About this task

Trading Partner Settings extensions cannot currently be defined for the following:

-   Custom trading partners

-   HTTP communication method Get Options and Send Options for trading partners using any standard

## Procedure


1.  Open the process and click the **Extensions** link above the process canvas.

    The Extensions dialog opens.

2.  On the Partner Settings tab, do one of the following:

    -   To define extensions for a Trading Partner, in the **Component Type** list, select Trading Partner, and then in the **Component Name** list, select the Trading Partner.

        The **Component Name** list is a list of all the unique Trading Partner components referenced in this process *or any child processes*.

    -   To define extensions for a Communication Channel, in the **Component Type** list, select Communication Channel, and then in the **Component Name** list, select the Communication Channel.

            The **Component Name** list is a list of all the unique Communication Channel components referenced in this process *or any child processes*.

3.  In the **Extension Set** list, select an extension set.

    If in step 2 you selected a Trading Partner, this list is filled with valid communication methods or control information categories available to that partner. All settings available to a "My Company" partner can be overridden. However, for "My Trading Partner" type partners, some communication method settings only become available if that Trading Partner component is *not* set to use the default values.

    If in step 2 you selected a Communication Channel, this list is filled with shared communication channels available to that partner. All settings available to a Communication Channel can be overridden if the “My Trading Partner” partner is set to use Shared Communication settings.

4.  Select the check box next to each setting to extend.

    The list shows the settings available to extend within the selected Extension Set \(category\). You need to select only the settings that will vary between deployments.

5.  Repeat steps 2–4 for each trading partner or communication channel.

6.  When you are finished defining extensions, click **OK**.

7.  Click **Save**.

    If you add a new Trading Partner or Communication Channel component to your process, revisit the extensions and define any extensible properties for that component.

## Next steps

After defining Trading Partner or Communication Channel settings extensions, you need to set values for them. See the linked topics about extension values.