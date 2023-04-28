import { MyModal } from "../../../UI/MyModal/MyModal";
import { authStore } from "../../../store/authStore";
import { Spinner } from "../../Spinner/Spinner";
import { router } from "../../..";

export const redirect = () => {
  if (authStore.token) {
    document.body.innerHTML = "";
    const spinner = Spinner();
    const modal = MyModal("Вы авторизовались", "success");
    modal.style.position = 'absolute';
    modal.style.top = '20px';
    modal.style.right = '20px';
    document.body.append(modal);
    document.body.append(spinner);
    localStorage.setItem("token", authStore.token.token);
    setTimeout(() => {
      spinner.remove();
      router.navigate("/account");
    }, 3000);
  } else if (authStore.error === "Invalid password") {
    const modal = MyModal("Неверный пароль", "error");
    const modalView = document.querySelector(".block");
    modalView.append(modal);
  } else if (authStore.error === "No such user") {
    const modal = MyModal("Такого пользователя не существует", "error");
    const modalView = document.querySelector(".block");
    modalView.append(modal);
  } else {
    const modal = MyModal("Упс... Попробуйте позже", "error");
    const modalView = document.querySelector(".block");
    modalView.append(modal);
  }
};
