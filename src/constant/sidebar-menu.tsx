import { Badge } from "@/components/ui/badge";
import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";

export const sideMenu = [
  {
    name: "Dashboard",
    icons: <Home className="h-4 w-4" />,
    path: "/",
  },
  {
    name: "Orders",
    path: "orders",
    icons: <ShoppingCart className="h-4 w-4" />,
    count: 6
  },
  {
    name: "Products",
    path: "products",
    icons: <Package className="h-4 w-4" />,
  },
  {
    name: "Customers",
    path: "customers",
    icons: <Users className="h-4 w-4" />,
  },
  {
    name: "Analytics",
    path: "analytics",
    icons: <LineChart className="h-4 w-4" />,
  },
];
