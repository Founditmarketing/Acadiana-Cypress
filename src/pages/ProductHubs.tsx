import { Link } from 'react-router-dom';
import { FadeUp } from '../components/Layout';

const IMGS = {
  bayou:        '/images/277299687_150868094056819_131842279301177619_n.jpg',   // Night gable hero
  posts:        '/images/277500704_150867020723593_1182661073734601728_n.jpg',  // Porch posts & shutters
  beams:        '/images/277228654_150868260723469_3021594272097539731_n.jpg',  // Dark columns
  tg:           '/images/272837486_137899615353667_3663043520166976821_n.jpg',  // Pavilion T&G ceiling
  walls:        '/images/289707034_171872228623072_7084350631170968445_n.jpg',  // Close-up T&G
  pavilion:     '/images/287379839_168241782319450_842021099019914168_n.jpg',   // Cypress pavilion
  construction: '/images/277754292_151991643944464_1444947564140231799_n.jpg',  // Under construction
  browse:       '/images/276197468_151991650611130_2624331844763769457_n.jpg',  // Timber frame barn
  legacy:       '/images/277175532_150868224056806_1401704873125698893_n.jpg',  // Daytime porch
  millyard:     '/images/276160467_150867434056885_8706184336137964340_n.jpg',  // Porch at dusk
  lantern:      '/images/277509230_150868394056789_1940454017148676648_n.jpg',  // Overhead cedar
  farmhouse:    '/images/277735522_151991600611135_2839161206587592020_n.jpg',  // White farmhouse
};

export function WhyCypress() {
  const stats = [
    { value: '1963',  label: 'Named Louisiana State Tree' },
    { value: '100+',  label: 'Years Sinker logs aged in the bayou' },
    { value: '2×',    label: 'Harder than pine when dried' },
    { value: '∞',     label: 'Generations of rot-free performance' },
  ];

  const reasons = [
    {
      title: 'The Eternal Wood',
      subtitle: 'A History Older Than America',
      body: 'For centuries, the Native tribes of the Mississippi Delta revered the Cypress tree for its medicine and its bones. When European settlers arrived, they found a wood that laughed at Southern humidity. Even Henry Ford used Louisiana cypress for the chassis of early Model T automobiles — for its natural flex and legendary rot resistance. In 1963 it was named the Louisiana State Tree.',
      img: '/images/277299687_150868094056819_131842279301177619_n.jpg',
      dark: false,
      flip: false,
    },
    {
      title: 'Cypresseine Resin',
      subtitle: 'Built-in Armor',
      body: 'Mature cypress generates a natural preservative oil called cypresseine. This oil saturates the wood fibers, making them highly unpalatable to insects and naturally resistant to the water-borne fungi that cause rot in other timbers. It requires no chemical treatment — it\'s born this way. Pine rots. Oak warps. Cypress endures.',
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
      subtitle: 'Louisiana\'s Native Son',
      body: 'No wood is more suited to the South than cypress. It grows in standing water, survives hurricanes, and ages like fine whiskey. Our cypress comes from Louisiana bayous and riverbeds — both freshly milled and reclaimed as Sinker Cypress from logs that have been submerged for over a century, absorbing minerals and developing a density impossible to replicate.',
      img: '/images/IMG_8072.jpeg',
      dark: true,
      flip: true,
    },
  ];

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center bg-mahogany overflow-hidden">
        <img
          src="/images/IMG_8581.jpeg"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-110"
          alt="Luxury cypress interior"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mahogany/65 via-mahogany/30 to-mahogany/90" />
        <div className="relative z-10 text-center px-4 space-y-4 max-w-4xl mx-auto">
          <FadeUp>
            <p className="font-display text-cypress-amber text-6xl md:text-8xl leading-none">Why Cypress?</p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-widest">The Soul of the Southern Swamp</h1>
            <div className="h-1 w-24 bg-cypress-amber mx-auto mt-5" />
          </FadeUp>
          <FadeUp delay={0.35}>
            <p className="text-antique-cream/75 font-sans text-sm uppercase tracking-[0.35em] max-w-xl mx-auto">
              Rot-resistant · Insect-proof · Dimensionally stable · Timeless
            </p>
          </FadeUp>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="bg-cypress-amber py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-mahogany">
          {stats.map((s, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <p className="font-display text-5xl md:text-6xl leading-none">{s.value}</p>
              <p className="font-sans font-bold uppercase tracking-widest text-[10px] mt-2 opacity-70">{s.label}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ALTERNATING SECTIONS */}
      {reasons.map((r, i) => (
        <section key={i} className={`py-24 px-4 md:px-8 ${r.dark ? 'bg-mahogany' : 'bg-antique-cream'}`}>
          <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${r.flip ? 'lg:flex lg:flex-row-reverse' : ''}`}>

            <FadeUp>
              <div className="relative overflow-hidden shadow-2xl border-b-4 border-cypress-amber group aspect-[4/3]">
                <img
                  src={r.img}
                  alt={r.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.15} className="space-y-6">
              <div>
                <p className={`font-sans font-bold uppercase tracking-[0.35em] text-xs ${r.dark ? 'text-antique-cream/40' : 'text-mahogany/40'}`}>{r.subtitle}</p>
                <h2 className={`font-display text-5xl md:text-6xl leading-none mt-1 ${r.dark ? 'text-cypress-amber' : 'text-mahogany'}`}>{r.title}</h2>
                <div className="h-0.5 w-12 bg-cypress-amber mt-4" />
              </div>
              <p className={`text-xl leading-relaxed font-serif ${r.dark ? 'text-antique-cream/85' : 'text-charred-edge'}`}>{r.body}</p>
            </FadeUp>

          </div>
        </section>
      ))}

      {/* FULL-BLEED QUOTE */}
      <section className="relative py-32 px-4 overflow-hidden">
        <img
          src="/images/840A3281-scaled.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="Acadiana Cypress showroom"
        />
        <div className="absolute inset-0 bg-mahogany/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <FadeUp>
            <p className="text-cypress-amber font-display text-7xl leading-none">"</p>
            <p className="text-antique-cream font-serif text-2xl md:text-3xl leading-relaxed italic -mt-4">
              Other woods beg for mercy in the Louisiana climate. Cypress just gets stronger.
            </p>
            <div className="h-px w-16 bg-cypress-amber mx-auto mt-8" />
            <p className="text-antique-cream/50 font-sans uppercase tracking-widest text-xs mt-4">Cody — Acadiana Cypress</p>
          </FadeUp>
        </div>
      </section>

      {/* PHOTO MOSAIC */}
      <section className="bg-antique-cream py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <FadeUp className="text-center space-y-2">
            <h2 className="font-display text-5xl text-mahogany leading-none">See It For Yourself</h2>
            <div className="h-1 w-16 bg-cypress-amber mx-auto mt-3" />
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
                <div className="group overflow-hidden aspect-square border-b-2 border-cypress-amber">
                  <img
                    src={src}
                    alt={`Cypress project ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-75 transition-all duration-700"
                  />
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="text-center pt-6">
            <Link
              to="/browse-all"
              className="inline-block bg-mahogany text-antique-cream px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-charred-edge transition-colors shadow-2xl"
            >
              Shop Our Products →
            </Link>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}


export function BrowseAll() {
  return (
    <div className="bg-antique-cream min-h-screen">
      <section className="relative h-[40vh] flex items-center justify-center bg-mahogany overflow-hidden">
        <img src={IMGS.browse} className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Timber frame barn with cypress accents" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany via-transparent to-transparent" />
        <h1 className="relative text-6xl md:text-8xl font-display text-cypress-amber drop-shadow-2xl">Our Timber</h1>
      </section>

      <section className="max-w-7xl mx-auto py-24 px-4 md:px-8">
        {/* Row 1 — 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {[
            { name: 'Flooring',       desc: "Wide-plank custom flooring in New, Sinker, and Antique varieties.",  path: '/product/flooring',       img: IMGS.farmhouse },
            { name: 'Hunting Blinds', desc: "Impervious to rot. The only blind you'll ever need to build.",        path: '/product/hunting-blinds', img: IMGS.pavilion },
            { name: 'Lumber',         desc: 'Rough-sawn or planed to your specific dimensions.',                   path: '/product/lumber',         img: IMGS.construction },
            { name: 'Mantels',        desc: 'One-of-a-kind centerpieces. Sawn from solid heartwood beams.',        path: '/product/mantels',        img: IMGS.lantern },
          ].map((item, i) => (
            <FadeUp key={item.path} delay={i * 0.05} className="group bg-white flex flex-col shadow-lg border-b-4 border-mahogany overflow-hidden">
              <div className="overflow-hidden aspect-square">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.name} />
              </div>
              <div className="p-6 space-y-3 flex-grow flex flex-col">
                <h2 className="text-2xl font-serif text-mahogany">{item.name}</h2>
                <p className="text-charred-edge leading-relaxed text-sm flex-grow">{item.desc}</p>
                <Link to={item.path} className="inline-block bg-cypress-amber text-antique-cream px-6 py-3 font-bold uppercase tracking-widest text-xs text-center hover:bg-mahogany transition-colors">
                  View Details
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Row 2 — 3 cards, centered under the middle */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-3/4 mx-auto">
          {[
            { name: 'Posts & Beams',    desc: 'Structural integrity with unmatched aesthetic warmth.',             path: '/product/posts-beams',    img: IMGS.posts },
            { name: 'Tongue & Groove',  desc: 'Precision milled for a perfect fit on any ceiling or porch.',      path: '/product/tongue-groove',  img: IMGS.tg },
            { name: 'Walls & Ceilings', desc: 'Transform interiors with the glowing warmth of cypress paneling.', path: '/product/walls-ceilings', img: IMGS.walls },
          ].map((item, i) => (
            <FadeUp key={item.path} delay={i * 0.05} className="group bg-white flex flex-col shadow-lg border-b-4 border-mahogany overflow-hidden">
              <div className="overflow-hidden aspect-square">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.name} />
              </div>
              <div className="p-6 space-y-3 flex-grow flex flex-col">
                <h2 className="text-2xl font-serif text-mahogany">{item.name}</h2>
                <p className="text-charred-edge leading-relaxed text-sm flex-grow">{item.desc}</p>
                <Link to={item.path} className="inline-block bg-cypress-amber text-antique-cream px-6 py-3 font-bold uppercase tracking-widest text-xs text-center hover:bg-mahogany transition-colors">
                  View Details
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
