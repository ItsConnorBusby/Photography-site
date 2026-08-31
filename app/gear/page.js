export const revalidate = 30;
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";

const GEAR_QUERY = `*[_type == "gearItem"] | order(order asc){name, category, notes, image}`;

export default async function GearPage() {
  const items = await client.fetch(GEAR_QUERY);

  return (
    <div>
      <div className="eyebrow">03 <span className="accent">/</span> GEAR</div>
      <h1 className="hero" style={{ fontSize: "40px" }}>Kit list</h1>
      <div className="gear-grid">
        {items.length === 0 && <p style={{ color: "var(--text-dim)" }}>No gear added yet — add a Gear item in the Studio.</p>}
        {items.map((item, i) => (
          <div className="gear-card" key={i}>
            <div className="gear-card-image" style={item.image ? { backgroundImage: `url(${urlFor(item.image).width(500).url()})` } : {}}></div>
            <div className="gear-card-body">
              <h3>{item.name}</h3>
              <span className="tag">{item.category ? item.category.toUpperCase() : ""}</span>
              <p className="gear-card-notes">{item.notes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
