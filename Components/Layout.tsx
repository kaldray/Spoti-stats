import React from "react";
import { Navigation } from "./Navigation";

import styles from "@styles/Components/Layout.module.scss";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { container } = styles;
  return (
    <>
      <Navigation />
      <section className={container}>{children}</section>
    </>
  );
};
