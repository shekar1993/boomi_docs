# Atoms, Molecules, and Atom Clouds

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-0325b5e0-d848-4369-8eb8-d6a3dac0fba2"/>
</head>

:::caution

REMINDER. The use of CUSTOM security policy files was retired as of January 20, 2024. As of the February 2024 release, runtimes still configured to use CUSTOM policies will automatically default to use the standard HIGH policy instead, which might cause issues with process executions. You must [convert to a HIGH security policy](../../Integration/Integration%20management/int-Converting_from_a_custom_to_a_high_security_policy_6e30adbc-c806-497b-9e86-47b9487aa567.md) and use the [Atom Security Policies object](https://developer.boomi.com/api/platformapi#tag/AtomSecurityPolicies) to manage any customizations. Custom policy functionality is no longer supported.
(RUN-4883)

:::

**We added these features:**

- Atom updates now automatically occur within the first 15 minutes of it being online. (RUN-6058)

  To learn more about this feature, see topic: [Release Scheduling panel](/docs/Atomsphere/Integration/Integration%20management/r-atm-Release_Control_Scheduling_panel_561dc2b7-3beb-49aa-91a4-8d0f6ed95685.md).

- Updated runtime Docker images [published](https://hub.docker.com/u/boomi) for Alpine and RedHat OS to verson 5.0.2 on January 31, 2024. This update includes internal-only changes. Additionally, the source code for the V5 images is now available in our [BitBucket repository](https://bitbucket.org/officialboomi/docker-images/src/main/) to enable customizations. (RUN-5987)

- A new container property called `com.boomi.container.messageProxy.enabled` was added. This container enables a feature that will be made available in a future release. (PS-3075)

**We fixed this issue:**

- The container.properties file will only be updated when the platform side Atom Message Proxy flag is changed to prevent unnecessary network traffic. (PS-3674)

:::note Attention

Runtime release 24.02.04 is available immediately (this replaces 24.01.27 that was released on Jan. 27th) containing the changes for PS-3674 and PS-3075 described above.
You can apply this update to your Runtimes immediately. If you do not apply it manually, it will be applied automatically on February 10, 2024 between 3am and 7am EST. Your runtimes will restart with this update. To manually update your runtime, see Applying pending Atom and connector updates.
A new patch 24.02.05 ( with no additional changes) will be applied automatically on February 10, 2023 between 3am and 7am EST. All runtimes will restart with this update during this window.

:::
