import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/contact-form";

export default function Contact() {
  return (
    <div>
      <Navbar />

      <main>
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}