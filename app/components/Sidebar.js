"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ settings }) {
  const pathname = usePathname();

  const brandName = settings?.brandName || "[ Your Name ]";
  const brandTagline = settings?.brandTagline || "Photography & field notes";

  const links = [
    { href: "/", num: "00", label: settings?.navHomeLabel || "Home" },
    { href: "/work", num: "01", label: settings?.navWorkLabel || "Work" },
    { href: "/journal", num: "02", label: settings?.navJournalLabel || "Journal" },
    { href: "/gear", num: "03", label: settings?.navGearLabel || "Gear" },
    { href: "/map", num: "04", label: settings?.navMapLabel || "Map" },
  ];

  return (
    <aside className="sidebar">
      <div>
        <div className="brand">
          {brandName}
          <span>{brandTagline}</span>
        </div>
        <nav className="frames">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={"frame-item" + (pathname === link.href ? " active" : "")}
            >
              <span className="tape"></span>
              <span className="num">{link.num}</span>
              <span className="label">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="sidebar-foot">EST. 2026 — UK</div>
    </aside>
  );
}
