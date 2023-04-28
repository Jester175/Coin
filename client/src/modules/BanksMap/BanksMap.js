import { MyContainer } from "../../UI/MyContainer/MyContainer";
import { MyTitle } from "../../UI/MyTitle/MyTitle";
import { YandexMap } from "./Map/YandexMap";

import "./banksmap.scss";

export const BanksMap = async () => {
  const main = document.createElement("main");
  const title = MyTitle("Карта банкоматов");
  const map = await YandexMap();
  const container = MyContainer();

  title.classList.add("banks-map__title");
  container.setAttribute('id', 'banksMap-container')
  main.classList.add("banksMap");

  container.append(title, map);
  main.appendChild(container);

  return main;
};
