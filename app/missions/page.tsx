import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MissionsSection from "../components/missions-sections";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <MissionsSection />
      </main>

      <Footer />
    </div>
  );
}