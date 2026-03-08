import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Flex',
    price: '49',
    period: '/month',
    description: 'Pay monthly, cancel anytime. Gym + classes.',
    features: ['24/7 gym access', 'All group classes', 'Free fitness assessment'],
    cta: 'Start Flex',
    highlighted: false,
  },
  {
    name: 'Commit',
    price: '39',
    period: '/month',
    description: '12-month commitment. Our most popular plan.',
    features: ['Everything in Flex', 'Priority class booking', 'Guest passes x2/month', 'PT discount 15%'],
    cta: 'Start Commit',
    highlighted: true,
  },
  {
    name: 'Elite',
    price: '89',
    period: '/month',
    description: 'For those who want the full experience.',
    features: ['Everything in Commit', 'Unlimited guest passes', 'PT discount 25%', 'Locker & towel'],
    cta: 'Start Elite',
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section__eyebrow">Membership</p>
          <h2 className="section__title">Plans that fit your life</h2>
          <p className="section__subtitle">
            No hidden fees. Freeze when you need to. Upgrade or downgrade as your goals change.
          </p>
        </motion.div>

        <motion.div
          className="pricing__grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              className={`pricing-card ${plan.highlighted ? 'pricing-card--highlighted' : ''}`}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
            >
              {plan.highlighted && <span className="pricing-card__badge">Most popular</span>}
              <h3 className="pricing-card__name">{plan.name}</h3>
              <div className="pricing-card__price">
                <span className="pricing-card__currency">£</span>
                <span className="pricing-card__amount">{plan.price}</span>
                <span className="pricing-card__period">{plan.period}</span>
              </div>
              <p className="pricing-card__desc">{plan.description}</p>
              <ul className="pricing-card__features">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${plan.highlighted ? 'btn--primary' : 'btn--outline'} btn--block`}>
                {plan.cta}
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
