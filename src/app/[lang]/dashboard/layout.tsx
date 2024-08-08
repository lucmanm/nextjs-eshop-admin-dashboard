import React from "react";
import { Header } from "./_components/header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Header/>
      {children}
    </React.Fragment>
  );
}
