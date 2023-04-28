import axios from "axios";
import { baseUrl } from "../../../services/url.config";
import { Spinner } from "../../../components/Spinner/Spinner";

export const getAccountUser = async () => {
  const spinner = Spinner();
  document.body.append(spinner);
  try {
    const resp = await axios(`${baseUrl}/accounts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${localStorage.getItem("token")}`,
      },
    });
    const data = await resp.data;
    return data
  } catch (error) {
    return {
      data: '',
      error: error.message,
    };
  } finally {
    document.querySelector(".wrapper-ring").remove();
  }
};
