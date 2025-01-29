# Processing Group components 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-F666ABC9-DF80-4360-99DB-AFDE7213F146"/>
</head>


Save time when working with multiple trading partners by building Processing Groups to which you add, change, or remove trading partners in one location, instead of editing individual Trading Partner step lists one-at-a-time, and without touching the process logic.

Processing groups support multiple communication methods and any standard. Trading Partners are still standard-specific, but you can group them by organization for reporting and to share metadata like contact information.

You can create processing groups on the Build tab by clicking **Create New** and selecting **Processing Group** from the list. Optionally rename your new Processing Group component.

Because Processing Groups are deployed independently, you must deploy them in order for them to be used in a process. Each Trading Partner in a deployed Processing Group uses a trading partner connection license. To deploy a Processing Group, go to the **Deployments** page.

Because Processing Groups are deployed independently, you must deploy them in order for them to be used in a process. To deploy a Processing Group, go to the **Deployments** page.

**Note:** For Legacy deployment, go to the **Deploy** page and select **Processing Groups** from the components list.

To use a Processing Group in a process, open the Start step that is set to the Trading Partner option or the Trading Partner step. Then, select **Use a Processing Group component** and chose your Processing Group component from the drop-down list.

Routing is faster and easier with processing groups. You can specify a process group with the Process Route step and thereby eliminate the need for keys. And with built-in route inheritance you only need to specify overrides.

## Processing Group members 

The Members tab of the Processing Group component allows you to **Add a Trading Partner** to the list.

## Processing Group routes 

The Routes tab of the Processing Group component allows you to specify how to structure the routes and which process is called when the Processing Group component is specified in a Process Route step.

If all your trading partners use a standard structure, the routes should be structured on documents. Then, the few partners that do not use a standard document format can call a different process. You need to specify these individually using the **Add Standard** option.

If the documents do not use a standard structure, the routes should be structured on partners. When the route is structured on partners, individual trading partners can be set to use their own process and individual Document Standards and Document Types can be set to use other processes instead of the default.