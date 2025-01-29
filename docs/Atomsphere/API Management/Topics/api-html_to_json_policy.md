# HTML to JSON Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-27f019ba-5ec5-42c9-8317-e8f62e929bfc"/>
</head>

Transform the response content from HTML to JSON.

This policy is based on the [jsoup HTML parser](https://jsoup.org/). 

## Timing

|On Request| On Response| On Request Content|On Response Content|
|---|---|---|---|
||||X|

## Configuration

| Property  |Required   |Description     | Type |
|---|---|---|---|
|`jsonName`|yes|Name of the JSON field to contain the result of the selection.|string|
|`selector`|yes|HTML/CSS selector used to select an element and get the text.|string|
|`array`|no|Determine if the selection needs to be returned as an array.|boolean|

## Example

HTML content:

```html
<html>
<body>
    <table id="tid">
        <thead>
            <tr>
                <th>name</th>
                <th>age</th>
                <th>major</th>
                <th>student_id</th>
                <th>gpa</th>
            </tr>
        </thead>
        <tbody id="student">
            <tr>
                <td>Alice Johnson</td>
                <td>20</td>
                <td>Computer-Science</td>
                <td>S123456</td>
                <td>4.8</td>
            </tr>
            <tr>
                <td>Bob Smith</td>
                <td>22</td>
                <td>Literature</td>
                <td>S654321</td>
                <td>4.2</td>
            </tr>
            <tr>
                <td>Charlie Brown</td>
                <td>21</td>
                <td>Computer-Science</td>
                <td>S789012</td>
                <td>4.5</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```

html-json configuration:

```json
{
  "selectors": [
    {
      "jsonName": "StudentName",
      "selector": "#student tr td:first-child",
      "array": true
    },
    {
      "jsonName": "StudentId",
      "selector": "#student tr td:nth-child(4)",
      "array": true
    },
    {
      "selector": "table#tid td",
      "jsonName": "TableData",
      "array": true
    },
    {
      "jsonName": "CompleteData",
      "selector": "body > table",
      "array": true
    }
  ]
}
```

Expected output:

```json
{
    "CompleteData": [
        "name age major student_id gpa Alice Johnson 20 Computer-Science S123456 4.8 Bob Smith 22 Literature S654321 4.2 Charlie Brown 21 Computer-Science S789012 4.5"
    ],
    "TableData": [
        "Alice Johnson",
        "20",
        "Computer-Science",
        "S123456",
        "4.8",
        "Bob Smith",
        "22",
        "Literature",
        "S654321",
        "4.2",
        "Charlie Brown",
        "21",
        "Computer-Science",
        "S789012",
        "4.5"
    ],
    "StudentName": [
        "Alice Johnson",
        "Bob Smith",
        "Charlie Brown"
    ],
    "StudentId": [
        "S123456",
        "S654321",
        "S789012"
    ]
}
```
