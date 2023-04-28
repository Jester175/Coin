import axios from "axios";
import { baseUrl } from "../../../services/url.config";
import { Spinner } from "../../../components/Spinner/Spinner";

export const swapCurrency = async (fromValue, toValue, amountValue) => {
  const spinner = Spinner();
  document.body.append(spinner);
  try {
    const resp = await axios(`${baseUrl}/currency-buy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${localStorage.getItem("token")}`,
      },
      data: JSON.stringify({
        from: fromValue,
        to: toValue,
        amount: amountValue.trim(),
      }),
    });
    const data = await resp.data;
    if (data.payload) {
      data.payload = Object.entries(data.payload);
    }
    return data;
  } finally {
    document.querySelector(".wrapper-ring").remove();
  }
};
