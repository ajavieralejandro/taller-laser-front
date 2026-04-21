import styles from './Testimonials.module.css';
import testimonials from '../../data/testimonials';

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Testimonios</span>
          <h2>Lo que dicen nuestros clientes</h2>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div className={styles.card} key={i}>
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.author}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.company}>{t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
