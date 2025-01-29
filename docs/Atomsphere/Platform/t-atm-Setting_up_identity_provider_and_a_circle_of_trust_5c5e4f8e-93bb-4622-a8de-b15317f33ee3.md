# Setting up an identity provider and a circle of trust 

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-5c5e4f8e-93bb-4622-a8de-b15317f33ee3"/>
</head>


This task shows the information needed to set up OpenAM as an identity provider.

## About this task

Although OpenAM is the identity provider in this task, every identity provider is different.

## Procedure

1.  Log into your identity provider \(OpenAM\) as the administrator.

2.  Click **Create Hosted Identity Provider**.

3.  **Optional:** In the Metadata section, change the **Name** field. This is the only opportunity that you have to change the name.

4.  Select a **Signing Key**.

    If you are using OpenAM, do not use the "test" signing key that is distributed with it because it is publicly available and obviously is not secure.

5.  In the **Circles of Trust** field, select the **Add to new** option.

6.  In the **New Circle of Trust** field, add a name for your circle of trust, for example, Boomi.

7.  Click **Configure**.