import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-light-bg dark:bg-dark-bg min-h-screen font-sans transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
