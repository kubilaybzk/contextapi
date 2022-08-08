import React from "react";
import AutoComp from "./AutoComp";
import Logo from "./Logo";
import RightButtons from "./RightButtons";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "25px",
      }}
    >
      <Logo />
      <AutoComp />
      <RightButtons />
    </div>
  );
}
