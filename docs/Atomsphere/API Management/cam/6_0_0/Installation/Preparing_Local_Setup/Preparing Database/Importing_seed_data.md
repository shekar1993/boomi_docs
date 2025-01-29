---
sidebar_position: 3
---

# Importing Seed Data

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-3f6c77c1-c553-40fb-ac92-204f8cb698a5"/>
</head>

This step is only needed for base installation of Local Edition and can be skipped if you are migrating from a previous version of Local Edition.

Seed data provides initial configuration, policy definitions and other data required for to Local Edition function. Steps explained here use the Local Edition toolkit image. The toolkit image has a pre-packaged MySQL client and you can choose not to use the toolkit container for importing data. You can find the MySQL script files in `<extract location>/scripts` folder 

## Before you begin

If toolkit container is not running, start toolkit container.

```
#replace v6.0.0 if you have changed the tag during image build

$ kubectl run -it --image=<registry>/[repository]/apim-le-toolkit:<tag> toolkit
```

## Procedure

1. Optional: Copy certs and keys to toolkit container.

   ```xml
   kubectl cp <extract-location>/samples/database/db-ca.pem toolkit:/opt/apim/db

   kubectl cp <extract-location>/samples/database/db-client-cert.pem toolkit:/opt/apim/db

   kubectl cp <extract-location>/samples/database/db-client-key.pem toolkit:/opt/apim/db
   ```							

2. Modify the following property in `/deploy/charts/configui/values.yaml`:

   `mlc\_oauth\_scope: "41a96952-ab9f-4abe-a2c8-e096c63324db"`

3. Optional. Do this step only when you need to customize the seed data. This step generates random UUIDs for Local Edition.

   ```
   I have no name!@toolkit:/$ cd /opt/apim/db

   I have no name!@toolkit:/$ customize-papi-properties.sh --domain\_suffix <YOUR\_DOMAIN\_SUFFIX> --area\_name <YOUR\_AREA\_NAME> --localdevadmin <YOUR\_LOCAL\_DEV\_ADMIN\_NAME>
   ```

   Retain a temporary copy of the customized data as it is needed for setting up Helm values and secrets.

   a. Modify the following property in deploy/charts/configui/values.yaml:

      ```
      mlc\_oauth\_scope: "Value of areas\_customer\_area\_uuid found in apim-le-papi-properties.json"
      ```

   b. Modify the following properties in deploy/values.yaml:

      ```
      domainSuffix : YOUR\_DOMAIN\_SUFFIX
      ```                       

   c. Modify the following property in deploy/charts/configui/values.yaml:

      ```
      adminuser : YOUR\_LOCAL\_DEV\_ADMIN\_NAME	
      ```				

   d. Modify the following properties in samples/configui/configui-secrets.yaml:

      ```
      .mlc\_apikey: THE\_VALUE\_OF\_your\_api\_key\_for\_v3\_api\_IN\_apim-le-papi-properties.json.mlc\_apisecret: THE\_VALUE\_OF\_your\_secret\_for\_v3\_api\_IN\_apim-le-papi-properties.json
      ```

      :::note
      
      You must encode these values either with base64 or encrypt with `apiml_crypto` as per your choice.

      :::

4. Create seed data SQL file.

   ```
   I have no name!@toolkit:/$ cd /opt/apim/db
   I have no name!@toolkit:/$ instantiate-seeds-template.sh
   ```

5. Run the following MySQL scripts:

   ```
   I have no name!@toolkit:/$ cd /opt/apim/db
   I have no name!@toolkit:/$ export MYSQL\_SERVICE\_HOST=<FQDN or IP address of MySQL database server>
   I have no name!@toolkit:/$ export MYSQL\_USER=<db user - default masheryonprem>
   I have no name!@toolkit:/$ export MYSQL\_PWD=<database password>
   I have no name!@toolkit:/$ export MYSQL\_DB=<database name | default masherysolar>
   I have no name!@toolkit:/$ export MYSQL\_PORT=<database port | default 3306>
   #Clear screen to remove password from screen
   I have no name!@toolkit:/$ tput clear
   I have no name!@toolkit:/$ MYSQL\_PWD=$MYSQL\_PWD mysql -h $MYSQL\_SERVICE\_HOST -u$MYSQL\_USER -P$MYSQL\_PORT --database=name $MYSQL\_DB < apim-le-db-data\_6.0.0.sql
   I have no name!@toolkit:/$ MYSQL\_PWD=$MYSQL\_PWD mysql -h $MYSQL\_SERVICE\_HOST -u$MYSQL\_USER -P$MYSQL\_PORT --database=name $MYSQL\_DB < apim-le-db-seeds\_6.0.0.sql
   I have no name!@toolkit:/$ MYSQL\_PWD=$MYSQL\_PWD mysql -h $MYSQL\_SERVICE\_HOST -u$MYSQL\_USER -P$MYSQL\_PORT --database=name $MYSQL\_DB < apim-le-db-token-purger-data\_6.0.0.sql
   I have no name!@toolkit:/$ MYSQL\_PWD=$MYSQL\_PWD mysql -h $MYSQL\_SERVICE\_HOST -u$MYSQL\_USER -P$MYSQL\_PORT --database=name $MYSQL\_DB < apim-le-db-token-purger-event\_6.0.0.sql
   I have no name!@toolkit:/$ MYSQL\_PWD=$MYSQL\_PWD mysql -h $MYSQL\_SERVICE\_HOST -u$MYSQL\_USER -P$MYSQL\_PORT --database=name $MYSQL\_DB < apim-le-db-expired-key-event\_6.0.0.sql
   ```
   

			
