import styles from "./NSlider.module.css"

export default function NSlider() {
   return (
      <>
         <Slider />
      </>
   )
}

export const Slider = () => {
   return (
      <>
         <div className={styles.container}>
            <div className={styles.item}>1</div>
            <div className={styles.item}>2</div>
            <div className={styles.item}>3</div>
            <div className={styles.item}>4</div>
            <div className={styles.item}>5</div>
         </div>

         <div className={styles.content}>
            <div className={styles.background}>
               <div className={styles.left}>Left</div>
               <div className={styles.left}>Right</div>
            </div>

            <div className={styles.contentContainer}>content here...</div>
         </div>
      </>
   )
}
