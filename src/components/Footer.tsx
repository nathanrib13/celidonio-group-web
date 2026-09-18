import icon from "../assets/celidonio-icon.png";
import { useLanguage } from "../i18n/LanguageContext";
import { WhatsAppIcon } from "./WhatsAppIcon";
import styles from "./Footer.module.css";

const WHATSAPP_URL = "https://wa.me/5521992229972";

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
            {t.footer.tagline.split(" · ").map((word, i, arr) => (
              <span key={word}>
                <span className={i === 0 ? styles.tagRed : i === arr.length - 1 ? styles.tagGold : undefined}>
                  {word}
                </span>
                {i < arr.length - 1 && <span> · </span>}
              </span>
            ))}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
            data-cursor-active
          >
            <WhatsAppIcon className={styles.whatsappIcon} />
            WhatsApp
          </a>
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
