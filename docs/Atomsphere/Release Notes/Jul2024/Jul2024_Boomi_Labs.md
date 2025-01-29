# Boomi Labs 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-758b96f4-4cf7-494a-b1cc-ad6e7b7073b3"/>
</head>

## Spaces

**We added these features:**


- Implemented a new validation on the Data Map selection page to enhance user experience and prevent errors. The **Apply** button will now only be enabled and clickable when you have selected a map value. If no target field is selected, the **Apply** button remains disabled, ensuring you complete the necessary selections before proceeding. (SPACES-227)

- Enhanced the **Schedule** functionality in the UI to improve user experience. Upon clicking the schedule for the first time, the system automatically expands the schedule section. You can add more schedules by clicking the **Add Schedule** button. If the default expanded schedule is no longer required, you can delete it, and clicking on the schedule again will re-expand it. (SPACES-383) 

- Implemented an update to enhance the handling of process and property names. The system now displays up to 65 characters for a process name. If a name exceeds 65 characters, the system trims it and adds an ellipsis to indicate truncation. Additionally, when you hover over a truncated process name, the system highlights the full name to provide complete visibility. (SPACES-336, SPACES-382)

-  Moved the **Save** and **Cancel**  buttons from the bottom of the screens to the top, ensuring consistency with the overall Platform user experience. (SPACES-60) 

- Installing any integration pack now disables checkboxes for unattached atoms for specific environments, preventing you from selecting them. Disabled options are marked with a caution icon and labeled 'Atom(s) Not Attached,' ensuring clarity and accuracy in the selection process. (SPACES-450)

- Made several visual enhancements to the Spaces UI to improve the aesthetic and user experience. (SPACES-384, SPACES-451)

- You now have access to a new **Launch Space** button in the Spaces Admin UI, allowing you to launch the Spaces Consumer UI. When admins create a Space, the system generates a hyperlink for that space. You can find this hyperlink under the **Actions** tab in the Spaces list on the Admin Interface page. (SPACES-500)

- The **Space Information** page now includes a **Launch Space** button, enabling you to navigate to a new tab and launch the current Space directly. (SPACES-625)


## Partner Submissions

We are excited to announce the release of the Partner **Submissions** page on the Boomi Enterprise Platform in July. This page, designed for our technology partners, is under the **Labs** tab on the Enterprise Platform. 

The new submission experience streamlines the [Boomi Discover](https://discover.boomi.com/) recipe review and publishing process for Technology Partners by facilitating efficient and effective interactions with the Boomi team. To find out more about the Technology Partner Program and sign up to publish with Boomi, check out this [page](http://boomi.to/tpp). 

**Key Highlights**:

- **Submissions Tool**: This tool minimizes manual intervention and accelerates the recipe submission process. Partners can create, monitor, and manage their recipe submissions seamlessly from start to finish. They can track progress in real-time and ensure a faster time for recipe publication.

- **Submission Process**: Partners start by setting up their Publisher details, such as company name and logo, which unlocks the capability to begin new recipe submissions. The submission system guides partners through each necessary step, from providing recipe details, assigning tags for the effective categorization of recipes, uploading demo recordings, to highlighting key features.

- **Submission Stages**: Partners can view their recipe submission progress through several stages: Draft, Awaiting Approval, Action Needed, and Published. Each stage represents a specific phase in the review and publication process, helping partners understand precisely where their submission stands at any given time.

- **Feedback Mechanism**:  The feedback mechanism plays an integral role in the submission process, facilitating seamless communication between partners and administrators. Admins provide notes through the Submission UI, outlining specific areas that need revision or improvement.

- **Email Notifications**: Automated email notifications keep partners informed about their submission status. Notifications are sent in the following scenarios: 
  - Submission approved and published
  - Submission reviewed and not approved

:::note

The Partner Submissions tool will be available a few days after the Platform release. 

:::