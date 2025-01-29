# Default legacy player settings

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-87ccbabe-0f52-4395-954c-86e9340770d6"/>
</head>


The default legacy player supports various settings that can be specified when the player initializes.

You can customize any of the settings by passing them into `manywho.settings.initialize({})` in a custom player.

The following settings are supported, with their default values shown below:

```
{
    charts: {
        // Default background colors
        backgroundColors: ['#42a5f5', '#66bb6a', '#ef5350', '#ab47bc', '#ffa726', '#78909c', '#5c6bc0'],
        // Default border colors
        borderColors: ['#42a5f5', '#66bb6a', '#ef5350', '#ab47bc', '#ffa726', '#78909c', '#5c6bc0'],
        // Global default options for every chart type
        options: {},
        polarArea: {
            // Override the default background colors for the Polar chart type to be semi-transparent
            backgroundColors: ['rgba(66, 165, 245, 0.4)', 'rgba(102, 187, 106, 0.4)', 'rgba(239, 83, 80, 0.4)', 'rgba(171, 71, 188, 0.4)', 'rgba(255, 167, 38, 0.4)', 'rgba(120, 144, 156, 0.4)', 'rgba(92, 107, 192, 0.4)']
        }
    },
    // Allow containers with labels to toggle collapsed / expanded
    collapsible: false,
    // More complex setup for collapsible containers
    collapsible: {
        // Default settings apply to every container
        default: {
            enabled: false,
            // Initially display the container collapsed
            collapsed: false,
            // Name of the group the container belongs too, containers in the same group share collapse / expanded state
            group: null
        },
        // Override the default settings for each container type by adding a new object named after the container type
        vertical_flow: {
            enabled: false,
            collapsed: true,
            group: null
        }
    },
    collaboration: {
        // Uri of the realtime collaboration server
        uri: 'https://realtime.manywho.com'
    },
    // CSS selector that will find the container to render the UI in
    containerSelector: '#manywho',
    // General error message displayed if the Engine throws a general error (like timeout)
    errorMessage: 'An unknown error has occurred, please contact support',
    files: {
        downloadUriPropertyId: '6611067a-7c86-4696-8845-3cdc79c73289',
        downloadUriPropertyName: 'Download Uri'
    },
    formatting: {
        // Enable / disable client side formatting of numbers & datetimes
        isEnabled: false
    },
    // Display the history of the flow execution
    history: false,
    i18n: {
        // If enabled datetimes will be displayed in the timezone of the running user
        overrideTimezoneOffset: false,
        // Number between -14 & +14 to specify the timezone that datetimes should be displayed in (overrideTimezoneOffset must be enabled)
        timezoneOffset: null,
        // Culture that will be used when formatting numbers to be displayed. Clientside formatting will need to be enabled. Support cultures can be found here: http://numbrojs.com/languages.html
        culture: null
    },
    // If set to true will scroll to the top of the page/step as you move through the flow
    isScrollResetEnabled: true,
    // Add the full-width class to the top level main container
    isFullWidth: false,
    // Messages displayed beneath the loading spinner
    localization: {
        initializing: '',
        executing: '',
        loading: '',
        navigating: '',
        syncing: '',
        joining: 'Joining',
        sending: 'Sending',
        returnToParent: 'Return To Parent',
        status: null,
        validation: {
            required: 'This field is required',
            invalid: 'This value is invalid',
            notification: 'Page contains invalid values'
        },
        searchFirst: 'Perform a search to display results here'
    },
    location: {
        // Enable / disable location tracking
        isTrackingEnabled: false
    },
    navigation: {
        // Pin the navigation bar to the top of the window to maintain visibility
        isFixed: true,
        // Render the navigation bar as a wizard
        isWizard: false
    },
    outcomes: {
        // Change how outcomes are rendered: icon, iconandtext, iconnobackground
        display: null,
        // Fix outcomes to the bottom of screen
        isFixed: false,
    },
    // Number of items to be fetched at a time via an objectdata request 
    paging: {
        table: 10,
        files: 10,
        select: 250,
        tiles: 20
    },
    platform: {
        // Uri of the ManyWho platform
        uri: ''
    },
    // Tinymce settings
    richText: {
        url: 'https://tinymce.cachefly.net/4.1/tinymce.min.js',
        fontSize: '14px',
        plugins: [
            "advlist autolink link lists link image charmap print hr anchor spellchecker",
            "searchreplace visualblocks fullscreen wordcount code insertdatetime",
            "media table directionality emoticons contextmenu paste textcolor"
        ],
        toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link mwimage'
    },
    shortcuts: {
        // Execute the first outcome on the page when the Enter key is pressed
        progressOnEnter: true
    },
    // Perform a manywho.engine.sync on window.beforeunload
    syncOnUnload: true,
    toggle: {
        // Add a border radius to toggle buttons
        shape: "round",
        // Set the default background color: null, "success", "info", "warning", "danger"
        background: null
    },
    validation: {
        // Enable / disable client side validation
        isEnabled: false,
        // Scroll to the first element matching the selector when a validation error is found
        scroll: {
            isEnabled: false,
            selector: '.has-error'
        },
        // Display a notification when a validation error is found
        notification: {
            isEnabled: false
        },
        // Perform client side validation when executing an outcome. To validate on page conditions change to ['move', 'sync']. Valid values include: initialize, move, sync, join
        when: ['move']
    },
}
```