import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "@jest/globals";
import homePageControls from "./Controls";

describe("homePageControls", () => {
  const { homePageBanner } = homePageControls;
  
  it('has specific properties', () => {
    expect(homePageBanner.showBanner).toEqual(true);
    expect(homePageBanner.bannerImage).toEqual('/img/homePageBanner/newBanner.svg');
    expect(homePageBanner.bannerImageDarkMode).toEqual('/img/homePageBanner/newBannerDark.svg');
    expect(homePageBanner.bannerCTAtext).toEqual('Learn More ›');
  });
});
