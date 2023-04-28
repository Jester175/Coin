import { MyModal } from "../../UI/MyModal/MyModal"

export const ModalOops = () => {
  const modal = MyModal("Упс... Попробуйте позже", "error");
  const modalView = document.querySelector(".block");
  modalView.append(modal);
}
