import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InvestmentInfrastructure from "../components/investment-infrastructure";

export default function InvestissementPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <InvestmentInfrastructure />
      </main>
      <Footer />
    </div>
  );
}