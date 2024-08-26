import React from 'react';
import TableData from './_components/table-data';

export default async function Page() {
  // NEXT 1 Add products, category and brands table
  return (
    <React.Fragment>
      <main className="flex flex-1 items-center justify-center rounded-lg">
        <div className="grid flex-1 items-start gap-4 md:gap-8">
          <TableData />
        </div>
      </main>
    </React.Fragment>
  );
}
