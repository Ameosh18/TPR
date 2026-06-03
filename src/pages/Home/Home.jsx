import HeroSection from './sections/HeroSection'
import StatsStrip from './sections/StatsStrip'
import TPRDifference from './sections/TPRDifference'
import MeetDrOshin from './sections/MeetDrOshin'
import ConditionsTeaser from './sections/ConditionsTeaser'
import Testimonials from './sections/Testimonials'
import FAQSection from './sections/FAQSection'
import BookCTA from './sections/BookCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <TPRDifference />
      <MeetDrOshin />
      <ConditionsTeaser />
      <Testimonials />
      <FAQSection />
      <BookCTA />
    </>
  )
}
