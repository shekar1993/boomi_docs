# Creating an environment variable

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-c02db626-21cf-4e10-aaf9-31f6a39e738b"/>
</head>


Create an environment variable to store and manage a common value that you want to change for each environment.

## Creating an environment variable

When you create a variable in an environment, you must name it and assign a value to it for that environment. A variable of the same name is also then added to all other environments, but with a blank value that you must define.

To create an environment variable:

1.  Open an environment.
2.  Click the Variables tab.
3.  Click **Create a new environment variable**.
4.  **Name**: Enter a name for the variable. This is used when inserting the variable.
5.  **Value**: Enter the value for the variable. This value accepts any combination of alpha, numeric, and special characters.
6. **Change** | The Value is a secret: Select this checkbox to specify that the value should be masked. On selecting this, the value will not be visible at designtime or runtime.
7.  Click **Save** to create the variable in the environment.
8.  Enter a value for the variable in each environment.

    -   A variable of the same name is added to all other environments, but with a blank value that you must now define.

    -   You can insert the contents of the variable into a number of areas, such as in an existing value, or into the content of a map element. See [Inserting an environment variable](flo-Environments-inserting-variables_41ec9999-8d52-4d1e-8f65-ffaf6f59f296.md).