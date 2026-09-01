export const revalidate = 30;
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";

const WORK_QUERY = `*[_type == "workPost"] | order(order asc){frameNumber, instagramUrl, image}`;

export default async function WorkPage() {
  const posts = await client.fetch(WORK_QUERY);

  return (
    <div>
      <div className="eyebrow">01 <span className="accent">/</span> WORK</div>
      <h1 className="hero" style={{ fontSize: "40px" }}>Photography</h1>
      <div className="grid-note">Added by pasting an Instagram post link — same as the map, no auto-sync to maintain.</div>
      <div className="photo-grid">
        {posts.length === 0 && <p style={{ color: "var(--text-dim)" }}>No photos added yet — add a Work photo in the Studio.</p>}
        {posts.map((post, i) => (
          <a key={i} href={post.instagramUrl} target="_blank" rel="noopener noreferrer" className="photo-card" style={post.image ? { backgroundImage: `url(${urlFor(post.image).width(600).url()})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}>
            <span className="frame-no">{post.frameNumber}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
