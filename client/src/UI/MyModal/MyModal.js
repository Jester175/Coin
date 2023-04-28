import "./mymodal.scss";

export const MyModal = (message, type = "success") => {
  const modal = document.createElement("div");
  const descr = document.createElement("p");

  descr.textContent = message;

  modal.classList.add(`modal`);
  modal.classList.add(`modal__${type}`);
  descr.classList.add("modal__descr");
  modal.append(descr);

  setTimeout(()=>{
    modal.remove();
  }, 3000)
  return modal;
};
