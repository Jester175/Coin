import { MyTitle } from "../../../UI/MyTitle/MyTitle";
import { MySelector } from "../../../UI/MySelector/MySelector";
import { MyInput } from "../../../UI/MyInput/MyInput";
import { MyButton } from "../../../UI/MyButton/MyButton";
import { currencyStore } from "../../../store/currencyStore";
import { swapCurrency } from "../api/swapCurrency";
import { processingResp } from "./helpers/processingResp";
import "./bureau.scss";

export const Bureau = () => {
  const currencies = [];
  currencyStore.data.forEach((currency) => {
    currencies.push({
      title: currency[0],
      value: currency[0],
    });
  });
  const block = document.createElement("div");
  const wrapper = document.createElement("div");
  const wrapperDetails = document.createElement("div");
  const wrapperInputs = document.createElement("div");
  const wrapperSum = document.createElement("div");
  const from = document.createElement("p");
  const to = document.createElement("p");
  const sum = document.createElement("span");
  const title = MyTitle("Обмен валюты");
  const selectFrom = MySelector(currencies, "BTC", "swapFrom").selectMenu;
  const selectTo = MySelector(currencies, "ETH", "swapTo").selectMenu;
  const input = MyInput("Введите сумму");
  const swap = MyButton("Обменять");

  from.textContent = "Из";
  to.textContent = "в";
  sum.textContent = "Сумма";

  block.classList.add("bureau");
  wrapper.classList.add("bureau__wrapper");
  wrapperDetails.classList.add("bureau__wrapperDetails");
  wrapperInputs.classList.add("bureau__wrapperInputs");
  wrapperSum.classList.add("bureau__wrapperSum");
  to.classList.add("bureau__to");
  from.classList.add("bureau__from");
  title.classList.add("bureau__title");
  swap.classList.add("bureau__swap");
  sum.classList.add("bureau__sum");
  input.classList.add("bureau__input");
  selectFrom.setAttribute("id", "bureau__selectFrom");
  selectTo.setAttribute("id", "bureau__selectTo");

  swap.addEventListener("click", async (e) => {
    const from = document.querySelector(".swapFrom").textContent.trim();
    const to = document.querySelector(".swapTo").textContent.trim();
    const sum = input.value.trim();
    if (input.value === "") {
      input.placeholder = "Вы не ввели сумму";
      input.classList.add('error');
    } else {
      input.placeholder = "Введите сумму";
      input.classList.remove('error');
      const newCurrencyUser = await swapCurrency(from, to, sum);
      processingResp(newCurrencyUser, input);
    }
  });

  wrapperSum.append(sum, input);
  wrapperInputs.append(from, selectFrom, to, selectTo);
  wrapperDetails.append(wrapperInputs, wrapperSum);
  wrapper.append(wrapperDetails, swap);
  block.append(title, wrapper);

  return block;
};
