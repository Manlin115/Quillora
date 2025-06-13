import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import '../styles/pricing.css';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Free Plan',
      price: '₹0',
      period: '',
      features: [
        '5 simplifications per day',
        'No login required',
        'Copy & download output',
        'Royal UI experience'
      ],
      buttonText: 'Start Free',
      popular: false
    },
    {
      name: 'Pro Plan',
      price: '₹99',
      period: '/ month',
      features: [
        'Unlimited simplifications',
        'Priority AI response',
        'Optional save history',
        'Future premium tools access'
      ],
      buttonText: 'Upgrade to Pro',
      popular: true
    },
    {
      name: 'Lifetime Plan',
      price: '₹299',
      period: 'one-time',
      features: [
        'Everything in Pro Plan',
        'One-time payment only',
        'Founding member badge',
        'Lifetime access to future features'
      ],
      buttonText: 'Buy Lifetime Access',
      popular: false
    }
  ];

  return (
    <div className="pricing-container">
      {/* Sticky Header */}
      <div className="sticky-header">
        <div className="logo">Quillora</div>
        <button className="back-button">Back to App</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="title-section"
        >
          <h1 className="title">Choose Your Plan</h1>
          <p className="subtitle">
            Unlock the full potential of AI-powered learning with our flexible plans
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="pricing-card"
            >
              {plan.popular && (
                <div className="popular-badge">
                  <SparklesIcon className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div className="text-center">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="price-container">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
              </div>

              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <svg
                      className="feature-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`plan-button ${plan.popular ? 'popular' : 'standard'}`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="testimonial"
        >
          <p>
            "Join 1000+ users simplifying complex knowledge with AI. Quillora makes learning effortless."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;