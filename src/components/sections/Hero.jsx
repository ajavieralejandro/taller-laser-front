import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.badge}>Producción industrial · Corte y grabado láser</div>
          <h1 className={styles.title}>
            Precisión láser para<br />
            <span>empresas e industria</span>
          </h1>
          <p className={styles.subtitle}>
            Fabricación a medida, señalética, placas técnicas y producción industrial. Tecnología, calidad y cumplimiento de plazos para tu empresa.
          </p>
          <div className={styles.ctas}>
            <a href="#contacto" className={styles.ctaMain}>Solicitar presupuesto</a>
            <a href="#trabajos" className={styles.ctaSec}>Ver trabajos</a>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>+500</span>
            <span className={styles.statLabel}>Proyectos entregados</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNum}>+120</span>
            <span className={styles.statLabel}>Empresas activas</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNum}>15+</span>
            <span className={styles.statLabel}>Años de trayectoria</span>
          </div>
        </div>
      </div>
    </section>
  );
}
