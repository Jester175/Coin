import "./mybutton.scss";

export const MyButton = (title, type = 'button', svg = "") => {
  const btn = document.createElement("button");
  btn.classList.add("btn", "btn-reset");
  btn.type = type;
  btn.textContent = title;

  btn.append(svg);

  return btn;
};
