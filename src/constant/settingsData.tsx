import { Building2, Download, Import, User } from "lucide-react";

export const  settingsData = [
    {
        nameEn: "Store Infomrtaion",
        nameAr: "تخزين المعلومات",
        descriptionEn: "Company Information for front page data",
        descriptionAr: "معلومات الشركة لبيانات الصفحة الأولى ",
        icon: <Building2 />
    },
    {
        nameEn: "Role",
        nameAr: "دور",
        descriptionEn: "User Account who are managing this application",
        descriptionAr: "حساب المستخدم الذين يديرون هذا التطبيق",
        icon: <User />
    }
]

export const  synchronizationData = [
    {
        nameEn: "Import",
        nameAr: "يستورد",
        descriptionEn: "Company Information for front page data",
        descriptionAr: "معلومات الشركة لبيانات الصفحة الأولى ",
        icon: <Import />
    },
    {
        nameEn: "Export",
        nameAr: "يصدّر",
        descriptionEn: "User Account who are managing this application",
        descriptionAr: "حساب المستخدم الذين يديرون هذا التطبيق",
        icon: <Download />
    }
]