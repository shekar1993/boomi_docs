---
sidebar_position: 6
---

# Verifying the Installation

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-a7a6f20d-2eed-498b-83ff-74c21d6fdc18"/>
</head>

Once you have the Local Edition cluster running, you can optionally run these sanity tests as follows: 

1. Lookup platformapi service IP or FQDN and port. 

   ```
   $ kubectl get svc
   ```

2. You can use sample script to generate test configuration. Under extracted build, navigate to `samples/verification` folder and run the following script:

   ```
   $ ./data-setup.sh <platformapi ip/fqdn> <port>
   ```

   The script creates the test configuration and generates a sample curl call. This curl call is needed for making a traffic call.

   curl -v -H 'Host: calypsoqa.api.mashery.com' `http://<TM_SVC_IP>/testeng1325?api_key=123`

3. Run the delta loader job.

   a. Find the correct cronjob name.

      ```
      $ kubectl get cronjob
      ```

      The sample output is as follows: 

     ```
      NAME              SCHEDULE         SUSPEND     ACTIVE       LAST SCHEDULE        AGE

      loader-job-delta    \*/15 \* \* \* \*   False        0               7m4s             12h

      loader-job-full     0 0 \* \* \*      False        0               6h22m            12h
      ```

   b. Run the delta loader job 

      ```
      $ kubectl create job --from=cronjob/<delta-job-name> post-install-test-job
      ```

4. Run the curl command from step 2 output.

   Lookup trafficmanager service IP or FQDN and port

   ```
   $ kubectl get svc

   NAME                TYPE           CLUSTER-IP        EXTERNAL-IP      PORT(S)     AGE

   trafficmanager-svc  LoadBalancer    10.60.27.52      34.69.56.9 80:31347/TCP,443:32436/TCP,8083:31833/TCP                     24h

   $ curl -v -H 'Host: calypsoqa.api.mashery.com' http://<TM external ip>/testeng1325?api\_key=123
   curl -v -H 'HOST: calypsoqa.api.mashery.com' http://34.69.56.91/testeng1325?api\_key=123
   it must give 200 OK, sample call output.

   \*   Trying ::1...
   \* TCP\_NODELAY set
   \*   Trying 127.0.0.1...
   \* TCP\_NODELAY set
   \* Connected to localhost (127.0.0.1) port 9081 (#0)
   > GET /testeng1325?api\_key=123 HTTP/1.1
   > Host: calypsoqa.api.mashery.com
   > User-Agent: curl/7.61.1
   > Accept: \*/\*
   >
   < HTTP/1.1 200 OK
   < X-Mashery-Responder: trafficmanager-deploy-5c47447d87-24nq2
   < Date: Fri, 27 Oct 2023 09:00:03 GMT
   < Content-Type: text/html;charset=utf-8
   < Connection: keep-alive
   < Server: Apache/2.2.15 (CentOS)
   < X-Powered-By: PHP/5.3.3
   < Content-Length: 25
   <
   \* Connection #0 to host localhost left intact
   ```

See also,

- [Pod Topology constraints](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/)

- [K8s best practices of spreading nodes across zones.](https://kubernetes.io/docs/setup/best-practices/multiple-zones/)

- [Fluent-bit Output channels](https://docs.fluentbit.io/manual/pipeline/outputs)

- [Fluent Bit K8s](https://docs.fluentbit.io/manual/installation/kubernetes)
