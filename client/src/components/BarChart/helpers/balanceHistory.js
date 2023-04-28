const months = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

export const balanceHistory = (transactions = [], current, id) => {
  const arrDate = [];
  const arrMonths = [];
  const currentMounths = [];
  transactions.forEach((transaction) => {
    const obj = {
      month: '',
      amount: 0,
    };
    if (id !== transaction.from) {
      obj.amount = transaction.amount;
      obj.month = months[new Date(transaction.date).getMonth()];
    }
    if (id === transaction.from) {
      obj.amount -= transaction.amount;
      obj.month = months[new Date(transaction.date).getMonth()];
    }
    arrDate.push(obj);

  });
  months.forEach((month) => {
    const obj = {
      month: "",
      amount: 0,
    };
    arrDate.forEach((date) => {
      if (date.month === month) {
        obj.month = month;
        obj.amount += date.amount;
      }
    });
    arrMonths.push(obj);
  });

  const requiredMonths = countCurrentMonths(current);
  requiredMonths.forEach((current) => {
    const obj = {
      month: current,
      amount: 0,
    };
    arrMonths.forEach((month) => {
      if (month.month === current) {
        obj.amount = month.amount
      }
    });
    currentMounths.push(obj);
  });

  return currentMounths;
};

function countCurrentMonths(current) {
  const arrMonths = [];
  let monthNow = new Date().getMonth();
  for (let i = 0; i < current; i++) {
    arrMonths.push(months[monthNow]);
    if (monthNow < 1) {
      monthNow += 12;
    }
    monthNow--;
  }

  return arrMonths;
}
