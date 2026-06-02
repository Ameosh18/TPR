import HeroSection from './sections/HeroSection'
import WhoItsFor from './sections/WhoItsFor'
import TPRDifference from './sections/TPRDifference'
import MeetDrOshin from './sections/MeetDrOshin'
import ConditionsTeaser from './sections/ConditionsTeaser'
import Testimonials from './sections/Testimonials'
import BookCTA from './sections/BookCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoItsFor />
      <TPRDifference />
      <MeetDrOshin />
      <ConditionsTeaser />
      <Testimonials />
      <BookCTA />
    </>
  )
}
