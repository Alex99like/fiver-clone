import { categories } from '@/app/utils/categories'
import styles from './Services.module.scss'
import Image from 'next/image'



export const Services = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>You need it, we`ve got it</h3>
      <ul className={styles.container}>
        {categories.map((item) => (
          <li className={styles.item}>
            <Image src={item.logo} alt='' />
            <span className={styles.name}>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
