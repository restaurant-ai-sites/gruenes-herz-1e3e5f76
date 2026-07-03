import siteData from "../data/site-data.json";

const links = [
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#speisekarte", label: "Speisekarte" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-full border border-white/15 bg-black/35 px-6 py-3 shadow-lg backdrop-blur-lg">
        <a href="#" className="font-display text-lg font-bold tracking-tight text-white">
          {siteData.restaurant.name}
        </a>
        <ul className="flex items-center gap-4 text-sm font-semibold text-white/80 sm:gap-7">
          {links.map((link, i) => (
            <li key={link.href}>
              {i === links.length - 1 ? (
                <a
                  href={link.href}
                  className="rounded-full bg-terra px-4 py-1.5 text-white transition-all duration-300 hover:bg-terradark hover:shadow-md"
                >
                  {link.label}
                </a>
              ) : (
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
