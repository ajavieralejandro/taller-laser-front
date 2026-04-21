import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contacto">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.logo}>TALLER<strong>LASER</strong></span>
            <p>Corte y grabado láser de precisión para empresas, industrias y mayoristas.</p>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li><span>Dirección:</span> (a definir)</li>
              <li><span>Email:</span> <a href="mailto:info@tallerlaser.com">info@tallerlaser.com</a></li>
              <li><span>WhatsApp:</span> <a href="https://wa.me/5491100000000">+54 9 11 0000-0000</a></li>
              <li><span>Horario:</span> Lun a Vie, 9 a 18hs</li>
            </ul>
          </div>
          <div>
            <h4>Servicios</h4>
            <ul>
              <li><a href="#servicios">Corte láser</a></li>
              <li><a href="#servicios">Grabado láser</a></li>
              <li><a href="#servicios">Señalética</a></li>
              <li><a href="#servicios">Placas técnicas</a></li>
              <li><a href="#servicios">Producción para empresas</a></li>
            </ul>
          </div>
          <div>
            <h4>Redes</h4>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Taller Laser. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
