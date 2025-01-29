# Setting up SSL for the Teqtron Agile PLM connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c585bde2-c3bf-4119-88aa-8649eeeb8be0"/>
</head>


Follow these basic steps for setting up SSL. The steps provide a general guideline on how to generate the SSL certificates before you can apply for the Agile PLM Application server and other Agile PLM components like SDK and WebService samples.

1.  Generate and procure the security certificate for your setup as per your company’s policies.

2.  Create a keystore file named like mykeystore.jks which could be located on any disk path and containing a private key and a self-signed public key.

    1.  Go to the WLS domain directory and run setENV.cmd.

    2.  Run the following keytool command under the path of the keystore that you want to generate: `C:\CSR>keytool –genkey –keyalg RSA –alias mykey –keystore mykeystore.jks`

3.  Generate a Certificate Signing Request \(CSR\) and send it to Certifying Authority using the command: `C:\CSR>keytool –certreq –keystore mykeystore.jks`

4.  The CA returns with the certificate reply, RootCA, and sometimes an intermediateCA certificate. Installing the newly issued certificate normally involves installing it along with its certificate trust chain, which basically means installing \(or verifying prior installation of\) the certificates of \(a\) VeriSign's public primary root CA \(our trust anchor CA\) and \(b\) of our issuing \(intermediate\) SSL CA before \(c\) your newly issued SSL certificate is installed. In CA replying mails, we get the OraclePKI-SSLCA.zip file, newly issued SSL certificate.

5.  Assuming you get the certificates as a zip file, for example PKI-SSLCA.zip, it could contain the following set of certificates:

    -   root CA certificate: VTN-PCA-3G3.pem \(included in PKI-SSLCA.zip\)
    -   intermediate SSL CA certificate: \_SSL\_CA.pem \(included in PKISSL CA.zip\)
    -   newly issued SSL certificate: at the bottom of the mail "Your Standard SSL Certificate Is Ready", copy"-----BEGIN CERTIFICATE----- … …-----END CERTIFICATE-----" into a text file, and save as a .pem file myCert.pem
6.  Import the certificates into the keystore.

    -   By importing the certificates in an order of RootCA, intermediateCA and then Certificate reply
    -   By creating a certificate chain, clubbing them in order into a .pem file. In the following example, we create a certificate chain file CertChain.pem and import it into the identity keystore overriding the private key alias, which is mykey in this example. It is important to remember that the certificate can only be installed on the server that already has its corresponding private key present in its keystore. Additionally, it must be the same private key that was created during the CSR generation process described above\).
7.  Open a text editor and paste the contents of each certificate.

8.  Paste the certificate C:myCert.pem, B:\_SSL\_CA.pem, A:VTN-PCA-3G3.pem from top to bottom and save as CertChain.pem.

    ``` {#codeblock_dsr_dsg_wpb}
    -----BEGIN CERTIFICATE-----
    C: myCert.pem
    -----END CERTIFICATE-----
    B: SSL_CA.pem 
    -----END CERTIFICATE-----
    -----BEGIN CERTIFICATE-----
    A: VTN-PGA-3G3.pem 
    -----END CERTIFICATE-----
    
    ```

9.  Our server should be presenting the whole chain of certificates to its clients during the SSL handshake. Certificates are typically presented in the leaf to root order \(C-B-A\).

10. Import the certificates chain to the keystore by running following command: `C:\CSR>keytool –import –file CertChain.pem –alias mykey –keystore mykeystore.jks –storepass`

11. Create a trust keystore. Do this by importing your Root CA certificate into another keystore that constitutes the trust: `C:\CSR>keytool –import –file VTN-PCA-3G3.pem –alias rootca –keystore trust.jks –storepass`


Once you have completed these steps, [configure SSL on the WebLogic Server that hosts the Agile PLM application](int-Configuring_SSL_Weblogic_server_Agile_PLM_453f5452-d391-4c58-a87c-9efe8022cc5b.md).