# Queue Management panel

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-DF059CE0-2D61-4D41-8DC6-8DF7E5001520"/>
</head>

The Queue Management panel appears on the Atom Management page \(**Manage** \> **Atom Management**\) when you have queue management configured on your Boomi account. This panel is used to manage message queues, enqueued messages, dead letters, or referenced documents.

:::note

You must have the Atom Management privilege to perform most of the actions on the Queue Management panel. If you have the Atom Management Read Access privilege, you can view queues, messages, dead letters, and document details, but you cannot make any modifications.

:::

On this panel, clicking **![Refresh button.](../Images/main-bt-arrows-gray-curved-refresh_3793feaf-5057-4b6a-9bd8-c830f4292d40.jpg)** refreshes the currently displayed list.

![Queue Management panel.](../Images/manage-db-shared-queue-server-settings_14a238e5-8525-4987-8784-0f7ec2b75bfb.jpg)

-   If a message queue list is displayed it is one of the following types:

    -   Queue Overview — list of all of the Atom shared message queue server’s Point-to-Point and Publish/Subscribe queues. This list appears on the tab by default.

    -   Subscribers — list of a Publish/Subscribe queue’s subscriber message queues. This type of list appears when **![](../Images/main-ic-document-with-two-red-checkmarks-16_839b7a6c-7f81-4605-8fea-034697f24074.jpg) Manage Subscriber Queues** is selected in the **![](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) Actions** menu for a Publish/Subscribe queue in the Queue Overview list. The list heading shows the name of the Publish/Subscribe queue. Clicking **Back to All Queues** restores the Queue Overview list.

    For each message queue in a message queue list, the following tools are available and properties are shown:

    **![](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) Actions**  
    This menu has the following selection for all message queues regardless of type:

    -   **![](../Images/main-ic-x-red-stylized-16_5cfc1d0e-0ef7-44cc-bacf-4b4116afca79.jpg) Delete this Queue** — Initiates a request to delete the queue.

      In the confirmation dialog:

      -   Clicking **OK** executes the operation.

       -   Clicking **Close** cancels the operation.

     This menu has the following additional selections for Point-to-Point and subscriber message queues:

     -   **![](../Images/main-ic-document-with-circled-i-16_5f23e683-d38c-4755-80cc-bfbb5891ffd3.jpg) View Messages** — Loads the queue’s Messages list. If there are not any messages in the queue, this selection is not available.

     -   **![](../Images/main-ic-document-with-white-x-on-red-square-16_9b1ad410-5831-49c7-b268-953710b5c571.jpg) View Dead Letters** — Loads the queue’s Dead Letters list. If the queue does not have dead letters, this selection is not available.

     -   **![](../Images/main-ic-basket-yellow-empty-16_7ccf1616-056a-4cdb-9d45-9a1e69859888.jpg) Clear Messages** — Initiates a request to clear the queue by removing all of its messages.

            In the confirmation dialog:

            -   Clicking **OK** executes the operation.

            -   Clicking **Close** cancels the operation.

            If there are not any messages in the queue, this selection is not available.

     -   **![](../Images/main-ic-basket-yellow-empty-16_7ccf1616-056a-4cdb-9d45-9a1e69859888.jpg) Clear Dead Letters** — Initiates a request to clear the queue’s dead letters.

            In the confirmation dialog:

     -   Clicking **OK** executes the operation.

     -   Clicking **Cancel** cancels the operation.

    If the queue does not have dead letters, this selection is not available.

    This menu has the following additional selection for Publish/Subscribe queues:

    -   **![](../Images/main-ic-document-with-two-red-checkmarks-16_839b7a6c-7f81-4605-8fea-034697f24074.jpg) Manage Subscriber Queues** — Loads the Subscribers message queue list.

    **Queue Name**  
    \(Queue Overview list only\) Name of the message queue.

    **ubscriber Name**  
    \(Subscribers message queue list only\) Name of the subscribing process.

    **ueue Type**  
    \(Queue Overview list only\) Type of the message queue — Point-to-Point or Publish/Subscribe.

    **Messages**  
      -   Point-to-Point or subscriber queue — count of messages in the message queue.

      -   Publish/Subscribe queue — aggregate count of messages in the subscriber queues.

    **Dead Letters**  
      -   Point-to-Point or subscriber queue — count of the message queue’s dead letters.

      -   Publish/Subscribe queue — aggregate count of the subscriber queues’ dead  letters.

-   If a message list is displayed it is one of the following types:

    -   Messages — list of a Point-to-Point or subscriber message queue’s currently enqueued messages. This type of list appears when **![](../Images/main-ic-document-with-circled-i-16_5f23e683-d38c-4755-80cc-bfbb5891ffd3.jpg) View Messages** is selected in the **![](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) Actions** menu for a message queue in a message queue list.

        ![View Messages panel.](../Images/manage-ds-shared-queue-server-settings-messages_2b9c031f-acbe-40e9-8343-acd99d911c2d.jpg)

    -   Dead Letter Queue — list of a Point-to-Point or subscriber message queue’s dead letters. This type of list appears when **![](../Images/main-ic-document-with-white-x-on-red-square-16_9b1ad410-5831-49c7-b268-953710b5c571.jpg) View Dead Letters** is selected in the **![](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) Actions** menu for a message queue in a message queue list.

        ![View Dead Letters panel.](../Images/manage-ds-shared-queue-server-settings-dlq_51128a0e-ed75-4226-9c65-fedacd3fbd6d.jpg)

    The list heading contains the queue name and the type of list.

    The following action menus operate on all or selected messages \(or dead letters\) in a message list:

    **Name**  
    **Description**

    **Retry**  
    \(Dead letters only\)

    - Selected — Initiates a request to resend each selected dead letter to the message queue

      In the confirmation dialog:

    - Clicking **OK** executes the operation.

    - Clicking **Close** cancels the operation.

    - All in this Queue — Initiates a request to resend all dead letters to the message queue.

      In the confirmation dialog:

      - Clicking **OK** executes the operation.

      - Clicking **Close** cancels the operation.

    **Delete**  
    - Selected — Initiates a request to delete each selected message.

    In the confirmation dialog:

    - Clicking **OK** executes the operation.

    - Clicking **Close** cancels the operation.

    - All — Initiates a request to delete all messages.

      In the confirmation dialog:

      - Clicking **OK** executes the operation.

      - Clicking **Close** cancels the operation.

      For each message \(or dead letter\) in a message list, the following tools are available and properties are shown:

        **check box**  
        Selects the message for action \(**Retry** or **Delete**\).

        **ID**  
        System ID of the message.

        **Time Stamp**  
        Date and time at which the message arrived in the message \(or dead letter\) queue.

        **Number of Documents**  
        Count of referenced documents in the message. This is a link to the document list.

-   A document list contains an entry for each document referenced in an enqueued message or dead letter. The list heading contains the queue name and the system ID of the message or dead letter.

    ![View Document Details panel.](../Images/manage-ds-shared-queue-server-settings-docs_0e386cf0-5b7a-4d1c-b03a-b487307cc8ba.jpg)

    For each listed document, the following tools are available and properties are shown:

    **![](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) Actions**  
    This menu has the following selection:

    - **![](../Images/main-ic-document-with-circled-i-16_5f23e683-d38c-4755-80cc-bfbb5891ffd3.jpg) View Document Details** — Opens the Document Viewer dialog, which shows document data \(up to 10 KB\) and enables you to download the document.

    **ID**  
    System ID.

    **Document Size \(kb\)**  
    Size, in KB.

    Clicking **Back to Messages** restores the message list.
