import "./errorfield.scss";

export const ErrorField = (title) => {
  const errorfield = document.createElement("span");
  errorfield.textContent = title;
  errorfield.classList.add("errorField");

  return errorfield;
};
