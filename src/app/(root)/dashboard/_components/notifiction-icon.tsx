import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import React from "react";

export const NotificationIcon = () => {
  return (
    <Button variant="ghost" size="icon" className="ml-auto size-10 rounded-full">
      <Bell className="h-4 w-4" />
      <span className="sr-only">Toggle notifications</span>
    </Button>
  );
};
