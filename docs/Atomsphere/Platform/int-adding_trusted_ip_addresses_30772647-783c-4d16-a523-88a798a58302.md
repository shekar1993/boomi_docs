# Adding Trusted IP Addresses

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-30772647-783c-4d16-a523-88a798a58302"/>
</head>

As an administrator, use the **Settings** \> **Account Information and Setup** \> **Trusted IP Addresses** page to add a trusted IP address on an account.

## Procedure

1. Select **Settings** \> **Account Information and Setup** and click the **Trusted IP Addresses** tab.

2. On the Trusted IP Addresses page, do one of the following:

   - If you are adding a trusted IP address for the first time, toggle the **Trusted IP Addresses OFF** switch to **Trusted IP Addresses ON**. Then, proceed to Step 3.
   - If you already added your first address and wish to add subsequent IP addresses to the list, click ![img-int-white_plus_sign_blue_circle](./Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) **Add IP Address**. Then, proceed to Step 3.

   The Add/Edit IP Address dialog opens.

3. In the Add/Edit IP Address dialog, enter a name for the new IP address. IP address names are limited to 100 characters.

4. Next, select the type of IP address: Single address, Range, or Single address with trailing wildcard.

5. Enter the IP address according to the correct format of your **Type** selection. For example, Single IP addresses must match a format similar to 127.0.0.1, ranges must use a dash to represent a range of IP addresses similar to 127.0.0.1-127.0.0.1, and Wildcard IP addresses must match formats similar to 127.0.0.\* , 127.0.\*.\*, or 127.\*.\*.\*.

6. Click **Save** to add the new trusted IP address, or **Cancel** to exit without making changes.

## Results

All addresses that are added on the account appear in the list. Users can add up to 25 address entries per account. If the Trusted IP Addresses feature is set to ON, all specified addresses can make calls to APIs associated with the account. For information on how to edit or delete IP addresses from the Trusted IP Addresses page, refer to Related Links.
