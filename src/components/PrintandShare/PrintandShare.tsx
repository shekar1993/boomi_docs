import React, { useState, useEffect } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { isMobile, isSafari } from "react-device-detect";
import generatePdf from "./generatePdf";

export default function PrintandShare({ contentRef }) {
  const [toastController, setToastController] = useState<any>(null);
  const [alertToastType, setAlertToastType] = useState<any>(null);

  var localPageUrl = window.location.href;
  var encodedPageUrl = encodeURIComponent(localPageUrl);

  const showAlertToast = () => {
    if (toastController && alertToastType) {
      toastController.show({
        description: "Link copied",
        type: alertToastType.INFO,
      });
    }
  };

  useEffect(() => {
    import("@boomi/exosphere").then(({ ToastController, AlertToastType }) => {
      setToastController(() => ToastController);
      setAlertToastType(() => AlertToastType);
    })
      .catch((err) => {
        console.error('Error loading the alert toast modules', err);
      });
  });

  const saveAsPDF = () => {
    const element = contentRef.current;

    const docTitle = `
    <header>
      <p>${document.title}</p>
    </header>
    `;

    const newDate = new Date();

    let month;
    switch (newDate.getMonth()) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
        break;
      case 2:
        month = "Mar";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "Aug";
        break;
      case 8:
        month = "Sept";
        break;
      case 9:
        month = "Oct";
        break;
      case 10:
        month = "Nov";
        break;
      case 11:
        month = "Dec";
        break;
    }

    let date = `${newDate.getDate()} ${month} ${newDate.getFullYear()}, ${
      newDate.getHours() < 13 ? newDate.getHours() : newDate.getHours() - 12
    }:${
      newDate.getMinutes() < 10
        ? `0${newDate.getMinutes()}`
        : newDate.getMinutes()
    } ${newDate.getHours() < 12 ? `AM` : `PM`}`;

    const header = `
      <div class="pdf-header-wrapper">
        <div>${document.getElementsByClassName("navbar")[0].innerHTML}</div>
        <div class="pdf-title-date">
          <a href=${localPageUrl} target="_blank"><div class="pdf-title">${docTitle}</div></a>
          <div class="pdf-date">${date}</div>
        </div>
      </div>
    `;

    let originalTabsHTML = document.getElementById("tabs-container")?.innerHTML;

    if (document.getElementsByClassName("tabs-container").length > 0) {
      let tabContent = "";
      document.querySelectorAll('[role="tabpanel"]').forEach((el, index) => {
        el.removeAttribute("hidden");
        const tabsList = document.querySelectorAll('[role="tab"]');
        tabContent += `<div class="tab-content"><h5> ${tabsList[index].innerHTML}</h5> <div role="tabpanel" class="tabItem_node_modules-@docusaurus-theme-classic-lib-theme-TabItem-styles-module">${el.innerHTML}</div></div>`;
      });
      document.getElementById("tabs-container").innerHTML = tabContent;
    }

    if (element) {
      const combinedContent = `<div id='pdf-content'>
      ${header}
      ${document.getElementById("docs-breadcrumbs-wrapper").innerHTML}
      ${document.getElementById("md-content-wrapper").innerHTML} </div>`;

      if (combinedContent) {
        generatePdf(combinedContent, pdfOptions);
      }
    }

    if (document.getElementsByClassName("tabs-container").length > 0) {
      document.getElementById("tabs-container").innerHTML = originalTabsHTML;
    }
  };

  const pdfOptions = {
    margin: [0.5, 0.5, 0.6, 0.5],
    filename: `${
      document.title.includes("|")
        ? document.title.split("|")[0]
        : document.title
    }.pdf`,
    image: {
      type: "jpeg",
      quality: 0.98,
    },
    html2canvas: {
      scale: 2,
    },
    jsPDF: {
      unit: "in",
      format: "letter",
      orientation: "portrait",
    },
    pagebreak: {
      mode: ["css", "legacy"],
      before: ".page-break-before",
    },
  };

  return (
    <div className="printandshareContainer" data-testid="printandshareContainer">
      <ex-icon-button
        data-testid="Download-as-PDF"
        icon="PDF file"
        flavor="branded"
        type="tertiary"
        onClick={saveAsPDF}
        tooltiptext={isMobile ? "" : "Download as PDF"}
        class="download-pdf-button"
      ></ex-icon-button>
      <ex-dropdown
        data-testid="Share"
        icon="Share"
        text=""
        flavor="branded"
        size="default"
        type="tertiary"
        className="shareDropdown"
        tooltiptext={isMobile ? "" : "Share"}
      >
        <ex-menu variant="action" class="share-menu">
          <Link
            aria-label="linkedin-share"
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedPageUrl}&title=[TITLE]`}
            target="_blank"
          >
            <ex-menu-item>
              <img
                src={useBaseUrl("img/In.svg")}
                className="share-icon-light-mode"
                alt="Linkedin Icon"
              />
              <img
                src={useBaseUrl("img/In-dark.svg")}
                className="share-icon-dark-mode"
                alt="Linkedin Icon"
              />
              <label>LinkedIn</label>
            </ex-menu-item>
          </Link>
          <Link
            aria-label="x-share"
            href={`${"http://twitter.com/share?url="}${encodedPageUrl}`}
            target="_blank"
          >
            <ex-menu-item>
              <img
                src={useBaseUrl("img/X.svg")}
                className="share-icon-light-mode"
                alt="X Icon"
              />
              <img
                src={useBaseUrl("img/X-dark.svg")}
                className="share-icon-dark-mode"
                alt="X Icon"
              />
              X{" "}
            </ex-menu-item>
          </Link>
          <Link
            aria-label="email-share"
            href={`${"mailto:?subject=Shared from Boomi Help: "}${
              document.title.includes("|")
                ? document.title.split("|")[0]
                : document.title
            }&body=${encodedPageUrl}`}
            target="_blank"
          >
            <ex-menu-item>
              <img
                src={useBaseUrl("img/Message.svg")}
                className="share-icon-light-mode"
                alt="Email Icon"
              />
              <img
                src={useBaseUrl("img/Message-dark.svg")}
                className="share-icon-dark-mode"
                alt="Email Icon"
              />
              Email
            </ex-menu-item>
          </Link>
          <Link
            aria-label="copylink-share"
            onClick={() => {
              navigator.clipboard.writeText(localPageUrl);
              showAlertToast();
            }}
          >
            <ex-menu-item>
              <img
                src={useBaseUrl("img/Link.svg")}
                className="share-icon-light-mode"
                alt="Copy Icon"
              />
              <img
                src={useBaseUrl("img/Link-dark.svg")}
                className="share-icon-dark-mode"
                alt="Copy Icon"
              />
              Copy Link
            </ex-menu-item>
          </Link>
          <ex-menu-item-group></ex-menu-item-group>
        </ex-menu>
      </ex-dropdown>
    </div>
  );
}
