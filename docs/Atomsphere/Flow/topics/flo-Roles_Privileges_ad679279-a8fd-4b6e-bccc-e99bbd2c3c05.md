# User role privileges

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-ad679279-a8fd-4b6e-bccc-e99bbd2c3c05"/>
</head>


Administrator and Standard user roles possess a different set of privileges to control user access to tenant functionality.

The following table details the privileges for each tenant user role.

-   **Included**: The user role can access this tenant functionality. For example, navigating to the relevant page within or interacting with it via the API.

-   **Excluded**: The user role cannot access this tenant functionality. For example, when a Standard user signs in to a tenant, they cannot access the tenant or Organization settings, either through the **Settings** menu in the user interface or via the API.


|Privilege|Description|Administrator|Standard user|
|---------|-----------|-------------|-------------|
|Flows|Access to the main **Flows** page, functionality, and API endpoints. See [Flows](c-flo-Flows_Overview_263d2c58-b3b9-463b-92c3-b828eb3362ea.md).|![C](../Images/img-flo_check_mark.png) |![C](../Images/img-flo_check_mark.png) |
|Pages|Access to the **Page Layouts** page, functionality, and API endpoints. See [Pages](c-flo-Pages_Overview_15c245e1-5232-4173-8a85-dae7ea7f060b.md).|![C](../Images/img-flo_check_mark.png) |![C](../Images/img-flo_check_mark.png)|
|Values|Access to the **Values** page, functionality, and API endpoints. See [Values](c-flo-Values_f83f964c-1348-475d-80b1-480daef433f7.md).|![C](../Images/img-flo_check_mark.png)|![C](../Images/img-flo_check_mark.png)|
|Connectors|Access to the **Connectors** page, functionality, and API endpoints. See [Connectors](c-flo-Service_Integrations_cac4d712-9607-4f24-8e70-aae48ceb27b9.md).|![C](../Images/img-flo_check_mark.png)|![C](../Images/img-flo_check_mark.png)|
|Assets|Access to the **Assets** page, functionality, and API endpoints. See [Assets](c-flo-Assets_7d21c82d-c700-437d-bdaa-ae4b0716726b.md).|![C](../Images/img-flo_check_mark.png)|![C](../Images/img-flo_check_mark.png)|
|Organization|Access to the **Organization Settings** page, functionality, and API endpoints. See [Organizations](flo-Organizations_bd4d88aa-6da0-471a-b0bb-4ac481804747.md).|![C](../Images/img-flo_check_mark.png)| |
|Tenant|Access to the **Tenant** page, functionality, and API endpoints. See [Tenants](c-flo-Tenants_770f70ef-b441-4f1b-b565-2f87430e28f2.md).|![C](../Images/img-flo_check_mark.png)| |
|Flow Library|Access to the **Flow Library** page and functionality. See [Flow Library](c-flo-Flow_Library_a477c269-4a2e-4a73-a0c8-c8145105e449.md).|![C](../Images/img-flo_check_mark.png)|![C](../Images/img-flo_check_mark.png)|
|API|Access to the **API tool** page and functionality. See [API tool](c-flo-APItool_95ad682d-ce04-494a-9235-e113a89406bc.md).|![C](../Images/img-flo_check_mark.png)| |
|Import/Export|Access to the **Import/Export** page, functionality, and API endpoints. See [Importing and exporting flows](c-flo-Import_Export_60fc4afb-d0dd-43fa-976e-d23a79dd0c24.md).|![C](../Images/img-flo_check_mark.png)|![C](../Images/img-flo_check_mark.png)|
|Players|Access to the **Players** page, functionality, and API endpoints. See [Players](c-flow-Players_931f82a8-0725-4dc3-b965-f606330dc5a6.md).|![C](../Images/img-flo_check_mark.png)|![C](../Images/img-flo_check_mark.png)|
|Macros|Access to the **Macros** page, functionality, and API endpoints. See [Macros](c-flo-Macros_b108573d-8668-4d4f-aab3-79fb49adcc3f.md).|![C](../Images/img-flo_check_mark.png)|![C](../Images/img-flo_check_mark.png)|
|Dashboards|Access to the **Dashboard** page and functionality. See [Dashboard](c-flo-Dashboard_4f5270f0-9144-4ab7-8cef-d8007c075190.md).|![C](../Images/img-flo_check_mark.png)|![C](../Images/img-flo_check_mark.png)|
|Auditing|Access to the **Auditing** page and functionality. See [Auditing](flo-Auditing_f31eb0a6-b159-4a34-90cb-1ddc1369b976.md).|![C](../Images/img-flo_check_mark.png)|![C](../Images/img-flo_check_mark.png)|

:::note

Only tenant Administrators can publish a flow to a local runtime using the **Publish** Form; Standard users do not have the local runtime environment drop-down available. See [Publishing flows to a local runtime](c-flo-MC_Using_Runtimes_9e275eed-016b-4f58-a4c5-35d2249603e8.md).

:::