import styles from './Sectors.module.css';
import sectors from '../../data/sectors';

export default function Sectors() {
  return (
    <section className={styles.sectors} id="sectores">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Sectores</span>
          <h2>Trabajamos con empresas de todos los sectores</h2>
          <p>Adaptamos nuestra producción a las necesidades técnicas de cada industria y tipo de cliente.</p>
        </div>
        <div className={styles.grid}>
          {sectors.map((sector, i) => (
            <div className={styles.card} key={i}>
              <span>{sector}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
