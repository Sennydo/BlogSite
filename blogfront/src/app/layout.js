import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>HI how are you</h1>
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
