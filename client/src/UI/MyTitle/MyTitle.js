import './mytitle.scss'

export const MyTitle = (title) => {
  const h1 = document.createElement("h1");
  h1.textContent = title;
  h1.classList.add("h1");
  return h1;
};
