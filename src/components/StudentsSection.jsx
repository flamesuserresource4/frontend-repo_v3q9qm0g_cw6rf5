import { motion } from 'framer-motion';

const students = [
  { name: 'Alya', hobby: 'Membaca', quote: 'Buku adalah jendela dunia', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop' },
  { name: 'Bima', hobby: 'Sepak bola', quote: 'Latihan membuat sempurna', img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop' },
  { name: 'Citra', hobby: 'Menggambar', quote: 'Warna adalah bahasa hati', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
  { name: 'Dian', hobby: 'Menari', quote: 'Gerak adalah ekspresi', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop' },
  { name: 'Eko', hobby: 'Badminton', quote: 'Semangat tak pernah padam', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop' },
  { name: 'Fina', hobby: 'Menyanyi', quote: 'Nada membawa bahagia', img: 'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?q=80&w=400&auto=format&fit=crop' },
  { name: 'Gilang', hobby: 'Game edukasi', quote: 'Belajar bisa menyenangkan', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop' },
  { name: 'Hana', hobby: 'Memasak', quote: 'Rasa menyatukan kita', img: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=400&auto=format&fit=crop' },
  { name: 'Iqbal', hobby: 'Bersepeda', quote: 'Roda tak pernah berhenti', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop' },
];

export default function StudentsSection() {
  return (
    <section id="siswa" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-8">Data Siswa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.03 }}
              className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <img src={s.img} alt={s.name} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{s.name}</h3>
                  <p className="text-sm text-amber-700">Hobi: {s.hobby}</p>
                </div>
              </div>
              <p className="mt-3 text-slate-600 text-sm italic">“{s.quote}.”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
