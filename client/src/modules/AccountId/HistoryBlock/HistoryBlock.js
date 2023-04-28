import { router } from "../../..";
import { MyTitle } from "../../../UI/MyTitle/MyTitle";
import { correctDate } from "../helpers/correctDate";
import "./historyblock.scss";

export const HistoryBlock = (transactions = [], id = null, count) => {
  const history = document.createElement("div");
  const arrTitleHr = ["Счёт отправителя", "Счёт получателя", "Сумма", "Дата"];
  const lastTransactions = transactions.splice(transactions.length - count);
  const table = createTable(arrTitleHr, lastTransactions, id);
  const title = MyTitle("История переводов");

  history.classList.add("history");
  title.classList.add("history__title");

  history.addEventListener("click", () => {
    router.navigate(`account/${id}/transactions-history`);
  });

  history.append(title, table);
  return history;
};

function createTable(arrTitle, transactions, id) {
  const table = document.createElement("table");
  table.classList.add("history__table");
  createTitleTable(arrTitle, table);
  createFieldsTable(transactions, table, id);
  return table;
}

function createTitleTable(arrTitle, table) {
  const tr = document.createElement("tr");
  tr.classList.add("titleTable__tr");
  arrTitle.forEach((title) => {
    const th = document.createElement("th");
    th.textContent = title;
    tr.append(th);
  });
  table.append(tr);
}

function createFieldsTable(transactions, table, id) {
  transactions.forEach((transaction) => {
    const tr = document.createElement("tr");
    tr.classList.add("fieldsTable__tr");
    const tdFrom = document.createElement("td");
    const tdTo = document.createElement("td");
    const tdAmount = document.createElement("td");
    const tdDate = document.createElement("td");
    tdFrom.textContent = transaction.from;
    if (id !== tdFrom.textContent) {
      tdAmount.textContent = "+ " + transaction.amount + " ₽";
      tdAmount.setAttribute("id", "plus");
    } else {
      tdAmount.textContent = "- " + transaction.amount + " ₽";
      tdAmount.setAttribute("id", "minus");
    }
    tdTo.textContent = transaction.to;
    tdDate.textContent = correctDate(transaction.date);

    tr.append(tdFrom, tdTo, tdAmount, tdDate);
    table.append(tr);
  });
}
