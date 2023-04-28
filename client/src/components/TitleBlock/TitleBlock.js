import { router } from "../../index";
import { MyTitle } from "../../UI/MyTitle/MyTitle";
import { MyButton } from "../../UI/MyButton/MyButton";
import "./titleblock.scss";

export const TitleBlock = (h1, btnTitle, svg, btnPath) => {
  const block = document.createElement("div");
  const title = MyTitle(h1);
  const btnBack = MyButton(btnTitle, "button", svg);

  btnBack.classList.add("btnBack");
  block.classList.add("titleWrapper");

  btnBack.addEventListener("click", () => {
    router.navigate(btnPath);
  });

  block.append(title, btnBack);

  return block;
};
