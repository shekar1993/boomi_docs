# Best practices for designing models 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-654fe70c-de2b-4272-8e65-8d07ca99b5e4"/>
</head>


Review the following best practices and tips to help you design and create models.

## General

- **Save a model as a draft** and delay publishing until you are confident about the field types since you cannot change the field types after publishing.

- **Consider designing the ‘reference’ models** before publishing the first version of a base model if possible. These are the models that will be referenced from the base model. You can’t reference them from the base model (via a Reference Field) unless you create a draft of the model(s) first.

- **Designate the Record Title Format** where applicable. This will help tremendously when visualizing the referenced golden record(s) in Hub Data Stewardship scenarios.

- **Create simple match rules** when possible. Complex match rules with multiple OR clauses can negatively affect performance.

## Sources

- **Start by loading initial data** from the source that will contribute the most trusted information to the golden record. This creates a good baseline for golden record creation.

- **Exclude fields** from your model that are subject to frequent change such as source metadata fields (example: “Last Modified Date”).

- **Before marking a field as required** in a model, compare the field requirement across your different contributing sources. It may not be a required field in all your sources. Golden records are quarantined when required fields are missing values. Be sure it is a rule you want to implement across all contributing sources.

- **If a field’s format requirements vary**, implement the strictest formatting rules. For example, if one source has a maximum of 50 characters while another source has 100, require a 50 character maximum for the field.

## Size

**Be aware of the size limitations** for models. You cannot publish and deploy models that exceed the size limits. Calculate the total size and the row size to ensure models do not exceed those limitations.

#### Calculate total byte size of a model

The total size of all the fields in a model, excluding the id field, reference fields, and repeatable (collection) fields, cannot exceed 65,331 bytes.

To calculate the total size:

1. To calculate the total size, count the number of fields for each data type. For example, you can calculate that four of your fields are integers, four are data/time fields and two fields are text fields.

2. Add the byte size for each field in the model. Refer to the following table for the amount of bytes per data type:

   | Data type   | Bytes                         |
   | ----------- | ----------------------------- |
   | Text        | Maximum text length x 3 bytes |
   | Integer     | 4 bytes                       |
   | Float       | 8 bytes                       |
   | Date/Time   | 8 bytes                       |
   | Date        | 3 bytes                       |
   | Time        | 3 bytes                       |
   | Boolean     | 1 byte                        |
   | Enumeration | 765 bytes                     |
   | Long Text   | 12 bytes                      |

For example:

- 4 integer fields x 3 bytes = 12 bytes

- 4 date/time field x 8 bytes = 32 bytes

- 1 text field x (maximum length 10 characters x 3 bytes) = 30

- 1 text field x (maximum length 100 characters x 3 bytes) = 300

- Total size of the model = 374 bytes

#### Calculate row size of a model

Model data is stored in a table. The row size of a model, excluding the id field, reference fields, and repeatable (collection) fields, cannot exceed 8,126 bytes.

To calculate the row size:

1. Count the number of fields for each data type. For example, you can calculate that four of your fields are integers, four are data/time fields and two fields are text fields.

2. Add the byte size to the number of fields for each data type. Refer to the following table for the amount of bytes per data type:

   | Data type   | Bytes      |
   | ----------- | ---------- |
   | Text        | 41 bytes   |
   | Integer     | 4 bytes    |
   | Float       | 8 bytes    |
   | Date/Time   | 8 bytes    |
   | Date        | 3 bytes    |
   | Time        | 3 bytes    |
   | Boolean     | 1 byte     |
   | Enumeration | 1 byte     |
   | Long Text   | 1 byte     |

For example:

- 4 integer fields x 4 bytes = 16 bytes

- 2 text fields x 41 = 82 bytes

- 4 date/time fields x 8 = 32 bytes

- Total byte size = 130

3. Calculate the following formula and round up to the nearest whole number: (7 bytes + n/8) where n is the number of fields in the model, excluding the id field, reference fields, and repeatable (collection) fields.

For example:

(7 bytes +10 fields)/8 = 3

4. Add the following: Total byte size + formula total + 237 bytes (for database overhead).

For example: 130 + 3 + 237 = 370 bytes. The row size is 370 bytes.