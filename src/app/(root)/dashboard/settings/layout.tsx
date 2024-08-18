export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="w-full p-2 md:p-6">{children}</main>;
}
