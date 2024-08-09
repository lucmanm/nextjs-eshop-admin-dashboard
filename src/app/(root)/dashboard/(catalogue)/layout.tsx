import { BreadcrumbComp } from "./_components/breadcrumbs";


export default function Dashboard({ children }: { children: React.ReactNode }) {

  return (
    <main className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col px-6">
        <section className="py-3">
          <BreadcrumbComp/>
        </section>
        {children}
      </div>
    </main>
  );
}
