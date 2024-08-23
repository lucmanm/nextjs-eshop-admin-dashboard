import { cn } from "@/lib/utils";
import React from "react";
import { Button, ButtonProps } from "./button";

// Define the props type for ButtonWithIcon
type ButtonWithIconProps = ButtonProps & {
  icon?: React.ReactNode;
  label?: string;
  className?: string;
};

export const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonWithIconProps>(
  ({ icon, label, className, ...props }, ref) => {
    return (
      <Button size="sm" className={cn("flex h-8 gap-2 drop-shadow-md hover:bg-blue-800", className)} ref={ref} {...props}>
        {icon}
        <span className="sm:whitespace-nowrap">{label}</span>
        {/* sr-only sm:not-sr-only  */}
      </Button>
    );
  }
);

ButtonWithIcon.displayName = "ButtonWithIcon";
