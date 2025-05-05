"use client";

import React from 'react'
import IntroSection from '../../components/common/Intro-section'
import MissionVisionSection from '../../components/missionVisionsection'
import OverviewSection from '../../components/OverviewSection'
import DiscoveryPhaseSection from '../../components/DiscoveryPhaseSection'
import ContactForm from '../../components/contact-form'



export default function page() {
  return (
    <div>
      <IntroSection
        title="About Us"
        subtitle="Specialists In Web And Digital Marketing Solutions."
        location="Brewed With Love In Kottayam."
        primaryButtonText="Free Consultation"
        primaryButtonUrl="#consultation"
        secondaryButtonText="our services"
        secondaryButtonUrl="#services"
      />
      <MissionVisionSection />
      <OverviewSection />
      <DiscoveryPhaseSection />
      <ContactForm />
      

    </div>
  )
}
