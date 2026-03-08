import { useState } from 'react';
import { motion } from 'framer-motion';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__layout">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section__eyebrow">Get in touch</p>
            <h2 className="section__title">Visit or drop us a line</h2>
            <p className="contact__text">
              Come for a free tour and trial. See the gym, pool, and cafe—we’re in the heart of the city, easy to reach by tube and bus.
            </p>
            <address className="contact__address">
              <p><strong>Pulse Health Club</strong></p>
              <p>42 Fitness Lane, London EC1A 1BB</p>
              <p>United Kingdom</p>
              <p className="contact__links">
                <a href="tel:+442071234567">+44 20 7123 4567</a>
                <a href="mailto:hello@pulsehealthclub.co.uk">hello@pulsehealthclub.co.uk</a>
              </p>
            </address>
            <p className="contact__hours">
              <strong>Opening hours</strong><br />
              Mon – Fri: 6am – 10pm<br />
              Sat – Sun: 8am – 8pm
            </p>
          </motion.div>

          <motion.div
            className="contact__form-wrap"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="contact__success">
                <p>Thanks for your message. We’ll be in touch soon.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <label className="contact__label">
                  <span>Name</span>
                  <input type="text" name="name" required placeholder="Your name" className="contact__input" />
                </label>
                <label className="contact__label">
                  <span>Email</span>
                  <input type="email" name="email" required placeholder="you@example.com" className="contact__input" />
                </label>
                <label className="contact__label">
                  <span>Message</span>
                  <textarea name="message" rows={4} placeholder="What would you like to know?" className="contact__input contact__textarea" />
                </label>
                <button type="submit" className="btn btn--primary btn--lg btn--block">
                  Send message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
