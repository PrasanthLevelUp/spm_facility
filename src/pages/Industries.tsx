import { industries } from '../constants/siteConfig'
import IndustryCard from '../components/ui/IndustryCard'
import SectionHeading from '../components/ui/SectionHeading'

export default function Industries() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Who We Serve"
        title="Industries We Serve"
        subtitle="Trusted by a wide range of residential, commercial and institutional clients."
      />
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {industries.map((i) => (
          <IndustryCard key={i.name} industry={i} />
        ))}
      </div>
    </div>
  )
}
