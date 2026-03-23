export const metadata = {
  title: "BTL TV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#050B18", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
