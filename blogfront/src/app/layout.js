import "./globals.css";
import Navbar from "@/(components)/navbar/navbar"
import {lexend} from "@/(components)/fonts";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased`}>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
