import React from "react";
import "./MenuItems.css";
// import { ButtonType, ButtonFlavor} from '@boomi/exosphere';
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

interface MenuItems {
  id: number;
  label: string;
  icon: string;
  link?: string;
  submenu: Array<{
    id: number;
    submenuLabel: string;
    docLink?: string;
  }>;
}
interface MenuItemsProps {
  menuItems: MenuItems;
}

const MenuItems: React.FC<MenuItemsProps> = ({ menuItems }) => {
  if (menuItems.submenu.length === 0 && menuItems.link) {
    return (
      <div className="item-wrapper" data-testid="item-wrapper">
        <Link href={useBaseUrl(menuItems.link)} className="menu-item" aria-label="top-navigation-button-link">
          <ex-button type="tertiary" flavor="branded">
            <ex-icon icon={menuItems.icon} slot="prefix"></ex-icon>
            {menuItems.label}
          </ex-button>
        </Link>
      </div>
    );
  }

  return (
    <div className="item-wrapper" data-testid="item-wrapper">
      <ex-dropdown
        icon={menuItems.icon}
        text={menuItems.label}
        data-testid="menuitems-label"
        type="tertiary"
        flavor="branded"
        className="menu-items-wrapper"
      >
        <ex-menu>
          <div>
            {menuItems.submenu.map((submenuItem) => {
              return (
                <Link
                  key={submenuItem.id}
                  href={useBaseUrl(submenuItem.docLink)}
                  className="sub-menu-item"
                  aria-label="top-navigation-menu-link"
                >
                  <ex-menu-item>{submenuItem.submenuLabel}</ex-menu-item>
                </Link>
              );
            })}
          </div>
        </ex-menu>
      </ex-dropdown>
    </div>
  );
};

export default MenuItems;
