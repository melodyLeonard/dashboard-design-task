export const letterCase = (text: string) =>
  text
    .toLowerCase()
    .split(' ')
    .map(function wordFirstCap(word: string) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

export const removeSpaces = (num:number | string) => num.toString().replace(/\s/g, "");

export const toLocaleString = (num:number | string) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");