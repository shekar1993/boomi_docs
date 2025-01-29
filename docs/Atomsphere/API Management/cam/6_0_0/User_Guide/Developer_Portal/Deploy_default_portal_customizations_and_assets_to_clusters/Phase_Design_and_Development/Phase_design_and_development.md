---
sidebar_position: 1
---

# Phase: Design and Development

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-5f4f994a-5589-4bb1-9374-d116e7fdde60"/>
</head>

During design and development of your Developer Portal, you need the ability to quickly and easily see your work render in your test cluster. To help you with testing, `stage-portal-customizations` is a new command for the Cluster Manager CLI utility tool.

## *stage-portal-customizations* CLI command

This CLI command can be invoked with a single parameter - a valid path to a .zip file somewhere in your tml-cm container that adheres to the [.zip file 'contract'](../../Deploy_default_portal_customizations_and_assets_to_clusters/Phase_Design_and_Development/Zip_file_contract_details.md), which asks for the following: 

- a single .zip file contains any or all of the following types of file in the root of the .zip files' folder structure: 

  - (1) file named `customizations.js` - used for [template customizations](../../Advanced_customizations_devportal/Modify_templates_and_layouts/Modifying_templates_and_layouts.md).

  - (1) file named `translations.js` - used for [translation customizations](../../Advanced_customizations_devportal/Translations/Translations2.md)

  - (1) folder named `assets` - contains any arbitrary hierarchy of folders with files in them; the files can be served into your portal templates/pages by using the Files API. 

## How to create a valid .zip file

1. Assemble your assets, `customizations.js` and `translations.js` into a single folder on the machine where the mods were made. 

   For example: 

   ```
   yournamehere@My-MacBook-Pro:~/code/new-customizations|
   ⇒ ls -al
   total 48
   drwx------ 5 yournamehere staff 160 Sep 17 17:49 .
   drwx------+ 694 yournamehere staff 22208 Sep 17 16:43 ..
   drwxr-xr-x@ 5 yournamehere staff 160 Sep 17 17:29 assets
   -rw-r--r--@ 1 yournamehere staff 5457 Aug 6 11:53 customizations.js
   -rw-r--r--@ 1 yournamehere staff 15951 Aug 6 11:53 translations.js
   ```   

2. Create a .zip file of that folder. 

   For example: 

   ```
   yournamehere@My-MacBook-Pro:~/code/new-customizations|
   ⇒ zip -rq ~/Documents/newest-customizations.zip ./*
   ```

3. Copy the .zip file to your `tml-cm` container. 

   For example: 

   ```
   yournamehere@My-MacBook-Pro:~/code/new-customizations|
   ⇒ docker cp ~/Documents/newest-customizations.zip
   a9aeb2b3f81a:/tmp/customizations.zip
   ```   

4. Launch a Bash shell to that container from your local machine. 

   For example: 

   ```
   yournamehere@My-MacBook-Pro:~/code/new-customizations|
   ⇒  docker exec -it a9aeb2b3f81a /bin/bash
   ```

5. Executing the Cluster Manager `stage-portal-customizations` command. 

   For example: 

   ```
   [root@a9aeb2b3f81a mashery]# clustermanager stage-portal-customizations /tmp/customizations.zip
   Unzipped:
   /opt/mashery/portal/assets
   /opt/mashery/portal/customizations.js
   /opt/mashery/portal/translations.js
   /opt/mashery/portal/assets/images
   /opt/mashery/portal/assets/images/logo.svg
   /opt/mashery/portal/assets/custom.css
   ```

The Cluster Manager CLI prevents you from submitting a `.zip` file with contents that do not adhere to these constraints, with an actionable error message to guide the remedy. 
