import styles from './Materials.module.css';
import materials from '../../data/materials';

export default function Materials() {
  return (
    <section className={styles.materials} id="materiales">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Materiales</span>
          <h2>Trabajamos con los materiales que tu proyecto necesita</h2>
          <p>Capacidad para procesar una amplia gama de materiales técnicos e industriales con precisión, desde piezas únicas hasta producción en serie.</p>
        </div>
        <div className={styles.grid}>
          {materials.map((mat, i) => (
            <div className={styles.card} key={i}>
              <span className={styles.category}>{mat.category}</span>
              <h3>{mat.name}</h3>
              <p>{mat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
