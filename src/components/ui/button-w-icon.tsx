import React from "react";
import { Button, ButtonProps } from "./button";
import { PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the props type for ButtonWithIcon
type ButtonWithIconProps = ButtonProps & {
  icon?: React.ReactNode;
  label?: string;
  className?: string;
};

export const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonWithIconProps>(
  ({ icon, label, className, ...props }, ref) => {
    return (
      <Button size="sm" className={cn("flex gap-2", className)} ref={ref} {...props}>
        {icon}
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">{label}</span>
      </Button>
    );
  }
);

ButtonWithIcon.displayName = "ButtonWithIcon";