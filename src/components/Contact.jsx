import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" style={{
      padding: '4rem var(--spacing-x) 10rem var(--spacing-x)',
      backgroundColor: 'var(--bg-color)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: 500,
            margin: 0,
            letterSpacing: '-1px',
            color: 'var(--text-primary)'
          }}
        >
          Let's Work Together
        </motion.h2>

        <motion.a
          href="mailto:hello@himanshushekhar.com"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '1.2rem 2.5rem',
            backgroundColor: '#000',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 500,
            borderRadius: '4px',
            transition: 'background-color 0.3s ease'
          }}
        >
          Write an Email
        </motion.a>
      </div>
    </section>
  );
}
