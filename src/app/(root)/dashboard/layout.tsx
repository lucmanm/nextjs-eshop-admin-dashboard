import { Sidebar } from "@/app/(root)/dashboard/_components/side-bar";
import { cn } from "@/lib/utils";
import { ToggleUserMenu } from "./_components/toggle-user-menu";
import { NotificationIcon } from "./_components/notifiction-icon";
import MbMobileMenu from "./_components/mb-mobile-menu";
import { SearchInput } from "./_components/search-input";
import LocaleSwitcher from "@/components/locale-switcher";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn("min-h-screen bg-background font-sans antialiased")}>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex flex-col">
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
  );
}