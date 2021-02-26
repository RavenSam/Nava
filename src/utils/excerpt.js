export default function excerpt(text, char = 100) {
   if (text.length > char) {
      return text.substr(0, text.lastIndexOf(" ", char)) + "..."
   }

   return text
}
