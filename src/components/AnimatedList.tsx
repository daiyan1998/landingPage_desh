"use client";
import * as motion from "motion/react-client";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export function AnimateInView({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`${className}`}
    >
      {/* Map over children and wrap them in motion.div */}
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              },
            }}
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
