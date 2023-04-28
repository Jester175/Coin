import { socket } from "../../..";
import {
  RealTimeCurrencyBlock,
  createCurrencyAccount,
} from "../../../components/RealTimeCurrencyBlock/RealTimeCurrencyBlock";

export const WebSocketBlock = () => {
  const current = [
    {
      from: "NZD",
      to: "CHF",
      rate: 62.79,
      change: 1,
    },
    {
      from: "BTC",
      to: "ETH",
      rate: 13.23,
      change: 1,
    },
    {
      from: "RUB",
      to: "USD",
      rate: 52.7,
      change: 1,
    },
    {
      from: "BYR",
      to: "CAD",
      rate: 19.44,
      change: -1,
    },
    {
      from: "AUD",
      to: "EUR",
      rate: 47.25,
      change: -1,
    },
    {
      from: "CAD",
      to: "HKD",
      rate: 74.26,
      change: 1,
    },
    {
      from: "GBP",
      to: "CHF",
      rate: 71,
      change: -1,
    },
    {
      from: "USD",
      to: "BTC",
      rate: 91.42,
      change: 1,
    },
    {
      from: "CNH",
      to: "ETH",
      rate: 17,
      change: -1,
    },
    {
      from: "BKO",
      to: "DOA",
      rate: 92.11,
      change: 1,
    },
    {
      from: "RUB",
      to: "DEN",
      rate: 19.21,
      change: -1,
    },
    {
      from: "DNB",
      to: "EUR",
      rate: 48.21,
      change: 1,
    },
  ];
  let block = RealTimeCurrencyBlock("Изменение курсов в реальном времени", current);

  socket.onmessage = function (e) {
    const blockRate = document.querySelector(".realTimeCurrencyBlock__rate");
    blockRate?.children[0].remove();
    const currentData = JSON.parse(e.data);
    const currencyWrapper = [
      {
        from: currentData.from,
        to: currentData.to,
        rate: currentData.rate,
        change: currentData.change,
      },
    ];

    createCurrencyAccount(currencyWrapper, blockRate);
  };

  return block;
};
