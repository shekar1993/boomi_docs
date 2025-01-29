# Running statistics (Tech Preview)

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-88afdc1c-1abb-4cea-9b23-bae3c10d264d"/>
</head>

The Statistics tab lets you analyze golden record metadata statistics for each deployed Boomi DataHub model (domain) in a repository.  

The **Run Statistics** button lets you generate statistics. You can see the user name, date, and time of the last completed statistics job to identify the age of the profiled data. You can run statistics once every 24 hours to refresh the data so that statistics are based on the most recent domain updates.

Read [Viewing golden record field statistics](/docs/Atomsphere/Master%20Data%20Hub/Stewardship/hub-Viewing_golden_record_field_statistics.md) to learn the benefits of the Statistics tab and how analyzing statistics helps your organization.

## Before you begin

To run statistics for golden record metadata, you must have the **MDM - Repository Management** privilege. 

To view golden record metadata statistics, you must have the following privileges: **MDM - View Data** and **MDM - View Repositories**. 

Read [Setting up user accounts and access](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/r-mdm-User_Management_5f47b2da-d5cc-4c88-bdfd-0a255d69323a.md) to learn more about setting user permissions.

## Running statistics 

1. Navigate to **Repositories** and select the repository.
2. Select the domain.
3. Select the **Statistics** tab. 
4. Click **Run Statistics** to generate golden record metadata for a deployed Hub model. You cannot specify which records to use or specify a source when generating statistics. Boomi DataHub creates statistics for a random portion (sample) of the golden records if the domain (deployed Hub model) contains more than 100 records. Sample size (amount of golden records) is determined according to the following rules:
   - Sample size is 20% of the golden records in the domain.
   - If 20% is greater than 20,000 records, Boomi DataHub limits the sample size to 20,000 records. 
   - If 20% is less than 100 records, Boomi DataHub increases the sample size to 100 records.
<br/><br/>
Running statistics may take up to 30 minutes to complete. You can run statistics once every 24 hours. 

### Next steps: Read [Viewing golden record field statistics](/docs/Atomsphere/Master%20Data%20Hub/Stewardship/hub-Viewing_golden_record_field_statistics.md)
