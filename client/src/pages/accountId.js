import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Navbar/Navbar";
import { AccountId } from "../modules/AccountId/AccountId";
import { MyViewModal } from "../UI/MyViewModal/MyViewModal";

export const accountIdPage = async () => {
  const navbar = Navbar();
  const header = Header(navbar);
  const main = await AccountId();

  document.body.append(header, main);
  document.body.append(MyViewModal());
};
