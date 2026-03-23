import "./globals.css";

export const metadata = {
  title: "BTL TV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white bg-[#020617]">
        {children}
      </body>
    </html>
  );
}
import "./globals.css";
