export function displayOperation(number, pow) {
  const stringsArr = new Array(pow).fill(number);
  const stringToDisplay = stringsArr.join(" * ") + " = ";
  return stringToDisplay;
}
