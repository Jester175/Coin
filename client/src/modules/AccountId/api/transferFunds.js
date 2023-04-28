import axios from "axios";
import { baseUrl } from "../../../services/url.config";
import { Spinner } from "../../../components/Spinner/Spinner";

export const transferFunds = async (fromValue, toValue, amountValue) => {
  const spinner = Spinner();
  document.body.append(spinner);
  try {
    const resp = await axios(`${baseUrl}/transfer-funds`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${localStorage.getItem("token")}`,
      },
      data: JSON.stringify({
        from: fromValue.trim(),
        to: toValue.trim(),
        amount: amountValue.trim(),
      }),
    });
    const data = await resp.data;
    return data;
  } finally {
    document.querySelector(".wrapper-ring").remove();
  }
};
