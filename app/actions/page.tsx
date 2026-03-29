
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ActionsSection from "../components/actions-section";
export default function ActionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        <ActionsSection />
      </main>

      <Footer />
    </div>
  );
}