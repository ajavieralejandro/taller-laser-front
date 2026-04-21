import styles from './Gallery.module.css';
import gallery from '../../data/gallery';

export default function Gallery() {
  return (
    <section className={styles.gallery} id="trabajos">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Trabajos</span>
          <h2>Producción real para empresas reales</h2>
          <p>Selección de proyectos industriales y corporativos realizados a medida.</p>
        </div>
        <div className={styles.grid}>
          {gallery.map((item, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.imageWrap}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.info}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
