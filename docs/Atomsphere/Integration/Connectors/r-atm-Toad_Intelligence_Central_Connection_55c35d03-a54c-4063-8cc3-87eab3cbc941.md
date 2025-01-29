import TestConnection from './_TestCon.md'

# Toad Intelligence Central connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-55c35d03-a54c-4063-8cc3-87eab3cbc941"/>
</head>


The Toad Intelligence Central connection contains the information needed to connect to the Toad Intelligence Central data reporting tools repository, including login credentials.

## Connection tab 

**TIC Server Name** -
 The name or IP address of the server where Toad Intelligence Central is installed.

**Port** -
 The port number to connect to the Toad Intelligence Central MySQL database. Use the default of 3566 unless you modified it during the Toad Intelligence Central installation.

**Database Name** -
 The name of the Toad Intelligence Central database where data sets are created and retrieved for this connection. 

**User** -
  The name of the Toad Intelligence Central account to use when connecting to the server.

**Password** -
 The password for the specified Toad Intelligence Central account.

**Batch Count** -
 The number of records to commit to Toad Intelligence Central database in a batch. Use the default of 500 unless you are tuning the performance of this Toad Intelligence Central connection.

 <TestConnection />