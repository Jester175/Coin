import Chart from "chart.js/auto";
import { MyTitle } from "../../UI/MyTitle/MyTitle";
import { balanceHistory } from "./helpers/balanceHistory";
import { balanceHistoryDifference } from "./helpers/balanceHistoryDifference";
import { router } from "../../";
import "./barchart.scss";

export const BarChart = (id = "", balance = "Неизвестно", transactions = [], current) => {
  const barChart = document.createElement("div");
  const title = MyTitle("Динамика баланса");
  const arrBalanceHistory = balanceHistory(transactions, current, id);
  const labels = arrBalanceHistory.map((month) => month.month.slice(0, 3));
  const amounts = arrBalanceHistory.map((month) => month.amount);

  const canvas = document.createElement("canvas");

  canvas.setAttribute("id", "barChart__chart");
  title.classList.add("barChart__title");
  barChart.classList.add("barChart");

  Chart.defaults.font.size = 15;
  Chart.defaults.color = "#000";
  Chart.defaults.font.weight = 700;
  new Chart(canvas, {
    type: "bar",
    data: {
      labels: labels.reverse(),
      datasets: [
        {
          data: amounts.reverse(),
          backgroundColor: ["#116ACC"],
          borderColor: ["#0f4886"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      plugins: {
        legend: false,
      },
      scales: {
        y: {
          max: Math.max(...amounts),
          min: Math.min(...amounts),
        },
      },
    },
  });

  barChart.addEventListener("click", () => {
    router.navigate(`account/${id}/transactions-history`);
  });

  barChart.append(title, canvas);

  return barChart;
};
export const BarChartDifference = (id = "", balance = "Неизвестно", transactions = [], current) => {
  const barChart = document.createElement("div");
  const title = MyTitle("Соотношение входящих исходящих транзакций");
  const {datePlus, dateMinus} = balanceHistoryDifference(transactions, current, id);
  const labels = datePlus.map((month) => month.month.slice(0, 3));
  const amountsPlus = datePlus.map((month) => month.amount);
  const amountsMinus = dateMinus.map((month) => month.amount * -1);

  const canvas = document.createElement("canvas");

  canvas.setAttribute("id", "barChart__chart");
  title.classList.add("barChart__title");
  barChart.classList.add("barChart");

  Chart.defaults.font.size = 15;
  Chart.defaults.color = "#000";
  Chart.defaults.font.weight = 700;
  new Chart(canvas, {
    type: "bar",
    data: {
      labels: labels.reverse(),
      datasets: [
        {
          label: 'Динамика входящих транзакций',
          data: amountsPlus.reverse(),
          backgroundColor: ["#76CA66"],
          borderColor: ["#000"],
          borderWidth: 2,
        },
        {
          label: 'Динамика исходящих транзакций',
          data: amountsMinus.reverse(),
          backgroundColor: ["#FD4E5D"],
          borderColor: ["#000"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      plugins: {
        legend: false,
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
          max: Math.max(...amountsPlus),
          min: Math.min(...amountsMinus),
        },
      },
    },
  });

  barChart.addEventListener("click", () => {
    router.navigate(`account/${id}/transactions-history`);
  });

  barChart.append(title, canvas);

  return barChart;
};
