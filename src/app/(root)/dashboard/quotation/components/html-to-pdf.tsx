'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

export const HtmlToPdf = () => {
  const onPrint = async () => {
    const html2pdf = await require('html2pdf.js');
    const element = document.querySelector('#quotation');
    html2pdf(element);
  };
  return (
    <main className="p-6">
      <div id="quotation" className="p-8">
        <section className="grid grid-cols-12 text-center">
          <span className="col-span-6 text-xl font-bold">
            Kaf Mem Ba Ya Waw Ta Kaf Information Technology Company
          </span>
          <span className="col-span-6 text-xl font-bold">
            شركة كاف ميم باء ياء واو تاء كاف لتقنية المعلومات
          </span>
        </section>
        <section className="grid grid-cols-12 text-center">
          <span className="text col-span-6 text-base">Vat # 311079231900003</span>
          <span className="col-span-6 text-base">الرقم الضريبي 311079231900003</span>
        </section>
        <section>
          <Table>
            <TableHead className="text-center text-xl">Quotation</TableHead>

            <TableBody>
              {Array.from({ length: 6 }).map((_, idx) => (
                <TableRow key={idx} className="h-12">
                  <TableCell className="font-medium">To:</TableCell>
                  <TableCell>Company Name</TableCell>
                  <TableCell>إلى</TableCell>
                  <TableCell className="font-medium">To:</TableCell>
                  <TableCell>Company Name</TableCell>
                  <TableCell>إلى</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
        <Separator className='my-2'/>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <Button onClick={onPrint}>Print</Button>
    </main>
  );
};

