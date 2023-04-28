import { MyViewModal } from "../UI/MyViewModal/MyViewModal";
import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Navbar/Navbar";
import { BanksMap } from "../modules/BanksMap/BanksMap";

export const mapPage = async () => {
  const navbar = Navbar('banks-map');
  const header = Header(navbar);
  const main = await BanksMap();

  document.body.append(header, main);
  document.body.append(MyViewModal());
};
