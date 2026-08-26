import { useEffect, useState } from "react";
import icon from "../assets/celidonio-icon.png";
import styles from "./Nav.module.css";

const LINKS = [
  { id: "sobre", label: "Sobre" },
  { id: "segmentos", label: "Segmentos" },
  { id: "filosofia", label: "Filosofia" },
  { id: "visao", label: "Visão" },
  { id: "contato", label: "Contato" },
];

export default function Nav() {
  const [progress, setProgress] = useState(0);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? scrolled / max : 0);
      setSolid(scrolled > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`${styles.nav} ${solid ? styles.solid : ""}`}>
      <div className={styles.bar}>
        <a
          href="#topo"
          className={`${styles.brand} ${open ? styles.brandOpen : ""}`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className={styles.brandMarkWrap}>
            <img src={icon} alt="" className={styles.brandMark} />
          </span>
          <span>Celidonio Group</span>
        </a>

        <nav className={styles.links}>
          {LINKS.map((link) => (
            <button
              key={link.id}
              className={`${styles.link} ${active === link.id ? styles.linkActive : ""}`}
              onClick={() => go(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className={styles.cta}
          onClick={() => go("contato")}
          data-cursor-active
        >
          Fale com o grupo
        </button>

        <button
          className={styles.burger}
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? styles.burgerOpen : ""} />
        </button>
      </div>

      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`}>
        {LINKS.map((link) => (
          <button key={link.id} onClick={() => go(link.id)}>
            {link.label}
          </button>
        ))}
      </div>

      <div className={styles.progress} style={{ transform: `scaleX(${progress})` }} />
    </header>
  );
}
