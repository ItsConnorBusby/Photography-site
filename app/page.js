export const revalidate = 30;
import Link from "next/link";
import { client } from "../sanity/lib/client";
import { urlFor } from "../sanity/lib/image";

const HOME_QUERY = `*[_type == "home"][0]`;

export default async function HomePage() {
  const data = await client.fetch(HOME_QUERY);

  const eyebrow = data?.eyebrow || "PHOTOGRAPHY — JOURNAL — GEAR";
  const headlineStart = data?.headlineStart || "Stories, shot on";
  const underlinedWord = data?.underlinedWord || "film";
  const headlineEnd = data?.headlineEnd || "and remembered in words.";
  const tapeLabel = data?.tapeLabel || "FRAME 01 / ONGOING";
  const intro = data?.intro || "Placeholder introduction — add real copy in the Studio.";
  const photoUrl = data?.heroPhoto ? urlFor(data.heroPhoto).width(900).url() : null;

  return (
    <div className="hero-layout">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="hero">
          {headlineStart}{" "}
          <span className="underline-wrap">
            {underlinedWord}
            <svg viewBox="0 0 200 18" preserveAspectRatio="none">
              <path
                d="M2,10 C40,2 70,15 100,8 C130,2 160,14 198,6"
                fill="none"
                stroke="#ff8c1a"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          {headlineEnd}
        </h1>
        <div className="hero-tape">{tapeLabel}</div>
        <p className="lede">{intro}</p>
        <div className="hero-links">
          <Link href="/work">View the work →</Link>
          <Link href="/journal">Read the journal →</Link>
        </div>
      </div>
      <div className="hero-photo" style={photoUrl ? { backgroundImage: `url(${photoUrl})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}>
        {!photoUrl && <span className="frame-no">36A</span>}
      </div>
    </div>
  );
}
