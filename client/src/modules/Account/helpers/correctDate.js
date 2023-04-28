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
  "октября",
  "ноября",
  "декабря",
];

export const correctDate = (value) => {
  const str = new Date(value);
  const day = str.getDate();
  const month = months[str.getMonth()];
  const year = str.getFullYear();
  const time = str.getHours();
  const min = str.getMinutes();

  return `${day} ${month} ${year} ${time}:${min}`;
};
