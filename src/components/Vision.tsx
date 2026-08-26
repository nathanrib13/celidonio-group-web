import { motion } from "framer-motion";
import badge from "../assets/celidonio-badge.png";
import styles from "./Vision.module.css";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Vision() {
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
          Visão
        </motion.p>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.08, ease: easeOut }}
        >
          Uma das principais plataformas
          <br />
          empresariais do <span className="accent">Brasil.</span>
        </motion.h2>

        <motion.p
          className={styles.body}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.16, ease: easeOut }}
        >
          Buscamos consolidar uma organização diversificada e sólida,
          reconhecida pela excelência na construção de empresas, no
          desenvolvimento de novos negócios e na realização de investimentos
          estratégicos em diferentes setores da economia.
        </motion.p>
      </div>
    </section>
  );
}
