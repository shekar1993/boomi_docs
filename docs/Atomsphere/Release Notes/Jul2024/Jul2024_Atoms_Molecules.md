# Atoms, Molecules, and Atom Clouds

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-b91fd192-cab5-4f21-a9b2-48c66ec72fa8"/>
</head>


**We added these features:**

- **Java updates**

  - Atom, Molecules, and Atom Cloud installers and upgraders are updated to Java version 11.0.23.9.1 
  (RUN-6854, RUN-7121)

- **Docker image updates - Published in [DockerHub](https://hub.docker.com/u/boomi)**

  - v3 and v5 images are updated to Java version 11.0.23.9.1
    - Java versions 11.0.21.9.1 and 11.0.22.7.1 are also available for v3 images

  - Alpine v5 images are updated to Alpine version 3.20.0

  - RedHat v5 image are updated to RHEL 9.4-949.1716471857
  
  (RUN-7195, RUN-7119, RUN-7120, RUN-7123) 


**We fixed these issues:**

- A setting of 100% on the `LowMemorythreshold` for Runtime Atoms can now be used to effectively disable Low Memory mode. (RUN-6543)

To learn more about this fix, refer to [Properties Panel, Advanced tab](/docs/Atomsphere/Integration/Integration%20management/r-atm-Properties_panel_Advanced_tab_c39737e8-1b16-4fdd-b414-152694364c14.md).

- While creating an Atom in an Atom Cloud, additional clicks on the OK button no longer create multiple atoms. (RUN-3493)

- The **Cloud Properties** title has been changed to **Account Properties** for the Cloud Molecule on the Account Properties panel. (RUN-6760)


