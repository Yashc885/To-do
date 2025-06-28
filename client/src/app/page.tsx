import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';
import Home from '@/component/Home';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Home />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
