import { Building2, Download, Import, User } from 'lucide-react';

export type TSettingName =
  | 'store information'
  | 'banners'
  | 'store images'
  | 'role'
  | 'import products'
  | 'export products';

export interface ISetting {
  nameEn: TSettingName;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: JSX.Element;
}
export const settingsData: ISetting[] = [
  {
    nameEn: 'store information',
    nameAr: 'تخزين المعلومات',
    descriptionEn: 'Company Information for front page data',
    descriptionAr: 'معلومات الشركة لبيانات الصفحة الأولى ',
    icon: <Building2 />,
  },
  {
    nameEn: 'banners',
    nameAr: 'شريط التمرير أو الكاروسيل',
    descriptionEn: 'You can configure your store slider banner',
    descriptionAr: 'يمكنك تكوين شعار منزلق متجرك',
    icon: <User />,
  },
  {
    nameEn: 'store images',
    nameAr: 'شريط التمرير أو الكاروسيل',
    descriptionEn: 'Store Image',
    descriptionAr: 'يمكنك تكوين شعار منزلق متجرك',
    icon: <User />,
  },
];

export const adminData: ISetting[] = [
  {
    nameEn: 'role',
    nameAr: 'دور',
    descriptionEn: 'User Account who are managing this application',
    descriptionAr: 'حساب المستخدم الذين يديرون هذا التطبيق',
    icon: <User />,
  },
  {
    nameEn: 'import products',
    nameAr: 'يستورد',
    descriptionEn: 'Company Information for front page data',
    descriptionAr: 'معلومات الشركة لبيانات الصفحة الأولى ',
    icon: <Import />,
  },
  {
    nameEn: 'export products',
    nameAr: 'يصدّر',
    descriptionEn: 'User Account who are managing this application',
    descriptionAr: 'حساب المستخدم الذين يديرون هذا التطبيق',
    icon: <Download />,
  },
];
