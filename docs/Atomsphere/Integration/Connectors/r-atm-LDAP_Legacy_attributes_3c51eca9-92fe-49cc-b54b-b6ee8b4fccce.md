# LDAP (Deprecated) attributes 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3c51eca9-92fe-49cc-b54b-b6ee8b4fccce"/>
</head>


By providing the Attributes operation field in the LDAP (Deprecated) Import Wizard, the schema is dynamically generated based on the values provided.

Add to the \(,\) delimited list the attributes that you want to access in the directory for either a user, group, or object type operation. For special attributes, use a prefix to tell the connector how to handle them. The current adapter handles octet string and multi-value attributes.

|Name|Type|Example|
|----|----|-------|
|`o_<attribute_name>`|Octet String|`o_objectGUID`|
|`m_<attribute_name>`|Multiple values|`m_memberOf`|

## Removing a value from an attribute 

These XML samples remove a value from an attribute:

```xml
<?xml version='1.0' encoding='UTF-8'?>
<LDAPObject>
  <userDN>uid=zylean,ou=Users,dc=wdcigroup,dc=net</userDN>
  <mail></mail>
</LDAPObject>
```

OR

```xml
<?xml version='1.0' encoding='UTF-8'?>
<LDAPObject>
  <userDN>uid=zylean,ou=Users,dc=wdcigroup,dc=net</userDN>
  <mail />
</LDAPObject>
```

This XML sample removes values from a multi-valued attribute:

```xml
<?xml version='1.0' encoding='UTF-8'?>
<LDAPObject>
  <userDN>uid=zylean,ou=Users,dc=wdcigroup,dc=net</userDN>
  <_telephonenumber>
    <attr_telephonenumber>
      <value></value>
    </attr_telephonenumber>
  </_telephonenumber>
</LDAPObject>
```