# Releases

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-cada8541-d290-4f3b-a2a7-3cda33e9ca2a"/>
</head>


Releases are how you build and deploy flows to an environment.

## Overview

Releases allow you to easily build and deploy a collection of flows to your environments, and move them through the development life cycle.

-   Instead of publishing a flow on the flow canvas, build a flow and choose which release to add it to. The release is automatically deployed to the development environment.

-   Once you have finished building and adding flows to a release in development, you can promote it to the test environment.

-   You can promote releases from development to testing, and from testing to production. Promoting a release into the production environment finalises the release, making it live and available to your users. You cannot remove flows from a production release.

-   Manage a release by clicking on the release title in the **Releases** section on either the **Environments** page or an individual environment tab.

    -   Each flow in the release is shown, along with useful details, and a **Flow URL** link to run the flow in that environment.

        You must be signed into to run a flow in the development or test environments. Any user can run a flow in the production environment.

    -   You can remove flows from the release, promote it to the next environment, roll the release back, or delete the release completely.


## Creating a release

Get started by creating and automatically deploying a release to the development environment.

-   [Creating a release](flo-Environments-adding-to-release_a13156ec-3eee-4303-9c27-a480e88a3ba8.md)


## Adding flows to a release

Build and add additional flows to a release.

-   [Adding flows to a release](flo-Environments-using_9a8bd4c5-2b42-47fb-bf70-16c4e2ae3721.md)


## Promoting a release

Promote a release to deploy it to the next environment in the development life cycle.

-   [Promoting a release](flo-Environments-promoting-releases_85e7790e-d62e-4778-a54f-b8ed1c7bc7bb.md)


## Rolling back a release

Rolling back a release redeploys the previous snapshot versions of any flows in the release to the environment, while simultaneously removing the current snapshot version of any flows in the release, rolling them back to the previous environment.

-   [Rolling back a release](flo-Environments-rollback_bb012b3c-b7c7-4ff6-b703-c90442cc81be.md)


## The flow Run URL

The format of the flow Run URL changes when using environments.

```
https://us.flow-prod.boomi.com/[Tenant ID]/play/[Player]/?flow-id=[Flow ID]&environment-id=[Environment ID]
```

-   The `[Tenant ID]` is the ID of the tenant that the flow belongs to.

-   The `[Player]` is the name of the player that is used to render the flow. This value can change, depending on which player is chosen when running the flow.

-   The `[Flow ID]` is the ID of the flow.

-   The `[Environment ID]` is the ID of the environment that the flow is being run in. This is assigned automatically for each environment. This value can change, depending on which environment the flow is being run in.

    If a flow is launched without an Environment ID in the Run URL, the default environment is used. The production environment is set as the default, but you can make any environment the default. See [Environment settings](flo-Environments-settings_fd017cc0-754e-47ee-858a-170ddf2a80b0.md).