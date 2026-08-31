export const revalidate = 30;
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";

const POST_QUERY = `*[_type == "journalEntry" && slug.current == $slug][0]{title, date, mainImage, categories, body}`;

const components = {
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer">{children}</a>
    ),
  },
};

export default async function JournalPostPage({ params }) {
  const { slug } = await params;
  const entry = await client.fetch(POST_QUERY, { slug });

  if (!entry) {
    return <p style={{ color: "var(--text-dim)" }}>Entry not found.</p>;
  }

  return (
    <div>
      <div className="eyebrow">02 <span className="accent">/</span> JOURNAL</div>
      {entry.mainImage && (
        <img className="journal-thumb" style={{ width: "100%", maxWidth: "500px", aspectRatio: "4/5" }} src={urlFor(entry.mainImage).width(900).url()} alt="" />
      )}
      <div className="entry-meta">{entry.date}</div>
      <h1 className="hero" style={{ fontSize: "40px" }}>{entry.title}</h1>
      <div className="journal-cats" style={{ marginBottom: "28px" }}>
        {(entry.categories || []).map((cat, j) => (
          <span className="tag" key={j}>{cat.toUpperCase()}</span>
        ))}
      </div>
      <div style={{ color: "var(--text-dim)", fontSize: "16px", lineHeight: "1.7", maxWidth: "58ch" }}>
        <PortableText value={entry.body} components={components} />
      </div>
    </div>
  );
}
