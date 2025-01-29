# Source creation and maintenance 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-57f34afa-9523-4952-adfc-81ac5208c4bc"/>
</head>


In Boomi DataHub a source is an entity representing a system that for individual master data domains can contribute to data and/or accept updates of data. Because a given system can be integrated with multiple domains across multiple resources, the creation of Boomi DataHub sources is handled at the account level. This enables you to reuse sources across data stores.

The sources in your Boomi DataHub account are listed in the Sources page. To open the **Sources** page, click Sources in the Boomi DataHub menu.

![The Sources page shown here lists the sources in this account: NetSuite, Salesforce, and Workday.](../Images/Sources/mdm-ps-sources_c9acc1a7-a5ce-4b99-b4bb-9cd663aacf3e.jpg)

Sources have the following mandatory properties:

-   name

-   unique ID


When you create a source you set both of the above properties. After that you can change its name but you cannot change its unique ID. The unique ID cannot contain spaces, special characters, or lowercase characters.

Sources optionally have an additional property, the entity ID URL template, which Boomi DataHub uses to construct target URLs for links, rendered in the Golden Records page for a deployed model, to entities in source systems. This property is useful only with source systems that support “deep linking” to individual entity pages.

To create and manage **sources**, select Sources in the Boomi DataHub menu.

Once you create a source, you can add it to models. When a model that contains sources is deployed to a repository, the sources are automatically attached to the domain. Attachment enables the source systems to contribute to master data and/or subscribe to updates of master data. Adding a source to a model is done in the model’s **Sources** tab.