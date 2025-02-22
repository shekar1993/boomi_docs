import React from "react";
import clsx from "clsx";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";

function ColorModeToggle({ className, value, onChange }) {
  const isBrowser = useIsBrowser();
  const title = translate(
    {
      message: "Switch between dark and light mode (currently {mode})",
      id: "theme.colorToggle.ariaLabel",
      description: "The ARIA label for the navbar color mode toggle",
    },
    {
      mode:
        value === "dark"
          ? translate({
              message: "dark mode",
              id: "theme.colorToggle.ariaLabel.mode.dark",
              description: "The name for the dark color mode",
            })
          : translate({
              message: "light mode",
              id: "theme.colorToggle.ariaLabel.mode.light",
              description: "The name for the light color mode",
            }),
    }
  );
  return (
    <div className={clsx(styles.toggle, className)}>
      <button
        className={clsx(
          "clean-btn toggle-btn-mode",
          styles.toggleButton,
          !isBrowser && styles.toggleButtonDisabled
        )}
        type="button"
        onClick={() => onChange(value === "dark" ? "light" : "dark")}
        disabled={!isBrowser}
        title={title}
        aria-label={title}
        aria-live="polite"
      >
        {/* Replaced docusauras theme icons with exosphere icons */}
        <div className={clsx(styles.toggleIcon, styles.lightToggleIcon)}>
          <ex-icon-button
            icon="Day"
            flavor="branded"
            type="tertiary"
          ></ex-icon-button>
        </div>
        <div className={clsx(styles.toggleIcon, styles.darkToggleIcon)}>
          <ex-icon-button
            icon="Night"
            flavor="branded"
            type="tertiary"
          ></ex-icon-button>
        </div>
      </button>
    </div>
  );
}
export default React.memo(ColorModeToggle);
