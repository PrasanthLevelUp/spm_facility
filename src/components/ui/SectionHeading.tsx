import { motion } from 'framer-motion'

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeading({ eyebrow, title, subtitle, center = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} mb-12`}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-green mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-navy">{title}</h2>
      {subtitle && <p className="mt-4 text-navy-light/80 text-base sm:text-lg">{subtitle}</p>}
      <div className={`mt-4 h-1 w-20 rounded-full bg-brand-green ${center ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}
