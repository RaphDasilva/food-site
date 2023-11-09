import productImg from '../componente/utilts/images/img5.jpg';
const Product = () => {
  return (
    <section className='product-section' id='product'>
      <div className='product-img'>
        <img src={productImg} alt='product-img' />
      </div>
      <div className='product-text'>
        <h3>Oriental Taste</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, doloribus, voluptatibus doloremque
          exercitationem quos voluptatem voluptate consequatur quae quia
          asperiores. Quisquam voluptatum, quibusdam, doloribus, voluptatibus
          doloremque exercitationem quos voluptatem voluptate consequatur quae
          quia asperiores.
        </p>

        <button className='btn btn-primary'>Read More</button>
      </div>
    </section>
  );
};
export default Product;
