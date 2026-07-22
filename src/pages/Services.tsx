import { services } from '../constants/siteConfig'
import ServiceCard from '../components/ui/ServiceCard'
import SectionHeading from '../components/ui/SectionHeading'

export default function Services() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="Comprehensive facility and maintenance solutions tailored to your needs."
      />
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {services.map((s) => (
          <ServiceCard key={s.name} service={s} />
        ))}
      </div>
    </div>
  )
}
