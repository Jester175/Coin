import "./mybuttonlink.scss";
import { router } from "../..";

export const MyButtonLink = (title, path = "account") => {
  const btn = document.createElement("button");
  btn.classList.add("link", "btn-reset");
  btn.type = "button";
  btn.textContent = title;

  btn.addEventListener("click", () => {
    router.navigate(`/${path}`);
  });
  return btn;
};
