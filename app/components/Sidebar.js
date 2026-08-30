"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", num: "00", label: "Home" },
  { href: "/work", num: "01", label: "Work" },
  { href: "/journal", num: "02", label: "Journal" },
  { href: "/gear", num: "03", label: "Gear" },
  { href: "/map", num: "04", label: "Map" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div>
        <div className="brand">
          [ Your Name ]<span>Photography &amp; field notes</span>
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
