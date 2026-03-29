import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SupportSection from "../components/support-section";

export default function SupportPage() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-grow">
        <SupportSection />
      </main>

      <Footer />

    </div>
  );
}