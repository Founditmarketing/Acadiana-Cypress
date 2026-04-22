import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { FadeUp } from '../components/Layout';
import { TreeDeciduous, Ship, Waves, Hammer } from 'lucide-react';

// Reusable parallax background image — image drifts 15% as section scrolls through viewport
function ParallaxBg({ src, alt, opacity = 'opacity-100' }: { src: string; alt: string; opacity?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover ${opacity}`}
        style={{ y, scale: 1.35 }}
      />
    </div>
  );
}

const IMGS = {
  // 2025 professional shots
  hero:         '/images/840A3281-scaled.jpg',       // Showroom entrance — rocking chairs, warm welcome
  aboutSide:    '/images/840A3278-scaled.jpg',       // Full showroom exterior — professional wide shot
  cypressBg:    '/images/IMG_8581.jpeg',             // Luxury interior — cypress floors + forest windows
  slabBg:       '/images/840A4683.jpg',              // Long beautiful cypress slab — dramatic grain
  showroom:     '/images/IMG_8433.jpeg',             // Wide showroom interior — scale & inventory
  shipping:     '/images/IMG_1603-scaled.jpeg',      // Flatbed loaded with cypress beams
  pecky:        '/images/840A3243-scaled.jpg',       // Pecky cypress slabs standing upright
  stacks:       '/images/IMG_8435.jpeg',             // Warehouse lumber stacks — impressive scale
  slabClose:    '/images/840A4686.jpg',              // Artistic live-edge slab close-up

  // Original project photos (kept for category cards)
  legacy:       '/images/277175532_150868224056806_1401704873125698893_n.jpg',
  flooring:     '/images/277735522_151991600611135_2839161206587592020_n.jpg',
  beams:        '/images/277228654_150868260723469_3021594272097539731_n.jpg',
  tg:           '/images/272837486_137899615353667_3663043520166976821_n.jpg',
  walls:        '/images/289707034_171872228623072_7084350631170968445_n.jpg',
  posts:        '/images/277500704_150867020723593_1182661073734601728_n.jpg',
  pavilion:     '/images/287379839_168241782319450_842021099019914168_n.jpg',
  millyard:     '/images/276160467_150867434056885_8706184336137964340_n.jpg',
  lantern:      '/images/277509230_150868394056789_1940454017148676648_n.jpg',
  construction: '/images/277754292_151991643944464_1444947564140231799_n.jpg',
  browse:       '/images/276197468_151991650611130_2624331844763769457_n.jpg',
};

export default function Home() {
  return (
    <div className="overflow-hidden">

      {/* 1. HERO */}
      <section className="relative h-screen flex items-center justify-center bg-mahogany">
        <ParallaxBg src={IMGS.hero} alt="Acadiana Cypress showroom entrance" opacity="opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-mahogany/80 via-mahogany/60 to-mahogany/95" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
          <div className="text-[200px] md:text-[300px] leading-none text-antique-cream opacity-[0.04] select-none font-display -rotate-12">Heritage</div>
        </div>
        <div className="relative z-20 text-center px-4 max-w-7xl mx-auto flex flex-col items-center">
          <FadeUp>
            <h2 className="text-cypress-amber text-xs md:text-sm uppercase tracking-[0.5em] font-bold mb-16">Custom Milled in South Louisiana</h2>
          </FadeUp>
          <motion.h1
            className="text-[80px] md:text-[130px] lg:text-[160px] font-display text-white leading-[0.85] mb-8 drop-shadow-2xl select-none flex flex-wrap justify-center gap-x-8"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
          >
            {['The', 'King', 'of', 'Lumber'].map((word) => (
              <motion.span
                key={word}
                className="inline-block"
                variants={{
                  hidden:  { opacity: 0, y: 80, scale: 0.75, filter: 'blur(12px)' },
                  visible: { opacity: 1, y: 0,  scale: 1,    filter: 'blur(0px)',
                    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <FadeUp delay={0.4} className="space-y-8">
            <p className="text-antique-cream text-2xl md:text-3xl font-serif leading-tight">
              Water-Resistant. Decay-Resistant. <br />
              <span className="italic opacity-80 text-xl font-sans">Legendary Craftsmanship for Generations.</span>
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link to="/browse-all" className="bg-cypress-amber text-antique-cream px-10 py-5 uppercase font-bold text-sm tracking-widest hover:scale-105 transition-transform shadow-2xl">
                Browse Our Timber
              </Link>
              <Link to="/why-cypress" className="border border-cypress-amber text-cypress-amber px-10 py-5 uppercase font-bold text-sm tracking-widest hover:bg-cypress-amber hover:text-mahogany transition-colors">
                Our Story
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="bg-mahogany border-y border-cypress-amber/30 py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Hammer,        text: "Generations of Craftsmanship" },
            { icon: Ship,          text: "Nationwide Shipping" },
            { icon: Waves,         text: "Decay & Water Resistant" },
            { icon: TreeDeciduous, text: "Custom Milling" },
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-3 text-antique-cream/80 uppercase tracking-widest text-[10px] md:text-xs font-bold justify-center">
              <item.icon className="text-cypress-amber" size={20} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT US — antique cream, split layout with side image */}
      <section className="bg-antique-cream py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div className="relative overflow-hidden border-8 border-mahogany shadow-2xl">
              <img
                src={IMGS.aboutSide}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                alt="Acadiana Cypress showroom exterior"
              />
              <div className="absolute inset-0 border-[16px] border-cypress-amber opacity-20 pointer-events-none" />
            </div>
          </FadeUp>
          <div className="space-y-6">
            <FadeUp>
              <p className="font-display text-cypress-amber text-4xl md:text-5xl leading-none">Committed to Quality</p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-widest text-mahogany">About Us</h2>
              <div className="h-1 w-20 bg-cypress-amber mt-4" />
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-charred-edge text-lg leading-relaxed">
                We are located in South Louisiana in Moreauville &amp; Grand Coteau, where we carefully mill the one-of-a-kind cypress wood that grows in the swamps of Louisiana and ship it to you anywhere in the United States. Customers are more than welcome to come see what we're all about by visiting our mill yard during business hours. Check out our New Cypress, Sinker Cypress, Pecky Cypress, Antique Pine &amp; Oak Flooring, Beams, Barnwood, Tongue &amp; Groove.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 4. WHY CYPRESS PERKS — image bg, slightly darkened, centered white text */}
      <section className="relative py-32 overflow-hidden">
        <ParallaxBg src={IMGS.cypressBg} alt="Luxury cypress interior with forest view" />
        <div className="absolute inset-0 bg-mahogany/65" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center space-y-8">
          <FadeUp>
            <p className="font-display text-cypress-amber text-4xl md:text-5xl leading-none">Louisiana's Finest</p>
            <h2 className="text-4xl md:text-6xl font-serif text-antique-cream mt-4">
              Water-Resistant.<br />Decay-Resistant.<br />Legendary.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-antique-cream/85 leading-relaxed">
              Louisiana's Cypress is unique in the world of timber. Infused with a natural oily resin called cypresseine, this wood is born to resist the rot of the swamps. For generations, Acadiana Cypress has harvested this "King of Lumber" with respect for the bayou and a passion for the craft.
            </p>
          </FadeUp>
          <FadeUp delay={0.4}>
            <Link to="/why-cypress" className="inline-block border-b-2 border-cypress-amber pb-1 text-cypress-amber font-bold uppercase tracking-widest text-sm hover:text-antique-cream transition-colors">
              Discover Why Cypress →
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* 5. FEATURED CATEGORIES — dark mahogany */}
      <section className="bg-mahogany py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          <div className="text-center space-y-4">
            <FadeUp>
              <p className="font-display text-cypress-amber text-4xl md:text-5xl leading-none">Shop by Category</p>
              <h2 className="text-4xl md:text-6xl font-serif text-antique-cream mt-2">Milled to Perfection</h2>
            </FadeUp>
            <div className="h-1 w-32 bg-cypress-amber mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Flooring',        image: '/images/358097624_299830609236411_8765642360038772533_n.jpg', path: '/product/flooring' },
              { name: 'Posts & Beams',   image: '/images/IMG_3501.jpg',  path: '/product/posts-beams' },
              { name: 'Mantels',         image: '/images/IMG_8108.jpg',  path: '/product/mantels' },
              { name: 'Tongue & Groove', image: IMGS.tg,                 path: '/product/tongue-groove' },
              { name: 'Lumber',          image: '/images/285671601_167157409094554_5220638392272731801_n.jpg', path: '/product/lumber' },
              { name: 'Hunting Blinds',  image: IMGS.pavilion,           path: '/product/hunting-blinds' },
            ].map((cat, i) => (
              <FadeUp key={cat.name} delay={i * 0.1}>
                <Link to={cat.path} className="group block relative aspect-video overflow-hidden border-b-4 border-cypress-amber">
                  <img src={cat.image} className="w-full h-full object-cover brightness-50 group-hover:brightness-75 group-hover:scale-110 transition-all duration-700" alt={cat.name} />
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <h3 className="text-3xl font-serif text-antique-cream tracking-wide group-hover:text-cypress-amber transition-colors drop-shadow-lg">{cat.name}</h3>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FROM THE SWAMP TO YOUR DOOR — antique cream, no image */}
      <section className="bg-antique-cream py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <FadeUp>
              <p className="font-display text-cypress-amber text-4xl md:text-5xl leading-none">From the Swamp to Your Door</p>
              <div className="h-1 w-20 bg-cypress-amber mx-auto mt-4" />
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: '1. Sustainably Harvested', icon: TreeDeciduous, desc: 'We source only from managed Louisiana wetlands, respecting the slow growth of the cypress.' },
              { step: '2. Custom Milled',          icon: Hammer,        desc: 'Our master sawyers cut to your exact dimensions, emphasizing the natural grain and glow.' },
              { step: '3. Nationwide Delivery',    icon: Ship,          desc: 'From our mill yard to your project site, we ship across all 48 lower states.' },
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
        </div>
      </section>

      {/* 7. NEW LOCATION BANNER — white */}
      <section className="bg-white py-16 border-y border-mahogany/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2">
            <p className="font-display text-cypress-amber text-3xl md:text-4xl leading-none">Big News!</p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-mahogany">We've opened a new store in Grand Coteau!</h2>
          </div>
          <Link to="/new-location" className="bg-mahogany text-antique-cream px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-charred-edge transition-colors shadow-2xl shrink-0">
            Get Directions
          </Link>
        </div>
      </section>

      {/* 8. TESTIMONIALS — image bg */}
      <section className="relative py-24 overflow-hidden">
        <ParallaxBg src={IMGS.showroom} alt="Acadiana Cypress showroom interior" opacity="opacity-60" />
        <div className="absolute inset-0 bg-mahogany/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
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
                <cite className="block text-cypress-amber font-sans font-bold uppercase tracking-widest text-sm">&mdash; Jean-Paul LeBlanc, Abbeville, LA</cite>
              </div>
              <span className="text-[120px] font-display text-cypress-amber/30 leading-none select-none absolute -bottom-8 right-0">&rdquo;</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 9. NATIONWIDE SHIPPING — antique cream */}
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
                { label: 'Packaging',      value: 'Mill-Secured Bundles' },
                { label: 'Lead Time',      value: 'Call for Availability' },
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

      {/* 10. FINAL CTA — dark mahogany */}
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
