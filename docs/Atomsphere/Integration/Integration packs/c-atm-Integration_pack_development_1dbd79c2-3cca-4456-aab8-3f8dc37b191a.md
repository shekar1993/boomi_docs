# Integration pack development

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-40B7EF11-C0CA-4B0F-82F3-55AFA64D6BCD"/>
</head>

Integration pack development is the means by which users can bundle one or more packaged processes or API Service components to be shared to any number of managed accounts.

As an integration pack developer, you should consider integration packs to be integration solutions or applications.

- Maintain only a single instance of the integration pack and its component configurations. This instance is the current version of the integration pack. The entire install base should use this version.

- You can push component configuration updates to the entire install base by releasing a new version of the integration pack. There is no need for end users to download and manually apply patches or updates.

- Ensure that any components that are shared between processes in the integration pack have the same extensibility settings.

- Follow normal product life cycle steps when designing, testing, release planning, etc.

- Assess the potential change impact on the current install base and do regression tests before releasing new versions of the integration pack.

:::note

Do not share individual processes in an integration pack. Integration packs are not intended as process templates for managed accounts. Instead, use the process library to share individual processes as templates.

:::

## Preparing an integration pack

1. Create an integration pack.

    Decide whether one instance of the integration pack can be installed per managed account or multiple instances \(single attachment or multiple attachments\).

2. Add some combination of packaged processes or API Service components to the integration pack.

    Only packages marked as shareable when the package was created can be added to an integration pack. Packaged components are created and marked as shareable from the **Deploy** \> **Packaged Components** page. As a rule, the most recent *shareable* version of each package is added to the integration pack.

:::note

For Legacy deployment, an integration pack consists of published processes and API Service components.

:::

## Releasing an integration pack

When your integration pack is ready, you can make it available for installation in managed accounts by:

1. Releasing the integration pack, either immediately or on a scheduled date, from the Integration Packs page.

2  Adding the integration pack as a resource to account groups on the **Account Groups** tab in **Settings** \> **Account Information and Setup**. For more information, visit the topic **Adding a resource to an account group** located under the Related Tasks section on this page.

When new versions of processes or API Service components are packaged and made shareable, the integration packs that contain those components are not automatically re-released. The Integration Packs page shows you whether newer, shareable versions of a package are available. You can decide whether and when to re-release those integration packs.

When you update an integration pack, you can release the update immediately or create a testing period:

- If you choose an immediate release, the update is applied immediately to managed accounts in which the integration pack is installed.

- If you choose a pending release with a scheduled date, users of managed accounts can apply the pending update during the testing period. The testing period starts as soon as you click the "Release Integration Pack" button in the release wizard, and allows managed accounts with the installed integration pack to manually apply and test out a pending version until the scheduled release date. On the scheduled date, when the testing period ends, the pending update is applied automatically to all accounts that did not apply it manually. The release is applied to all shared accounts between midnight and 1 A.M. on the scheduled day, respective to the publisher's time zone.

Only one update per integration pack can be pending at a time. The testing period is a way for managed accounts to work with new functionality before its official release, not a way to make multiple versions of the integration pack available at the same time. To release a new update during a testing period — for example, to correct defects reported by users of managed accounts to which the pending update has been applied — choose an immediate release for the new update.

:::info Important

You are responsible for supporting your end users who have issues installing or using your integration packs. There might be prerequisites including special configurations or customizations to the applications or environments that are required for the integration to operate properly. Provide appropriate documentation, such as installation and user guides, and your contact information.

:::
