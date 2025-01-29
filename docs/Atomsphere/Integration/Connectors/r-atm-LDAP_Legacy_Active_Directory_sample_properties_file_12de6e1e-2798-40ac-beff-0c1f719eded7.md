# Active Directory sample properties file 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-12de6e1e-2798-40ac-beff-0c1f719eded7"/>
</head>


The LDAP (Deprecated) connector can generate the schema based on the attributes specified in the LDAP properties file. This file is the default file within the connector.

If you are not connecting to Active Directory, change this file and remove the Active Directory-specific Attributes from the LDAP.User.attributes.

```java
LDAP.schemaPrefix=<?xml version="1.0" encoding="ISO-8859-1" ?><xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"><xs:simpleType name="stringtype"><xs:restriction base="xs:string"/></xs:simpleType>
LDAP.QUERY.methods=queryUser,queryObject
LDAP.CREATE.methods=addUser,addGroup,assignUser
LDAP.UPDATE.methods=updateUser,removeUser
LDAP.GET.methods=getUser
LDAP.addUser.label=Add a user to the Directory
LDAP.updateUser.label=Update a user in the Directory
LDAP.addGroup.label=Add a group to the Directory
LDAP.queryUser.label=Query a User
LDAP.queryObject.label=Query if an Object Exists
LDAP.getUser.label=Get user details
LDAP.assignUser.label=Assign a user to a Group
LDAP.removeUser.label=Remove a user from a Group
LDAP.addGroup.requiredAttributes=groupDN,m_objectClass
LDAP.queryObject.requiredAttributes=searchBase
LDAP.addUser.requiredAttributes=userDN,m_objectClass
LDAP.assignUser.requiredAttributes=userDN,groupDN
LDAP.removeUser.requiredAttributes=userDN,groupDN
LDAP.updateUser.requiredAttributes=userDN,updateGUID
LDAP.queryUser.requiredAttributes=searchBase
LDAP.getUser.requiredAttributes=

*\**\* DO NOT EDIT ANYTHING ABOVE THIS LINE. IF COPYING THIS SAMPLE, REMOVE THIS ENTIRE LINE. **\**

LDAP.User.attributes=sn,givenName,telephoneNumber,o_objectGUID,distinguishedName,displayName,cn,userPrincipalName,m_memberOf,sAMAccountName,modifyTimeStamp,unicodePwd,userAccountControl
LDAP.Group.attributes=description
```