import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "AlgoBrave Assignment",
  description: "Full Stack User Management App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}


