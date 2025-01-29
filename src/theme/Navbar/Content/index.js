import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import NavbarItem from "@theme/NavbarItem";
// import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import SearchBar from "@theme/SearchBar";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarLogo from "@theme/Navbar/Logo";
import NavbarSearch from "@theme/Navbar/Search";
// import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import SearchBox from "@site/src/components/HomepageFeatures/SearchBox/SearchBox";

function useNavbarItems() {
  // Temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}

function NavbarItems({ items }) {
  return (
    <>
      {items.map((item) => (
        <NavbarItem {...item} key={item.label} />
      ))}
    </>
  );
}

function NavbarContentLayout({ left, right }) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  );
}

export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === "search");
  const filteredRightItems = rightItems.filter((item) => item.type !== 'localeDropdown');
  return (
    <NavbarContentLayout
      left={
        <>
          <NavbarLogo />
          {!mobileSidebar.disabled && (
            <>
              <NavbarMobileSidebarToggle />
              <div className="navbar__items-searchbox">
                <SearchBox />
              </div>
            </>
          )}
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        // Ask the user to add the respective navbar items => more flexible
        <>
          {/* Moved Dark/light theme toggle to the left of the right section */}
          {/* Theme switcher removed from UI */}
          {/* <NavbarColorModeToggle className={styles.colorModeToggle} /> */}
          <NavbarItems items={filteredRightItems} />
          {!mobileSidebar?.shouldRender && (
            <ex-button
              type="tertiary"
              flavor="branded"
              size="default"
              class="dev-docs-cta"
              onClick={() => window.open('https://developer.boomi.com', "_blank", "noopener,noreferrer")}
            >
              <ex-icon icon="Open in new window" slot="prefix" class="dev-docs-cta-icon"></ex-icon>
              Dev Docs
            </ex-button>
          )}
          {!mobileSidebar?.shouldRender && (
            <Link
              href="https://boomi.com/form/trial/"
              className="free-trial-button"
              aria-label="free-trial-button-wrapper"
            >
              <ex-button type="primary" flavor="branded">
                Free Trial
              </ex-button>
            </Link>
          )}
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
        </>
      }
    />
  );
}
