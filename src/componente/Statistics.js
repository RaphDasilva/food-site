import { statistics } from './utilts/data';

const Statistics = () => {
  return (
    <section className='statistics-section' id='statistics'>
      <div className='statistics-text'>
        <h1>Statistics</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          quibusdam.
        </p>
      </div>
      <div className='statistics-info'>
        {statistics.map((statistic) => {
          const { id, title, text } = statistic;
          return (
            <article key={id} className='statistics-card'>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Statistics;
