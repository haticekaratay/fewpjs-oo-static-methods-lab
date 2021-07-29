class Formatter {
  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  static titleize(str){
    let words = str.split(" ")
    let skipWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    return words.map((word,i) => {
      //for (const skipWord in skipWords){
        if (!skipWords.includes(word) || i === 0){
          return Formatter.capitalize(word)
        }else{
          return word
        }
      }
    ).join(" ")
  }
}
