import { client } from "../../sanity/lib/client";

const GEAR_QUERY = `*[_type == "gearItem"] | order(order asc){name, category, notes}`;

export default async function GearPage() {
  const items = await client.fetch(GEAR_QUERY);

  return (
    <div>
      <div className="eyebrow">03 <span className="accent">/</span> GEAR</div>
      <h1 className="hero" style={{ fontSize: "40px" }}>Kit list</h1>
      <div className="gear-wrap">
        <table className="gear">
          <tbody>
            <tr><th>Item</th><th>Category</th><th>Notes</th></tr>
            {items.map((item, i) => (
              <tr key={i}>
                <td className="item">{item.name}</td>
                <td><span className="tag">{item.category ? item.category.toUpperCase() : ""}</span></td>
                <td className="notes">{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
