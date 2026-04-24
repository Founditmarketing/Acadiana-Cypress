import React, { ReactNode, useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Menu, X, Facebook } from 'lucide-react';



/* ── NAV LINKS ────────────────────────────────────────── */
const navLinks = [
  { name: 'Home',       path: '/' },
  { name: 'Why Cypress', path: '/why-cypress' },
  { name: 'Products',    path: '/browse-all', dropdown: [
    { name: 'Browse All',       path: '/browse-all' },
    { name: 'Flooring',         path: '/product/flooring' },
    { name: 'Hunting Blinds',   path: '/product/hunting-blinds' },
    { name: 'Lumber',           path: '/product/lumber' },
    { name: 'Mantels',          path: '/product/mantels' },
    { name: 'Posts & Beams',    path: '/product/posts-beams' },
    { name: 'Tongue & Groove',  path: '/product/tongue-groove' },
    { name: 'Walls & Ceilings', path: '/product/walls-ceilings' },
  ]},
  { name: 'Browse Wood',  path: '/browse-wood' },
  { name: 'Gallery',      path: '/gallery' },
  { name: 'New Location', path: '/new-location' },
];

const MARQUEE_ITEMS = [
  'Custom Milling','Nationwide Shipping','Decay Resistant','Since 1980',
  'Louisiana Born','King of Lumber','Sinker Cypress','Pecky Cypress','Antique Pine & Oak',
  'Custom Milling','Nationwide Shipping','Decay Resistant','Since 1980',
  'Louisiana Born','King of Lumber','Sinker Cypress','Pecky Cypress','Antique Pine & Oak',
];

/* ── LAYOUT ───────────────────────────────────────────── */
export function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [isHome,     setIsHome]     = useState(false);
  const { pathname }                 = useLocation();

  useEffect(() => { setIsHome(pathname === '/'); }, [pathname]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); setIsMenuOpen(false); }, [pathname]);

  const navClass = isHome && !scrolled ? 'nav-transparent' : 'nav-solid';

  return (
    <div className="min-h-screen flex flex-col bg-antique-cream text-charred-edge">

      {/* ── NAV ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${navClass}`}>
        <nav className="max-w-[1600px] mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
          <Link to="/" className="text-antique-cream font-display text-3xl leading-none hover:text-cypress-amber transition-colors duration-300">
            Acadiana Cypress
          </Link>

          <div className="hidden lg:flex items-center space-x-10 text-[11px] uppercase tracking-[0.18em] text-antique-cream/75 font-semibold">
            {navLinks.map(link => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`nav-link flex items-center gap-1 py-1 hover:text-antique-cream transition-colors ${pathname === link.path ? 'text-cypress-amber active' : ''}`}
                >
                  {link.name}
                  {link.dropdown && (
                    <svg className="w-2 h-2 opacity-40 group-hover:rotate-180 transition-transform duration-300" viewBox="0 0 8 5" fill="none">
                      <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )}
                </Link>
                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-deep-mahogany/96 backdrop-blur-xl border border-cypress-amber/15 shadow-2xl py-2">
                      {link.dropdown.map(sub => (
                        <Link key={sub.path} to={sub.path} className="block px-5 py-3 text-antique-cream/60 hover:text-cypress-amber hover:bg-white/4 transition-colors text-[10px] uppercase tracking-[0.18em] font-semibold">
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/contact" className="border border-cypress-amber/50 text-cypress-amber px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-cypress-amber hover:text-mahogany transition-all duration-300">
              Contact Us
            </Link>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-antique-cream hover:text-cypress-amber transition-colors" aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-deep-mahogany flex flex-col p-10 lg:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <Link to="/" className="text-antique-cream font-display text-3xl">Acadiana Cypress</Link>
              <button onClick={() => setIsMenuOpen(false)} className="text-antique-cream/50 hover:text-cypress-amber"><X size={28} /></button>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              {[{ name: 'Home', path: '/' }, ...navLinks].map((link, i) => (
                <motion.div key={link.name} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                  <Link to={link.path} className="block py-4 text-4xl font-display text-antique-cream/75 hover:text-cypress-amber border-b border-white/5 transition-colors">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <Link to="/contact" className="mt-8 bg-cypress-amber text-mahogany py-5 text-center font-bold uppercase tracking-[0.2em] text-sm">Contact Us</Link>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 relative">{children}</main>

      {/* ── FOOTER ── */}
      <footer className="bg-deep-mahogany text-antique-cream">
        <div className="border-y border-cypress-amber/10 py-4 overflow-hidden">
          <div className="marquee-track marquee-slow">
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={i} className="flex items-center gap-5 px-5 text-[10px] uppercase tracking-[0.25em] font-semibold text-antique-cream/25 whitespace-nowrap">
                <span className="text-cypress-amber text-base">·</span>{item}
              </span>
            ))}
          </div>
        </div>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="font-display text-5xl text-antique-cream/85 leading-none">Acadiana Cypress</p>
            <p className="text-antique-cream/35 leading-relaxed max-w-xs text-sm">Custom milled in South Louisiana. Since the dawn of the swamp, cypress has been the King of Lumber.</p>
            <div className="flex items-center gap-5 pt-2">
              <a href="https://www.facebook.com/profile.php?id=100076284221092" target="_blank" rel="noopener noreferrer" className="text-antique-cream/25 hover:text-cypress-amber transition-colors" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="mailto:codycoco_1@yahoo.com" className="text-antique-cream/25 hover:text-cypress-amber transition-colors text-[10px] uppercase tracking-[0.2em] font-semibold">codycoco_1@yahoo.com</a>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-cypress-amber">Products</p>
            <ul className="space-y-3">
              {navLinks.find(l => l.name === 'Products')?.dropdown?.map(p => (
                <li key={p.path}><Link to={p.path} className="text-antique-cream/30 hover:text-antique-cream transition-colors text-[11px] uppercase tracking-[0.15em]">{p.name}</Link></li>
              ))}
              <li><Link to="/browse-wood" className="text-antique-cream/30 hover:text-antique-cream transition-colors text-[11px] uppercase tracking-[0.15em]">Browse Wood</Link></li>
            </ul>
          </div>
          <div className="space-y-8">
            {[
              { label: 'Moreauville Mill', addr: '2463 N. Bayou Desglaises\nMoreauville, LA 71355', phone: '(318) 240-4688', tel: '3182404688' },
              { label: 'Grand Coteau Store', addr: 'I-49 South Service Rd\nGrand Coteau, LA 70541', phone: '(318) 240-3874', tel: '3182403874' },
            ].map(loc => (
              <div key={loc.label} className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-cypress-amber">{loc.label}</p>
                <p className="text-antique-cream/35 text-sm leading-relaxed whitespace-pre-line">{loc.addr}</p>
                <a href={`tel:${loc.tel}`} className="block text-antique-cream/60 hover:text-cypress-amber transition-colors font-semibold text-sm">{loc.phone}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 pb-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-antique-cream/15">© {new Date().getFullYear()} Acadiana Cypress. All rights reserved.</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-antique-cream/15">Louisiana Cypress · Since 1980</p>
        </div>
      </footer>
    </div>
  );
}

/* ── ANIMATION HELPERS ────────────────────────────────── */
export const FadeUp: React.FC<{ delay?: number; className?: string; children?: React.ReactNode }> = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeIn: React.FC<{ delay?: number; className?: string; children?: React.ReactNode }> = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 1.4, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

/* Clip-from-bottom text reveal — use inside overflow-hidden parent */
export const ClipReveal: React.FC<{ delay?: number; className?: string; children?: React.ReactNode }> = ({ children, delay = 0, className = '' }) => (
  <div className="overflow-hidden">
    <motion.div
      initial={{ y: '105%' }}
      whileInView={{ y: '0%' }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  </div>
);
/* ── HORIZONTAL SCROLL SECTION ───────────────────────── */
// Outer div height = panels.length × 175vh to give ~2 swipes of scroll travel per section.
// Inner sticky div pins at top, content slides horizontally as you scroll.
export function HorizontalScrollSection({ panels }: { panels: React.ReactNode[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0vw', `${-(panels.length - 1) * 100}vw`]
  );

  return (
    <div ref={containerRef} style={{ height: `${panels.length * 175}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Amber progress bar across top */}
        <motion.div
          className="absolute top-0 left-0 h-[2px] bg-cypress-amber z-20 origin-left"
          style={{ scaleX: scrollYProgress, width: '100%' }}
        />
        {/* Static dot indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {panels.map((_, i) => (
            <div key={i} className="w-8 h-[2px] bg-antique-cream/25 rounded-full" />
          ))}
        </div>
        {/* Scroll hint — first panel only */}
        <div className="absolute bottom-8 right-8 z-20 text-antique-cream/30 text-[10px] uppercase tracking-[0.3em] font-semibold select-none">
          scroll →
        </div>
        {/* Sliding track */}
        <motion.div
          className="flex h-full will-change-transform"
          style={{ x, width: `${panels.length * 100}vw` }}
        >
          {panels.map((panel, i) => (
            <div key={i} className="w-screen h-screen shrink-0 relative">
              {panel}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

