import axios from "axios";
import { baseUrl } from "../../../../services/url.config";
import { Spinner } from "../../../../components/Spinner/Spinner";

export const getPointsBanks = async () => {
  const spinner =  Spinner();
  document.body.append(spinner);
  try {
    const resp = await axios(`${baseUrl}/banks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${localStorage.getItem("token")}`,
      },
    });
    return {
      data: resp.data.payload,
      status: 200,
    };
  } catch (error) {
    return {
      data: [
        { lat: 55.758468, lon: 37.601088 },
        { lat: 55.7, lon: 37.5 },
      ],
      status: error.message,
    };
  }finally{
    document.querySelector('.wrapper-ring').remove();
  }
};
