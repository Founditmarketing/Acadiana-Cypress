import { Link } from 'react-router-dom';
import { FadeUp, HorizontalScrollSection } from '../components/Layout';

const IMGS = {
  bayou:        '/images/277299687_150868094056819_131842279301177619_n.jpg',
  posts:        '/images/277500704_150867020723593_1182661073734601728_n.jpg',
  beams:        '/images/277228654_150868260723469_3021594272097539731_n.jpg',
  tg:           '/images/272837486_137899615353667_3663043520166976821_n.jpg',
  walls:        '/images/289707034_171872228623072_7084350631170968445_n.jpg',
  pavilion:     '/images/287379839_168241782319450_842021099019914168_n.jpg',
  construction: '/images/277754292_151991643944464_1444947564140231799_n.jpg',
  browse:       '/images/276197468_151991650611130_2624331844763769457_n.jpg',
  legacy:       '/images/277175532_150868224056806_1401704873125698893_n.jpg',
  millyard:     '/images/276160467_150867434056885_8706184336137964340_n.jpg',
  lantern:      '/images/277509230_150868394056789_1940454017148676648_n.jpg',
  farmhouse:    '/images/277735522_151991600611135_2839161206587592020_n.jpg',
};

/* ═══════════════════════════════════════════════════
   WHY CYPRESS
═══════════════════════════════════════════════════ */
export function WhyCypress() {
  const stats = [
    { value: '1963', label: 'Named Louisiana State Tree' },
    { value: '100+', label: 'Years Sinker logs aged in the bayou' },
    { value: '2×',   label: 'Harder than pine when dried' },
    { value: '∞',    label: 'Generations of rot-free performance' },
  ];

  const reasons = [
    {
      title: 'The Eternal Wood',
      subtitle: 'A History Older Than America',
      body: 'For centuries, the Native tribes of the Mississippi Delta relied on Cypress for building and medicine. When European settlers arrived, they found a wood that held up to Southern humidity where everything else failed. Henry Ford used Louisiana cypress in early Model T frames for its natural flex and rot resistance. In 1963 it was named the Louisiana State Tree.',
      img: '/images/277299687_150868094056819_131842279301177619_n.jpg',
      dark: false,
      flip: false,
    },
    {
      title: 'Cypresseine Resin',
      subtitle: 'Built-in Armor',
      body: "Mature cypress generates a natural preservative oil called cypresseine. This oil saturates the wood fibers, making them highly unpalatable to insects and naturally resistant to the water-borne fungi that cause rot in other timbers. It requires no chemical treatment — it's born this way. Pine rots. Oak warps. Cypress endures.",
      img: '/images/840A4693.jpg',
      dark: true,
      flip: true,
    },
    {
      title: 'Heartwood vs. Sapwood',
      subtitle: 'We Select the Best',
      body: 'The heartwood is the darker, center portion of the tree where the cypresseine oil is most concentrated. While sapwood is beautiful, our premium lumber is hand-selected for high heartwood content — the part of the tree that has been building its armor for decades. This is why Acadiana Cypress lumber outlasts anything at a big-box store.',
      img: '/images/840A3243-scaled.jpg',
      dark: false,
      flip: false,
    },
    {
      title: 'Born in the Swamp',
      subtitle: "Louisiana's Native Son",
      body: "No wood is more suited to the South than cypress. It grows in standing water, survives hurricanes, and only gets harder with time. Our cypress comes from Louisiana bayous and riverbeds — both freshly milled and reclaimed as Sinker Cypress from logs submerged for over a century, absorbing minerals and developing a density impossible to replicate.",
      img: '/images/IMG_8072.jpeg',
      dark: true,
      flip: true,
    },
  ];

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="relative h-[80vh] flex items-end bg-mahogany overflow-hidden pt-24">
        <img src="/images/IMG_8581.jpeg" className="absolute inset-0 w-full h-full object-cover opacity-45 scale-105" alt="Luxury cypress interior" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany via-mahogany/50 to-transparent" />
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pb-20 w-full space-y-4">
          <FadeUp>
            <p className="text-cypress-amber text-[11px] uppercase tracking-[0.4em] font-semibold">The Soul of the Southern Swamp</p>
            <h1 className="font-display text-[clamp(64px,10vw,130px)] text-cypress-amber leading-none">Why Cypress?</h1>
            <div className="h-px w-20 bg-cypress-amber mt-4" />
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-antique-cream/60 font-sans text-sm uppercase tracking-[0.3em] max-w-lg">
              Rot-resistant · Insect-proof · Dimensionally stable · Timeless
            </p>
          </FadeUp>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-cypress-amber py-12 px-6">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-mahogany">
          {stats.map((s, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <p className="font-display text-6xl md:text-7xl leading-none">{s.value}</p>
              <p className="font-sans font-bold uppercase tracking-[0.2em] text-[9px] mt-3 opacity-65">{s.label}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* REASONS — horizontal scroll 4 panels */}
      <HorizontalScrollSection panels={[
        <div className="w-full h-full bg-mahogany flex flex-col md:flex-row">
          <div className="flex-1 relative overflow-hidden">
            <img src="/images/277299687_150868094056819_131842279301177619_n.jpg" alt="Eternal Wood" className="w-full h-full object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-mahogany/85 hidden md:block" />
          </div>
          <div className="flex-1 flex items-center p-12 md:p-20">
            <div className="max-w-md space-y-6">
              <p className="text-cypress-amber text-[10px] uppercase tracking-[0.4em] font-semibold">01 / 04</p>
              <h2 className="font-display text-[clamp(48px,6vw,84px)] text-cypress-amber leading-none">The Eternal Wood</h2>
              <p className="text-antique-cream/35 text-[10px] uppercase tracking-[0.3em] font-bold">A History Older Than America</p>
              <div className="h-px w-12 bg-cypress-amber" />
              <p className="text-antique-cream/65 text-lg leading-relaxed font-serif">For centuries Native tribes of the Mississippi Delta revered the Cypress tree. Henry Ford used Louisiana cypress in early Model T chassis. Named Louisiana State Tree in 1963.</p>
            </div>
          </div>
        </div>,
        <div className="w-full h-full bg-[#080200] flex flex-col md:flex-row">
          <div className="flex-1 flex items-center justify-end p-12 md:p-20 order-2 md:order-1">
            <div className="max-w-md space-y-6">
              <p className="text-cypress-amber text-[10px] uppercase tracking-[0.4em] font-semibold">02 / 04</p>
              <h2 className="font-display text-[clamp(48px,6vw,84px)] text-antique-cream leading-none">Cypresseine Resin</h2>
              <p className="text-antique-cream/35 text-[10px] uppercase tracking-[0.3em] font-bold">Built-in Armor</p>
              <div className="h-px w-12 bg-cypress-amber" />
              <p className="text-antique-cream/65 text-lg leading-relaxed font-serif">Mature cypress generates cypresseine — a natural preservative oil that saturates wood fibers, making them resistant to insects and water-borne rot. No chemical treatment needed. Pine rots. Cypress endures.</p>
            </div>
          </div>
          <div className="flex-1 relative overflow-hidden order-1 md:order-2">
            <img src="/images/840A4693.jpg" alt="Cypresseine resin" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#080200]/80 hidden md:block" />
          </div>
        </div>,
        <div className="w-full h-full bg-antique-cream flex flex-col md:flex-row">
          <div className="flex-1 relative overflow-hidden">
            <img src="/images/840A3243-scaled.jpg" alt="Heartwood" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-antique-cream/85 hidden md:block" />
          </div>
          <div className="flex-1 flex items-center p-12 md:p-20">
            <div className="max-w-md space-y-6">
              <p className="text-cypress-amber text-[10px] uppercase tracking-[0.4em] font-semibold">03 / 04</p>
              <h2 className="font-display text-[clamp(48px,6vw,84px)] text-mahogany leading-none">Heartwood vs. Sapwood</h2>
              <p className="text-mahogany/40 text-[10px] uppercase tracking-[0.3em] font-bold">We Select the Best</p>
              <div className="h-px w-12 bg-cypress-amber" />
              <p className="text-charred-edge text-lg leading-relaxed font-serif">The darker center heartwood is where cypresseine oil concentrates. Our premium lumber is hand-selected for high heartwood content — where the tree has been building its armor for decades.</p>
            </div>
          </div>
        </div>,
        <div className="w-full h-full bg-mahogany flex flex-col md:flex-row">
          <div className="flex-1 flex items-center justify-end p-12 md:p-20 order-2 md:order-1">
            <div className="max-w-md space-y-6">
              <p className="text-cypress-amber text-[10px] uppercase tracking-[0.4em] font-semibold">04 / 04</p>
              <h2 className="font-display text-[clamp(48px,6vw,84px)] text-cypress-amber leading-none">Born in the Swamp</h2>
              <p className="text-antique-cream/35 text-[10px] uppercase tracking-[0.3em] font-bold">Louisiana's Native Son</p>
              <div className="h-px w-12 bg-cypress-amber" />
              <p className="text-antique-cream/65 text-lg leading-relaxed font-serif">No wood is more suited to the South than cypress. It grows in standing water, survives hurricanes, and only gets harder over time. Sinker logs submerged for over a century develop a density that can't be replicated.</p>
            </div>
          </div>
          <div className="flex-1 relative overflow-hidden order-1 md:order-2">
            <img src="/images/IMG_8072.jpeg" alt="Louisiana swamp" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-mahogany/80 hidden md:block" />
          </div>
        </div>,
      ]} />





      {/* FULL-BLEED QUOTE */}
      <section className="relative py-40 px-6 overflow-hidden">
        <img src="/images/840A3281-scaled.jpg" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Acadiana Cypress showroom" />
        <div className="absolute inset-0 bg-mahogany/88" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <FadeUp>
            <span className="text-cypress-amber font-display text-8xl leading-none select-none block -mb-6">"</span>
            <p className="text-antique-cream font-serif text-3xl md:text-4xl leading-relaxed italic">
              Louisiana's humidity destroys most building materials within a decade. Cypress isn't most building materials.
            </p>
            <div className="h-px w-16 bg-cypress-amber mx-auto mt-10" />
            <p className="text-antique-cream/40 font-sans uppercase tracking-[0.25em] text-[10px] mt-5">Cody — Acadiana Cypress</p>
          </FadeUp>
        </div>
      </section>

      {/* PHOTO MOSAIC */}
      <section className="bg-antique-cream py-32 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto space-y-12">
          <FadeUp className="text-center space-y-3">
            <h2 className="font-display text-6xl text-mahogany leading-none">See It For Yourself</h2>
            <div className="h-px w-16 bg-cypress-amber mx-auto" />
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              '/images/277509230_150868394056789_1940454017148676648_n.jpg',
              '/images/840A3258-scaled.jpg',
              '/images/IMG_8108.jpg',
              '/images/840A4915.jpg',
              '/images/277175532_150868224056806_1401704873125698893_n.jpg',
              '/images/IMG_3501.jpg',
              '/images/840A3231-scaled.jpg',
              '/images/287379839_168241782319450_842021099019914168_n.jpg',
            ].map((src, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="group overflow-hidden aspect-square">
                  <img src={src} alt={`Cypress project ${i + 1}`} className="w-full h-full object-cover group-hover:scale-[1.08] group-hover:brightness-75 transition-all duration-700" />
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="text-center pt-4">
            <Link to="/browse-all" className="inline-block bg-mahogany text-antique-cream px-14 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-charred-edge transition-colors shadow-2xl">
              Shop Our Products →
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   BROWSE ALL
═══════════════════════════════════════════════════ */
export function BrowseAll() {
  const products = [
    { name: 'Flooring',        desc: "Wide-plank custom flooring in New, Sinker, and Antique varieties.", path: '/product/flooring',       img: IMGS.farmhouse },
    { name: 'Hunting Blinds', desc: "Impervious to rot. The only blind you'll ever need to build.",      path: '/product/hunting-blinds', img: IMGS.pavilion },
    { name: 'Lumber',         desc: 'Rough-sawn or planed to your specific dimensions.',                  path: '/product/lumber',         img: IMGS.construction },
    { name: 'Mantels',        desc: 'One-of-a-kind centerpieces. Sawn from solid heartwood beams.',       path: '/product/mantels',        img: IMGS.lantern },
    { name: 'Posts & Beams',  desc: 'Structural integrity with unmatched aesthetic warmth.',              path: '/product/posts-beams',    img: IMGS.posts },
    { name: 'Tongue & Groove',desc: 'Precision milled for a perfect fit on any ceiling or porch.',       path: '/product/tongue-groove',  img: IMGS.tg },
    { name: 'Walls & Ceilings',desc: 'Transform interiors with the glowing warmth of cypress paneling.', path: '/product/walls-ceilings', img: IMGS.walls },
  ];

  return (
    <div className="bg-mahogany min-h-screen">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-end overflow-hidden pt-24">
        <img src={IMGS.browse} className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Timber frame barn with cypress" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany via-mahogany/60 to-transparent" />
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pb-16 w-full">
          <h1 className="font-display text-[clamp(56px,9vw,120px)] text-cypress-amber leading-none">Our Timber</h1>
        </div>
      </section>

      {/* PRODUCT GRID — portrait cards, full overlay */}
      <section className="max-w-[1600px] mx-auto py-24 px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((item, i) => (
            <FadeUp key={item.path} delay={i * 0.06}>
              <Link to={item.path} className="group block relative aspect-[3/4] overflow-hidden">
                <img
                  src={item.img}
                  className="w-full h-full object-cover brightness-50 group-hover:brightness-40 group-hover:scale-[1.06] transition-all duration-700"
                  alt={item.name}
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-mahogany/90 via-mahogany/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <h2 className="text-2xl md:text-3xl font-serif text-antique-cream group-hover:text-cypress-amber transition-colors duration-500">{item.name}</h2>
                  <p className="text-antique-cream/50 text-sm leading-relaxed mt-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 font-sans">{item.desc}</p>
                  <div className="h-px w-0 bg-cypress-amber group-hover:w-10 transition-all duration-500 mt-4" />
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
