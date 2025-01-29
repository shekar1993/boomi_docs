# Moving Plans in bulk 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-294ad402-ef95-4947-984e-1c559599bba5"/>
</head>


Clean up unnecessary Plans by merging multiple plans into one on the **Configure Server** \> **Plans** page. Using the Bulk Move Plans option merges plans into one primary plan and any related API associations or subscriptions are also moved to the primary plan that remains after the merge.

## Procedure

1.  From the Plans page, click Bulk Move Plans.

    The Bulk Move: Overview panel opens.

2.  Select your primary plan.

    Your primary plan is the plan that you want to remain after moving multiple other plans into this one.

3.  Click **Next**.

4.  Select the plan or plans that you want to become part of the primary plan that you selected in step 2.

5.  Click **Next**.

6.  Choose whether to keep or delete the disabled plans that you selected in step 4.

| Option                                   | Description                                                                                                                                                 |
|------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Disable the plans but do not delete them | This option disables the plan that you selected in step 4. It will be marked **(Disabled)** in the title and will have a status of **Disabled**. You can continue to view this plan moving forward, and you could also enable it again in the future. |
| Delete the plans                         | This option deletes the plans that you selected in step 4, and you will not be able to view or use the plans in the future.                                  |


7.  Click **Next**.

8.  Click **Finish**.  
    The system goes through the merge process, and any related API associations or subscriptions are moved to the primary plan selected in step 2. A Success screen displays upon completion of the merge.

9.  Click **Finish**.