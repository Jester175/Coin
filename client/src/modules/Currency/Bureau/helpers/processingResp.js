import { MyModal } from "../../../../UI/MyModal/MyModal";
import { CurrencyBlock } from "../../../../components/CurrencyBlock/CurrencyBlock";

export const processingResp = (resp, field) => {
  const modalView = document.querySelector(".block");
  if (resp.error === "") {
    const userCurrencyWrapper = document.querySelector(".currency__mycurrencyWrapper");
    const newBlock = CurrencyBlock("Ваши валюты", resp.payload);
    userCurrencyWrapper.replaceChild(newBlock, userCurrencyWrapper.children[0]);
    const modal = MyModal("Транзакция прошла", "success");
    modalView.append(modal);
    field.value = "";
  } else if (resp.error === "Unknown currency code") {
    const modal = MyModal("Передан неверный валютный код", "error");
    modalView.append(modal);
    field.value = "";
  } else if (resp.error === "Invalid amount") {
    const modal = MyModal("Не указана сумма перевода, или она отрицательная", "error");
    modalView.append(modal);
    field.value = "";
  } else if (resp.error === "Not enough currency") {
    const modal = MyModal("На валютном счёте списания нет средств", "error");
    modalView.append(modal);
    field.value = "";
  } else if (resp.error === "Overdraft prevented") {
    const modal = MyModal("Попытка перевести больше, чем доступно на счёте списания", "error");
    modalView.append(modal);
    field.value = "";
  } else {
    const modal = MyModal("Упс... Попробуйте позже", "error");
    modalView.append(modal);
    field.value = "";
  }
};
