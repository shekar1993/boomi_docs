import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useAlternatePageUtils } from "@docusaurus/theme-common/internal";
import { useLocation } from "@docusaurus/router";
import DropdownNavbarItem from "@theme/NavbarItem/DropdownNavbarItem";

export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  ...props
}) {
  const {
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext();

  const getLocaleItemClassName = (locale) => {
    if (locale !== currentLocale) {
      return "";
    }
    return mobile ? "menu__link--active" : "dropdown__link--active";
  };
  const alternatePageUtils = useAlternatePageUtils();
  const { search, hash } = useLocation();
  const localeItems = locales.map((locale) => {
    const baseTo = `pathname://${alternatePageUtils.createUrl({
      locale,
      fullyQualified: false,
    })}`;
    const to = `${baseTo}${search}${hash}`;
    return {
      label: localeConfigs[locale].label,
      lang: localeConfigs[locale].htmlLang,
      to,
      target: "_self",
      autoAddBaseUrl: false,
      className: getLocaleItemClassName(locale)
    };
  });
  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];
  // Mobile is handled a bit differently
  // Multi language supported Language Dropdown Label
  // import { translate } from "@docusaurus/Translate";
  // const dropdownLabel = mobile
  //   ? translate({
  //       message: "Languages",
  //       id: "theme.navbar.mobileLanguageDropdown.label",
  //       description: "The label for the mobile language switcher dropdown",
  //     })
  //   : localeConfigs[currentLocale].label;

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={
        <>
          <ex-icon-button icon="Language" flavor="branded" type="tertiary" aria-label="language-selector"/>
          {mobile && (
            <span className="mobile-sidebar-items-label">Language</span>
          )}
        </>
        // <>
        //   <IconLanguage className={styles.iconLanguage} />
        //   {dropdownLabel}
        // </>
      }
      items={items}
    />
  );
}
