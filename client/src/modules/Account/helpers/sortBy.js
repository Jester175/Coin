export const sortByBalance = (accounts) => {
  return accounts.sort((a, b) => b.balance - a.balance);
};
export const sortByNumber = (accounts) => {
  return accounts.sort((a, b) => b.account - a.account);
};
export const sortByTransactions = (accounts) => {
  return accounts.sort((a, b) => new Date(b.date) - new Date(a.date));
};
