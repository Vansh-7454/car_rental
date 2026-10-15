import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      {/* Accessible skip link for keyboard users */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
      </main>
    </>
  );
}
