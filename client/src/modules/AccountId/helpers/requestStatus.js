import { MyModal } from "../../../UI/MyModal/MyModal";
export const requestStatus = (status) => {
  const modalView = document.querySelector(".block");
  switch (status) {
    case "Invalid account from":
      const modalFrom = MyModal(
        "Не указан адрес счёта списания, или этот счёт не принадлежит нам",
        "error"
      );
      modalView.append(modalFrom);
      return false;
    case "Invalid account to":
      const modalTo = MyModal(
        "Не указан счёт зачисления, или этого счёта не существует",
        "error"
      );
      modalView.append(modalTo);
      return false;
    case "Invalid amount":
      const modalAmount = MyModal(
        "Не указана сумма перевода, или она отрицательная",
        "error"
      );
      modalView.append(modalAmount);
      return false;
    case "Overdraft prevented":
      const modalOverdraft = MyModal(
        "Вы попытались перевести больше денег, чем доступно на счёте списания",
        "error"
      );
      modalView.append(modalOverdraft);
      return false;
    default:
      const modalSuccess = MyModal(
        "Транзакция прошла",
        "success"
      );
      modalView.append(modalSuccess);
      return true;
  }
};
