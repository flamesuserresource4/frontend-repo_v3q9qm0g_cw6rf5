import { motion } from 'framer-motion';

const BatikOrnament = () => (
  <svg aria-hidden="true" className="absolute -top-10 -right-10 w-56 h-56 opacity-25 text-amber-700" viewBox="0 0 200 200" fill="none">
    <defs>
      <pattern id="batik-dot" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="currentColor" />
      </pattern>
    </defs>
    <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="2" fill="url(#batik-dot)" />
    <path d="M30 70 C60 80 80 100 100 130" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M100 10 C120 40 140 60 170 70" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

export default function HeroSection() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #c084fc 0, transparent 40%), radial-gradient(circle at 80% 0%, #f59e0b 0, transparent 35%), radial-gradient(circle at 50% 100%, #38bdf8 0, transparent 45%)",
        }}
      />
      <BatikOrnament />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 flex flex-col-reverse lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900">
            Yearbook Kelas VI
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto lg:mx-0">
            Kenangan terbaik sekolah dasar dirangkai dalam nuansa batik Indonesia — elegan, modern, dan penuh cerita.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <a href="#album" className="px-5 py-2.5 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition">
              Lihat Album
            </a>
            <a href="#siswa" className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 transition">
              Data Siswa
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-[32px] shadow-2xl bg-white/70 backdrop-blur border border-white/60 p-2">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-amber-100/60 to-indigo-100/40 pointer-events-none" />
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=640&auto=format&fit=crop"
              alt="Wali Kelas"
              className="relative z-10 w-full h-full object-cover rounded-[24px]"
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white shadow-md border text-sm text-slate-700">
              Ibu Wali Kelas VI
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
