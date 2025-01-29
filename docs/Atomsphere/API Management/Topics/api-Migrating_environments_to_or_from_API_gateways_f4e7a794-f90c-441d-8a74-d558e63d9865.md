# Migrating an environment to or from an API Gateway 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f4e7a794-f90c-441d-8a74-d558e63d9865"/>
</head>


Migrate environments to or from an API Gateway on the **Environment Migration** tab of the **API Gateways** page \(**Configure Server** \> **Gateways**\)

## About this task

Complete the environment migration steps to attach an environment to an API Gateway, move an environment from one API Gateway to another API Gateway, or detach an environment from an API Gateway.

Once you click **Create Migration** in step 2, a record of the migration is created in the table on the Environment Migration tab. This allows you to click **Save and Close** or **Close Migration** to leave the migration wizard at your current step and return to that location at a later time.

## Procedure

1.  Go to **Configure Server** \> **Gateways**, and on the **Environment Migration** tab, click **Create a New Migration**.

    The Migrate an Environment wizard opens.

2.  Select the environment that you want move on or off an API Gateway or to a different API Gateway, and click **Create Migration**.

    Clicking **Create Migration** creates a record of the migration in the table on the Environment Migration tab that enables you to close the migration at the end of any step and return to your current location at a later time.

3.  Select the environment's destination: a different API Gateway or off its API Gateway \(if it is already attached to an API Gateway\). Click **Save and Continue**.

4.  Specify the environment endpoint path for REST endpoints, SOAP operations, and OData entities.

    The environment endpoint path is included in the complete endpoint URL. The complete endpoint URL consists of: Gateway’s Public URL + Environment Endpoint Path + Base API Path.

5.  Click **Save and Continue**.

    The Step 1 Summary page opens to allow you to review the selections you have made so far.

6.  Review your selections and then click **Save and Continue** to continue to Step 2: Atom Configuration.

7.  On the Atom Configuration page:

    -   If you are moving the environment to an API Gateway or to a different API Gateway, ensure that you have at least one Atom with its API Type set to Advanced and its Authentication Type set to Gateway. If you don't, select a different API Gateway that contains the correct configuration or make changes in Atom Management to correct the existing Atoms on the environment.
    -   If you are moving the environment off an API Gateway, ensure that you have at least one Atom with its Authentication Type set to something other than Gateway. If all of the Atoms have the Authentication Type set to Gateway, the APIs in this environment will not be accessible. To correct the configuration, make changes in Atom Management to correct the existing Atoms on the environment.
8.  Click **Save and Continue**.

    The Step 2 Summary page opens to allow you to review the selections you have made so far.

9.  Review your selections and then click **Save and Continue** to continue to Step 3: Configuring the API.

10. On the Deployed APIs page, ensure that the APIs deployed to the environment are the ones you expect and that you have the authentication and plans that you expect them to. If the deployed APIs are not as expected, go to the **Configure APIs and Applications** \> **Deployed APIs** page to make changes. Then, click **Save and Continue**.

    The Step 3 Summary page opens to allow you to review the selections you have made.

11. Review your selections and then click **Migrate** to continue the environment migration.

## Results

The environment you selected successfully moved to the specified API Gateway or off its existing API Gateway.

:::info 

The environment name from the Atom Management page of Integration becomes the Published Name of the environment upon completion of the migration. You can specify a different Published Name for the environment on the Environments panel of the Developer Portal within the Publish page.

If you specify a unique Published Name for an environment on the Environments panel and then migrate that environment to a different API Gateway, it will keep the unique Published Name that you specified.

:::