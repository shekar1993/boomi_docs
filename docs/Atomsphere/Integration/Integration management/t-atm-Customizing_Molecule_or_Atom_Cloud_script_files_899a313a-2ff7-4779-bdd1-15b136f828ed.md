# Customizing Molecule or Atom Cloud script files

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-899a313a-2ff7-4779-bdd1-15b136f828ed"/>
</head>


You should not need to customize the Molecule or Atom Cloud script files but if you do, give them names such as, procrunner-CUSTOM.ps1, procworker-CUSTOM.ps1, procbrowser-CUSTOM.ps1, and restart-CUSTOM.ps1.

## About this task

In most situations, there is no need to customize these script files. Rather than customize the procrunner, procworker, and/or procbrowser files, you should use the Forked Execution Properties panel in Atom Management to control how forked executions run.

The restart script file, which is used to restart Atoms, Molecules, and Atom Clouds, should be modified only as directed by the Support team.

:::caution

If you create customized copies of the script files, you are responsible for keeping those files up to date with all changes that are delivered by in subsequent releases.

:::

The scripting engine that you use depends on whether you use Windows or Linux.

If you are running:

- Windows and an Atom, or if you are running a Molecule that does not use UNC paths or forked execution, then batch scripts (.bat) are used.
- Windows and a Molecule that use UNC paths or forked execution, or if you are running an Atom, then PowerShell scripts (.ps1) are used.
- Linux, then shell scripts (.sh) are used in all situations.

## Procedure

1.  Copy and rename the procrunner, procworker, and/or procbrowser file in the \<installation\_directory\>/bin directory.

    The file name must start with the default script file name, plus a hyphen, plus the custom name \(any valid file name string\), plus the file extension. For example, procrunner-CUSTOM.ps1.

2.  Customize the procrunner-CUSTOM.ps1 file and save it.

    Be sure to update your script file with the following:

    For procbrowser and procworker files:

    -   Add `_hostaddr=$5` below the declaration for `_hostid=$4`

    -   Update `-Dcom.boomi.container.userLibDirs` to `-Dcom.boomi.container.userLibDirs=${BOOMI_ACCOUNT_USER_LIB_DIR}:${BOOMI_USERLIB_DIRS}`

    -   Add `"${_hostaddr}"` to the end of the command, after `"${_workerid}" "${_accountid}" "${_hostid}"`

    For procrunner files:

    -   Add `_hostaddr=$4` below the declaration for `_hostid=$3`

    -   Update `-Dcom.boomi.container.userLibDirs` to `-Dcom.boomi.container.userLibDirs=${BOOMI_ACCOUNT_USER_LIB_DIR}:${BOOMI_USERLIB_DIRS}`

    -   Add `"${_hostaddr}"` to the end of the command, after `"${_execid}" "${_accountid}" "${_hostid}"`

3.  Copy and rename the restart.ps1 file in the \<installation\_directory\>/bin directory to restart-CUSTOM.ps1.

4.  Customize the restart-CUSTOM.ps1 file and save it.

## Next steps

To identify your customized files to and preserve their contents from one release to the next, set a container property for each file on the Advanced tab of the Properties panel.