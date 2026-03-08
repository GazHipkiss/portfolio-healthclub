import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: 'Pulse completely changed my relationship with fitness. Pool in the morning, cafe after—the coaches care and the community makes showing up easy.',
    name: 'Sarah M.',
    role: 'Member since 2022',
    avatar: 'SM',
  },
  {
    quote: 'Best health club I’ve been to in the UK. Pool, gym, cafe—everything’s spotless and the classes are well run. Serious but welcoming.',
    name: 'James K.',
    role: 'Strength & conditioning',
    avatar: 'JK',
  },
  {
    quote: 'I was nervous about joining again. The team made me feel at home from day one. Now I’m in five times a week—pool, classes, even the cafe.',
    name: 'Emma L.',
    role: 'Member since 2023',
    avatar: 'EL',
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section__eyebrow">Stories</p>
          <h2 className="section__title">What members say</h2>
        </motion.div>

        <div className="testimonials__slider">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              className="testimonial"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              <p className="testimonial__quote">"{current.quote}"</p>
              <footer className="testimonial__footer">
                <div className="testimonial__avatar">{current.avatar}</div>
                <div>
                  <cite className="testimonial__name">{current.name}</cite>
                  <span className="testimonial__role">{current.role}</span>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="testimonials__nav">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`testimonials__dot ${i === index ? 'active' : ''}`}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
