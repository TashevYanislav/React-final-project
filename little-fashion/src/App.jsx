import About from "./Components/About";
import FeaturedProducts from "./Components/FeaturedProducts";
import Footer from "./Components/Footer";
import FrontProduct from "./Components/FrontProduct";
import NavigationBar from "./Components/NavigationBar";
import SlideShow from "./Components/SlideShow";

function App() {
  return (
    <div>
      <section className="preloader">
        <div className="spinner">
          <span className="sk-inner-circle" />
        </div>
      </section>
      <main>
        <NavigationBar />
        <SlideShow />
        <About />
        <FrontProduct />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
