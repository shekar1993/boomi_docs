# Test mode and the Test Atom Clouds

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-592b6741-ff57-4d08-a938-2f4f82d84d51"/>
</head>


You can use test mode on any Test Atom Cloud to which your account has access.

When you are executing processes in test mode you have the option to run them on any Test Atom Cloud that is provisioned on your account. Processes run on a Test Atom Cloud are subject to the same limits as processes run on any Atom in test mode.

:::note

If you enable environments and test connections in your account and you have test connection licenses, you can deploy processes to a Test Atom Cloud. In that case, test mode limitations do not apply. For more information, see the [Test connection licensing](/docs/Atomsphere/Platform/c-atm-Test_connection_licensing_04708d54-8ea3-453f-8dac-3e2e6b72330b.md) topic.

:::

When pending Atom and connector updates become available during the period, they are also available on the Test Atom Clouds. Therefore, you can use a Test Atom Cloud to test your processes prior to the release.

The logs and data from processes run on the Test Atom Clouds are purged on a daily basis. The Test Atom Clouds use their own IP ranges across nodes and they use forked execution.

:::note

You cannot use a Test Atom Cloud for processes with connectors that access local resources \(e.g., disk, database\). However, you can use the Disk connector to read and write from the account's `work` and `tmp` directories. You can also create directories within these two directories.

:::