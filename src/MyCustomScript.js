import { useEffect } from "react";
import {useColorMode} from '@docusaurus/theme-common';

function MyCustomScript() {
  const { setColorMode} = useColorMode();

  const handleColorSchemeChange = (e) => {
    const htmlTag = document.documentElement;
    if (!htmlTag || !htmlTag.getAttribute("data-theme")) {
      return;
    }
    if (e.matches) {
      setColorMode("dark")
      if (!htmlTag.classList.contains("ex-theme-dark")) {
        htmlTag.classList.add("ex-theme-dark");
      }
      if (htmlTag.classList.contains("ex-theme-light")) {
        htmlTag.classList.remove("ex-theme-light");
      }
    } else {
      setColorMode("light")
      if (htmlTag.classList.contains("ex-theme-dark")) {
        htmlTag.classList.remove("ex-theme-dark");
      }
      if (!htmlTag.classList.contains("ex-theme-light")) {
        htmlTag.classList.add("ex-theme-light");
      }
    }
  };

  useEffect(() => {
    const toggleThemeTimeout = setTimeout(() => {
      // Get OS theme object
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      // Set initial theme
      handleColorSchemeChange(darkModeMediaQuery);

      // Listen for changes on OS theme
      darkModeMediaQuery.addEventListener("change", handleColorSchemeChange);
    }, 0);

    return () => {
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      darkModeMediaQuery.removeEventListener("change", handleColorSchemeChange);
      clearTimeout(toggleThemeTimeout);
    };
  }, []);

  useEffect(() => {
    import("@boomi/exosphere");
  }, []);

  return null; // This component doesn't render anything
}

export function removeUnderscore(str) {
  if (str === null) {
    return null;
  }
  return str.replace(/_/g, " ");
}

export default MyCustomScript;
