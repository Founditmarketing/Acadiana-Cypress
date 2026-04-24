import React, { useState } from 'react';
import { FadeUp } from '../components/Layout';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const REAL_GALLERY = [
  { id: 0,  src: '/images/840A3281-scaled.jpg',  title: 'Grand Coteau Showroom Entrance' },
  { id: 1,  src: '/images/840A3278-scaled.jpg',  title: 'Grand Coteau Showroom Exterior' },
  { id: 2,  src: '/images/840A3186-scaled.jpg',  title: 'Showroom Interior' },
  { id: 3,  src: '/images/840A3187-scaled.jpg',  title: 'Cypress Lumber Display' },
  { id: 4,  src: '/images/840A3197-scaled.jpg',  title: 'Showroom Gallery Wall' },
  { id: 5,  src: '/images/840A3208-scaled.jpg',  title: 'Stacked Cypress Boards' },
  { id: 6,  src: '/images/840A3212-scaled.jpg',  title: 'Live-Edge Slab Display' },
  { id: 7,  src: '/images/840A3214-scaled.jpg',  title: 'Showroom Detail' },
  { id: 8,  src: '/images/840A3221-scaled.jpg',  title: 'Cypress Inventory' },
  { id: 9,  src: '/images/840A3223-scaled.jpg',  title: 'Timber Selection' },
  { id: 10, src: '/images/840A3231-scaled.jpg',  title: 'Milled Cypress Boards' },
  { id: 11, src: '/images/840A3233-scaled.jpg',  title: 'Pecky Cypress Slabs' },
  { id: 12, src: '/images/840A3243-scaled.jpg',  title: 'Pecky Cypress Standing' },
  { id: 13, src: '/images/840A3254-scaled.jpg',  title: 'Showroom Floor Display' },
  { id: 14, src: '/images/840A3256-scaled.jpg',  title: 'Cypress Planks' },
  { id: 15, src: '/images/840A3258-scaled.jpg',  title: 'Live-Edge Details' },
  { id: 16, src: '/images/840A3260-scaled.jpg',  title: 'Showroom Beams' },
  { id: 17, src: '/images/840A3280-scaled.jpg',  title: 'Grand Coteau Exterior' },
  { id: 18, src: '/images/840A4683.jpg',          title: 'Long Cypress Slab' },
  { id: 19, src: '/images/840A4686.jpg',          title: 'Live-Edge Slab Close-Up' },
  { id: 20, src: '/images/840A4693.jpg',          title: 'Sinker Cypress Slab' },
  { id: 21, src: '/images/IMG_8435.jpeg',         title: 'Warehouse Lumber Stacks' },
  { id: 22, src: '/images/IMG_8577.jpeg',         title: 'Cypress Showroom' },
  { id: 23, src: '/images/IMG_8578-1.jpeg',       title: 'Interior Display' },
  { id: 24, src: '/images/IMG_8580.jpeg',         title: 'Cypress Selection' },
  { id: 25, src: '/images/IMG_8581.jpeg',         title: 'Luxury Cypress Interior' },
  { id: 26, src: '/images/IMG_8586.jpeg',         title: 'Showroom Detail' },
  { id: 27, src: '/images/IMG_1602-scaled.jpeg',  title: 'Delivery — Loaded Flatbed' },
  { id: 28, src: '/images/IMG_1603-scaled.jpeg',  title: 'Cypress Beams on Truck' },
  { id: 29, src: '/images/IMG_6838.jpeg',         title: 'Project Install' },
  { id: 30, src: '/images/IMG_6845.jpeg',         title: 'Custom Cypress Work' },
  { id: 31, src: '/images/IMG_7889.jpeg',         title: 'Cypress Project' },
  { id: 32, src: '/images/IMG_8072.jpeg',         title: 'Mill Yard' },
  { id: 33, src: '/images/IMG_8200.jpeg',         title: 'Cypress Installation' },
  { id: 34, src: '/images/IMG_8352.jpeg',         title: 'Finished Project' },
  { id: 35, src: '/images/IMG_8360-scaled.jpeg',  title: 'Custom Build' },
  { id: 36, src: '/images/IMG_8420.jpeg',         title: 'Cypress Detail' },
  { id: 37, src: '/images/IMG_8433.jpeg',         title: 'Wide Showroom View' },
  { id: 38, src: '/images/277500704_150867020723593_1182661073734601728_n.jpg', title: 'Cypress Porch Posts & Shutters' },
  { id: 39, src: '/images/276197468_151991650611130_2624331844763769457_n.jpg', title: 'Timber Frame Barn Entry' },
  { id: 40, src: '/images/272837486_137899615353667_3663043520166976821_n.jpg', title: 'Outdoor Pavilion & T&G Ceiling' },
  { id: 41, src: '/images/289707034_171872228623072_7084350631170968445_n.jpg', title: 'Custom T&G Ceiling Detail' },
  { id: 42, src: '/images/277175532_150868224056806_1401704873125698893_n.jpg', title: 'Louisiana Home Porch Beams' },
  { id: 43, src: '/images/277228654_150868260723469_3021594272097539731_n.jpg', title: 'Stained Cypress Columns' },
  { id: 44, src: '/images/276160467_150867434056885_8706184336137964340_n.jpg', title: 'Golden Hour Porch Posts' },
  { id: 45, src: '/images/277509230_150868394056789_1940454017148676648_n.jpg', title: 'Gazebo Ceiling & Lantern' },
  { id: 46, src: '/images/277735522_151991600611135_2839161206587592020_n.jpg', title: 'White Farmhouse Cypress Posts' },
  { id: 47, src: '/images/287379839_168241782319450_842021099019914168_n.jpg',  title: 'New Cypress Pavilion Build' },
  { id: 48, src: '/images/277754292_151991643944464_1444947564140231799_n.jpg', title: 'Cypress Timber Frame Construction' },
  { id: 49, src: '/images/313939437_195425206343619_7774528360206510785_n.jpg', title: 'Cypress Project' },
];

/* ══════════════════════════════════════════════
   GALLERY
══════════════════════════════════════════════ */
export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = () => setSelected(null);
  const prev  = () => setSelected(s => s !== null ? (s - 1 + REAL_GALLERY.length) % REAL_GALLERY.length : null);
  const next  = () => setSelected(s => s !== null ? (s + 1) % REAL_GALLERY.length : null);
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  const current = selected !== null ? REAL_GALLERY[selected] : null;

  return (
    <div className="bg-antique-cream min-h-screen" onKeyDown={onKey} tabIndex={-1}>

      {/* Hero */}
      <section className="relative h-[60vh] flex items-end bg-mahogany overflow-hidden pt-24">
        <img src="/images/840A3243-scaled.jpg" className="absolute inset-0 w-full h-full object-cover opacity-55" alt="Gallery hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany via-mahogany/40 to-transparent" />
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pb-16 w-full">
          <h1 className="font-display text-[clamp(56px,8vw,110px)] text-cypress-amber leading-none">Our Work</h1>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="max-w-[1600px] mx-auto py-24 px-6 md:px-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {REAL_GALLERY.map((img, i) => (
            <FadeUp key={img.id} delay={Math.min(i * 0.025, 0.4)} className="break-inside-avoid">
              <div
                className="group relative overflow-hidden bg-mahogany cursor-zoom-in"
                onClick={() => setSelected(img.id)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover group-hover:scale-[1.05] group-hover:brightness-50 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                  <p className="text-antique-cream font-serif text-base tracking-widest text-center drop-shadow-lg">{img.title}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-mahogany/96 backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              key={current.id}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full mx-4 flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <img src={current.src} alt={current.title} className="max-h-[80vh] w-auto max-w-full object-contain shadow-2xl" />
              <p className="mt-5 text-antique-cream font-serif text-lg tracking-widest opacity-70">{current.title}</p>
              <p className="mt-1 text-antique-cream/30 font-sans text-[10px] uppercase tracking-widest">{current.id + 1} / {REAL_GALLERY.length}</p>
            </motion.div>
            <button onClick={e => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-10 text-antique-cream/50 hover:text-cypress-amber transition-colors text-5xl font-light select-none" aria-label="Previous">&#8249;</button>
            <button onClick={e => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-10 text-antique-cream/50 hover:text-cypress-amber transition-colors text-5xl font-light select-none" aria-label="Next">&#8250;</button>
            <button onClick={close} className="absolute top-5 right-6 text-antique-cream/40 hover:text-cypress-amber transition-colors text-2xl" aria-label="Close">✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ══════════════════════════════════════════════
   CONTACT
══════════════════════════════════════════════ */
export function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', product: '', message: '' });
  const set = (k: string, v: string) => setFormData(p => ({ ...p, [k]: v }));

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      {/* Left — Form */}
      <section className="bg-deep-mahogany p-8 md:p-20 flex flex-col justify-center space-y-12 pt-32 lg:pt-20">
        <div className="space-y-3">
          <p className="text-cypress-amber text-[11px] uppercase tracking-[0.4em] font-semibold">Let's Talk Timber</p>
          <h1 className="font-display text-[clamp(56px,7vw,96px)] text-cypress-amber leading-none">Get in Touch</h1>
          <p className="text-antique-cream/45 font-serif italic text-lg">Send us an inquiry and Cody will call you back shortly.</p>
        </div>

        <form className="space-y-8 max-w-lg" onSubmit={e => e.preventDefault()}>
          {[
            { label: 'Name',  name: 'name',  type: 'text' },
            { label: 'Phone', name: 'phone', type: 'tel' },
            { label: 'Email', name: 'email', type: 'email' },
          ].map(field => (
            <div key={field.name} className="relative group">
              <input
                type={field.type}
                placeholder=" "
                className="w-full bg-transparent border-b border-antique-cream/15 py-4 text-antique-cream font-sans focus:outline-none focus:border-cypress-amber peer transition-colors duration-300"
                value={formData[field.name as keyof typeof formData]}
                onChange={e => set(field.name, e.target.value)}
              />
              <label className="absolute left-0 top-4 text-antique-cream/30 font-bold uppercase tracking-[0.2em] text-[10px] pointer-events-none transition-all peer-focus:-top-3 peer-focus:text-cypress-amber peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-cypress-amber">
                {field.label}
              </label>
            </div>
          ))}

          <div className="relative">
            <select
              className="w-full bg-transparent border-b border-antique-cream/15 py-4 text-antique-cream font-sans focus:outline-none focus:border-cypress-amber appearance-none cursor-pointer transition-colors duration-300"
              value={formData.product}
              onChange={e => set('product', e.target.value)}
            >
              <option value="" className="bg-mahogany">Interested In...</option>
              {['Flooring','Hunting Blinds','Lumber','Mantels','Posts & Beams','Tongue & Groove','Walls & Ceilings'].map(p => (
                <option key={p} value={p.toLowerCase()} className="bg-mahogany">{p}</option>
              ))}
            </select>
            <div className="absolute right-0 top-5 text-cypress-amber pointer-events-none text-xs">▼</div>
          </div>

          <div className="relative">
            <textarea
              placeholder=" "
              className="w-full bg-transparent border-b border-antique-cream/15 py-4 text-antique-cream font-sans focus:outline-none focus:border-cypress-amber peer h-28 resize-none transition-colors duration-300"
              value={formData.message}
              onChange={e => set('message', e.target.value)}
            />
            <label className="absolute left-0 top-4 text-antique-cream/30 font-bold uppercase tracking-[0.2em] text-[10px] pointer-events-none transition-all peer-focus:-top-3 peer-focus:text-cypress-amber peer-[:not(:placeholder-shown)]:-top-3">
              Your Message
            </label>
          </div>

          <button type="submit" className="w-full bg-cypress-amber text-mahogany py-5 font-bold uppercase tracking-[0.25em] text-[11px] flex items-center justify-center gap-3 hover:bg-milled-glow transition-colors duration-300 shadow-2xl">
            <Send size={16} />
            <span>Send Inquiry</span>
          </button>
        </form>
      </section>

      {/* Right — Info */}
      <section className="bg-antique-cream p-8 md:p-20 flex flex-col justify-center space-y-12 pt-20">
        <FadeUp className="space-y-10">
          <h2 className="text-4xl md:text-5xl font-serif text-mahogany">Visit the Mill</h2>
          <div className="h-px w-16 bg-cypress-amber" />

          {[
            {
              name: 'Moreauville Mill Yard',
              addr: '2463 N. Bayou Desglaises, Moreauville, LA 71355',
              phone: '(318) 240-4688',
              tel: '3182404688',
              hours: 'Mon–Fri: 8am–5pm · Sat: By Appointment',
            },
            {
              name: 'Grand Coteau Store',
              addr: 'I-49 South Service Rd, Grand Coteau, LA 70451',
              phone: '(318) 240-3874',
              tel: '3182403874',
              hours: 'Mon–Sat: 9am–6pm',
            },
          ].map(loc => (
            <div key={loc.name} className="space-y-5 p-8 bg-white shadow-md border-l-2 border-cypress-amber">
              <h3 className="text-2xl font-serif text-mahogany">{loc.name}</h3>
              <div className="space-y-3 text-charred-edge/70 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="text-cypress-amber shrink-0 mt-0.5" size={16} />
                  <span>{loc.addr}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-cypress-amber shrink-0" size={16} />
                  <a href={`tel:${loc.tel}`} className="hover:text-cypress-amber transition-colors font-semibold">{loc.phone}</a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-cypress-amber shrink-0 mt-0.5" size={16} />
                  <span className="text-[11px] uppercase tracking-widest font-bold">{loc.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </FadeUp>
      </section>
    </div>
  );
}

/* ══════════════════════════════════════════════
   NEW LOCATION
══════════════════════════════════════════════ */
export function NewLocation() {
  const STORE_PHOTOS = [
    '/images/840A3186-scaled.jpg', '/images/840A3197-scaled.jpg',
    '/images/840A3208-scaled.jpg', '/images/840A3212-scaled.jpg',
    '/images/840A3221-scaled.jpg', '/images/840A3223-scaled.jpg',
    '/images/840A3231-scaled.jpg', '/images/840A3233-scaled.jpg',
    '/images/840A3243-scaled.jpg', '/images/840A3254-scaled.jpg',
    '/images/840A3256-scaled.jpg', '/images/840A3258-scaled.jpg',
  ];

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative h-[80vh] flex items-end bg-mahogany overflow-hidden pt-24">
        <img src="/images/840A3260-scaled.jpg" className="absolute inset-0 w-full h-full object-cover opacity-55 scale-105" alt="Grand Coteau Acadiana Cypress showroom" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany via-mahogany/50 to-transparent" />
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pb-20 w-full space-y-3">
          <FadeUp>
            <p className="text-cypress-amber text-[11px] uppercase tracking-[0.4em] font-semibold">The King of Lumber — Now Closer Than Ever</p>
            <p className="font-display text-cypress-amber text-7xl md:text-9xl leading-none">Now Open</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-antique-cream uppercase tracking-widest">Grand Coteau</h1>
            <div className="h-px w-24 bg-cypress-amber mt-4" />
          </FadeUp>
        </div>
      </section>

      {/* Info strip */}
      <section className="bg-cypress-amber py-8 px-6">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-around gap-6 text-mahogany text-center">
          {[
            { label: 'Address', value: 'I-49 South Service Rd, Grand Coteau, LA 70451' },
            { label: 'Hours',   value: 'Mon–Sat: 9am–6pm' },
            { label: 'Phone',   value: '(318) 240-3874', href: 'tel:3182403874' },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-60 mb-1">{item.label}</p>
              {item.href
                ? <a href={item.href} className="font-serif text-lg font-bold hover:underline">{item.value}</a>
                : <p className="font-serif text-lg font-bold">{item.value}</p>
              }
            </div>
          ))}
        </div>
      </section>

      {/* Photo gallery */}
      <section className="bg-mahogany py-24 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto space-y-12">
          <FadeUp className="text-center">
            <p className="font-display text-cypress-amber text-5xl md:text-6xl leading-none">Inside the Store</p>
            <div className="h-px w-20 bg-cypress-amber mx-auto mt-4" />
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {STORE_PHOTOS.map((src, i) => (
              <FadeUp key={src} delay={i * 0.04}>
                <div className="group overflow-hidden aspect-square">
                  <img src={src} alt={`Grand Coteau store ${i + 1}`} className="w-full h-full object-cover group-hover:scale-[1.08] group-hover:brightness-75 transition-all duration-700" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Map + CTA */}
      <section className="bg-antique-cream py-32 px-6">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp className="space-y-6">
            <p className="font-display text-cypress-amber text-5xl leading-none">Come See Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-mahogany uppercase tracking-wide">Grand Coteau Store</h2>
            <div className="h-px w-16 bg-cypress-amber" />
            <div className="space-y-3 text-charred-edge text-base">
              <p><span className="font-bold text-mahogany">Address:</span> I-49 South Service Rd, Grand Coteau, LA 70451</p>
              <p><span className="font-bold text-mahogany">Hours:</span> Mon–Sat: 9am–6pm</p>
              <p><span className="font-bold text-mahogany">Phone:</span>{' '}
                <a href="tel:3182403874" className="text-cypress-amber hover:underline font-bold">(318) 240-3874</a>
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=I-49+South+Service+Rd+Grand+Coteau+LA+70451"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-mahogany text-antique-cream px-12 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-charred-edge transition-colors shadow-2xl"
            >
              Get Directions →
            </a>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="relative w-full overflow-hidden shadow-2xl" style={{ paddingTop: '75%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0!2d-92.035!3d30.435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI2JzA2LjAiTiA5MsKwMDInMDYuMCJX!5e0!3m2!1sen!2sus!4v1!"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grand Coteau Store Location"
              />
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
