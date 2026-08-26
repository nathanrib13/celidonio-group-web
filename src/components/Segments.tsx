import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styles from "./Segments.module.css";

const SEGMENTS = [
  {
    n: "01",
    title: "Gastronomia & Hospitality",
    text: "Desenvolvimento, operação e expansão de negócios em alimentação, gastronomia, entretenimento e hospitalidade.",
  },
  {
    n: "02",
    title: "Construção & Incorporação",
    text: "Incorporação, gestão de projetos e investimentos em empreendimentos imobiliários.",
  },
  {
    n: "03",
    title: "Mercado Imobiliário",
    text: "Aquisição, administração e valorização de ativos, buscando geração de valor e crescimento patrimonial.",
  },
  {
    n: "04",
    title: "Saúde & Medical",
    text: "Fornecimento de equipamentos, insumos e soluções para hospitais, clínicas, laboratórios e profissionais de saúde.",
  },
  {
    n: "05",
    title: "Serviços Empresariais",
    text: "Soluções voltadas ao aumento da eficiência operacional, produtividade e competitividade das organizações.",
  },
  {
    n: "06",
    title: "Facilities",
    text: "Gestão integrada de serviços especializados para operações corporativas, comerciais e institucionais.",
  },
  {
    n: "07",
    title: "Novos Negócios",
    text: "Venture building, estruturação de empreendimentos e criação de novas oportunidades de mercado.",
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Segments() {
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
          <p className="eyebrow">Segmentos</p>
          <h2 className={styles.heading}>Onde atuamos.</h2>
        </motion.div>

        <ul className={styles.list}>
          {SEGMENTS.map((seg, i) => {
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
