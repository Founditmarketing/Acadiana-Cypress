import React, { ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Why Cypress', path: '/why-cypress' },
  { name: 'Products', path: '/browse-all', dropdown: [
    { name: 'Flooring', path: '/product/flooring' },
    { name: 'Hunting Blinds', path: '/product/hunting-blinds' },
    { name: 'Lumber', path: '/product/lumber' },
    { name: 'Mantels', path: '/product/mantels' },
    { name: 'Posts & Beams', path: '/product/posts-beams' },
    { name: 'Tongue & Groove', path: '/product/tongue-groove' },
    { name: 'Walls & Ceilings', path: '/product/walls-ceilings' },
  ]},
  { name: 'Gallery', path: '/gallery' },
  { name: 'New Location', path: '/new-location' },
];

export function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-antique-cream text-charred-edge">
      {/* Sticky header wrapper — announcement bar + nav scroll together */}
      <div className="sticky top-0 z-50">
        {/* Upper Announcement Bar */}
        <div className="bg-cypress-amber text-mahogany py-2 px-8 flex justify-center items-center space-x-4">
          <span className="text-[11px] font-bold uppercase tracking-widest">Big News! We've opened a new store in Grand Coteau!</span>
          <Link to="/new-location" className="bg-mahogany text-antique-cream text-[9px] px-3 py-1 uppercase font-bold hover:bg-charred-edge transition-colors">
            Get Directions
          </Link>
        </div>

        {/* Navigation */}
        <nav className="w-full bg-mahogany border-b-4 border-cypress-amber px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-antique-cream text-4xl font-display hover:text-cypress-amber transition-colors">
          Acadiana Cypress
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8 text-[11px] uppercase tracking-widest text-antique-cream font-bold">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                to={link.path}
                className={`${pathname === link.path ? 'text-cypress-amber' : ''} hover:text-cypress-amber transition-colors flex items-center py-2`}
              >
                {link.name}
                {link.dropdown && <span className="ml-1 text-[8px] group-hover:rotate-180 transition-transform">▼</span>}
              </Link>
              
              {link.dropdown && (
                <div className="absolute top-full left-0 w-64 bg-mahogany border-t-2 border-cypress-amber opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl">
                  {link.dropdown.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className="block px-6 py-4 text-antique-cream hover:bg-cypress-amber hover:text-mahogany transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <Link to="/contact" className="hidden lg:block bg-cypress-amber text-antique-cream px-6 py-2 uppercase font-bold text-xs hover:bg-milled-glow transition-colors">
          Contact Us
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-antique-cream hover:text-cypress-amber transition-colors"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden bg-antique-cream">
        {children}
      </main>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-mahogany flex flex-col p-8 lg:hidden pt-24"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-antique-cream"><X size={32} /></button>
            {navLinks.map((link) => (
              <div key={link.name} className="mb-6">
                <Link to={link.path} className="text-4xl font-display text-antique-cream hover:text-cypress-amber">
                  {link.name}
                </Link>
              </div>
            ))}
            <Link to="/contact" className="mt-auto bg-cypress-amber text-antique-cream p-6 text-center font-bold uppercase tracking-widest text-lg">
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme Footer Bar */}
      <div className="w-full bg-antique-cream py-5 px-4 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-cypress-amber/20 z-10 relative">
        <div className="flex flex-wrap gap-x-10 gap-y-3 items-center justify-center sm:justify-start">
          <div className="flex items-center space-x-3">
            <span className="text-[9px] uppercase font-bold text-cypress-amber tracking-widest">Moreauville Mill Yard</span>
            <span className="text-[11px] text-mahogany font-bold">(318) 240-4688</span>
          </div>
          <div className="w-px h-4 bg-cypress-amber/30 hidden sm:block" />
          <div className="flex items-center space-x-3">
            <span className="text-[9px] uppercase font-bold text-cypress-amber tracking-widest">Louisiana Quality</span>
            <span className="text-[11px] text-mahogany font-bold">Shipped Nationwide</span>
          </div>
        </div>
        <div className="text-mahogany/25 font-bold uppercase text-[9px] tracking-[0.3em]">
          Est. Generation 04
        </div>
      </div>
      
      {/* Detailed Footer */}
      <footer className="bg-mahogany border-t border-cypress-amber text-antique-cream pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm opacity-80">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <h2 className="text-3xl font-display text-antique-cream">Acadiana Cypress</h2>
            <p className="leading-relaxed text-antique-cream/70">Custom milled in South Louisiana. Since the dawn of the swamp, cypress has been the King of Lumber.</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-base border-b border-cypress-amber/60 pb-1 inline-block">Products</h3>
            <ul className="space-y-2 uppercase tracking-widest text-[10px] font-bold">
              {navLinks.find(l => l.name === 'Products')?.dropdown?.map(p => (
                <li key={p.path}><Link to={p.path} className="hover:text-cypress-amber transition-colors">{p.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-base border-b border-cypress-amber/60 pb-1 inline-block">Mill Yard</h3>
            <p className="leading-relaxed text-antique-cream/70">2463 N. Bayou Desglaises,<br />Moreauville, LA 71355</p>
            <p className="text-[11px] uppercase tracking-widest font-bold text-cypress-amber">(318) 240-4688</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-base border-b border-cypress-amber/60 pb-1 inline-block">Grand Coteau Store</h3>
            <p className="leading-relaxed text-antique-cream/70">I-49 South Service Rd,<br />Grand Coteau, LA 70451</p>
            <p className="text-[11px] uppercase tracking-widest font-bold text-cypress-amber">(318) 240-3874</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-cypress-amber/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-antique-cream/30">© {new Date().getFullYear()} Acadiana Cypress. All rights reserved.</p>
          <p className="text-[10px] uppercase tracking-widest text-antique-cream/30">Moreauville, Louisiana</p>
        </div>
      </footer>
    </div>
  );
}

export const FadeUp: React.FC<{ delay?: number; className?: string; children?: React.ReactNode }> = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
