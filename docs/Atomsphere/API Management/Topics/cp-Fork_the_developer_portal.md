# Fork the developer portal

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b05ad184-07f9-4af4-9358-3d7850629c02"/>
</head>

This topic provides instructions on how to fork and customize the Developer Portal. By creating your own version of the developer portal, you can tailor it to meet your specific requirements and integrate it into your existing processes.

Customizing the Developer Portal allows you to:

- Implement custom features not available in the default portal.

- Align the portal's appearance with your organization's branding.

- Integrate the portal with your internal workflows and backend systems.

Follow the steps below to fork the repository, set up your development environment, and customize the portal according to your needs.

Additional information on forking a repository is  [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).

## Steps to Fork and Customize the Developer Portal

1. Fork the repository and pull it
  - Navigate to the Developer Portal's GitHub repository and fork it to your own account.
  - Use Git to clone the forked repository to your local machine.

  `git clone https://github.com/your-username/developer-portal.git`

  - Replace `your-username` with your GitHub username.

2. Adjust the Environment Variables

  :::note
  Before proceeding, verify that you have created an instance of the developer portal in the API Control Plane Administration Portal. There you must enter the URL of the developer portal and retrieve the token that must be entered in the environment variables of your developer portal.
  :::

- Adjust the environment variable defaults in `src/config.ts` and `docker/build/setEnvVarsOnContainerStartup.sh`.

  *Important Environment Variables**

  |Variable|Default|Notes|
  |---|---|---|
  |`VERSION`|`DevelopmentVersion`|Set during deployment.|
  |`BACKEND_URL`|`https://localhost:8080`|The URL of the backend `<yourSubDomain>.backend.na.controlplane.boomi.com`|
  |`SUPPORT_URL`|`support.apiida.com`||
  |`DEV_PORTAL_TOKEN`|`0qPG7xXzm65SnioUM2fK`|The token of the Developer Portal. You can find this in the Administration Portal.|
  |`INSERT_TENANT_ID`|`addTenantIdToBackendUrl`| To disable the insertion of the tenant ID, the string must not contain `addTenantIdToBack`.|
  |`NGINX_PORT_SSL`|`443`| The inner port of the container. The port of the web server nginx with SSL.|
  |`NGINX_PORT`|`80`|The inner port of the container. The port of the web server nginx without SSL.|
  |`TINY_EDITOR_API_KEY`|`<token>` | The token can be created on the website [tiny.cloud](https://www.tiny.cloud/). Note: Replace `<token>` with your actual API key from Tiny Cloud.|

3. Install Dependencies

  - Run `npm install` in the project root to install all necessary dependencies.

4. Run the Developer Portal Locally

  - For local development, Vite is used. With "Hot Module Replacement," the developer portal is automatically rebuilt and hosted while you make changes.
  - Run the development server:

  `npm run dev`

5. Customize the Portal

- For example, change the colors in `tailwind.config.js` to match your branding.
- When adding new templates to the editor:
  - Avoid using the hover directive to prevent the CSS from becoming excessively large.
  - Replace instances of indigo with your custom color.
  - Replace all `<dl>`, `<dt>`, and `<dd>` tags with `<div>`.
  - Add a `<p></p>` at the end of the template to make it easier to find the end of the template.

6. Generate License File for Third-Party Libraries

  - Run the following command to generate a license file for third-party libraries:

  `npm run license-file`

## How to get the Developer Portal Running

**Develop Locally**

For local development:

1. Run `npm install` to install dependencies.

2. Run `npm run dev` to start the development server.

**Environment Variables**

For local development, adjust the default environment variables in:

- `src/config.ts`
-  `docker/build/setEnvVarsOnContainerStartup.sh`

When you `run npm run build`, the developer portal is built into a bundle of JavaScript files. During this process, the default values are replaced with those from your environment variables.