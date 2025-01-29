# Adding an advanced expression to a match rule 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-2b6f454a-4577-4dfd-97d0-1451a17aad28"/>
</head>


Advanced expressions in match rules support case-sensitive matching and case-insensitive fuzzy matching, Advanced expressions can also include values for any pair of incoming and existing fields and static values.

Boomi DataHub converts incoming and existing strings to uppercase before applying the similarity algorithm for fuzzy matching. This string conversion makes the similarity algorithm more suitable for string matching. The conversion will likely affect the match score compared to the original string format. For example, using Jaro-Winkler to match the email address `john.smith@mycomp.com` with `JOHNSMITH@mycomp.com` without the string conversion gives approximately a 52% similarity score. When converting both strings to uppercase, the similarity score changes to approximately 99%. 

## Procedure

1.  In the Match Rule dialog, point in the desired level in the match rule definition hierarchy and click **Add an Expression**.

    ![Click Add an Expression as opposed to Add a Group.](../Images/Common/mdm-ds-add-rule-add-expression-expression-group_b72b2b31-6f03-4d12-b401-8728f46a503c.jpg)

    Links and controls for defining an expression appear at the pointer location.

    ![Click Advanced Configuration to open the Configure Advanced Expression dialog.](../Images/Common/mdm-ds-add-rule-simple-expression_30b35e2d-5933-46e0-ab85-5ddecd743b8f.jpg)

2.  Click **Advanced Configuration**.

    The Configure Advanced Expression dialog overlays the Match Rule dialog and takes focus.

    ![Configure Advanced Expression dialog](../Images/Models/mdm-db-add-rule-advanced-expression_66dd70ba-bb4a-41af-b37b-e8016cc9c0c1.jpg)

3.  In the **Expression** list, select Equals, Equals \(Case-Sensitive\) or, to specify fuzzy matching, Is Similar To.

4.  If you selected **Expression** Is Similar To, select the similarity algorithm for the application of fuzzy matching and set the tolerance level as follows \(otherwise, skip to step 5\):

    1.  In the **Use Similarity Algorithm** list, select one of these similarity algorithms:

        -   [Jaro-Winkler](http://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance)

        -   [Levenshtein](http://en.wikipedia.org/wiki/Levenshtein_distance)

        -   [Bigram](http://en.wikipedia.org/wiki/N-gram)

        -   [Trigram](http://en.wikipedia.org/wiki/N-gram)

        -   [Soundex](http://en.wikipedia.org/wiki/Soundex)

    2.  In the **Tolerance** field, type the tolerance level:

        -   For all similarity algorithms except Soundex, use a level in the range 0.0 \(no similarity\) to 1.0 \(perfect similarity\). The default is 0.85.

        -   For Soundex, use an integer level in the range 0 \(little similarity\) to 4 \(likely similarity\). The default is 4.

5.  Under “First Input”, specify the expression’s first term:

    1.  In the **Input Type** list, select Existing or Incoming to specify a field to test or Static to specify a static value to match.

    2.  For an Existing or Incoming **Input Type**, in the **Model Field** list, select the field to test. Long Text and intra-domain reference fields are not available for selection. For a Static **Input Type**, in the **Static** field, type the static value to match.

6.  Under “Second Input”, specify the expression’s second term in the same manner as the first term — see step 5.

    :::note
    
    There are restrictions on expressions that specify collection fields as inputs:

    -   If, for the first input, you set **Input Type** to Incoming and selected a collection field as the **Model Field**, for the second input select that same field as the **Model Field** and set **Input Type** to Existing.

    -   If, for the first input, you set **Input Type** to Existing and selected a collection field as the **Model Field**, for the second input select that same field as the **Model Field** and set **Input Type** to Incoming.

    :::

7.  Click **Save**.

    The Configure Advanced Expression dialog closes and focus returns to the Match Rule dialog. The newly defined expression is listed. When you pause the pointer on the expression, links appear enabling you to edit or remove the expression.