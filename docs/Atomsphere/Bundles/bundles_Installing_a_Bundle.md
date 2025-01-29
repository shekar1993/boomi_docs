
# Installing a Bundle

<head>
  <meta name="guidename" content="Bundles"/>
  <meta name="context" content="39affb96-2aba-48b2-a715-4f5f0dd3c5a0"/>
</head>

When new Bundles are shared or existing Bundles are updated, they get added to the list on the Bundles page. You can view and install these Bundles from the Bundles Page as required.

Once you install a Bundle,
* You can edit the components installed using the Packaged Component of the Integration to change their settings and add/delete components. See [Integrations](/docs/Atomsphere/Integration/Getting%20started/c-atm-Integration_and_iPaaS_257fcf2c-7e93-48d0-be67-bd53fb444930.md).
* You can modify the Flow component to suit your requirements.

When you install a Bundle, you install a copy of the Bundle’s assets and take complete ownership of them. Before installing a Bundle, you must ensure that your account includes Integration and Flow access (if the Bundle that you are installing contains Flow assets). 

To install a Bundle:

1. Select the Bundle you want to install on the Bundles page and click **Install**.

   - To install the Bundle assets in a new location, select **Create a new Integration folder** radio button. 
        * If your Bundle includes a flow asset, select the **Create a new Integration folder and Flow tenant** radio button.
        * If your Bundle has only a flow asset, then select the **Create a new Flow tenant** radio button. 


    - To install the Bundle assets in an existing location, Select **Install assets in a specific Integration folder** radio button. 
        * If your Bundle contains a flow asset, then select the appropriate tenant from the drop-down. 
        * If your Bundle has an integration asset, then select the folder location from the drop-down.

    
2. Click **Install**.  

3. The Installation Complete dialog opens. Click **View** next to an asset to go to the location of the installed asset or click **Download** to download a Custom Asset added to it.

:::note

If you are attempting to install a Bundle that includes a private connector not shared with your account, you may see the following error message when you try to open that private connector to install it in your account.

  `The process cannot be opened. The bundleregression-LRLO5L-privat-privforqa connector cannot be used in this account. To enable this connector in this account, contact your Boomi representative`.

:::

:::note

An installed Bundle cannot automatically upgrade to a newer version. This means any changes made to the original Bundle after installation will not be automatically pushed to the Bundle you installed.

:::

