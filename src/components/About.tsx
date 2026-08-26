import { motion } from "framer-motion";
import styles from "./About.module.css";

const PILLARS = [
  {
    n: "01",
    title: "Connect",
    text: "Conectamos capital, pessoas e oportunidades a negócios com potencial real.",
  },
  {
    n: "02",
    title: "Develop",
    text: "Desenvolvemos operações, marcas e produtos, do zero até a maturidade.",
  },
  {
    n: "03",
    title: "Transform",
    text: "Transformamos ideias em empresas prontas para crescer e permanecer.",
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function About() {
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
            <p className="eyebrow">Quem somos</p>
            <h2 className={styles.heading}>
              Mais do que investir. <span className="accent">Construir.</span>
            </h2>
          </motion.div>

          <motion.p
            className={styles.body}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
          >
            Somos um grupo empresarial brasileiro com atuação multissetorial.
            Desenvolvemos operações próprias, participações societárias e
            novos empreendimentos, sempre com visão de longo prazo. Quando
            encontramos oportunidades alinhadas aos nossos princípios,
            investimos capital, conhecimento e execução, e integramos o
            quadro societário dos negócios que ajudamos a construir.
          </motion.p>
        </div>

        <div className={styles.pillars}>
          {PILLARS.map((p, i) => (
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
      </div>
    </section>
  );
}
