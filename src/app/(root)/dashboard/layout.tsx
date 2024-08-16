import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { ToggleUserMenu } from "@dashboard/_components/toggle-user-menu";
import { NotificationIcon } from "@dashboard/_components/notifiction-icon";
import { SearchInput } from "@dashboard/_components/search-input";
import LocaleSwitcher from "@/components/locale-switcher";
import { Modal } from "@dashboard/_components/modal";
import MbMobileMenu from "@dashboard/_components/mb-mobile-menu";
import { Sidebar } from "@dashboard/_components/side-bar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <div className={cn("min-h-screen bg-background font-sans antialiased")}>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <Sidebar />
          <div className="flex flex-col">
            {/* Header */}
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              {/* Mobile Toggle or sheet menu */}
              <MbMobileMenu />
              <SearchInput />
              <LocaleSwitcher />
              <NotificationIcon />
              <ToggleUserMenu />
            </header>
            <main className="flex flex-1 flex-col gap-4 lg:gap ">{children}</main>
          </div>
        </div>
      </div>
      <Modal />
    </Fragment>
  );
}
