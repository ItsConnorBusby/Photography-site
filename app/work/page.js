export const revalidate = 30;
import { client } from "../../sanity/lib/client";

const WORK_QUERY = `*[_type == "workPost"] | order(order asc){frameNumber, instagramUrl}`;

async function getThumbnail(url) {
  try {
    const res = await fetch(
      `https://graph.facebook.com/v25.0/instagram_oembed?url=${encodeURIComponent(url)}&maxwidth=400`,
      { next: { revalidate: 30 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.thumbnail_url || null;
  } catch {
    return null;
  }
}

export default async function WorkPage() {
  const posts = await client.fetch(WORK_QUERY);
  const withThumbnails = await Promise.all(
    posts.map(async (post) => ({
      ...post,
      thumbnail: post.instagramUrl ? await getThumbnail(post.instagramUrl) : null,
    }))
  );

  return (
    <div>
      <div className="eyebrow">01 <span className="accent">/</span> WORK</div>
      <h1 className="hero" style={{ fontSize: "40px" }}>Photography</h1>
      <div className="grid-note">Added by pasting an Instagram post link — same as the map, no auto-sync to maintain.</div>
      <div className="photo-grid">
        {withThumbnails.length === 0 && <p style={{ color: "var(--text-dim)" }}>No photos added yet — add a Work photo in the Studio.</p>}
        {withThumbnails.map((post, i) => (
          <a key={i} href={post.instagramUrl} target="_blank" rel="noopener noreferrer" className="photo-card" style={post.thumbnail ? { backgroundImage: `url(${post.thumbnail})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}>
            <span className="frame-no">{post.frameNumber}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
