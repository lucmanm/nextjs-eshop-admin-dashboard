import { Check, ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Control, useFormContext } from 'react-hook-form';

type TCombobox = {
  control?: Control;
  name: string;
  formLabel?: string;
  data?: {
    id?: string;
    enName: string;
    arName: string;
  }[];
};
export function BrandCombobox(props: TCombobox) {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className="flex flex-col *:capitalize">
          {props.formLabel && <FormLabel>{props.formLabel}</FormLabel>}
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  size="sm"
                  variant="outline"
                  role="combobox"
                  className={cn(
                    'w-[200px] justify-between max-sm:h-7 max-sm:text-xs',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value
                    ? props.data?.find((data) => data.id === field.value)?.enName
                    : 'Select Brand'}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0 capitalize">
              <Command>
                <CommandInput placeholder="Search language..." />
                <CommandList>
                  <CommandEmpty>No brand found.</CommandEmpty>
                  <CommandGroup>
                    {props.data?.map((brand) => (
                      <CommandItem
                        value={brand.id}
                        key={brand.enName}
                        onSelect={() => {
                          form.setValue(`${props.name}`, brand.id);
                        }}
                        className="cursor-pointer"
                      >
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            brand.id === field.value ? 'opacity-100' : 'opacity-0'
                          )}
                        />
                        {brand.enName}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormDescription>Select the brand of this product.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
