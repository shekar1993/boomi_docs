# Publish screen 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-26762ca7-b103-4f2a-b416-c6ddcba8d2f8"/>
</head>


Access the Publish screen by clicking **Publish** in the navigation menu.

This screen provides a list of all of the Developer Portals you have in your account. Each API Gateway has one associated Developer Portal. The table of Developer Portals includes the following information:


**Portal Name** <br />
The internal name of the Developer Portal.

**Gateway**  
The API Gateway that hosts the Developer Portal. There is a 1-1 correlation of the Developer Portal to API Gateway.

**Environments**  
The environment attached to the API Gateway.

Click on a Portal Name to open the Developer Portal's Portal Settings. The Settings pages allows you to customize the Title, Homepage, and Theme for your Developer Portal.

## Title and Homepage 

Use this page to set the internal and published names for the Developer Portal as well as a welcome message on the landing page.


**Internal Name**  
The internal name for this Developer Portal. This name displays on your list of Developer Portals on the Publish screen.

**Published Name**  
The title that your Developer Portal users see when they navigate to the Developer Portal.

**Welcome Message**  
The message your Developer Portal users see on the landing page to the Developer Portal.

:::note

Using the rich text editor for the welcome message limits the HTML tags to only those that we support.

If you use the Source mode, you can enter any HTML tag, but any tag that we do not support is removed when you switch back to the rich text editor.

If you use Source mode to enter HTML tags that we do not support and click **Save** in Source mode without switching back to the rich text editor, the change is rejected with with an error message.

:::

The supported HTML tags for the welcome message include:

- **`a href=""`** - Valid URL link, complete with `http://` or `https://`, email link, or phone number link. Optionally, include `title="".`

 - **`blockquote`** - Block quote.

- **`dl`, `dt`, `dd`** - Description list, description term, description definition.

- **`em`** - Emphasis.

- **`h1`, `h2`, `h3`, `h4`, `h5`** - Heading 1 through 5. The heading order is enforced. The Published Name is an `h1` heading so your welcome message can start at `h2`. Otherwise, you must step down the heading numbers in order. Jumping from an `h1` to an `h3` will cause an error. When moving back to a higher level, there is no order requirement.
 
- **`hr`** - Horizontal rule.

- **`i`** - Italic.

- **`img src="" alt=""`** - Image from a valid URL source file. The URL must begin with `http://` or `https://`. The `alt=""` attribute is required. If you chose to leave it empty, a warning message is returned.

- **`ol`, `ul`, `li`** - Ordered and unordered list.

- **`p`** - Paragraph.

- **`strong`** - Strong.

- **`sub`** - Subscript.

- **`sup`** - Superscript.

- **`u`** - Underline.

 Within the `p` and `li` tags, the following styling properties are supported:

- **`text-align: left`, `text-align: center`, `text-align: right`**  
Align the text to the left, center, or right.

Within the `img` tag, the following styling properties are supported:

 **Alignment properties**  
The following alignment properties are supported:

 -   `float: left` - Aligns the image on the left.

-   `float: center` - Aligns the image in the center.

 -   `float: right` - Aligns the image on the right.


**Border properties** <br />
The following border properties are supported:

 -   `border` - Sets the image border. You can also set each side of the border individually using `border-top`, `border-right`, `border-bottom`, and `border-left`.

 -   `border-width` - Sets the width of the image border. You can also set each side of the border width individually using `border-top-width`, `border-right-width`, `border-bottom-width`, and `border-left-width`.

  -   `border-style` - Sets the style of the image border. You can also set each side of the border style individually using `border-top-style`, `border-right-style`, `border-bottom-style`, and `border-left-style`.

  -   `border-color` - Sets the color of the image border. You can also set each side of the border color individually using `border-top-color`, `border-right-color`, `border-bottom-color`, and `border-left-color`.

  -   `border-radius` - Sets the radius of the image border. You can also set each side of the border radius individually using `border-top-left-radius`,`border-top-right-radius`, `border-bottom-right-radius`, and `border-bottom-left-radius`.


 **Dimension properties** <br />
The following dimension properties are supported:

 -   `height` - Sets the height of the image.

 -   `width` - Sets the width of the image.


 **Margin properties** <br />
The following margin properties are supported:

 -   `margin` - Sets the image margin.

 -   `margin-top` - Sets the image margin on the top.

 -   `margin-bottom` - Sets the image margin on the left.

 -   `margin-left` - Sets the image margin on the left.

 -   `margin-right` - Sets the image margin on the right.


## Environments

Use this page to set the Published Name for the environments associated with the Developer Portal.

**Environment Name**  
The internal name of the environment, specified on the Environment panel within Atom Management in Integration.

**Published Name for Environment**    
The published name on your Developer Portal. This is the environment name that your Developer Portal users will see.

To provide an Environment filter on your Developer Portal, select **Provide an Environment filter on the API Catalog page in the Developer Portal**.

## Theme 

Use this page to set the colors and logo for the Developer Portal.

**Theme Colors**  
The color palette for the Developer Portal.

:::caution

If you select colors that do not meet the WCAG color contrast ratios, you will receive a warning because these color combinations might make your site too difficult to read or use for some users. You can continue without correcting the contrast ratio errors, but may incur risk by breaking your local accessibility laws or business guidelines. We recommend adjusting the colors so that they meet the WCAG color contrast ratios.

:::

 The colors that you can set are:

 -   Site Background Color - The background color of the Developer Portal's API Catalog, Applications, and Subscription pages.

 -   Content Background Color - The background color of the main Developer Portal.

 -   Border Color - The border color on tiles within the Developer Portal.

 -   Primary Text Color - The primary text color.

-   Link Text Color - The text color for links.

 -   Selected Item Color - The focus color to identify the selected item.

 -   Heading Color - The text color for headings.


**Site Logo**  
The logo and alternative text that your Developer Portal users see when they navigate to the Developer Portal. Your site logo is limited to 50 pixel in height and 200 pixels in width. The maximum file size is 1MB in ``.jpg``, ``.png``, or ``.svg`` format.

:::caution

If you do not specify alternative text \(or `alt` text\), no text will be provided to users on assistive technology such as screen readers. You can continue without adding alternative text, but may incur risk of breaking your local accessibility laws or business guidelines. We recommend describing your site logo in the alternative text so that it meets the WCAG guidelines.

:::