# Match rule 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-dd68e980-cfd5-4abb-93eb-7d7253ee3588"/>
</head>

A match rule is a component of a model that specifies the manner in which incoming source entities are matched to golden records. Match rules are applied to an incoming entity only if there is not an existing golden record linked to the entity’s source. Match rules are specified in decreasing order of strictness and they are applied sequentially.