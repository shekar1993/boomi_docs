# PDF connector message actions

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-b94ecffb-337f-4778-b56d-cd2fc7ba5638"/>
</head>


The PDF connector supports the following message action:

-   **Convert html to pdf**: This message action allows you to generate a PDF file from HTML.


## Inputs

This message action supports the following inputs, that allow you to configure the PDF filename, content, and layout options:

| Input value | Type    | Description                                                                                                                                                                                                                                                                                                                                                                       |
|-------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Filename    | string  | The filename for the generated PDF file.<br />Values can be merged into the filename. For example: `{{task.response.First}} {{Employee.Last}}`                                                                                                                                                                                                                                    |
| Page Size   | string  | Specify the size of the generated PDF. If no input value is set, the page size defaults to A4.<br />The following values are supported:<br />• A1 (594 x 841 mm)<br />• A2 (420 x 594 mm)<br />• A3 (297 x 420 mm)<br />• A4 (210 x 297 mm)<br />• A5 (148 x 210 mm)<br />• A6 (105 x 148 mm)                                                                |
| Landscape Pages | string | Specify the page orientation of the generated PDF, either landscape (horizontal) or portrait (vertical). If no input value is set, the page orientation defaults to portrait.<br />Mixed-page page orientation is not supported. The specified page orientation will be applied to the entire PDF document.<br />The following values are supported:<br />• portrait<br />• landscape   |
| Header      | string  | Enter HTML content into the default PDF page header (optional).<br />For example: `<div style="font-size:18pt;">PDF Header</div>`<br />The following values are supported, and can be used by specifying them as a class on an HTML element:<br />• date (formatted print date)<br />• url (document location)<br />• pagenumber (current page number)<br />• totalpages (total pages in the document)<br />For example: `Page <span class="pagenumber"></span>/<span class="totalpages"></span>` |
| Footer      | string  | Enter HTML content into the default PDF page footer (optional).<br />For example: `<div style="font-size:12pt;">PDF Footer</div>`<br />The following values are supported, and can be used by specifying them as a class on an HTML element:<br />• date (formatted print date)<br />• url (document location)<br />• pagenumber (current page number)<br />• totalpages (total pages in the document)<br />For example: `Page <span class="pagenumber"></span>/<span class="totalpages"></span>` |
| HTML        | string or Content | Enter the HTML content that will be converted into PDF format.<br />Although you can use a Content value link, invalid or non-standard HTML may be removed by the TinyMCE Editor, so it's recommended that you use a string value.<br />Values can be merged into the HTML content. For example: `<html><head><style>.head{}</style></head><body><h2>Response for xxx connector</h2><div>Data was last generated from Flow: {{task.response.Username}}</div><div>Date: {{Employee.JoinDate}}</div></body></html>` |



## Outputs

This message action supports the following outputs:

|Output value|Type|Description|
|:-----------|:---|:----------|
|Pdf file|Object|Select/create the `$File` object value in which to reference the generated PDF file. The value you select/create here should also then be the value that you select when setting up a PDF download page component. See [PDF component](flo-PDF_Component_439d39e9-d874-4a54-93cd-0be8200a9965.md).