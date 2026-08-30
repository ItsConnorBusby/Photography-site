import { client } from "../../sanity/lib/client";
import { PortableText } from "@portabletext/react";

const JOURNAL_QUERY = `*[_type == "journalEntry"] | order(date desc){title, date, body}`;

const components = {
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

export default async function JournalPage() {
  const entries = await client.fetch(JOURNAL_QUERY);

  return (
    <div>
      <div className="eyebrow">02 <span className="accent">/</span> JOURNAL</div>
      <h1 className="hero" style={{ fontSize: "40px" }}>Field notes</h1>
      {entries.length === 0 && <p style={{ color: "var(--text-dim)" }}>No entries yet — add a Journal entry in the Studio.</p>}
      {entries.map((entry, i) => (
        <div className="entry" key={i}>
          <div className="entry-meta">{entry.date}</div>
          <h2>{entry.title}</h2>
          <div style={{ color: "var(--text-dim)", fontSize: "15px", lineHeight: "1.65", maxWidth: "58ch" }}>
            <PortableText value={entry.body} components={components} />
          </div>
        </div>
      ))}
    </div>
  );
}
