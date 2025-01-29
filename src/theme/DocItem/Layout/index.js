import React, {useRef} from "react";
import clsx from "clsx";
import { useWindowSize } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import DocItemPaginator from "@theme/DocItem/Paginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import DocVersionBadge from "@theme/DocVersionBadge";
import DocItemFooter from "@theme/DocItem/Footer";
import DocItemTOCMobile from "@theme/DocItem/TOC/Mobile";
import DocItemTOCDesktop from "@theme/DocItem/TOC/Desktop";
import DocItemContent from "@theme/DocItem/Content";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import PrintandShare from "../../../components/PrintandShare/PrintandShare";
import styles from "./styles.module.css";
import DocPageFeedback from "../../../components/DocPageFeedback/DocPageFeedback";
/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === "desktop" || windowSize === "ssr") ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}
export default function DocItemLayout({ children }) {
  const docTOC = useDocTOC();
  const printableContentRef = useRef(null);

  return (
    <div className="row" id="print-content-id" ref={printableContentRef}>
      <div className={clsx("col", !docTOC.hidden && styles.docItemCol)}>
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            <div className="mobile-toc-container">
              <div className="mobile-toc">{docTOC.mobile}</div>
              <div className="print-share-mobile">
                <PrintandShare contentRef={printableContentRef}/>
              </div>
            </div>
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocPageFeedback />
          <DocItemPaginator />
        </div>
      </div>
      <div className="col col--3">
        <div className="print-share-desktop">
          <PrintandShare contentRef={printableContentRef}/>
        </div>
        {docTOC.desktop && <div>{docTOC.desktop}</div>}
      </div>
    </div>
  );
}
