import { FadeUp } from '../components/Layout';
import { Phone } from 'lucide-react';

const IMGS = {
  flooringHero:  '/images/358097624_299830609236411_8765642360038772533_n.jpg',
  flooringA:     '/images/IMG_4832.png',
  flooringB:     '/images/IMG_8484.png',
  blindsHero:    '/images/Untitled-design-2024-03-25T120136.563.png',
  blindsA:       '/images/287379839_168241782319450_842021099019914168_n.jpg',
  blindsB:       '/images/276197468_151991650611130_2624331844763769457_n.jpg',
  lumberHero:    '/images/285671601_167157409094554_5220638392272731801_n.jpg',
  lumberA:       '/images/840A4693.jpg',
  lumberB:       '/images/298758633_181487877661507_4343768937848960734_n.jpg',
  lumberC:       '/images/87E92CDD-500F-46A0-A1DE-27884EF7D58A.jpg',
  mantelsHero:   '/images/IMG_8108.jpg',
  mantelsDetail: '/images/277509230_150868394056789_1940454017148676648_n.jpg',
  beamsHero:     '/images/IMG_3501.jpg',
  beamsDetail:   '/images/840A4915.jpg',
  beamsExtra:    '/images/IMG_6103.jpg',
  tgHero:        '/images/277509230_150868394056789_1940454017148676648_n.jpg',
  tgA:           '/images/298758633_181487877661507_4343768937848960734_n.jpg',
  tgB:           '/images/87E92CDD-500F-46A0-A1DE-27884EF7D58A.jpg',
  tgC:           '/images/FEBEE285-FEA5-454C-87AF-9BCEE1B70E06.jpg',
  wallsHero:     '/images/IMG_7713.jpg',
  wallsDetail:   '/images/840A4895.jpg',
  wallsA:        '/images/IMG_6881.jpg',
  wallsB:        '/images/IMG_6944-scaled.jpg',
};

function ProductHero({ src, alt, title }: { src: string; alt: string; title: string }) {
  return (
    <section className="relative h-[65vh] flex items-end bg-mahogany overflow-hidden pt-24">
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-t from-mahogany via-mahogany/40 to-transparent" />
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pb-16 w-full">
        <h1 className="font-display text-[clamp(56px,8vw,110px)] text-cypress-amber leading-none drop-shadow-2xl">
          {title}
        </h1>
      </div>
    </section>
  );
}

function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-md bg-mahogany/85 border-t border-cypress-amber/25 py-4 shadow-2xl">
      <div className="max-w-[1600px] mx-auto px-6 flex justify-between items-center">
        <p className="text-antique-cream/50 font-serif italic hidden md:block text-sm">Ready to start your project?</p>
        <a href="tel:3182404688" className="flex items-center gap-3 bg-cypress-amber text-mahogany px-8 py-3 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-milled-glow transition-colors mx-auto md:mx-0">
          <Phone size={16} />
          <span>Call Cody: (318) 240-4688</span>
        </a>
      </div>
    </div>
  );
}

export function Flooring() {
  return (
    <div className="pb-32">
      <ProductHero src={IMGS.flooringHero} alt="Cypress porch flooring" title="Custom Flooring" />
      <section className="max-w-[1600px] mx-auto py-32 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <FadeUp className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-mahogany">Milled to Your Exact Specifications</h2>
          <div className="h-px w-16 bg-cypress-amber" />
          <p className="text-xl text-charred-edge leading-relaxed font-serif">Our wide-plank flooring is harvested from the heart of Louisiana. We offer New, Sinker, and Antique varieties, each piece selected for its grain pattern and natural color profile.</p>
          <ul className="space-y-4">
            {["Standard 6\", 8\", and 10\" widths", "Random lengths up to 16'", "Tongue & Groove precision milling"].map(spec => (
              <li key={spec} className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] font-bold text-charred-edge/60">
                <div className="w-1 h-5 bg-cypress-amber shrink-0" />{spec}
              </li>
            ))}
          </ul>
        </FadeUp>
        <div className="grid grid-cols-3 gap-3">
          {[IMGS.flooringHero, IMGS.flooringA, IMGS.flooringB].map((img, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="overflow-hidden aspect-square">
                <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-[1.06] transition-all duration-700" alt={`Flooring ${i + 1}`} />
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
      <StickyCallBar />
    </div>
  );
}

export function HuntingBlinds() {
  return (
    <div className="pb-32">
      <ProductHero src={IMGS.blindsHero} alt="Cypress hunting pavilion" title="Hunting Blinds" />
      <section className="max-w-4xl mx-auto py-32 px-6 text-center space-y-12">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-serif text-mahogany">Built to withstand the Louisiana elements.</h2>
          <div className="h-px w-16 bg-cypress-amber mx-auto mt-6" />
          <p className="text-xl leading-relaxed text-charred-edge mt-8 font-serif">Cypress is born in the swamp, and it belongs in the field. Our custom hunting blinds are rot-resistant and naturally camouflaged by the deep grain of the timber. This is the last blind you'll ever have to build.</p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="overflow-hidden max-w-xl mx-auto">
            <img src={IMGS.blindsHero} alt="Cypress hunting blind" className="w-full shadow-2xl hover:scale-[1.03] transition-transform duration-[1.2s]" />
          </div>
        </FadeUp>
        <FadeUp delay={0.25}>
          <div className="grid grid-cols-2 gap-4">
            {[IMGS.blindsA, IMGS.blindsB].map((img, i) => (
              <div key={i} className="overflow-hidden aspect-[4/3]">
                <img src={img} alt={`Hunting blind detail ${i + 1}`} className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-700" />
              </div>
            ))}
          </div>
        </FadeUp>
      </section>
      <StickyCallBar />
    </div>
  );
}

export function Lumber() {
  return (
    <div className="bg-mahogany text-antique-cream pb-32">
      <ProductHero src={IMGS.lumberHero} alt="Cypress lumber" title="Raw Lumber" />
      <section className="max-w-[1600px] mx-auto py-32 px-6 md:px-12 space-y-20">
        <FadeUp className="space-y-8 max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-serif text-cypress-amber text-glow">The King Lumber of Louisiana wetlands.</h2>
          <div className="h-px w-16 bg-cypress-amber" />
          <p className="text-xl leading-relaxed opacity-75 font-serif">We provide rough-cut or planed-all-four-sides (S4S) cypress lumber for any scale project. Our mill specializes in custom board feet dimensions and massive timber sourcing that big-box stores simply can't touch.</p>
        </FadeUp>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[IMGS.lumberHero, IMGS.lumberA, IMGS.lumberB, IMGS.lumberC].map((img, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="overflow-hidden aspect-square">
                <img src={img} className="w-full h-full object-cover hover:scale-[1.06] transition-transform duration-700" alt={`Lumber ${i + 1}`} />
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.2}>
          <div className="p-14 border border-cypress-amber/15 text-center space-y-4 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif">Pricing Note</h3>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Custom Board Feet & Bulk Ordering</p>
            <p className="text-2xl italic font-serif text-cypress-amber">"Call for current market pricing per board foot of our premium Louisiana Cypress."</p>
          </div>
        </FadeUp>
      </section>
      <StickyCallBar />
    </div>
  );
}

export function Mantels() {
  return (
    <div className="bg-antique-cream pb-32 relative overflow-hidden">

      <ProductHero src={IMGS.mantelsHero} alt="Cypress ceiling and lantern" title="Custom Mantels" />
      <section className="max-w-[1600px] mx-auto py-32 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <FadeUp className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-mahogany">The Ultimate Living Room Focal Point</h2>
          <div className="h-px w-16 bg-cypress-amber" />
          <p className="text-lg leading-relaxed text-charred-edge font-serif">A Pecky Cypress mantel is a natural focal point. Each piece is hand-selected and custom-sized to your fireplace opening. We mill to your exact specifications — rough-hewn or smooth-finished, whatever the project calls for.</p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="overflow-hidden shadow-2xl">
            <img src={IMGS.mantelsDetail} className="w-full hover:scale-[1.04] transition-transform duration-[1.2s]" alt="Cypress interior ceiling" />
          </div>
        </FadeUp>
      </section>
      <StickyCallBar />
    </div>
  );
}

export function PostsBeams() {
  return (
    <div className="pb-32">
      <ProductHero src={IMGS.beamsHero} alt="Cypress posts and beams" title="Posts & Beams" />
      <section className="max-w-[1600px] mx-auto py-32 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <FadeUp className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-mahogany">Structural Integrity, Natural Beauty.</h2>
          <div className="h-px w-16 bg-cypress-amber" />
          <p className="text-lg text-charred-edge leading-relaxed font-serif">Cypress posts and beams carry the weight of a home with a warmth that steel and pine cannot replicate. We mill structural grade beams for luxury residential and commercial builds.</p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            {[{ label: 'Available Sizes', value: "Up to 24' Long" }, { label: 'Dimensions', value: '4×4 to 12×12+' }].map(item => (
              <div key={item.label} className="space-y-2">
                <p className="font-sans font-bold uppercase tracking-[0.2em] text-[9px] text-cypress-amber">{item.label}</p>
                <p className="text-mahogany font-serif text-xl">{item.value}</p>
              </div>
            ))}
          </div>
        </FadeUp>
        <div className="space-y-3">
          <FadeUp>
            <div className="overflow-hidden">
              <img src={IMGS.beamsHero} className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-700 shadow-2xl" alt="Cypress posts install" />
            </div>
          </FadeUp>
          <div className="grid grid-cols-2 gap-3">
            {[IMGS.beamsDetail, IMGS.beamsExtra].map((img, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="overflow-hidden aspect-square">
                  <img src={img} className="w-full h-full object-cover hover:scale-[1.06] transition-transform duration-700" alt={`Beam detail ${i + 1}`} />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
      <StickyCallBar />
    </div>
  );
}

export function TongueGroove() {
  return (
    <div className="bg-mahogany text-antique-cream pb-32">
      <ProductHero src={IMGS.tgHero} alt="Cypress T&G ceiling" title="Tongue & Groove" />
      <section className="max-w-4xl mx-auto py-32 px-6 text-center space-y-16">
        <FadeUp className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif text-cypress-amber">Flawless Fit, Generational Durability.</h2>
          <div className="h-px w-16 bg-cypress-amber mx-auto" />
          <p className="text-xl leading-relaxed opacity-75 font-serif">Perfect for porches, ceilings, and exterior siding. Our precision milling ensures a seamless interlocking system that accounts for natural expansion and contraction.</p>
        </FadeUp>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[IMGS.tgHero, IMGS.tgA, IMGS.tgB, IMGS.tgC].map((img, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="overflow-hidden aspect-square">
                <img src={img} className="w-full h-full object-cover hover:scale-[1.06] transition-transform duration-700" alt="Cypress T&G detail" />
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
      <StickyCallBar />
    </div>
  );
}

export function WallsCeilings() {
  return (
    <div className="bg-antique-cream pb-32">
      <ProductHero src={IMGS.wallsHero} alt="Cypress wall paneling" title="Walls & Ceilings" />
      <section className="max-w-[1600px] mx-auto py-32 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="grid grid-cols-2 gap-3">
          {[IMGS.wallsHero, IMGS.wallsDetail, IMGS.wallsA, IMGS.wallsB].map((img, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="overflow-hidden aspect-square">
                <img src={img} className="w-full h-full object-cover hover:scale-[1.06] transition-transform duration-700" alt={`Wall & ceiling ${i + 1}`} />
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-mahogany">Warmth in Every Plank</h2>
          <div className="h-px w-16 bg-cypress-amber" />
          <p className="text-xl text-charred-edge leading-relaxed font-serif">Cypress paneling brings real warmth and natural character to any interior. The rich grain and amber tones work in everything from modern farmhouses to traditional Louisiana homes.</p>
          <div className="space-y-4">
            {['V-Joint or Shiplap profiles', 'Available in Pecky or Select grades'].map(spec => (
              <div key={spec} className="flex items-center gap-4">
                <div className="w-8 h-px bg-cypress-amber" />
                <span className="font-bold uppercase tracking-[0.2em] text-[10px] text-charred-edge/60">{spec}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>
      <StickyCallBar />
    </div>
  );
}
