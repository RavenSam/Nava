export default function excerpt(text, char = 90) {
   if (text.length > char) {
      return text.substr(0, text.lastIndexOf(" ", char)) + "..."
   }

   return text
}
