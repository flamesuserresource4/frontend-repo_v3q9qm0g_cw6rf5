import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const photos = Array.from({ length: 15 }).map((_, i) =>
  `https://images.unsplash.com/photo-${1550000000 + i}?q=80&w=1200&auto=format&fit=crop`
);

export default function AlbumGallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % photos.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="album" className="py-16 bg-gradient-to-b from-white to-amber-50/30">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Album Kelas</h2>
          <div className="text-sm text-slate-600">{index + 1} / {photos.length}</div>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border bg-white shadow">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={index}
              src={photos[index]}
              alt={`Foto ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.02, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />

          <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
            <button
              onClick={() => setIndex((i) => (i - 1 + photos.length) % photos.length)}
              className="px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border text-slate-700 hover:bg-white shadow"
            >
              Prev
            </button>
            <div className="flex gap-1.5">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition ${i === index ? 'bg-amber-600' : 'bg-white/80 border'} `}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((i) => (i + 1) % photos.length)}
              className="px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border text-slate-700 hover:bg-white shadow"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
