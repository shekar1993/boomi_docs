# Cross reference table example: More than one input and output value

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2cda62bb-151c-4fd1-84bf-c16d4a142ed7"/>
</head>


A cross reference table can be used to accept more than one input value and produce more than one output value. The example here shows a cross reference table lookup within a function.

In addition to setting up the function, you need to map all input elements from the source profile to the input values in the function. You also need to map all output values from the function to the output elements in the destination profile.

![Cross Reference Lookup dialog example showing more than one input and output value](../Images/build-db-cross-reference-lookup-multi-input-output.jpg)

For example, when referring to the U.S. states:

-   System A uses the State Name value and the Other Code value

-   System B uses the FIPS Alpha Code value and the FIPS Numeric Code value


When mapping from System A to System B, you need to translate the State Name value to the FIPS Alpha Code value. The SQL Select statement for the Output\_Element would be: SELECT FIPS\_Alpha\_Code FROM State\_Cross-Reference\_Example WHERE State\_Name = Input\_Element. If the State Name=Alabama in System A then the FIPS Alpha Code=AL for System B. "AL" is the value that will be returned in the output.

When mapping from System A to System B, you also need to translate the Other Code value to the FIPS Numeric Code value. The SQL Select statement for the Output\_Element would be: SELECT FIPS\_Numeric\_Code FROM State\_Cross-Reference\_Example WHERE Other\_Code = Input\_Element. If the Other Code=a in System A then the FIPS Numeric Code=01 for System B. "01" is the value that will be returned in the output.