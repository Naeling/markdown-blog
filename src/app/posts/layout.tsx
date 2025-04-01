export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="max-w-prose mx-auto w-full">{children}</section>;
}
