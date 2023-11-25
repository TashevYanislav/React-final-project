import About from "./About";
import FeaturedProducts from "./FeaturedProducts";
import FrontProduct from "./FrontProduct";
import SlideShow from "./SlideShow";

export default function Home() {
  return (
    <>
      <SlideShow />
      <About />
      <FrontProduct />
      <FeaturedProducts />
    </>
  );
}
