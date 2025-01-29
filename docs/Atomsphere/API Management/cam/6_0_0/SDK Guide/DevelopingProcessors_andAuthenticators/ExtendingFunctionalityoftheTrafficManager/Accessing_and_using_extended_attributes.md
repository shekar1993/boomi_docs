---
sidebar_position: 6
---
# Accessing and Using Extended Attributes

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-a0c1545b-65d5-4af9-a55b-5bb434bd086e"/>
</head>

Extended attributes can be set on customer site, key (API or package key), application, user, plan and package, and values . This is defined as per the [model class](../SDK%20Guide/Extended_attributes.md). 

The SDK includes an example custom processor that can access package Extended Attribute Values (EAV) as follows: 

## Accessing extended attributes of Customer site

```xml
CustomerSite customerSite = event.getEndpoint().getAPI().getCustomerSite();
ExtendedAttributes customerSiteEAVs = customerSite.getExtendedAttributes();
```

## Accessing extended attributes of key

```xml
Key key = event.getKey();
ExtendedAttributes keyEAVs = key.getExtendedAttributes();
```

## Accessing application extended attributes

```xml
Key key = event.getKey();
Application app = key.getApplication();
ExtendedAttributes appEAVs = app.getExtendedAttributes();
```

## Accessing User extended attributes

```xml
Key key = event.getKey();
User user = key.getOwner();
ExtendedAttributes userEAVs = user.getExtendedAttributes();
```

## Accessing plan and package extended attributes

```xml
CKey key = event.getKey();
if(key instanceof PackageKey){
Plan plan = ((PackageKey)key).getPlan();
ExtendedAttributes planEAVs = plan.getExtendedAttributes();
//use planEavs

//Packge extended attributes
com.mashery.trafficmanager.model.core.Package pkg = plan.getPackage();
ExtendedAttributes pkgEAVs = pkg.getExtendedAttributes();
//USe pkgEavs
```

## Accessing values from Extended Attributes

```xml
//Get Extended attributes from one of the objects viz.
User user = event.getKey().getOwner();
ExtendedAttributes userEAVs = user.getExtendedAttributes();
String key = "user_defined_key";
String value = userEAVs.getValue(key);
Logger.debug(this.getClass(), "Found EAV for Key:{}, value: {}", key,value);
```
