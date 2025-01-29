# Creating a .zip File

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-cb58782b-6f41-4d8d-9a42-b6c4a53f7e5a"/>
</head>

## Before you begin

To create a valid .zip file, add the `assets`, `customizations.js`, and `translations.js` in a single folder. 

1. Create a `.zip` file of that folder. 

   `zip -rq ~/Documents/newest-customizations.zip ./`

2. Copy the extracted content under `<build location>/assemblies/portal/`.

3. Change the file permissions as follows:

   `chmod +x -R <build location>/assemblies/portal`

4. Updated permissions looks as follows:

```
-bash-4.2$ ls -l assemblies/portal/
total 23
drwxr-xr-x 3 nkohok svc_dev_mas_server_admins 5 Dec 17 2020 assets
-rwxr-xr-x 1 nkohok svc_dev_mas_server_admins 5457 Aug 6 2019 customizations.js
-rwxr-xr-x 1 nkohok svc_dev_mas_server_admins 15951 Aug 6 2019 translations.js
-bash-4.2$ 
```

5. Built the images and push them to container registry.

6. Deploy cluster by using the helm command.

7. Once the cluster is up and running, make sure that the changes are applied on developer portal.
