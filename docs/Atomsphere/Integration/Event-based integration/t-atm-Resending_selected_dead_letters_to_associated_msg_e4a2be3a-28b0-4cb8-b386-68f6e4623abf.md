# Resending selected dead letters to the associated message queue 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e4a2be3a-28b0-4cb8-b386-68f6e4623abf"/>
</head>


Resend selected dead letters from the Actions menu on the Queue Management panel of Atom Management.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## Procedure

1.  On the **Manage** menu select **Atom Management**.

2.  Select the Atom, Molecule, or Cloud from the list on the left.

3.  In Runtime, click **Queue Management**.

    The Queue Management panel opens.

4.  If the dead letters you are resending are associated with a subscriber queue, in the **![](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) Actions** menu for the applicable Publish/Subscribe queue, select **![](../Images/main-ic-document-with-two-red-checkmarks-16_839b7a6c-7f81-4605-8fea-034697f24074.jpg) Manage Subscriber Queues**.

5.  In the **![](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) Actions** menu for the message queue, select **View Dead Letters**.

    The message queue’s dead letter list appears.

6.  Select the check boxes for the dead letters you are resending.

7.  Click **Retry** and select **Selected**.

    A confirmation dialog opens.

8.  Click **OK**.