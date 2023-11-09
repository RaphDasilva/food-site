import About from './componente/About';
import Product from './componente/Product';
import Hero from './componente/Hero';
import Navbar from './componente/Navbar';
import Statistics from './componente/Statistics';
import Grill from './componente/Grill';
import Feed from './componente/Feed';

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
    </div>
  );
}

export default App;
