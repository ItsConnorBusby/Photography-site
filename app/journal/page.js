export const revalidate = 30;
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";

const JOURNAL_QUERY = `*[_type == "journalEntry"] | order(date desc){title, "slug": slug.current, date, mainImage, categories}`;

export default async function JournalPage() {
  const entries = await client.fetch(JOURNAL_QUERY);

  return (
    <div>
      <div className="eyebrow">02 <span className="accent">/</span> JOURNAL</div>
      <h1 className="hero" style={{ fontSize: "40px" }}>Field notes</h1>
      <div className="journal-grid">
        {entries.length === 0 && <p style={{ color: "var(--text-dim)" }}>No entries yet — add a Journal entry in the Studio.</p>}
        {entries.map((entry, i) => (
          <Link href={`/journal/${entry.slug}`} className="journal-card" key={i}>
            <div className="journal-card-image" style={entry.mainImage ? { backgroundImage: `url(${urlFor(entry.mainImage).width(500).url()})` } : {}}></div>
            <div className="journal-card-body">
              <div className="journal-card-meta">{entry.date}</div>
              <h3>{entry.title}</h3>
              <div className="journal-cats">
                {(entry.categories || []).map((cat, j) => (
                  <span className="tag" key={j}>{cat.toUpperCase()}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
