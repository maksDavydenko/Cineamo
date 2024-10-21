import "../app/styles/globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "Cineamo",
  description: "Explore cinemas and movies",
};

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="text-white p-4 border-b-2">
          <nav className="container mx-auto flex justify-between">
            <Link href="/" className="text-3xl font-bold hover:text-gray-600">
              Cineamo
            </Link>
            <div>
              <Link href="/cinemas" className="mx-4 hover:text-gray-500">
                Cinemas
              </Link>
              <Link href="/movies" className="mx-4 hover:text-gray-500">
                Movies
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <footer className="container mx-auto text-center text-white">
          <p>© Cineamo 2024</p>
        </footer>
      </body>
    </html>
  );
}
