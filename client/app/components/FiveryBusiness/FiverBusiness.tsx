import Image from 'next/image'
import styles from './FiverBusiness.module.scss'
import BusinessImage from '../../assets/fiverrusiness.png'
import { FiverLogo } from '../shared/FiverLogo/FiverLogo'
import { BsCheck2Circle } from 'react-icons/bs'

const data = [
  'Talent matching', 'Dedicated account management', 'Team collaboration tools', 'Business payment solutions'
]

export const FiverBusiness = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <FiverLogo fillColor={'#ffffff'} />
          <span>Business</span>
        </div>
        <h2 className={styles.subtitle}>A solution built for business</h2>
        <p className={styles.description}>
        Upgrade to a curated experience to access vetted talent and exclusive tools
        </p>
        <ul className={styles.list}>
          {data.map((item) => (
            <li className={styles.item}>
              <BsCheck2Circle className={styles.icon} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <button className={styles.btn}>Explore Fiverr Business</button>
      </div>
      <div className={styles.image}>
        <Image src={BusinessImage} alt='' />
      </div>
    </section>
  )
}
