'use client';

import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

const easeOut = [0.16, 1, 0.3, 1] as const;

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: '114 Surah Lengkap',
    description:
      'Baca seluruh Al-Quran dengan tampilan yang bersih dan nyaman. Dilengkapi pencarian surah berdasarkan nama, nomor, atau arti.',
    featured: true,
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
    ),
    title: 'Terjemahan Indonesia',
    description:
      'Setiap ayat dilengkapi terjemahan dalam Bahasa Indonesia yang akurat untuk memudahkan pemahaman makna.',
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
    title: 'Transliterasi Latin',
    description:
      'Bagi yang belum lancar membaca huruf Arab, tersedia transliterasi Latin untuk membantu pelafalan yang benar.',
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
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
    title: 'Audio Murottal',
    description:
      'Dengarkan murottal dari Syaikh Misyari Rasyid Al-Afasi. Tap untuk memutar, tap lagi untuk berhenti.',
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
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
    title: 'Bookmark Ayat',
    description:
      'Tandai ayat favorit dan kembali membacanya kapan saja. Semua bookmark tersimpan otomatis di perangkatmu.',
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Terakhir Dibaca',
    description:
      'Lanjutkan membaca dari posisi terakhir. Aplikasi secara otomatis menandai ayat yang terakhir kamu baca.',
  },
];

export default function Features() {
  return (
    <section id="fitur" className="relative py-28 md:py-44">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-16 md:mb-20">
          <SectionLabel text="Fitur Unggulan" />
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            className="font-display text-3xl md:text-[3.25rem] leading-[1.15] mt-6 mb-5"
          >
            Semua yang Kamu Butuhkan
            <br />
            untuk <span className="gradient-text">Ngaji</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Dirancang agar kamu bisa fokus pada bacaan, tanpa gangguan.
            Sederhana, ringan, dan penuh fitur bermanfaat.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {features.map((feature, index) => (
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
              className={`group relative rounded-2xl border border-border bg-card p-8 md:p-10 hover:shadow-xl transition-all duration-300 ${
                feature.featured
                  ? 'lg:col-span-1 md:col-span-2 lg:col-span-1'
                  : ''
              }`}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Featured border */}
              {feature.featured && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent via-accent-secondary to-accent p-[1.5px] -z-10">
                  <div className="h-full w-full rounded-[calc(1rem-1.5px)] bg-card" />
                </div>
              )}

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground tracking-[-0.01em] mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
