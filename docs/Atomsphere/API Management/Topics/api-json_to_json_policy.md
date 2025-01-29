# JSON to JSON Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-44605138-1ec2-468f-abf0-bb914a2afe89"/>
</head>

Apply a transformation (or mapping) on the request or response content.

This policy is based on the [JOLT library](https://github.com/bazaarvoice/jolt).

You must provide the JOLT specification in the policy configuration.

:::note
You can use [Expression Language](api-expression_language) in the JOLT specification.
:::

At the request/response level, the policy will do nothing if the processed request/response does not contain JSON. This policy checks the Content-Type header before applying any transformation.

## Timing

|On Request Content| On Response Content|
|---|---|
|X|X|

## Configuration

| Property  |Required   |Description     | Type | Default|
|---|---|---|---|---|
|`scope`| yes|The execution scope (`REQUEST` or `RESPONSE`)|string|`REQUEST`|
|`specification`|yes|The JOLT specification to apply on a given content. Can contain [expression language](api-expression_language).|string||
|`overrideContentType`|no|Override the Content-Type to application/json.|string|`true`|

## Example

JSON input:

```json
{
  "StudentDatabase": {
    "student": [
      {
        "name": "Alice Johnson",
        "age": 20,
        "major": "Computer-Science",
        "student_id": "S123456",
        "gpa": 4.8
      },
      {
        "name": "Bob Smith",
        "age": 22,
        "major": "Literature",
        "student_id": "S654321",
        "gpa": 4.2
      },
      {
        "name": "Charlie Brown",
        "age": 21,
        "major": "Computer-Science",
        "student_id": "S789012",
        "gpa": 4.5
      }
    ]
  }
}
```

JSON to JSON policy configuration:

```json
// Shift operation to restructure the JSON data
[
  {
    "operation": "shift",
    "spec": {
      "StudentDatabase": {
        "student": {
          // Shift has a precedence order when matching, so the "*" will match "last".
          "*": {
            // Map each student's name to a new array 'student names' and keep it in 'students'
            "name": ["student names[]", "students[&1].name"],
            // Keep the major,student_id,age and gpa in the 'students' array
            //&1 is a reference used within the shift operation to refer back to the matched index or key at the current level of the JSON structure
            "major": "students[&1].major",
            "student_id": "students[&1].student_id",
            "age": "students[&1].age",
            "gpa": "students[&1].gpa"
          }
        }
      }
    }
  },
  {
    // Remove operation to delete the 'age' and 'gpa' field from each student object
    "operation": "remove",
    "spec": {
      "students": {
        "*": {
          "age": "",
          "gpa": ""
        }
      }
    }
  }
]
```

Expected output:

```json
{
    "student names": [
        "Alice Johnson",
        "Bob Smith",
        "Charlie Brown"
    ],
    "students": [
        {
            "name": "Alice Johnson",
            "major": "Computer-Science",
            "student_id": "S123456"
        },
        {
            "name": "Bob Smith",
            "major": "Literature",
            "student_id": "S654321"
        },
        {
            "name": "Charlie Brown",
            "major": "Computer-Science",
            "student_id": "S789012"
        }
    ]
}
```

## Errors

|Code|Description|
|---|---|
|`500`|Bad specification file or transformation cannot be executed properly.|