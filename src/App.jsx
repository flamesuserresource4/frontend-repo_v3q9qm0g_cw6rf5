import HeroSection from './components/HeroSection';
import AlbumGallery from './components/AlbumGallery';
import StudentsSection from './components/StudentsSection';
import OrganizationChart from './components/OrganizationChart';
import WorksSection from './components/WorksSection';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-sm bg-gradient-to-br from-amber-500 to-indigo-500" />
          <span className="font-semibold text-slate-900">Yearbook VI</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
          <a href="#beranda" className="hover:text-amber-700 transition">Beranda</a>
          <a href="#album" className="hover:text-amber-700 transition">Album</a>
          <a href="#siswa" className="hover:text-amber-700 transition">Data Siswa</a>
          <a href="#organisasi" className="hover:text-amber-700 transition">Organisasi</a>
          <a href="#karya" className="hover:text-amber-700 transition">Karya</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Yearbook Kelas VI</div>
        <div className="flex items-center gap-2 text-amber-700">
          <span className="h-2 w-2 rounded-full bg-amber-600" />
          Nuansa batik, elegan dan modern
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <HeroSection />
      <AlbumGallery />
      <StudentsSection />
      <OrganizationChart />
      <WorksSection />
      <Footer />
    </div>
  );
}

export default App;
