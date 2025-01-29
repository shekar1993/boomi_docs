# Off-cycle releases

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-bfae4d86-e346-49c3-9c2c-f0fb56e71bf6"/>
</head>

If a business-critical issue arises as a result of a regularly scheduled Runtime Release or Platform Release, Boomi might resolve the issue with an off-cycle release. Off-cycle releases are also called patches, hotfixes, bug fixes, or unplanned releases.

Our team of experts thoroughly evaluate each release-related issue and decide upon the best course of action. If an issue is deemed critical enough that its resolution cannot wait until the next regularly scheduled release, we proceed with an off-cycle release. We do not take these decisions lightly and are mindful of the impact of off-cycle interruptions. We always seek the path that minimizes disruption to users.

All off-cycle releases follow the same protocol for development, testing, and security as our Runtime Release and Platform Releases and are guided by our Release Management framework.

The delivery of off-cycle releases depends on the issue. An off-cycle release is applied only to impacted accounts where possible. Some off-cycle releases are applied with no noticeable disruption by means of a rolling restart of the Boomi Enterprise Platform. Others can force the restarting of user runtimes. Customer notifications vary and when we communicate off-cycle releases, we send an email, update our [status page](https://status.boomi.com/), or have our Support team reach out with the pertinent information.

## Process

The Boomi process for off-cycle releases follows the internal Release Management framework.

1. Perform a full evaluation of the issue.

2. Determine the severity of the issue and the criticality of the change.

3. If an off-cycle release is warranted, use reasonable efforts to identify impacted users.

4. Determine the least impactful way to deploy the change to production.

5. Verify completeness of development and testing. All off-cycle releases meet the same security, development, and quality assurance testing standards as regularly scheduled releases.

6. Plan the timing for deployment and release.

7. Draft the off-cycle release notification to impacted users. The communication provides a user with answers to these questions:

    - **What** is the issue?
    - **What** is the impact of the issue?
    - **When** was the issue discovered?
    - **Why** am I receiving this communication?
    - **How** is the issue resolved?
    - **What** action, if any, is required on my part?

8. Request and schedule the release when all process checks are complete.

9. Send the notification to impacted users.

10. Perform the off-cycle release. Release notes are republished to coincide with the off-cycle release as closely as possible.

11. Close the release.

:::info

All releases, whether scheduled or off-cycle, meet our Security Standards and follow our Software Development Lifecycle Process and Quality Assurance Testing Framework, which consists of these testing methods as necessary:

- Manual
- Automated
- Continuous integration
- Regression
- Performance

:::

## Related information

- [Runtime and releases](atm-Runtime_and_Atomsphere_releases_8aa6b48e-b0b6-4382-8ffa-a7cf23f0314f.md)