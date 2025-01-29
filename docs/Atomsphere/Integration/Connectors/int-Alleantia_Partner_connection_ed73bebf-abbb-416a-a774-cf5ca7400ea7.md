# Alleantia IoT — Partner connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ed73bebf-abbb-416a-a774-cf5ca7400ea7"/>
</head>


The Alleantia IoT — Partner connector's connection represents a single IoT application instance.

## Alleantia ISC Setup 

To setup the Alleantia ISC:

-   Download and install Alleantia ISC software from [https://cloud.alleantia.com/index.zul](https://cloud.alleantia.com/index.zul) \(registration required\) and the ISC Demo License.
-   An Atom deployed locally to machine within your network \([Atom Setup](../Atom%2C%20Molecule%2C%20and%20Atom%20Cloud%20setup/c-atm-Atom_setup_f7dedf01-31c1-4642-824b-9c76d5d0bf8e.md)\)
-   A commercial license \(with API REST option\) enabled from Alleantia \([https://www.alleantia.com/plans-and-pricing/request-license/](https://www.alleantia.com/plans-and-pricing/request-license/)\)

Install Boomi Atom locally on the system where Alleantia ISC is running, or on a system that can reach the Alleantia ISC instance through network connection. Alleantia ISC Rest API plugin must be enabled on Alleantia ISC software to make it work.

Alleantia Partners, Distributors or Alleantia itself will be able to provide the licenses required. You have to test the connection between the two hosts (Alleantia ISC and Boomi Atom) before you start the connection settings. The Alleantia ISC has to be visible in the local network where any of your atom/molecule is deployed.



## Connection tab 

 

**Host** - 
Alleantia IP Address: the host for communication.

**Port** - 
Port \(80\): the port for communication. The default REST API port is 80, however Alleantia ISC may be installed on a different port — e.g. on Windows IoT 2019 and Windows Server 2019.

## Test Connection troubleshooting 

If the connection doesn't complete, there are three cases:

-   Alleantia ISC software is not active
-   Alleantia ISC host is not active / not connected to the network
-   Alleantia ISC host is not reachable from Atom host.

In case of any problem, check if the Atom has visibility to the Alleantia ISC host through the network of the Alleantia ISC instance, and also ensure your firewall is not blocking communication on http port 80. Perform a direct test on Alleantia ISC Rest API from Atom host using a browser and the instructions in the Alleantia API documentation.