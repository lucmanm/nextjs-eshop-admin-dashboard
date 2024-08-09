import { Badge } from "@/components/ui/badge";
import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";

export const sideMenu = [
  {
    nameEn: "Dashboard",
    nameAr: "لوحة القيادة",
    icons: <Home className="h-4 w-4" />,
    path: "/",
  },
  {
    nameEn: "Orders",
    nameAr: "طلبات",
    path: "orders",
    icons: <ShoppingCart className="h-4 w-4" />,
    count: 6
  },
  {
    nameEn: "Products",
    nameAr: "منتجات",
    path: "products",
    icons: <Package className="h-4 w-4" />,
  },
  {
    nameEn: "Customers",
    nameAr: "عملاء",
    path: "customers",
    icons: <Users className="h-4 w-4" />,
  },
  {
    nameEn: "Analytics",
    nameAr: "التحليلات",
    path: "analytics",
    icons: <LineChart className="h-4 w-4" />,
  },
];
