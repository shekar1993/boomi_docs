import React from "react";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";

function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <button
      type="button"
      aria-label={translate({
        id: "theme.docs.sidebar.closeSidebarButtonAriaLabel",
        message: "Close navigation bar",
        description: "The ARIA label for close button of mobile sidebar",
      })}
      className="clean-btn navbar-sidebar__close"
      onClick={() => mobileSidebar.toggle()}
    >
      <ex-icon-button
        icon="Close"
        flavor="branded"
        type="tertiary"
      ></ex-icon-button>
    </button>
  );
}
export default function NavbarMobileSidebarHeader() {
  return (
    <div className="navbar-sidebar__brand">
      <CloseButton />
    </div>
  );
}
