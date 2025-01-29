# Customizing the loading spinner

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-7343ec9c-c2d7-497e-bf8d-b1b4c36b2878"/>
</head>


The loading spinner that is displayed to an end user whilst a flow is loading or waiting can be customized to suit your needs.

## Overview

The default player contains the HTML for rendering the default loading spinner. See [Flow loading spinner](c-flo-Players_Default_1ec7b998-bb39-4296-9857-949eb1dd5680.md#section_lb1_5gv_sjb).

The default loading spinner is displayed as follows:

![Default loading spinner](../Images/img-flo-Players_spinner_bb3bb357-20fb-42cf-ac6a-955ca889f000.png)

## Customizing the spinner

This default spinner can be completely customized. For example, you may wish to use your company branding and display a logo or graphic.

The following worked example shows how the loading spinner could be changed to display a company logo:

1.  Create and edit a custom player containing the loading spinner you wish to customize.
2.  Edit the CSS and Javascript to customize the spinner. For example, the following code allows us to use the Boomi mark image as the spinner. This code is inserted into the `<style>` tags in the `<Head>` section, overwriting the default spinner code:

    ```
    .wait-spinner {
              position: absolute;
              left: 50%;
              top: 50%;
              display: block;
              width: 150px;
              height: 150px;
              -webkit-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
              background-size: 100%;
              order: 0;
              flex: 0 1 auto;
              z-index: 9998;
              will-change: transform;
              /*transform: scale(0.75);*/
            }
            
            .wait-spinner:after {
              content: "";
              display: inline-block;
              width: 150px;
              height: 150px;
              position: absolute;
              /*left: -110px;*/
              -webkit-transform-style: preserve-3d;
              transform-style: preserve-3d;
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
              -webkit-transform-origin: 50% 50%;
              transform-origin: 50% 50%;
              -webkit-animation: spin 1.3s infinite ease-in-out;
              animation: spin 1.3s infinite ease-in-out;
              font-size: 34px;
              background: url("https://files-manywho-com.s3.amazonaws.com/913bc8c6-b80f-4ad7-9c58-36086fad935f/boomi-dark-logo.png")
                no-repeat;
              background-size: 100%;
              background-position: left center;
        
            }
            
            .wait-spinner:before {
              content: "";
              position: absolute;
              left: 0;
              bottom: -20px;
              border-radius: 50%;
              -webkit-filter: blur(6px);
              filter: blur(6px);
              width: 150px;
              height: 2px;
              background: #000;
              transform: translate3d(0, 0, 0);
              -webkit-transform-origin: 50% 50%;
              transform-origin: 50% 50%;
              -webkit-animation: spin 1.3s infinite ease-in-out;
              animation: spin 1.3s infinite ease-in-out;
              
            }
    
                   @-webkit-keyframes spin {
              0% {
                -webkit-transform: rotateY(0deg);
                transform: rotateY(0deg);
              }
              50% {
                -webkit-transform: rotateY(360deg);
                transform: rotateY(360deg);
              }
              100% {
                -webkit-transform: rotateY(360deg);
                transform: rotateY(360deg);
              }
            }
            
            @keyframes spin {
              0% {
                -webkit-transform: rotateY(0deg);
                transform: rotateY(0deg);
              }
              50% {
                -webkit-transform: rotateY(360deg);
                transform: rotateY(360deg);
              }
              100% {
                -webkit-transform: rotateY(360deg);
                transform: rotateY(360deg);
              }
            }
    ```

3.  Save the player and run a flow using the player to see the new spinner in action!

    ![Custom loading spinner](../Images/img-flo-Players_spinner_custom_68d21802-272e-41f9-948a-378f64fe4ec5.png)


**Note:** Best web design practice is to ensure that the loading spinner is as small in file size as possible. For example, if using an image or graphic it should be optimized so it can be loaded quickly - a large image \(300k JPEG for example\) may cause loading issues in your web application pages.