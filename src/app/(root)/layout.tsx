import MbMobileMenu from "@/components/mb-mobile-menu";
import { SearchInput } from "@/components/search-input";
import { Sidebar } from "@/components/side-bar";
import ToggleUserMenu from "@/components/toggle-user-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
            <ToggleUserMenu />
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
