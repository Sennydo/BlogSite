import "./globals.css";
import Navbar from "@/(components)/navbar/navbar"
import Footer from "@/(components)/footer/footer";
import {lexend} from "@/(components)/fonts";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased flex flex-col min-h-screen`}>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
