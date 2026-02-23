'use client';

import { motion } from 'framer-motion';

interface SectionLabelProps {
  text: string;
  pulse?: boolean;
}

export default function SectionLabel({
  text,
  pulse = true,
}: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/5 px-5 py-2"
    >
      <span
        className={`h-2 w-2 rounded-full bg-accent ${
          pulse ? 'animate-pulse-dot' : ''
        }`}
      />
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
        {text}
      </span>
    </motion.div>
  );
}
