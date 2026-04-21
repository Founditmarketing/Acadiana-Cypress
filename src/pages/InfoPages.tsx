import { FadeUp } from '../components/Layout';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

// All real project photos from acadiana-cypress.com
const REAL_GALLERY = [
  { id: 0,  src: '/images/277500704_150867020723593_1182661073734601728_n.jpg',  title: 'Cypress Porch Posts & Shutters' },
  { id: 1,  src: '/images/276197468_151991650611130_2624331844763769457_n.jpg',  title: 'Timber Frame Barn Entry' },
  { id: 2,  src: '/images/272837486_137899615353667_3663043520166976821_n.jpg',  title: 'Outdoor Pavilion & T&G Ceiling' },
  { id: 3,  src: '/images/289707034_171872228623072_7084350631170968445_n.jpg',  title: 'Custom T&G Ceiling Detail' },
  { id: 4,  src: '/images/277299687_150868094056819_131842279301177619_n.jpg',   title: 'Night-Lit Cypress Gable' },
  { id: 5,  src: '/images/277175532_150868224056806_1401704873125698893_n.jpg',  title: 'Louisiana Home Porch Beams' },
  { id: 6,  src: '/images/277228654_150868260723469_3021594272097539731_n.jpg',  title: 'Stained Cypress Columns' },
  { id: 7,  src: '/images/276160467_150867434056885_8706184336137964340_n.jpg',  title: 'Golden Hour Porch Posts' },
  { id: 8,  src: '/images/277509230_150868394056789_1940454017148676648_n.jpg',  title: 'Gazebo Ceiling & Lantern' },
  { id: 9,  src: '/images/277735522_151991600611135_2839161206587592020_n.jpg',  title: 'White Farmhouse Cypress Posts' },
  { id: 10, src: '/images/287379839_168241782319450_842021099019914168_n.jpg',   title: 'New Cypress Pavilion Build' },
  { id: 11, src: '/images/277754292_151991643944464_1444947564140231799_n.jpg',  title: 'Cypress Timber Frame Construction' },
];

export function Gallery() {
  return (
    <div className="bg-antique-cream min-h-screen">
      <section className="relative h-[40vh] flex items-center justify-center bg-mahogany overflow-hidden">
        <img src="/images/272837486_137899615353667_3663043520166976821_n.jpg" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Acadiana Cypress gallery hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany/60 via-transparent to-transparent" />
        <h1 className="relative text-6xl md:text-8xl font-display text-cypress-amber drop-shadow-2xl">Our Masterpieces</h1>
      </section>

      <section className="max-w-7xl mx-auto py-24 px-4 md:px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {REAL_GALLERY.map((img, i) => (
            <FadeUp key={img.id} delay={i * 0.05} className="break-inside-avoid">
              <div className="group relative overflow-hidden bg-mahogany border-b-2 border-cypress-amber shadow-xl cursor-zoom-in">
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
    </div>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', product: '', message: '' });

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

           <button className="w-full bg-cypress-amber text-mahogany py-6 font-bold uppercase tracking-[0.3em] flex items-center justify-center space-x-3 hover:bg-milled-glow transition-all shadow-2xl">
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
  return (
    <div className="bg-antique-cream min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center bg-cypress-amber text-mahogany overflow-hidden">
        <div className="absolute inset-0 bg-mahogany opacity-10" />
        <FadeUp className="relative text-center px-4">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-display">Grand Coteau is Open</h1>
          <p className="mt-4 font-sans font-bold uppercase tracking-[0.3em] opacity-70 text-sm">The King of Lumber is moving South</p>
        </FadeUp>
      </section>

      <section className="bg-mahogany py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-12 text-center text-antique-cream">
           <FadeUp>
             <h2 className="text-4xl md:text-6xl font-serif text-cypress-amber">BIG NEWS!</h2>
             <p className="text-xl leading-relaxed mt-8 opacity-80">
               Acadiana Cypress has opened a new store in Grand Coteau! Stop by for top-quality cypress lumber, beams, and expert service—now closer than ever!
             </p>
           </FadeUp>
           <FadeUp delay={0.2}>
             <div className="relative w-full border-4 border-cypress-amber overflow-hidden" style={{paddingTop: '56.25%'}}>
               <iframe
                 className="absolute inset-0 w-full h-full"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0!2d-92.035!3d30.435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI2JzA2LjAiTiA5MsKwMDInMDYuMCJX!5e0!3m2!1sen!2sus!4v1!"
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Grand Coteau, Louisiana Store Location"
               />
             </div>
           </FadeUp>
           <FadeUp delay={0.4}>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=I-49+South+Service+Rd+Grand+Coteau+LA+70451" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-cypress-amber text-mahogany px-12 py-6 font-bold uppercase tracking-widest text-lg hover:bg-milled-glow transition-all shadow-2xl"
              >
                Get Directions
              </a>
           </FadeUp>
        </div>
      </section>
    </div>
  );
}
