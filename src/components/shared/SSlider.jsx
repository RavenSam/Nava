import { useEffect } from "react"

export default function SSlider({ children, h = 400 }) {
   useEffect(() => {
      const slider = document.querySelector(".slider")
      const innerSlider = document.querySelector(".sliderInner")

      let pressed = false
      let startx
      let x

      slider.addEventListener("mousedown", (e) => {
         pressed = true
         startx = e.offsetX - innerSlider.offsetLeft
         slider.style.cursor = "grabbing"
      })

      // slider.addEventListener("mouseenter", () => (slider.style.cursor = "grab"))

      slider.addEventListener("mouseup", () => {
         slider.style.cursor = "grab"
      })

      window.addEventListener("mouseup", () => {
         pressed = false
      })

      slider.addEventListener(
         "drag",
         (e) => {
            if (!pressed) return
            e.preventDefault()

            x = e.offsetX
            innerSlider.style.left = `${x - startx}px`

            checkBound()
         },
         []
      )

      const checkBound = () => {
         let outer = slider.getBoundingClientRect()
         let inner = innerSlider.getBoundingClientRect()

         if (parseInt(innerSlider.style.left) > 0) {
            innerSlider.style.left = "0px"
         } else if (inner.right < outer.right) {
            innerSlider.style.left = `-${inner.width - outer.width}px`
         }
      }
   })

   const styles = {
      slider: { width: "100%", overflow: "hidden", height: h, position: "relative" },
      sliderInner: {
         width: "fit-content",
         pointerEvents: "none",
         position: "absolute",
         top: "0",
         left: "0",
         display: "flex",
         alignItems: "center",
      },
   }

   return (
      <div style={styles.slider} className="slider">
         <div style={styles.sliderInner} className="sliderInner">
            {children}
         </div>

         <span className="next"></span>
         <span className="prev"></span>
      </div>
   )
}
