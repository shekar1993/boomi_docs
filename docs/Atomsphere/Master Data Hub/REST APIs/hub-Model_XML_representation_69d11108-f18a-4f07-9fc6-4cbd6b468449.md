# Model XML representation 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-69d11108-f18a-4f07-9fc6-4cbd6b468449"/>
</head>


In its request body, the Create Model operation requires the XML representation of the model to create in the root element `<mdm:CreateModelRequest>`. Similarly, the Update Model operation requires in its request body, in the root element `<mdm:UpdateModelRequest>`, the XML representation of the model upon completion of the update. Conversely, the Get Model operation returns in its response body, in the root element `<mdm:GetModelResponse>`, the XML representation of the model specified in the request by its system ID.

`<mdm:CreateModelRequest>`, `<mdm:UpdateModelRequest>`, and `<mdm:GetModelResponse>` have the following child elements:

-   `<mdm:name>` — name of the model, which contains a minimum of two characters and a maximum of 40

-   [`<mdm:fields>`](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_fields_element_structure_6df92ffb-2902-4df7-ae06-2062dfdd8b95.md)

-   [`<mdm:sources>`](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_sources_element_structure_8ab8a61e-f31e-4456-a2ee-01cf7225abe2.md)

-   [`<mdm:dataQualitySteps>`](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_dataQualitySteps_element_structure_15808dce-d6e1-4139-bf7f-d9572777e5e4.md)

-   [`<mdm:recordTitle>`](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_recordTitle_element_structure_453212a0-afd8-49e8-a432-fc3c0e56ba1e.md)

-   [`<mdm:matchRules>`](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_matchRules_element_structure_46da686b-ff3c-48f0-b6bf-6342da090fb9.md)

-   [`<mdm:tags>`](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_tags_element_structure_02100800-d25a-4240-924c-a1c99d82bff3.md)


The [`<mdm:businessRule>`](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_businessRule_element_structure_6eb50aa0-411a-4767-9813-b8d11625c4e6.md) element is common to the `<mdm:sources>`, `<mdm:dataQualitySteps>`, and `<mdm:tags>` element structures.

`<mdm:GetModelResponse>` has the following additional child elements:

-   `<mdm:version>` — model version number

-   `<mdm:id>` — system ID of the model


:::note

Child elements are empty if the objects they represent are not defined in the model. For example, if the model does not have data quality steps, `<mdm:dataQualitySteps>` is empty.

:::