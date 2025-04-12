export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="max-w-prose w-full mx-auto px-8">{children}</section>
  );
}
