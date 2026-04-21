import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <img src={logo} alt="Taller Laser" />
          <span>TALLER<strong>LASER</strong></span>
        </a>
        <nav className={styles.nav}>
          <a href="#servicios">Servicios</a>
          <a href="#materiales">Materiales</a>
          <a href="#sectores">Sectores</a>
          <a href="#trabajos">Trabajos</a>
          <a href="#contacto" className={styles.cta}>Solicitar presupuesto</a>
        </nav>
      </div>
    </header>
  );
}
