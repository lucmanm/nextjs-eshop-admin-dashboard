import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const IndexPage = () => {
  return (
    <React.Fragment>
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Frontend Settings</CardTitle>
            <CardDescription>Configure your frontend informationd details</CardDescription>
          </CardHeader>
          {/* Container */}
          <CardContent className="grid grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, idx) => (
              <Link
                key={idx}
                href="/"
                className={cn("flex border items-center p-4 justify-between rounded-lg shadow-sm")}
              >
                <Building2 />
                <p>Store Information</p>
              </Link>
            ))}
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </section>
    </React.Fragment>
  );
};

export default IndexPage;
