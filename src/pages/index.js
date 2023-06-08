import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <HomePage />
        <About />
        <Projects />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
