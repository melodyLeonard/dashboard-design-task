export const letterCase = (text: string) =>
  text
    .toLowerCase()
    .split(' ')
    .map(function wordFirstCap(word: string) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');