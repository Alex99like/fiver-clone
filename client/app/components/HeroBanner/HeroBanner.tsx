'use client'

import styles from './HeroBanner.module.scss'
import ImageProfile1 from '../../assets/bg-hero1.webp'
import ImageProfile2 from '../../assets/bg-hero2.webp'
import ImageProfile3 from '../../assets/bg-hero3.webp'
import ImageProfile4 from '../../assets/bg-hero4.webp'
import ImageProfile5 from '../../assets/bg-hero5.webp'
import ImageProfile6 from '../../assets/bg-hero6.webp'
import Image from 'next/image'
import cn from 'clsx'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const images = [ImageProfile1, ImageProfile2, ImageProfile3, ImageProfile4, ImageProfile5, ImageProfile6]

export const HeroBanner = () => {
  const router = useRouter()
  const [image, setImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setImage(image >= 5 ? 0 : image + 1), 5000)
    return () => clearInterval(interval)
  }, [image])

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <h2 className={styles.title}>Find the perfect <span> Freelance </span> services for your business</h2>
        <label className={styles.input} >
          <input 
            type='text' 
            placeholder='Try "building mobile app"'
          />
          <button>Search</button>
        </label>
        <div className={styles.popular}>
          <h4>Popular: </h4>
          <span>Website Design</span>
          <span>Wordpress</span>
          <span>Logo Design</span>
          <span>All Services</span>
        </div>
      </div>
      <div className={styles.container}>
        {images.map((item) => (
          <Image 
            className={styles.image}
            src={item}
            alt={'bg-profile'}
            style={{ left: `calc(-100% / 6 * ${image})` }}
          />
        ))}
      </div>
      <div className={styles.btns}>
        {images.map((_, idx) => (
          <button
            className={cn({ [styles.active]: idx === image })}
            onClick={() => setImage(idx)}
          ></button>
        ))}
      </div>
    </div>
  )
}
