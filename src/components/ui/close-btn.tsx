import { LucideProps, X } from "lucide-react";
import React from "react";

export const CloseButton = React.forwardRef<SVGSVGElement, LucideProps>((props, ref) => {
  return (
    <X
      {...props}
      ref={ref}
      className="size-5 rounded-full absolute right-2 top-2 bg-slate-100 text-red-600 hover:text-slate-100 hover:bg-red-600 cursor-pointer p-0.5 hover:border-slate-100 hover:border"
    />
  );
});

CloseButton.displayName = "CloseButton"; // Optional, helps with debugging
