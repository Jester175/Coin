import './myinput.scss'

export const MyInput = (placeholder) => {
  const input = document.createElement("input");
  input.placeholder = placeholder;
  input.classList.add("input");

  return input;
};
