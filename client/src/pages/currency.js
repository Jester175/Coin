import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Navbar/Navbar";
import { Currency } from "../modules/Currency/Currency";
import { MyViewModal } from "../UI/MyViewModal/MyViewModal";

export const currencyPage = async () => {
  const navbar = Navbar('available-currency');
  const header = Header(navbar);
  const main = await Currency();

  document.body.append(header, main);
  document.body.append(MyViewModal());
};
