import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { WhatsAppIcon } from "./WhatsAppIcon";
import styles from "./Contact.module.css";

const easeOut = [0.16, 1, 0.3, 1] as const;
const EMAIL = "contato@celidonio.com.br";
const WHATSAPP_NUMBER = "(21) 99222-9972";
const WHATSAPP_URL = "https://wa.me/5521992229972";

export default function Contact() {
  const { t } = useLanguage();

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
          {t.contact.eyebrow}
        </motion.p>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.08, ease: easeOut }}
        >
          {t.contact.headingLine1} <span className="accent">{t.contact.headingAccent}</span>
        </motion.h2>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.16, ease: easeOut }}
        >
          {t.contact.sub}
        </motion.p>

        <div className={styles.links}>
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

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.email} ${styles.whatsappLink}`}
            data-cursor-active
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.32, ease: easeOut }}
          >
            <WhatsAppIcon className={styles.whatsappIcon} />
            {WHATSAPP_NUMBER}
          </motion.a>
        </div>
      </div>
    </section>
  );
}
