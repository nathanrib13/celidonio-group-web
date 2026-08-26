import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const easeOut = [0.16, 1, 0.3, 1] as const;
const EMAIL = "contato@grupocelidonio.com.br";

export default function Contact() {
  return (
    <section id="contato" className={`section ${styles.contact}`}>
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          Contato
        </motion.p>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.08, ease: easeOut }}
        >
          Vamos <span className="accent">construir.</span>
        </motion.h2>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.16, ease: easeOut }}
        >
          Parcerias, investimentos e novas oportunidades de negócio.
        </motion.p>

        <motion.a
          href={`mailto:${EMAIL}`}
          className={styles.email}
          data-cursor-active
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.24, ease: easeOut }}
        >
          {EMAIL}
        </motion.a>
      </div>
    </section>
  );
}
