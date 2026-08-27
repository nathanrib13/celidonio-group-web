import { useEffect, useState } from "react";
import icon from "../assets/celidonio-icon.png";
import { FlagBR, FlagUS } from "./Flags";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Nav.module.css";

export default function Nav() {
  const { lang, t, setLang } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const LINKS = [
    { id: "sobre", label: t.nav.links.sobre },
    { id: "segmentos", label: t.nav.links.segmentos },
    { id: "filosofia", label: t.nav.links.filosofia },
    { id: "visao", label: t.nav.links.visao },
    { id: "contato", label: t.nav.links.contato },
  ];

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLang = () => setLang(lang === "pt" ? "en" : "pt");

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
          className={`${styles.langToggle} ${open ? styles.langToggleOpen : ""}`}
          onClick={toggleLang}
          data-cursor-active
          aria-label={lang === "pt" ? "Switch to English" : "Mudar para português"}
        >
          {lang === "pt" ? <FlagUS className={styles.flag} /> : <FlagBR className={styles.flag} />}
          {lang === "pt" ? "EN" : "PT"}
        </button>

        <button
          className={styles.cta}
          onClick={() => go("contato")}
          data-cursor-active
        >
          {t.nav.cta}
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
