import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Navbar/Navbar";
import { Account } from "../modules/Account/Account";
import { MyViewModal } from "../UI/MyViewModal/MyViewModal";

export const accountPage = async () => {
  const navbar = Navbar('account');
  const header = Header(navbar);
  const account = await Account();

  document.body.append(header, account);
  document.body.append(MyViewModal());
};
