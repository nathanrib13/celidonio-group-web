import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Segments.module.css";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Segments() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);

  return (
    <section id="segmentos" className={`section ${styles.segments}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <p className="eyebrow">{t.segments.eyebrow}</p>
          <h2 className={styles.heading}>{t.segments.heading}</h2>
        </motion.div>

        <ul className={styles.list}>
          {t.segments.items.map((seg, i) => {
            const isOpen = open === i;
            return (
              <motion.li
                key={seg.title}
                className={`${styles.row} ${isOpen ? styles.rowOpen : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: easeOut }}
              >
                <button
                  className={styles.rowHead}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  data-cursor-active
                  aria-expanded={isOpen}
                >
                  <span className={styles.rowN}>{seg.n}</span>
                  <span className={styles.rowTitle}>{seg.title}</span>
                  <span className={styles.rowIcon} aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className={styles.rowBody}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: easeOut }}
                    >
                      <p>{seg.text}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
