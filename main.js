const root = document.getElementById("root");
const output = document.getElementById("output");
const changeBtn = document.getElementById("change-btn");
const copyBtn = document.getElementById("copy-btn");

changeBtn.addEventListener("click", function () {
  const bgColor = generateHaxColor();
  root.style.backgroundColor = bgColor;
  output.value = bgColor;
});

// copy handle
copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(output.value);
});

const generateHaxColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
};
