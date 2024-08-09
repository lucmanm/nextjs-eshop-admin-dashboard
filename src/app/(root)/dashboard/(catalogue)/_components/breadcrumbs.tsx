"use client";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { usePathname } from "next/navigation";

// Function to capitalize only the first letter of a string
const capitalizeFirstLetter = (str: string): string => {
  if (str.length === 0) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const BreadcrumbComp = () => {
  const pathname = usePathname();

  // Split the pathname and filter out empty segments
  const segments = pathname.split('/').filter(Boolean);

  // Build breadcrumb items
  const breadcrumbItems = segments.map((segment, index) => {
    // Create a URL path for each breadcrumb link
    const path = `/${segments.slice(0, index + 1).join('/')}`;

    // Capitalize only the first letter of each segment
    const capitalizedSegment = capitalizeFirstLetter(segment.replace(/-/g, ' '));

    return (
      <React.Fragment key={path}>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={path}>{capitalizedSegment}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {index < segments.length - 1 && <BreadcrumbSeparator />}
      </React.Fragment>
    );
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
