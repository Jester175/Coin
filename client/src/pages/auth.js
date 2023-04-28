import { Header } from "../components/Header/Header";
import { Auth } from "../modules/Auth/Auth";
import { MyViewModal } from "../UI/MyViewModal/MyViewModal";

export const authPage = () => {
  const header = Header();
  const main = Auth();

  document.body.appendChild(header);
  document.body.appendChild(main);
  document.body.append(MyViewModal());
};
