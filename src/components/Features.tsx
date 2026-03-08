import { motion } from 'framer-motion';

const features = [
  {
    icon: '◆',
    title: 'Swimming pool',
    description: '25m pool for lanes, lessons, and aqua classes. Perfect for low-impact training and recovery.',
  },
  {
    icon: '◇',
    title: 'Gym & equipment',
    description: 'Premium kit from leading brands. Free weights, cardio, and functional zones, kept in top condition.',
  },
  {
    icon: '○',
    title: 'Cafe & lounge',
    description: 'Refuel with healthy meals, smoothies, and coffee. Work, relax, or meet friends after your session.',
  },
  {
    icon: '▸',
    title: 'Expert coaching',
    description: 'Qualified trainers and class instructors who know how to get the best from you.',
  },
  {
    icon: '◇',
    title: 'Inclusive community',
    description: 'From beginners to athletes, everyone belongs. Train alongside people who get it.',
  },
  {
    icon: '◆',
    title: 'Flexible membership',
    description: 'No lock-ins. Freeze when you need to. Full club access that fits your life.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section id="features" className="section features">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section__eyebrow">Why Pulse</p>
          <h2 className="section__title">Built for results</h2>
          <p className="section__subtitle">
            From the pool to the cafe, we’ve designed every part of the club around what helps you train, recover, and feel your best.
          </p>
        </motion.div>

        <motion.div
          className="features__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {features.map((f) => (
            <motion.article key={f.title} className="feature-card" variants={item}>
              <span className="feature-card__icon" aria-hidden="true">{f.icon}</span>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
