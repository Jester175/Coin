import { AuthForm } from "../Auth/AuthForm/AuthForm";
import { MyContainer } from "../../UI/MyContainer/MyContainer";
import './auth.scss'

export const Auth = () => {
  const main = document.createElement("main");
  const container = MyContainer();
  const authForm = AuthForm();

  container.setAttribute('id', 'auth-container')

  main.appendChild(container);
  container.appendChild(authForm);
  return main;
};
