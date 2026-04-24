import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence, useAnimationFrame } from 'motion/react';
import { FadeUp, FadeIn, HorizontalScrollSection } from '../components/Layout';

const HERO_IMAGES = [
  '/images/840A3281-scaled.jpg',
  '/images/IMG_8581.jpeg',
  '/images/840A4683.jpg',
];

const STRIP_PHOTOS = [
  '/images/277509230_150868394056789_1940454017148676648_n.jpg',
  '/images/840A3258-scaled.jpg',
  '/images/IMG_8108.jpg',
  '/images/840A4915.jpg',
  '/images/277175532_150868224056806_1401704873125698893_n.jpg',
  '/images/IMG_3501.jpg',
  '/images/840A3231-scaled.jpg',
  '/images/287379839_168241782319450_842021099019914168_n.jpg',
  '/images/IMG_1603-scaled.jpeg',
  '/images/840A3243-scaled.jpg',
  '/images/IMG_8433.jpeg',
  '/images/276160467_150867434056885_8706184336137964340_n.jpg',
];

const CATEGORIES = [
  { name: 'Flooring',        image: '/images/358097624_299830609236411_8765642360038772533_n.jpg', path: '/product/flooring' },
  { name: 'Posts & Beams',   image: '/images/IMG_3501.jpg',  path: '/product/posts-beams' },
  { name: 'Mantels',         image: '/images/IMG_8108.jpg',  path: '/product/mantels' },
  { name: 'Tongue & Groove', image: '/images/272837486_137899615353667_3663043520166976821_n.jpg', path: '/product/tongue-groove' },
  { name: 'Lumber',          image: '/images/285671601_167157409094554_5220638392272731801_n.jpg', path: '/product/lumber' },
  { name: 'Hunting Blinds',  image: '/images/287379839_168241782319450_842021099019914168_n.jpg', path: '/product/hunting-blinds' },
];

function ParallaxBg({ src, alt, opacity = 'opacity-100' }: { src: string; alt: string; opacity?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img src={src} alt={alt} className={`absolute inset-0 w-full h-full object-cover ${opacity}`} style={{ y, scale: 1.28 }} />
    </div>
  );
}

function TiltCard({ cat }: { cat: typeof CATEGORIES[0] }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-0.5, 0.5], [10, -10]);
  const ry = useTransform(mx, [-0.5, 0.5], [-10, 10]);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };
  return (
    <FadeUp>
      <div className="perspective-1200">
        <motion.div
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{ rotateX: rx, rotateY: ry }}
          className="relative aspect-[3/4] overflow-hidden group block"
          data-cursor-hover
        >
          <Link to={cat.path} className="absolute inset-0">
            <img src={cat.image} alt={cat.name} className="w-full h-full object-cover brightness-50 group-hover:brightness-[0.4] group-hover:scale-[1.07] transition-all duration-700 ease-out" />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-mahogany/90 via-mahogany/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-7">
              <h3 className="text-3xl font-serif text-antique-cream group-hover:text-cypress-amber transition-colors duration-500">{cat.name}</h3>
              <motion.div className="h-px bg-cypress-amber mt-3 origin-left" initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.4 }} />
            </div>
          </Link>
        </motion.div>
      </div>
    </FadeUp>
  );
}

function DraggableStrip() {
  const x = useMotionValue(0);
  const isDragging = useRef(false);
  const lastClientX = useRef(0);
  const stripRef = useRef<HTMLDivElement>(null);
  const setWidth = useRef(4512); // one set width in px, measured on mount

  useEffect(() => {
    if (stripRef.current) {
      // Total rendered width / 3 sets = one loop
      setWidth.current = stripRef.current.scrollWidth / 3;
    }
  }, []);

  // Auto-scroll: ~50px/sec, paused while dragging
  useAnimationFrame((_, delta) => {
    if (isDragging.current) return;
    let next = x.get() - delta * 0.05;
    if (next <= -setWidth.current) next += setWidth.current;
    x.set(next);
  });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    lastClientX.current = e.clientX;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const diff = e.clientX - lastClientX.current;
    lastClientX.current = e.clientX;
    let next = x.get() + diff;
    // Keep the looping window valid
    if (next <= -setWidth.current * 2) next += setWidth.current;
    if (next > 0) next -= setWidth.current;
    x.set(next);
  };

  const onPointerUp = () => { isDragging.current = false; };

  const tripled = [...STRIP_PHOTOS, ...STRIP_PHOTOS, ...STRIP_PHOTOS];

  return (
    <section className="bg-deep-mahogany py-20 overflow-hidden">
      <div className="px-6 md:px-12 mb-8 flex justify-between items-center max-w-[1600px] mx-auto">
        <p className="text-[10px] uppercase tracking-[0.3em] text-antique-cream/30 font-semibold">Our Work</p>
        <Link to="/gallery" className="text-antique-cream/30 hover:text-cypress-amber transition-colors text-[10px] uppercase tracking-[0.25em] font-semibold border-b border-white/10 pb-1 hover:border-cypress-amber">
          View Full Gallery →
        </Link>
      </div>
      <div className="overflow-hidden">
        <motion.div
          ref={stripRef}
          style={{ x }}
          className="flex gap-4 pl-6 cursor-grab active:cursor-grabbing select-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {tripled.map((src, i) => (
            <motion.div
              key={i}
              className="shrink-0 overflow-hidden"
              style={{ width: i % 3 === 0 ? 420 : i % 3 === 1 ? 300 : 360, height: 260 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={src}
                alt={`Project ${(i % STRIP_PHOTOS.length) + 1}`}
                className="w-full h-full object-cover pointer-events-none select-none brightness-75"
                draggable={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="px-6 md:px-12 mt-8 flex justify-center max-w-[1600px] mx-auto">
        <Link to="/gallery" className="text-antique-cream/25 hover:text-cypress-amber transition-colors text-[11px] uppercase tracking-[0.35em] font-semibold flex items-center gap-3">
          <span className="h-px w-8 bg-current" />
          See All Project Photos
          <span className="h-px w-8 bg-current" />
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const [heroIdx, setHeroIdx] = useState(0);
  const heroX = useMotionValue(0);
  const heroY = useMotionValue(0);
  const shx = useSpring(heroX, { stiffness: 40, damping: 25 });
  const shy = useSpring(heroY, { stiffness: 40, damping: 25 });
  const bgX = useTransform(shx, [0, 1], ['-3%', '3%']);
  const bgY = useTransform(shy, [0, 1], ['-2%', '2%']);

  useEffect(() => {
    const t = setInterval(() => setHeroIdx(i => (i + 1) % HERO_IMAGES.length), 5500);
    return () => clearInterval(t);
  }, []);

  const onHeroMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    heroX.set(clientX / width);
    heroY.set(clientY / height);
  };


  return (
    <div>

      {/* 1 ── HERO — sticky releases once cover sections fully overlap at 100vh */}
      <div style={{ height: '200vh' }}>
      <section
        className="sticky top-0 h-screen flex items-center bg-deep-mahogany grain overflow-hidden z-0"
        onMouseMove={onHeroMove}
      >
            {/* ── Background image ── */}
            <AnimatePresence mode="sync">
              <motion.div
                key={heroIdx}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              >
                <motion.img
                  src={HERO_IMAGES[heroIdx]}
                  alt="Acadiana Cypress"
                  className="absolute inset-0 w-full h-full object-cover opacity-55"
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1.08 }}
                  transition={{ duration: 3.5, ease: 'easeOut' }}
                  style={{ x: bgX, y: bgY }}
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-deep-mahogany via-deep-mahogany/40 to-transparent z-[1]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(12,4,1,0.65)_100%)] z-[1]" />

            {/* ── Heritage watermark ── */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-[1]">
              <motion.span
                className="font-display text-[28vw] leading-none text-antique-cream select-none"
                initial={{ opacity: 0, rotate: -8, scale: 1.15 }}
                animate={{ opacity: 0.025, rotate: -6, scale: 1 }}
                transition={{ delay: 1.0, duration: 2, ease: 'easeOut' }}
              >Heritage</motion.span>
            </div>

            {/* ── Curtains ── top slides up, bottom slides down */}
            <motion.div
              className="absolute inset-x-0 top-0 h-1/2 bg-deep-mahogany z-[50] origin-top"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ delay: 0.15, duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.div
              className="absolute inset-x-0 bottom-0 h-1/2 bg-deep-mahogany z-[50] origin-bottom"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ delay: 0.15, duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            />

            {/* ── Amber splice line — flashes across center as curtains part ── */}
            <motion.div
              className="absolute inset-x-0 top-1/2 h-[2px] bg-cypress-amber z-[51] origin-left"
              initial={{ scaleX: 0, opacity: 1 }}
              animate={{ scaleX: [0, 1, 1], opacity: [1, 1, 0] }}
              transition={{ delay: 0.1, duration: 0.9, times: [0, 0.45, 1], ease: 'easeInOut' }}
            />

            {/* ── Main content ── */}
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12">

              {/* Eyebrow label */}
              <motion.p
                className="text-cypress-amber text-[11px] uppercase tracking-[0.55em] font-semibold mb-8"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Custom Milled in South Louisiana
              </motion.p>

              {/* Headline — each word slams in */}
              <motion.h1
                className="font-display text-[clamp(72px,13vw,190px)] leading-[0.92] text-white select-none"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.16, delayChildren: 1.0 } } }}
              >
                {[
                  { word: 'The',    x: -80 },
                  { word: 'King',   x: -80 },
                  { word: 'of',     x:  80 },
                  { word: 'Lumber', x:  80 },
                ].map(({ word, x }) => (
                  <motion.span
                    key={word}
                    className="inline-block mr-[0.15em]"
                    variants={{
                      hidden:  { opacity: 0, y: 100, x, filter: 'blur(20px)', scale: 0.8 },
                      visible: { opacity: 1, y: 0, x: 0, filter: 'blur(0px)', scale: 1,
                        transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Amber rule draws left → right */}
              <motion.div
                className="h-[1px] bg-cypress-amber/50 mt-8 mb-8 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.9, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Subtext + CTA */}
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-antique-cream/50 font-serif text-lg leading-snug max-w-sm">
                  Water-Resistant. Decay-Resistant.<br />
                  <em className="not-italic opacity-70 text-base">Built to outlast the elements.</em>
                </p>
                <Link to="/browse-all" className="shrink-0 bg-cypress-amber text-mahogany px-10 py-4 uppercase font-bold text-[11px] tracking-[0.25em] hover:bg-milled-glow transition-colors shadow-2xl">
                  Explore Our Timber →
                </Link>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-antique-cream/25 z-10"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8, duration: 1 }}
            >
              <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
              <motion.div className="w-px h-12 bg-antique-cream/20" animate={{ scaleY: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }} />
            </motion.div>
      </section>
      </div>{/* end hero 200vh wrapper */}


      {/* Everything below scrolls over the hero, then hero releases */}
      <div className="relative" style={{ zIndex: 1, marginTop: '-100vh' }}>

      {/* 2 ── MARQUEE */}
      <section className="bg-mahogany border-y border-cypress-amber/10 py-5 overflow-hidden">
        <div className="marquee-track">
          {Array(2).fill(['Custom Milling','Nationwide Shipping','Decay Resistant','Since 1980','Louisiana Born','King of Lumber','Sinker Cypress','Pecky Cypress','Antique Pine & Oak']).flat().map((item, i) => (
            <span key={i} className="flex items-center gap-5 px-5 text-[10px] uppercase tracking-[0.25em] font-semibold text-antique-cream/30 whitespace-nowrap">
              <span className="text-cypress-amber text-lg leading-none">·</span>{item}
            </span>
          ))}
        </div>
      </section>

      {/* 3 ── STATS + VALUE PROP */}
      <section className="bg-[#060100] relative overflow-hidden py-40 px-6 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,_rgba(212,106,37,0.05)_0%,_transparent_100%)]" />
        <div className="relative z-10 max-w-[1600px] mx-auto">
          <FadeUp>
            <p className="text-cypress-amber text-[11px] uppercase tracking-[0.45em] font-semibold mb-6">Why Acadiana Cypress</p>
            <h2 className="font-serif text-[clamp(40px,6vw,80px)] text-antique-cream leading-[1.0] max-w-3xl">
              Custom-milled Louisiana cypress, shipped anywhere in the US.
            </h2>
          </FadeUp>
          <div className="h-px w-full bg-white/5 my-16" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { value: '40+',  label: 'Years in Business',   sub: 'Est. 1980, Moreauville, LA' },
              { value: '2',    label: 'Louisiana Locations', sub: 'Moreauville & Grand Coteau' },
              { value: '48',   label: 'States We Ship To',   sub: 'Full freight quotes available' },
              { value: '100%', label: 'Custom Milled',       sub: 'Cut to your exact dimensions' },
            ].map((stat, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <p className="font-display text-[clamp(56px,6vw,88px)] text-cypress-amber leading-none">{stat.value}</p>
                <p className="text-antique-cream text-sm font-semibold uppercase tracking-[0.18em] mt-3">{stat.label}</p>
                <p className="text-antique-cream/30 text-[11px] mt-1">{stat.sub}</p>
              </FadeUp>
            ))}
          </div>
          <div className="h-px w-full bg-white/5 my-16" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <FadeUp>
              <Link to="/browse-all" className="bg-cypress-amber text-mahogany px-10 py-4 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-milled-glow transition-colors">
                Browse Products
              </Link>
            </FadeUp>
            <FadeUp delay={0.1}>
              <a href="tel:3182404688" className="text-antique-cream/40 hover:text-cypress-amber transition-colors font-serif text-xl">
                (318) 240-4688 — Call Cody
              </a>
            </FadeUp>
          </div>
        </div>
      </section>


      <HorizontalScrollSection panels={[
        /* Panel 1: New Cypress */
        <div className="w-full h-full bg-mahogany flex flex-col md:flex-row">
          <div className="flex-1 relative overflow-hidden">
            <img src="/images/840A3281-scaled.jpg" alt="New Cypress" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-mahogany/80 hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-mahogany via-mahogany/40 to-transparent md:hidden" />
          </div>
          <div className="flex-1 flex items-center justify-center p-12 md:p-20">
            <div className="max-w-md space-y-6">
              <p className="text-cypress-amber text-[10px] uppercase tracking-[0.4em] font-semibold">01 / 03</p>
              <h2 className="font-display text-[clamp(56px,7vw,96px)] text-cypress-amber leading-none">New Cypress</h2>
              <div className="h-px w-14 bg-cypress-amber" />
              <p className="text-antique-cream/65 text-lg leading-relaxed font-serif">Rich amber-orange tone. Infused with natural cypresseine oil for lifetime rot resistance. The gold standard of Southern lumber, freshly milled from Louisiana swamp-grown trees.</p>
              <a href="/browse-wood#new-cypress" className="inline-block border-b border-cypress-amber pb-1 text-cypress-amber font-bold uppercase tracking-[0.2em] text-[11px] hover:text-antique-cream transition-colors">Learn More →</a>
            </div>
          </div>
        </div>,
        /* Panel 2: Sinker Cypress */
        <div className="w-full h-full bg-[#0a0300] flex flex-col md:flex-row">
          <div className="flex-1 flex items-center justify-center p-12 md:p-20 order-2 md:order-1">
            <div className="max-w-md space-y-6">
              <p className="text-cypress-amber text-[10px] uppercase tracking-[0.4em] font-semibold">02 / 03</p>
              <h2 className="font-display text-[clamp(56px,7vw,96px)] text-antique-cream leading-none">Sinker Cypress</h2>
              <div className="h-px w-14 bg-cypress-amber" />
              <p className="text-antique-cream/65 text-lg leading-relaxed font-serif">Ancient logs submerged in Louisiana bayous for over a century. Mineral-rich, ultra-dense, and nearly impossible to replicate. A piece of history in every board.</p>
              <a href="/browse-wood#sinker-cypress" className="inline-block border-b border-cypress-amber pb-1 text-cypress-amber font-bold uppercase tracking-[0.2em] text-[11px] hover:text-antique-cream transition-colors">Learn More →</a>
            </div>
          </div>
          <div className="flex-1 relative overflow-hidden order-1 md:order-2">
            <img src="/images/840A4683.jpg" alt="Sinker Cypress" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0300]/80 hidden md:block" />
          </div>
        </div>,
        /* Panel 3: Pecky Cypress */
        <div className="w-full h-full bg-charred-edge flex flex-col md:flex-row">
          <div className="flex-1 relative overflow-hidden">
            <img src="/images/840A3243-scaled.jpg" alt="Pecky Cypress" className="w-full h-full object-cover opacity-65" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charred-edge/80 hidden md:block" />
          </div>
          <div className="flex-1 flex items-center justify-center p-12 md:p-20">
            <div className="max-w-md space-y-6">
              <p className="text-cypress-amber text-[10px] uppercase tracking-[0.4em] font-semibold">03 / 03</p>
              <h2 className="font-display text-[clamp(56px,7vw,96px)] text-cypress-amber leading-none">Pecky Cypress</h2>
              <div className="h-px w-14 bg-cypress-amber" />
              <p className="text-antique-cream/65 text-lg leading-relaxed font-serif">Nature's own artwork. A rare fungal process carves dramatic voids and channels through the living wood — creating a texture impossible to manufacture and impossible to forget.</p>
              <a href="/browse-wood#pecky-cypress" className="inline-block border-b border-cypress-amber pb-1 text-cypress-amber font-bold uppercase tracking-[0.2em] text-[11px] hover:text-antique-cream transition-colors">Learn More →</a>
            </div>
          </div>
        </div>,
      ]} />

      {/* 4 ── ABOUT */}
      <section className="bg-antique-cream py-40 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeUp>
            <div className="relative overflow-hidden aspect-[4/5] shadow-2xl group">
              <img src="/images/840A3278-scaled.jpg" alt="Showroom exterior" className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[1.5s] ease-out" />
              <div className="absolute bottom-0 left-0 w-1 h-2/3 bg-cypress-amber" />
            </div>
          </FadeUp>
          <div className="space-y-8 lg:pl-8">
            <FadeUp><p className="font-display text-cypress-amber text-7xl md:text-8xl leading-none">Committed to Quality</p></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl font-serif font-bold uppercase tracking-widest text-mahogany">About Us</h2>
              <div className="h-px w-24 bg-cypress-amber mt-5" />
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-charred-edge text-lg leading-relaxed font-serif">
                We are located in South Louisiana in Moreauville & Grand Coteau, where we carefully mill the one-of-a-kind cypress wood that grows in the swamps of Louisiana and ship it to you anywhere in the United States.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <Link to="/why-cypress" className="inline-block border-b border-cypress-amber pb-1 text-cypress-amber font-semibold uppercase tracking-[0.2em] text-[11px] hover:text-mahogany hover:border-mahogany transition-colors" data-cursor-hover>
                Our Story →
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 5 ── DRAGGABLE PHOTO STRIP */}
      <DraggableStrip />

      {/* 6 ── CATEGORIES — 3D tilt cards */}
      <section className="bg-mahogany py-40 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <FadeUp><p className="font-display text-cypress-amber text-7xl leading-none">Shop by Category</p></FadeUp>
              <FadeUp delay={0.1}><h2 className="text-3xl font-serif text-antique-cream mt-2 uppercase tracking-widest">Milled to Perfection</h2></FadeUp>
            </div>
            <FadeUp delay={0.1}>
              <Link to="/browse-all" className="text-[10px] uppercase tracking-[0.25em] font-semibold text-antique-cream/30 hover:text-cypress-amber transition-colors border-b border-white/10 pb-1" data-cursor-hover>View All →</Link>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map(cat => <div key={cat.name}><TiltCard cat={cat} /></div>)}
          </div>
        </div>
      </section>

      {/* 7 ── WHY CYPRESS PARALLAX */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <ParallaxBg src="/images/IMG_8581.jpeg" alt="Luxury cypress interior" opacity="opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-mahogany/95 via-mahogany/65 to-transparent" />
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 py-40">
          <div className="max-w-xl">
            <FadeIn><p className="text-cypress-amber text-[11px] uppercase tracking-[0.4em] font-semibold mb-6">Louisiana's Finest</p></FadeIn>
            <FadeUp><h2 className="text-7xl md:text-9xl font-serif text-antique-cream leading-[0.85]">Water-<br />Resistant.<br />Legendary.</h2></FadeUp>
            <FadeUp delay={0.2}>
              <div className="h-px w-16 bg-cypress-amber my-10" />
              <p className="text-antique-cream/65 text-lg leading-relaxed font-serif max-w-md">
                Louisiana's Cypress is unique in the world of timber. Infused with a natural oily resin called cypresseine, this wood is naturally resistant to rot, insects, and moisture — no chemical treatment required.
              </p>
              <Link to="/why-cypress" className="inline-block mt-10 bg-cypress-amber text-mahogany px-10 py-4 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-milled-glow transition-colors" data-cursor-hover>
                Discover Why Cypress →
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 8 ── FULL-VIEWPORT QUOTE */}
      <section className="min-h-screen bg-antique-cream flex items-center justify-center px-8 py-32">
        <div className="text-center max-w-6xl mx-auto">
          <FadeIn>
            <span className="block font-display text-[clamp(80px,12vw,160px)] text-mahogany/8 leading-none select-none -mb-8">"</span>
          </FadeIn>
          <FadeUp delay={0.1}>
            <blockquote className="text-[clamp(36px,5.5vw,88px)] font-serif text-mahogany leading-[1.05]">
              We've sourced cypress from a lot of places. Nothing else comes close to what Acadiana mills.
            </blockquote>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="flex items-center justify-center gap-6 mt-14">
              <div className="h-px w-16 bg-cypress-amber" />
              <cite className="text-cypress-amber font-sans font-bold uppercase tracking-[0.25em] text-[10px] not-italic">Custom Home Builder, Lafayette, LA</cite>
              <div className="h-px w-16 bg-cypress-amber" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 9 ── PROCESS */}
      <section className="bg-mahogany py-40 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <FadeIn><p className="text-[11px] uppercase tracking-[0.4em] font-semibold text-cypress-amber mb-20 text-center">From the Swamp to Your Door</p></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-antique-cream/5">
            {[
              { num: '01', step: 'Sustainably Harvested', desc: 'Sourced only from managed Louisiana wetlands, respecting the slow growth of the cypress.' },
              { num: '02', step: 'Custom Milled',         desc: 'Our master sawyers cut to your exact dimensions, emphasizing the natural grain and glow.' },
              { num: '03', step: 'Nationwide Delivery',   desc: 'From our mill yard to your project site, shipped across all 48 lower states.' },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.12}>
                <div className="px-4 md:px-14 py-12 md:py-0 space-y-5">
                  <p className="font-display text-[clamp(80px,8vw,120px)] leading-none text-antique-cream/5 select-none -mb-4">{item.num}</p>
                  <h3 className="text-2xl font-serif text-antique-cream">{item.step}</h3>
                  <div className="h-px w-10 bg-cypress-amber" />
                  <p className="text-antique-cream/45 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 10 ── GRAND COTEAU STRIP */}
      <section className="bg-cypress-amber py-10 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-mahogany/50 text-[10px] uppercase tracking-[0.3em] font-semibold">Big News</p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-mahogany mt-1">We've opened a new store in Grand Coteau!</h2>
          </div>
          <Link to="/new-location" className="shrink-0 border border-mahogany/40 text-mahogany px-10 py-4 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-mahogany hover:text-antique-cream transition-all duration-300" data-cursor-hover>
            Get Directions →
          </Link>
        </div>
      </section>

      {/* 11 ── SHIPPING */}
      <section className="bg-antique-cream py-40 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeUp>
            <h2 className="text-[clamp(48px,7vw,110px)] font-serif text-mahogany leading-[0.9]">From the Bayous<br />to Your Backyard.</h2>
            <p className="text-charred-edge/55 text-lg mt-8 font-serif">We ship anywhere in the US. No project is too distant for the King of Lumber.</p>
            <div className="flex items-center gap-6 mt-10">
              <div className="h-px bg-cypress-amber w-16" />
              <span className="font-display text-3xl text-cypress-amber">Shipped Nationwide</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[['Delivery Range','All 48 Lower States'],['Freight Quotes','Available Daily'],['Packaging','Mill-Secured Bundles'],['Lead Time','Call for Availability']].map(([label, value]) => (
                <div key={label} className="border border-mahogany/10 p-7 hover:border-cypress-amber/40 transition-colors duration-500">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-cypress-amber">{label}</p>
                  <p className="text-lg font-serif text-mahogany mt-2">{value}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 12 ── FINAL CTA */}
      <section className="relative bg-[#060100] py-52 text-center overflow-hidden grain">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_rgba(212,106,37,0.08)_0%,_transparent_100%)]" />
        <div className="relative z-10">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.4em] font-semibold text-antique-cream/20 mb-10">Ready to Start?</p>
            <h2 className="font-display text-[clamp(56px,11vw,150px)] text-cypress-amber text-glow-lg leading-none">Ready to order?</h2>
          </FadeIn>
          <FadeUp delay={0.2}>
            <div className="mt-16 space-y-3">
              <p className="text-antique-cream/20 font-sans uppercase tracking-[0.4em] text-[10px]">Call Cody personally at</p>
              <a href="tel:3182404688" className="block text-[clamp(32px,6vw,88px)] font-serif text-antique-cream hover:text-cypress-amber transition-colors duration-500 leading-none" data-cursor-hover>
                (318) 240-4688
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={0.35}>
            <Link to="/contact" className="inline-block mt-16 bg-cypress-amber text-mahogany px-16 py-6 font-bold uppercase tracking-[0.25em] text-sm shadow-2xl hover:bg-milled-glow transition-colors" data-cursor-hover>
              Send an Inquiry
            </Link>
          </FadeUp>
        </div>
      </section>
      </div>{/* end cover wrapper */}

    </div>
  );
}
