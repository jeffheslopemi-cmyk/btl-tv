export const metadata = { title: "BTL TV" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        background: "#050B18",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        margin: 0
      }}>
        {children}
      </body>
    </html>
  );
}
