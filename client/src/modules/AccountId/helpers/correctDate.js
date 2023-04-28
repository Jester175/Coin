const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "ноября",
  "декабря",
];

export const correctDate = (value) => {
  const str = new Date(value);
  const day = str.getDate();
  const month = months[str.getMonth()];
  const year = str.getFullYear();

  return `${day} ${month} ${year}`;
};
