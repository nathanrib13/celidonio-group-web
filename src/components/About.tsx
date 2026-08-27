import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./About.module.css";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 className={styles.heading}>
              {t.about.headingLine1} <span className="accent">{t.about.headingAccent}</span>
            </h2>
          </motion.div>

          <motion.p
            className={styles.body}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
          >
            {t.about.body}
          </motion.p>
        </div>

        <div className={styles.pillars}>
          {t.about.pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className={styles.pillar}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: easeOut }}
            >
              <span className={styles.pillarN}>{p.n}</span>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarText}>{p.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.model}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <p className={`eyebrow ${styles.modelEyebrow}`}>{t.about.modelEyebrow}</p>
          <div className={styles.modelInner}>
            <h3 className={styles.modelHeading}>
              {t.about.modelHeadingLine1}
              <br />
              <span className="accent">{t.about.modelHeadingAccent}</span>
            </h3>
            <p className={styles.modelBody}>{t.about.modelBody}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
