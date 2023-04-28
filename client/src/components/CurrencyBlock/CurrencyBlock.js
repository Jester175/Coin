import { MyTitle } from "../../UI/MyTitle/MyTitle";
import "./currencyblock.scss";

export const CurrencyBlock = (name, currencyAccounts = []) => {
  const block = document.createElement("div");
  const title = MyTitle(name);
  const rate = document.createElement("div");

  block.classList.add("currencyBlock");
  rate.classList.add("currencyBlock__rate");
  title.classList.add("currencyBlock__title");

  currencyAccounts.map((currencyAccount) => {
    if (currencyAccount[1].amount !== 0) {
      const wrapper = document.createElement("div");
      const nameCurrency = document.createElement("span");
      const customLine = document.createElement("span");
      const account = document.createElement("span");

      nameCurrency.textContent = currencyAccount[1].code;
      account.textContent = currencyAccount[1].amount;

      customLine.classList.add("currencyBlock__customline");
      nameCurrency.classList.add("currencyBlock__nameCurrency");
      account.classList.add("currencyBlock__account");
      wrapper.classList.add("currencyBlock__wrapper");

      wrapper.append(nameCurrency, customLine, account);
      rate.append(wrapper);
    }
  });

  block.append(title, rate);

  return block;
};
