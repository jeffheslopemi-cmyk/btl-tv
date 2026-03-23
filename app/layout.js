export const metadata = {
  title: "BTL TV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        background: "#020617",
        color: "white",
        fontFamily: "Arial, sans-serif"
      }}>
        {children}
      </body>
    </html>
  );
}
