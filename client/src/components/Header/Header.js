import { MyContainer } from "../../UI/MyContainer/MyContainer";
import "./header.scss";

export const Header = (nav = '') => {
  const header = document.createElement('header');
  const container = MyContainer();
  const headerContainer = document.createElement('div');
  const logo = document.createElement('p');

  logo.textContent = 'Coin.'

  header.classList.add('header');
  headerContainer.classList.add('header-container')
  logo.classList.add('logo');


  container.append(headerContainer);
  headerContainer.append(logo)
  headerContainer.append(nav);
  header.append(container);

  return header;
}
