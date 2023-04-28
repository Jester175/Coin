import { MyViewModal } from "../UI/MyViewModal/MyViewModal";
import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Navbar/Navbar";
import { Transactions } from "../modules/Transactions/Transactions";

export const transactionsHistoryPage = async () => {
  const navbar = Navbar();
  const header = Header(navbar);
  const main = await Transactions();

  document.body.append(header, main);
  document.body.append(MyViewModal());
};
