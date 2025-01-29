# Setting up PDF service with MCR

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-8cc48cc2-2f2e-4b8d-abcd-4c33200b4b2c"/>
</head>

You must set up a document store for the PDF document to be saved in order for the PDF service to function.

The connection to your Blob storage account has to be established by setting the following environment variables in the Docker container:

- ManyWho_BlobStorage_Hostname
- ManyWho_BlobStorage_Port
- ManyWho_BlobStorage_AccessKey
- ManyWho_BlobStorage_SecretKey

## Setting up Minio

If you need to use a self hosted local document store you can set this up using Minio as follows https://hub.docker.com/r/minio/minio/

https://min.io/

Add the following section to your local runtime docker installation file:

- **Image**: minio/minio
- **Command**: server /data

- **Environment**:

  ```
  MINIO_ACCESS_KEY: <insert-access-key>
  MINIO_SECRET_KEY: <insert-secret-key>
  MINIO_HTTP_TRACE: /tmp/trace.log
  ```

- **Ports**: - 9001:9000

- **Volumes**: - ../data:/data

Then in the same docker-compose file, add the following to the runtime section:

```
- ManyWho_BlobStorage_Hostname=minio
- ManyWho_BlobStorage_Port=9000
- ManyWho_BlobStorage_AccessKey=<insert-access-key>
- ManyWho_BlobStorage_SecretKey=<insert-secret-key>
```
