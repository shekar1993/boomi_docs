# Changing an Atom’s or Molecule’s default URL 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-251a74ad-e556-4c7a-b408-ab0a75f79872"/>
</head>


If you have an old Atom or Molecule and you want to install a new one, you may need to change the default URL.

## About this task

As of the October 2014 release, the default platform URL for newly installed Atoms changed to https://atom.boomi.com. Previously installed Atoms are not affected. However, if your previously installed Atom uses a proxy for https://platform.boomi.com AND if you need to install a new Atom, then you must make the new Atom point to the URL that the old Atom uses.

## Procedure

1.  Stop the new Atom or Molecule.

2.  Navigate to \<installation\_directory/conf.

3.  Open the container.properties file in a text editor such as Notepad.

4.  Change the `com.boomi.container.platformURL` property as follows:

    ```
    com.boomi.container.platformURL=https\://platform.boomi.com
    ```

5.  Change the `com.boomi.container.trackURL` property as follows:

    ```
    com.boomi.container.trackURL=https\://platform.boomi.com/solr/update
    ```

6.  Save and close the file.

7.  Restart the Atom or Molecule.