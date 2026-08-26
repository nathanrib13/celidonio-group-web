import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import badge from "../assets/celidonio-badge.png";
import styles from "./Hero.module.css";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 18 });
  const sy = useSpring(my, { stiffness: 40, damping: 18 });
  const rotateY = useTransform(sx, [-1, 1], [-10, 10]);
  const rotateX = useTransform(sy, [-1, 1], [10, -10]);
  const shiftX = useTransform(sx, [-1, 1], [-16, 16]);
  const shiftY = useTransform(sy, [-1, 1], [-16, 16]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="topo" className={styles.hero}>
      <div className={styles.glow} />
      <motion.img
        src={badge}
        alt=""
        className={styles.mark}
        style={{ x: shiftX, y: shiftY, rotateX, rotateY }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
      />

      <div className={`container ${styles.content}`}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          Grupo empresarial multissetorial
        </motion.p>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: easeOut }}
        >
          Construindo empresas.
          <br />
          <span className={styles.titleAccent}>Criando legado.</span>
        </motion.h1>

        <motion.p
          className={styles.lead}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: easeOut }}
        >
          Investimos capital, estratégia e capacidade de execução em negócios
          preparados para crescer por gerações.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36, ease: easeOut }}
        >
          <button className={styles.primary} onClick={() => scrollTo("segmentos")} data-cursor-active>
            Nossos segmentos
          </button>
          <button className={styles.secondary} onClick={() => scrollTo("contato")} data-cursor-active>
            Fale com o grupo
          </button>
        </motion.div>
      </div>

      <motion.div
        className={styles.tagline}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <span>Connect</span>
        <i />
        <span>Develop</span>
        <i />
        <span>Transform</span>
      </motion.div>
    </section>
  );
}
