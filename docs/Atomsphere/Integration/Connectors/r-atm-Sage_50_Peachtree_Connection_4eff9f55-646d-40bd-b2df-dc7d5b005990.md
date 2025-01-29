import TestConnection from './_TestCon.md'

# Sage 50/Peachtree connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4eff9f55-646d-40bd-b2df-dc7d5b005990"/>
</head>


The Sage 50/Peachtree connection contains details about the physical location of the Sage 50 company data files, including login information.

To integrate multiple companies, you need a separate connection for each company. The Sage 50 desktop application does not support multiple concurrent sessions. To integrate multiple company files in one Sage 50 installation, stop the Atom and then restart it to initiate the connection to the new company file.

## Connection tab   

**Local Peachtree Company Path** - 
 The full path to the local Sage 50 company directory on the machine on which the Atom runs, for example: `C:/Program Files/Sage Software/Peachtree/<company directory name>`

You can find this path in the Sage 50 application by clicking **Maintain** \> **Company Information**. The path is indicated in the box labeled **Directory**.

**Peachtree Version** - 
 The version to connect to: 2007, 2008 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2018, 2022.

**User \(for 2010 and higher\)** - 
 The user name that is required to log into the company.

**Password \(for 2010 and higher\)** - 
  The password for the user logging into the company.

**Connection Timeout \(Optional\)** - 
 The number of seconds that the Atom waits for the Sage 50 user interface to launch.

<TestConnection />