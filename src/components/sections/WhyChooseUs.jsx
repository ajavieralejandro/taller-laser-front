import styles from './WhyChooseUs.module.css';
import reasons from '../../data/whyChooseUs';

export default function WhyChooseUs() {
  return (
    <section className={styles.why}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Diferencial</span>
          <h2>Por qué trabajar con nosotros</h2>
        </div>
        <div className={styles.grid}>
          {reasons.map((reason, i) => (
            <div className={styles.card} key={i}>
              <span className={styles.num}>0{i + 1}</span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
