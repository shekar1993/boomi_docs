# Configuring your Developer Portal 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-9e8dd158-a92c-439d-a89f-41b0cd3f05b3"/>
</head>


After enabling an API Gateway, you can configure the Gateway Settings and Developer Portal Settings to create and configure your Developer Portal.

## Before you begin

1.  [Install an API Gateway](/docs/Atomsphere/API%20Management/Topics/api-Gateway_setup_62ae35cb-7045-4c9b-84ed-fb920a9fa837.md).
2.  [Migrate an environment to your API Gateway.](/docs/Atomsphere/API%20Management/Topics/api-Migrating_environments_to_or_from_API_gateways_f4e7a794-f90c-441d-8a74-d558e63d9865.md) The environment needs to have at least one Atom with an Authentication Type set to Gateway.
3.  [Add an Authentication Source](/docs/Atomsphere/API%20Management/Topics/t-api-Adding_an_Authentication_Source_8502fa1e-a21d-4078-88f6-f03a6a7ddc0e.md).

## Procedure

1.  On the **Configure Server** \> **Gateways** page, click on the name of the API Gateway that you want to use to set up your Developer Portal.

2.  From the API Gateway information screen, navigate to the **Location Settings** panel.

2.  Specify your **Bind Address** and optionally your **Public URL** to access the API Gateway.

    The default port for the **Bind Address** and **PublicURL** is **8077**.

    -   Bind Address - The URL that you use to access your API Gateway from inside your company's firewall.
    -   Public URL - The URL that you use to access your API Gateway from outside your company's firewall. Leave this field blank to use the internal URL as the external URL.
4.  Click **Save**.

5.  Navigate to the **Developer Portal Settings** panel.

6.  Specify your **Bind Address** for the Developer Portal. The Bind Address is the URL you will provide to your Developer Portal users.

    The default port for the **Bind Address** is **18077**.

7. Specify the appropriate **Authentication Source** for the Developer Portal.

8. If you selected a JWT Authentication Source in step [7](#step_8d2b6548-e3c4-4d85-ac73-1d1767fa9c1c), specify the **Identity Provider ID** and **Identity Provider Secret**. You can optionally provide a **User Name Identifier** to use the value of a JWT claim. The claim name is case-sensitive and must exactly match the configuration in JWT. The configured claim should be available in ID token. Claims available in JWT are dependent on scopes. Verify that the claim and scopes configured in Developer Portal are accurate. This will be **Application Owner User Name** for all your applications attached to the Developer Portal. 

9. **Optional:** Select one or more roles to restrict Developer Portal access to those users associated with those roles in the **Restrict Access by Role** field.

10. Click **Save**.

11. Navigate to the **Publish** page and select the Developer Portal from your list.

12. From the **Title and Homepage** category, enter an **Internal Name**, **Published Name**, and **Welcome Message** for your Developer Portal.

    The published name and welcome message will appear on the main landing page of your Developer Portal.

    :::info
    
    Using the rich text editor for the welcome message limits the HTML tags to only those that we support.

    If you use the Source mode, you can enter any HTML tag, but any tag that we do not support is removed when you switch back to the rich text editor.

    If you use Source mode to enter HTML tags that we do not support and click **Save** in Source mode without switching back to the rich text editor, the change is rejected with an error message.

    :::

13. Click **Save**.

14. From the **Theme** category, specify the navigation and theme colors, background image, and site logo with alternative text for your Developer Portal.

    :::note

    The background image cannot exceed 1 mb and the logo size cannot exceed 0.75 mb.

    :::

    :::info 
    
    If you do not specify alternative text \(or `alt` text\), text will not be provided to users on assistive technology such as screen readers. You can continue without adding alternative text, but may incur risk of breaking your local accessibility laws or business guidelines. We recommend describing your site logo in the alternative text so that it meets the WCAG guidelines.

    :::

15. Click **Preview Before Saving**.

    :::info 
    
    If you select colors that do not meet the WCAG color contrast ratios in step 14, you will receive a warning because these color combinations might make your site too difficult to read or use for some users. You can continue without correcting the contrast ratio errors, but may incur risk by breaking your local accessibility laws or business guidelines. We recommend adjusting the colors so that they meet the WCAG color contrast ratios.

    :::

16. From the **Theme Demonstration** page, view the specified theme and click **Return to Theme** page to make any additional changes to your theme. If you do not need to make additional changes, click **Next Page** to view the different screens within the demonstration site.

17. Click **Publish**.

## Next steps

Send your Developer Portal URL to your Developer Portal users so that they can sign in and begin working with your APIs.
