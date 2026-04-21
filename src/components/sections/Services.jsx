import styles from './Services.module.css';
import services from '../../data/services';

export default function Services() {
  return (
    <section className={styles.services} id="servicios">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Servicios</span>
          <h2>Todo lo que podemos hacer por tu empresa</h2>
          <p>Tecnología de corte y grabado láser aplicada a proyectos industriales, comerciales y de producción.</p>
        </div>
        <div className={styles.grid}>
          {services.map((service, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.cardNum}>0{i + 1}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
