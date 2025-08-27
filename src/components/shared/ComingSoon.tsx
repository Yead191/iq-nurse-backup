"use client";
import { Grid } from "antd";
import React from "react";

export default function ComingSoon() {
  const { lg } = Grid.useBreakpoint();

  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co.com/d0YdNV3T/360-F-296694103-s-Xwlj-Vp-U8mp-COp-REQCNUb-HPI0h-Y73fcl.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: lg ? "" : "contain",
        // backgroundPosition: "center",
        backgroundPosition: "center center",
      }}
      className="min-h-[80vh] "
    ></div>
  );
}
