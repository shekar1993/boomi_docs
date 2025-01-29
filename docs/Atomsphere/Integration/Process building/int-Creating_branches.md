# Creating branches

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-cf3f7314-2ae1-445c-9b0a-ad82905b74a9"/>
</head>

Boomi recommends using the main branch for production-ready code. Creating branches gives you the ability to develop and test integrations without disrupting production processes.

When you create a new branch, it duplicates everything from the source branch (main, by default).

:::tip

Folders are global to your account, so if you create folders in one branch, they will display in all branches.

:::

To create a new branch, open Branch Management and click **Create New Branch**--the Create Branch dialog box displays.

<iframe width="700px" height="400px" src="https://embed.app.guidde.com/playbooks/uZzakqsfUPiAV3cFDgD6XK" title="Create a branch" frameborder="0" referrerpolicy="unsafe-url" allowfullscreen="true" allow="clipboard-write" sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"></iframe>

1. Pick a source branch from the drop-down menu. You can create a branch from any of your existing branches.

2. Enter a name for the branch.

3. (Optional) Enter any information, such as the purpose of the branch, that you want to include in the **Branch Notes** section.

4. (Optional) Check **Make this your default branch** to make this branch your preferred working branch.

  :::note

  If you delete your default working branch, `main` becomes the new default.

  :::

5. Click **Create**.

After you create the branch, it displays in the list of branches in Branch Management and shows a *Pending* status until the branch is ready to use. The time it takes for a branch to be *Available* depends on the number of components you have. You can create up to 20 branches.

:::note

If you need more than 20 branches, contact Boomi Support to request the branch limit to be raised. The maximum number of branches is 100.

:::

## Create a hotfix branch

A hotfix branch is a special branch created from a packaged component, either directly or through a deployment. Hotfixes are intended to fix a specific issue and to be created and merged quickly.

<iframe width="560" height="315" src="https://www.youtube.com/embed/65zYTtqUtSM?si=GEi6TBpLUA0j7jtz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

:::tip

You can create a branch from any packaged component version.

:::

1. Navigate to the Packaged Components page (**Deploy** \> **Packaged Components**) or the Deployments page (**Deploy** \> **Deployments**).

2. Click the **Actions** icon for the packaged component or deployment from which you want to create a branch and select **Create Branch from Packaged Component** or **Create Hotfix Branch from Deployment**.

   The Create New Branch dialog box displays. Follow the instructions in the previous section to create the branch.

   :::note

   By default, the source branch will be your account's main branch.

   :::

## Next steps

[Merging branches](./int-Merging_branches.md)
