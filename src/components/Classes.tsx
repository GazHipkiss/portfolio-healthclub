import { motion } from 'framer-motion';

const classes = [
  { name: 'HIIT & Conditioning', tag: 'High intensity', duration: '45 min' },
  { name: 'Strength & Power', tag: 'Weights', duration: '60 min' },
  { name: 'Yoga & Mobility', tag: 'Recovery', duration: '60 min' },
  { name: 'Boxing & Combat', tag: 'Cardio', duration: '50 min' },
  { name: 'Spin & Ride', tag: 'Indoor cycling', duration: '45 min' },
  { name: 'Pilates & Core', tag: 'Stability', duration: '45 min' },
];

export function Classes() {
  return (
    <section id="classes" className="section classes">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section__eyebrow">What we offer</p>
          <h2 className="section__title">Classes for every goal</h2>
          <p className="section__subtitle">
            From high-intensity sessions to mindful movement, find the format that fits you.
          </p>
        </motion.div>

        <motion.div
          className="classes__grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {classes.map((c, i) => (
            <motion.article
              key={c.name}
              className="class-card"
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <div className="class-card__number">0{i + 1}</div>
              <div className="class-card__content">
                <span className="class-card__tag">{c.tag}</span>
                <h3 className="class-card__title">{c.name}</h3>
                <span className="class-card__duration">{c.duration}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
