import styles from './ValueProposition.module.css';

export default function ValueProposition() {
  return (
    <section className={styles.value}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <span className={styles.label}>Quiénes somos</span>
          <h2>Fabricación láser de precisión para el sector productivo</h2>
        </div>
        <div className={styles.body}>
          <p>
            Somos un taller especializado en corte y grabado láser orientado a empresas, industrias y mayoristas. Trabajamos con materiales técnicos y producción a medida, con foco en calidad, precisión y cumplimiento de plazos.
          </p>
          <p>
            Fabricamos piezas técnicas, señalética, placas identificatorias, branding industrial y componentes personalizados para proyectos productivos de cualquier escala.
          </p>
        </div>
      </div>
    </section>
  );
}
