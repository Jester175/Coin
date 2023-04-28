import { sortByBalance, sortByNumber, sortByTransactions } from "./helpers/sortBy";
import { MyContainer } from "../../UI/MyContainer/MyContainer";
import { MySelector } from "../../UI/MySelector/MySelector";
import { MyTitle } from "../../UI/MyTitle/MyTitle";
import { MyButton } from "../../UI/MyButton/MyButton";
import { sortSelect } from "../../services/select.config";
import { IconPlus } from "../../assets/images/account/index";
import { AccountCard } from "./AccountCard/AccountCard";
import { getAccountUser } from "./api/getAccountUser";
import { createNewAccount } from "./api/createNewAccount";
import { MyModal } from "../../UI/MyModal/MyModal";
import "./account.scss";

export const Account = async () => {
  const currentAccount = await getAccountUser();
  const main = document.createElement("main");
  const wrapper = document.createElement("div");
  const accounts = document.createElement("div");
  const svgPlus = document.createElement("svg");
  svgPlus.innerHTML = IconPlus;
  const title = MyTitle("Ваши счета");
  const btnAddAccount = MyButton("Создать новый счёт", "button", svgPlus);
  const { selectMenu, arrOptions } = MySelector(sortSelect, "Сортировка");
  const container = MyContainer();

  if (currentAccount.error === "") {
    currentAccount.payload.forEach((account) => {
      const card = AccountCard(account.account, account.balance, account.transactions);
      accounts.append(card);
    });
  } else {
    const modal = MyModal("Упс... Попробуйте позже", "error");
    const modalView = document.querySelector(".block");
    modalView?.append(modal);
  }

  title.classList.add("account__title");
  btnAddAccount.classList.add("account__btn");
  wrapper.classList.add("wrapper");
  accounts.classList.add("accounts");
  main.classList.add("account__main");

  arrOptions.forEach((option) => {
    option.addEventListener("click", async (e) => {
      if (e.target.dataset.sort == "balance") {
        const sortAccounts = await getAccountUser();
        const sortCards = sortByBalance(sortAccounts.payload);
        accounts.innerHTML = "";
        sortCards.forEach((account) => {
          const card = AccountCard(account.account, account.balance, account.transactions);
          accounts.append(card);
        });
      }
      if (e.target.dataset.sort == "number") {
        const sortAccounts = await getAccountUser();
        const sortCards = sortByNumber(sortAccounts.payload);
        accounts.innerHTML = "";
        sortCards.forEach((account) => {
          const card = AccountCard(account.account, account.balance, account.transactions);
          accounts.append(card);
        });
      }
      if (e.target.dataset.sort == "transaction") {
        const sortAccounts = await getAccountUser();
        const sortCards = sortByTransactions(sortAccounts.payload);
        accounts.innerHTML = "";
        sortCards.forEach((account) => {
          const card = AccountCard(account.account, account.balance, account.transactions);
          accounts.append(card);
        });
      }
    });
  });

  btnAddAccount.addEventListener("click", async () => {
    const otherCard = await createNewAccount();
    if (otherCard.status === 200) {
      const card = AccountCard(otherCard.account, otherCard.balance, otherCard.date);
      accounts.append(card);
      const modalView = document.querySelector(".block");
      const modal = MyModal("Счет был создан", "success");
      modalView.append(modal);
    } else {
      const modalView = document.querySelector(".block");
      const modal = MyModal("Упс... Попробуйте позже", "error");
      modalView.append(modal);
    }
  });

  wrapper.append(title, selectMenu, btnAddAccount);
  container.append(wrapper, accounts);
  main.appendChild(container);

  return main;
};
