import axios from "axios";
import { baseUrl } from "../../../services/url.config";
import { Spinner } from "../../../components/Spinner/Spinner";
import { accountIdStore } from "../../../store/accountIdStore";

export const getTransactionsDetails = async () => {
  const spinner = Spinner();
  document.body.append(spinner);
  try {
    const [param1, param2, id, param3] = window.location.pathname.split("/");
    const resp = await axios(
      `${baseUrl}/account/${accountIdStore.id || id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await resp.data;
    return data;
  } catch (error) {
    return {
      error: error.message,
      payload: {
        balance: 'Неизвестно',
        account: 'Неизвестно',
        transactions: [],
      }
    };
  } finally {
    document.querySelector(".wrapper-ring").remove();
  }
};
