export default function timeConvert(num) {
   const hours = Math.floor(num / 60)
   const minutes = num % 60
   return `${hours}h ${minutes}min`
}
