import { FadeUp } from '../components/Layout';
import { Link } from 'react-router-dom';

const WOODS = [
  {
    id: 'new-cypress',
    name: 'New Cypress',
    subtitle: 'Fresh From the Mill',
    desc: 'New Cypress is the gold standard of Southern lumber. Freshly milled from Louisiana swamp-grown trees, it carries a rich orange-amber tone and a natural oil — called cypresseine — that makes it naturally resistant to rot, insects, and moisture. It\'s the ideal choice for flooring, siding, porches, and outdoor structures.',
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
    subtitle: 'Nature\'s Own Artwork',
    desc: 'Pecky Cypress is created by a fungus that hollows out pockets and channels in the wood while the tree is still living — a natural process that results in a dramatic, textured appearance unlike any other lumber on earth. The pockets and voids make it a favorite for ceilings, accent walls, mantels, and rustic interiors.',
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
    name: 'Mixed Hardwoods & Reclaimed',
    subtitle: 'Variety & Character',
    desc: 'Our showroom is stocked with a rotating selection of Cypress, Willow, Cedar, Mixed Hardwoods, and Reclaimed material — including Kentucky Black, Kentucky White Wash, and Weathered Gray finishes. Whether you\'re after a sleek modern look or a rustic aged feel, we have a wood to match your vision.',
    specs: ['Cypress, Willow, Cedar, Reclaimed', 'Kentucky Black finish', 'Kentucky White Wash finish', 'Weathered Gray Mixed Hardwoods'],
    img: '/images/IMG_8433.jpeg',
    dark: true,
  },
];

export default function BrowseWood() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center bg-mahogany overflow-hidden">
        <img
          src="/images/840A4686.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-55 scale-105"
          alt="Live-edge cypress slab"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mahogany/60 via-mahogany/30 to-mahogany/85" />
        <div className="relative z-10 text-center px-4 space-y-3">
          <FadeUp>
            <p className="font-display text-cypress-amber text-5xl md:text-6xl leading-none">Browse Our Wood</p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h1 className="text-2xl md:text-4xl font-serif text-white uppercase tracking-widest font-bold">Louisiana Lumber Varieties</h1>
            <div className="h-1 w-20 bg-cypress-amber mx-auto mt-4" />
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-antique-cream/75 font-sans text-sm uppercase tracking-[0.3em]">New · Sinker · Pecky · Antique · Barnwood · Hardwoods</p>
          </FadeUp>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-cypress-amber py-6 px-4">
        <p className="max-w-3xl mx-auto text-center text-mahogany font-serif text-lg font-bold">
          Every piece of wood we sell is hand-selected from Louisiana's finest sources — fresh-milled, reclaimed, and everything in between.
        </p>
      </section>

      {/* WOOD SECTIONS */}
      {WOODS.map((wood, i) => (
        <section
          key={wood.id}
          id={wood.id}
          className={`py-24 px-4 md:px-8 ${wood.dark ? 'bg-mahogany' : 'bg-antique-cream'}`}
        >
          <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''}`}>

            {/* Image */}
            <FadeUp>
              <div className="relative overflow-hidden shadow-2xl border-b-4 border-cypress-amber group">
                <img
                  src={wood.img}
                  alt={wood.name}
                  className="w-full h-80 md:h-[28rem] object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className={`absolute inset-0 ${wood.dark ? 'bg-mahogany/20' : 'bg-antique-cream/10'}`} />
              </div>
            </FadeUp>

            {/* Content */}
            <FadeUp delay={0.15} className="space-y-6">
              <div>
                <p className="font-display text-cypress-amber text-4xl md:text-5xl leading-none">{wood.name}</p>
                <p className={`font-sans font-bold uppercase tracking-[0.35em] text-xs mt-2 ${wood.dark ? 'text-antique-cream/50' : 'text-mahogany/50'}`}>{wood.subtitle}</p>
                <div className="h-0.5 w-12 bg-cypress-amber mt-4" />
              </div>
              <p className={`text-lg leading-relaxed font-serif ${wood.dark ? 'text-antique-cream/85' : 'text-charred-edge'}`}>{wood.desc}</p>
              <ul className="space-y-2">
                {wood.specs.map(spec => (
                  <li key={spec} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cypress-amber flex-shrink-0" />
                    <span className={`font-sans font-bold uppercase tracking-widest text-xs ${wood.dark ? 'text-antique-cream/70' : 'text-mahogany/70'}`}>{spec}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/browse-all"
                className="inline-block bg-cypress-amber text-mahogany px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-mahogany hover:text-antique-cream transition-colors shadow-lg"
              >
                Shop Products →
              </Link>
            </FadeUp>
          </div>
        </section>
      ))}

      {/* FINAL CTA */}
      <section className="bg-mahogany py-24 px-4 text-center space-y-8">
        <FadeUp>
          <p className="font-display text-cypress-amber text-5xl leading-none">Can't decide?</p>
          <h2 className="text-3xl font-serif text-antique-cream mt-2">Come see it in person.</h2>
          <div className="h-1 w-16 bg-cypress-amber mx-auto mt-4" />
          <p className="text-antique-cream/70 max-w-xl mx-auto mt-6 font-serif text-lg">
            Visit either of our locations and our team will walk you through every variety and help you choose the perfect wood for your project.
          </p>
        </FadeUp>
        <FadeUp delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/new-location" className="bg-cypress-amber text-mahogany px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-antique-cream transition-colors shadow-2xl">
            Visit Grand Coteau
          </Link>
          <Link to="/contact" className="border border-cypress-amber text-cypress-amber px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-cypress-amber hover:text-mahogany transition-colors">
            Contact Us
          </Link>
        </FadeUp>
      </section>

    </div>
  );
}
