# Adding a business rule data quality step 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-5f850463-a848-4ac5-8ac6-4c5954f6dc88"/>
</head>


When a business rule data quality step is applied, the repository performs data validation by evaluating entity data against a custom business rule.

## About this task

Following are the general steps for adding a business rule data quality step. For details about steps 3–5 refer to the linked task topics.

## Procedure
1.  In the **Data Quality Steps** tab, click **Add a Data Quality Step** or **Add Your First Data Quality Step**.

    The Available Data Quality Services dialog appears and takes focus.

    ![Available Data Quality Services dialog](../Images/Models/mdm-db-model-data-quality-services_9e4ef830-ecba-440a-b3d7-8e06970a3a16.jpg)

2.  Click **Business Rule**.

    The Data Quality Step wizard opens to the Configure Business Rule screen.

3.  In the Inputs section, add either an input field or an input function and the corresponding output\(s\).

    Repeat this step as many times as needed.

4.  In the Conditions section, add either a condition or a condition group. Conditions refer to the outputs defined in the previous step.

    Repeat this step as many times as needed.

    To change the Boolean operator relating top-level grouped conditions, click the desired Top Level Operator — **AND** \(the default\) or **OR**.

5.  In the Error Message section, specify the business rule’s error message template. The template is used to construct error messages logged when incoming entities are quarantined as a result of failing to satisfying the business rule. The template can refer to the outputs defined in step 3.

    ![Configure Business Rule screen of the Data Quality Step wizard](../Images/Models/mdm-db-model-data-quality-step-configure-business-rule_62860498-1816-4353-8e19-86f21f5bed2e.jpg)

6.  Click **Next**.

    The wizard advances to the Name the Step screen.

    ![Name the Step screen of the Data Quality Step wizard](../Images/Models/mdm-db-model-data-quality-business-rule-name_52804393-4019-49b5-a781-933105f43696.jpg)

7.  In the **Data Quality Step Name** field, replace the default New Business Rule by typing a more descriptive step name.

8.  Click **Finish**.

    The wizard closes, and the data quality step is added.