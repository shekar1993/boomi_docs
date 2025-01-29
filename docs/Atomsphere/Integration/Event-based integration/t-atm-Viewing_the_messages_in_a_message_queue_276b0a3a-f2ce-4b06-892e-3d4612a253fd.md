# Viewing the messages in a message queue 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-276b0a3a-f2ce-4b06-892e-3d4612a253fd"/>
</head>


View the message queue on the Queue Management panel of Atom Management.

## About this task

**Important:** Known issue: There is a known limitation which results in an inability to browse messages on a queue or dead letter queue past a certain number on the View Messages and View Dead Letters screens. This number varies between runtimes, and is based upon the available memory of the runtime. Unfortunately, there is no workaround for this issue.

## Procedure

1.  On the **Manage** menu select **Atom Management**.

2.  Select the Atom, Molecule, or Cloud from the list on the left.

3.  In Runtime click **Queue Management**.

    The Queue Management panel opens.

4.  If the message queue is a subscriber queue, in the **![](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) Actions** menu for the applicable Publish/Subscribe queue, select **![](../Images/main-ic-document-with-two-red-checkmarks-16_839b7a6c-7f81-4605-8fea-034697f24074.jpg) Manage Subscriber Queues**.

5.  In the **![](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) Actions** menu for the message queue, select **![](../Images/main-ic-document-with-circled-i-16_5f23e683-d38c-4755-80cc-bfbb5891ffd3.jpg) View Messages**.

    The queue’s message list appears.

    ![View Messages panel.](../Images/manage-ds-shared-queue-server-settings-messages_2b9c031f-acbe-40e9-8343-acd99d911c2d.jpg)

    **Note:** If memory limits prevent the full number of messages from being listed, a banner displays how many messages are able to be viewed.

6.  To view the list of documents referenced in an individual message, click its Number of Documents link.

    The message’s document list appears.

    ![View Documents panel.](../Images/manage-ds-shared-queue-server-settings-docs_0e386cf0-5b7a-4d1c-b03a-b487307cc8ba.jpg)

7.  To view an individual document’s data, in the **![](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) Actions** menu for that document, select **![](../Images/main-ic-document-with-circled-i-16_5f23e683-d38c-4755-80cc-bfbb5891ffd3.jpg) View Document Details**.

    The Document Viewer dialog opens. When you are done viewing the data. click **Close Document Viewer**.

8. **Optional:**  For each additional document whose data you want to view, repeat step 8.

9. **Optional:** For each additional message whose list of referenced documents you want to view, click **Back to Messages** and then repeat steps 7–9.