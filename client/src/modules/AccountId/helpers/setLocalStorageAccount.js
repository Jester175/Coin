export const setLocalStorageAccount = (value) => {
  const currentAccounts = JSON.parse(localStorage.getItem("otherAccounts"));
  if (!currentAccounts) {
    localStorage.setItem("otherAccounts", JSON.stringify([value]));
  } else {
    localStorage.setItem(
      "otherAccounts",
      JSON.stringify([...currentAccounts.filter((account) => account !== value), value])
    );
  }
};
