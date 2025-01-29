import React from "react";
import { useThemeConfig, 
  // useColorMode 
} from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import NavbarItem from "@theme/NavbarItem";
// import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import Link from "@docusaurus/Link";

function useNavbarItems() {
  return useThemeConfig().navbar.items;
}
// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  // const { colorMode, setColorMode } = useColorMode();
  return (
    <ul className="menu__list">
      {/* Theme switcher removed from UI */}
      {/* <div
        className="mobile-sidebar-theme-wrapper"
        onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}
      >
        <NavbarColorModeToggle />
        <span className="mobile-sidebar-items-label">
          <span className="light-theme-lable">Light Mode</span>
          <span className="dark-theme-lable">Dark Mode</span>
        </span>
      </div> */}
      {/* {items.map((item) => (
        <NavbarItem
          mobile
          {...item}
          onClick={() => mobileSidebar.toggle()}
          key={item.label}
        />
      ))} */}
      <div className="dev-docs-button-mobile-wrapper">
        <ex-button
          type="tertiary"
          flavor="branded"
          size="default"
          class="dev-docs-cta-mobile-sidebar"
          onClick={() =>
            window.open(
              "https://developer.boomi.com",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          <ex-icon
            icon="Open in new window"
            slot="prefix"
            class="dev-docs-cta-icon-mobile-sidebar"
          ></ex-icon>
          Dev Docs
        </ex-button>
      </div>
      <div className="free-trial-button-mobile-wrapper">
        <Link
          href="https://boomi.com/form/trial/"
          className="free-trial-button-mobile"
          aria-label="free-trial-button-wrapper"
        >
          <ex-button type="primary" flavor="branded">
            Free Trial
          </ex-button>
        </Link>
      </div>
    </ul>
  );
}
