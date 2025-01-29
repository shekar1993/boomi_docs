# API Management-specific Platform audit log query types 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-35092dfe-f630-4fbf-9d6e-78299d54abe3"/>
</head>


You construct audit log queries for specific types of account management actions by combining the type, action, and modifier filter parameters.

|Action type|type|action|modifier|
|-----------|----|------|--------|
|Add an API application|*api.application*|ADD|NONE|
|Update an API application|*api.application*|UPDATE|NONE|
|Add an authentication source|*api.authentication\_source*|ADD|NONE|
|Remove an authentication source|*api.authentication\_source*|DELETE|NONE|
|Update an authentication source|*api.authentication\_source*|UPDATE|NONE|
|Add an API contract|*api.contract*|ADD|NONE|
|Update an API contract|*api.contract*|UPDATE|NONE|
|Add an API deployment|*api.deployment*|ADD|NONE|
|Deploy or Redeploy an API|*api.deployment*|DEPLOY|NONE|
|Remove an API deployment|*api.deployment*|DELETE|NONE|
|Update an API deployment|*api.deployment*|UPDATE|NONE|
|Add Gateway Settings when enabling gateway|*api.gateway\_settings*|ADD|NONE|
|Update Gateway Settings on update page|*api.gateway\_settings*|UPDATE|NONE|
|Add Portal Settings when enabling gateway|*api.portal\_settings*|ADD|NONE|
|Update Portal Settings on update page|*api.portal\_settings*|UPDATE|NONE|
|Add Environment Settings path during initial save|*api.environment\_settings*|ADD|NONE|
|Update Environment Settings path when saving|*api.environment\_settings*|UPDATE|NONE|
|Add an API Key|*api.key*|ADD|NONE|
|Remove an API Key|*api.key*|DELETE|NONE|
|Update an API Key|*api.key*|UPDATE|NONE|
