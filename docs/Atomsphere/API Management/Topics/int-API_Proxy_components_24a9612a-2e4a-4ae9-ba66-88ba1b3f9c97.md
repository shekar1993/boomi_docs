# API Proxy components

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-24a9612a-2e4a-4ae9-ba66-88ba1b3f9c97"/>
</head>


API Proxy components are deployable components that allow for the direct proxying of a request through an API Gateway to a service which is not served through an Atom, Molecule, or Atom Cloud.

:::note

You can build API Proxy components only while you are using an account for which the feature is enabled. If you are using an API Management-enabled account, you can deploy API Proxy components to environments to which a Boomi API Gateway is assigned. To have API Management enabled in your account, contact your Boomi sales representative.

:::

API Proxy components provide the capability to seamlessly send requests through a API Gateway to any mix of endpoints — Boomi-supported or not — through the same authentication, validations, and authorizations. Using an API Proxy component, API Key-based policies can be layered on top of a previously existing API in the network.

API Proxy components are created and configured in on the Build page, and then packaged and deployed using the Packaged Component feature in the service. When you are ready to deploy the API Proxy component, after clicking **Save**, click **Create Packaged Component**. The API Proxy component closes on the Build page, and focus switches to the Create Packaged Component wizard. Complete the steps in the wizard, and click the **Deploy** button on the final confirmation message. You can see your new packaged API Proxy component from both the **Packaged Components** page and **Deployments** page, accessible from the Deploy menu in the Integration service. 