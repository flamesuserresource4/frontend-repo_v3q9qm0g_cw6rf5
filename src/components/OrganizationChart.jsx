import { motion } from 'framer-motion';

const leader = { name: 'Ibu Wali Kelas', role: 'Wali Kelas', img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=256&auto=format&fit=crop' };
const members = [
  'Alya','Bima','Citra','Dian','Eko','Fina','Gilang','Hana','Iqbal'
].map((name, i) => ({ name, role: 'Siswa', img: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundType=gradientLinear&fontFamily=Inter` }));

export default function OrganizationChart() {
  return (
    <section id="organisasi" className="py-16 bg-gradient-to-b from-amber-50/40 to-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-10">Struktur Organisasi Kelas</h2>

        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <img src={leader.img} alt={leader.name} className="w-24 h-24 rounded-full object-cover border-4 border-amber-200 shadow" />
            <div className="mt-3 text-center">
              <div className="font-semibold text-slate-900">{leader.name}</div>
              <div className="text-sm text-amber-700">{leader.role}</div>
            </div>
          </motion.div>

          <div className="my-6 h-8 w-0.5 bg-amber-300" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
            {members.map((m, idx) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className="flex flex-col items-center"
              >
                <img src={m.img} alt={m.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow" />
                <div className="mt-2 text-center">
                  <div className="text-sm font-medium text-slate-900">{m.name}</div>
                  <div className="text-xs text-slate-500">{m.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
