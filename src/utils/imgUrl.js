/**
 * - Given an image return an url
 * - Return a default image if there is no image
 * - Works for locals and deployed strapis
 * @param {String} path
 * @param {Number} width
 */
export default function imgUrl(path, width = 300) {
   if (!path) {
      return "/img/film.svg" // Default Image
   }

   if (path.indexOf("/") === 0) {
      if (width === "original") {
         return `https://image.tmdb.org/t/p/${width}${path}`
      }
      return `https://image.tmdb.org/t/p/w${width}${path}` // If path don't contain the domain
   }

   return path.url
}
