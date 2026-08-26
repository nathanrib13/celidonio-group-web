import badge from "../assets/celidonio-badge.png";
import styles from "./Footer.module.css";

const SEGMENTS = [
  "Gastronomia & Hospitality",
  "Construção & Incorporação",
  "Mercado Imobiliário",
  "Saúde & Medical",
  "Serviços Empresariais",
  "Facilities",
  "Novos Negócios",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <img src={badge} alt="Celidonio Group" className={styles.mark} />
          <p className={styles.tagline}>Connect · Develop · Transform</p>
        </div>

        <ul className={styles.segments}>
          {SEGMENTS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {year} Grupo Celidonio. Todos os direitos reservados.</p>
        <p>Construindo empresas. Criando legado.</p>
      </div>
    </footer>
  );
}
