import { motion } from "framer-motion";
import badge from "../assets/celidonio-seal.svg";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Vision.module.css";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Vision() {
  const { t } = useLanguage();

  return (
    <section id="visao" className={styles.visao}>
      <img src={badge} alt="" className={styles.mark} />
      <div className={`container ${styles.inner}`}>
        <motion.p
          className={`eyebrow ${styles.eyebrow}`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          {t.vision.eyebrow}
        </motion.p>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.08, ease: easeOut }}
        >
          {t.vision.headingLine1}
          <br />
          {t.vision.headingLine2} <span className="accent">{t.vision.headingAccent}</span>
        </motion.h2>

        <motion.p
          className={styles.body}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.16, ease: easeOut }}
        >
          {t.vision.body}
        </motion.p>
      </div>
    </section>
  );
}
