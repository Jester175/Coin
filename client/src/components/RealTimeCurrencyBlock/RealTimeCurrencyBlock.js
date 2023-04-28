import { MyTitle } from "../../UI/MyTitle/MyTitle";
import "./realtimecurrencyblock.scss";

export const RealTimeCurrencyBlock = (name, currencyAccounts = []) => {
  const block = document.createElement("div");
  const title = MyTitle(name);
  const rate = document.createElement("div");

  block.classList.add("realTimeCurrencyBlock");
  rate.classList.add("realTimeCurrencyBlock__rate");
  title.classList.add("realTimeCurrencyBlock__title");

  createCurrencyAccount(currencyAccounts, rate);

  block.append(title, rate);

  return block;
};


export function createCurrencyAccount(arrAccounts, container){
  arrAccounts.map((currencyAccount) => {
    const wrapper = document.createElement("div");
    const nameCurrency = document.createElement("span");
    const customLine = document.createElement("span");
    const account = document.createElement("span");
    const arrow = document.createElement("svg");
    const svg = `
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10L10 0L0 10L20 10Z" fill="#000"/>
            </svg>`;
    arrow.innerHTML = svg;

    nameCurrency.textContent = `${currencyAccount.from}/${currencyAccount.to}`;
    account.textContent = currencyAccount.rate;

    customLine.classList.add("realTimeCurrencyBlock__customline");
    nameCurrency.classList.add("realTimeCurrencyBlock__nameCurrency");
    account.classList.add("realTimeCurrencyBlock__account");
    wrapper.classList.add("realTimeCurrencyBlock__wrapper");
    if (currencyAccount.change === 1) {
      arrow.classList.add("increase__arrow");
      customLine.classList.add("increase__line");
    } else {
      arrow.classList.add("decrease__arrow");
      customLine.classList.add("decrease__line");
    }

    wrapper.append(nameCurrency, customLine, account, arrow);
    container?.append(wrapper);
  });
}
