# Match rules overview 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-9c09e9c5-265e-4233-ac99-dc1f780688c4"/>
</head>


Match rules are rules for matching field values in incoming source entities to golden records in cases in which there is not a golden record linked to the entity’s source.

Matching cannot be performed on Long Text fields and intra-domain reference fields. Although matching can be performed on collection and collection item fields, collection and collection item matching are not supported for staging.

A simple match rule might specify a match occurs if an incoming entity’s last\_name and first\_name field values match the values of those fields in a golden record.

In the model page for a given model, select the **Match Rules** tab to do the following:

-   Add match rules to the model.

-   View, modify or delete the model’s existing match rules.

-   Change the order in which match rules are applied.


![This example of the Match Rules tab for a model lists the model’s four match rules.](../Images/Models/mdm-ps-model-match-rules-tab_238945eb-b1aa-44a3-a023-bfc0e5df64d3.jpg)

Existing match rules are listed in the order in which they will be sequentially applied to incoming entities, first to last. When match rules are applied, once a golden record is found that satisfies a match rule, any remaining match rules are not applied.

Match rule changes will not persist in the model definition until you publish the model or save it as a draft.

You should ensure match rules will be applied in decreasing order of restrictiveness. For example, consider the match rule mentioned above, which matches last_name and first_name field values, and another match rule that matches only last_name field values. The former match rule is more restrictive and thus should be applied first.

If you delete a field from the match rules on the **Fields** tab, the corresponding match rules will become invalid. You will see their definitions highlighted in red, and the deleted fields will be labeled as **Unknown**.

## Match rule definitions 

A match rule definition is a hierarchy of expressions and expression groups whose relationships are specified by Boolean operators AND, OR and NOT. Expressions can be grouped across multiple levels. The two sample match rules discussed above have one-level definitions:

1.  The more restrictive of the two contains two grouped expressions: `Match on: last_name AND Match on: first_name`.

2.  The less restrictive has a single expression: `Match on: last_name`.


This next match rule has a two-level definition:

```
Match on: last_name OR (Match on: first_name AND Match on: street_address)
```

This next match rule has a three-level definition:

```
Match on: last_name OR (Match on: first_name AND (Match on: street_address OR Match on: gender))
```

## Advanced expressions

Certain types of expressions are known as advanced expressions not so much because they are more complex but rather because they can only be specified in a child dialog accessible by clicking the **Advanced Configuration** link in the Match Rule dialog used to define a complete match rule:

-   While simple expressions for text field matching are limited to case-insensitive matching, advanced expressions also support case-sensitive matching and case-insensitive fuzzy matching.

    The following similarity algorithms are supported for fuzzy matching:

    -   [Jaro-Winkler](http://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance)

    -   [Levenshtein](http://en.wikipedia.org/wiki/Levenshtein_distance)

    -   [Bigram](http://en.wikipedia.org/wiki/N-gram)

    -   [Trigram](http://en.wikipedia.org/wiki/N-gram)

    -   [Soundex](http://en.wikipedia.org/wiki/Soundex)

    A match rule containing a fuzzy matching expression is valid only if the fuzzy matching expression is grouped with an exact matching expression.

-   Advanced expression terms can specify values for any pair of incoming and existing non-repeatable fields. For example, the following match rule would yield a match in the case of an incoming entity in which the first\_name field erroneously contains a person’s last name and vice versa:

    ```
    Incoming last_name = Existing first_name AND Incoming first_name = Existing last_name
    ```

    In an advanced expression specifying a collection field, that field must be selected for both inputs — for one input as an incoming field and for the other input as an existing field.

-   Advanced expression terms can even specify static values. For example:

    ```
    Match on: state = 'TX'
    ```


:::note

Any expression can be specified as an advanced expression. The Match Rule dialog supports shorthand for specifying expressions in which the incoming and existing field names coincide. For example, the following expressions are identical:

-   Match Rule dialog: `Match on: last_name`

-   Advanced Configuration: `Incoming last_name = Existing last_name`

:::