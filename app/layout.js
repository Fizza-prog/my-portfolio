import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "My Portfolio",
  description: "Frontend developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-950 antialiased">
        <Navbar />

        <main className="min-h-[calc(100vh-145px)]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}