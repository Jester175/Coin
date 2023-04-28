import { MyButton } from "../../../UI/MyButton/MyButton";
import { correctDate } from "../helpers/correctDate";
import { router } from "../../..";
import { accountIdStore } from "../../../store/accountIdStore";
import "./accountcard.scss";

export const AccountCard = (account, balance, transaction) => {
  const card = document.createElement("div");
  const btnOpen = MyButton("Открыть");
  const accountCard = document.createElement("span");
  const amountCard = document.createElement("span");
  const wrapperTransaction = document.createElement("div");
  const wrapperDate = document.createElement("div");
  const descr = document.createElement("span");
  const date = document.createElement("span");

  accountCard.textContent = account;
  amountCard.textContent = `${balance} ₽`;
  descr.textContent = "Последняя транзакция:";
  if (transaction.length) date.textContent = correctDate(transaction[transaction.length - 1].date);
  else date.textContent = "Неизвестно";

  card.classList.add("card");
  btnOpen.classList.add("card__btn")
  accountCard.classList.add("accountCard");
  amountCard.classList.add("amountCard");
  wrapperTransaction.classList.add("wrapperTransaction");
  wrapperDate.classList.add("wrapperDate");
  descr.classList.add("descr");
  date.classList.add("date");

  btnOpen.addEventListener("click", () => {
    document.body.innerHTML = "";
    accountIdStore.id = account;
    router.navigate(`/account/${account}`);
  });

  wrapperDate.append(descr, date);
  wrapperTransaction.append(wrapperDate, btnOpen);
  card.append(accountCard, amountCard, wrapperTransaction);

  return card;
};
