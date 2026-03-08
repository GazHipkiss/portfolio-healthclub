import { motion } from 'framer-motion';

const footerLinks = [
  { href: '#features', label: 'Why Pulse' },
  { href: '#classes', label: 'Classes' },
  { href: '#pricing', label: 'Membership' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer__top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="footer__logo">
            <span className="footer__logo-icon">◆</span>
            Pulse
          </a>
          <nav className="footer__nav" aria-label="Footer">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
          <div className="footer__social">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Twitter">Twitter</a>
          </div>
        </motion.div>
        <div className="footer__bottom">
          <p>© {year} Pulse Health Club. Portfolio project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
