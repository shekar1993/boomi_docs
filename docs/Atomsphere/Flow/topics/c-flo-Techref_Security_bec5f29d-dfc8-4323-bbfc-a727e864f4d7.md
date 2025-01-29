# Security 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-bec5f29d-dfc8-4323-bbfc-a727e864f4d7"/>
</head>


Flow is built for enterprise applications, and is architecturally designed to be a highly secure platform.

has a comprehensive compliance and security program, that meets or exceeds several industry standards; we also conduct periodic third-party security audits.

## Compliance 

Boomi complies to all standards and regulations that help to protect data across all parties, giving customer peace of mind in their governance, risk and compliance. See [Compliance](r-flo-Techref_Security_compliance_e76eff07-c4a5-426f-b810-ed5c935671fe.md).

## Data handling 

customer data is classified into either Configuration Data or Business Data. See [Data Handling](r-flo-Techref_Security_data_b0044f19-b7ff-4f8c-8632-18226017ec4a.md).

## AWS Platform 

operates on an Amazon Web Services \(AWS\) platform; this provides a multi-region infrastructure to elastically scale, provide enterprise-grade high availability and consistently deliver peak performance to every customer, in any country. The Boomi Flow AWS infrastructure puts strong safeguards in place to help protect customer privacy. Data is stored in our highly secure AWS data centers.

Our in-house AWS experts utilize a broad set of AWS technologies to create the perfect platform. By combining our knowledge of running large scale cloud platforms with AWS’s IaaS we are able to offer every customer world class performance and security. Further information about AWS security can be found at [aws.amazon.com/security](https://aws.amazon.com/security/).

## Access Control 

There are 2 user roles in the platform, either a ‘Standard user’ or an ‘Administrator’.

## Administration 

-   TechOps engineers manage the servers via a VPN with 2FA authentication.

-   Access to the AWS Console requires 2FA over TLS.

-   AWS Console passwords have a minimum length of 24 characters.

-   AWS Console access passwords expire after 60 days. Any of the previous 24 passwords cannot be used.

-   System commands require sudo/su to be executed.


## Administrator/Operator Logs 

-   Administrator activities are logged to the SIEM.

-   Alerts are created when abnormal/unexpected activities occur.


## Application Security 

-   Code is only worked on by Boomi Flow developers.

-   Every commit has static analysis run against it for the backend code.

-   QA regression test every release.


## Authentication 

-   uses bcrypt to hash user passwords.

-   locks a user’s account after 3 failed login attempts.

-   implements SAML.

-   Users must obtain a JWT from the authentication API to be able to access their data.

-   Data is only accessible when logged into the tenant that owns the data.


## Backups 

-   Full backups of the platform database are taken twice daily alongside constant streaming WAL archives.

-   Database pods are frequently killed and restored using PITR from the backups. This recreates the database from the backups. If it fails, Boomi Floware notified via the monitoring that the database failed to start.

-   Backups are replicated to Google Cloud Storage daily.


## Capacity Management 

-   Resources are monitored via Prometheus/Grafana and adjustments are made to address resource requirements.

-   Alerts are triggered if resources reach high levels of usage.

-   Applications have individual resource requirements and limits provided by Kubernetes.


## Change Management 

-   All changes to the platform must have an associated JIRA ticket to document and track the change.

-   Changes must be reviewed by a minimum of one other Boomi Flow staff member.


## Clock Synchronisation 

Servers are all configured to use the global NIST NTP server address.

## Encryption 

-   Network communication between customers and the platform is encrypted via TLS.

-   Every tenant in the platform has a unique encrypted private key which is used when customers take advantage of external storage.

-   AWS KMS is used for encryption at rest in some parts of the system.


## Environments 

-   Environments are kept separate from each other via AWS VPCs and regions.

-   Each environment has its own VPC which holds all the resources required for the platform.

-   Environment VPCs are peered to the management VPC for monitoring purposes.


## Event Logging 

-   Infrastructure events are logged and reviewed in the SIEM.

-   Alerts are triggered for abnormal events.


## Incident Response 

-   Incidents involving platform/infrastructure are immediately acted upon as a top priority to restore service.

-   As soon as a fix is ready and tested, it is deployed.


## Infrastructure Security 

-   The platform is hosted on AWS.

-   AWS is completely responsible for physical and environmental security including:

-   Power

-   Climate & temperature

-   Fire detection and suppression

-   Surveillance


## Logging Protection 

-   Logs are stored in the SIEM which has user and permission management.

-   Once logs are stored within the SIEM they are read-only to prevent tampering.


## Malware Protection 
-   Hosts will run Snort and OSSEC to detect the presence of unknown files.

-   Weekly ClamAV scans are performed to detect and quarantine malicious files.

-   The platform will scan uploaded files via ClamAV.

-   If a scan detects a malicious file, operations will be notified via the SIEM.


## Network/Host Security 

-   Hosts do not have public IP addresses and must be accessed via the VPN inside the VPC network.

-   Instances are scanned using OpenSCAP to detect vulnerabilities.

-   Customer file uploads are virus scanned using an up to date signature database.

-   All system level logs are forwarded to the SIEM.


## Operational Software 

-   Software installation is handled with IAC \(Infrastructure as Code\) and is stored under version control.

-   Any additional software must be added through the version control system and approved by at least one other operator.

-   Base images are frequently updated with the latest security patches.


## Redundancy 

All applications and services must have a minimum level of redundancy to ensure that if one instance goes down, the platform as a whole in unaffected.

## Resiliency 

-   has an RTO of 5 hours and an RPO of 5 minutes after declaring an emergency.

-   Backups are stored in both AWS S3 and Google Cloud Storage.

-   Full backups are taken twice daily as well as constant WAL storage.

-   Hosts will implement Snort to detect and protect against DDoS.

-   The status of the platform is publicly communicated via the Boomi Flow status page.


## Vulnerability Management 

-   Instances are scanned monthly for vulnerabilities using OpenSCAP.

-   Unattended upgrades ensure that hosts are kept up to date with security patches.

-   CVE’s are monitored and addressed as soon as fixes become available.

-   Files uploaded to the platform are scanned using ClamAV with an up to date database.