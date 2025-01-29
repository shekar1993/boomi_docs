# Unlocking a user with single sign-on access

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-ee1a1ec0-0997-4434-b76a-fcafd6b3a9fa"/>
</head>

As the administrator of an SSO-enabled account, use the unlock feature on the **Settings** \> **Account Information and Setup** \> **User Management** page to unlock users with SSO-only access who are locked out of the as a result of multiple invalid API token entries.

## About this task

When users with SSO only access make too many invalid sign in attempts using API tokens, they are locked from the and cannot make use of services nor make API calls. Because such SSO users do not have a user name and password to enter on the sign in page, they do not have the ability to unlock themselves using the **Reset your password** link. Therefore, SSO users who can only sign in from an identity provider \(IDP\) cannot regain access to the platform until an administrator of their federating/restricting SSO-enabled account unlocks them on their behalf. The administrators of the SSO-enabled account receives immediate email notification about the locked user and can use the following steps to reinstate the user's access.

:::info

If the SSO user enters their username and password on the sign in page to access their account, they can unlock themselves using the **Reset your password** link on the sign in page. The note in step 3 of this task topic clarifies how the account administrator can determine if the user is unlocked from the User Management page, or if the user can unlock themselves from the sign in page. For detailed information about the various ways in which SSO users are unlocked, see the topic [Single sign-on](c-atm-Single_sign-on_e9aa88ba-4724-424e-9694-14e8ebbe92ed.md).

:::

## Procedure

1. Select **Settings** \> **Account Information and Setup** and click on the **User Management** tab.
   
   The User Management page opens.

2. In the list of account user names, notice that each user has an icon next to their email address.

   As the Legend on the User Management page shows, a green icon ![img-int-user_management_active_user](Images/img-int-user_management_active_user_460f1226-11a8-4877-bf85-23d0c1c53aa6.jpg) indicates that the user is active and can successfully access the platform. A red icon ![img-int-user_management_locked_user](Images/img-int-user_management_locked_user_14f921c1-1af1-4f53-b9ca-279369c65a9a.jpg) indicates that the user is locked from the platform.

3. Select the user name of a locked individual.

   The selection is highlighted in gray, and the **Unlock User** button ![img-int-unlock_SSO_user](Images/img-int-unlock_SSO_user_ba719fbe-4639-4875-a495-979504dabb77.jpg) turns from a light gray to dark gray. This indicates that the selection is available for unlocking.

   :::info

   If a user shows a red icon next to their name but the lock is unusable \(and its color remains a light gray\), this means that the user can unlock themselves using the **Reset your password** link on the sign in page and does not require the administrator's intervention.

   :::

4. Click the **Unlock User**![img-int-unlock_SSO_user](Images/img-int-unlock_SSO_user_ba719fbe-4639-4875-a495-979504dabb77.jpg) button.

   A dialog box opens asking you confirm the account unlock.

5. Click **OK** to proceed with the unlock, or **Cancel** to return to the User Management page without making changes.

## Results

Clicking **OK** in the dialog results in a confirmation message that the user was successfully unlocked, and the user's platform access is immediately restored. The green icon ![img-int-user_management_active_user](Images/img-int-user_management_active_user_460f1226-11a8-4877-bf85-23d0c1c53aa6.jpg) appears next to the user name in the User Management page.
