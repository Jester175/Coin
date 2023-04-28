import axios from "axios";
import { baseUrl } from "../../../services/url.config";
import { Spinner } from "../../../components/Spinner/Spinner";

export const getCurrencyUser = async () => {
  const spinner = Spinner();
  document.body.append(spinner);
  try {
    const resp = await axios(`${baseUrl}/currencies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${localStorage.getItem("token")}`,
      },
    });
    const data = await resp.data.payload;
    const currencies = Object.entries(data);
    return {
      data: currencies,
      error: 200,
    };
  } catch (error) {
    return {
      data: [],
      error: error.message,
    };
  } finally {
    document.querySelector(".wrapper-ring").remove();
  }
};
