# Branch and Merge FAQ

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7f7a8788-6684-40bb-92c1-87f186679dca"/>
</head>

**Why do I have a main branch?**

By default, all Boomi accounts have a main branch, regardless of if Branch and Merge is enabled. Enabling the feature exposes this existing branch to all users so they can create child branches to isolate development efforts.

**How should I use this feature?**

We encourage all users to treat their main branch as their production branch so that additional branches can be dedicated for development and testing. When ready, those branches can be merged into the main branch for deployment.

**Can I roll back a merge?**

Currently, you cannot roll back a merge after it has completed. This capability will be added in a future release.

**How does this feature work without creating new components?**

When you create a branch, virtual copies of all components in the parent branch are created in the new branch. These copies remain independent in their respective branch until merged back into the parent branch. Component IDs are never duplicated.

**Can I change the strategy for a merge after the fact?**

You can change the merge request strategy after you create a merge, however the previous merge request will be deleted and a new one created.

**I've made changes to components while a merge request was open. Why aren't they being reflected?**

The merge review performs a moment-in-time analysis of all components between the source and destination branches. Any changes to components made after the merge request was opened will not be reflected unless a new merge request is created. The platform indicates when a change is made to a component while a merge request is in progress. If you choose to continue saving the component, the existing merge request will be deleted.

**I never see the branch status column change. Is something wrong?**

The status column in Branch Management updates when a new branch has been created or a merge is in progress. On average, these actions complete so quickly that you might not see the status change.

**How many branches can I create?**

You can currently create up to 20 branches per account.

**Is there an API?**

Yes, you can use the [Branch object](https://developer.boomi.com/api/platformapi#tag/Branch) and [Merge Request object](https://developer.boomi.com/api/platformapi#tag/MergeRequest) to work with branches using the API.
