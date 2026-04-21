import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        <span className={styles.label}>Trabajemos juntos</span>
        <h2>¿Tu empresa necesita producción láser?</h2>
        <p>
          Cotizá tu proyecto sin compromiso. Te asesoramos, analizamos tus necesidades y te presentamos una propuesta concreta.
        </p>
        <div className={styles.actions}>
          <a href="#contacto" className={styles.button}>Solicitar presupuesto</a>
          <a href="mailto:info@tallerlaser.com" className={styles.secondary}>info@tallerlaser.com</a>
        </div>
      </div>
    </section>
  );
}
