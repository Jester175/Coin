import axios from "axios";
import { baseUrl } from "../../../services/url.config";
import { Spinner } from "../../Spinner/Spinner";

export const authUser = async (login, password) => {
  const spinner = Spinner();
  document.body.append(spinner);
  try {
    const resp = await axios(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        login: login,
        password: password,
      }),
    });
    return {
      token: resp.data.payload,
      error: resp.data.error,
    };
  } catch (error) {
    return {
      token: "",
      error: error.message,
    };
  } finally {
    document.querySelector(".wrapper-ring").remove();
  }
};
