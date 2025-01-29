# Upgrading local runtimes

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-f05f9ac3-07b1-48cc-89b6-c1b4aafa344c"/>
</head>

This topic provides guidance for upgrading to a new version of a local runtime.

:::caution

To ensure the best performance and follow best practices, it is recommended to use the most current version of the runtime available. Upgrades to the runtime are designed to be as user-friendly as possible, and any migrations or schema changes will be handled by the runtime itself on startup. If you encounter any technical difficulties, ensure that you have updated to the latest local runtime, and re-deploy any flows that you have encountered issues with. Boomi requires all issues to be reproduced using the most current version of the runtime available before opening a support ticket.

:::

## Upgrading to the latest version

The latest version of the runtime can be retrieved using the `boomi/flow:latest` tag.

When upgrading to the latest version using the `:latest` tag from your registry \(Docker Hub for example\), the `:latest` tag will need to be pulled twice. For example:

```
docker-compose down && docker-compose build --pull && docker-compose up -d
```

- `docker-compose build` should only be used if you are building images locally from [Dockerfiles](https://docs.docker.com/engine/reference/builder/).

- The `--pull` command is used to ensure that the latest base image is pulled down, for example:

  ```
  FROM boomi/flow:latest
  RUN example-command
  CMD ["/example/command"]
  ```

- If you already have an old version of `boomi/flow:latest`, this will be used unless you add the `--pull` flag so that it pulls this before building your image.

- `docker-compose pull` will pull every image for every service in your `docker-compose` file. This means that it will also update the `postgres` image. You can specify a single service to pull using:

  ```
  docker-compose pull runtime
  ```

## Upgrading to a specific fixed version

When upgrading, you can specify a fixed version instead of `latest`, if you prefer to view and better understand the changes that will be applied during the upgrade.

Upgrading to a specific new version of a local runtime can be performed by changing the version number in your deployment manifests, and then performing a restart of all runtime instances.

For example:

```
--- a/deployment.yml
+++ b/deployment.yml
@@ -7,4 +7,4 @@
     spec:
       containers:
       - name: runtime
-    image: boomi/flow:2019.06.04T1110
+    image: boomi/flow:2019.07.16T1534
```
