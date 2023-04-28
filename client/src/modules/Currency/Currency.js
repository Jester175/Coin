import { MyContainer } from "../../UI/MyContainer/MyContainer";
import { MyTitle } from "../../UI/MyTitle/MyTitle";
import { getCurrencyUser } from "./api/getCurrencyUser";
import { CurrencyBlock } from "../../components/CurrencyBlock/CurrencyBlock";
import { WebSocketBlock } from "./WebSocketBlock/WebSocketBlock";
import { currencyStore } from "../../store/currencyStore";
import { Bureau } from "./Bureau/Bureau";
import "./currency.scss";

export const Currency = async () => {
  const currencies = await getCurrencyUser();
  currencyStore.data = currencies.data;
  currencyStore.status = currencies.error;
  const main = document.createElement("main");
  const currencyWrapper = document.createElement("div");
  const mycurrencyWrapper = document.createElement("div");
  const mycurrencyAccounts = CurrencyBlock("Ваши валюты", currencies.data);
  const bureau = Bureau();
  const title = MyTitle("Валютный обмен");
  const container = MyContainer();
  const realTimeCurrency = WebSocketBlock();

  container.classList.add("currency-container");
  mycurrencyWrapper.classList.add("currency__mycurrencyWrapper");
  currencyWrapper.classList.add("currency__currencyWrapper");
  title.classList.add("currency__title");

  mycurrencyWrapper.append(mycurrencyAccounts, bureau);
  currencyWrapper.append(mycurrencyWrapper, realTimeCurrency);
  container.append(title, currencyWrapper);
  main.appendChild(container);
  return main;
};
