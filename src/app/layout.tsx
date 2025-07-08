import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-['FavoritMono']">
        <NavBar/>
        <main className="antialiased flex flex-col mx-4 items-center justify-start min-h-screen space-y-40 my-16 2xl:mx-[195px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
