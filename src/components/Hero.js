import siteData from "../data/site-data.json";

export default function Hero() {
  const { restaurant, content, images } = siteData;

  return (
    <section className="bg-sand/60">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-20 text-center">
        <span className="inline-block rounded-full bg-terra/15 px-5 py-2 text-sm font-semibold text-terradark">
          {restaurant.cuisine || restaurant.tagline} ☀️
        </span>
        <h1 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-6xl">
          {content.welcomeHeading || restaurant.name}
        </h1>
        {content.welcomeSubtext && (
          <p className="mx-auto mt-5 max-w-xl text-lg text-coffee/75">
            {content.welcomeSubtext}
          </p>
        )}
        <a
          href="#speisekarte"
          className="mt-8 inline-block rounded-full bg-terra px-9 py-4 font-semibold text-cream shadow-md transition-all hover:bg-terradark hover:shadow-lg"
        >
          Zur Speisekarte
        </a>

        {images.hero ? (
          <img
            src={images.hero}
            alt={restaurant.name}
            className="mt-14 h-[55vh] w-full rounded-[2.5rem] object-cover shadow-xl"
          />
        ) : (
          <div className="mt-14 flex h-[40vh] w-full items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-terra/30 via-sand to-terra/20">
            <span className="font-display text-7xl font-bold text-terradark/30">
              {restaurant.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
