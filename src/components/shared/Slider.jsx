import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

/**
 *
 * @param {JSX} children JSX
 * @param {Object} sliderProps Object
 *
 *  - Check react-alice-carousel documentaion
 *  - https://www.npmjs.com/package/react-alice-carousel
 */
export default function Slider({ children, sliderProps }) {
   return <AliceCarousel {...sliderProps}>{children}</AliceCarousel>
}
