# Defining data map extensions for a process

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ab3701ec-9156-4c4a-a052-d7d43c7a37bf"/>
</head>


Add or edit data map extensions in the Extensions dialog.

## Procedure

1.  Open the process and click the **Extensions** link above the process canvas.

    The Extensions dialog opens.

2.  Select the **Data Maps** tab.

    ![Extensions dialog, Data Maps tab.](../Images/build-db-extensions-data-map.jpg)

    Source and destination object definitions are listed in pairs. A list of the map components that reference profiles specified in those object definitions are grouped below each object pair.

3.  For the first object pair, lock fields in the source profile to prevent them from being customized:

    1.  Click **![icon](../Images/main-ic-lock-16_f56f240a-3adc-4be6-83da-c3596ea8a126.jpg) Choose Locked Fields for Source Profile**.

    The Locked Fields dialog opens.

    2.  For each field you want to lock, select the check box adjacent to the element name.

    3.  When you are done locking fields, click **OK**.

        The Locked Fields dialog closes, and focus returns to the **Data Maps** tab.

4.  For the first object pair, lock fields in the destination profile to prevent them from being customized. Click **![icon](../Images/main-ic-lock-16_f56f240a-3adc-4be6-83da-c3596ea8a126.jpg) Choose Locked Fields for Destination Profile**, and select the fields in the Locked Fields dialog as in step 3.

5.  For the first object pair, select the check box for each data map you would like to extend.

6.  Repeat steps 3–5 for each additional object pair.

7.  When you are finished defining extensions, click **OK**.

8.  Click **Save**.

## Next steps

After defining data map extensions, you need to set values for them. See the topic Setting Extension Values linked below.