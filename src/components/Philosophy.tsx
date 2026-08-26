import { motion } from "framer-motion";
import styles from "./Philosophy.module.css";

const LINES = [
  "Cada investimento é um compromisso de longo prazo.",
  "Cada empresa é uma oportunidade de gerar valor.",
  "Cada projeto transforma uma ideia em operação.",
  "Cada negócio é um legado em construção.",
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Philosophy() {
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
          Filosofia
        </motion.p>

        <div className={styles.lines}>
          {LINES.map((line, i) => (
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
