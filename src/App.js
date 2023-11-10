import About from './componente/About';
import Product from './componente/Product';
import Hero from './componente/Hero';
import Navbar from './componente/Navbar';
import Statistics from './componente/Statistics';
import Grill from './componente/Grill';
import Feed from './componente/Feed';
import Subscribe from './componente/Subscribe';
import Footer from './componente/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Statistics />
      <Grill />
      <Feed />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
