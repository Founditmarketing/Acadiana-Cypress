import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FadeUp } from '../components/Layout';
import { TreeDeciduous, Ship, Waves, Hammer, PlayCircle } from 'lucide-react';

// Real project photos from acadiana-cypress.com
const IMGS = {
  hero:         '/images/277299687_150868094056819_131842279301177619_n.jpg',   // Night-lit gable w/ cypress
  legacy:       '/images/277175532_150868224056806_1401704873125698893_n.jpg',  // Daytime cypress porch
  flooring:     '/images/277735522_151991600611135_2839161206587592020_n.jpg',  // White farmhouse porch
  beams:        '/images/277228654_150868260723469_3021594272097539731_n.jpg',  // Dark cypress columns
  tg:           '/images/272837486_137899615353667_3663043520166976821_n.jpg',  // Pavilion T&G ceiling
  walls:        '/images/289707034_171872228623072_7084350631170968445_n.jpg',  // Close-up T&G & beams
  posts:        '/images/277500704_150867020723593_1182661073734601728_n.jpg',  // Porch posts & shutters
  pavilion:     '/images/287379839_168241782319450_842021099019914168_n.jpg',   // New cypress pavilion
  millyard:     '/images/276160467_150867434056885_8706184336137964340_n.jpg',  // Cypress post porch dusk
  lantern:      '/images/277509230_150868394056789_1940454017148676648_n.jpg',  // Overhead cedar lantern
  construction: '/images/277754292_151991643944464_1444947564140231799_n.jpg',  // Under-construction w/ cypress
  browse:       '/images/276197468_151991650611130_2624331844763769457_n.jpg',  // Modern barn timber frame
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* 1. THE HERO (100vh) */}
      <section className="relative h-screen flex items-center justify-center bg-mahogany">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={IMGS.hero}
            className="w-full h-full object-cover opacity-50 scale-105"
            alt="Louisiana cypress home at night"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mahogany/60 via-mahogany/30 to-mahogany/80" />
        </div>
        
        {/* Heritage Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
          <div className="text-[200px] md:text-[300px] leading-none text-antique-cream opacity-[0.04] select-none font-display -rotate-12">
            Heritage
          </div>
        </div>

        <div className="relative z-20 text-center px-4 max-w-7xl mx-auto flex flex-col items-center">
          <FadeUp>
            <h2 className="text-cypress-amber text-xs md:text-sm uppercase tracking-[0.5em] font-bold mb-6">Custom Milled in South Louisiana</h2>
          </FadeUp>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[80px] md:text-[130px] lg:text-[160px] font-display text-cypress-amber leading-[0.85] mb-8 drop-shadow-2xl select-none"
          >
            The King of Lumber
          </motion.h1>

          <div className="flex flex-col lg:flex-row items-end space-y-12 lg:space-y-0 lg:space-x-16 max-w-5xl">
            <FadeUp delay={0.4} className="text-center lg:text-left space-y-8">
              <p className="text-antique-cream text-2xl md:text-3xl font-serif leading-tight">
                Water-Resistant. Decay-Resistant. <br />
                <span className="italic opacity-80 text-xl font-sans">Legendary Craftsmanship for Generations.</span>
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <Link
                  to="/browse-all"
                  className="bg-cypress-amber text-antique-cream px-10 py-5 uppercase font-bold text-sm tracking-widest hover:scale-105 transition-transform shadow-2xl"
                >
                  Browse Our Timber
                </Link>
                <Link
                  to="/why-cypress"
                  className="border border-cypress-amber text-cypress-amber px-10 py-5 uppercase font-bold text-sm tracking-widest hover:bg-cypress-amber hover:text-mahogany transition-colors"
                >
                  Our Story
                </Link>
              </div>
            </FadeUp>

            {/* Quick Feature Grid — self-end keeps bottom flush with buttons */}
            <div className="hidden md:grid grid-cols-2 gap-6 w-full lg:w-96">
               <div className="bg-cypress-amber/20 border border-cypress-amber/40 p-6 flex flex-col relative group overflow-hidden">
                  <div className="absolute inset-0 bg-cypress-amber opacity-0 group-hover:opacity-10 transition-opacity" />
                  <div className="relative z-10 space-y-1">
                    <div className="text-[10px] uppercase text-cypress-amber font-bold">Interior</div>
                    <div className="text-xl text-antique-cream font-serif uppercase tracking-tight">Cypress Flooring</div>
                  </div>
               </div>
               <div className="bg-cypress-amber/20 border border-cypress-amber/40 p-6 flex flex-col relative group overflow-hidden">
                  <div className="absolute inset-0 bg-cypress-amber opacity-0 group-hover:opacity-10 transition-opacity" />
                  <div className="relative z-10 space-y-1">
                    <div className="text-[10px] uppercase text-cypress-amber font-bold">Exterior</div>
                    <div className="text-xl text-antique-cream font-serif uppercase tracking-tight">Beams & Posts</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE TRUST BAR */}
      <section className="bg-mahogany border-y border-cypress-amber/30 py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Hammer, text: "Generations of Craftsmanship" },
            { icon: Ship, text: "Nationwide Shipping" },
            { icon: Waves, text: "Decay & Water Resistant" },
            { icon: TreeDeciduous, text: "Custom Milling" },
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-3 text-antique-cream/80 uppercase tracking-widest text-[10px] md:text-xs font-bold justify-center">
              <item.icon className="text-cypress-amber" size={20} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. THE LEGACY SPLIT */}
      <section className="relative py-24 bg-antique-cream overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-display text-mahogany opacity-[0.04] pointer-events-none whitespace-nowrap rotate-12">
          Heritage
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div className="relative aspect-[3/4] overflow-hidden group border-8 border-mahogany shadow-2xl">
              <img
                src={IMGS.legacy}
                className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-all duration-1000"
                alt="Acadiana Cypress porch with timber posts"
              />
              <div className="absolute inset-0 border-[20px] border-cypress-amber opacity-20 pointer-events-none" />
            </div>
          </FadeUp>
          <div className="space-y-8 relative z-10">
            <FadeUp>
              <h2 className="text-5xl md:text-7xl font-serif text-mahogany">Water-Resistant.<br />Decay-Resistant.<br />Legendary.</h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-lg text-charred-edge leading-relaxed first-letter:text-6xl first-letter:font-display first-letter:text-cypress-amber first-letter:mr-3 first-letter:float-left">
                Louisiana's Cypress is unique in the world of timber. Infused with a natural oily resin called cypresseine, this wood is born to resist the rot of the swamps. For generations, Acadiana Cypress has harvested this "King of Lumber" with respect for the bayou and a passion for the craft. Whether it's sinker cypress recovered from riverbeds or fresh-cut amber, our milling process preserves the fire-like glow and legendary durability of every plank.
              </p>
            </FadeUp>
            <FadeUp delay={0.4}>
              <Link to="/why-cypress" className="inline-block border-b-2 border-cypress-amber pb-1 text-mahogany font-bold uppercase tracking-widest text-sm hover:text-cypress-amber transition-colors">
                Discover Why Cypress →
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 4. FEATURED CATEGORIES GRID */}
      <section className="bg-mahogany py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          <div className="text-center space-y-4">
            <FadeUp>
              <h2 className="text-5xl md:text-7xl font-serif text-antique-cream">Milled to Perfection</h2>
            </FadeUp>
            <div className="h-1 w-32 bg-cypress-amber mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Flooring',        image: IMGS.millyard,     path: '/product/flooring' },
              { name: 'Posts & Beams',   image: IMGS.beams,         path: '/product/posts-beams' },
              { name: 'Mantels',         image: IMGS.lantern,       path: '/product/mantels' },
              { name: 'Tongue & Groove', image: IMGS.tg,            path: '/product/tongue-groove' },
              { name: 'Lumber',          image: IMGS.construction,  path: '/product/lumber' },
              { name: 'Hunting Blinds',  image: IMGS.pavilion,      path: '/product/hunting-blinds' },
            ].map((cat, i) => (
              <FadeUp key={cat.name} delay={i * 0.1}>
                <Link to={cat.path} className="group block relative aspect-video overflow-hidden border-b-4 border-cypress-amber">
                  <img
                    src={cat.image} 
                    className="w-full h-full object-cover brightness-50 group-hover:brightness-75 group-hover:scale-110 transition-all duration-700" 
                    alt={cat.name}
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <h3 className="text-3xl font-serif text-antique-cream tracking-wide group-hover:text-cypress-amber transition-colors drop-shadow-lg">
                      {cat.name}
                    </h3>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE MILLING PROCESS */}
      <section className="bg-antique-cream py-24 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { step: '1. Sustainably Harvested', icon: TreeDeciduous, desc: 'We source only from managed Louisiana wetlands, respecting the slow growth of the cypress.' },
            { step: '2. Custom Milled', icon: Hammer, desc: 'Our master sawyers cut to your exact dimensions, emphasizing the natural grain and glow.' },
            { step: '3. Nationwide Delivery', icon: Ship, desc: 'From our mill yard to your project site, we ship across all 48 lower states.' },
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.1} className="text-center space-y-6">
              <div className="w-20 h-20 bg-mahogany rounded-full flex items-center justify-center mx-auto shadow-xl">
                <item.icon className="text-cypress-amber" size={40} />
              </div>
              <h3 className="text-2xl font-serif text-mahogany">{item.step}</h3>
              <p className="text-charred-edge/80 leading-relaxed max-w-xs mx-auto text-sm">{item.desc}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* 6. "NEW LOCATION" BANNER */}
      <section className="bg-cypress-amber py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-serif text-mahogany">Big News!</h2>
            <p className="text-xl font-sans font-bold uppercase tracking-widest text-mahogany opacity-80">We've opened a new store in Grand Coteau!</p>
          </div>
          <Link to="/new-location" className="bg-mahogany text-antique-cream px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-charred-edge transition-colors shadow-2xl">
            Get Directions
          </Link>
        </div>
      </section>

      {/* 7. PROJECT SHOWCASE (replaces blank video) */}
      <section className="relative aspect-video bg-mahogany overflow-hidden group">
        <img
          src={IMGS.beams}
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]"
          alt="Cypress posts on Louisiana home"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany via-mahogany/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-end justify-end p-8 md:p-16">
          <div className="text-right space-y-4">
            <p className="text-cypress-amber font-sans font-bold uppercase tracking-[0.4em] text-xs">Featured Project</p>
            <h2 className="text-3xl md:text-5xl font-serif text-antique-cream">Custom Posts & Columns<br /><span className="text-cypress-amber">Acadiana, Louisiana</span></h2>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="bg-mahogany py-24 border-y border-cypress-amber/20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <FadeUp>
            <h2 className="text-5xl font-serif text-antique-cream mb-16">What the South is Saying</h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="relative px-8 md:px-16">
              <span className="text-[120px] font-display text-cypress-amber/30 leading-none select-none absolute -top-8 left-0">&ldquo;</span>
              <div className="space-y-8 py-4">
                <p className="text-xl md:text-2xl text-antique-cream/90 font-serif italic leading-relaxed">
                  The flooring we ordered for our hunting lodge was beyond expectation. That deep orange glow makes the whole place feel alive. Acadiana Cypress is truly the gold standard.
                </p>
                <cite className="block text-cypress-amber font-sans font-bold uppercase tracking-widest text-sm">— Jean-Paul LeBlanc, Abbeville, LA</cite>
              </div>
              <span className="text-[120px] font-display text-cypress-amber/30 leading-none select-none absolute -bottom-8 right-0">&rdquo;</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 9. NATIONWIDE SHIPPING CTA */}
      <section className="bg-antique-cream py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <FadeUp>
              <h2 className="text-5xl md:text-7xl font-serif text-mahogany">From the Bayous to Your Backyard.</h2>
              <p className="text-xl text-charred-edge/70 max-w-lg mt-4">We ship anywhere in the US. No project is too distant for the King of Lumber.</p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="flex items-center space-x-6">
                <div className="h-px bg-cypress-amber flex-grow" />
                <span className="font-display text-4xl text-cypress-amber whitespace-nowrap">Shipped Nationwide</span>
                <div className="h-px bg-cypress-amber flex-grow" />
              </div>
            </FadeUp>
          </div>
          <FadeUp delay={0.3}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Delivery Range', value: 'All 48 Lower States' },
                { label: 'Freight Quotes', value: 'Available Daily' },
                { label: 'Packaging', value: 'Mill-Secured Bundles' },
                { label: 'Lead Time', value: 'Call for Availability' },
              ].map((item) => (
                <div key={item.label} className="border border-cypress-amber/30 p-6 bg-mahogany/5 space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-cypress-amber">{item.label}</p>
                  <p className="text-lg font-serif text-mahogany">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="bg-mahogany py-32 text-center">
        <FadeUp>
          <div className="space-y-12">
            <h2 className="text-5xl md:text-8xl font-display text-cypress-amber tracking-wider">Ready to order?</h2>
            <div className="space-y-4">
               <p className="text-antique-cream font-sans uppercase tracking-[0.4em] font-bold text-sm">Call Cody personally at</p>
               <a href="tel:3182404688" className="block text-4xl md:text-6xl font-serif text-antique-cream hover:text-cypress-amber transition-colors">
                 (318) 240-4688
               </a>
            </div>
            <Link to="/contact" className="inline-block bg-cypress-amber text-antique-cream px-12 py-6 font-bold uppercase tracking-widest text-lg shadow-2xl hover:bg-milled-glow transition-all">
              Send an Inquiry
            </Link>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
