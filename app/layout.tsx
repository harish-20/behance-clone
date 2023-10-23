import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

import "@/app/globals.css";
export const metadata = {
  title: "Flexible",
  description: "Discover and showcase the projects by cool developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
