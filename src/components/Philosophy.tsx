import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Philosophy.module.css";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Philosophy() {
  const { t } = useLanguage();

  return (
    <section id="filosofia" className={`section ${styles.philosophy}`}>
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          {t.philosophy.eyebrow}
        </motion.p>

        <div className={styles.lines}>
          {t.philosophy.lines.map((line, i) => (
            <motion.div
              key={line}
              className={styles.line}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: easeOut }}
            >
              <span className={styles.lineN}>{`0${i + 1}`}</span>
              <p>{line}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
