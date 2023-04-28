import "./tooltip.scss";

export const Tooltip = (input) => {
  const tooltip = document.createElement("div");
  const accounts = JSON.parse(localStorage.getItem("otherAccounts"));
  if (!accounts) {
    const descr = document.createElement("span");
    descr.textContent = "Пока ничего нет";
    descr.classList.add("tooltip__descr");
    tooltip.append(descr);
  } else {
    accounts.forEach((number) => {
      const account = document.createElement("span");
      account.textContent = number;
      account.classList.add("tooltip__account");
      account.onclick = () => input.value = account.textContent;
      tooltip.append(account);
    });
  }

  tooltip.classList.add("tooltip");

  return tooltip;
};
