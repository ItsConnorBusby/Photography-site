import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Photography site",
  description: "Photography, journal and gear",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
