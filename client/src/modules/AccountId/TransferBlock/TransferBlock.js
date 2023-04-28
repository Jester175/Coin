import { MyButton } from "../../../UI/MyButton/MyButton";
import { MyInput } from "../../../UI/MyInput/MyInput";
import { MyTitle } from "../../../UI/MyTitle/MyTitle";
import { IconMail } from "../../../assets/images/account";
import { HistoryBlock } from "../HistoryBlock/HistoryBlock";
import { Tooltip } from "../Tooltip/Tooltip";
import { transferFunds } from "../api/transferFunds";
import { requestStatus } from "../helpers/requestStatus";
import { setLocalStorageAccount } from "../helpers/setLocalStorageAccount";
import "./transferblock.scss";

export const TransferBlock = (id) => {
  const transfer = document.createElement("form");
  const svg = document.createElement("svg");
  svg.innerHTML = IconMail;
  const title = MyTitle("Новый перевод");
  const wrapperFields = document.createElement("div");
  const otherAccountWrapper = document.createElement("div");
  const otherAccountTitle = document.createElement("span");
  const otherAccountInput = MyInput("Номер счёта получателя");
  const sumWrapper = document.createElement("div");
  const sumTitle = document.createElement("span");
  const sumInput = MyInput("Сумма перевода");
  const btnSend = MyButton("Отправить", "button", svg);

  sumTitle.textContent = "Сумма перевода";
  otherAccountTitle.textContent = "Номер счёта получателя";

  title.classList.add("transfer__title");
  sumWrapper.classList.add("transfer__sumWrapper");
  sumTitle.classList.add("transfer__sumTitle");
  sumInput.classList.add("transfer__sumInput");
  otherAccountWrapper.classList.add("transfer__otherAccountWrapper");
  otherAccountTitle.classList.add("transfer__otherAccountTitle");
  otherAccountInput.classList.add("transfer__otherAccountInput");
  wrapperFields.classList.add("transfer__wrapperFields");
  btnSend.classList.add("transfer__btnSend");
  transfer.classList.add("transfer");

  otherAccountInput.onfocus = () => {
    const tooltip = Tooltip(otherAccountInput);
    otherAccountWrapper.append(tooltip);
    tooltip.classList.add("tooltip--active");
  };

  document.body.addEventListener("click", (e) => {
    const input = document.querySelector(".input.transfer__otherAccountInput");
    const tooltip = document.querySelector(".tooltip.tooltip--active");
    const descr = document.querySelector(".tooltip__descr");
    if (e.target !== tooltip && e.target !== input && tooltip && e.target !== descr) {
      tooltip.remove();
    }
  });

  btnSend.addEventListener("click", async (e) => {
    let validateSum = false;
    let validateOtherAccount = false;
    if (sumInput.value === "") {
      sumInput.placeholder = "Введите сумму перевода";
      sumInput.classList.add("validError");
    } else if (sumInput.value < 1) {
      sumInput.value = "";
      sumInput.placeholder = "Сумма отрицательна";
      sumInput.classList.add("validError");
    } else {
      validateSum = true;
      sumInput.classList.remove("validError");
      sumInput.placeholder = "Сумма перевода";
    }
    if (otherAccountInput.value === "") {
      otherAccountInput.classList.add("validError");
      otherAccountInput.placeholder = "Введите номер счёта получателя";
    } else if (otherAccountInput.value === id) {
      otherAccountInput.value = "";
      otherAccountInput.classList.add("validError");
      otherAccountInput.placeholder = "Невозможно отправить на свой счет";
    } else {
      validateOtherAccount = true;
      otherAccountInput.classList.remove("validError");
      otherAccountInput.placeholder = "Номер счёта получателя";
    }
    if (validateSum && validateOtherAccount) {
      const data = await transferFunds(id, otherAccountInput.value, sumInput.value);
      const statusProcessing = requestStatus(data.error);
      if (statusProcessing) {
        const transactions = data?.payload?.transactions;
        const currentHistory = document.querySelector(".history");
        const newHistory = HistoryBlock(transactions, id);
        currentHistory.replaceWith(newHistory);
        setLocalStorageAccount(otherAccountInput.value);
      }
      sumInput.value = "";
      otherAccountInput.value = "";
      validateSum = false;
      validateOtherAccount = false;
    }
  });

  sumWrapper.append(sumTitle, sumInput);
  otherAccountWrapper.append(otherAccountTitle, otherAccountInput);
  wrapperFields.append(otherAccountWrapper, sumWrapper);
  transfer.append(title, wrapperFields, btnSend);

  return transfer;
};
