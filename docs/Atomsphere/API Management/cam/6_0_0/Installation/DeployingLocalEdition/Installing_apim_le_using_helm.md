---
sidebar_position: 4
---

# Installation Dry Run

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-220ae40f-e4b4-425a-a453-95bf7210f144"/>
</head>

## YAML Format Verification

Local Edition uses YAML (driven by Helm) to deploy the application on Kubernetes. YAML follows strict rules for text position and indentation.

:::caution

Verify after every edit in any Yaml template file.

:::

- **Success condition**

  ```
  $ helm lint
  ==> Linting .
  [INFO] Chart.yaml: icon is recommended

  1 chart(s) linted, 0 chart(s) failed
  ```

- **Failure condition** - Added extra space in the values.yaml file at line number 8.

  ```
  $ helm lint
  ==> Linting .
  [INFO] Chart.yaml: icon is recommended
  [ERROR] values.yaml: unable to parse YAML: error converting YAML to JSON: yaml: line 8: mapping values are not allowed in this context
  [ERROR] templates/: cannot load values.yaml: error converting YAML to JSON: yaml: line 8: mapping values are not allowed in this context
  [ERROR] : unable to load chart
  cannot load values.yaml: error converting YAML to JSON: yaml: line 8: mapping values are not allowed in this context

  Error: 1 chart(s) linted, 1 chart(s) failed
  ```

## Template rendering verification

You can check if edits you have made are applied correctly without any errors.

```
<extract location>$ helm template apim ./deploy

or

<extract location>$ helm install apim ./deploy --dry-run

or

<extract location>$ helm template apim ./deploy  -f <path to over-rides file.yaml> 

or <extract location>$ helm install apim ./deploy --dry-run -f <path to over-rides file.yaml>
```

Check if there are any errors:

```
Error: INSTALLATION FAILED: cannot load values.yaml: error converting YAML to JSON: yaml: line 26: could not find expected ':'
```
