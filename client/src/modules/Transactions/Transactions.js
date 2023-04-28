import { router } from "../..";
import { MyContainer } from "../../UI/MyContainer/MyContainer";
import { TitleBlock } from "../../components/TitleBlock/TitleBlock";
import { AccountBlock } from "../../components/AccountBlock/AccountBlock";
import { HistoryBlock } from "../AccountId/HistoryBlock/HistoryBlock";
import { BarChart, BarChartDifference } from "../../components/BarChart/BarChart";
import { getTransactionsDetails } from "./api/getTransactionsDetails";
import { IconArrow } from "../../assets/images/account/index";
import "./transactions.scss";

export const Transactions = async () => {
  const data = await getTransactionsDetails();
  const { account, balance, transactions } = data?.payload;
  const barChart = BarChart(account, balance, transactions, 12);
  const barChartDifference = BarChartDifference(account, balance, transactions, 12);
  const main = document.createElement("main");
  const container = MyContainer();
  const transactionsWrapper = document.createElement("div");
  const svgArrow = document.createElement("svg");
  svgArrow.innerHTML = IconArrow;
  const titleBlock = TitleBlock("История баланса", "Вернуться назад", svgArrow, `/account/${account}`);
  const accountBlock = AccountBlock(data);
  const history = HistoryBlock(transactions, account, 10);

  transactionsWrapper.classList.add("transactions__transactionsWrapper");
  history.classList.add("transactions__history");
  barChart.classList.add("transactions__barChart");
  barChartDifference.classList.add("transactions__barChartDifference");

  transactionsWrapper.append(titleBlock, accountBlock, barChart, barChartDifference, history);
  container.append(transactionsWrapper);
  main.appendChild(container);

  return main;
};
