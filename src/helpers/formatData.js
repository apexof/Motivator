export function textTrimmer(fullText, limit = 40) {
  if (!fullText) return "";
  let text = fullText;
  if (typeof text !== "string") text = text.toString();
  if (text.length > limit) {
    return `${text.slice(0, limit - 1)}...`;
  }
  return text;
}

export function moneyFormat(num) {
  if (!num) return num;
  let money = num.toString();
  money = separate(money);
  money = textTrimmer(money, 9);
  return money;
}

export function separate(num) {
  if (!num) return num;
  const text = num.toString();
  return text.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}
