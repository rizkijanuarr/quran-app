'use client';

import { motion, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const easeOut = [0.16, 1, 0.3, 1] as const;

const stats = [
  {
    value: 114,
    suffix: '',
    label: 'Surah Lengkap',
    icon: '📖',
  },
  {
    value: 6236,
    suffix: '',
    label: 'Ayat dengan Terjemahan',
    icon: '📝',
  },
  {
    value: 30,
    suffix: '',
    label: 'Juz Terstruktur',
    icon: '📑',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Gratis Selamanya',
    icon: '💚',
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(latest) {
        node.textContent =
          (suffix === '%'
            ? Math.round(latest).toString()
            : Math.round(latest).toLocaleString('id-ID')) + suffix;
      },
    });

    return () => controls.stop();
  }, [value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  return (
    <section
      id="tentang"
      className="relative py-28 md:py-36 bg-foreground text-white overflow-hidden"
    >
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern pointer-events-none" />

      {/* Accent glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/[0.06] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-app-green/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-2 mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-app-green animate-pulse-dot" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/70">
              Teman Ngaji dalam Angka
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="font-display text-3xl md:text-[3.25rem] leading-[1.15]"
          >
            Al-Quran Lengkap,{' '}
            <span className="gradient-text-green">Satu Aplikasi</span>
          </motion.h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: easeOut },
                },
              }}
              className="relative text-center group"
            >
              {/* Vertical divider (desktop only, not first) */}
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-white/10" />
              )}

              <div className="text-3xl mb-4">{stat.icon}</div>
              <div className="font-display text-4xl md:text-5xl mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
