import foodImg from '../componente/utilts/images/food4.jpg';

const Grill = () => {
  return (
    <section className='grill-section'>
      <div className='girll-text'>
        <h3>Chicken Grill</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          quidem, cumque, voluptates, voluptatem quas quod quia voluptatum
          doloremque quos dolorum quae? Quisquam, voluptatem. Quisquam
          voluptatem, quae voluptates quos dolorum quia..
        </p>
        <button>Order now</button>
      </div>
      <div className='girll-img'>
        <img src={foodImg} alt='foodImg' />
      </div>
    </section>
  );
};
export default Grill;
