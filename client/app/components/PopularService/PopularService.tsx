import styles from './PopularService.module.scss'
import ImageService1 from '../../assets/service1.png'
import ImageService2 from '../../assets/service2.jpeg'
import ImageService3 from '../../assets/service3.jpeg'
import ImageService4 from '../../assets/service4.jpeg'
import ImageService5 from '../../assets/service5.jpeg'
import ImageService6 from '../../assets/service6.jpeg'
import ImageService7 from '../../assets/service7.jpeg'
import ImageService8 from '../../assets/service8.jpeg'
import Image from 'next/image'

const items = [
  {
    name: 'Ai Artists',
    label: 'Add talent to AI',
    image: ImageService1
  },
  {
    name: 'Logo Design',
    label: 'Build your brand',
    image: ImageService2
  },
  {
    name: 'Wordpress',
    label: 'Customize your site',
    image: ImageService3
  },
  {
    name: 'Voice Over',
    label: 'Share your message',
    image: ImageService4
  },
  {
    name: 'Social Media',
    label: 'Reach more customers',
    image: ImageService5
  },
  {
    name: 'SEO',
    label: 'Unlock growth online',
    image: ImageService6
  },
  {
    name: 'Illustration',
    label: 'Color your dreams',
    image: ImageService7
  },
  {
    name: 'Translation',
    label: 'Go Global',
    image: ImageService8
  },
]

export const PopularService = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Popular Services</h2>
      <ul className={styles.container}>
        {items.map((item) => (
          <li className={styles.item}>
            <Image 
              src={item.image}
              alt=''
            />
            <span className={styles.name}>{item.name}</span>
            <span className={styles.label}>{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
