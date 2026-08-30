import "./globals.css";
import Sidebar from "./components/Sidebar";
import { client } from "../sanity/lib/client";

export const revalidate = 30;

export const metadata = {
  title: "Photography site",
  description: "Photography, journal and gear",
};

const SETTINGS_QUERY = `*[_type == "siteSettings"][0]`;

export default async function RootLayout({ children }) {
  const settings = await client.fetch(SETTINGS_QUERY);

  return (
    <html lang="en">
      <body>
        <Sidebar settings={settings} />
        <main>{children}</main>
      </body>
    </html>
  );
}
