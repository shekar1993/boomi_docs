# System values

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-afbf6756-7aa2-41ea-971d-1e74e716c7f9"/>
</head>


System values are values assigned dynamically by the Boomi Flow engine during runtime, and provide information about the flow, the person who starts the flow, users in the flow, geolocation data of the user and so on.

-   All system values can be referenced from within a flow.

-   System values are not shown in the list of values, and cannot be edited.

-   To view the data contained in a system value when building a flow, add a Step map element containing the value, and run the flow to display the data of the value.


System values are grouped into values that store flow state information, values that store user information, and two Boolean values that store the Boolean 'True' and 'False' values as data.

-   [System state values](/docs/Atomsphere/Flow/topics/r-flo-Values_System_State_Values_0e184acc-ec85-4922-b06b-07a5d6966fa0.md)

-   [System user values](/docs/Atomsphere/Flow/topics/r-flo-Values_System_User_Values_d9728e25-86de-4d77-8246-a04031fe6b63.md)

-   [System boolean values](/docs/Atomsphere/Flow/topics/r-flo-Values_System_Boolean_Values_c973cac2-7101-4ec9-a32b-97cad0317588.md)


:::caution

System values are prefixed with a ‘$’ symbol. Although the $ prefix can be used in value names that you create, we recommend that you do not use a $ symbol at the beginning of your value names to avoid confusion with system values.

:::