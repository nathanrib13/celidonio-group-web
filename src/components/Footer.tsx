import icon from "../assets/celidonio-icon.png";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <div className={styles.brandRow}>
            <span className={styles.brandMarkWrap}>
              <img src={icon} alt="" className={styles.mark} />
            </span>
            <span className={styles.brandName}>{t.footer.brandName}</span>
          </div>
          <p className={styles.tagline}>
            <span className={styles.tagRed}>Connect</span>
            <span> · </span>
            <span>Develop</span>
            <span> · </span>
            <span className={styles.tagGold}>Transform</span>
          </p>
        </div>

        <ul className={styles.segments}>
          {t.segments.items.map((s) => (
            <li key={s.title}>{s.title}</li>
          ))}
        </ul>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {t.footer.brandName}. {t.footer.copyright}
        </p>
        <p>{t.footer.closing}</p>
      </div>
    </footer>
  );
}
