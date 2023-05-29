import Image from 'next/image'
import styles from './page.module.scss'
import { HeroBanner } from '../components/HeroBanner/HeroBanner'
import { Companies } from '../components/Companies/Companies'
import { PopularService } from '../components/PopularService/PopularService'
import { Everything } from '../components/Everything/Everything'
import { Services } from '../components/Services/Services'
import { FiverBusiness } from '../components/FiveryBusiness/FiverBusiness'
import { JoinFiver } from '../components/JoinFiver/JoinFiver'

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <HeroBanner />
      <Companies />
      <PopularService />
      <Everything />
      <Services />
      <FiverBusiness />
      <JoinFiver />
    </main>
  )
}
