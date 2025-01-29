# Network configuration for Molecules and Atom Clouds 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b3485a03-5386-4e27-aa61-51e86d802354"/>
</head>


A Molecule's nodes and an Atom Cloud's Cloud Molecules by default use a Multicast (UDP)-based protocol to manage clustering. Alternatively, aDocker Molecule's nodes and a Docker Atom Cloud's Cloud Molecules by default use a Unicast (TCP)-based protocol to manage clustering.

There are a variety of network-related issues you might encounter.

The Molecule and Atom Cloud use JGroups to implement the clustering support.

## Additional resources 

[JGroups Manual](http://www.jgroups.org/manual/html/ch02.html#ItDoesntWork)

[jgroups.org manual for version 3](http://www.jgroups.org/manual-3.x/html/)