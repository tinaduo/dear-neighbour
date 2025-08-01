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
      <head>
        <title>dear neighbour</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-['FavoritMono']">
        <NavBar/>
        <main className="antialiased container mx-auto flex flex-col px-4 items-center justify-start min-h-screen space-y-40 pt-16 pb-32 md:px-12">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
