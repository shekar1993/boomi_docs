# Setting a password extension locally using JMXTerm

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-04cfda77-b526-494b-bd1d-2900bfd9cffe"/>
</head>


Set extension values for a password for a local Atom.

To perform this task, you need the account ID and your Atom must be running.

Complete the following steps on the machine where the Atom is running.

1.  Download `jmxterm<number>-uber.jar` from [http://wiki.cyclopsgroup.org/jmxterm](http://wiki.cyclopsgroup.org/jmxterm).

2.  Run it using `java -jar jmxterm<number>-uber.jar`.

3.  Type jvms to get the list of running JVMs.

Your Atom will be either `com.install4j.runtime.Launcher` or start `com.boomi.launcher.Launcher`.

4.  Issue an open command with the JVM pid number.

5.  Issue the command `bean com.boomi.container.services:type=OverridesAdminService`.

6.  Issue the command `run queryAvailableValues <account-id>`.

If your accountid is “myaccount”, the command is: `run queryAvailableValues myaccount`.

This command shows you all available field overrides. If there is an error, you may have to save your overrides from the platform UI one time.

7.  Find the setting you want to override and record the connectionId and fieldId.

8.  Issue the following command, `run setEncryptedOverrideValue <account-id> <connectionId> <fieldId> <plaintext pw>`, using the connectionId and fieldId \(not names\) you recorded in the previous step.