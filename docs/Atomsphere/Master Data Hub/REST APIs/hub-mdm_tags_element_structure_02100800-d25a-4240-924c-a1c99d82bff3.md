# `<mdm:tags> element structure` 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-02100800-d25a-4240-924c-a1c99d82bff3"/>
</head>

The `<mdm:tags>` element corresponds to the [**Tags tab**](/docs/Atomsphere/Master%20Data%20Hub/Menu/r-mdm-Tags_tab_8ace0b7a-705e-42ce-a055-66e315504a91.md) in a Boomi DataHub model page.

`<mdm:tags>` has a child `<mdm:tag>` element representing each of the model’s tags.

This example shows the high-level structure for an `<mdm:tags>` element that represents a model’s three tags:

``` xml
<mdm:tags>
   <mdm:tag name=""></mdm:tag>
   <mdm:tag name=""></mdm:tag>
   <mdm:tag name=""></mdm:tag>
</mdm:tags>
```

## `<mdm:tag>` 

The `<mdm:tag>` element corresponds to an entry in the **Tags** summary list in Boomi DataHub. 

This example shows the high-level structure for an `<mdm:tag>` element that represents a tag named Philadelphia Gmail Users:

``` xml
<mdm:tag name="Philadelphia Gmail Users">
   <mdm:businessRule name=""></mdm:businessRule>
</mdm:tag>
```

-   `<mdm:tag>` has a name attribute whose value corresponds to **Name** in the **Configure Tag** dialog in Boomi DataHub. 

-   `<mdm:tag>` has a child [`<mdm:businessRule>`](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_businessRule_element_structure_6eb50aa0-411a-4767-9813-b8d11625c4e6.md) element that represents the business rule, specified in using the **Configure Tag** dialog, that is evaluated when the repository applies tags to golden records.