import styles from './Everything.module.scss'
import { BsCheck2Circle } from 'react-icons/bs'
import EverythingImage from '../../assets/everything.webp'
import Image from 'next/image'

const items = [
  {
    title: "Stick to your budget",
    subtitle:
      "Find the right service for every price point. No hourly rates, just project-based pricing.",
  },
  {
    title: "Get quality work done quickly",
    subtitle:
      "Hand your project over to a talented freelancer in minutes, get long-lasting results.",
  },
  {
    title: "Pay when you're happy",
    subtitle:
      "Upfront quotes mean no surprises. Payments only get released when you approve.",
  },
  {
    title: "Count on 24/7 support",
    subtitle:
      "Our round-the-clock support team is available to help anytime, anywhere.",
  },
]

export const Everything = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className={styles.title}>The best part? Everything.</h3>
        <ul className={styles.list}>
          {items.map((item) => (
            <li className={styles.item}>
              <div className={styles.name}>
                <BsCheck2Circle className={styles.icon} />
                <span>{item.title}</span>
              </div>
              <p className={styles.subtitle}>{item.subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.image}>
        <Image src={EverythingImage} alt='everything' />
      </div>
    </section>
  )
}
