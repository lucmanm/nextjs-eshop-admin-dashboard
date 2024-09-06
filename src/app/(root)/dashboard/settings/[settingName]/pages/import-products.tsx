'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as XLSX from 'xlsx';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { importExcelData } from '@/actions/excel-file.action';
import { toast } from 'react-toastify';
import { LoaderCircle } from 'lucide-react';

const FormSchema = z.object({
  excelFile: z
    .instanceof(File)
    .refine(
      (file) =>
        [
          'application/vnd.ms-excel',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ].includes(file.type),
      {
        message: 'File must be an Excel document (.xls or .xlsx).',
      }
    ),
});

export function ImportProducts() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      excelFile: undefined,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const file = data.excelFile;
      const reader = new FileReader();
      reader.onload = async (e) => {
        const binaryStr = e.target?.result;
        if (binaryStr) {
          const workbook = XLSX.read(binaryStr, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const sheetData = workbook.Sheets[sheetName];
          const json = XLSX.utils.sheet_to_json(sheetData);
          const excelValues = JSON.parse(JSON.stringify(json));
          try {
            const response = await importExcelData(excelValues);
            if (response?.status === 200) {
              toast.success(`${response.message}`);
            } else if (response?.status === 409) {
              toast.warning(`${response.message}`);
            }
          } catch (error) {
            toast.error('Problem with your file');
          }
        }
      };
      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.log('ERROR', error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="excelFile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload File</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".xls,.xlsx"
                  onChange={(e) => field.onChange(e.target.files?.[0])}
                />
              </FormControl>
              <FormDescription>Please upload an Excel file (.xls or .xlsx).</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="gap-4 font-semibold"
        >
          {form.formState.isSubmitting && <LoaderCircle className="animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  );
}
