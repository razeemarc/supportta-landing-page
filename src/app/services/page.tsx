
import HowWeWork from "../../components/services/how-we-work"
import IntroSection from "../../components/common/Intro-section"
import TechServices from "../../components/services/tech-services"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
        <IntroSection
  title="Our Tech Services"
  subtitle="Empowering Businesses with Tailored Digital Solutions"
  location=""
  primaryButtonText="Free Consultation"
  primaryButtonUrl="#consultation"
  secondaryButtonText="Let’s Build Together"
  secondaryButtonUrl="#services"
/><TechServices/>
      <HowWeWork/>
    </main>
  )
}
