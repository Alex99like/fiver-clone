import styles from './Companies.module.scss'
import cn from 'clsx'
import { BsMeta } from 'react-icons/bs'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { SiNetflix, SiPaypal } from 'react-icons/si'

const data = {
  meta: { Icon: BsMeta, name: 'Meta' },
  google: { Icon: AiFillGoogleCircle, name: 'Google' },
  netflix: { Icon: SiNetflix, name: 'NETFLIX' },
  paypal: { Icon: SiPaypal, name: 'PayPal' }
}

export const Companies = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Trusted by:</h3>
      {Object.values(data).map((item) => (
        <div className={cn(styles.container, styles[item.name.toLowerCase()])}>
          <item.Icon className={styles.icon} />
          <span className={styles.icon}>{item.name}</span>
        </div>
      ))}
    </div>
  )
}
