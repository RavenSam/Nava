/**
 * - Given an image return an url
 * - Return a default image if there is no image
 * - Works for locals and deployed strapis
 * @param {any} image
 */
export default function imgUrl(path, w = 300) {
   if (!path) {
      return "/vercel.svg" // Default Image
   }

   if (path.indexOf("/") === 0) {
      return `https://image.tmdb.org/t/p/w${w}${path}` // If path don't contain the domain
   }

   return path.url
}
