# Viewing a message queue’s dead letters 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-377ebad6-13c7-46fa-be21-a4302dd79a8b"/>
</head>


View the message queue’s dead letters from the Actions menu on the Queue Management panel of Atom Management.

## About this task

**Important:** Known issue: There is a known limitation which results in an inability to browse messages on a queue or dead letter queue past a certain number on the View Messages and View Dead Letters screens. This number varies between runtimes, and is based upon the available memory of the runtime. Unfortunately, there is no workaround for this issue.

## Procedure

1.  On the **Manage** menu select **Atom Management**.

2.  Select the Atom, Molecule, or Cloud from the list on the left.

3.  In Runtime, click **Queue Management**.

    The Queue Management panel opens.

4.  If the message queue is a subscriber queue, in the **![](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) Actions** menu for the applicable Publish/Subscribe queue, select **![](../Images/main-ic-document-with-two-red-checkmarks-16_839b7a6c-7f81-4605-8fea-034697f24074.jpg) Manage Subscriber Queues**.

5.  In the **![gear icon.](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) Actions** menu for the message queue, select **![gear icon.](../Images/main-ic-document-with-white-x-on-red-square-16_9b1ad410-5831-49c7-b268-953710b5c571.jpg) View Dead Letters**.

    The queue’s dead letter list appears.

    ![Dead Letters panel.](../Images/manage-ds-shared-queue-server-settings-dlq_51128a0e-ed75-4226-9c65-fedacd3fbd6d.jpg)

6.  **Optional:** To view the list of documents referenced in an individual dead letter, click its Number of Documents link.

    The dead letter’s document list appears.

    ![View Documents panel.](../Images/manage-ds-shared-queue-server-settings-docs_0e386cf0-5b7a-4d1c-b03a-b487307cc8ba.jpg)

7.  **Optional:** To view an individual document’s data, in the **![](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) Actions** menu for that document, select **![](../Images/main-ic-document-with-circled-i-16_5f23e683-d38c-4755-80cc-bfbb5891ffd3.jpg) View Document Details**.

    The Document Viewer dialog opens. When you are done viewing the data. click **Close Document Viewer**.

8.  **Optional:** For each additional document whose data you want to view, repeat step 8.

9. **Optional:** For each additional dead letter whose list of referenced documents you want to view, click **Back to Messages** and then repeat steps 7–9.