import siteData from "../data/site-data.json";

async function getImageOverrides() {
  const SB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SB_KEY = process.env.SUPABASE_SECRET_KEY;
  const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;
  if (!SB_URL || !SB_KEY || !PROJECT_ID) return {};
  try {
    const res = await fetch(
      `${SB_URL}/rest/v1/site_images?project_id=eq.${PROJECT_ID}&select=image_key,url`,
      { headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` }, cache: "no-store" }
    );
    const rows = await res.json();
    const map = {};
    (rows || []).forEach((r) => { map[r.image_key] = r.url; });
    return map;
  } catch {
    return {};
  }
}

export default async function Hero() {
  const { restaurant, content, images: defaultImages } = siteData;
  const overrides = await getImageOverrides();
  const images = { ...defaultImages, ...overrides };

  const chips = [restaurant.cuisine, restaurant.tagline, restaurant.city].filter(Boolean);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      {images.hero ? (
        <>
          <img
            src={images.hero}
            alt={restaurant.name}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ animation: "heroZoom 16s ease-out forwards" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-coffee via-terradark to-terra" />
      )}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-24 pt-40">
        {chips.length > 0 && (
          <div className="flex flex-wrap gap-2" style={{ animation: "fadeUp 0.9s ease-out both" }}>
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        )}

        <h1
          className="mt-6 max-w-4xl font-display text-6xl font-bold leading-[0.95] text-white sm:text-8xl"
          style={{ animation: "fadeUp 0.9s ease-out 0.15s both" }}
        >
          {content.welcomeHeading || restaurant.name}
        </h1>

        {content.welcomeSubtext && (
          <p
            className="mt-6 max-w-xl text-xl leading-relaxed text-white/80"
            style={{ animation: "fadeUp 0.9s ease-out 0.3s both" }}
          >
            {content.welcomeSubtext}
          </p>
        )}

        <div
          className="mt-10 flex flex-wrap items-center gap-6"
          style={{ animation: "fadeUp 0.9s ease-out 0.45s both" }}
        >
          <a
            href="#speisekarte"
            className="group inline-flex items-center gap-3 bg-terra px-10 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-xl shadow-terra/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-terradark"
          >
            Speisekarte entdecken
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>
          <a
            href="#kontakt"
            className="text-sm font-bold uppercase tracking-widest text-white/80 underline decoration-white/40 underline-offset-8 transition-colors hover:text-white hover:decoration-terra"
          >
            Kontakt
          </a>
        </div>
      </div>

      {/* İnce scroll göstergesi */}
      <div className="absolute bottom-0 left-1/2 z-10 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-white/60" />
    </section>
  );
}
