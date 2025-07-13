function getElementWidth(content, padding, border) {
const numContent = content;
const numPadding = padding;
const numBorder = border;
const content = Number.parseFloat(numContent);
const padding = Number.parseFloat(numPadding);
const border = Number.parseFloat(numBorder);
const fullPadding = numPadding * 2;
const fullBorderbox = numBorder * 2;
const sum = numContent + fullPadding + fullBorderbox;
return sum;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
