import { client } from "../../sanity/lib/client";
import MapClientWrapper from "./MapClientWrapper";

const LOCATIONS_QUERY = `*[_type == "location"]{name, coordinates, posts}`;

export default async function MapPage() {
  const locations = await client.fetch(LOCATIONS_QUERY);

  return (
    <div>
      <div className="eyebrow">04 <span className="accent">/</span> MAP</div>
      <h1 className="hero" style={{ fontSize: "40px" }}>Places</h1>
      <div className="grid-note">Pinned by hand — each pin links to an Instagram post he&apos;s pasted in, no re-uploading.</div>
      <MapClientWrapper locations={locations} />
    </div>
  );
}
