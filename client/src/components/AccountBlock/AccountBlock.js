import "./accountblock.scss";

export const AccountBlock = (data) => {
  const block = document.createElement("div");
  const accountNumber = document.createElement("p");
  const balanceWrapper = document.createElement("div");
  const balanceTitle = document.createElement("span");
  const balanceCount = document.createElement("span");

  accountNumber.textContent = "№ " + (data?.payload?.account || "Неизвестно");
  balanceTitle.textContent = "Баланс";
  if (data?.payload?.balance === 0 || data?.payload?.balance)
    balanceCount.textContent = `${data?.payload?.balance} ₽`;
  else balanceCount.textContent = `Неизвестно ₽`;

  balanceCount.classList.add("balanceCount");
  balanceTitle.classList.add("balanceTitle");
  accountNumber.classList.add("accountNumber");
  balanceWrapper.classList.add("balanceWrapper");
  block.classList.add("accountWrapper");

  balanceWrapper.append(balanceTitle, balanceCount);
  block.append(accountNumber, balanceWrapper);

  return block;
};
