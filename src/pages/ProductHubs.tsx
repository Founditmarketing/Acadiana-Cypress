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
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-mahogany overflow-hidden">
        <img src={IMGS.bayou} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Louisiana cypress home at night" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany/60 via-transparent to-transparent" />
        <h1 className="relative text-7xl md:text-9xl font-display text-cypress-amber text-center drop-shadow-2xl px-4">The Soul of the Swamp</h1>
      </section>

      {/* Section 1: The History */}
      <section className="bg-antique-cream py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeUp>
            <h2 className="text-4xl md:text-6xl font-serif text-mahogany">The History</h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="prose prose-lg text-charred-edge leading-relaxed">
              <p>For centuries, the Native tribes of the Mississippi Delta revered the Cypress tree for its medicine and its bones. When European settlers arrived, they found a wood that laughed at the humidity of the South. It became known as "The Eternal Wood."</p>
              <p>Even Henry Ford recognized its strength; the chassis of the early Model T was built from Louisiana cypress because of its natural flex and rot resistance. In 1963, in recognition of its deep roots in our culture, it was named the Louisiana State Tree.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section 2: The Science */}
      <section className="bg-mahogany py-24 px-4 md:px-8 text-antique-cream">
        <div className="max-w-4xl mx-auto space-y-12">
          <FadeUp>
            <h2 className="text-4xl md:text-6xl font-serif text-cypress-amber">The Science of Durability</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans">
             <FadeUp delay={0.2} className="space-y-4">
               <h3 className="text-2xl font-serif text-milled-glow">Cypresseine Resins</h3>
               <p className="opacity-80">Mature cypress generates a natural preservative oil called cypresseine. This oil saturates the wood fibers, making them highly unpalatable to insects and naturally resistant to the water-borne fungi that cause rot in other timbers.</p>
             </FadeUp>
             <FadeUp delay={0.3} className="space-y-4">
               <HeartwoodVsSapwood />
             </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 3: Types of Cypress */}
      <section className="bg-antique-cream py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { type: 'New Cypress', desc: 'Freshly harvested from managed wetlands. Vibrant orange, consistent texture, and perfect for modern structural projects.', img: IMGS.posts },
              { type: 'Sinker Cypress', desc: 'Preserved under river silt for over a century. Features deep, moody colors and incredible stability due to mineral absorption.', img: IMGS.beams },
              { type: 'Pecky Cypress', desc: 'Natural pocketing caused by a fungus while the tree was standing. Creates a stunning, honeycomb texture highly prized for decorative use.', img: IMGS.walls },
            ].map((item, i) => (
              <FadeUp key={item.type} delay={i * 0.1} className="bg-white border-b-4 border-cypress-amber p-8 shadow-xl space-y-6">
                <img src={item.img} alt={item.type} className="w-full aspect-video object-cover" />
                <h3 className="text-3xl font-serif text-mahogany">{item.type}</h3>
                <p className="text-charred-edge leading-relaxed">{item.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function HeartwoodVsSapwood() {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-serif text-milled-glow">Heartwood vs Sapwood</h3>
      <p className="opacity-80">The heartwood is the darker, center portion of the tree where the cypresseine is most concentrated. While sapwood is beautiful, our premium lumber is selected for high heartwood content to ensure the legend lives on for generations.</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { name: 'Flooring', desc: "Wide-plank custom flooring in New, Sinker, and Antique varieties.", path: '/product/flooring', img: IMGS.farmhouse },
            { name: 'Hunting Blinds', desc: "Impervious to rot. The only blind you'll ever need to build.", path: '/product/hunting-blinds', img: IMGS.pavilion },
            { name: 'Lumber', desc: 'Rough-sawn or planed to your specific dimensions.', path: '/product/lumber', img: IMGS.construction },
            { name: 'Mantels', desc: 'One-of-a-kind centerpieces. Sawn from solid heartwood beams.', path: '/product/mantels', img: IMGS.lantern },
            { name: 'Posts & Beams', desc: 'Structural integrity with unmatched aesthetic warmth.', path: '/product/posts-beams', img: IMGS.posts },
            { name: 'Tongue & Groove', desc: 'Precision milled for a perfect fit on any ceiling or porch.', path: '/product/tongue-groove', img: IMGS.tg },
            { name: 'Walls & Ceilings', desc: 'Transform interiors with the glowing warmth of cypress paneling.', path: '/product/walls-ceilings', img: IMGS.walls },
          ].map((item, i) => (
            <FadeUp key={item.path} delay={i * 0.05} className="group bg-white flex flex-col shadow-lg border-b-4 border-mahogany overflow-hidden">
               <div className="overflow-hidden aspect-square">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.name} />
               </div>
               <div className="p-8 space-y-4 flex-grow flex flex-col">
                  <h2 className="text-3xl font-serif text-mahogany">{item.name}</h2>
                  <p className="text-charred-edge leading-relaxed flex-grow">{item.desc}</p>
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
