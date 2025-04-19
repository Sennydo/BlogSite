import "./globals.css";
import Navbar from "@/(components)/navbar/navbar"
import Footer from "@/(components)/footer/footer";
import {lexend} from "@/(components)/fonts";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased`}>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
