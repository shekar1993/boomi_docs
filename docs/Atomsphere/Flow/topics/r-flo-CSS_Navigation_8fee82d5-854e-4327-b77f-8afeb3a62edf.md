# Navigation CSS

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-8fee82d5-854e-4327-b77f-8afeb3a62edf"/>
</head>


This topic provides examples of the main CSS classes/selectors you can use to customize [Navigation](https://help.boomi.com/bundle/flow/page/c-flo-Navigation.html) elements.

## Default player CSS

You can use the following main classes/selectors to apply additional CSS styling to navigation elements in a flow running the default player.

Column

| Class/Selector         | Description                                                  |
| :--------------------- | :----------------------------------------------------------- |
| `.flow-nav`            | The class for the entire navbar component.For example, to add more padding to the entire navigation element:`.flow-nav {padding:25px}` |
| `.flow.nav-horizontal` | The class for a horizontal (top) navbar component.For example, to add more padding to a top navbar component.`.flow.nav-horizontal {padding:25px}` |
| `.nav-sidebar-label`   | The class for the main navigation label.For example, to change the font color of the navigation label:`.nav-sidebar-label {color:red}` |
| `.nav-toggle-menu`     | The class for the navbar hamburger menu when viewed on smaller screens.For example, to add a border around the collapsed hamburger menu:`.nav-toggle-menu {border:1px solid black}` |
| `.nav-item-list`       | The class for the individual navigation tab elements.For example, to change the font styling for the navigation menu items:`.mw-bs .navbar-nav > li > a {font-size:16px;color:red}` |
| `.nav-item active`     | The class for the active (selected) individual navigation tab element. |

## Default legacy player CSS

You can use the following classes/selectors to apply additional CSS styling to navigation elements in a flow running the default legacy player. The navigation element and styling framework is based on the Bootstrap Navbar component. See [Bootstrap navbar component](https://getbootstrap.com/docs/3.3/components/#navbar).

See [Historical navigation](https://help.boomi.com/bundle/flow/page/c-flo-Nav_Historical.html) to learn more about using historical navigation.

Column

| Class/Selector                                     | Description                                                  |
| :------------------------------------------------- | :----------------------------------------------------------- |
| `.mw-bs .navbar`                                   | The Bootstrap class for the entire navbar component.For example, to add more padding to the entire navigation element:`.mw-bs .navbar {padding:25px}` |
| `.mw-bs .navbar-default`                           | See [Containers CSS](https://help.boomi.com/bundle/flow/page/r-flo-CSS_Containers.html). |
| `.mw-bs .nav`                                      | The Bootstrap class for the main navigation tab elements.For example, to add more padding to the right-hand navigation tab elements:`.mw-bs .nav {padding:25px}` |
| `.mw-bs .navbar-header`                            | The Bootstrap class for the navbar branding element.For example, if you have added a logo to the navigation bar, to add a border round the logo:`.mw-bs .navbar-header {border:1px solid black}` |
| `.mw-bs .navbar-toggle`                            | The Bootstrap class for the navbar hamburger menu when viewed on smaller screens.For example, to add a border around the collapsed hamburger menu:`.mw-bs .navbar-toggle {border:1px solid black}` |
| `.mw-bs .navbar-nav > li > a`                      | The Bootstrap class for the individual navigation tab elements.For example, to change the font styling for the navigation menu items:`.mw-bs .navbar-nav > li > a {font-size:16px;color:red}` |
| `.mw-bs .navbar-brand`                             | The Bootstrap class used to add a logo to the navigation bar.For example, to add a logo image to the top-left of the navigation element:`.mw-bs .navbar-brand {    background: url(yourimageurl/company_logo.png);    background-position: left center;    background-repeat: no-repeat;    font-size: 1px;    font-weight: 500;    line-height: 20px;    width: 243px;    height: 73px;    margin: 10px 15px 10px 15px !important;    padding: 0px 0px 0px 36px !important;    font-weight: bold;    background-size: contain; }` |
| `.mw-bs .navbar-default .navbar-nav>:nth-child(n)` | The Bootstrap classes used to style individual specific items in the navigation bar.For example, to add an image to the top-left of the first menu item in a vertical navigation element:`.mw-bs .navbar-default .navbar-nav>:nth-child(1) {    background: url(https://url/image.png);    background-size: 40px;    font-size: 20px;    background-position: left center;    background-repeat: no-repeat;    width: 100%;    text-align: left;    padding-left: 45px;}`For example, to add an image to the top-left of the first menu item in a horizontal navigation element:`.mw-bs .navbar-default .navbar-nav>:nth-child(1) {    background: url("https://url/image.png"");    background-size: 40px;    background-repeat: no-repeat;    background-position: left center;    color: black;    float: left;    text-align: right;    padding-left: 40px;}` |

## Default legacy player CSS: Historical navigation

You can customize historical navigation using CSS, such as changing the font, colors, background and other aspects of the breadcrumb trail.

For example, you can customize historical navigation to display as a series of grey block elements in a flow running the default legacy player:

![CSS customization example](https://boomi-be-prod.zoominsoftware.io/bundle/flow/page/img-flo_Histnav_example_051ab322-e83c-457e-b081-8b25d312f9ee.png?_LANG=enus)

```css
.mw-bs .historical-navigation li {padding:8px 12px 8px 12px;color:#ff3300;background:#eeeeee;}
.mw-bs .historical-navigation li button {color:#444444;}
.mw-bs .historical-navigation li:not(:last-child):after {color:#444444;}
```

The following classes/selectors allow you to apply additional CSS styling to historical navigation in a flow running the default legacy player.

Column

| Class/Selector                                               | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| .mw-bs .historical-navigation                                | The main class applied to the entire breadcrumb trail.For example, to set the background of the breadcrumb trail:`.mw-bs .historical-navigation {background:#eeeeee}` |
| .mw-bs .historical-navigation ul                             | The main list class applied to the breadcrumb trail `<ul>`.For example, to set the background of the whole breadcrumb trail item group:`.mw-bs .historical-navigation li {background:#cccccc;}` |
| .mw-bs .historical-navigation li                             | The main list class applied to each breadcrumb trail link item `<li>`.For example, to set the background of each link item in the breadcrumb trail:`.mw-bs .historical-navigation li {background:#cccccc;}` |
| .mw-bs .historical-navigation li button                      | The main class applied to the text acting as a button/link within each breadcrumb trail link item.For example, to set the background of each link 'button' in the breadcrumb trail:`.mw-bs .historical-navigation li button {background:#cccccc;}` |
| .mw-bs .historical-navigation li:not(:last-child):after      | Targets the breadcrumb links divider, allowing you to display a different character or content.For example, to display a backslash between the links:`.mw-bs .historical-navigation li:not(:last-child):after { content: '/';}`To display an image between the links:`.mw-bs .historical-navigation li:not(:last-child):after { content: url(https://yoururl1/divider.png);}` |
| .mw-bs .historical-navigation li .historical-navigation-expand | Targets the breadcrumb links ellipsis that is displayed once a user has proceeded beyond five steps in the flow.For example, to set the color of the ellipsis:`.mw-bs .historical-navigation li .historical-navigation-expand { color:blue;}` |