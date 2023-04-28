import axios from "axios";
import { baseUrl } from "../../../services/url.config";
import { Spinner } from "../../../components/Spinner/Spinner";

export const createNewAccount = async () => {
  const spinner = Spinner();
  document.body.append(spinner);
  try {
    const resp = await axios(`${baseUrl}/create-account`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${localStorage.getItem("token")}`,
      },
    });
    const data = await resp.data.payload;
    return {
      account: data.account,
      balance: data.balance,
      date: new Date(),
      status: 200,
    };
  } catch (error) {
    return {
      account: "",
      balance: "",
      date: "",
      status: error.message,
    };
  } finally {
    document.querySelector(".wrapper-ring").remove();
  }
};
