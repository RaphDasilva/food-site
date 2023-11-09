import { products } from './utilts/data';

const About = () => {
  return (
    <section className='about-section' id='about'>
      <div className='about-text'>
        <h2>Best Seller</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
          voluptatum! Quisquam, voluptates. Quisquam, voluptates. Quisquam,
          voluptates. Quisquam, voluptates.
        </p>
      </div>
      <div className='about-box'>
        {products.map((product) => {
          const { id, title, img, text } = product;
          return (
            <div key={id} className='about-card'>
              <img src={img} alt={title} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default About;
