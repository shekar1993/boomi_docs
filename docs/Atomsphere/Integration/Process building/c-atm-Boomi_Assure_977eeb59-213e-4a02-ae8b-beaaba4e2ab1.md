# Boomi Assure

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5AF4D3AC-AB97-47A6-984F-ED5D65E76CF2"/>
</head>


Use Boomi Assure to submit your integration processes and data to for testing against future releases.

Your use of Boomi Assure improves the quality of our platform updates and offers better assurance that they work with your processes and data.

:::note

Boomi Assure is an optional feature that your system administrator can enable in your account. Pay special attention to the [privacy policy](http://www.boomi.com/privacy/boomi_assure). Boomi Assure does not provide a way for partners or customers to conduct their own process integration, regression, or automated testing.

:::

After enabling Boomi Assure, a Submit Test button appears when you are in Test mode. In addition, you can manage submitted tests on the Boomi Assure page in the Manage menu.

During Test mode executions, a Boomi Assure test package is built on the Atom. The package records all process steps and configurations and the data that flows through the steps. After the Test mode execution completes, you can inspect the results. Click the Submit Test button to send the test to . After submitting a test, it is used to test future releases of Integration.

Each submitted Boomi Assure test is tested against all future releases of unless you decide to remove it from the Boomi Assure page.

## What is tested by Boomi Assure?

The submitted Boomi Assure test “package” contains all process steps. The following table lists the process steps that are tested, as well as a few exceptions.

:::note

Not every tested process step has exceptions.

:::

|Tested process steps|Exceptions|
|---------------------|----------|
|Branch| |
|Business Rules| |
|Cleanse| |
|Data Process|Excludes process step if it has custom scripting, zip or unzip, PGP encrypt, or PGP decrypt.|
|Decision|Excludes SQL statements, connector calls, and stored procedures.|
|Exception| |
|Find Changes| |
|Flow Control| |
|Map|Excludes steps using document caches, such as maps using join functionality.|
|Message|Excludes SQL statements, connector calls, and stored procedures.|
|Notify| |
|Return Documents| |
|Route| |
|Set Properties|Excludes SQL statements, connector calls, and stored procedures.|
|Stop| |

The following process steps are not tested in a submitted test:

- Add to Cache
- Connector
- Process Call
- Program Command
- Remove From Cache
- Retrieve From Cache
- Start
- Trading Partner
- Try/Catch

These restrictions make replaying Boomi Assure tests safer for both and our customers. The exceptions listed above are based on steps that may have side effects, for example a connector call that creates new accounts in a third-party system, and may not be safe to execute repeatedly. If one of the above steps is encountered while executing a test, the step is skipped and the output data of that step is used as the input for the next step.

## How much data is recorded by Boomi Assure?

Recording stops when the amount of data recorded during a text execution reaches 50 MB. If this stoppage occurs, a test package is not saved for the execution and the Submit Test button is not enabled upon the execution’s completion.
