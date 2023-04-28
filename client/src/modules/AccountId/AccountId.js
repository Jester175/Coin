import { MyContainer } from "../../UI/MyContainer/MyContainer";
import { TitleBlock } from "../../components/TitleBlock/TitleBlock";
import { getAccountDetails } from "./api/getAccountDetails";
import { TransferBlock } from "./TransferBlock/TransferBlock";
import { HistoryBlock } from "./HistoryBlock/HistoryBlock";
import { BarChart } from "../../components/BarChart/BarChart";
import { IconArrow } from "../../assets/images/account/index";
import { AccountBlock } from "../../components/AccountBlock/AccountBlock";
import "./accountid.scss";

export const AccountId = async () => {
  const data = await getAccountDetails();
  const { account, balance, transactions } = data?.payload;
  const main = document.createElement("main");
  const container = MyContainer();
  const accountIdWrapper = document.createElement("div");
  const barChart = BarChart(account, balance, transactions, 6);
  const transferBlock = TransferBlock(account);
  const history = HistoryBlock(transactions, account, 10);
  const transferWrapper = document.createElement("div");

  const svgArrow = document.createElement("svg");
  svgArrow.innerHTML = IconArrow;
  const titleBlock = TitleBlock('Просмотр счёта', 'Вернуться назад', svgArrow, '/account');
  const accountBlock = AccountBlock(data);


  transferWrapper.classList.add("accountId__transferWrapper");
  transferWrapper.classList.add("accountId__historyWrapper");
  accountIdWrapper.classList.add("accountId__accountIdWrapper");


  transferWrapper.append(transferBlock, barChart);
  accountIdWrapper.append(titleBlock, accountBlock, transferWrapper, history);
  container.append(accountIdWrapper);
  main.appendChild(container);

  return main;
};
