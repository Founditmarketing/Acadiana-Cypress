import { FadeUp } from '../components/Layout';
import { Phone } from 'lucide-react';

// Images sourced directly from each product page on acadiana-cypress.com
const IMGS = {
  // Flooring — verified actual installed floor photos only
  flooringHero:  '/images/358097624_299830609236411_8765642360038772533_n.jpg',  // Glossy wood floor, modern interior
  flooringA:     '/images/IMG_4832.png',   // Wide-plank floor, rustic dining room
  flooringB:     '/images/IMG_8484.png',   // Sinker cypress character floor, dark streaks

  // Hunting Blinds — actual hunting blind graphic from the OG page
  blindsHero:    '/images/Untitled-design-2024-03-25T120136.563.png',
  blindsA:       '/images/287379839_168241782319450_842021099019914168_n.jpg',    // Cypress pavilion frame
  blindsB:       '/images/276197468_151991650611130_2624331844763769457_n.jpg',   // Timber frame structure

  // Lumber — raw cypress lumber & slab photos from the lumber page
  lumberHero:    '/images/285671601_167157409094554_5220638392272731801_n.jpg',   // Raw cypress lumber pile
  lumberA:       '/images/840A4693.jpg',                                           // Sinker cypress slab
  lumberB:       '/images/298758633_181487877661507_4343768937848960734_n.jpg',   // Cypress boards
  lumberC:       '/images/87E92CDD-500F-46A0-A1DE-27884EF7D58A.jpg',             // Milled lumber
  lumberD:       '/images/FEBEE285-FEA5-454C-87AF-9BCEE1B70E06.jpg',             // Cypress cuts

  // Mantels — actual mantel photo from the mantels page
  mantelsHero:   '/images/IMG_8108.jpg',
  mantelsDetail: '/images/277509230_150868394056789_1940454017148676648_n.jpg',   // Ceiling & lantern

  // Posts & Beams — structural beam/post photos from the posts page
  beamsHero:     '/images/IMG_3501.jpg',
  beamsDetail:   '/images/840A4915.jpg',
  beamsExtra:    '/images/IMG_6103.jpg',

  // Tongue & Groove — T&G ceiling photos (OG page uses these)
  tgHero:        '/images/277509230_150868394056789_1940454017148676648_n.jpg',   // Overhead T&G + lantern
  tgA:           '/images/298758633_181487877661507_4343768937848960734_n.jpg',
  tgB:           '/images/87E92CDD-500F-46A0-A1DE-27884EF7D58A.jpg',
  tgC:           '/images/FEBEE285-FEA5-454C-87AF-9BCEE1B70E06.jpg',

  // Walls & Ceilings — interior paneling photos from the walls page
  wallsHero:     '/images/IMG_7713.jpg',
  wallsDetail:   '/images/840A4895.jpg',
  wallsA:        '/images/IMG_6881.jpg',
  wallsB:        '/images/IMG_6944-scaled.jpg',
};


function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-mahogany border-t-2 border-cypress-amber py-4 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <p className="text-antique-cream font-serif italic hidden md:block opacity-80">Ready to start your project?</p>
        <a href="tel:3182404688" className="flex items-center space-x-3 bg-cypress-amber text-antique-cream px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-milled-glow transition-colors mx-auto md:mx-0">
          <Phone size={18} />
          <span>Call Cody: (318) 240-4688</span>
        </a>
      </div>
    </div>
  );
}

export function Flooring() {
  return (
    <div className="pb-32">
      <section className="relative h-[40vh] flex items-center justify-center bg-mahogany overflow-hidden">
        <img src={IMGS.flooringHero} className="absolute inset-0 w-full h-full object-cover opacity-65" alt="Cypress porch flooring at golden hour" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany/70 via-transparent to-transparent" />
        <h1 className="relative text-6xl md:text-8xl font-display text-cypress-amber drop-shadow-2xl">Custom Flooring</h1>
      </section>
      <section className="max-w-7xl mx-auto py-24 px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
           <FadeUp>
             <h2 className="text-4xl font-serif text-mahogany">Milled to Your Exact Specifications</h2>
             <p className="text-xl text-charred-edge leading-relaxed mt-6">
                Our wide-plank flooring is harvested from the heart of Louisiana. We offer New, Sinker, and Antique varieties, each piece selected for its grain pattern and natural color profile.
             </p>
             <ul className="space-y-4 mt-8 font-sans font-bold uppercase tracking-widest text-xs text-charred-edge/70">
                <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-cypress-amber" /> <span>Standard 6", 8", and 10" widths</span></li>
                <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-cypress-amber" /> <span>Random lengths up to 16'</span></li>
                <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-cypress-amber" /> <span>Tongue & Groove precision milling</span></li>
             </ul>
           </FadeUp>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[IMGS.flooringHero, IMGS.flooringA, IMGS.flooringB].map((img, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                 <img src={img} className="w-full aspect-square object-cover shadow-xl grayscale hover:grayscale-0 transition-all duration-700" alt={`Cypress flooring project ${i + 1}`} />
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
    <div className="bg-antique-cream min-h-screen pb-32">
      <section className="relative h-[40vh] flex items-center justify-center bg-mahogany overflow-hidden">
        <img src={IMGS.blindsHero} className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Cypress timber frame hunting pavilion" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany/70 via-transparent to-transparent" />
        <h1 className="relative text-6xl md:text-8xl font-display text-cypress-amber drop-shadow-2xl">Hunting Blinds</h1>
      </section>
      <section className="max-w-4xl mx-auto py-24 px-4 text-center space-y-12">
         <FadeUp>
           <h2 className="text-4xl font-serif text-mahogany">Built to withstand the Louisiana elements.</h2>
           <p className="text-xl leading-relaxed text-charred-edge mt-8">
              Cypress is born in the swamp, and it belongs in the field. Our custom hunting blinds are rot-resistant and naturally camouflaged by the deep grain of the timber. This is the last blind you'll ever have to build.
           </p>
         </FadeUp>
         <FadeUp delay={0.2} className="flex justify-center">
           <img
             src={IMGS.blindsHero}
             alt="Cypress hunting blind"
             className="max-w-xl w-full shadow-2xl border-t-4 border-cypress-amber"
           />
         </FadeUp>
      </section>
      <StickyCallBar />
    </div>
  );
}

export function Lumber() {
  return (
    <div className="bg-mahogany min-h-screen text-antique-cream pb-32">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img src={IMGS.lumberHero} className="absolute inset-0 w-full h-full object-cover opacity-55" alt="Cypress lumber construction" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany/70 via-transparent to-transparent" />
        <h1 className="relative text-6xl md:text-8xl font-display text-cypress-amber drop-shadow-2xl">Raw Lumber</h1>
      </section>
      <section className="max-w-4xl mx-auto py-24 px-4 space-y-16">
         <FadeUp className="space-y-8">
           <h2 className="text-5xl font-serif text-cypress-amber text-glow">The King Lumber of Louisiana wetlands.</h2>
           <p className="text-xl leading-relaxed opacity-80">
              We provide rough-cut or planed-all-four-sides (S4S) cypress lumber for any scale project. Our mill specializes in custom board feet dimensions and massive timber sourcing that big-box stores simply can't touch.
           </p>
         </FadeUp>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[IMGS.lumberHero, IMGS.lumberA, IMGS.lumberB, IMGS.lumberC].map((img, i) => (
             <FadeUp key={i} delay={i * 0.1}>
               <img src={img} className="w-full aspect-square object-cover shadow-xl border-b-2 border-cypress-amber" alt={`Cypress lumber ${i + 1}`} />
             </FadeUp>
           ))}
         </div>
         <FadeUp delay={0.2} className="p-12 border-2 border-cypress-amber/20 text-center space-y-6">
            <h3 className="text-3xl font-serif">Pricing Note</h3>
            <p className="text-sm uppercase tracking-widest font-bold opacity-60">Custom Board Feet & Bulk Ordering</p>
            <p className="text-xl italic font-serif text-cypress-amber">"Call for current market pricing per board foot of our premium Louisiana Cypress."</p>
         </FadeUp>
      </section>
      <StickyCallBar />
    </div>
  );
}

export function Mantels() {
  return (
    <div className="bg-antique-cream min-h-screen pb-32 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 font-display text-mahogany opacity-[0.03] text-[20vw] pointer-events-none rotate-3">Masterpiece</div>
      <section className="relative h-[40vh] flex items-center justify-center bg-mahogany overflow-hidden">
        <img src={IMGS.mantelsHero} className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Cypress ceiling and lantern" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany/70 via-transparent to-transparent" />
        <h1 className="relative text-6xl md:text-8xl font-display text-cypress-amber drop-shadow-2xl">Custom Mantels</h1>
      </section>
      <section className="max-w-7xl mx-auto py-24 px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         <FadeUp className="space-y-8">
            <h2 className="text-4xl font-serif text-mahogany">The Ultimate Living Room Focal Point</h2>
            <p className="text-lg leading-relaxed text-charred-edge">
               A Pecky Cypress mantel is a conversation starter. Each piece is hand-selected and custom-sized to your fireplace. Whether you want a raw, rough-hewn beam or a polished, smooth-glow finish, we mill the slab to your soul's desire.
            </p>
         </FadeUp>
         <FadeUp delay={0.2}>
            <div className="relative group">
               <img src={IMGS.mantelsDetail} className="w-full shadow-2xl transition-all duration-700 brightness-90 group-hover:brightness-100" alt="Cypress interior ceiling detail" />
               <div className="absolute inset-0 border-8 border-mahogany/10 group-hover:border-cypress-amber/20 transition-all pointer-events-none" />
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
      <section className="relative h-[40vh] flex items-center justify-center bg-mahogany overflow-hidden">
        <img src={IMGS.beamsHero} className="absolute inset-0 w-full h-full object-cover opacity-65" alt="Cypress posts and columns on home" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany/70 via-transparent to-transparent" />
        <h1 className="relative text-6xl md:text-8xl font-display text-cypress-amber drop-shadow-2xl">Posts &amp; Beams</h1>
      </section>
      <section className="max-w-7xl mx-auto py-24 px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
         <FadeUp className="space-y-8">
            <h2 className="text-4xl font-serif text-mahogany">Structural Integrity, Natural Beauty.</h2>
            <p className="text-lg text-charred-edge leading-relaxed">
               Cypress posts and beams carry the weight of a home with a warmth that steel and pine cannot replicate. We mill structural grade beams for luxury residential and commercial builds.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
               <div className="space-y-2">
                  <p className="font-sans font-bold uppercase tracking-widest text-[10px] text-cypress-amber">Available Sizes</p>
                  <p className="text-mahogany font-serif text-lg">Up to 24' Long</p>
               </div>
               <div className="space-y-2">
                  <p className="font-sans font-bold uppercase tracking-widest text-[10px] text-cypress-amber">Dimensions</p>
                  <p className="text-mahogany font-serif text-lg">4×4 to 12×12+</p>
               </div>
            </div>
         </FadeUp>
         <div className="space-y-4">
            <FadeUp delay={0.1}>
               <img src={IMGS.beamsHero} className="w-full aspect-[4/3] object-cover shadow-2xl border-b-2 border-cypress-amber" alt="Cypress posts and beams install" />
            </FadeUp>
            <div className="grid grid-cols-2 gap-4">
               <FadeUp delay={0.2}>
                  <img src={IMGS.beamsDetail} className="w-full aspect-square object-cover shadow-xl border-b-2 border-cypress-amber" alt="Cypress structural beam detail" />
               </FadeUp>
               <FadeUp delay={0.3}>
                  <img src={IMGS.beamsExtra} className="w-full aspect-square object-cover shadow-xl border-b-2 border-cypress-amber" alt="Cypress beams installed" />
               </FadeUp>
            </div>
         </div>
      </section>
      <StickyCallBar />
    </div>
  );
}

export function TongueGroove() {
  return (
    <div className="bg-mahogany min-h-screen text-antique-cream pb-32">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img src={IMGS.tgHero} className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Cypress tongue and groove ceiling with lantern" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany/70 via-transparent to-transparent" />
        <h1 className="relative text-6xl md:text-8xl font-display text-cypress-amber drop-shadow-2xl">Tongue &amp; Groove</h1>
      </section>
      <section className="max-w-4xl mx-auto py-24 px-4 text-center space-y-16">
         <FadeUp className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-cypress-amber">Flawless Fit, Generational Durability.</h2>
            <p className="text-xl leading-relaxed opacity-80">
               Perfect for porches, ceilings, and exterior siding. Our precision milling ensures a seamless interlocking system that accounts for natural expansion and contraction.
            </p>
         </FadeUp>
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
           {[IMGS.tgHero, IMGS.tgA, IMGS.tgB, IMGS.tgC].map((img, i) => (
             <FadeUp key={i} delay={i * 0.1}>
                <img src={img} className="w-full aspect-square object-cover border-b-2 border-cypress-amber shadow-xl" alt="Cypress T&G ceiling detail" />
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
    <div className="bg-antique-cream min-h-screen pb-32">
      <section className="relative h-[40vh] flex items-center justify-center bg-mahogany overflow-hidden">
        <img src={IMGS.wallsHero} className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Cypress wall and ceiling paneling" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany/70 via-transparent to-transparent" />
        <h1 className="relative text-6xl md:text-8xl font-display text-cypress-amber drop-shadow-2xl">Walls &amp; Ceilings</h1>
      </section>
      <section className="max-w-7xl mx-auto py-24 px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
           {[IMGS.wallsHero, IMGS.wallsDetail, IMGS.wallsA, IMGS.wallsB].map((img, i) => (
             <FadeUp key={i} delay={i * 0.1}>
                <img src={img} className="w-full aspect-square object-cover border-b-2 border-cypress-amber shadow-xl" alt={`Cypress wall & ceiling ${i + 1}`} />
             </FadeUp>
           ))}
        </div>
         <FadeUp className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl font-serif text-mahogany">Warmth in Every Plank</h2>
            <p className="text-xl text-charred-edge leading-relaxed">
               Transform your interior space with the glowing orange aura of Louisiana cypress. Our paneling creates an atmosphere of timeless elegance, turning ordinary rooms into sunlit sanctuaries.
            </p>
            <div className="space-y-4">
               <div className="flex items-center space-x-4">
                  <div className="w-12 h-px bg-cypress-amber" />
                  <span className="font-sans font-bold uppercase tracking-widest text-xs">V-Joint or Shiplap profiles</span>
               </div>
               <div className="flex items-center space-x-4">
                  <div className="w-12 h-px bg-cypress-amber" />
                  <span className="font-sans font-bold uppercase tracking-widest text-xs">Available in Pecky or Select grades</span>
               </div>
            </div>
         </FadeUp>
      </section>
      <StickyCallBar />
    </div>
  );
}
