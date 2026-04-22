import { FadeUp } from '../components/Layout';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

// All real project photos — original 12 + 2025 professional shoot
const REAL_GALLERY = [
  // 2025 Grand Coteau store — professional shoot
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
  // Original project photos
  { id: 38, src: '/images/277500704_150867020723593_1182661073734601728_n.jpg',  title: 'Cypress Porch Posts & Shutters' },
  { id: 39, src: '/images/276197468_151991650611130_2624331844763769457_n.jpg',  title: 'Timber Frame Barn Entry' },
  { id: 40, src: '/images/272837486_137899615353667_3663043520166976821_n.jpg',  title: 'Outdoor Pavilion & T&G Ceiling' },
  { id: 41, src: '/images/289707034_171872228623072_7084350631170968445_n.jpg',  title: 'Custom T&G Ceiling Detail' },
  { id: 42, src: '/images/277175532_150868224056806_1401704873125698893_n.jpg',  title: 'Louisiana Home Porch Beams' },
  { id: 43, src: '/images/277228654_150868260723469_3021594272097539731_n.jpg',  title: 'Stained Cypress Columns' },
  { id: 44, src: '/images/276160467_150867434056885_8706184336137964340_n.jpg',  title: 'Golden Hour Porch Posts' },
  { id: 45, src: '/images/277509230_150868394056789_1940454017148676648_n.jpg',  title: 'Gazebo Ceiling & Lantern' },
  { id: 46, src: '/images/277735522_151991600611135_2839161206587592020_n.jpg',  title: 'White Farmhouse Cypress Posts' },
  { id: 47, src: '/images/287379839_168241782319450_842021099019914168_n.jpg',   title: 'New Cypress Pavilion Build' },
  { id: 48, src: '/images/277754292_151991643944464_1444947564140231799_n.jpg',  title: 'Cypress Timber Frame Construction' },
  { id: 49, src: '/images/313939437_195425206343619_7774528360206510785_n.jpg',  title: 'Cypress Project' },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const openAt = (id: number) => setSelected(id);
  const close   = () => setSelected(null);
  const prev    = () => setSelected(s => s !== null ? (s - 1 + REAL_GALLERY.length) % REAL_GALLERY.length : null);
  const next    = () => setSelected(s => s !== null ? (s + 1) % REAL_GALLERY.length : null);

  // Keyboard nav
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  };

  const current = selected !== null ? REAL_GALLERY[selected] : null;

  return (
    <div className="bg-antique-cream min-h-screen" onKeyDown={onKey} tabIndex={-1}>
      <section className="relative h-[40vh] flex items-center justify-center bg-mahogany overflow-hidden">
        <img src="/images/840A3243-scaled.jpg" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Acadiana Cypress gallery hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany/70 via-transparent to-transparent" />
        <h1 className="relative text-6xl md:text-8xl font-display text-cypress-amber drop-shadow-2xl">Our Masterpieces</h1>
      </section>

      <section className="max-w-7xl mx-auto py-24 px-4 md:px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {REAL_GALLERY.map((img, i) => (
            <FadeUp key={img.id} delay={Math.min(i * 0.03, 0.5)} className="break-inside-avoid">
              <div
                className="group relative overflow-hidden bg-mahogany border-b-2 border-cypress-amber shadow-xl cursor-zoom-in"
                onClick={() => openAt(img.id)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 group-hover:brightness-50 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-cypress-amber opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                  <p className="text-antique-cream font-serif text-lg tracking-widest text-center">{img.title}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {current && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-mahogany/95 backdrop-blur-sm"
            onClick={close}
          >
            {/* Image container — stop click propagation so clicking image doesn't close */}
            <motion.div
              key={current.id}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1,    opacity: 1 }}
              exit={{    scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full mx-4 flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={current.src}
                alt={current.title}
                className="max-h-[80vh] w-auto max-w-full object-contain shadow-2xl border-b-4 border-cypress-amber"
              />
              <p className="mt-4 text-antique-cream font-serif text-lg tracking-widest opacity-80">{current.title}</p>
              <p className="mt-1 text-antique-cream/40 font-sans text-xs uppercase tracking-widest">{current.id + 1} / {REAL_GALLERY.length}</p>
            </motion.div>

            {/* Prev */}
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 text-antique-cream/70 hover:text-cypress-amber transition-colors text-5xl font-bold select-none"
              aria-label="Previous"
            >&#8249;</button>

            {/* Next */}
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 text-antique-cream/70 hover:text-cypress-amber transition-colors text-5xl font-bold select-none"
              aria-label="Next"
            >&#8250;</button>

            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 md:top-6 md:right-8 text-antique-cream/70 hover:text-cypress-amber transition-colors text-3xl font-bold"
              aria-label="Close"
            >&times;</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}



export function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', product: '', message: '' });

  // TODO: wire up form submission

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side: Form */}
      <section className="bg-mahogany p-8 md:p-24 flex flex-col justify-center space-y-12">
        <div className="space-y-4">
           <h1 className="text-5xl md:text-7xl font-display text-cypress-amber">Get in Touch</h1>
           <p className="text-antique-cream/60 font-serif italic text-lg">Send us an inquiry and Cody will call you back shortly.</p>
        </div>
        
        <form className="space-y-8 max-w-lg" onSubmit={(e) => e.preventDefault()}>
           {[
             { label: 'Name', name: 'name', type: 'text' },
             { label: 'Phone', name: 'phone', type: 'tel' },
             { label: 'Email', name: 'email', type: 'email' },
           ].map((field) => (
             <div key={field.name} className="relative group">
                <input
                  type={field.type}
                  placeholder=" "
                  className="w-full bg-transparent border-b-2 border-antique-cream/20 border-l-0 border-t-0 border-r-0 py-4 text-antique-cream font-sans focus:outline-none focus:border-cypress-amber peer transition-all"
                  value={formData[field.name as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                />
                <label className="absolute left-0 top-4 text-antique-cream/40 font-bold uppercase tracking-widest text-[10px] pointer-events-none transition-all peer-focus:-top-2 peer-focus:text-cypress-amber peer-[:not(:placeholder-shown)]:-top-2">
                  {field.label}
                </label>
             </div>
           ))}

           <div className="relative group">
              <select
                className="w-full bg-transparent border-b-2 border-antique-cream/20 border-l-0 border-t-0 border-r-0 py-4 text-antique-cream font-sans focus:outline-none focus:border-cypress-amber peer appearance-none"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              >
                <option value="" className="bg-mahogany">Interested In...</option>
                <option value="flooring" className="bg-mahogany">Flooring</option>
                <option value="blinds" className="bg-mahogany">Hunting Blinds</option>
                <option value="lumber" className="bg-mahogany">Lumber</option>
                <option value="mantels" className="bg-mahogany">Mantels</option>
                <option value="beams" className="bg-mahogany">Posts & Beams</option>
                <option value="tongue" className="bg-mahogany">Tongue & Groove</option>
                <option value="walls" className="bg-mahogany">Walls & Ceilings</option>
              </select>
              <div className="absolute right-0 top-6 text-cypress-amber pointer-events-none">▼</div>
           </div>

           <div className="relative group">
              <textarea
                placeholder=" "
                className="w-full bg-transparent border-b-2 border-antique-cream/20 border-l-0 border-t-0 border-r-0 py-4 text-antique-cream font-sans focus:outline-none focus:border-cypress-amber peer h-32 resize-none transition-all"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <label className="absolute left-0 top-4 text-antique-cream/40 font-bold uppercase tracking-widest text-[10px] pointer-events-none transition-all peer-focus:-top-2 peer-focus:text-cypress-amber peer-[:not(:placeholder-shown)]:-top-2">
                Your Message
              </label>
           </div>

           <button type="submit" className="w-full bg-cypress-amber text-mahogany py-6 font-bold uppercase tracking-[0.3em] flex items-center justify-center space-x-3 hover:bg-milled-glow transition-all shadow-2xl">
             <Send size={20} />
             <span>Send Inquiry</span>
           </button>
        </form>
      </section>

      {/* Right Side: Info */}
      <section className="bg-antique-cream p-8 md:p-24 flex flex-col justify-center space-y-16">
         <FadeUp className="space-y-8">
            <h2 className="text-4xl font-serif text-mahogany">Visit the Mill</h2>
            <div className="grid grid-cols-1 gap-12">
               {/* Location 1 */}
               <div className="space-y-4 p-8 border-l-4 border-cypress-amber bg-white shadow-lg">
                  <h3 className="text-2xl font-serif text-mahogany">Moreauville Mill Yard</h3>
                  <div className="space-y-4 text-charred-edge/80 font-sans">
                     <div className="flex items-start space-x-3">
                        <MapPin className="text-cypress-amber shrink-0 translate-y-1" size={18} />
                        <span>2463 N. Bayou Desglaises, Moreauville, LA 71355</span>
                     </div>
                     <div className="flex items-center space-x-3">
                        <Phone className="text-cypress-amber shrink-0" size={18} />
                        <a href="tel:3182404688" className="hover:text-cypress-amber transition-colors">(318) 240-4688</a>
                     </div>
                     <div className="flex items-start space-x-3">
                        <Clock className="text-cypress-amber shrink-0 translate-y-1" size={18} />
                        <span className="text-xs uppercase tracking-widest font-bold">Mon-Fri: 8am - 5pm<br />Sat: By Appointment</span>
                     </div>
                  </div>
               </div>
               {/* Location 2 */}
               <div className="space-y-4 p-8 border-l-4 border-cypress-amber bg-white shadow-lg">
                  <h3 className="text-2xl font-serif text-mahogany">Grand Coteau Store</h3>
                  <div className="space-y-4 text-charred-edge/80 font-sans">
                     <div className="flex items-start space-x-3">
                        <MapPin className="text-cypress-amber shrink-0 translate-y-1" size={18} />
                        <span>I-49 South Service Rd, Grand Coteau, LA 70451</span>
                     </div>
                     <div className="flex items-center space-x-3">
                        <Phone className="text-cypress-amber shrink-0" size={18} />
                        <a href="tel:3182403874" className="hover:text-cypress-amber transition-colors">(318) 240-3874</a>
                     </div>
                     <div className="flex items-start space-x-3">
                        <Clock className="text-cypress-amber shrink-0 translate-y-1" size={18} />
                        <span className="text-xs uppercase tracking-widest font-bold">Mon-Sat: 9am - 6pm</span>
                     </div>
                  </div>
               </div>
            </div>
         </FadeUp>
      </section>
    </div>
  );
}

export function NewLocation() {
  const STORE_PHOTOS = [
    '/images/840A3186-scaled.jpg',
    '/images/840A3197-scaled.jpg',
    '/images/840A3208-scaled.jpg',
    '/images/840A3212-scaled.jpg',
    '/images/840A3221-scaled.jpg',
    '/images/840A3223-scaled.jpg',
    '/images/840A3231-scaled.jpg',
    '/images/840A3233-scaled.jpg',
    '/images/840A3243-scaled.jpg',
    '/images/840A3254-scaled.jpg',
    '/images/840A3256-scaled.jpg',
    '/images/840A3258-scaled.jpg',
  ];

  return (
    <div className="min-h-screen">

      {/* HERO — full parallax */}
      <section className="relative h-[70vh] flex items-center justify-center bg-mahogany overflow-hidden">
        <img
          src="/images/840A3260-scaled.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-110"
          alt="Grand Coteau Acadiana Cypress showroom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mahogany/70 via-mahogany/40 to-mahogany/90" />
        <div className="relative z-10 text-center px-4 space-y-4">
          <FadeUp>
            <p className="font-display text-cypress-amber text-5xl md:text-7xl leading-none">Now Open</p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white uppercase tracking-widest">Grand Coteau</h1>
            <div className="h-1 w-24 bg-cypress-amber mx-auto mt-4" />
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-antique-cream/80 font-sans uppercase tracking-[0.4em] text-sm font-bold">The King of Lumber — Now Closer Than Ever</p>
          </FadeUp>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="bg-cypress-amber py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around gap-6 text-mahogany text-center">
          <div>
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-70 mb-1">Address</p>
            <p className="font-serif text-lg font-bold">I-49 South Service Rd, Grand Coteau, LA 70451</p>
          </div>
          <div className="h-10 w-px bg-mahogany/20 hidden md:block" />
          <div>
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-70 mb-1">Hours</p>
            <p className="font-serif text-lg font-bold">Mon–Sat: 9am – 6pm</p>
          </div>
          <div className="h-10 w-px bg-mahogany/20 hidden md:block" />
          <div>
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-70 mb-1">Phone</p>
            <a href="tel:3182403874" className="font-serif text-lg font-bold hover:underline">(318) 240-3874</a>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="bg-mahogany py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="text-center space-y-2">
            <p className="font-display text-cypress-amber text-4xl md:text-5xl leading-none">Inside the Store</p>
            <div className="h-1 w-20 bg-cypress-amber mx-auto mt-3" />
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {STORE_PHOTOS.map((src, i) => (
              <FadeUp key={src} delay={i * 0.05}>
                <div className="group relative overflow-hidden aspect-square border-b-2 border-cypress-amber">
                  <img
                    src={src}
                    alt={`Grand Coteau store photo ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-75 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-cypress-amber opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* MAP + CTA */}
      <section className="bg-antique-cream py-24 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div className="space-y-6">
              <p className="font-display text-cypress-amber text-4xl leading-none">Come See Us</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-mahogany uppercase tracking-wide">Grand Coteau Store</h2>
              <div className="h-1 w-16 bg-cypress-amber" />
              <div className="space-y-3 text-charred-edge font-sans">
                <p className="text-lg"><span className="font-bold text-mahogany">Address:</span> I-49 South Service Rd, Grand Coteau, LA 70451</p>
                <p className="text-lg"><span className="font-bold text-mahogany">Hours:</span> Mon–Sat: 9am – 6pm</p>
                <p className="text-lg"><span className="font-bold text-mahogany">Phone:</span>{' '}
                  <a href="tel:3182403874" className="text-cypress-amber hover:underline font-bold">(318) 240-3874</a>
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=I-49+South+Service+Rd+Grand+Coteau+LA+70451"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-mahogany text-antique-cream px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-charred-edge transition-colors shadow-2xl"
              >
                Get Directions →
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="relative w-full border-4 border-mahogany overflow-hidden shadow-2xl" style={{ paddingTop: '75%' }}>
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
