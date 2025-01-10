export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-full min-h-screen bg-gray-50">{children}</div>;
}
