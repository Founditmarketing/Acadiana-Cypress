import { FadeUp, HorizontalScrollSection } from '../components/Layout';
import { Link } from 'react-router-dom';

const WOODS = [
  {
    id: 'new-cypress',
    name: 'New Cypress',
    subtitle: 'Fresh From the Mill',
    desc: "New Cypress is the gold standard of Southern lumber. Freshly milled from Louisiana swamp-grown trees, it carries a rich orange-amber tone and a natural oil — called cypresseine — that makes it naturally resistant to rot, insects, and moisture. It's the ideal choice for flooring, siding, porches, and outdoor structures.",
    specs: ['Natural rot resistance', 'Rich amber-orange grain', 'Custom widths & lengths', 'Ideal for indoor & outdoor use'],
    img: '/images/840A3281-scaled.jpg',
    dark: false,
  },
  {
    id: 'sinker-cypress',
    name: 'Sinker Cypress',
    subtitle: 'Ancient Reclaimed Treasure',
    desc: 'Sinker Cypress logs were submerged in Louisiana bayous and rivers for over a century, where they absorbed minerals and developed an exceptionally dense, rich grain that modern trees cannot replicate. Each slab tells a story older than most buildings in America — making it one of the most sought-after specialty woods in the world.',
    specs: ['100+ year old reclaimed logs', 'Mineral-rich, ultra-dense grain', 'Rare color variation', 'One-of-a-kind character'],
    img: '/images/840A4683.jpg',
    dark: true,
  },
  {
    id: 'pecky-cypress',
    name: 'Pecky Cypress',
    subtitle: "Nature's Own Artwork",
    desc: "Pecky Cypress is created by a fungus that hollows out pockets and channels in the wood while the tree is still living — a natural process that results in a dramatic, textured appearance unlike any other lumber on earth. The pockets and voids make it a favorite for ceilings, accent walls, mantels, and rustic interiors.",
    specs: ['Unique natural voids & pockets', 'One-of-a-kind texture', 'Perfect for ceilings & accent walls', 'Available in boards & slabs'],
    img: '/images/840A3243-scaled.jpg',
    dark: false,
  },
  {
    id: 'antique-pine-oak',
    name: 'Antique Pine & Oak',
    subtitle: 'Old Growth Character',
    desc: 'Reclaimed from barns, factories, and old-growth forests across the South, our Antique Pine and Oak carry the patina of history. Tight growth rings, nail holes, and weathered surfaces give these boards a depth and character that new lumber simply cannot achieve. Perfect for flooring, paneling, and statement furniture.',
    specs: ['Old-growth tight grain', 'Genuine patina & character', 'Nail holes & age marks', 'Available in wide planks'],
    img: '/images/277175532_150868224056806_1401704873125698893_n.jpg',
    dark: true,
  },
  {
    id: 'barnwood',
    name: 'Barnwood',
    subtitle: 'Weathered & Full of Story',
    desc: 'Our Barnwood is authentic reclaimed material pulled from old Louisiana agricultural structures. Sun-bleached, rain-washed, and hardened by decades of Southern weather, barnwood brings instant warmth and authenticity to any interior. Each board is unique — no two pieces are alike.',
    specs: ['Authentically weathered surface', 'Gray & silver tones', 'Great for feature walls', 'Truly one-of-a-kind pieces'],
    img: '/images/IMG_8577.jpeg',
    dark: false,
  },
  {
    id: 'mixed-hardwoods',
    name: 'Mixed Hardwoods',
    subtitle: 'Variety & Character',
    desc: "Our showroom is stocked with a rotating selection of Cypress, Willow, Cedar, Mixed Hardwoods, and Reclaimed material — including Kentucky Black, Kentucky White Wash, and Weathered Gray finishes. Whether you're after a sleek modern look or a rustic aged feel, we have a wood to match your vision.",
    specs: ['Cypress, Willow, Cedar, Reclaimed', 'Kentucky Black finish', 'Kentucky White Wash finish', 'Weathered Gray Mixed Hardwoods'],
    img: '/images/IMG_8433.jpeg',
    dark: true,
  },
];

export default function BrowseWood() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="relative h-[65vh] flex items-end bg-mahogany overflow-hidden pt-24">
        <img src="/images/840A4686.jpg" className="absolute inset-0 w-full h-full object-cover opacity-55 scale-105" alt="Live-edge cypress slab" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany via-mahogany/50 to-transparent" />
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pb-16 w-full space-y-4">
          <FadeUp>
            <p className="text-cypress-amber text-[11px] uppercase tracking-[0.4em] font-semibold">Louisiana Lumber Varieties</p>
            <h1 className="font-display text-[clamp(56px,8vw,110px)] text-antique-cream leading-none">Browse Our Wood</h1>
            <div className="h-px w-20 bg-cypress-amber mt-5" />
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-antique-cream/45 font-sans text-[10px] uppercase tracking-[0.3em]">
              New · Sinker · Pecky · Antique · Barnwood · Hardwoods
            </p>
          </FadeUp>
        </div>
      </section>

      {/* AMBER INTRO */}
      <section className="bg-cypress-amber py-7 px-6">
        <p className="max-w-3xl mx-auto text-center text-mahogany font-serif text-lg font-bold">
          Every piece of wood we sell is hand-selected from Louisiana's finest sources — fresh-milled, reclaimed, and everything in between.
        </p>
      </section>

      {/* HORIZONTAL QUICK-LOOK — 3 panels */}
      <HorizontalScrollSection panels={[
        <div className="w-full h-full bg-mahogany relative">
          <img src="/images/840A3281-scaled.jpg" alt="New Cypress" className="absolute inset-0 w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-mahogany via-mahogany/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-20 max-w-2xl">
            <p className="text-cypress-amber text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">01 — New Cypress</p>
            <h2 className="font-display text-[clamp(56px,8vw,110px)] text-cypress-amber leading-none">Fresh From the Mill</h2>
            <div className="h-px w-14 bg-cypress-amber my-6" />
            <p className="text-antique-cream/65 text-lg leading-relaxed font-serif max-w-lg">The gold standard of Southern lumber. Rich amber-orange tone. Naturally rot-resistant. Milled fresh from Louisiana swamp-grown trees.</p>
            <a href="#new-cypress" className="mt-8 inline-block border-b border-cypress-amber pb-1 text-cypress-amber font-bold uppercase tracking-[0.2em] text-[11px] hover:text-antique-cream transition-colors">View Details ↓</a>
          </div>
        </div>,
        <div className="w-full h-full bg-[#050100] relative">
          <img src="/images/840A4683.jpg" alt="Sinker Cypress" className="absolute inset-0 w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050100] via-[#050100]/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-20 max-w-2xl">
            <p className="text-cypress-amber text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">02 — Sinker Cypress</p>
            <h2 className="font-display text-[clamp(56px,8vw,110px)] text-antique-cream leading-none">Ancient Reclaimed Treasure</h2>
            <div className="h-px w-14 bg-cypress-amber my-6" />
            <p className="text-antique-cream/65 text-lg leading-relaxed font-serif max-w-lg">Logs submerged in Louisiana bayous for over a century. Mineral-rich. Ultra-dense. One of the most sought-after specialty woods in the world.</p>
            <a href="#sinker-cypress" className="mt-8 inline-block border-b border-cypress-amber pb-1 text-cypress-amber font-bold uppercase tracking-[0.2em] text-[11px] hover:text-antique-cream transition-colors">View Details ↓</a>
          </div>
        </div>,
        <div className="w-full h-full bg-charred-edge relative">
          <img src="/images/840A3243-scaled.jpg" alt="Pecky Cypress" className="absolute inset-0 w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-charred-edge via-charred-edge/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-20 max-w-2xl">
            <p className="text-cypress-amber text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">03 — Pecky Cypress</p>
            <h2 className="font-display text-[clamp(56px,8vw,110px)] text-cypress-amber leading-none">Nature's Own Artwork</h2>
            <div className="h-px w-14 bg-cypress-amber my-6" />
            <p className="text-antique-cream/65 text-lg leading-relaxed font-serif max-w-lg">Unique natural voids and pockets carved by a fungal process while the tree still lived. A texture impossible to manufacture and impossible to forget.</p>
            <a href="#pecky-cypress" className="mt-8 inline-block border-b border-cypress-amber pb-1 text-cypress-amber font-bold uppercase tracking-[0.2em] text-[11px] hover:text-antique-cream transition-colors">View Details ↓</a>
          </div>
        </div>,
      ]} />

      {/* WOOD SECTIONS — full-bleed alternating */}
      {WOODS.map((wood, i) => (
        <section
          key={wood.id}
          id={wood.id}
          className={`py-40 px-6 md:px-12 ${wood.dark ? 'bg-mahogany' : 'bg-antique-cream'}`}
        >
          <div className={`max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>

            {/* Image — full bleed, no border */}
            <FadeUp>
              <div className="overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src={wood.img}
                  alt={wood.name}
                  className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-[1.3s] ease-out"
                />
              </div>
            </FadeUp>

            {/* Content */}
            <FadeUp delay={0.15} className="space-y-7">
              <div>
                <p className={`font-display text-[clamp(48px,6vw,84px)] leading-none ${wood.dark ? 'text-cypress-amber' : 'text-mahogany'}`}>
                  {wood.name}
                </p>
                <p className={`font-sans font-bold uppercase tracking-[0.35em] text-[10px] mt-3 ${wood.dark ? 'text-antique-cream/40' : 'text-mahogany/40'}`}>
                  {wood.subtitle}
                </p>
                <div className="h-px w-12 bg-cypress-amber mt-5" />
              </div>

              <p className={`text-xl leading-relaxed font-serif ${wood.dark ? 'text-antique-cream/75' : 'text-charred-edge'}`}>
                {wood.desc}
              </p>

              <ul className="space-y-3">
                {wood.specs.map(spec => (
                  <li key={spec} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-cypress-amber shrink-0" />
                    <span className={`font-sans font-bold uppercase tracking-[0.2em] text-[10px] ${wood.dark ? 'text-antique-cream/55' : 'text-mahogany/55'}`}>
                      {spec}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/browse-all"
                className="inline-block border-b border-cypress-amber pb-1 text-cypress-amber font-bold uppercase tracking-[0.2em] text-[11px] hover:text-mahogany hover:border-mahogany transition-colors duration-300"
              >
                Shop Products →
              </Link>
            </FadeUp>
          </div>
        </section>
      ))}

      {/* FINAL CTA */}
      <section className="bg-deep-mahogany py-40 px-6 text-center">
        <FadeUp className="space-y-8 max-w-2xl mx-auto">
          <p className="font-display text-cypress-amber text-6xl leading-none">Can't decide?</p>
          <h2 className="text-3xl font-serif text-antique-cream">Come see it in person.</h2>
          <div className="h-px w-16 bg-cypress-amber mx-auto" />
          <p className="text-antique-cream/50 font-serif text-lg leading-relaxed">
            Visit either of our locations and our team will walk you through every variety and help you choose the perfect wood for your project.
          </p>
        </FadeUp>
        <FadeUp delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link to="/new-location" className="bg-cypress-amber text-mahogany px-12 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-antique-cream transition-colors shadow-2xl">
            Visit Grand Coteau
          </Link>
          <Link to="/contact" className="border border-cypress-amber/50 text-cypress-amber px-12 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-cypress-amber hover:text-mahogany transition-all duration-300">
            Contact Us
          </Link>
        </FadeUp>
      </section>
    </div>
  );
}
