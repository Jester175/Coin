import { MyButtonLink } from "../../UI/MyButtonLink/MyButtonLink";
import "./navbar.scss";

export const Navbar = (activeBtn = "") => {
  const navbar = document.createElement("nav");
  const ATMs = MyButtonLink("Банкоматы", "banks-map");
  const accounts = MyButtonLink("Счета", "account");
  const currency = MyButtonLink("Валюта", "available-currency");
  const exit = MyButtonLink("Выйти", "auth");

  exit.addEventListener("click", () => {
    localStorage.removeItem("token");
  });

  switch (activeBtn) {
    case "banks-map":
      ATMs.style.backgroundColor = "#A0C3FF";
      break;
    case "account":
      accounts.style.backgroundColor = "#A0C3FF";
      break;
    case "available-currency":
      currency.style.backgroundColor = "#A0C3FF";
      break;
    default:
      break;
  }

  navbar.classList.add("navbar");

  navbar.append(ATMs, accounts, currency, exit);

  return navbar;
};
