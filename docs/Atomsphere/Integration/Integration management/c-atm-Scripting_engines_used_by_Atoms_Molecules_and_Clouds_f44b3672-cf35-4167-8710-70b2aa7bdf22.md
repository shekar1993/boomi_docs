# Scripting engines used by Atoms, Molecules, and Atom Clouds 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f44b3672-cf35-4167-8710-70b2aa7bdf22"/>
</head>


Atoms, Molecules, and Atom Clouds use your system’s scripting engine to complete some tasks.

The following scripting engines are supported: shell (.sh), batch (.bat) and Powershell (.ps1).

The scripting engine that is used depends on whether you are running Windows or Linux. If you are running:

-   Linux, shell scripts \(.sh\) are used in all situations.

-   Windows and you are running an Atom, batch scripts \(.bat\) are used.

-   Windows and you are running a Molecule that does not use UNC paths or forked execution, batch scripts \(.bat\) are used.

-   Windows and you are running a Molecule that uses UNC paths or forked execution, Powershell scripts \(.ps1\) are used.

-   Windows and you are running an Atom Cloud, Powershell scripts \(.ps1\) are used.


The Atom, Molecule, or Atom Cloud uses your system’s scripting engine to do the following tasks:

-   Restart — using the restart.sh, restart.bat, or restart.ps1 script file

-   Launch forked executions in Molecules and Atom Clouds — using the procrunner.sh or procrunner.ps1 script file

-   Launch Atom workers in private Atom Clouds — using the procworker.sh or procworker.ps1 script file

-   Launch the browsing of connector operations that run in forked executions in Molecules and Atom Clouds — using the procbrowser.sh or procbrowser.ps1 script file

:::note

The procrunner.bat, procworker.bat, and procbrowser.bat script files are included in installations, but they are no longer used.

:::
