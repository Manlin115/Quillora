import { motion } from 'framer-motion';
import { DocumentTextIcon, BoltIcon, ArrowDownTrayIcon, SparklesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: DocumentTextIcon,
    title: 'Paste any complex text',
    description: 'From academic papers to legal documents, we handle it all.'
  },
  {
    icon: BoltIcon,
    title: 'AI-powered instant simplification',
    description: 'Get clear explanations in seconds using advanced AI.'
  },
  {
    icon: ArrowDownTrayIcon,
    title: 'Copy or download explanation',
    description: 'Save and share your simplified content easily.'
  },
  {
    icon: DocumentTextIcon,
    title: 'Multiple languages support',
    description: 'Understand content in various languages with accurate translations.'
  },
  {
    icon: BoltIcon,
    title: 'Smart summarization',
    description: 'Get concise summaries that capture the key points of any text.'
  }
];

const additionalFeatures = [
  {
    icon: SparklesIcon,
    title: '5 free explanations/day',
    description: 'Try it out with our generous free tier.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure login options',
    description: 'Sign in with Google or email for unlimited access.'
  }
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-background" />
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="hero-text"
          >
            <h1 className="hero-title">
              Simplify
              <span className="gradient-text"> Complexity</span>
              <br />
              with AI Magic
            </h1>
            <p className="hero-description">
              Transform complex text into clear, easy-to-understand explanations using
              our advanced AI technology. Perfect for students, professionals, and anyone
              seeking clarity.
            </p>
            <div className="hero-buttons">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try It Free
              </motion.button>
              <motion.button
                className="btn btn-royal"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="hero-features"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="gradient-text features-title mt-8"
            >
              Powerful Features
            </motion.h2>
            <div className="marquee-container">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: ["-50%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                  repeatDelay: 0
                }}
                className="marquee-content"
              >
                {[...features, ...features].map((feature, index) => (
                  <motion.div
                    key={`${feature.title}-${index}`}
                    className="feature-card glass-card"
                  >
                    <feature.icon className="feature-icon" />
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default Home;