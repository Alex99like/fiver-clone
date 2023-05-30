import styles from './JoinFiver.module.scss'
import ImageSignUp from '../../assets/bg-signup.webp'
import Image from 'next/image';

export const JoinFiver = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h4 className={styles.text}>
          Suddenly it&apos;s all so <i>doable.</i>
        </h4>
        <button
          className={styles.btn}
          type="button"
        >
          Join Fiverr
        </button>
      </div>
      <div className=" w-full h-96">
        <Image src={ImageSignUp} alt="signup" className="rounded-sm" />
      </div>
    </div>
  );

}
