# Adding or deleting segments, loops, and elements from an EDI profile

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4ef04ad5-8ce5-42b3-98a5-af032f820466"/>
</head>


You can modify the data elements in an EDI profile.

## Procedure

1.  Create an EDI profile.

2.  Select the User Defined standard and select the file options.

3.  Click the **Data Elements** tab.

4.  Click the blue arrow ![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) next to the Header, Summary, or Detail loop to which you want to add segment\(s\) or loop\(s\).

5.  Select one of the following:

    -   **Add Child Segment**

    -   **Add Child Loop**

    A new segment or loop appears in the tree.

6.  Select one of the following:

    -   **Add Multiple Child Segments**

    -   **Add Multiple Child Loops**

    The How Many dialog opens.

7.  Select the number of segments or loops to add and then click **OK**.

8.  After adding a segment, you can:

    -   Add one or more child data elements.

        To add a data element component \(called a *composite*\) specify the composite’s **Data Name** as the data element name, followed by a decimal point, and the composite name \(a number\) — for example, PV107.1.

        -   If the composite is the data element’s first composite — that is, if its **Data Name** suffix is “.1” — set **Composite** to Composite Start.

        -   If the composite is nol the data element’s first composite, set **Composite** to Composite.

        To add a composite component \(called a *sub-composite*\) specify the sub-composite’s **Data Name** as the data element name, followed by a decimal point, the composite name \(a number\), another decimal point, and the sub-composite name \(a number\) — for example, PV107.9.1.

        -   If the sub-composite is the data element’s first sub-composite and is, in addition, the data element’s first composite, set **Composite** to Sub-Composite Start \(Data Element\).

        -   If the sub-composite is a composite’s first sub-composite but is not the data element’s first composite, set **Composite** to Sub-Composite Start.

        -   Otherwise, set **Composite** to Sub-Composite.

    -   Insert one or more segments.

    -   Delete the segment.

    -   Add an instance identifier.

9.  After adding a loop, you can:

    -   Add one or more child segments.

    -   Add one or more child loops.

    -   Insert one or more loops.

    -   Delete the loop.

    -   Add an instance identifier.

10. After adding a data element, you can:

    -   Add one or more data elements.

    -   Delete the data element.

    -   If it is a composite element you can expand it.

    -   If it is a sub-composite element you can expand it.

11. After adding an instance identifier, you can:

    -   Edit the instance identifier.

    -   Delete the instance identifier.

12. Click **Save**.