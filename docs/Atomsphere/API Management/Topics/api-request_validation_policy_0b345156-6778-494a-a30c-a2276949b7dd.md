# Request Validation Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0b345156-6778-494a-a30c-a2276949b7dd"/>
</head>

The request validation policy is used to validate the incoming HTTP request according to given rules. A rule is defined for an input value. This input value supports [EL](docs/Atomsphere/API%20Management/Topics/api-expression_language.md) expression and is validated against constraint rules.

Constraint rules can be:

- `NOT_NULL`: Input value is required.

- `MIN`: Input value is a number and its value is greater or equals to a given parameter.

- `MAX`: Input value is a number and its value is lower or equals to a given parameter.

- `MAIL`: Input value is valid according to the mail pattern.

- `DATE`: Input value is valid according to the date format pattern given as a parameter. The input must match the SimpleDateFormat specified in the parameters.
- `PATTERN`: Input value is valid according to the pattern given as a parameter.

- `SIZE`: Input value length is between two given parameters.

- `ENUM`: Field value included in ENUM.  The input must match one of the case-sensitive strings specified in the parameters.


By default, if one of the rule can not be validated, the policy returns a `400` status code.

## Timing


| On Request | On Response |On Request Content|On Response Content|
|---|---|---|---|
|  X |   |   X||

## Configuration
| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|`scope`|yes| Phase when the policy is executed|policy scope|`ON_REQUEST`|
|  `status` |  yes |HTTP Status Code send to the consumer in case of validation issues.   |HTTP status code |400
|`rules`|yes|Rules to apply to incoming request| List of rules|

## Example

```
"policy-request-validation": {
    "rules": [
        {
            "constraint": {
                "parameters": [
                    ".*\\\\.(txt)$"
                ],
                "type": "PATTERN"
            },
            "input": "{#request.pathInfos[2]}"
        }
    ],
    "status": "400"
}
```
## HTTP Status Code
|Code| Message|
|---|---|
|`400`| Incoming HTTP request can not be validated.|

