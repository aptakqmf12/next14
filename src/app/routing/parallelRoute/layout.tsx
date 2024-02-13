import React from "react";

type LayoutProps = {
  children: React.ReactNode;
  modal?: React.ReactNode;
  alert?: React.ReactNode;
};

export default function Layout({ children, modal, alert }: LayoutProps) {
  return (
    <>
      {children}
      {alert}
      {modal}
    </>
  );
}
