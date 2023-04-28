import { MyButton } from "../../UI/MyButton/MyButton";
import { MyInput } from "../../UI/MyInput/MyInput";
import { MyTitle } from "../../UI/MyTitle/MyTitle";
import { MyLabel } from "../../UI/MyLabel/MyLabel";
import { validateField } from "./helpers/validateField";
import { ErrorField } from "./components/errorField/ErrorField";
import { authUser } from "./api/authorization";
import { authStore } from "../../store/authStore";
import { redirect } from "./helpers/redirect";
import "./form.scss";

export const Form = () => {
  const btn = MyButton("Войти", "submit");
  const login = MyInput("Логин");
  const labelLogin = MyLabel("Логин");
  const labelPassword = MyLabel("Пароль");
  const password = MyInput("Пароль");
  const title = MyTitle("Вход в аккаунт");

  const form = document.createElement("from");
  const wrapperInputs = document.createElement("div");
  const wrapperLogin = document.createElement("div");
  const wrapperPassword = document.createElement("div");
  const wrapper = document.createElement("div");

  form.classList.add("form");
  login.setAttribute('id', 'login');
  password.setAttribute('id', 'password');
  wrapper.classList.add("form__wrapper");
  wrapperInputs.classList.add("wrapperInputs");
  wrapperLogin.classList.add("wrapperInput");
  wrapperPassword.classList.add("wrapperInput");
  labelLogin.classList.add("form__label", "form__login");
  labelPassword.classList.add("form__label", "form__password");
  title.classList.add("form__title");
  btn.classList.add("form__btn");

  btn.addEventListener("click", async () => {
    const errorFields = document.querySelectorAll(".errorField");
    login.classList.remove("errorBorder");
    password.classList.remove("errorBorder");
    if (errorFields.length) {
      errorFields.forEach((error) => error.remove());
    }
    const [loginLength, loginSpace] = validateField(login.value);
    const [passwordLength, passwordSpace] = validateField(password.value);

    if (!loginLength) {
      const errorField = ErrorField("Не менее 6 символов");
      login.classList.add("errorBorder");
      wrapperLogin.append(errorField);
    }
    if (!passwordLength) {
      const errorField = ErrorField("Не менее 6 символов");
      password.classList.add("errorBorder");
      wrapperPassword.append(errorField);
    }
    if (!loginSpace) {
      const errorField = ErrorField("Строка не должна содержать пробелов");
      login.classList.add("errorBorder");
      wrapperLogin.append(errorField);
    }
    if (!passwordSpace) {
      const errorField = ErrorField("Строка не должна содержать пробелов");
      password.classList.add("errorBorder");
      wrapperPassword.append(errorField);
    }
    if (loginLength && loginSpace && passwordSpace && passwordLength) {
      const {token, error} = await authUser(login.value, password.value);
      authStore.token = token;
      authStore.error = error;
      redirect();
    }
  });

  wrapperLogin.appendChild(labelLogin);
  wrapperLogin.appendChild(login);
  wrapperPassword.appendChild(labelPassword);
  wrapperPassword.appendChild(password);

  wrapperInputs.appendChild(wrapperLogin);
  wrapperInputs.appendChild(wrapperPassword);

  wrapper.append(title);
  wrapper.append(wrapperInputs);
  wrapper.append(btn);

  form.append(wrapper);

  return form;
};
