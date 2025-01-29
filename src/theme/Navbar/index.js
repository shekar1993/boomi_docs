import React, { useContext } from "react";
import NavbarLayout from "@theme/Navbar/Layout";
import NavbarContent from "@theme/Navbar/Content";
import TopNavigation from "@site/src/components/TopNavigation/TopNavigation";
import MyCustomScript from "../../../src/MyCustomScript";

export default function Navbar() {
  return (
    <>
      <NavbarLayout>
        <NavbarContent />
      </NavbarLayout>
      <TopNavigation />
      <MyCustomScript />
    </>
  );
}
