
import "./globals.css";

export const metadata = {
  title: "Princess Collections — Bold Fashionista Boutique",
  description: "Lingerie and women’s fashion. Bold, vibrant, and mobile‑first.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">{children}</body>
    </html>
  );
}
