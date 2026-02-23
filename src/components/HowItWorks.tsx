'use client';

import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

const easeOut = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    number: '01',
    title: 'Download & Install',
    description:
      'Download APK gratis dari link di bawah, lalu install di perangkat Android kamu.',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Pilih Surah atau Juz',
    description:
      'Jelajahi 114 surah atau 30 juz. Gunakan pencarian untuk menemukan surah yang kamu cari.',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Baca & Dengarkan',
    description:
      'Baca ayat dengan terjemahan dan transliterasi. Tap ikon speaker untuk mendengarkan murottal.',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Bookmark & Lanjutkan',
    description:
      'Tandai ayat favorit dengan bookmark. Aplikasi otomatis mengingat posisi terakhir kamu membaca.',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="relative py-28 md:py-44 bg-muted/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16 md:mb-20">
          <SectionLabel text="Cara Kerja" />
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="font-display text-3xl md:text-[3.25rem] leading-[1.15] mt-6 mb-5"
          >
            Mulai Ngaji <span className="gradient-text">dalam 4 Langkah</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Tanpa registrasi, tanpa iklan yang mengganggu. Langsung baca.
          </motion.p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15, delayChildren: 0.1 },
              },
            }}
            className="relative"
          >
            {/* Connecting line */}
            <div className="absolute top-[3.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20" />

            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => (
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
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step circle */}
                  <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center text-white shadow-[0_4px_14px_rgba(0,82,255,0.25)] mb-6">
                    <span className="text-lg font-bold">{step.number}</span>
                  </div>

                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-[2.1rem] left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] flex items-center justify-center z-0">
                      <svg
                        className="w-5 h-5 text-accent/40"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}

                  <div className="bg-card rounded-2xl border border-border p-6 w-full hover:shadow-lg transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 mx-auto">
                      {step.icon}
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: easeOut, delay: index * 0.1 }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center text-white text-sm font-bold shadow-sm shrink-0">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-[2px] flex-1 bg-accent/20 mt-2" />
                )}
              </div>
              <div className="bg-card rounded-xl border border-border p-5 flex-1 pb-6">
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
